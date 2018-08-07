import * as THREE from 'three';

const colors = {
    sun: 0xfff9e1,
    blue: 0x2FA1AE,
    light: 0xFAF8F5,
    text: 0xe0e0e0,
    dark: 0x131414,
    green: 0x38cf6a,
    red:  0xff0040,
    //#fff9e1
};

const NCanvas = (() => {
    //scene vars
    let scene, camera, container, renderer, light, light1;

    let geometry, material, cube;

    /**
     * Инициализация Canvas
     */
    const Init = () => {

        scene = new THREE.Scene();
    
        container = document.getElementById('canvas-container');
        camera = new THREE.PerspectiveCamera(
            100,
            container.getBoundingClientRect().width/container.getBoundingClientRect().height,
            0.1,
            1000
        );
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        console.log(container.getBoundingClientRect().width);
        renderer.setSize(
            container.getBoundingClientRect().width,
            container.getBoundingClientRect().height
        );        
        container.appendChild( renderer.domElement );  

        //scene.fog = new THREE.FogExp2( colors.light, 0.01);
        //scene.background = new THREE.Color( colors.dark );

        geometry = new THREE.SphereGeometry( 1.5, 32, 32 );
        material = new THREE.MeshStandardMaterial({
            color: colors.blue,
            roughness: 1.0,
            metalness: 0.0
        });
        cube = new THREE.Mesh( geometry, material );

        var sphere = new THREE.SphereGeometry( .47, 32, 32 );
        light = new THREE.SpotLight( 0xFFFFFF, 5, 100, 90, 1, 2 );
        light.position.set( -40, 40, 40 );

        light.castShadow = true;

        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;

        light.shadow.camera.near = 500;
        light.shadow.camera.far = 4000;
        light.shadow.camera.fov = 30;
        scene.add( light );

        let moon = new THREE.SphereGeometry( .29, 32, 32 );
        //light1 = new THREE.PointLight( colors.text, 2, 0, 2 );
        light1 = new THREE.Mesh( moon, new THREE.MeshStandardMaterial({
            color: colors.light,
            roughness: 1.0,
            metalness: 0.0
        }) );
        light1.position.x = 2;
        light1.position.y = 2;
        light1.position.z = 0;
        scene.add( light1 );

        scene.add( cube );

        var pos = new THREE.Vector3();
		var quat = new THREE.Quaternion();
        
        pos.set( 0, - 0.5, 0 );
        quat.set( 0, 0, 0, 1 );
        var ground = createParalellepiped(
            40,
            1,
            40,
            0,
            pos,
            quat,
            new THREE.MeshPhongMaterial( { color: 0xFFFFFF } ) 
        );
        ground.castShadow = true;
        ground.receiveShadow = true;
        scene.add( ground );
        camera.position.z = 6;

        animate();

        window.addEventListener( 'resize', onWindowResize, false );
    };

    const animate = () => {
        requestAnimationFrame( animate );
        render();
    };

    const render = () => {
        let radius = 2;


        var speedSun = .2;
        var speedLights = .5;
        var time = Date.now() * 0.005 * speedLights;
        //cube.rotation.x += speedObj;
        //cube.rotation.y += speedObj * Math.sin(time * .2);

        // light.position.x = Math.sin( time * speedSun ) * 40;
        // light.position.y = Math.sin( time * speedSun ) * -15;
        // light.position.z = Math.cos( time * speedSun ) * 40;

        // light1.position.x = Math.sin( time ) * radius;
        // light1.position.y = Math.sin( time ) * radius;
        // light1.position.z = Math.cos( time ) * radius;
        // light1.position.y = Math.cos( time * 0.5 ) * 3.2;
        // light1.position.z = Math.cos( time * 0.7 ) * 2.4;

        renderer.render( scene, camera );
    };

    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
            container.getBoundingClientRect().width,
            container.getBoundingClientRect().height
        );
    };

   const createParalellepiped = ( sx, sy, sz, mass, pos, quat, material ) => {
        var threeObject = new THREE.Mesh( new THREE.BoxBufferGeometry( sx, sy, sz, 1, 1, 1 ), material );
        return threeObject;
    };

    return {
        Init: Init
    };
})();

export default NCanvas;