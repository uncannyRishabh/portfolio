import * as THREE from 'three'

export const init = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, 2, 0.1, 1000 );
    const elem = document.querySelector('[data-diagram]')
    
    const renderer = new THREE.WebGLRenderer()
    renderer.setClearAlpha(0)

    if(!elem.hasChildNodes()){
        elem.appendChild(renderer.domElement);
    }

    var geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
    var material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    scene.add( mesh );

    camera.position.z = 10;

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        // console.log('width : '+width+' height : '+height)

        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function animate() {
        requestAnimationFrame( animate );
        
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
    animate();


}