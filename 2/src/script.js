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

//object
const scene = new THREE.Scene();

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial( { color: 0x00ff00})
);
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial( { color: 0xff0000})
);
group.add(cube2);

cube2.position.x = -2;
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial( { color: 0x0000ff})
);
group.add(cube3);
cube3.position.x = 2;

//axes
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// cam
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 5;
scene.add(camera);
log_output(group, camera);

// renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);