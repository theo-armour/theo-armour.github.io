## in Three.js

	var gridHelper, axisHelper, groundHelper;

		window.addEventListener( 'keyup', function() { controls.autoRotate = false; }, false );
		renderer.domElement.addEventListener( 'click', function() { controls.autoRotate = false; }, false );
		controls.autoRotate = true;



## In HTML


		<details open >

			<summary> Display settings </summary>

			<p title = 'Size in feet. Lines every 20 feet.' >Grid Size:
				<input type=number id=inpGridSize min=10 max=1000 step=10 value=200 list = "defaultNumbers" required onchange=updateGridSize(); class = floatRight />

				<datalist id="defaultNumbers">
					<option value="100">
					<option value="200">
					<option value="500">
					<option value="1000">
					<option value="2000">
				</datalist>

			</p>

			<p><button onclick=toggleMaterial(); >Toggle Material</button></p>

			<p><button onclick=toggleGround(); '> Toggle ground </button></p>

			<p><button onclick=toggleWireframe(); > Toggle wireframe </button></p>

			<p><button onclick=toggleEdges(); >Toggle edges </button></p>

			<p><button onclick=toggleGrid(); >Toggle Grid</button></p>

			<p><button onclick=toggleAxesHelper(); >Toggle Axes</button></p>

			<p><button onclick=toggleBackgroundGradient(); > Toggle background gradient </button></p>

			<p><button onclick=toggleSceneAutoRotate() title= 'Stop the spinning!' > Toggle scene rotation </button></p>

		</details>




## Zoom Object Bounding Sphere

// 2018-09-24 ~ see camera-switching.html

function zoomObjectBoundingSphere( obj = scene ) {

	const bbox = new THREE.Box3().setFromObject( obj );

	if ( bbox.isEmpty() === true ) { return; }

	const sphere = bbox.getBoundingSphere( new THREE.Sphere() );
	const center = sphere.center;
	const radius = sphere.radius;

	//console.log( 'center', center );
	//console.log( 'radius', radius );

	controls.target.copy( center );
	controls.maxDistance = 5 * radius;

	camera.position.copy( center.clone().add( new THREE.Vector3( 1.5 * radius, 1.5 * radius, 1.5 * radius ) ) );
	camera.near = 0.1 * radius;
	camera.far = 10 * radius;
	camera.updateProjectionMatrix();

	scene.userData.objCenter = center;
	scene.userData.objRadius = radius;

}



THRU.zoomObjectBoundingSphere = function( obj = undefined ) {
	//console.log( 'obj', obj );

	const bbox = new THREE.Box3().setFromObject( obj );
	//console.log( 'bbox', bbox );

	if ( bbox.isEmpty() === true ) { return; }

	//if ( isNaN( bbox.max.x - bbox.min.x ) ) { console.log( 'zoom fail', {obj},{bbox} ); return; } // is there a better way of seeing if we have a good bbox?

	const sphere = bbox.getBoundingSphere( new THREE.Sphere() );
	const center = sphere.center;
	const radius = sphere.radius;

	THR.controls.reset();
	THR.controls.target.copy( center );
	THR.controls.maxDistance = 5 * radius;

	THR.camera.position.copy( center.clone().add( new THREE.Vector3( 1.5 * radius, 1.5 * radius, 1.5 * radius ) ) );
	THR.camera.near = 0.1 * radius; //2 * camera.position.length();
	THR.camera.far = 10 * radius; //2 * camera.position.length();
	THR.camera.updateProjectionMatrix();

	//lightDirectional.position.copy( center.clone().add( new THREE.Vector3( -1.5 * radius, -1.5 * radius, 1.5 * radius ) ) );
	//lightDirectional.shadow.camera.scale.set( 0.2 * radius, 0.2 * radius, 0.01 * radius );
	//lightDirectional.target = axesHelper;

	if ( THRU.axesHelper ) {

		THRU.axesHelper.scale.set( radius, radius, radius );
		//THR.axesHelper.position.copy( center );

	}
	//scene.position.copy( center );

	obj.userData.center = center;
	obj.userData.radius = radius;

	//		scene.remove( cameraHelper );
	//		cameraHelper = new THREE.CameraHelper( lightDirectional.shadow.camera );
	//		scene.add( cameraHelper );

};



## addHelpers

	function addHelpers( size = 200 ) {

		scene.remove( gridHelper, axisHelper, groundHelper );

		gridHelper = new THREE.GridHelper( size, 20 );
		gridHelper.rotation.x = 0.5 * Math.PI;

//		axisHelper = new THREE.AxisHelper( size * 0.55 );
		axisHelper = new THREE.AxisHelper( size * 0.05 );
		axisHelper.position.set( -0.5 * size, -0.5 * size, 15 )


		const geometry = new THREE.BoxBufferGeometry( size, size, size  );
		const material = new THREE.MeshNormalMaterial( { opacity: 0.85, transparent: true } );
		groundHelper = new THREE.Mesh( geometry, material );
		groundHelper.name = 'groundHelper';
		groundHelper.position.set( 0, 0, -0.5 * size );
		groundHelper.visible = false;

		scene.add( gridHelper, axisHelper, groundHelper );


	}



## Display Settings

///Display Settings



	function toggleMaterial() {

		if ( chart.material.type === 'MeshPhongMaterial' ) {

			chart.material = new THREE.MeshNormalMaterial( { opacity: 0.85, side: THREE.DoubleSide, transparent: true } );

		} else {

			chart.material = new THREE.MeshPhongMaterial( {
				color: 0xffffff * Math.random(),
				polygonOffset: false,
				polygonOffsetFactor: 10, // positive value pushes polygon further away
				polygonOffsetUnits: 1,
				side: 2
			} );

		}

	}





	function toggleGround() {

		groundHelper.visible = !groundHelper.visible;

	}



	function toggleWireframe() {

		scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				child.material.wireframe = !child.material.wireframe;

			}

		} );

	}



	function toggleEdges() {
console.log( '', buildings  );

		if ( !meshEdges ) {

//			meshesEdges = new THREE.Object3D();
			buildings.traverse( function ( child ) {

				if ( child instanceof THREE.Mesh ) {

					const edgesGeometry = new THREE.EdgesGeometry( child.geometry );
					let meshEdges = new THREE.LineSegments( edgesGeometry, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
					meshEdges.visible = false;

					child.add( meshEdges );

				}

			} );

//			scene.add( meshesEdges );

		}


		buildings.traverse( function ( child ) {

			if ( child instanceof THREE.LineSegments ) {

				child.visible = child.visible === true ? false : true;

			}

		} );

	}




	function toggleEdges() {

		if ( !chartEdges ) {

			const edgesGeometry = new THREE.WireframeGeometry( chart.geometry );
			const material = new THREE.LineBasicMaterial( { opacity: 0.85, transparent: true } );
			chartEdges = new THREE.LineSegments( edgesGeometry );
			scene.add( chartEdges );

			chartEdges.visible = false;

		}

		chartEdges.visible = !chartEdges.visible;

	}



## FaceNormalsHelper


/*
See helpers-normals-face-r1.html

FaceNormalsHelper( object, size, color, linewidth )

object -- object for which to render face normals.
size -- (optional) length of the arrows. Default is 1.
color -- (optional) hex color of the arrows. Default is 0xffff00.
linewidth -- (optional) width of the arrow lines. Default is 1.

*/

	function drawHelpersNormalsFaces() {

		scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				helperNormalsFaces = new THREE.FaceNormalsHelper( child, 10, 0xff00ff, 5 );
				child.add( helperNormalsFaces );

			}

		} );

	}




	function toggleBackgroundGradient() {

// 2018-06-23

		const col = function() { return ( 0.5 + 0.5 * Math.random() ).toString( 16 ).slice( 2, 8 ); };
		const pt = function() { return ( Math.random() * window.innerWidth ).toFixed( 0 ); }
		const image = document.body.style.backgroundImage;

		document.body.style.backgroundImage = image ? '' : 'radial-gradient( circle farthest-corner at ' +
			pt() + 'px ' + pt() + 'px, #' + col() + ' 0%, #' + col() + ' 50%, #' + col() + ' 100% ) ';

	}



	function updateGridSize() {

		scope.addHelpers( parseInt( inpGridSize.value, 10 ) );

	}




	function toggleGrid( size = 500 ) {

		if ( !gridHelper ) {

			gridHelper = new THREE.Object3D();
			const size05 = size * 0.5;

			obj = new THREE.GridHelper( size, 20, 'red', 'pink' );
			obj.rotation.x = 0.5 * Math.PI;
			obj.position.z = -size05;
			gridHelper.add( obj );

			obj = new THREE.GridHelper( size, 20, 'green', 'lightgreen' );
	//		gridHelper.rotation.x = 0.5 * Math.PI;
			obj.position.y = -size05;
			gridHelper.add( obj );

			obj = new THREE.GridHelper( size, 20, 'blue', 'lightblue' );
			obj.rotation.z = 0.5 * Math.PI;
			obj.position.x = size05;
			gridHelper.add( obj );

			scene.add( gridHelper );

			gridHelper.visible = false;

		}

		gridHelper.visible = !gridHelper.visible;

	}



	function toggleAxesHelper() {

		axisHelper.visible = !axisHelper.visible;

	}


	function toggleSceneAutoRotate() {

		controls.autoRotate = !controls.autoRotate;

	}

