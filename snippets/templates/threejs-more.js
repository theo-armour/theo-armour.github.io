

	function addLights( size ) {

// 2017-04-02 ~ http://jaanga.github.io/cookbook-threejs/templates/add-lights/template-threejs-lights-r2.html

		let lightAmbient, lightDirectional, lightPoint;
		size = size ? size : 100;

		lightAmbient = new THREE.AmbientLight( 0x444444 );
		scene.add( lightAmbient );

		lightPoint = new THREE.PointLight( 0xffffff, 0.95 );
		camera.add( lightPoint );
		lightPoint.position = new THREE.Vector3( 0, 0, 1 );
		scene.add( camera );


		lightDirectional = new THREE.DirectionalLight( 0xffffff, 0.5 );
		lightDirectional.position.set( -size, size, size );
		lightDirectional.shadow.camera.scale.set( 13, 15, 0.5 );


		d = 100;
		lightDirectional.shadow.camera.left = -d;
		lightDirectional.shadow.camera.right = d;
		lightDirectional.shadow.camera.top = d;
		lightDirectional.shadow.camera.bottom = -d;

		lightDirectional.shadow.camera.near = 0;
		lightDirectional.shadow.camera.far = 2 * d;

		lightDirectional.shadow.bias = -0.001; // default 0 ~ distance from corners?


		lightDirectional.shadow.mapSize.width = 2048;  // default 512
		lightDirectional.shadow.mapSize.height = 2048;

		lightDirectional.castShadow = true;
		scene.add( lightDirectional );

		scene.add( new THREE.CameraHelper( lightDirectional.shadow.camera ) );


	}


	function addShadows() {

// 2017-01-02 ~ http://jaanga.github.io/cookbook-threejs/templates/add-lights/template-threejs-lights-r3.html

		renderer.shadowMap.enabled = true;

		scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				child.castShadow = true
				child.receiveShadow = true;

			}

		} );




// Cubes

	function drawCubes() {

		const cubes = new THREE.Object3D();
		const geometry, material, mesh;

		geometry = new THREE.BoxGeometry( 10, 10, 10 );

		for ( var i = 0; i < 50; i++ ) {

			material = new THREE.MeshPhongMaterial( {
				color: 0xffffff * Math.random(),
				emissive: 0xffffff * Math.random(),
				opacity: Math.random(),
				specular: 0xffffff * Math.random(),
//				shading: THREE.FlatShading,
//				shininess: 10,
				transparent: true
			} );

			material = new THREE.MeshNormalMaterial();

			mesh = new THREE.Mesh( geometry, material );
			mesh.position.set( 100 * Math.random() - 50, 100 * Math.random(), 100 * Math.random() - 50 );
			mesh.rotation.set( 6.3 * Math.random(), 1.57 * Math.random(), 3.14 * Math.random() );
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			cubes.add( mesh );

//			helper = new THREE.EdgesHelper( mesh );
//			helper.material.color.setRGB( 1, 0, 0 );
//			scene.add( helper );

			var geometryEdge = new THREE.EdgesGeometry( mesh.geometry ); // or WireframeGeometry
			var material = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 1 } );
			var edges = new THREE.LineSegments( geometryEdge, material );
			mesh.add( edges ); // add wireframe as a child of the parent mesh

		}

		return cubes;

	}



	function drawGnomen() {

		let gnomen;
		let geometry, material;

		geometry = new THREE.CylinderGeometry( 0, 2, 30, 24 );
		material = new THREE.MeshPhongMaterial( {
			color: 0xffffff * Math.random(),
			specular: 0xffffff * Math.random(),
			shininess: 1
		} );

		gnomen = new THREE.Mesh( geometry, material );
		gnomen.position.set( 0, 15, 0 );
		gnomen.castShadow = true;
		gnomen.receiveShadow = true;

		return gnomen;

	}


	function initNorthPoint() {

		var geometry, material;

		geometry = new THREE.CylinderGeometry( 10, 5, 80, 3 );
		geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 50, 0 ) );
		geometry.merge( new THREE.CylinderGeometry( 12, 0, 20, 3 ) );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -0.5 * pi ) );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - pi ) );
		material = new THREE.MeshNormalMaterial();
		northPoint = new THREE.Mesh( geometry, material );
		northPoint.scale.multiplyScalar( 0.5 );
		northPoint.position.set( 50, -12, 25 );
		scene.add( northPoint );

	}

	function initTrylonPerisphere() {

// https://en.wikipedia.org/wiki/Trylon_and_Perisphere

		var geometry, material, mesh;

		trylonPerisphere = new THREE.Object3D();
		trylonPerisphere.name = 'trylonPerisphere';

// Perisphere
		geometry = new THREE.SphereGeometry( 25, 50, 50 );
		material = new THREE.MeshPhongMaterial( {
			color: 0xffffff * Math.random(),
			specular: 0xffffff * Math.random(),
			shininess: 10
		} );
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, 20, 0 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;

		trylonPerisphere.add( mesh );

// Trylon
		geometry = new THREE.CylinderGeometry( 0, 8, 100, 3 );
		material = new THREE.MeshPhongMaterial( {
			color: 0xffffff * Math.random(),
			specular: 0xffffff * Math.random(),
			shininess: 1
		} );

		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( -15, 50, -30 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;

		trylonPerisphere.add( mesh );

		trylonPerisphere.scale.set( 0.4, 0.4, 0.4 );
		trylonPerisphere.position.set( -25, 0, -50 );

		scene.add( trylonPerisphere );

	}

	function toggleStonehenge() {

		var stonehenge = scene.getObjectByName( 'stonehenge' );
		var stonehengeHelpers = scene.getObjectByName( 'stonehengeHelpers' );

		if ( stonehenge === undefined ) {

			stonehenge = new THREE.Object3D();
			stonehengeHelpers = new THREE.Object3D();

			stonehenge.name = 'stonehenge';
			stonehengeHelpers.name = 'stonehengeHelpers';

			number = 20;
			angle = 6.283 / number;
			radius = 200;
			for ( var i = 0; i < number; i++ ) {
					var geometry = new THREE.BoxGeometry( 15, 100, 30 );
					var color = 0xffffff * Math.random();
					var material = new THREE.MeshPhongMaterial( { color: color, side: 2 });
					var mesh = new THREE.Mesh( geometry, material );
					mesh.castShadow = true;
					mesh.receiveShadow = true;
					mesh.rotation.y = - angle * i;
					mesh.position.set( radius * Math.cos( angle * i ) , 50, radius * Math.sin( angle * i )  );

					stonehenge.add( mesh );

					helper = new THREE.EdgesHelper( mesh );
					stonehengeHelpers.add( helper );

			}

			number = 9;
			angle = 6.283 / number;
			radius = 200;

			for ( var i = 0; i < number; i++ ) {
				var geometry = new THREE.BoxGeometry( 15, 20, 100 );
				var color = 0xffffff * Math.random();
				var material = new THREE.MeshPhongMaterial( { color: color, side: 2 });
				var mesh = new THREE.Mesh( geometry, material );
				mesh.castShadow = true;
				mesh.receiveShadow = true;

				mesh.rotation.y = -angle * i;
				delta = 0.01 *  Math.random();
				mesh.position.set( radius * Math.cos( ( delta + angle ) * i ) , 110, radius * Math.sin( ( delta + angle ) * i )  );

				stonehenge.add( mesh );

				helper = new THREE.EdgesHelper( mesh );
				stonehengeHelpers.add( helper );

			}

			stonehenge.scale.set( 0.1, 0.1, 0.1 );
			scene.add( stonehenge, stonehengeHelpers );

		} else {

			scene.remove( stonehenge, stonehengeHelpers );

		}

	}