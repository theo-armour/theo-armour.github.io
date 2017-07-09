

### IFRAME

http://www.w3schools.com/tags/att_iframe_sandbox.asp

sandbox='allow-scripts'

<iframe src=http://fgx.github.io/sandbox/flightpaths/vnlk/index.html width=800px height=500px onload=this.contentWindow.controls.enableZoom=false; ></iframe>

<iframe sandbox='allow-same-origin allow-scripts' src=https://jaanga.github.io/terrain3/elevations/elevations-get/index.html width=800px height=500px onload=this.contentWindow.googleMap.setOptions({scrollwheel:false}); ></iframe>



	See also snippets-html

	Access variables in parent window
	parent.variable.method

	var ifr = document.body.appendChild( document.createElement( 'iframe' ) );
	ifr.src = 'threejs-boilerplate-build.html';
	console.log( ifr.contentWindow.scene );

// http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t

	if ( window.self === window.top ) {

		document.write('<h1>Not in an iframe</h1>');

	} else {

		document.write('<h1>Inside an iframe</h1>');

	}

	var ifr = document.body.appendChild( document.createElement( 'iframe' ) );
	ifr.width = window.innerWidth;
	ifr.height = window.innerHeight;
	ifr.style.cssText = 'border: 0px solid red; margin: 0; overflow: hidden; ';

//	ifr.style.cssText = 'height: ' + (window.innerHeight - 50) + 'px; left: 300px; position: absolute; top: 5px; width: ' + (window.innerWidth - 350) + 'px; ';
	ifr.src = 'file1.html';

	ifr.srcdoc = content;

	ifr.contentWindow.doIt = function() { ifr.contentWindow.controls.autoRotate = true; }

	ifr.setAttribute( 'src', fileName );



### Messaging

	function sendMessage(){ 

		ifr.contentWindow.postMessage( 'howdy', window.origin );

	}



	window.addEventListener( 'message', receiveMessage, false);

	function receiveMessage( event ) {

console.log( '', event );
console.log( '', event.data );

//	  if (event.origin !== "http://example.org:8080" )
//		return;

	}



