import React, {useEffect} from 'react';
import * as THREE from 'three'

export default function ThreeJSSeventh () {

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xababab)
    // scene.background = null
  
    const camera = new THREE.PerspectiveCamera(30,window.innerWidth / window.innerHeight,1, 1000)
    camera.position.z = 5

    const text = new THREE.TextGeometry({})
  
    const renderer = new THREE.WebGLRenderer({ alpha: true } )
    renderer.setSize(window.innerWidth, window.innerHeight)
  
    document.body.appendChild(renderer.domElement)

    const mainLoop = () => {
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