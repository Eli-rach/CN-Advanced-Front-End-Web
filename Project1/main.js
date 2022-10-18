import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

import * as CANNON from 'cannon-es'
import { Raycaster, ShaderMaterial, WireframeGeometry } from 'three';
import { Material } from 'cannon-es';

// const D6 = new URL('./Models/DiceD6.obj', import.meta.url);
const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;  

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const world = new CANNON.World({
  gravity: new CANNON.Vec3(0,-9.81,0)
});

const camera = new THREE.PerspectiveCamera(
  45,
  window.outerWidth / window.outerHeight,
  0.1,
  1000
);

const orbit = new OrbitControls(camera, renderer.domElement)
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

camera.position.set(-10, 30, 30);
orbit.update();





const planeGeometry = new THREE.PlaneGeometry(30,30);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0xFFFFFF,
  side: THREE.DoubleSide,
  // wireframe: true
});
const groundMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(groundMesh);

groundMesh.position.y = -5;
groundMesh.receiveShadow = true;








const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);


const spotLight = new THREE.SpotLight(0xFFFFFF);
scene.add(spotLight);
spotLight.position.set(-100, 100, 0);
spotLight.castShadow = true;
spotLight.angle = 0.2

const sLightHelper = new THREE.SpotLightHelper(spotLight);
scene. add(sLightHelper);


const boxGeo = new THREE.BoxGeometry(2, 2, 2);
const boxMat = new THREE.MeshBasicMaterial({
  color: 0x00FF00,
  wireframe: true
});
const boxMesh = new THREE.Mesh(boxGeo, boxMat);
scene.add(boxMesh);

const assetLoader = new GLTFLoader();
const dice = assetLoader.load("./Models/DiceD6.gltf", (gtlf) =>{
  const diceID = gtlf.scene.id
  gtlf.castShadow = true;
  gtlf.scene.scale.set(.25, .25, .25);
  // const size = box.getSize(new THREE.Vector3());
  gtlf.scene.name = "D6";
  gtlf.scene.body = new CANNON.Body({
    mass: 1,
    shape: new CANNON.Box(new CANNON.Vec3(size.x/2, size.y/2, size.z/2))
  })
  scene.add(gtlf.scene)
  world.add(gtlf.scene)


});










const gui = new dat.GUI();

const options = {

  angle: 0.02,
  penumbra: 0,
  intensity:1
};



gui.add(options, 'angle', 0, 1);
gui.add(options, 'penumbra', 0, 1);
gui.add(options, 'intensity', 0, 1);



const groundPhysMat = new CANNON.Material();
const groundBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(15,15,0.1)),
  type: CANNON.Body.STATIC,
  material:groundPhysMat
});



world.addBody(groundBody);
groundBody.position.y = -5;
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)

const boxPhysMat = new CANNON.Material();
const boxBody = new CANNON.Body({
  mass:1,
  shape: new CANNON.Box(new CANNON.Vec3(1,1,1)),
  position: new CANNON.Vec3(0,10,5),
  material:boxPhysMat
});
world.addBody(boxBody);

let velocity1 = Math.random() *5
let velocity2 = Math.random() *5
let velocity3 = Math.random() *5

boxBody.angularVelocity.set(velocity1,velocity2,velocity3);
console.log(velocity1 + ", " + velocity2 + ", " + velocity3)







// world.addBody(boxBody);
const dice_ground = new CANNON.ContactMaterial(groundPhysMat, boxPhysMat, { restitution: 0.45 })

world.addContactMaterial(dice_ground);
const timeStep = 1/60


function animate(time) {
 world.step(timeStep);
  spotLight.angle = options.angle;
  spotLight.penumbra = options.penumbra;
  spotLight.intensity = options.intensity;
  sLightHelper.update();

  groundMesh.position.copy(groundBody.position);
  groundMesh.quaternion.copy(groundBody.quaternion);

  boxMesh.position.copy(boxBody.position);
  boxMesh.quaternion.copy(boxBody.quaternion);




  renderer.render(scene, camera);

  // console.log(boxMesh.quaternion)
  
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})