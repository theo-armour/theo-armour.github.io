

## Stats

<a href="javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()" title="Mr.doob's Stats.js" >Show statistics</a>



## Math Function Plot

	function drawPlane() {

		let geometry, material, mesh;

		geometry = new THREE.PlaneGeometry( 100, 100, 100, 100 );

		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -0.5 * Math.PI ) );

		for ( let i = 0; i < geometry.vertices.length; i++ ) {

			vertex = geometry.vertices[ i ];

			vertex.y = 10 * Math.sin( vertex.x / 10 ) + 5 * Math.cos( vertex.z / 10 ) ;

		}

		geometry.computeFaceNormals();
		geometry.computeVertexNormals();

		material = new THREE.MeshNormalMaterial( { side: 2 } );
		mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );

	}


## Lights

	function addLights( size ) {

// 2017-04-02 ~ http://jaanga.github.io/cookbook-threejs/templates/add-lights/template-threejs-lights-r2.html

		let lightAmbient, lightDirectional, lightPoint;
		let size;

		lightAmbient = new THREE.AmbientLight( 0x444444 );
		scene.add( lightAmbient );

		lightPoint = new THREE.PointLight( 0xffffff, 0.95 );
		camera.add( lightPoint );
		lightPoint.position = new THREE.Vector3( 0, 0, 1 );
		scene.add( camera );

		size = size ? size : 100;
		lightDirectional = new THREE.DirectionalLight( 0xffffff, 0.5 );
		lightDirectional.position.set( -size, size, size );
		lightDirectional.shadow.camera.scale.set( 13, 15, 0.5 );

		lightDirectional.shadow.mapSize.width = 2048;  // default 512
		lightDirectional.shadow.mapSize.height = 2048;

		lightDirectional.castShadow = true;
		scene.add( lightDirectional );

		scene.add( new THREE.CameraHelper( lightDirectional.shadow.camera ) );


	}



## Shadows

	function addShadows() {

// 2017-01-02 ~ http://jaanga.github.io/cookbook-threejs/templates/add-lights/template-threejs-lights-r3.html

		renderer.shadowMap.enabled = true;

		scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				child.castShadow = true
				child.receiveShadow = true;

			}

		} );

	}
