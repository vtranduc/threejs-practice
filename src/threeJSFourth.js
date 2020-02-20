import React, {useEffect} from 'react';
import * as THREE from 'three'
import { ADDRCONFIG } from 'dns';

export default function ThreeJSFirst () {

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xababab)
    // scene.background = null
  
    const camera = new THREE.PerspectiveCamera(30,window.innerWidth / window.innerHeight,1, 1000)
    camera.position.z = 5

    let geometry = new THREE.SphereGeometry(0.5,30,30, 0, Math.PI, 0, Math.PI / 2)
    let material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true
    })
    const sphere = new THREE.Mesh(geometry, material)
    // sphere.position.x = 0.9
    scene.add(sphere)
  
    const renderer = new THREE.WebGLRenderer({ alpha: true } )
    renderer.setSize(window.innerWidth, window.innerHeight)
  
    document.body.appendChild(renderer.domElement)

    let ADD = 0.01

    const mainLoop = () => {

      sphere.rotation.x += ADD
      sphere.rotation.y += ADD

      renderer.render(scene, camera)
      requestAnimationFrame(mainLoop)
    }

    mainLoop()
  }, [])

  return (
    <div>
      <h1>Hello there</h1>
    </div>
  )
}