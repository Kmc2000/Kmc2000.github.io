import * as THREE from 'three';
let renderer = null;
let scene = null;
let camera = null;
let cloud_particles = [];

const star_count = 30;
const cloud_count = 7;//15;

let star_acceleration = 0.0005;
const star_geometry = new THREE.BufferGeometry();
star_geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0]), 3));
const star_material = new THREE.PointsMaterial({ size: 1, color: 0xFFFFFF });

//Set up the scene with its clouds.
function setup_scene() {
  const animation_root = document.firstChild;
  animation_root.style = "background: transparent !important";
  const light = new THREE.AmbientLight(0x404040, 25); // soft white light
  scene.add(light);

  renderer = new THREE.WebGLRenderer({
      powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth , window.innerHeight , false);

  scene.fog = new THREE.FogExp2(0x001220, 0.001);
  renderer.setClearColor(scene.fog.color);
  document.body.appendChild(renderer.domElement);
  renderer.domElement.className += "render-pane";
  let loader = new THREE.TextureLoader();
  const nebula_colours = [0xf7770f, 0xf3424f, 0xcd287a, 0x8a3593, 0x283e91];

  const textures = Promise.all([loader.load('smoke1.png'), loader.load('smoke2.png'), loader.load('smoke3.png')], (resolve, reject) => {
      resolve(texture);
  }).then(result => {
      let cloud_geometry = new THREE.PlaneGeometry(800, 800);
      let cloud_textures = [];
      //Load all the textures for our clouds in one go.
      result.forEach(texture => {
          cloud_textures.push(new THREE.MeshLambertMaterial({
              map: texture,
              transparent: true
          }));
      });
      //And generate some randomised clouds...
      for (let p = 0; p < cloud_count; p++) {
          let r = Math.ceil(Math.random() * cloud_textures.length-1);
          let cloud = new THREE.Mesh(cloud_geometry, cloud_textures[r]);
          cloud.position.set(
              Math.random() * 600 - 400,
              800,
              Math.random() * 300 - 500
          );
          r = Math.ceil(Math.random() * (nebula_colours.length-1));
          cloud.material.color.set(Number(nebula_colours[r]));
          cloud.rotation.x = 1.16;
          cloud.rotation.y = -0.12;
          cloud.rotation.z = Math.random() * 2 * Math.PI;
          cloud.material.opacity = 0.55;
          cloud_particles.push(cloud);
          scene.add(cloud);
      }
  });
  animate();
}

//Generate a star for the scene...
function generate_star() {
  const star = new THREE.Points(star_geometry, star_material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));
  star.position.set(x, y, z);
  star.velocity = 0;
  star.acceleration = star_acceleration;
  scene.add(star);
  stars.push(star);
}

//Clamp a number to between min and max.
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
//Array of all the stars in the sky.
const stars = [];

function animate() {
  requestAnimationFrame(animate);

  cloud_particles.forEach(cloud => { cloud.rotation.z -= 0.001; });

  stars.forEach(p => {
      p.velocity += star_acceleration;
      p.translateY(-p.velocity);
      //Wrap stars around if they fall off the screen...
      if (p.position.y < -100) {
          p.position.y = 200;
          p.velocity = 0;
      }
  });

  renderer.render(scene, camera);
}
//Handler for resizing the window.
function handle_resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth , window.innerHeight , false);
}
window.addEventListener("resize", handle_resize, false);

/**
 * Initialise the animated scene and generate a set number of random stars.
 */
export function init_animation() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  //Rotate the camera to get the right perspective...
  camera.rotation.x = 1.16;
  camera.rotation.y = -0.12;
  camera.rotation.z = 0.27;
  setup_scene();
  Array(star_count).fill().forEach(generate_star);
}