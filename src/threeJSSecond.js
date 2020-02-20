import React, {useEffect} from 'react';
import { Canvas } from "react-three-fiber";
import * as THREE from 'three'

export default function ThreeJSSecond () {

  const scene = new THREE.Scene()
  const group = new THREE.Group()
  const geo = new THREE.BoxBufferGeometry(2,2,2);
  const mat = new THREE.MeshStandardMaterial({color: 0x1fbeca});
  const mesh = new THREE.Mesh(geo, mat);
  group.position.set(0,0.1,0.1);
  group.add(mesh);
  scene.add(group);
  
  return (
    <Canvas>
    <></>
      <group position={[0,0.1,0.1]}>
        <mesh>
          <boxBufferGeometry attach="geometry" args={[0.047, 0.5, 0.29]} />
          <meshStandardMaterial attach="material" color={0xf95b3c} />
        </mesh>
      </group>
    </Canvas>
  )
}