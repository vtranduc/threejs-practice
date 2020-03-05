import React, {useEffect} from 'react';
import * as THREE from 'three'
// import OrbitControls from 'three-orbitcontrols'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

export default function ThreeJSFirst () {

  let scene, camera, renderer;

  function init () {

    console.log('------------- init -----------------')

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 45, 30000)
    camera.position.set(-900, -200, -900)

    renderer = new THREE.WebGLRenderer({antialias:true})
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', render)
    controls.minDistance = 500
    controls.maxDistance = 1500

    function render () {
      renderer.render(scene, camera)
    }

    let materialArray = []
    let texture_ft = new THREE.TextureLoader().load('arid2_ft,jpg')
    let texture_bk = new THREE.TextureLoader().load('arid2_bk,jpg')
    let texture_up = new THREE.TextureLoader().load('arid2_up,jpg')
    let texture_dn = new THREE.TextureLoader().load('arid2_dn,jpg')
    let texture_rt = new THREE.TextureLoader().load('arid2_rt,jpg')
    let texture_lf = new THREE.TextureLoader().load('arid2_lf,jpg')

    // console.log('--------------', texture_ft)

    

    materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}))

    for (let i = 0; i < 6; i++){
      materialArray[i].side = THREE.BackSide;
    }

    let skyboxGeo = new THREE.BoxGeometry(10000,10000,10000)
    let skybox = new THREE.Mesh(skyboxGeo, materialArray)
    scene.add(skybox)

    animate()
}

function animate() {
  // console.log('aaaaaaaaaaa')
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

init()

  // function init() {
  //   scene = new THREE.Scene();
  //   scene.background = new THREE.Color(0xdddddd);
  //   camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
  //   camera.position.x = 300;
  //   camera.position.y = 100;
  //   camera.position.z = 250;
  //   renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.body.appendChild(renderer.domElement);
  //   let loader = new THREE.GLTFLoader();
  //   loader.load("scene.gltf", function(gltf) {
  //     let mesh = gltf.scene.children[0];
  //     mesh.scale.set(100,100,100);
  //     scene.add(gltf.scene);
  //   });
  //   const controls = new THREE.OrbitControls(camera);
  //   controls.addEventListener("change", renderer);
  //   let light1 = new THREE.PointLight(0xffffff,3);
  //   light1.position.set(0,300,500);
  //   scene.add(light1);
  //   let light2 = new THREE.PointLight(0xffffff,3);
  //   light2.position.set(500,100,0);
  //   scene.add(light2);
  //   let light3 = new THREE.PointLight(0xffffff,3);
  //   light3.position.set(0,100,-500);
  //   scene.add(light3);
  //   let light4 = new THREE.PointLight(0xffffff,3);
  //   light4.position.set(-500,300,0);
  //   scene.add(light4);
  //   animate();
  // }
  // function animate() {
  //   renderer.render(scene,camera);
  //   requestAnimationFrame(animate);
  // }
  // init();


  return (
    <>
    {/* {renderer.domElement} */}
      {/* <img src='arid2_ft.jpg' />
      <img src='arid2_bk.jpg' />
      <img src='arid2_up.jpg' />
      <img src='arid2_dn.jpg' />
      <img src='arid2_rt.jpg' />
      <img src='arid2_lf.jpg' />
      <img src='518320.jpg' /> */}
      {/* <img src='https://images.alphacoders.com/518/518320.jpg' /> */}
    </>
  )
}