import React, {useEffect} from 'react';
import * as THREE from 'three'

export default function ThreeJSFirst () {

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xababab)
  
    const camera = new THREE.PerspectiveCamera(30,window.innerWidth / window.innerHeight,1, 1000)
    camera.position.z = 5
  
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
  
    document.body.appendChild(renderer.domElement)

    const mainLoop = () => {
      console.log('hello world')
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