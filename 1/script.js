
// sizes
const sizes = {
    width: 800,
    height: 600
};

// scene
const scene = new THREE.Scene();

// geometry
const geometry = new THREE.BoxGeometry(1,1,1); //cube
const material = new THREE.MeshBasicMaterial({color: 0xb6b0ff});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// cam
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 5;
scene.add(camera);


// renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
