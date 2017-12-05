
	var divTooToo;

	var user = 'mrdoob'
	var repo = '/three.js';
	var pathRepo = 'examples/';

	var iconInfo = '<img src="https://status.github.com/images/invertocat.png" height=14 >';

	var urlGitHubApiContents = 'https://api.github.com/repos/' + user + repo + '/contents/' + pathRepo;

	var urlGitHubPage = 'https://rawgit.com/' + user + repo + '/master/' + pathRepo;
	var urlGitHubSource = 'https://github.com/' + user + repo + '/blob/master/' + pathRepo;


	init();



	function init() {

		if ( !divTooToo ) {

			divTooToo = document.body.appendChild( document.createElement( 'div' ) );
			divTooToo.style.cssText = 
				'background-color: white; border: 1px solid red; max-height: 90%; max-width: 350px; opacity: 0.85; ' +
				'overflow: auto; padding: 10px; position: fixed; right: 30px; top: 20px; z-index:100000; ';

		}

		divTooToo.innerHTML = 
			'<h3>Three.js Examples</h3>' +
			'<p><input id=inpGetFiles onkeyup=getFiles(); ></p>' +
			'<div id=divSubMenu >ggg</div>' +
		'';

		requestFile( urlGitHubApiContents, callbackTypes );

	}


	function getFiles() {

		txt = inpGetFiles.value;

		page = '';

		for ( let i = 0; i < files.length; i++ ) {

			file = files[ i ];
console.log( '', file);

//			if ( !file.name.endsWith( '.html' ) ) { continue; } 
			if ( !file.includes( txt ) ) { continue; } 

			page +=
				'<div>' +
					'<a href=#' + urlGitHubPage + file + '.html >' + file + '</a>' +
				'</div>' +
			'';

		}

		divSubMenu.innerHTML = page;

	}


	function callbackTypes( xhr ) {

		var response = JSON.parse( xhr.target.response );
		var categories = [];
		files = [];
		var text = '';

		for ( var key in response ) {

			var file = response[ key ].name;

			if ( file.indexOf( '.html' ) === -1 || file === 'index.html' ) { continue; }

			var id = file.slice( 0, -5 );
			files.push( id );
			var title = id.split( '_' );
			var category = title.shift();
			title = title.join().replace( /,/gi, ' ' );

			if ( categories.indexOf( category ) === -1 ) {

				categories.push( category );

				text += '<h2>' + category + '</h2>';

			}

//			text += '<div><a href=JavaScript:getExample("' + file + '") >' + title + '<a></div>';
			text += ' <a href=#' + urlGitHubPage + file + ' >' + title + '</a> ' +
			'<br>';
		}

//		info.innerHTML = files.length + ' files';
		divTooToo.innerHTML += text;

		
//		scope.ifrMenuSub.style.height = ( divMenu.scrollHeight + 10 ) + 'px';
//		parent.document.body.style.overflow = 'hidden';

	}




	function callbackGitHubMenu( xhr ) {

		const response = xhr.target.response;
		const files = JSON.parse( response );
		let txt = '';

		for ( let file of files) {

			if ( !file.name.endsWith( '.html' ) ) { continue; }

			const fileName = encodeURI( file.name );

			txt += 

			'<div style=margin-bottom:8px; >' +

				'<a href=' + urlGitHubSource + fileName + ' title="Edit me" >' + iconInfo + '</a>' +

				' <a href=#' + urlGitHubPage + fileName + ' title="' + file.size.toLocaleString() + ' bytes"  >' + file.name + '</a> ' +

				'<a href=' + urlGitHubPage + fileName + ' title="Link to just this file" >&#x2750;</a> ' +

			'</div>';

		}

		divTooToo.innerHTML = txt;

		location.hash = urlGitHubPage + files[ Math.floor( Math.random() * files.length ) ].name;

	}



	function requestFile( url, callback ) {

		const xhr = new XMLHttpRequest();
		xhr.crossOrigin = 'anonymous';
		xhr.open( 'GET', url, true );
		xhr.onerror = function( xhr ) { console.log( 'error:', xhr  ); };
//		xhr.onprogress = function( xhr ) { console.log(  'bytes loaded: ' + xhr.loaded.toLocaleString() ) }; /// or something
		xhr.onload = callback;
		xhr.send( null );

	}
