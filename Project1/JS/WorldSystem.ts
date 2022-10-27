import * as THREE from "three"
import * as CANNON from "cannon-es"

export interface WorldSystemOptions {
    gravity: number;
    cameraFov: number;
    cameraNear: number;
    cameraFar: number;
    cameraPos: THREE.Vector3;
    directionalLightIntensity: number;
    directionalLightPosition: THREE.Vector3;
    ambientLightIntensity: number;
  }

  