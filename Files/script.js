// 🌌 Set up scene, camera, and renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // White background

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 4);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 🎮 Add Orbit Controls for interaction
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 🎨 Define pastel pink color
const pastelPink = new THREE.Color(0xffc0cb); 
const pastelBlue = new THREE.Color(0xA7C7E7); 

// 🃏 Create a 3D pastel pink card
const cardGeometry = new THREE.BoxGeometry(1.2, 3, 0.01);
const cardMaterials = [
    new THREE.MeshBasicMaterial({ color: pastelPink }), // Left
    new THREE.MeshBasicMaterial({ color: pastelPink }), // Right
    new THREE.MeshBasicMaterial({ color: pastelPink }), // Top
    new THREE.MeshBasicMaterial({ color: pastelPink }), // Bottom
    new THREE.MeshBasicMaterial({ color: pastelBlue }), // Front
    new THREE.MeshBasicMaterial({ color: pastelPink })  // Back
];

const card = new THREE.Mesh(cardGeometry, cardMaterials);
scene.add(card);

// 🌠 Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// 📏 Resize handling
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
