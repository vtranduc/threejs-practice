import React from 'react'
import * as THREE from 'three'

export default function Chapter49CastShadow () {

  let scene, camera, renderer,geometry,  material, cube1, cube2, plane, sphere, directionalLightUp, directionalLightDown, target

  function addStuffs () {
    material = new THREE.MeshBasicMaterial({color: 0x00a1cb})
    geometry = new THREE.BoxGeometry(2,2,2)

    cube1 = new THREE.Mesh(geometry, material)
    cube2 = new THREE.Mesh(geometry, material)

    geometry = new THREE.PlaneGeometry( 20, 10, 90 );
    material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    plane = new THREE.Mesh(geometry, material)

    plane.rotation.x = Math.PI /2
    plane.position.y = -1.5

    cube1.position.x = 2
    cube2.position.x = -2

    scene.add(cube1)
    scene.add(cube2)

    scene.add(plane)

    // ------ SHADOW --------------

    

  }
  
  function mainLoop() {
    renderer.render(scene, camera)
    requestAnimationFrame(mainLoop)
  }

  function init () {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 1, 1000)
    renderer = new THREE.WebGLRenderer({alpha: true})

    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap

    scene.background = new THREE.Color(0xababab)
    camera.position.z = 10
    camera.position.y = 2
    renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.appendChild(renderer.domElement)

    addStuffs()
    mainLoop()
  }

  init()

  return <></>
}