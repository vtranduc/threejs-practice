import React from 'react'
import * as THREE from 'three'

export default function Chapter46 () {

  let scene, camera, renderer, cube, sphere, directionalLightUp, directionalLightDown
  let ADD = 0.02

  let createGeometry = () => {
    let texture = new THREE.TextureLoader().load('518320.jpg')
    // let material = new THREE.MeshBasicMaterial({map: texture})
    let material = new THREE.MeshPhongMaterial({map: texture})
    let geometry = new THREE.BoxGeometry(4,4,4)
    cube = new THREE.Mesh(geometry, material)

    //------SPhere--------------
    geometry = new THREE.SphereGeometry(4,30,30)
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(-7,2,-2)
    //--------------------------
    directionalLightUp = new THREE.DirectionalLight(0xffffff)
    directionalLightDown = new THREE.DirectionalLight(0xabcdef)
    directionalLightDown.position.y = -1

    scene.add(cube)
    scene.add(sphere)
    scene.add(directionalLightDown)
    scene.add(directionalLightUp)
    

  }

  function mainLoop () {
    cube.rotation.x += ADD
    cube.rotation.y += ADD

    sphere.rotation.x += ADD

    renderer.render(scene, camera)
    requestAnimationFrame(mainLoop)
  }

  function init () {
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xababab)
    camera = new THREE.PerspectiveCamera(30,window.innerWidth / window.innerHeight,1, 1000)
    camera.position.z = 50
    renderer = new THREE.WebGLRenderer({alpha: true})
    renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.appendChild(renderer.domElement)

    createGeometry()
    mainLoop()
  }

  init()

  return <></>
}