// 🌌 Set up scene, camera, and renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // White background

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5); // Move the camera back to fit the full card

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 🎮 Add Orbit Controls for interaction
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 📜 Load textures for the front and back of the card
const textureLoader = new THREE.TextureLoader();
const frontTexture = textureLoader.load('front.png'); // Replace with your image
const backTexture = textureLoader.load('back.png');  // Replace with your image

// 🃏 Create a tarot card with images
const cardGeometry = new THREE.BoxGeometry(1.3, 3, 0.01); // Tarot card proportions
const cardMaterials = [
    new THREE.MeshBasicMaterial({ color: 0xaaaaaa }), // Left side (gray)
    new THREE.MeshBasicMaterial({ color: 0xaaaaaa }), // Right side (gray)
    new THREE.MeshBasicMaterial({ color: 0xaaaaaa }), // Top (gray)
    new THREE.MeshBasicMaterial({ color: 0xaaaaaa }), // Bottom (gray)
    new THREE.MeshBasicMaterial({ map: frontTexture }), // Front (with image)
    new THREE.MeshBasicMaterial({ map: backTexture })  // Back (with image)
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
