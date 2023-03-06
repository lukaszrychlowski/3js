import * as THREE from 'three'
console.log(THREE);

function log_output(mesh, camera) {
    console.log('length:')
    console.log(mesh.position.length());
    console.log('dist to camera:')
    console.log(mesh.position.distanceTo(camera.position));
}

// sizes
const sizes = {
    width: 600,
    height: 600
};

// scene
const scene = new THREE.Scene();

// geometry
const geometry = new THREE.BoxGeometry(1,1,1); //cube
const material = new THREE.MeshBasicMaterial({color: 0xb6b0ff});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0;
mesh.position.y = 0;
mesh.position.z = 0;
scene.add(mesh);

//axes
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// cam
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 5;
scene.add(camera);

log_output(mesh, camera);

// renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
 