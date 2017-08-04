

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



## rotation

		window.addEventListener( 'keyup', onKeyUp, false );
		renderer.domElement.addEventListener( 'click', function() { controls.autoRotate = false; }, false );




## Cubes

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



## Pointer

	function drawPointer3D() {

		var geometry, material, mesh;

		geometry = new THREE.CylinderGeometry( 10, 5, 80, 3 );
		geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 50, 0 ) );
		geometry.merge( new THREE.CylinderGeometry( 12, 0, 20, 3 ) );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -0.5 * pi ) );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - pi ) );
		material = new THREE.MeshNormalMaterial();

		mesh = new THREE.Mesh( geometry, material );
		mesh.scale.multiplyScalar( 0.5 );

		return mesh;

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




## Placards

	function drawPlacard( text, scale, color, x, y, z ) {

// 2016-02-27 ~ https://github.com/jaanga/jaanga.github.io/tree/master/cookbook-threejs/examples/placards

		var placard = new THREE.Object3D();
		var v = function( x, y, z ){ return new THREE.Vector3( x, y, z ); };

		var texture = canvasMultilineText( text, { backgroundColor: color }   );
		var spriteMaterial = new THREE.SpriteMaterial( { map: texture, opacity: 0.9, transparent: true } );
		var sprite = new THREE.Sprite( spriteMaterial );
		sprite.position.set( x, y, z ) ;
		sprite.scale.set( scale * texture.image.width, scale * texture.image.height );

		var geometry = new THREE.Geometry();
		geometry.vertices = [ v( 0, 0, 0 ),  v( x, y, z ) ];
		var material = new THREE.LineBasicMaterial( { color: 0xaaaaaa } );
		var line = new THREE.Line( geometry, material );

		placard.add( sprite, line );

		return placard;


		function canvasMultilineText( textArray, parameters ) {

			var parameters = parameters || {} ;

			var canvas = document.createElement( 'canvas' );
			var context = canvas.getContext( '2d' );
			var width = parameters.width ? parameters.width : 0;
			var font = parameters.font ? parameters.font : '48px monospace';
			var color = parameters.backgroundColor ? parameters.backgroundColor : 120 ;

			if ( typeof textArray === 'string' ) textArray = [ textArray ];

			context.font = font;

			for ( var i = 0; i < textArray.length; i++) {

				width = context.measureText( textArray[ i ] ).width > width ? context.measureText( textArray[ i ] ).width : width;

			}

			canvas.width = width + 20;
			canvas.height =  parameters.height ? parameters.height : textArray.length * 60;

			context.fillStyle = 'hsl( ' + color + ', 80%, 50% )' ;
			context.fillRect( 0, 0, canvas.width, canvas.height);

			context.lineWidth = 1 ;
			context.strokeStyle = '#000';
			context.strokeRect( 0, 0, canvas.width, canvas.height );

			context.fillStyle = '#000' ;
			context.font = font;

			for ( i = 0; i < textArray.length; i++) {

				context.fillText( textArray[ i ], 10, 48  + i * 60 );

			}

			var texture = new THREE.Texture( canvas );
			texture.minFilter = texture.magFilter = THREE.NearestFilter;
			texture.needsUpdate = true;

			return texture;

		}

	}
