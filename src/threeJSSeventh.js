import React, {useEffect, useState} from 'react';
import * as THREE from 'three'
import useKeyPress from './useKeyPress'

export default function ThreeJSFirst () {

  const LEFT = 37, RIGHT = 39, UP = 38, DOWN = 40, SPACE = 32, ENTER = 13

  const [cubes, setCubes] = useState([])
  const [animation, setAnimation] = useState({interval: null})

  const a = useKeyPress(["a", "A", "ArrowLeft"]);
  const d = useKeyPress(["d", "D", "ArrowRight"]);
  const w = useKeyPress(["w", "W", "ArrowUp"]);
  const s = useKeyPress(["s", "S", "ArrowDown"]);

  // let renderer

  // const [render, setRenderer] = useState(null)

  useEffect(() => {

    

    if (cubes.length === 0) {
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0xababab)
      // scene.background = null
    
      const camera = new THREE.PerspectiveCamera(30,window.innerWidth / window.innerHeight,1, 1000)
      camera.position.z = 5

      let cubes_ = []
      let geometry = new THREE.BoxGeometry(0.2,0.2,0.2)
      for(let i = 1; i <= 10; i++) {
        let material = new THREE.MeshBasicMaterial({
          color: Math.random() * 0xffffff,
          shininess: 100,
          side: THREE.DoubleSide
        })
      
        const cube = new THREE.Mesh(geometry, material)
        cube.position.x = randomInRange(-2,2)
        cube.position.z = randomInRange(-1,1)
        // cubes.push(cube)
        cubes_.push(cube)
        scene.add(cube)
      }
      setCubes(cubes_)

      function randomInRange (from, to) {
        let x = Math.random() * (to -from)
        return x + from
      }
      
    
      const renderer = new THREE.WebGLRenderer({ alpha: true } )
      renderer.setSize(window.innerWidth, window.innerHeight)
    
      document.body.appendChild(renderer.domElement)

      const mainLoop = () => {
    
        renderer.render(scene, camera)
        requestAnimationFrame(mainLoop)
      }

      mainLoop()
    }
  }, [a,cubes])

  

  useEffect(() => {
  if (a) cubes.forEach(cube => cube.position.x -= 0.1)
  }, [a, cubes])

  useEffect(() => {
    if (d) cubes.forEach(cube => cube.position.x += 0.1)
  }, [d, cubes])


  return (
    <div>
      <h1>Hello there</h1>
    </div>
  )
}