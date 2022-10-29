<template>
    <div>
        <canvas id="myThreeJsCanvas" />
    </div>
</template>

<script>
import SceneInit from '@/SceneInit.js'

const test = new SceneInit('myThreeJsCanvas');
test.initialize();
test.animate();
let loadedModel;
const glftLoader = new GLTFLoader();

glftLoader.load('./models/Duck.gltf', (gltfScene) => {
    loadedModel = gltfScene;
    gltfScene.scene.rotation.y = Math.PI / 8;
    gltfScene.scene.position.y = 3;
    gltfScene.scene.scale.set(10, 10, 10);
    test.scene.add(gltfScene.scene);
});
</script>
