import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const width = window.innerWidth;
const height = window.innerHeight;

// initialisation de la scène
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 10);
camera.position.z = 1;

// initialisation du rendu
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

//déplacement dans l'espace
const controls = new OrbitControls(camera, renderer.domElement);

// settings squares
let dim_square = 1;
let position_x = 0;
let position_y = 0;
let position_z = 0;
let current_dim = dim_square;
let offset_x = 0; 


for (let i = 0; i < 15; i++) {
  current_dim = current_dim / 2;

  // Création square
  const geometry = new THREE.BoxGeometry(current_dim, current_dim, current_dim);
  const material = new THREE.MeshMatcapMaterial({ color: 0xfe7743 });
  const mesh = new THREE.Mesh(geometry, material);


  //stroke square
  const outlineGeometry = new THREE.EdgesGeometry(geometry);
  const outlineMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    linewidth: 30,
  });
  const outline = new THREE.LineSegments(outlineGeometry, outlineMaterial);


  mesh.position.x = position_x + offset_x + current_dim / 2;
  mesh.position.y = position_y + current_dim / 2;
  mesh.position.z = position_z + current_dim / 2;


  offset_x += current_dim;

  console.log(`position x ${mesh.position.x}`);
  console.log(`position y ${mesh.position.y}`);
  console.log(`position z ${mesh.position.z}`);

  mesh.add(outline);
  scene.add(mesh);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
