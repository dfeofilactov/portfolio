import * as THREE from 'three';

const colors = {
    blue: 0x2FA1AE,
    light: 0xFAF8F5,
    text: 0xe0e0e0,
    dark: 0x131414,
    green: 0x38cf6a,
    red:  0xff0040,
};

const NCanvas = (() => {
    //scene vars
    let scene, camera, container, renderer, light, light1;

    let geometry, material, cube;

    const Init = () => {

        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({ alpha: true });
        container = document.getElementById('canvas-container');
        camera = new THREE.PerspectiveCamera(
            100,
            container.getBoundingClientRect().width/container.getBoundingClientRect().height,
            0.1,
            1000
        );
        renderer.setSize( container.getBoundingClientRect().width, container.getBoundingClientRect().height );
        container.appendChild( renderer.domElement );  

        scene.fog = new THREE.Fog( colors.light, 0, 100 );
        scene.background = new THREE.Color( colors.dark );

        geometry = new THREE.BoxGeometry( 4, 4, .15 );
        material = new THREE.MeshStandardMaterial( { color: colors.dark, roughness: 0.5, metalness: 1.0 } );
        cube = new THREE.Mesh( geometry, material );

        var sphere = new THREE.SphereGeometry( .1, 32, 32 );
        light = new THREE.PointLight( colors.red, 2, 0, 2 );
        light.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: colors.red } ) ) );
        scene.add( light );

        light1 = new THREE.PointLight( colors.blue, 2, 0, 2 );
        light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: colors.blue } ) ) );
        scene.add( light1 );

		scene.add( cube );

        camera.position.z = 6;

        // var animate = function () {
        //     requestAnimationFrame( animate );

        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;

        //     renderer.render( scene, camera );
        // };

        animate();
    };

    function animate() {
        requestAnimationFrame( animate );
        render();
    }

    function render() {
        var speedObj = 0.03;
        var speedLights = .5;
        var time = Date.now() * 0.005 * speedLights;
        //cube.rotation.x += speedObj;
        cube.rotation.y += speedObj;

        light.position.x = Math.sin( time * 0.7 ) * 2.4;
        light.position.y = Math.cos( time * 0.5 ) * 3.2;
        light.position.z = Math.cos( time * 0.3 ) * 2.4;

        light1.position.x = Math.sin( time * 0.3 ) * 2.4;
        light1.position.y = Math.cos( time * 0.5 ) * 3.2;
        light1.position.z = Math.cos( time * 0.7 ) * 2.4;

        renderer.render( scene, camera );
    }

    return {
        Init: Init
    };
})();

export default NCanvas;