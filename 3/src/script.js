import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//const clock = new THREE.Clock();

gsap.to(mesh.position, {duration: 1, delay: 1, x: 2});
gsap.to(mesh.position, {duration: 1, delay: 2, x: -2});
// animation
const tick = () =>
{
    // const elapsed_time = clock.getElapsedTime();
    // console.log(clock.getElapsedTime());
    // //mesh.position.z += .01
    // //camera.position.z = Math.sin(elapsed_time);
    // //camera.lookAt(mesh.position);
    // mesh.rotation.z = elapsed_time* Math.PI * 0.1
    // mesh.rotation.y = elapsed_time* Math.PI * 0.1
    // mesh.rotation.x = elapsed_time* Math.PI * 0.1
    // mesh.position.x = Math.sin(elapsed_time) * Math.tan(elapsed_time);
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};
tick();