import { Group } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export interface GLTFResult extends GLTF {
  asset: {
    generator: string;
    version: string;
  };
  extensionsUsed: string[];
  extensionsRequired: string[];
  scene: Group;
  scenes: Group[];
  nodes: {
    mesh: number;
    name: string;
  }[];
  materials: {
    doubleSided: boolean;
    name: string;
    normalTexture: {
      extensions: {
        KHR_texture_transform: {
          offset: [number, number];
          scale: [number, number];
        };
      };
      index: number;
      scale: number;
    };
    occlusionTexture: {
      index: number;
    };
    pbrMetallicRoughness: {
      baseColorFactor: [number, number, number, number];
      metallicFactor: number;
      roughnessFactor: number;
    };
  }[];
  meshes: {
    name: string;
    primitives: {
      attributes: {
        POSITION: number;
        NORMAL: number;
        TEXCOORD_0: number;
      };
      indices: number;
      material: number;
    }[];
  }[];
  textures: {
    sampler: number;
    source: number;
  }[];
  images: {
    name: string;
    uri: string;
  }[];
  accessors: {
    bufferView: number;
    componentType: number;
    count: number;
    max: [number, number, number];
    min: [number, number, number];
    type: string;
  }[];
  bufferViews: {
    buffer: number;
    byteLength: number;
    byteOffset: number;
  }[];
  samplers: {
    magFilter: number;
    minFilter: number;
  }[];
  buffers: {
    uri: string;
    byteLength: number;
  }[];
}
