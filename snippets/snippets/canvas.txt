
// ### CANVAS

		canvas = parent.locationMap.appendChild( document.createElement( 'canvas' ) );
		canvas.width = canvas.height = size;
		canvas.style.cssText = 'border: 1px solid gray; ';
		context = canvas.getContext( '2d' );

	function canvasText( text, color ) {
		var canvas = document.createElement( 'canvas' );
		var context = canvas.getContext( '2d' );

		context.font = '18px sans-serif';
		var width = context.measureText( text );

		canvas.width = ( width.width + 10 ) ; // 480
		canvas.height = 20;

		context.fillStyle = color;
		context.fillRect( 0, 0, canvas.width, canvas.height);

		context.lineWidth = 1 ;
		context.strokeStyle = '#000';
		context.strokeRect( 0, 0, canvas.width, canvas.height);

		context.fillStyle = '#000' ;
		context.font = '18px sans-serif';
		context.fillText( text, 5, 17 );

		var texture = new THREE.Texture( canvas );
		texture.needsUpdate = true;
		return texture;

	}
