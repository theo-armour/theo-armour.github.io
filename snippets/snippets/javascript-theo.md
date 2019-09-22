# JavaScript

## Vanilla JavaScript

* https://github.com/topics/javascript
* http://vanilla-js.com/
* https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks
	* https://github.com/snipcart/learn-vanilla-js
* https://plainjs.com/
* https://30secondsofcode.org/

Forums

* https://www.freecodecamp.org/forum/c/javascript

## CSS

	var css = document.head.appendChild( document.createElement('style') );
	css.innerHTML ='body { font: 600 12pt monospace; margin: 0; overflow: hidden; }';


	title = location.href.split( '/' ).pop().slice( 0, -5).replace( /-/g, ' ' );


## Useful things / LOOPs

		for ( let i = 0; i < 2; i++ ) {

			for ( let j = 0; j < 2; j++ ) {

			}

		}

		for ( var i = 0; i < 2; i++ ) {
			for ( var j = 0; j < 2; j++ ) {
				for ( var k = 0; k < 2; k++ ) {

				}
			}
		}


		for ( let i = 0; i < iLength; i++ ) {
			for ( var j = 0; j < jLength; j++ ) {

			}
		}

		for ( var x = 0; x < xLen; x++ ) {
			for ( var y = 0; y < yLen; y++ ) {

			}
		}



# details

	<div>

		<details>

		<summary>About</summary>

		<p>
			Copyright &copy; <script> document.write( ( new Date() ).getFullYear() ); </script> Ladybug Tools authors.
			<a href=http://github.com/ladybug-tools/spider/ >MIT license</a>.
		</p>

		<p>
			Click the 'i in a circle' info icon for more <a href=#README.md title="Click here for help and information" >help</a>.
		</p>


		</details>

	</div>


## div draggable

// jaanga.github.io\cookbook-html\examples\ui-ue\div-draggable2\div-draggable2.html


// jaanga.github.io/cookbook-html/examples/ui-ue/div-draggable2/div-draggable-snippet-test.html#
	var menu, info;

	function addCSS() {
		var css = document.body.appendChild( document.createElement('style') );
		css.innerHTML = 'body { font: 600 12pt monospace; margin: 0; overflow: hidden; }' +
			'h1 { margin: 0; }' +
			'h1 a {text-decoration: none; }' +
			'#closer { /* position: absolute; right: 5px; top: 5px; */}' +
			'#movable { left: 20px; overflow: auto; padding: 10px; position: absolute; top: 20px; }' +
		'';
	}

	function addMenu() {
		menu = document.body.appendChild( document.createElement( 'div' ) );
		menu.id = 'movable';
		menu.style.cssText = ' background-color: #ccc; opacity: 0.8; ';
		menu.addEventListener( 'mousedown', mouseMove, false );
		menu.innerHTML = '<a href=# id=closer style=text-decoration:none; >[x]</a>' +
			'<h1>' +
				'<a href="" >' + document.title + '</a> ' +
				'<a href=# id=infoIcon onclick=info.style.display="block"; >&#x24D8;</a>' +
			'</h1>' +
			'<p>' +
				'Zoom: &nbsp;  &nbsp;<input id=setZoom title="0 to 18: OK" type=number min=0 max=18 step=1 ><br>' +
				'Pretty colors: <input id=inpPretty type=checkbox ><br>' +
				'Overlay: <select id=selList title="Select the 2D overlay" >select option<select><br>' +
				'<input type=button onclick=saveIt(); value="Save as PNG" >' +
			'</p>' +
			'<hr>' +
			'<p>' +
				'More...' +
			'</p>' +
			'<div id=messages></div>' +
		'';

		closer.onclick = function() { movable.style.height = movable.style.height ==="12px" ? "" : "12px"; };

//		var data = requestFile( sourceDir + fileList );
//		files = data.split(/\r\n|\n/);

		var list = [ 'aaa','bbb','ccc','ddd','eee' ];
		for (var option, i = 0; i < list.length; i++) {
			option = document.createElement( 'option' );
			option.innerText = list[i];
			selList.appendChild( option );
		}

		selList.onchange = function() { requestHGTFile( sourceDir + files[ selHGT.selectedIndex ] ); };
		selList.selectedIndex = 1;

		window.addEventListener('mouseup', mouseUp, false);
	}


	function addInfo() {
		info = document.body.appendChild( document.createElement( 'div' ) );
		info.style.cssText = 'display: none; background-color: #ccc; left: 50px; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; left: 0; height: 370px; margin: auto; position: absolute; right: 0; top: 0; width: 500px; zIndex:10; ';
		info.innerHTML =
			'<div onclick=info.style.display="none"; >' +
				'<h3>' + document.title + '</h3>' +
				'<h4>Features include the following:</h4>' +
				'<ul>' +
					'<li>xxx</li>' +
					'<li>xxx</li>' +
				'</ul>' +
				'<a href="https://github.com/jaanga/xxxxxxxxxxxxxx" target="_blank">Source code</a><br>' +
				'<small>' +
					'credits: <a href="http://threejs.org" target="_blank">three.js</a> - ' +
					'<a href="http://khronos.org/webgl/" target="_blank">webgl</a> - ' +
					'<a href="http://jaanga.github.io" target="_blank">jaanga</a><br>' +
					'copyright &copy; 2014 Jaanga authors ~ MIT license' +
				'</small><br><br>' +
				'<i>Click anywhere in this message to hide...</i>' +
		'</div>';
		infoIcon.style.cssText += 'text-decoration: none; ';
		infoIcon.title = 'Get information';
		//infoIcon.onclick = 'info.style.display="block";';  // not work
	}

// events
	function mouseUp() {
		window.removeEventListener('mousemove', divMove, true);
	}

	function mouseMove( event ){
		if ( event.target.id === 'movable' ) {
			event.preventDefault();

			offsetX = event.clientX - event.target.offsetLeft;
			offsetY = event.clientY - event.target.offsetTop;
			window.addEventListener('mousemove', divMove, true);
		}
	}

	function divMove( event ){
		event.target.style.left = ( event.clientX - offsetX ) + 'px';
		event.target.style.top = ( event.clientY - offsetY ) + 'px';
	}



### GRADIENT RANDOM

	function setRandomGradient() {

		cssBackround = document.body.appendChild( document.createElement('style') );

		var col1 = "#" + Math.random().toString(16).slice(2, 8);
		var col2 = "#" + Math.random().toString(16).slice(2, 8);
		var col3 = "#" + Math.random().toString(16).slice(2, 8);
		var X = ( Math.random() * window.innerWidth ).toFixed(0);
		var Y = ( Math.random() * window.innerHeight ).toFixed(0);
		var center =  20 + ( Math.random() * 60 ).toFixed(0);

		cssBackround.innerText = 'body { ' +
			'background: -webkit-radial-gradient(' + X + 'px ' + Y + 'px, farthest-corner, ' + col1 + ' 0%, ' + col2 + ' 50%, ' + col3 + ' 100%); ' +
			'background: -moz-radial-gradient(' + X + 'px ' + Y + 'px, farthest-corner, ' + col1 + ' 0%, ' + col2 + ' 50%, ' + col3 + ' 100%); ' +
			'background: radial-gradient(' + X + 'px ' + Y + 'px, farthest-corner, ' + col1 + ' 0%, ' + col2 + ' 50%, ' + col3 + ' 100%); }' +
		'';

	};



### Two panel setup

	document.body.style.cssText = 'font: bold 12pt monospace; margin: 0 5px; overflow: hidden;';

	var leftDiv = document.body.appendChild( document.createElement( 'div' ) );

	leftDiv.innerHTML = '<p>gather elevation batches - ' +
		'<a href="#" onclick="getTiles(1, 85, -179, 4 );">get tiles</a> - ' +
		'<a href="#" onclick="requestStart();">requestData</a>' +
	'</p>';

	var leftArea = document.body.appendChild( document.createElement( 'textarea' ) );
	leftArea.style.cssText = 'border: 1px solid black; height: 90%; overflow-x: scroll; overflow-y: auto; ' +
		'padding: 5px; position: absolute; top: 50px; width: 48%;';
	leftArea.value = '';

	var rightDiv = document.body.appendChild( document.createElement( 'div' ) );
	rightDiv.style.cssText = 'left: 50%; position: absolute; top: 5px;';
	rightDiv.innerHTML =
		'<button onclick="saveText()" >Save the Data</button> ' +
		'<scan id="info2"></scans>' +
	'';

	var rightArea = document.body.appendChild( document.createElement( 'textarea' ) );
	rightArea.style.cssText = 'border: 1px solid black; height: 90%; left: 50%; overflow-x: scroll; overflow-y: auto; ' +
	'padding: 5px; position: absolute; top: 50px; width: 48%;';
	rightArea.value = '';
