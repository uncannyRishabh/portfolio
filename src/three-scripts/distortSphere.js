import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

export const distortSphere = () => {
    const canvas = document.createElement('canvas')
    const renderer = new THREE.WebGLRenderer({canvas, alpha: true})
    renderer.setScissorTest(true)


    const makeScene = (elem) => {
        const scene = new THREE.Scene();
    
        const fov = 45;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 5;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 1, 2);
        camera.lookAt(0, 0, 0);
        scene.add(camera);
    
        const controls = new TrackballControls(camera, elem);
        controls.noZoom = true;
        controls.noPan = true;
    
        {
          const color = 0xFFFFFF;
          const intensity = 1;
          const light = new THREE.DirectionalLight(color, intensity);
          light.position.set(-1, 2, 4);
          scene.add(light);
        }
    
        return {scene, camera, controls};
      }

    const createBox = (elem) => {
        const {scene, camera, controls} = makeScene(elem);
        const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({color: 'red'});
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        return (time, rect) => {
          mesh.rotation.y = time * .1;
          camera.aspect = rect.width / rect.height;
          camera.updateProjectionMatrix();
          controls.handleResize();
          controls.update();
          renderer.render(scene, camera);
        };
      }

      const createSphere = (elem) => {
        const {scene, camera, controls} = makeScene(elem);
        const geometry = new THREE.SphereBufferGeometry(120, 60, 60);
        const material = new THREE.MeshStandardMaterial({
          emissive: 0xbd4be3,
          emissiveIntensity: 0.5,
          roughness: 0.61,
          metalness: 0.21,
          side: THREE.FrontSide,
          wireframe: false });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        return (time, rect) => {
          mesh.rotation.y = time * .1;
          camera.aspect = rect.width / rect.height;
          camera.updateProjectionMatrix();
          controls.handleResize();
          controls.update();
          renderer.render(scene, camera);
        };
      }
    
      const createBubble = (elem) => {
        // for(let i = 0; i < bubbleGeometry.vertices.length; i++) {
        //   let vector = bubbleGeometry.vertices[i];
        //   vector.original = vector.clone();  
        // }
        const {scene, camera, controls} = makeScene(elem);
        const bubbleGeometry = new THREE.SphereGeometry( 120, 80, 80 );
        const bubbleMaterial = new THREE.MeshStandardMaterial({
          emissive: 0xbd4be3,
          emissiveIntensity: 0.5,
          roughness: 0.61,
          metalness: 0.21,
          side: THREE.FrontSide,
          wireframe: false });
        const mesh = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
        mesh.castShadow = true;
        mesh.receiveShadow = false;
        scene.add(mesh);
        return (time, rect) => {
          mesh.rotation.y = time * .1;
          camera.aspect = rect.width / rect.height;
          camera.updateProjectionMatrix();
          controls.handleResize();
          controls.update();
          renderer.render(scene, camera);
        };
      }

    let sceneElements = []
    const addScene = (elem, fn) => {
        const ctx = document.createElement('canvas').getContext('2d');
        if(!elem.hasChildNodes()){
        elem.appendChild(ctx.canvas);
        sceneElements=[elem, ctx, fn]
        }
    }

    const elem = document.querySelector('[data-diagram]')
    console.log(elem)
    const init = () => {
        const sceneRenderFunction = createSphere(elem);
        addScene(elem, sceneRenderFunction);
    }

    init()
    
    const render = (time) => {
        time *= 0.01;
    
          // get the viewport relative position opf this element
          const rect = elem.getBoundingClientRect();
          const {left, right, top, bottom, width, height} = rect;
          const rendererCanvas = renderer.domElement;
    
          const isOffscreen =
              bottom < 0 ||
              top > window.innerHeight ||
              right < 0 ||
              left > window.innerWidth;
    
          if (!isOffscreen) {
            // make sure the renderer's canvas is big enough
            if (rendererCanvas.width < width || rendererCanvas.height < height) {
              renderer.setSize(width, height, false);
            }
    
            // make sure the canvas for this area is the same size as the area
            // if (sceneElements[1].canvas.width !== width || sceneElements[1].canvas.height !== height) {
            //     sceneElements[1].canvas.width = width;
            //     sceneElements[1].canvas.height = height;
            // }
    
            renderer.setScissor(0, 0, width, height);
            renderer.setViewport(0, 0, width, height);
    
            sceneElements[2](time, rect);
    
            // copy the rendered scene to this element's canvas
            sceneElements[1].globalCompositeOperation = 'copy';
            sceneElements[1].drawImage(
                rendererCanvas,
                0, rendererCanvas.height - height, width, height,  // src rect
                0, 0, width, height);                              // dst rect
          }
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
