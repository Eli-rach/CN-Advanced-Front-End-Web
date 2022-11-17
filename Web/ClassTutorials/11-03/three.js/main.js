import * as THREE from "three"
import { CubeReflectionMapping } from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.01,
    1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient)

const directional = new THREE.DirectionalLight(0xffffff, .9);
directional.position.x = 7;
directional.position.y = 13;
scene.add(directional);

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMesh = new THREE.MeshPhysicalMaterial({
    color: 0x00ff00,
    roughness: 0.5,
    metalness: 0.5
});
const cube = new THREE.Mesh(cubeGeometry, cubeMesh);
scene.add(cube); 

camera.position.z = 5;


function animate() {
    cube.rotation.x +=0.01;
    cube.rotation.y +=0.01;
    requestAnimationFrame(animate);
    renderer.render(scene,camera)
}
animate();
