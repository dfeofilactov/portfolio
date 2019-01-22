import * as THREE from 'three';

const colors = {
    sun: 0xffffff,
    blue: 0x1ab1c5,
    light: 0xFFFFFF,
    text: 0xe0e0e0,
    dark: 0x131414,
    green: 0x38cf6a,
    red: 0xff0040,
    neptune: 0x2085c0
    //#fff9e1
};

const NCanvas = (() => {
    //scene vars
    let scene, camera, container, renderer, light, triton;

    let geometry, material, neptune, moon;

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
        // camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -10, 100);
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        console.log(container.getBoundingClientRect().width);
        renderer.setSize(
            container.getBoundingClientRect().width,
            container.getBoundingClientRect().height
        );
        container.appendChild(renderer.domElement);

        //scene.fog = new THREE.FogExp2( colors.dark, 0.06);
        //scene.background = new THREE.Color( colors.dark );

        geometry = new THREE.SphereGeometry(1.5, 32, 32);
        material = new THREE.MeshStandardMaterial({
            color: colors.neptune,
            roughness: 0.8,
            metalness: 0
        });
        neptune = new THREE.Mesh(geometry, material);
        moon = new THREE.SphereGeometry(.21, 32, 32);

        light = new THREE.PointLight(0xFFFFFF, 6, 60);
        // light = new THREE.Mesh( sun, new THREE.MeshBasicMaterial({
        //     color: colors.sun,
        // }) );
        light.position.set(50, 50, 50);
        scene.add(light);

        // light = new THREE.SpotLight( 0xFFFFFF, 2, 200, 120, 0, 0 );
        // light.position.set( -40, 40, 40 );

        scene.add(light);
        triton = new THREE.Mesh(moon, new THREE.MeshStandardMaterial({
            color: colors.light,
            roughness: 0.8,
            metalness: 0
        }));
        triton.position.x = 2;
        triton.position.y = 2;
        triton.position.z = 0;
        scene.add(triton);
        scene.add(neptune);
        camera.position.z = 30;
        camera.position.x = -5;

        animate();

        window.addEventListener('resize', onWindowResize, false);
    };

    const animate = () => {
        requestAnimationFrame(animate);
        render();
    };

    const render = () => {
        let radius = 2;

        var speedSun = 5 / 100;
        var speedTriton = 10 / 100;
        var time = Date.now() * 0.005;
        //cube.rotation.x += speedObj;
        //cube.rotation.y += speedObj * Math.sin(time * .2);

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

    return {
        Init: Init
    };
})();

export default NCanvas;