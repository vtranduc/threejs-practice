import React from 'react'
import * as THREE from 'three'

export default function Chapter48Panorama () {

  let scene, camera, renderer, cube, sphere, directionalLightUp, directionalLightDown, target
  let ADD = 0.005
  let theta = 0;

  let createGeometry = () => {
    let texture = new THREE.TextureLoader().load('518320.jpg')
    // let material = new THREE.MeshBasicMaterial({map: texture})

    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(2,4)

    let material = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide})
    let geometry = new THREE.BoxGeometry(4,4,4)
    cube = new THREE.Mesh(geometry, material)

    //------SPhere--------------
    geometry = new THREE.SphereGeometry(10,100,100)
    sphere = new THREE.Mesh(geometry, material);
    // sphere.position.set(-7,2,-2)
    //--------------------------
    directionalLightUp = new THREE.DirectionalLight(0xffffff)
    directionalLightDown = new THREE.DirectionalLight(0xabcdef)
    directionalLightDown.position.y = -1

    // scene.add(cube)
    scene.add(sphere)
    // scene.add(directionalLightDown)
    // scene.add(directionalLightUp)
    

  }

  function mainLoop () {
    // cube.rotation.x += ADD
    // cube.rotation.y += ADD

    // sphere.rotation.y += ADD
    target.position.x = 10 * Math.sin(theta)
    target.position.z = 10 * Math.cos(theta)
    theta += ADD

    camera.lookAt(target.position)
    renderer.render(scene, camera)
    requestAnimationFrame(mainLoop)
  }

  function init () {
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xababab)
    camera = new THREE.PerspectiveCamera(120,window.innerWidth / window.innerHeight,1, 1000)
    target = new THREE.Object3D()
    camera.lookAt(target.position)
    // camera.position.z = 0
    renderer = new THREE.WebGLRenderer({alpha: true})
    renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.appendChild(renderer.domElement)

    createGeometry()
    mainLoop()
  }

  init()

  return <></>
}