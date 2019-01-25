import * as THREE from 'three';

const colors = {
    sun: 0xffffff,
    blue: 0x1ab1c5,
    light: 0xFFFFFF,
    text: 0xe0e0e0,
    dark: 0x131414,
    green: 0x38cf6a,
    red: 0xff0040,
    neptune: 0x2085c0,
    //#fff9e1
};

const NCanvas = (() => {
    //scene vars
    let scene;
    let camera;
    let container;
    let renderer;
    let light;
    // Objects
    const neptune = (() => {
        const neptuneGeometry = new THREE.SphereGeometry(1.5, 32, 32);
        const neptuneMaterial = new THREE.MeshStandardMaterial({
            color: colors.neptune,
            roughness: 0.8,
            metalness: 0,
        });
        return new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    })();
    const triton = (() => {
        const tritoneGeometry = new THREE.SphereGeometry(0.21, 32, 32);
        const tritoneMaterial = new THREE.MeshStandardMaterial({
            color: colors.light,
            roughness: 0.8,
            metalness: 0,
        });
        const object = new THREE.Mesh(tritoneGeometry, tritoneMaterial);
        object.position.x = 2;
        object.position.y = 2;
        object.position.z = 0;
        return object;
    })();

    const render = () => {
        const radius = 2;

        const speedSun = 5 / 100;
        const speedTriton = 10 / 100;
        // var time = Date.now() * 0.005;
        const time = 1548425382122 * 0.005;

        light.position.x = Math.sin(time * speedSun) * 50;
        light.position.y = Math.sin(time * speedSun) * -15;
        light.position.z = Math.cos(time * speedSun) * 50;

        triton.position.x = Math.sin(time * speedTriton) * radius;
        triton.position.y = Math.sin(time * speedTriton) * radius;
        triton.position.z = Math.cos(time * speedTriton) * radius;

        renderer.render(scene, camera);
    };

    const onWindowResize = () => {
        camera.aspect = container.getBoundingClientRect().width / container.getBoundingClientRect().height;
        camera.updateProjectionMatrix();
        renderer.setSize(
            container.getBoundingClientRect().width,
            container.getBoundingClientRect().height
        );
    };

    /**
     * Инициализация Canvas
     */
    const Init = () => {
        scene = new THREE.Scene();

        container = document.getElementById('canvas-container');
        camera = new THREE.PerspectiveCamera(
            15,
            container.getBoundingClientRect().width / container.getBoundingClientRect().height,
            1,
            1000
        );
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        renderer.setSize(
            container.getBoundingClientRect().width,
            container.getBoundingClientRect().height
        );
        container.appendChild(renderer.domElement);

        light = new THREE.PointLight(0xFFFFFF, 6, 60);
        light.position.set(50, 50, 50);

        scene.add(light);
        scene.add(triton);
        scene.add(neptune);

        camera.position.z = 30;
        camera.position.x = -4;

        render();

        window.addEventListener('resize', onWindowResize, false);
    };

    const Pause = () => {
        // pause = true;
    };
    const Play = () => {
        console.log(triton);
        const time = Date.now() * 0.005;
        const speedTriton = 10 / 100;
        const radius = 2;
        triton.position.x = Math.sin(time * speedTriton) * radius;
        triton.position.y = Math.sin(time * speedTriton) * radius;
        triton.position.z = Math.cos(time * speedTriton) * radius;

        scene.add(triton);
        // animate();
        renderer.render(scene, camera);
    };

    const animate = () => {
        requestAnimationFrame(animate);
        render();
    };

    return {
        Init,
        Pause,
        Play,
    };
})();

export default NCanvas;
