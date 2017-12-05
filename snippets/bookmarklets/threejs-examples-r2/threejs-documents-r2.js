
	var divTooToo;

	var user = 'mrdoob'
	var repo = '/three.js';
	var pathRepo = 'docs/api/';

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

		requestFile( urlGitHubApiContents, callbackGitHubMenu );

	}



	function callbackGitHubMenu( xhr ) {

		const response = xhr.target.response;
		const files = JSON.parse( response );
		let txt = '';

		for ( let file of files) {


			if ( !file.name.endsWith( '.html' ) ) { continue; }
console.log( '', file  );
			const fileName = encodeURI( file.name );

			txt += 

			'<div style=margin-bottom:8px; >' +

				'<a href=' + urlGitHubSource + fileName + ' title="Edit me" >' + iconInfo + '</a>' +

				' <a href=#' + urlGitHubPage + fileName + ' title="' + file.size.toLocaleString() + ' bytes"  >' + file.name + '</a> ' +

				'<a href=' + urlGitHubPage + fileName + ' title="Link to just this file" >&#x2750;</a> ' +

			'</div>';

		}

		divTooToo.innerHTML = txt;

//		location.hash = urlGitHubPage + files[ Math.floor( Math.random() * files.length ) ].name;

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
