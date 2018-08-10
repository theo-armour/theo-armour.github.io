
		const div = document.body.appendChild( document.createElement( 'div' ) );
		div.style.cssText = ' max-width: 500px, position: absolute: right: 30px, top: 20px; }


# requestIdleCallback

https://www.sitepoint.com/how-to-schedule-background-tasks-in-javascript/?utm_source=javascriptweekly&utm_medium=email




# Easily create an HTML editor with DesignMode and ContentEditable document.body.style.color

https://hackernoon.com/easily-create-an-html-editor-with-designmode-and-contenteditable-7ed1c465d39b#.hh7gdokty

very good:
https://medium.freecodecamp.com/10-tips-to-maximize-your-javascript-debugging-experience-b69a75859329#.g3fu2ql70

document.designMode = true for the entire document
element.contentEditable = 'true for just one element.

getEventListeners( menu )
monitorEvents($('#menu'))
inspect( menu )
dir( menu )
console.table( scene )

console.time('myTime');
console.timeEnd('myTime');

clear()


## ECMA 6

		let x = 6

template strings.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings


### GitHub Source

https://cdnjs.com/
src=http://cdnjs.cloudflare.com/ajax/libs/three.js/r66/three.min.js
src=http://rawgit.com/mrdoob/three.js/dev/build/three.min.jsf


### Scroll into View

		msg1.innerHTML = txt + '<p id=endof ></p>' ;
		endof.scrollIntoView();


### CALLBACKS


use this inside a function when creating global variables...


just use 'this' wherever possible


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



### AJAX 2

// http://www.html5rocks.com/en/tutorials/file/xhr2/
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Handling_binary_data


// https://crossorigin.me/
// https://cors-anywhere.herokuapp.com/

		let url;

		const urlCORS = 'https://cors-anywhere.herokuapp.com/';

		requestFile( url );

	}

	function requestFile( url ) {

//		let xhr;

		xhr = new XMLHttpRequest();
		xhr.crossOrigin = 'anonymous';
		xhr.open( 'GET', url, true );
		xhr.onerror = function( xhr ) { console.log( 'error:', xhr  ); };
		xhr.onprogress = function( xhr ) { console.log( 'bytes loaded:', xhr.loaded  ); }; /// or something
		xhr.onload = callback;
		xhr.send( null );

		function callback( xhr ) {

			let response, json, lines;

			response = xhr.target.response;
			console.log( 'response', response );

			divContents.innerHTML = response;

			//			json = JSON.parse( response );
			//console.log( 'json', json );
			// JSON.stringify( dxf, null, ' ' )
			// or
			//			lines = response.split(/\r\n|\n/);
			///			lines = response.split( '\n' ).map( function( line ) { return line.split( ',' ); } );

			//			console.log( 'line 8',lines[ 8 ] );
			//			console.log( 'length', lines.length );

			//			lastMod = xhr.target.getResponseHeader ( "Last-Modified" );
			console.log( xhr.target.getResponseHeader ( "Last-Modified" ) );

		}

	}


////////////////////


	function requestFile( fileName, callback, index ) {

		var xhr;

		xhr = new XMLHttpRequest();
		xhr.crossOrigin = 'anonymous';
		xhr.open( 'GET', fileName, true );
		xhr.onerror = function( xhr ) { console.log( 'error', xhr  ); };
		xhr.onload = function( xhr ){ callback( xhr, index ) };
		xhr.send( null );

		function callback( xhr, index ) {

console.log( index, xhr.target.response );

		}

	}

////////////////

	var xmlHttp;
	var byteArray;
	var changes = 0

	requestFile( url, callback );

	function requestFile( fileName, callback ) {

		xmlHttp = new window.XMLHttpRequest();
		xmlHttp.open( 'GET', fileName, true );
		xmlHttp.responseType = 'arraybuffer';
		xmlHttp.setRequestHeader( 'Range', 'bytes=' + start + '-' + stop );
		xmlHttp.onreadystatechange = callback;
		xmlHttp.send( null );

	}


	function callback() {

		if ( xmlHttp.readyState === 4  ) {

			byteArray = new Uint8Array( xmlHttp.response );

			console.log( byteArray.length );

		} else {

			parent.msg.innerHTML = 'file:' + url + '<br>' +
				'state changes:' + ( ++changes ) + ' state:' + xmlHttp.readyState + ' ' +
				'status:' + xmlHttp.status + ' ' +
				'text:' + xmlHttp.statusText +
			'';

		}

	}


//////////////


	var xmlhttp;
	function requestFile() {
		dataPlay = false;
		xmlhttp = new XMLHttpRequest();
		xmlhttp.open( 'GET', fname, true );
		xmlhttp.onreadystatechange = callbackFile;
// http://stackoverflow.com/questions/15561508/xmlhttprequest-206-partial-content

//	xmlhttp.setRequestHeader('Range', 'bytes=' + start + '-' + stop );
//	xmlhttp.setRequestHeader('Range', 'bytes=100-200');
		xmlhttp.send( null );
		callbackCount = 0;
	}

	function callbackFile() {
		if ( xmlhttp.readyState == 4  ) {
			var text = xmlhttp.responseText;
			var lines = text.split(/\r\n|\n/);
			lines[0] = lines[0].replace(/["']/g, ""); // better to delete in original files
			var length = lines.length - 1;
			var data = [];
			var sep = ',';
			for ( var i = 0; i < length; i++ ) {
				data.push( lines[i].split( sep ) );
			}
		} else {
console.log('waiting...');
		}
	}

	var response;
	function callbackFile() {
		if ( xmlhttp.readyState == 4  ) {
			response = JSON.parse(xmlhttp.responseText);
		} else {
console.log('waiting...');
		}
	}



## ARRAYS

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// http://www.w3schools.com/jsref/jsref_obj_array.asp

Array.from( An array-like or iterable object to convert to an array )

	AA.doSomethingWithObjOrArrayOfObj = function( obj ) {

		const obj = Array.isArray( obj ) ? obj : [ obj ];


- add them all...

a.concat(item[, itemN]) Returns a new array with the items added on to it.
a.find( function ) http://www.w3schools.com/jsref/jsref_find.asp
a.join( sep )
a.map( function ) apply function to all elements
a.pop() Removes and returns the last item.
a.push(item[, itemN]) Push adds one or more items to the end.
a.reverse()
a.shift()
a.slice( start, end) Returns a sub-array. Negative OK array.slice( -3 ) gets an array of last 3 elements

a.sort( [cmpfn] ) Takes an optional comparison function.
a.splice(start, delcount[ , itemN] ) Lets you modify an array by deleting a section and replacing it with more items.

a.toString()
a.toLocaleString()
a.unshift([item]) Prepends items to the start of the array.


### ARRAY Duplicates

* https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array


arr = arr.filter( (value, index, array) => array.indexOf (value) == index );

### ARRAY Split to Float

		elevations = data.split( ',' ).map( function( item ) { return parseFloat( item ); } );
		txtline = lines[ i ].split( ',' ).map( parseFloat );

		waypoints = xhr.responseText.split( '\n' ).map( function( point ) { return point.split( ',' ).map( parseFloat ); } );



### ARRAY Min/Max

		var max_of_array = Math.max.apply( Math, array);
		var min_of_array = Math.min.apply( Math, array);

// http://stackoverflow.com/questions/1669190/javascript-min-max-array-values

			min = arrayMin( elevations );
			max = arrayMax( elevations );

	function arrayMin( arr ) {

		var len = arr.length, min = Infinity;

		while ( len-- ) {

			if ( arr[ len ] < min) { min = arr[ len ]; }

		}

		return min;

	}

	function arrayMax( arr ) {

		var len = arr.length, max = -Infinity;

		while ( len-- ) {

			if (arr[len] > max) { max = arr[len]; }

		}

		return max;

	}




### Array Multi Dim

	var a = [];
	for (i = 0; i < 4; i++) {
	  a[i] = [];
	  for (j = 0; j < 4; j++) {
		a[i][j] = "[" + i + "," + j + "]";
	  }
	}
	console.log( a );

	for ( var i = 0, item; item = a[i++]; ) { << not
		// Do something with item
	}

see cookbook/array/array-pop-while-switch


### Array random

		get_random = function ( list ) {

			return list[ Math.floor( ( Math.random() * list.length ) ) ];

		}

		get_random( [ 2, 3, 5 ] )

		var list = [1,2,3];

		console.log( list.sort( function() { Math.random() - 0.5 } ) ); // [2,1,3]



## Bitwise / Boolean

~~ = Math.floor()

!!thing = turns thing into a boolean



### CANVAS >> see its own file: snippets.canvas.txt



## CHARACTERS
- see also html snippets

		String.fromCharCode(10) // LF
		String.fromCharCode(13) // CR 32 = space
		String.fromCharCode(0x24D8) // i inside circle





## COLORS

// http://www.paulirish.com/2009/random-hex-color-code-snippets/
		'#' + Math.floor( Math.random() * 16777215 ).toString( 16 );

		function ranCol() {

			return '#'+Math.floor(Math.random()*16777215).toString(16);

		}



## COLORS

check on FF....


random gradient background

		css = document.body.appendChild( document.createElement('style') );
		var col1 = "#" + Math.random().toString(16).slice(2, 8);
		var col2 = "#" + Math.random().toString(16).slice(2, 8);
		var col3 = "#" + Math.random().toString(16).slice(2, 8);
		var X = ( Math.random() * window.innerWidth ).toFixed(0);
		var Y = ( Math.random() * window.innerHeight ).toFixed(0);
		var center =  20 + ( Math.random() * 60 ).toFixed(0);

		css.innerHTML = 'body { color: #888; font: 600 14pt monospace; margin: 0; height: 1000px; overflow: hidden; text-align: center; ' +
			'background: -webkit-radial-gradient(' + X + 'px ' + Y + 'px, farthest-corner, ' + col1 + ' 0%, ' + col2 + ' 50%, ' + col3 + ' 100%); ' +
			'background: -moz-radial-gradient(' + X + 'px ' + Y + 'px, farthest-corner, ' + col1 + ' 0%, ' + col2 + ' 50%, ' + col3 + ' 100%); ' +
			'background: radial-gradient(' + X + 'px ' + Y + 'px, farthest-corner, ' + col1 + ' 0%, ' + col2 + ' 50%, ' + col3 + ' 100%); }' +
		'';



## CSS

https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables

// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);


### DATES

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

	var daysOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
	var daysOfMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	var date = new Date();

	var startTime = Date.now(); // in milliseconds

// https://developer.mozilla.org/en-US/docs/Web/API/Performance
	var t = performnce.now();


	var hours = ('0' + date.getHours()).slice( -2 );
	var minutes = ('0' + date.getMinutes()).slice( -2 );
	var day = daysOfWeek[ date.getDay() ];
	var tim = hours + ':' + minutes;


// http://stackoverflow.com/questions/11759992/calculating-jdayjulian-day-in-javascript

	Date.prototype.getJulian = function() {

		return Math.floor((this / 86400000) - (this.getTimezoneOffset()/1440) + 2440587.5);

	}

	var today = new Date(); //set any date
	var julian = today.getJulian(); //get Julian counterpart

http://voidcanvas.com/timezone-local-date-object-in-javascript/

		var datetimeStr = "2015-10-13T12:30:00";
		var date = new Date( datetimeStr );
		date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
		console.log( date.toString() );


var datetimeStr = "2015-10-13T12:30:00"; //suppose this is UK time

// Now you want to make a date object which holds this date time in your time zone

var ukDate = new Date( new Date().toLocaleString( "en-UK", { timeZone:'Europe/London' } ) ); //London current time
var myDate = new Date(); //My current time

var timeDifference = myDate - ukDate;
var differenceInMinutes = Math.floor( timeDifference/( 1000*60 ) );

var date = new Date( datetimeStr );
date.setMinutes( date.getMinutes() + date.getTimezoneOffset() + differenceInMinutes );

console.log( date.toString() ); // Tue Oct 13 2015 17:00:00 GMT+0530 (IST)



## DETAILS

* https://developer.mozilla.org/en-US/docs/Web/API/FileReader
* https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications

* http://thenewcode.com/680/Feature-Detection-and-Styling-For-The-HTML5-details-Element

		txt =

			'<details open >' +
				'<summary><h3>file reader</h3></summary>' +
				'<p><input type=file id=inpFile onchange=openFile(this); ></p>' +
				'<textarea id=textArea style=height:500px;overflow:auto;width:100%; ></textarea>' +
				'<div id=menuOpenFile ></div>' +
			'</details>' +
		'';

		return txt;


## Details

function toggleOpen() {

	if (details.getAttribute('open')) {

		details.removeAttribute('open');

	} else {

		details.setAttribute('open', 'open');

	}

}



### DOCUMENT


// https://developer.mozilla.org/en-US/docs/Web/API/Document
// http://www.w3schools.com/jsref/dom_obj_document.asp

var css = document.body.appendChild( document.createElement('style') );



### DOCUMENT Write

https://www.w3schools.com/jsref/met_doc_write.asp

document.write("Hello World!");



### DOM

	var script= document.createElement('script');
	script.type= 'text/javascript';
	script.onreadystatechange= function () {
		if (this.readyState == 'complete') helper();
	}

	script.onload = helper;
	script.src = 'helper.js';
	head.appendChild(script);


	var js = document.createElement('script');
	js.setAttribute('type', 'text/javascript');
	js.setAttribute('src', fname);
	document.body.appendChild(js);

	var js = document.createElement('script');
	js.type = 'text/javascript';
	js.onload = helper;
	js.src = fname;
	document.body.appendChild( js );

	if ( !editor ) {

		editor = document.body.appendChild( document.createElement( 'script' ) );
		editor.onload = setEditContents;
		editor.src = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.5/ace.js';

	} else {

		setEditContents();

	}



https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content
https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Midas

		divContents.contentEditable = true;




## document.querySelectorAll();
* https://www.w3schools.com/jsref/met_document_queryselectorall.asp


var x = document.querySelectorAll(".example");

var x = document.querySelectorAll("button");

## DOMParser
https://developer.mozilla.org/en-US/docs/Web/API/DOMParser

var parser = new DOMParser();

var doc = parser.parseFromString(stringContainingXMLSource, "application/xml");

doc = parser.parseFromString(stringContainingSVGSource, "image/svg+xml");

var parser = new DOMParser();
doc = parser.parseFromString(stringContainingHTMLSource, "text/html");


## Escape / encodeURI()

	var uri = 'https://mozilla.org/?x=шеллы';
	var encoded = encodeURI(uri);




### EVENTS Key cursor

https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events


	let event = new Event( "bingo", {"bubbles": true, "cancelable": false, detail: true } );


//	window.addEventListener( "bingo", addAvatar );
	window.addEventListener( "bingo", addControls, false );


	window.dispatchEvent( event );



https://stackoverflow.com/questions/2381336/detect-click-into-iframe-using-javascript/23231136#23231136

		window.addEventListener( 'resize', onWindowResize, false );

		window.addEventListener( 'keyup', onKeyUp, false );

	function onKeyUp ( event ) {

//console.log( 'key', event.keyCode );

		controls.enableKeys = false;
		event.preventDefault();

		switch( event.keyCode ) {

			case 37: /* cursor left  */ goWest();  break;
			case 38: /* cursor up    */ goNorth(); break;
			case 39: /* cursor right */ goEast();  break;
			case 40: /* cursor down  */ goSouth(); break;
		}

	}



	function onKeyUp ( event ) {

console.log( 'key', event.keyCode );

		switch( event.keyCode ) {

			case 33: /*page up*/ goTo(-1); break;
			case 34: /* page down */ goTo(1); break;

		}

	}

	function goTo( thing ) {

console.log( thing );

	}






## Input Type File Open
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file

		'<h3>file reader</h3>' +
		'<p><input type=file id=inpFile onchange=openFile(this); accept = '.rad, .res, .pts' multiple ></p>' +
		'<textarea id=textArea style=height:500px;overflow:auto;width:100%; ></textarea>' +



	function openFile( files ) {

		var fileData, reader, data;

		reader = new FileReader();
		reader.onload = function( event ) {

			txtArea.innerHTML = reader.result;

			divLog.innerHTML =
				'name: ' + files.files[0].name + '<br>' +
				'size: ' + files.files[0].size.toLocaleString() + ' bytes<br>' +
				'type: ' + files.files[0].type + '<br>' +
				'modified: ' + files.files[0].lastModifiedDate.toLocaleDateString() +
			'';

console.log( '', files );

		}

		reader.readAsText( files.files[0] );

	}



## FORM ELEMENTS

	var button = body.appendChild( document.createElement( 'button' ) );
	button.innerHTML = '<s>button2</s>';


	var types = [
		['button','Button value'],['checkbox','Checkbox 1'],['file','File'], ['hidden','Hidden'], ['password','Password'],
		['radio', 'Radio'], ['text','Tra lala la ']
	];


### FORM Range
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range


		var input body.appendChild( document.createElement( 'input' ) );
		input.type = 'text';
		input.value = 'Tra la la';

		'Frequency 1:<input id=inpFrequency1 > ' +  // easier to label if in the HTML
		inpFrequency1.type = 'range';
		inpFrequency1.min = 0.00001;
		inpFrequency1.max = 0.001;
		inpFrequency1.step = 0.0001;
		inpFrequency1.title = inpFrequency1.value = frequency1;
		inpFrequency1.onchange = function() { inpFrequency1.title = frequency1 = parseFloat( this.value); };
// oninput

		'<input type=radio id=inpRad1 name=rad onclick=setRad(); value=rad1 checked /> radio 1 <input type=radio name=rad id=inpRad2 onclick=setRad(); value=rd2 /> radio 2 ' +


		<input onClick="this.select();" size=8 > // highlight the text

oninput="validity.valid||(value='');"



### FORM TEXTAREA

// '<textarea id=txtItem cols=25 rows=5>bits</textarea>' +
	var textarea = document.body.appendChild( document.createElement( 'textarea' ) );
	textarea.style.cssText = 'height: ' + (window.innerHeight - 150) + 'px; width: 50%; ';
	textarea.style.cssText = 'height: 80px; width: 250px; '; // style takes precedence over properties

	textarea.value = 'stuff...\n and more';
	textarea.cols = 50;
	textarea.rows = 8;
	textarea.placeholder = 'Stuff goes here...';
	textarea.autofocus = true;

input file + reader : see cookbook





### FORM SELECT

// http://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array

		var arr = [ [123,'aaa'],[456,'bbb'],[789,'ccc'],[012,'ddd'],[345,'eee'] ];

		var select = document.body.appendChild( document.createElement( 'select' ) );
//		var select = document.getElementById('selItem');

// size=5

		var mnu =

			'<p>' +
				'<select id=selXXX onchange="doSelect( this.selectedIndex, this.value );" size=5 ></select>' +
			'</p>' +
		'';

		for ( var i = 0; i < arr.length; i++ ) {

//			selFiles[ i ] = new Option( arr[ i ][ 0 ], arr[ i ][ 1 ] );

selSymbols.innerHTML += '<option>' + symbols.keys[ i ]  + '</option>';

//			item = arr[ i ];
//			selXXX.appendChild( document.createElement( 'option' ) );
//			selXXX.children[ i ].text = item[0];
//			selXXX.children[ i ].title = item[1];

		}

		selXXX.selectedIndex = 3;




### GLOBAL FUNCTIONS

parseInt( string, 10 ) << include the radix



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


/

### IMAGE

		var image = document.body.appendChild( document.createElement( 'img' ) );
		image.crossOrigin = 'anonymous';  // before source, needs an onload
		image.src = '../';

		var images = document.body.appendChild( document.createElement( 'div' ) );
		images.innerHTML =

			'<img id=image src=https://upload.wikimedia.org/wikipedia/en/2/24/Lenna.png > ' +
			'<canvas id=canvas width=512 height=512 style="border: 1px solid red;" ></canvas>';

		var context = canvas.getContext( '2d' );

		image.onload = function() {

			context.drawImage( image, 250, 250, 25, 25, 0, 0, 512, 512 );

		}



### LOCATION.HASH

		window.addEventListener ( 'hashchange', onHashChange, false );

		history.replaceState( '', document.title, window.location.pathname );

// http://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-with-javascript-without-page-refresh

	function onHashChange() {

		fileName = location.hash ? location.hash.split( '#' )[1] : 'readme.md';

		document.title = document.title ? document.title : fileName;
		window.history.back( 1 );

		var xhr;
		xhr = new XMLHttpRequest();
		xhr.open( 'GET', fileName, true );
		xhr.onload = function() {

			info.innerHTML = new Showdown.converter().makeHtml( xmlHttp.responseText );

		};

		xhr.send( null );

	}




### MATH

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math


>>> sin = Math.sin;


Math.atan2( y, x )

The Math.atan2() method returns a numeric value between -π and π representing the angle theta of an (x, y) point.
This is the counterclockwise angle, measured in radians, between the positive X axis, and the point (x, y).
Note that the arguments to this function pass the y-coordinate first and the x-coordinate second.

Math.atan2() is passed separate x and y arguments, and Math.atan() is passed the ratio of those two arguments.


	var pi = Math.PI, pi05 = pi * 0.5, pi2 = pi + pi;
	var d2r = pi / 180, r2d = 180 / pi;  // degrees / radians

	function cos( a ){ return Math.cos( a ); }
	function sin( a ){ return Math.sin( a ); }
	function tan( a ){ return Math.tan( a ); }

	function exp( a ){ return Math.exp( a ); }
	function log( a ){ return Math.log( a ); }
	function pow( a, b ){ return Math.pow( a, b ); }
	function ran(){ return Math.random(); }
	function sign( a ){ return Math.sign( a ); }
	function sqrt( a ){ return Math.sqrt( a ); }

	function cosh( a ){ return Math.cosh( a ); }
	function sinh( a ){ return Math.sinh( a ); }
	function tanh( a ){ return Math.tanh( a ); }

	function sech( a ){ return Math.sech( a ); }



### META

See theo-armour.github.io/ucsf2/pookeepon-go/
See https://github.com/ladybug-analysis-tools/ladybug-web/blob/gh-pages/ladybug-web-via-github-api-r2.html#L188-L200
See http://stackoverflow.com/questions/7524585/how-do-i-get-the-information-from-a-meta-tag-with-javascript

	document.head.querySelector( '[name=description]' ).content;




### NAMESPACE


files

	aabb-bbb-bbbb.js

Where
* aa = project name in two letters
* bb = topic in two letters
* bbb-bbbb = topic spelled out

So when you see aabb.doIt() in code you know exactly which file to go to.




### NUMBER

Formatting

	Number(x).toLocaleString();
	( 123456789 ).toLocaleString();

Nicely formatted integer

	Math.round( 12345.12345 ).toLocaleString();


Old school: number with commas

	Number.prototype.format = function (){

		return this.toString().replace( /(\d)(?=(\d{3})+(?!\d))/g, "$1," );

	};




### OBJECTS

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

Array.from( obj )

		var object = object || {};
		var Object.getOwnPropertySymbols( object );  // ??
		var Object.getOwnPropertyNames( object );  // all keys


		var keys = Object.keys( object );  // enumerable

http://stackoverflow.com/questions/208016/how-to-list-the-properties-of-a-javascript-object

		var keys = Object.keys( times );

		for ( var i = 0; i < keys.length; i++ ) {

			info.innerHTML += keys[ i ] + ': ' + times[ keys[ i ] ] + '<br>';

		}


	if ( 'speechSynthesis' in window )



https://stackoverflow.com/questions/722668/traverse-all-the-nodes-of-a-json-object-tree-with-javascript
http://2ality.com/2015/10/property-traversal-order-es6.html

	function traverse( obj ) {

		for ( i in obj ) {

//			if ( !!obj[ i ] && typeof( obj[ i ] ) === 'object' ) {
			if ( obj[ i ] !== null && typeof( obj[ i ] ) === 'object' ) {

console.log( i, obj[ i ]);

				traverse( obj [ i ] );

			}

		}

	}


### OPERATORS

Conditional Operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// http://www.w3schools.com/jsref/jsref_operators.asp

		this.intensity = intensity !== undefined  ? intensity : 1;
		var index = ( parent.$ !== undefined ) ? parent.$.elements.thm.mapGlobe : 2;

		var thing = ( x !== undefined ) ? x : 1;





### REGEXP

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// http://www.w3schools.com/jsref/jsref_obj_regexp.asp
// http://www.w3schools.com/jsref/jsref_replace.asp

// Shortcuts

		fileName = heightMap.src.split( '/' ).pop().toLowerCase();
		var extension = fileName.split( '.' ).pop().toLowerCase();

SEE spider / gbxml viewer / assets / get read me files

function parseFile( text, pattern ){


		const re = new RegExp( pattern, "gim" );
		match = re.exec( text );
		//console.log( 'match', match );

		if ( match && match.length ) {

			//divContents.innerText += match[ 0 ].slice( match[ 0 ].indexOf( '\n'), -3 );
			divContents.innerText += '\n' + match[ 0 ].slice( 4, -3 );

		}

}

>>> /xxx(.*?)xxx/gi

* (.*?) Matches anything in between
* May need to have a backslash: \(.*?)

.match( /<h1(.*?)>(.*?)<\/h1>/ )

stringWithQuotes.replace(/["']/g, "");

		MNU.files = MNU.tableOfContents.replace( /(.*)\((.*)\)(.*)/gi, '$2' ).split( '\n' );



RegExp Modifiers
[0-9] replace class of number

/i ~ case insensitive
/g ~ global/greedy
/m ~ multiline

\'' single quote
\"" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f form


(x) Matches 'x' and remembers the match, as the following example shows. The parentheses are called capturing parentheses.



### SAVE FILE

//file:///C:/Users/Theo/Dropbox/Public/code-cookbook/0-cookbook-general/file-save-api/file-saver-2015-02-26/file-saver.html
//http://ausdemmaschinenraum.wordpress.com/2012/12/06/how-to-save-a-file-from-a-url-with-javascript/

	var info = document.body.appendChild( document.createElement( 'div' ) );
	info.innerHTML = '<a href="" ><h1>' + document.title + '</h1></a>' +
		'<p><button onclick=saveFile(); >Save File</button></p>' +
		'<div id=msg ></div>' +
		'<div>' +
		'<textarea id=txtArea name="txt1" cols="80" rows="50" placeholder="Stuff" >' +
		'Iteration system wide engenders economies of scale, cross-media technology, presentation action items and life cycle replication.' +
		'</textarea>' +
	'</div>';

	function saveFile() {

		var blob = new Blob( [ txtArea.innerHTML ] );
		var a = document.body.appendChild( document.createElement( 'a' ) );
		a.href = window.URL.createObjectURL( blob );
		a.download = 'hello-world.txt';
		a.click();
//		delete a;
		a = null;

	}


// UTF-16

// https://stackoverflow.com/questions/27318715/blob-url-with-utf-16le-encoding


### setTimeout


setTimeout( function(){ controls.autoRotate = true; }, 3000);

See

https://developers.google.com/web/updates/2015/08/using-requestidlecallback


### SPEECH SYNTH
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
// http://stackoverflow.com/questions/21513706/getting-the-list-of-voices-in-speechsynthesis-of-chrome-web-speech-api

// file:///C:/Users/Theo/Dropbox/Public/git-repos/jaanga.github.io/cookbook-html/examples/text-to-speech/


	if ( 'speechSynthesis' in window ) {

console.log( 'You\'re good to go!' )

	} else {

console.log( 'Ah man, speech synthesis isn\'t supported.' );

	}

	var synth = window.speechSynthesis;
	sayThis( 'Hello, world!' );

	function sayThis( text ) {

		var utterThis;

		synth.cancel();
		utterThis = new SpeechSynthesisUtterance( text );
		synth.speak( utterThis );

	}



### Local Storage

		const apiKey = localStorage.getItem( 'apiKey' );
		inpApiKey.value = apiKey ? apiKey : '' ;

	<p><input id=inpStoredValue onchange=setStorage(); ></p>

	function setStorage() {

		const thing = inpStoredValue.value;
		localStorage.setItem('thing', thing );

	}

	function getStorage() {

		const thing = localStorage.getItem( 'thing' );
		divContents.innerHTML += thing + b;

	}



### STRING

'my string'.startsWith('my'); //true
'my string'.endsWith('my'); // false
'my string'.includes('str'); // true

console.log(`This is ${name}.`);
console.log(`He carries ${apples} apples, ${pears} pears, and ${bananas()} bananas.`)

http://www.w3schools.com/jsref/jsref_obj_string.asp


//Convert a number to a hexadecimal string with:
		hexString = yourNumber.toString(16);
//and reverse the process with:
		yourNumber = parseInt(hexString, 16);


#### Formatting

Number(x).toLocaleString();
( 123456789 ).toLocaleString();

	var longString = ('00000' + shortString.slice( -5 );

	var texturePath = permalink.src.substr( 0, 1 + permalink.src.lastIndexOf('/') );

	var extension = fileName.split( '.' ).pop().toLowerCase();

	var fileType = ( fileName.substr( fileName.lastIndexOf( '.' ) ) );

	fileName = fullPath.substr( 1 + fullPath.lastIndexOf( '/' ) ).toLowerCase();


Number( space.area.toFixed(4) )



### SWITCH CASE

// http://www.w3schools.com/js/js_switch.asp

		switch( expression ) {

			case n:
			case nn:
				code block
				break;
			case n:
			case m:
				code block
				break;
			default:
				default code block

		}



### TIME

http://www.w3schools.com/js/js_timing.asp

setTimeout( function(){alert("Hello")},3000);

	function render() {
		var timer = Date.now() * 0.001;
		if ( parseInt( timer,10 ) %2 === 0 ){ ...


## TRY /CATCH

try {
 throw 'myException'; // generates an exception
}
catch (e) {

// statements to handle any exceptions
	logMyErrors(e); // pass exception object to error handler
}

### Validity

https://developer.mozilla.org/en-US/docs/Web/API/ValidityState

https://stackoverflow.com/questions/31575496/prevent-negative-inputs-in-form-input-type-number

oninput="validity.valid||(value='');"



### WINDOW

http://www.w3schools.com/jsref/obj_window.asp

http://www.w3schools.com/jsref/met_win_open.asp
https://developer.mozilla.org/en-US/docs/Web/API/Window/open

http://stackoverflow.com/questions/3030859/detecting-the-onload-event-of-a-window-opened-with-window-open


		if ( window.self === window.top )

		window.open("http://www.w3schools.com");
		newWindow = window.open( 'popup-r1.html','_blank', 'centerscreen' );

		const newWindow = window.open("", "MsgWindow", "width=200,height=100");
		newWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");

		window.location.protocol
		document.location.origin

		window.scrollTo( 0, 0 );


## XML handling

https://developer.mozilla.org/en-US/docs/XML_introduction
https://www.w3schools.com/xml/default.asp
https://en.wikipedia.org/wiki/XML
