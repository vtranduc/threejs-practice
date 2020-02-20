import React, {useEffect, useState} from 'react';
import * as THREE from 'three'
import useMousePress from './useMousePress'

export default function ThreeJSEighth () {

  const [loaded, setLoaded] = useState(false)
  const [scene_, setScene] = useState({mouse: null, rayCast: null, camera: null, scene: null})
  const pos = useMousePress()

  useEffect(() => {

    const mainLoop = (renderer, scene, camera) => {
      const mainLoop_ = () => {
        renderer.render(scene, camera)
        requestAnimationFrame(mainLoop_)
      }
      mainLoop_()
    }

    if (!loaded) {
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0xababab)
    
      const camera = new THREE.PerspectiveCamera(30,window.innerWidth / window.innerHeight,1, 1000)
      camera.position.z = 10

      let geometry = new THREE.BoxGeometry(0.2,0.2,0.2)
      let material = new THREE.MeshBasicMaterial({
        color: 0x00a1cb,
        shininess: 100,
        side: THREE.DoubleSide
      })
      const cube = new THREE.Mesh(geometry, material)
      cube.position.x = 4
      cube.rotation.y = 0.5
      cube.rotation.z = 0.5
      scene.add(cube)

      let geometry2 = new THREE.SphereGeometry(0.5,30,30, 0, Math.PI, 0, Math.PI )
      let material2 = new THREE.MeshBasicMaterial({
        color: 0x0450fb,
        wireframe: false,
        shininess: 100,
        side: THREE.DoubleSide
      })
      const sphere = new THREE.Mesh(geometry2, material2)
      sphere.position.z = -2
      scene.add(sphere)

      // const light1 = new THREE.DirectionalLight(0xffffff,1)
      // const light2 = new THREE.DirectionalLight(0xffffff,1)
      // light2.position.set(0,-5,2)
      // scene.add(light1)
      // scene.add(light2)

      const rayCast = new THREE.Raycaster()
      const mouse = new THREE.Vector2()
      // mouse.x = mouse.y = 100
      setScene({mouse, rayCast, camera, scene})
    
      const renderer = new THREE.WebGLRenderer({ alpha: true } )
      renderer.setSize(window.innerWidth, window.innerHeight)
    
      document.body.appendChild(renderer.domElement)

      mainLoop(renderer, scene, camera)
      setLoaded(true)
    } else {

      scene_.mouse.x = (pos.x / window.innerWidth) * 2 - 1
      scene_.mouse.y = - (pos.y / window.innerHeight) *2 + 1
      scene_.mouse.z = 1
      scene_.rayCast.setFromCamera(scene_.mouse, scene_.camera)
      
      console.log('children? ', scene_.scene.children)
      const intersects = scene_.rayCast.intersectObjects(scene_.scene.children)
      intersects.forEach(obj => obj.object.material.color.set(0x00ff00))

      if (intersects.length === 0 && pos.x !== null) {
        console.log('-----------------------', scene_.mouse)
        let geometry2 = new THREE.SphereGeometry(0.5,30,30, 0, Math.PI, 0, Math.PI )
        let material2 = new THREE.MeshBasicMaterial({
          color: 0x0450fb,
          wireframe: false,
          shininess: 100,
          side: THREE.DoubleSide
        })
        const sphere = new THREE.Mesh(geometry2, material2)
        // sphere.position.z = -2
        const pos_ = scene_.rayCast.ray.at(100)
        // console.log('SHOW POS', pos_)
        sphere.position.x = pos_.x
        sphere.position.y = pos_.y
        sphere.position.z = pos_.z

        scene_.scene.add(sphere)
      }
      
      console.log('SHOWWWWWWWWWWWWWWWWWWWWWWW', intersects.map(intersect => intersect.object))
    }
    
  }, [pos,loaded, scene_])

  return (
    <div>
      {/* <h1>Hello</h1> */}
    </div>
  )
}