import * as CANNON from 'cannon-es';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { CryptoSpawnRate } from './ObjectSpawner';
import { WorldSceneObject, WorldSceneSystem } from './WorldSystem';

export interface d6Options {
  system: WorldSceneSystem;
  position: THREE.Vector3;
  mass?: number;
  color?: number;
}

export class CoalObject implements WorldSceneObject {


  mesh?: THREE.Mesh;
  body?: CANNON.Body;

  constructor(options: d6Options) {
    const loader = new GLTFLoader();
    loader.load(
      "../Models/DiceD6.obj",
      (gltf) => {
        const geometry = (gltf.scene.getObjectByName('D6') as THREE.Mesh).geometry;
        const material = new THREE.MeshBasicMaterial();
        if (geometry !== undefined) {
          this.mesh = new THREE.Mesh(geometry, material);
        //   this.mesh.scale.set(
        //     Math.random() * 0.1 + 0.3,
        //     Math.random() * 0.1 + 0.3,
        //     Math.random() * 0.1 + 0.3,
        //   );
          const box = new THREE.Box3().setFromObject(this.mesh);
          const size = box.getSize(new THREE.Vector3());
          this.body = new CANNON.Body({
            mass: 1,
            shape: new CANNON.Box(new CANNON.Vec3(
              size.x / 2,
              size.y / 2,
              size.z / 2,
            )),
          });
          this.body.position.set(
            0,0,0
          );
          this.body.quaternion.setFromEuler(
            Math.random() * 2 * Math.PI,
            Math.random() * 2 * Math.PI,
            Math.random() * 2 * Math.PI,
          );

          options.system.add(this);
          this.syncMeshAndBody();
        }
      },
      undefined,
      (error) => { console.error(error); },
    );
  }

  syncMeshAndBody(): void {
    if (this.mesh !== undefined && this.body !== undefined) {
      this.mesh.position.set(
        this.body.position.x,
        this.body.position.y,
        this.body.position.z,
      );
      this.mesh.quaternion.set(
        this.body.quaternion.x,
        this.body.quaternion.y,
        this.body.quaternion.z,
        this.body.quaternion.w,
      );
    }
  }
}