import * as THREE from 'three';

const NCanvas = (() => {
    //scene vars
    let scene, camera, container, renderer, light, light1;

    let geometry, material, cube;

    const Init = () => {

        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({ alpha: true });
        container = document.getElementById('canvas-container');
        camera = new THREE.PerspectiveCamera(
            75,
            container.getBoundingClientRect().width/container.getBoundingClientRect().height,
            0.1,
            1000
        );
        renderer.setSize( container.getBoundingClientRect().width, container.getBoundingClientRect().height );
        container.appendChild( renderer.domElement );  

        geometry = new THREE.BoxGeometry( 3, 3, .3 );
		material = new THREE.MeshDepthMaterial();
        cube = new THREE.Mesh( geometry, material );

        var sphere = new THREE.SphereGeometry( .1, 32, 32 );
        light = new THREE.PointLight( 0xff0040, .5, 20 );
        light.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
        scene.add( light );

        light1 = new THREE.PointLight( 0xff0040, .5, 20 );
        light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x2FA1AE } ) ) );
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
        var time = Date.now() * 0.005;
        //cube.rotation.x += 0.01;
        cube.rotation.y += 0.05;

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