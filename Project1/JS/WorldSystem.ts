import * as CANNON from 'cannon-es';
import * as THREE from 'three';

export interface WorldSceneObject {
  mesh?: THREE.Mesh;
  meshes?: THREE.Mesh[];
  body?: CANNON.Body;
  bodies?: CANNON.Body[];
  syncMeshAndBody(): void;
}

export interface WorldSceneSystemOptions {
  gravity: number;
  cameraFov: number;
  cameraNear: number;
  cameraFar: number;
  cameraPos: THREE.Vector3;
  directionalLightIntensity: number;
  directionalLightPosition: THREE.Vector3;
  ambientLightIntensity: number;
}

export class WorldSceneSystem {
  world: CANNON.World;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  
  constructor(options: WorldSceneSystemOptions) {
    // init CANNON world
    this.world = new CANNON.World();
    this.world.gravity.set(0, options.gravity, 0);

    // init THREE scene and camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      options.cameraFov,
      window.innerWidth / window.innerHeight,
      options.cameraNear,
      options.cameraFar,
    );
    this.camera.position.copy(options.cameraPos);
    this.camera.lookAt(0, 0, 0);

    // init THREE renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    // setup THREE lighting system
    const directionalLight = new THREE.DirectionalLight(
      0xffffff, options.directionalLightIntensity
    );
    directionalLight.position.copy(options.directionalLightPosition);
    this.scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(
      0xffffff, options.ambientLightIntensity
    );
    this.scene.add(ambientLight);
  }

  render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  step(): void {
    this.world.step(1 / 60);
  }

  add(object: WorldSceneObject): void {
    if (object.mesh !== undefined) {
      this.scene.add(object.mesh);
    }
    if (object.body !== undefined) {
      this.world.addBody(object.body);
    }
    if (object.meshes !== undefined) {
      for (const mesh of object.meshes) {
        this.scene.add(mesh);
      }
    }
    if (object.bodies !== undefined) {
      for (const body of object.bodies) {
        this.world.addBody(body);
      }
    }
  }

  remove(object: WorldSceneObject): void {
    if (object.mesh !== undefined) {
      this.scene.remove(object.mesh);
    }
    if (object.body !== undefined) {
      this.world.removeBody(object.body);
    }
    if (object.meshes !== undefined) {
      for (const mesh of object.meshes) {
        this.scene.remove(mesh);
      }
    }
    if (object.bodies !== undefined) {
      for (const body of object.bodies) {
        this.world.removeBody(body);
      }
    }
  }

  resize():void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}