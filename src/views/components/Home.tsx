import type { FC } from 'hono/jsx'

export const Home: FC = () => {
  return (
    <>


      <script type="importmap" dangerouslySetInnerHTML={{
        __html: `{
          "imports": {
            "three": "https://unpkg.com/three@0.162.0/build/three.module.js",
            "three/addons/": "https://unpkg.com/three@0.162.0/examples/jsm/"
          }
        }`
      }}/>

      <script type="module" dangerouslySetInnerHTML={{
        __html: `
          import * as THREE from "three";
          import { AsciiEffect } from "three/addons/effects/AsciiEffect.js";
          import { TrackballControls } from "three/addons/controls/TrackballControls.js";

          let camera, controls, scene, renderer, effect;
          let sphere, plane;
          const start = Date.now();

          init();

          function init() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            camera = new THREE.PerspectiveCamera(80, width / height, 1, 1000);
            camera.position.set(0, 0, 300); 

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0, 0, 0);

            const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
            pointLight1.position.set(500, 500, 500);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
            pointLight2.position.set(-500, -500, -500);
            scene.add(pointLight2);

            sphere = new THREE.Mesh(
              new THREE.DodecahedronGeometry(100),
              new THREE.MeshPhongMaterial({ flatShading: true })
            );
            scene.add(sphere);

            renderer = new THREE.WebGLRenderer();
            renderer.setSize(width, height);
            renderer.setAnimationLoop(animate);

            effect = new AsciiEffect(renderer, " .:-+*=%?#", {
              invert: true,
              resolution: 0.20
            });
            effect.setSize(width, height);
            effect.domElement.style.color = "white";
            effect.domElement.style.backgroundColor = "black";
            effect.domElement.style.fontSize = "0.5em";
            effect.domElement.style.display = "block";
            effect.domElement.style.margin = "auto";
            effect.domElement.classList.add("ascii-effect");

            document.body.appendChild(effect.domElement);

            controls = new TrackballControls(camera, effect.domElement);
            controls.noZoom = true;
            controls.noPan = true;
            controls.rotateSpeed = 0.02;

            effect.domElement.addEventListener("contextmenu", (e) =>
              e.stopPropagation()
            );
          }

          function animate() {
            const timer = Date.now() - start;

            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            sphere.rotation.z += 0.01;

            controls.update();

            effect.render(scene, camera);
          }
        `
      }}/>
      <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] text-white text-lg font-[500]">IDKZ</div>
    </>
  )
}
