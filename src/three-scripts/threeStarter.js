import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import * as THREE from 'three'

export const init = () => {
    //SCENE CAMERA RENDERER
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, 2, 0.1, 1000 );
    const elem = document.querySelector('[data-diagram]')
    
    const renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setClearAlpha(0)

    if(!elem.hasChildNodes()){
        elem.appendChild(renderer.domElement);
    }

    //SHADERS 
    const noise = `
    // GLSL textureless classic 3D noise "cnoise",
    // with an RSL-style periodic variant "pnoise".
    // Author:  Stefan Gustavson (stefan.gustavson@liu.se)
    // Version: 2011-10-11
    //
    // Many thanks to Ian McEwan of Ashima Arts for the
    // ideas for permutation and gradient selection.
    //
    // Copyright (c) 2011 Stefan Gustavson. All rights reserved.
    // Distributed under the MIT license. See LICENSE file.
    // https://github.com/ashima/webgl-noise
    //

    vec3 mod289(vec3 x)
    {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x)
    {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x)
    {
        return mod289(((x*34.0)+1.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r)
    {
        return 1.79284291400159 - 0.85373472095314 * r;
    }

    vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
    }

    // Classic Perlin noise, periodic variant
    float pnoise(vec3 P, vec3 rep)
    {
        vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
    }
    `;

    const vertexShader = `  
    varying vec3 vNormal;
    
    uniform float uTime;
    uniform float uSpeed;
    uniform float uNoiseDensity;
    uniform float uNoiseStrength;
    
    ${noise}
    
    void main() {
        float t = uTime * uSpeed;
        float distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;

        vec3 pos = position + (normal * distortion);
        
        vNormal = normal;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
    }  
    `;

    const fragmentShader = `
    varying vec3 vNormal;
    
    uniform float uTime;
    
    void main() {
        vec3 color = vec3(1.0);
        
        gl_FragColor = vec4(mix(vec3(0), vNormal, 1.0), 1.0);
    }
    `;

//----------------------------------------------------------------------------------------------

    //GEOMETRY MATERIAL MESH
    const geometry = new THREE.IcosahedronBufferGeometry(3, 64);

    // ambientLightColor: { value: null },
    //          lightProbe: { value: null },
    //          directionalLights: { value: null },
    //          spotLights: { value: null },
    //          rectAreaLights: { value: null },
    //          pointLights: { value: null },
    //          hemisphereLights: { value: null },
    //          directionalShadowMap: { value: null },
    //          directionalShadowMatrix: { value: null },
    //          spotShadowMap: { value: null },
    //          spotShadowMatrix: { value: null },
    //          pointShadowMap: { value: null },
    //          pointShadowMatrix: { value: null },

    // let standard = THREE.ShaderLib['standard'];
    // let u1 = THREE.UniformsUtils.clone(standard.uniforms)
    let u2 = {
        uTime: { value: 0 },
        uSpeed: { value: 0.35 },
        uNoiseDensity: { value: 2 },
        uNoiseStrength: { value: 0.2 },
    }
    const uniforms = THREE.UniformsUtils.merge( 
        [ THREE.UniformsLib[ "lights" ], u2 ] );

    const material = new THREE.ShaderMaterial({
        vertexShader : vertexShader,
        fragmentShader : fragmentShader,
        uniforms: uniforms ,
        wireframe: false,
        lights: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add( mesh );

    mesh.castShadow = true
    mesh.receiveShadow = true
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap

    // const ambientLight = new THREE.AmbientLight( 0xffffff )
    // scene.add(ambientLight)

    const light = new THREE.PointLight( 0xff0000, 2.0, 600 )
    light.position.set( 0, 0, 6 )
    scene.add( light )

    const controls = new TrackballControls(camera, renderer.domElement)
    controls.noZoom = true
    controls.noPan = true
    scene.add(controls)

    camera.position.z = 10;

    // console.log(geometry);

    //RESPONSIVENESS
    const resizeRendererToDisplaySize = () => {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
    }

    const clock = new THREE.Clock();
    const animate = () => {
        requestAnimationFrame( animate );
        controls.update()

        mesh.material.uniforms.uTime.value = clock.getElapsedTime();

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        mesh.position.y = Math.sin(performance.now()/800) * 0.3
        // mesh.rotation.x += 0.002;
        // mesh.rotation.y += 0.0015;
        renderer.render( scene, camera );
    }
    animate();

}