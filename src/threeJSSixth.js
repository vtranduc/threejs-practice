import React, {useEffect} from 'react';
import * as THREE from 'three'

export default function ThreeJSSixth () {

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xababab)
    // scene.background = null
  
    const camera = new THREE.PerspectiveCamera(30,window.innerWidth / window.innerHeight,1, 1000)
    camera.position.z = 5

    let geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0.3,0,0))
    geometry.vertices.push(new THREE.Vector3(0,0.5,0))
    geometry.vertices.push(new THREE.Vector3(0,0,0.2))
    geometry.vertices.push(new THREE.Vector3(0.1,0.2,-0.2))
    geometry.faces.push(new THREE.Face3(0,1,2))
    geometry.faces.push(new THREE.Face3(1,2,3))
    geometry.faces.push(new THREE.Face3(0,2,3))
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: true
    })
    const shape = new THREE.Mesh(geometry, material)
    scene.add(shape)
  
    const renderer = new THREE.WebGLRenderer({ alpha: true } )
    renderer.setSize(window.innerWidth, window.innerHeight)
  
    document.body.appendChild(renderer.domElement)

    let ADD = 0.1

    const mainLoop = () => {
      // shape.rotation.x += ADD
      // shape.rotation.y += ADD
      shape.geometry.vertices[1].y -= -0.002
      shape.geometry.verticesNeedUpdate = true

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