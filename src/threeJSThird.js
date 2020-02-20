import React, {useEffect} from 'react';
import * as THREE from 'three'

export default function ThreeJSFirst () {

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xababab)
    // scene.background = null
  
    const camera = new THREE.PerspectiveCamera(30,window.innerWidth / window.innerHeight,1, 1000)
    camera.position.z = 5

    // createCube(scene)
    let geometry = new THREE.BoxGeometry(1,1,1)
    let material = new THREE.MeshBasicMaterial({color: 0x00a1cb})
    const cube = new THREE.Mesh(geometry, material)
    cube.position.x = 0.9
    scene.add(cube)
  
    const renderer = new THREE.WebGLRenderer({ alpha: true } )
    renderer.setSize(window.innerWidth, window.innerHeight)
  
    document.body.appendChild(renderer.domElement)

    let ADD = 0.01

    const mainLoop = () => {

      cube.position.x += ADD
      cube.rotation.z -= ADD
      if (cube.position.x <= -1 || cube.position.x >= 1) ADD *= -1

      renderer.render(scene, camera)
      requestAnimationFrame(mainLoop)
    }

    mainLoop()
  }, [])

  // function createCube (scene) {
  //   let geometry = new THREE.BoxGeometry(1,1,1)
  //   let material = new THREE.MeshBasicMaterial({color: 0x00a1cb})
  //   const cube = new THREE.Mesh(geometry, material)
  //   cube.position.x = 0.9
  //   scene.add(cube)
  // }

  return (
    <div>
      <h1>Hello there</h1>
    </div>
  )
}