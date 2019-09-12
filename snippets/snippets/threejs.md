
# Three.js

	const geometry = new THREE.BoxGeometry( 10, 10, 10 );
	const material = new THREE.MeshNormalMaterial();
	const mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );


	scene.add( new THREE.Mesh( new THREE.BoxGeometry( 10, 10, 10 ), new THREE.MeshNormalMaterial() ) );

	// CylinderGeometry( radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded )
	// SphereGeometry( radius, segmentsWidth, segmentsHeight, phiStart, phiLength, thetaStart, thetaLength )
	// TorusGeometry( radius, tube, radialSegments, tubularSegments, arc )

	geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -0.5 * Math.PI ) );
	geometry.applyMatrix( new THREE.Matrix4().makeScale( 1, 1, 1 ) );
	geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 0 ) );


	var color = new THREE.Color( 'grey' );

	const v = function( x, y, z ){ return new THREE.Vector3( x, y, z ); };
	const v = ( x, y, z ) => new THREE.Vector3( x, y, z );


## Changes

http://mrdoob.github.io/three.js/docs/#Reference/Loaders/XHRLoader

	mesh.position.copy( thing.position );

	.subSelf > .sub
	THREE.ray > THREE.Raycaster

		renderer = new THREE.WebGLRenderer( { alpha: 1, antialias: true, clearColor: 0xffffff } );
		renderer.shadowMapEnabled = true;

		THREE.ImageUtils.crossOrigin = 'anonymous';

<script src='http://mrdoob.github.com/three.js/examples/js/renderers/Projector.js'></script>

		vector.unproject( camera );


## Notes

spheresIndex = ( spheresIndex + 1 ) % spheres.length;

webgl_loader_scene_blender.html# - simple object lister


## Core


## OBJECT3D

http://mrdoob.github.io/three.js/docs/#Reference/Core/Object3D

var obj = new THREE.Object3D();

	.add()
	.applyMatrix()
	.castShadow()
	.clone() - Creates a new clone of this object and all descendants.
	.distanceTo( v )
	.getDescendents( array ) - array - optional argument that returns the array with descendants.
	.lookAt( vector )
	.matrix()
	.receiveShadow()
	.remove()
	.rotation()
	.scale()
		.scale.multiplyScalar( 2 );
	.traverse( callback )
	.up
	.visible


	Translates object along axis by distance.
			.translateX
			.translateY
			.translateZ

	.translateOnAxis( axis, distance ) Object3D
	- axis -- A normalized vector in object space.
	- distance -- The distance to translate.
	- Translate an object by distance along an axis in object space. The axis is assumed to be normalized.

	.rotateOnAxis( axis, angle ) Object3D
	- axis -- A normalized vector in object space.
	- angle -- The angle in radians.
	- Rotate an object along an axis in object space. The axis is assumed to be normalized.

	var axisOfMovement = v( 0, 0, 1 );
	obj.translateOnAxis( axisOfMovement, delta );


	obj.rotation.setFromVector3( startRotation );


### Object3D TRAVERSE

object.traverse( callback )
* callback - An Function with as first argument an object3D object.
* Executes the callback on this object and all descendants.

		scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh && child.material instanceof THREE.MeshFaceMaterial ) {

				child.material = new THREE.MeshPhongMaterial();
				child.material.needsUpdate = true;
			}
		} );

// Learn


### Object3D.localToWorld

scene.updateMatrixWorld();

		object.localToWorld ( point )

* vector - A vector representing a position in local (object) space.
* Converts the vector from local space to world space.

Also

			var vector = ceilingGeometry.vertices[ k ].clone();
			vector.applyMatrix4( object.matrixWorld );


### RAYCSTER

* https://threejs.org/docs/#api/en/core/Raycaster
	* Has good example
* cookbook-threejs/examples/editing/find-intersection-line-to-mesh/find-intersection-line-to-mesh-r2.html




## CAMERA

	function updateCamera() {

		target = mesh.position.clone();
		camera.position.copy( target.clone().add( new THREE.Vector3( 0.08, 0.08, 0.08 ) ) );
		controls.target.copy( target );
		camera.updateProjectionMatrix(); // <<<<
	}



### CONTROLS

controls.update()
controls.reset();

	this.enabled = true;

// "target" sets the location of focus, where the control orbits around and where it pans with respect to.
	this.target = new THREE.Vector3();

// center is old, deprecated; use "target" instead
	this.center = this.target;

// This option actually enables dollying in and out; left as "zoom" for backwards compatibility
	this.noZoom = false;
	this.zoomSpeed = 1.0;

	// Limits to how far you can dolly in and out
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// Set to true to disable this control
	this.noRotate = false;
	this.rotateSpeed = 1.0;

	// Set to true to disable this control
	this.noPan = false;
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

// How far you can orbit horizontally, upper and lower limits.
// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	this.minAzimuthAngle = - Infinity; // radians
	this.maxAzimuthAngle = Infinity; // radians

// Set to true to disable use of the keys
	this.noKeys = false;

// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

// Mouse buttons
	this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };




### CLOCK ###

	var clock = new THREE.Clock();
	var delta = clock.getDelta(),
	var t = clock.getElapsedTime();

//
	var delta;  // global

	delta += clock.getDelta();
	if ( delta > 0.05 ) {
		do something...
		delta = 0;
	}



### DETECTOR

if ( ! Detector.webgl ) Detector.addGetWebGLMessage( {parent: threejs} );  // move the message wherever

if ( ! Detector.webgl ) {
	renderer = new THREE.CanvasRenderer( { antialias: true } );
} else {
	renderer = new THREE.WebGLRenderer( { alpha: 1, antialias: true, clearColor: 0xffffff} );
}

## GEOMETRY

// you must new or clone geometry for each new mesh


		geometry = new THREE.BoxGeometry( 10, 10, 10 );
		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );

// line-s: see below

		geometry = new THREE.CircleGeometry( radius, segments, thetaStart, thetaLength );

		geometry = new THREE.BoxGeometry( width, height, depth, widthSegments, heightSegments, depthSegments );

// CylinderGeometry( radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded )
		geometry = new THREE.CylinderGeometry( radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded );

		geometry = new THREE.PlaneBufferGeometry( width, height, widthSegments, heightSegments );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -0.5 * Math.PI ) );
		vertices = geometry.attributes.position.array;


// SphereGeometry( radius, segmentsWidth, segmentsHeight, phiStart, phiLength, thetaStart, thetaLength )
		geometry = new THREE.SphereGeometry( radius, segmentsWidth, segmentsHeight, phiStart, phiLength, thetaStart, thetaLength )

// TorusGeometry( radius, tube, radialSegments, tubularSegments, arc )
		geometry = new THREE.TorusGeometry( 4, 0.5, 15, 30 );

// https://threejs.org/docs/#api/geometries/TorusKnotGeometry
// TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale );
		geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );

		.applyMatrix()
		.clone()
		.dispose() <<<<<<<<<<<<<<<<

		.mergeVertices();

		.center();



### GEOMETRY / Edges


			var edgesGeometry, edgesMaterial, edges,

			edgesGeometry = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry
			edgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000 } );
			edges = new THREE.LineSegments( edgesGeometry, edgesMaterial );
			mesh.add( edges );



// ### Events

see assets




### GEOMETRY MATRIX / Edits

		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -0.5 * Math.PI ) );
		geometry.applyMatrix( new THREE.Matrix4().makeScale( 1, 2, 3 ) );
		geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, -30 ) );

// https://discourse.threejs.org/t/how-to-convert-three-buffergeometry-coordinates-to-worlds-when-rotating/889
// transform a local coordinate to a world coordinate
		vertex.applyMatrix4( object.matrixWorld );




#### GEOMETRY / EDGES edgesGEOMETRY

let geometry = new THREE.BoxBufferGeometry( 100, 100, 100 );

let edgesGeometry = new THREE.EdgesGeometry( geometry );
let edgesMaterial = new THREE.LineBasicMaterial( { color: 0xffffff } );
let edges = new THREE.LineSegments( edgesGeometry, edgesMaterial );

let edges = new THREE.LineSegments( new THREE.EdgesGeometry( geometry ), new THREE.LineBasicMaterial( { color: 0xffffff } ) );

scene.add( edges );

		const edges = new THREE.EdgesGeometry( geometry );
		const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
		scene.add( line );


### GEOMETRY Dispose

https://stackoverflow.com/questions/33152132/three-js-collada-whats-the-proper-way-to-dispose-and-release-memory-garbag

https://discourse.threejs.org/t/correctly-remove-mesh-from-scene-and-dispose-material-and-geometry/5448/2

		if ( objects ) {

			objects.traverse( function ( child ) {

				if ( child.geometry ) {

					child.geometry.dispose();
					child.material.dispose();

				}

				if ( child.texture ) { child.texture.dispose(); }

			} );

		}

	renderer.renderLists.dispose();
	renderer.getContext();
	renderer.dispose( );
	//scene.dispose();


### geometry BufferGeometry

* .setFromPoints is cool


### GEOMETRY / Lathe
// http://mrdoob.github.io/three.js/docs/#Reference/Extras.Geometries/LatheGeometry
// Class for generating meshes with axial symmetry. Possible uses include donuts, pipes, vases etc. The lathe rotate around the Z axis.
// LatheGeometry(points, segments, phiStart, phiLength) - does not close automatically


	function drawLatheObject() {

		var v2 = function( x, y ){ return new THREE.Vector2( x, y ); };

		var points = [];

		for ( var i = 0; i < 10; i ++ ) { points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 15 + 50, ( i - 5 ) * 2 ) ); }

//		points = [ v2( 20, 0 ) , v2( 30, 0 ), v2( 30, 10 ), v2( 20, 10 ), v2( 20, 0 ) ];
//		points = [ v2( 0, 0 ) , v2( 0, 0 ), v2( 0, 0 ), v2( 0, 0 ), v2( 0, 0 ) ];

		var geometry = new THREE.LatheGeometry( points, 24, Math.PI, 1.5 * Math.PI );
		var material = new THREE.MeshNormalMaterial( { side: 2 } );
		var mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );

	}


### GEOMETRY / LINE / LINES

		<button onclick=drawRandomLines(); >draw random lines</button>

	function addLine( vertices ) {

		let geometry, material, line;
		const v = function ( x, y, z ){ return new THREE.Vector3( x, y, z ); };

		geometry = new THREE.Geometry();
		geometry.vertices = vertices || [ v( -10, 0, 0 ),  v( 0, 10, -10 ), v( 10, 0, 0 ) ];
		material = new THREE.LineBasicMaterial( { color: 0x000000 } );
		line = new THREE.Line( geometry, material );

//		scene.add( line );
		return line;

	}


		var geometry = new THREE.Geometry();
		geometry.vertices = [ v( -10, 0, 0 ),  v( 0, 10, 0 ), v( 10, 0, 0 ) ];
		material = new THREE.LineBasicMaterial( { color: 0x000000 } );
		line = new THREE.Line( geometry, material /*, type: THREE.LineStrip !! THREE.LinePieces */ );
		scene.add( line );


		var geometry = new THREE.Geometry();
		var vertices = geometry.vertices;
		vertices.push( v(-10, 0, 0));
		vertices.push( v(0, 10, 0));
		vertices.push( v(10, 0, 0));

		material = new THREE.LineBasicMaterial( { color: 0x000000 } );
		line = new THREE.Line( geometry, material);
		scene.add( line );

//
		scene.add( li2( 10, 10, 10, 50, 50, 50, 50, 10, 10, 10 ) );

		scene.add( li3( -10, 10, 10,  -10, 50, 10,  -50, 50, 10,  -50, 10, 10,  -10, 10, 10  ) );




	function li3() {

		var geometry = new THREE.Geometry();

		for ( var i = 0; i < arguments.length; ) {

			geometry.vertices.push( v( arguments[ i++ ], arguments[ i++ ], arguments[ i++ ] ) );

		}

		var material = new THREE.LineBasicMaterial( { color: 'red' } );

		return new THREE.Line( geometry, material );

	}


### GEOMETRY/ Loaders

https://threejs.org/docs/#api/loaders/JSONLoader
sse load-walt-r1.html

	function loadWalt() {

		loader = new THREE.JSONLoader();
		loader.load( 'https://threejs.org/examples/obj/WaltHeadLo.js',

			function ( geometry ) {

				geometry.computeFaceNormals();
				geometry.computeVertexNormals();
//				geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -Math.PI / 2 ) );
//				geometry.applyMatrix( new THREE.Matrix4().makeRotationZ( Math.PI / 2 ) );
				geometry.applyMatrix( new THREE.Matrix4().makeScale( 1, 1, 1 ) );
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 0 ) );
				material = new THREE.MeshNormalMaterial();

				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );
			}

		);

	}






### HELPERS / WIREFRAME

https://threejs.org/docs/#api/helpers/AxisHelper

	let axisHelper = new THREE.AxisHelper( 50 );
	scene.add( axisHelper );

	scene.add( new THREE.BoxHelper( mesh ) );

	var gridHelper = new THREE.GridHelper( size, step );
	scene.add( gridHelper );

	scene.add( new THREE.WireframeHelper( mesh ) );

	var col = 0xffffff * Math.random();
	scene.add( new THREE.EdgesHelper( mesh, -50, col ) );
	scene.add( new THREE.FaceNormalsHelper( mesh, -50, col ) );
	scene.add( new THREE.VertexNormalsHelper( mesh, -50, col ) );
	scene.add( new THREE.VertexTangentsHelper( mesh, 50, col ) );





#### HELPERS / arrows

		scene.add( new THREE.ArrowHelper( dir, origin, length, hex ) );

		ArrowHelper(dir : Vector3, origin : Vector3, length : Number, hex : Number, headLength : Number, headWidth : Number )
		dir -- direction from origin. Must be a unit vector.
		origin -- Point at which the arrow starts.
		length -- length of the arrow. Default is 1.
		hex -- hexadecimal value to define color. Default is 0xffff00.
		headLength -- The length of the head of the arrow. Default is 0.2 * length.
		headWidth -- The length of the width of the arrow. Default is 0.2 * headLength.







### JSON / save to file

		<p>
			<button onclick = saveFile(); >save building data to file</button>
		</p>


	function saveFile() {

		var output = objects.toJSON();

		try {
// parseNumber??
			output = JSON.stringify( output, parseNumber, '\t' );
			output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		} catch ( e ) {

			output = JSON.stringify( output );

		}

		var blob = new Blob( [ output ] );
		var a = document.body.appendChild( document.createElement( 'a' ) );

		a.href = window.URL.createObjectURL( blob );
		a.download = 'threejs.json';
		a.click();
//		delete a;
		a = null;

	}



### LIGHTS


// hemisphere

		var light = new THREE.DirectionalLight();
		scene.add( light );

		var light = new THREE.HemisphereLight();
		scene.add( light );

		var light = new THREE.HemisphereLight( 0xffbbbb, 0x444488 );
		light.position.set( -1, 1, 1 );
		scene.add( light );

// ambientLight
		var light = new THREE.AmbientLight( 0x404040 ); // soft white light
		scene.add( light );

// pointLight
http://mrdoob.github.io/three.js/docs/#Reference/Lights/PointLight
PointLight(hex, intensity, distance)
hex — Numeric value of the RGB component of the color.
intensity — Numeric value of the light's strength/intensity.
distance -- The distance of the light where the intensity is 0. When distance is 0, then the distance is endless.
Creates a light at a specific position in the scene. The light shines in all directions (roughly similar to a light bulb.)

		var light = new THREE.PointLight( 0xff0000, 1, 100 );
//		light.position.set( 50, 50, 50 );
		light.position = camera.position;
		light.castShadow = true;
		light.shadowCameraVisible = true;
		scene.add( light );


		scene.add( new THREE.CameraHelper( lightDirectional.shadow.camera ) );






## MATERIALS / textures> see below

ambient: 0xffffff, 'gold'
color: Math.random() * 0xffffff,
emissive: 0xff0000,
opacity: 0.8
shading: THREE.SmoothShading, THREE.FlatShading, THREE.NoShading
side: THREE.FrontSide || THREE.BackSide ||
side: THREE.DoubleSide,
shininess: default 30;
specular: 0xffffff,
transparent: false,
wireframe: false,

		material = new THREE.MeshNormalMaterial( { opacity: 0.7, shading: THREE.SmoothShading, side: THREE.DoubleSide, transparent: true, wireframe: true } );

		material = new THREE.MeshBasicMaterial( {color: Math.random() * 0xffffff, opacity: 0.7, side: THREE.DoubleSide, transparent: true } );

		material = new THREE.MeshPhongMaterial( {map: mapTexture, side: THREE.DoubleSide, color: 0xffffff, emissive: 0xffffff, metal: true, specular: 0x888888, shininess: 200, shading: THREE.SmoothShading} );

		material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors } );

		material = new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0x3399ff, shininess: 100, metal: true});
		mesh.geometry.dynamic = true;
		mesh.geometry.verticesNeedUpdate = true;
		mesh.geometry.normalsNeedUpdate = true;
		mesh.geometry.computeFaceNormals();
		mesh.geometry.computeVertexNormals();
		mesh.geometry.computeTangents();
		mesh.geometry.computeMorphNormals();
		mesh.geometry.buffersNeedUpdate = true;
		mesh.geometry.uvsNeedUpdate = true;
		material.needsUpdate = true;
////////////////////

		geometry.computeFaceNormals();
		geometry.computeVertexNormals();

		mesh.geometry.verticesNeedUpdate = true;
		mesh.geometry.normalsNeedUpdate = true;

////////////////////


// http://www.creativewax.co.uk/js/tests/Ribbons.html
		mesh.geometry.__dirtyVertices = true;
		mesh.geometry.__dirtyNormals = true;

### Images

		img.crossOrigin = 'Anonymous';

### Vertex Colors

jaanga.github.io/cookbook-threejs/materials-sandbox/color/vertex-colors/vertex-colors-single-plane.html

		for ( let f of geometry.faces ) {

			console.log( 'face', f );

			f.vertexColors[ 0 ] = new THREE.Color( 0xffffff * Math.random());
			f.vertexColors[ 1 ] = new THREE.Color( 0xffffff * Math.random());
			f.vertexColors[ 2 ] = new THREE.Color( 0xffffff * Math.random());

			geometry.vertices[ f[ 'a' ] ].z = 100 * Math.random() - 50;
			geometry.vertices[ f[ 'b' ] ].z = 100 * Math.random() - 50;
			geometry.vertices[ f[ 'c' ] ].z = 100 * Math.random() - 50;

		}

		material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide, vertexColors: THREE.VertexColors } );


### TEXTURES

https://threejs.org/docs/#api/textures/Texture

		var texture = new THREE.TextureLoader().load( "arrow-gray.png" );

		loader = new THREE.TextureLoader();
		loader.crossOrigin = '';

		heightmap = loader.load( '../bitmaps/bathymetry_bw_composite_2k.png' );

		texture = loader.load( '../bitmaps/2_no_clouds_4k.jpg' );


***

// http://jaanga.github.io/cookbook-threejs/materials-sandbox/load-texture/

		loader = new THREE.TextureLoader();
		loader.crossOrigin = 'anonymous';
		loader.load( 'http://i.imgur.com/RPv6ofy.jpg', callback );

		function callback ( texture ){

				sphere1.material = new THREE.MeshBasicMaterial( { map: texture } );

		}


### textures must be 512x512 to repeat

		THREE.ImageUtils.crossOrigin = 'anonymous';
		texture = THREE.ImageUtils.loadTexture( "../../textures/im5.jpg" );
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//		texture.repeat.set( 16, 16 );
//		texture.anisotropy = 16;

		texture.minFilter = texture.magFilter = THREE.NearestFilter;
		texture.needsUpdate = true;

		material = new THREE.MeshBasicMaterial( {  map: texture, side: THREE.DoubleSide } );




## MESH

		mesh.castShadow() = mesh.receiveShadow() = true;

		mesh.position.copy()
		mesh.position.fromArray()
		mesh.position.length()
		mesh.position.normalize()
		mesh.position.multiplyScalar()
		mesh.position.set()
		mesh.position.copy( startPosition );

		mesh.rotation.setFromVector3( startRotation );

		mesh.scale.multiplyScalar( 0.5 );

		mesh.parent.updateMatrixWorld();

		geometry = new THREE.BoxGeometry( 2, 2, 20 );
		mesh = new THREE.Mesh( geometry, material );
		mesh.quaternion.copy( child.getWorldQuaternion() );
		mesh.position.copy( child.getWorldPosition() );
		scene.add( mesh );




### MESHES


function setSomeBoxes( count = 50 ) {

	const geometry = new THREE.BoxGeometry( 5, 5, 5 );
	const material = new THREE.MeshNormalMaterial();

	for ( let i = 0; i < count; i++ ) {

		const mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 100 * Math.random() - 50, 100 * Math.random() - 50, 100 * Math.random() - 50 );
		mesh.rotation.set( 2 * Math.random(), 2 * Math.random(), 2 * Math.random() );

		const edgesGeometry = new THREE.EdgesGeometry( mesh.geometry );
		const edgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000 } );
		const surfaceEdge = new THREE.LineSegments( edgesGeometry, edgesMaterial );

		mesh.add( surfaceEdge );
		scene.add( mesh );

	}

}



## PATH / 2D

// http://mrdoob.github.io/three.js/docs/#Reference/Extras.Core/Path


.moveTo ( x, y )
.lineTo ( x, y )

		var path
		path = new THREE.Path();
		path.fromPoints( [ v2( 10, 10 ), v2( 10, -10 ), v2( -10, -10 ), v2( -10, 10 ) ] );


		pts2D = path.getPoints(); <<<

		points = [];

		for ( var i = 0; i < pts2D.length; i++ ) {

			points.push( v( pts2D[ i ].x, 0, pts2D[ i ].y ) );

		}

			var line;
			geometry = new THREE.Geometry();
			geometry.vertices = points;
			material = new THREE.LineBasicMaterial( { color: 'magenta' } );
			line = new THREE.Line( geometry, material );
			scene.add( line );





## POINTS



## RENDERER

		renderer.shadowMapEnabled = true;
//		renderer.shadowMapSoft = true;




## SCENE

* http://threejs.org/docs/#Reference/Scenes/Scene
	* See overrideMaterial

http://stackoverflow.com/questions/14397596/add-custom-event-to-object3d
- includes scene


	function addShadowsToMeshesInScene( scene ) {

		if ( ! scene ) { return; }

		scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				child.castShadow = true;
				child.receiveShadow = true;
				child.frustumCulled = false;

			}

		} );

	};



## SHADOWS

		light.castShadow = true;

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		renderer.gammaInput = true;
		renderer.gammaOutput = true;

		renderer.shadowMap.enabled = true;


## SHAPES

https://threejs.org/docs/#api/extras/core/Path

// http://threejs.org/docs/#Reference/Extras.Core/Shape


#### Quick Shapes

function getShape( points ) {

		const v2 = function( x, y ){ return new THREE.Vector2( x, y ); };
		points = points || [ v2( 0, 0 ), v2( 50, 0 ), v2( 30, 60 ), v2( 0, 40 ) ];
		const shape = new THREE.Shape( points );
		const geometry = new THREE.ShapeGeometry( shape );

		const material = new THREE.MeshNormalMaterial( { side: 2 } );
		const mesh = new THREE.Mesh( geometry, material );
		return mesh;

}


//https://threejs.org/docs/#api/geometries/ExtrudeGeometry

	function buildShapeWithHole() {

		let shape, hole;
		let geometry, material, mesh;
		const v2 = function( x, y ){ return new THREE.Vector2( x, y ); };

//

		shape = new THREE.Shape( [ v2( 0, 10), v2( 0, 50), v2( 30, 60), v2( 40, 10) ] );
		tee = new THREE.Shape( [ v2( 0, 0 ), v2( 0, 50 ), v2( 10, 50 ), v2( 10, 30 ), v2( 50, 30 ), v2( 50, 20 ) , v2( 10, 20 ), v2( 10, 0 ) ] );

// not		geometry = shape.extrude( { amount: 10, bevelEnabled: false } );

		shape.absarc( 0, 0, 50, 0, 2 * Math.PI );
//

		shape = new THREE.Shape( vertices );


		var hole = new THREE.Path();
//		hole.fromPoints( [ v2( 10, 10 ), v2( 30, 10 ), v2( 30, 40 ), v2( 10, 40 ) ] );
		hole.absarc( 20, 20, 10, 0, -2 * Math.PI );

		shape.holes.push( hole );

// choose one
		// not geometry = shape.extrude( { amount: 10, bevelEnabled: false, curveSegments: 8, steps: 3 } );
		geometry = new THREE.ExtrudeGeometry( shape, { bevelEnabled: false, amount: 10 } );
//		geometry = new THREE.ShapeGeometry( shape );
//		geometry = shape.makeGeometry( { curveSegments: 30 } );

		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );

	}



## Shape Utils Area

https://threejs.org/docs/#api/extras/ShapeUtils

THREE.ShapeUtils.area( vertices ).toLocaleString();



## SPLINES

// http://jaanga.github.io/cookbook-threejs/examples/animation/nice-path/nice-path-spline-r1.html
// http://jaanga.github.io/cookbook-threejs/examples/geometry/curves/curves-r1.html


	function drawSpline() {
		function v( x, y, z ){ return new THREE.Vector3( x, y, z );

		var spline = new THREE.SplineCurve3( [
			v(-100, 0, 0),
			v(-50, 50, 20),
			v( 0, 0, 0 ),
			v( 50, -50, -20),
			v(100, 20, 0)
		] );

//		var path = new THREE.Path( curve.getPoints( 150 ) );
//		geometry = path.createPointsGeometry( 150 );

		splinePoints = spline.getPoints( 150 );
		geometry = new THREE.Geometry();
		for ( var i = 0; i < splinePoints.length; i++) {
			geometry.vertices.push(splinePoints[i]);
		}

		var material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
		var line = new THREE.Line( geometry, material );
		scene.add( line );

	}

## OBJECTS

### SPRITE

* https://threejs.org/docs/#api/en/objects/Sprite
* https://threejs.org/docs/#api/en/materials/SpriteMaterial

const spriteMaterial = new THREE.SpriteMaterial( { color: 0xff0000 } );
const sprite = new THREE.Sprite( spriteMaterial );
sprite.scale.set(200, 200, 1)
scene.add( sprite );



## TWEEN

See files



### WIREFRAME

		<button onclick=mesh.material.wireframe=!mesh.material.wireframe; >wireframe</button>



## MATH


>> angles-normalize-r1.html

		pt1 = geometry.vertices[ 0 ];
		pt2 = geometry.vertices[ 2 ];

		vectorDelta = pt2.clone().sub( pt1 );
		angle = Math.atan2( vectorDelta.y, vectorDelta.x );

		geometry.applyMatrix( new THREE.Matrix4().makeRotationZ( - angle ) );


Also: THREE.Math.degToRad https://threejs.org/docs/#api/math/Math


### MATH COLOR / Random

trick
		mesh.scale.z = -1;

http://mrdoob.github.io/three.js/docs/#Reference/Math/Color

	var color = new THREE.Color();
	var color = new THREE.Color( 0xff0000 );
	var color = new THREE.Color("rgb(255,0,0)");
	var color = new THREE.Color( 1, 0, 0 );


	material.color.setHSL( colors[i], 0.8, 0.5 );

	var colors = generateColors( 100 ) ;

	function generateColors( count) {

		var delta = 1.0 / count;
		var arr = [];

		for (var i = 0; i < count; i++ ) {

			arr.push( i *  delta );

		}

		return arr;

	}


THREE.ColorKeywords = { 'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4, 'azure': 0xF0FFFF,
'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD, 'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
'cornflowerblue': 0x6495ED, 'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
'floralwhite': 0xFFFAF0, 'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF, 'gold': 0xFFD700,
'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD,
'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32 };

var color = new THREE.Color( 'skyblue' );


### Spherical coordinates

https://threejs.org/docs/#api/math/Spherical

		phi - polar angle from the y (up) axis. Default is 0.
		theta - equator angle around the y (up) axis. Default is 0.

		spherical = new THREE.Spherical( radius : Float, phi : Float, theta : Float );
		spherical = new THREE.Spherical().setFromVector3 ( new THREE.Vector3( 1, 1, 1 ) );

		vector = new THREE.Vector3().setFromSpherical ( spherical );
		mesh.position.setFromSpherical( spherical );
		mesh.rotation.setFromVector3( vector );


### Vector3

http://mrdoob.github.io/three.js/docs/#Reference/Math/Vector3


		.clamp()
		.distanceTo()
		.fromArray( array )
		.toArray( array );


		vv = pt.clone().sub( pt );
		var rad2 = Math.atan2( vv.z, vv.x ); // In radians



### VECTOR

vecto to fixed string

		var map2fixed = function( vect ) { return vect.toArray().map( function( num ){ return num.toFixed( 3 ); } ) };



## THREE.JS SCRIPTS

<script src=http://mrdoob.github.io/three.js/examples/js/Detector.js ></script>
<script src=http://mrdoob.github.io/three.js/build/three.min.js ></script>
<script src=http://mrdoob.github.io/three.js/examples/js/controls/TrackballControls.js ></script>
<script src=http://mrdoob.github.io/three.js/examples/js/libs/stats.min.js ></script>

<script src="http://mrdoob.github.com/three.js/examples/fonts/gentilis_bold.typeface.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/fonts/gentilis_regular.typeface.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/fonts/optimer_bold.typeface.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/fonts/optimer_regular.typeface.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/fonts/helvetiker_bold.typeface.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/fonts/helvetiker_regular.typeface.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/fonts/droid/droid_sans_regular.typeface.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/fonts/droid/droid_sans_bold.typeface.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/fonts/droid/droid_serif_regular.typeface.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/fonts/droid/droid_serif_bold.typeface.js"></script>


<script src="https://raw.github.com/mrdoob/three.js/r59/build/three.min.js"></script>
<script src="https://raw.github.com/mrdoob/three.js/r47/examples/js/Stats.js"></script>
<script src="https://raw.github.com/mrdoob/three.js/r47/examples/fonts/helvetiker_bold.typeface.js" ></script>

<script src=http://cdnjs.cloudflare.com/ajax/libs/three.js/r66/three.min.js ></script>


<script src = "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r100/build/three.min.js" ></script>
<script src = "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r100/examples/js/controls/OrbitControls.js" ></script>


<script src = "https://cdn.rawgit.com/mrdoob/three.js/r96/build/three.min.js" ></script>
<script src = "https://cdn.rawgit.com/mrdoob/three.js/r96/examples/js/controls/OrbitControls.js" ></script>


## Tricks

	function convertPosition( lat, lon, radius ) {
		var rc =  radius * cos( lat );
		return new THREE.Vector3( rc * cos( lon), radius * sin( lat ), rc * sin( lon ) );
	}


	var v = function( x, y, z ){ return new THREE.Vector3( x, y, z ); };
	var v2 = function( x, y ){ return new THREE.Vector2( x, y ); };
	const v = ( x, y, z ) => new THREE.Vector3( x, y, z );

	var pi = Math.PI;
	var pi05 = 0.5 * pi;
	var pi_05 = -0.5 * pi;
	var pi2 = 2 * pi;

	var pi = Math.PI, pi05 = pi * 0.5, pi2 = pi + pi;
	var d2r = pi / 180, r2d = 180 / pi;  // degrees / radians

	var ran = function( n ) { return n * Math.random(); };
	var cos = function( a ){ return Math.cos( a ); };
	var sin = function( a ){ return Math.sin( a ); };

	var sign = function( n ) { return Math.sign( n ); };

	var sin = Math.sin;
	var cos = Math.cos;
