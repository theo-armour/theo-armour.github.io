
	var divTooToo = divTooToo || undefined;

	var gal = gal || {};

	gal.user = 'mrdoob'
	gal.repo = '/three.js';
	gal.pathRepo = 'examples/';

	var iconInfo = '<img src="https://pushme-pullyou.github.io/github-mark-64.png" height=14 >';

	gal.urlGitHubApiContents = 'https://api.github.com/repos/' + gal.user + gal.repo + '/contents/' + gal.pathRepo;

	gal.urlGitHubPage = 'https://rawgit.com/' + gal.user + gal.repo + '/master/' + gal.pathRepo;
	gal.urlGitHubSource = 'https://github.com/' + gal.user + gal.repo + '/blob/master/' + gal.pathRepo;

	gal.callbackGitHubMenu = function( xhr ) {

		var response = xhr.target.response;
		var files = JSON.parse( response );

		var txt = '';

		for ( let i = 0; i < files.length; i++ ) {

			file = files[ i ];

			if ( file.name === 'README.md' || !file.name.endsWith( '.html' ) ) { continue; }

			const fileName = encodeURI( file.name );

			txt +=

			'<div style=margin-bottom:8px; >' +

				'<a href=' + gal.urlGitHubSource + fileName + ' title="Edit me" >' + iconInfo + '</a>' +

				' <a href=JavaScript:(function(){ifrThree.src="' + gal.urlGitHubPage + fileName + '";})() title="' + file.size.toLocaleString() + ' bytes"  >' + file.name + '</a> ' +
//				' <a href=JavaScript:ifrThree.src="' + gal.urlGitHubPage + fileName + '" title="' + file.size.toLocaleString() + ' bytes"  >' + file.name + '</a> ' +

//				'<a href=' + threeDefaultFile + '#' + gal.urlGitHubPage + fileName + ' title="Link to just this file" >&#x2750;</a> ' +

				'<a href=JavaScript:openWin("' + gal.urlGitHubPage + fileName + '"); title="Link to just this file" >&#x2750;</a> ' +

			'</div>';

		}

		divTooToo.innerHTML = txt;

	}


	function openWin( link ) {

		win = window.open( link, '', 'width=1000, height=950, top=100', true );
		win.moveBy( -6000,  0);
		win.moveBy( 200, 0 );
console.log( 'win', win );
		win.focus();


	}


	gal.requestFile = function( url, callback ) {

		const xhr = new XMLHttpRequest();
		xhr.crossOrigin = 'anonymous';
		xhr.open( 'GET', url, true );
		xhr.onerror = function( xhr ) { console.log( 'error:', xhr  ); };
//		xhr.onprogress = function( xhr ) { console.log(  'bytes loaded: ' + xhr.loaded.toLocaleString() ) }; /// or something
		xhr.onload = callback;
		xhr.send( null );

	}

	init();

	function init() {

		if ( !divTooToo ) {

			divTooToo = document.body.appendChild( document.createElement( 'div' ) );
			divTooToo.style.cssText =
				'background-color: white; border: 1px solid red; height: 90%; max-width: 350px; opacity: 0.85; ' +
				'overflow: auto; padding: 10px; position: fixed; right: 30px; top: 20px; z-index:100000; ';

		}

//		let txt = 'lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?';

//		divTooToo.innerHTML = txt;

		gal.requestFile( gal.urlGitHubApiContents, gal.callbackGitHubMenu );


	}
