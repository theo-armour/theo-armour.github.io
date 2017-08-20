

	var RES = {};


// following all needs a good clean-up

	RES.getFollowers = function( user, index ) {

		var url, urlToken, xhr, response, followers , txt;

		url = 'https://api.github.com/users/' + user + '/followers';

		urlToken = url + '?' + ( API.token || '' );

		requestFile( url, callback );

		function callback( xhr ) {

			followers  = JSON.parse( xhr.target.responseText );

//console.log( 'followers ', followers  );

			if ( followers.message ) { parent.ifrMain.contents.innerHTML = followers.message; return; } // error

			txt = '<h1>' + userData.type + ': ' + user.link( userData.html_url ) + ': ' + userData.followers.toLocaleString() +
				' followers </h1>' + 'raw url:  ' + ( url ).link( url );

			for ( var i = 0; i < followers.length; i++ ) {

				follower = followers[ i ];

//console.log( 'follower', follower );

				txt +=

					'<h3>' +
						( i + 1 ) + ' ' +
						( follower.login + b + '<img src=' + follower.avatar_url + ' width=180 >' ).link( 'https://github.com/' + follower.login )  +
					'</h3>' +

					'<div>' +
						'following'.link( follower.html_url + '?tab=following' ) +
						' followers'.link( follower.html_url + '?tab=followers' ) +
					'</div>';

			}

			if ( userData.type === "Organization" ) {

				var url1 = 'https://github.com/orgs/' + userData.login + '/people';
				var url2 = 'https://api.github.com/orgs/' + userData.login + '/public_members';

				txt += '<p>Organizations usually have no followers unless they were converted over from a user repository.</p>' +

					'<p>See people: ' + url1.link( url1 ) + '</p>' +
					'<p>See API public_members: ' + url2.link( url2 ) + '</p>' +

				'';

			}

			parent.ifrMain.contentWindow.contents.innerHTML = txt;

			window.scrollTo( 0, 0 );

		}

	}


	RES.getFollowing = function( user ) {

		var url, urlToken, xhr, response, followings, following, txt;

		url = 'https://api.github.com/users/' + user + '/following';

		urlToken = url + '?' + ( API.token || '' );

		requestFile( url, callback );

		function callback( xhr ) {

			followings = JSON.parse( xhr.target.responseText );

//console.log( 'followings ', followings  );

			if ( followings.message ) { parent.ifrMain.contentWindow.contents.innerHTML = followings.message; return; }

			txt = '<h1>' + userData.type + ': ' + user.link( userData.html_url )  + ': ' + userData.following.toLocaleString() +
				' following</h1>' +
				'raw url:  ' + ( url ).link( url );


			for ( var i = 0; i < followings.length; i++ ) {

				following = followings[ i ];

//console.log( 'following', following );

				txt +=

					'<h3>' +
						( i + 1 ) + ' ' +
                        ( following.login + b + '<img src=' + following.avatar_url + ' width=180 >' ).link( 'https://github.com/' + following.login ) +
					'</h3>' +

					'<div>' +
						'following'.link( following.html_url + '?tab=following' ) +
						' followings'.link( following.html_url + '?tab=following' ) +
					'</div>';

			}

			if ( userData.type === "Organization" ) {

				txt += '<p>Organizations usually do not follow others unless they were converted over from a user repository.</p>' +

				'';

			}

			parent.ifrMain.contentWindow.contents.innerHTML = txt;

			window.scrollTo( 0, 0 );

		}

	}


	RES.getGists = function( user ) {

		var url, urlToken, gists, gist, txt;

		url = 'https://api.github.com/users/' + user + '/gists' + '?sort=updated&order=desc&per_page=100';

		urlToken = url + '&' + ( API.token || '' );

		currentTopic = 'gists';

		requestFile( urlToken, callback );

		function callback( xhr ) {

			gists = JSON.parse( xhr.target.responseText );

//console.log( 'gists', gists );

			txt = '<h1>' + userData.type + ': ' + user + ' gists</h1>' +
				'raw url:  ' + ( url ).link( url );


			for ( var i = 0; i < gists.length; i++ ) {

				gist = gists[ i ];
				txt += '<h3>' +
							( gist.updated_at.slice( 0, 10 ) + ' ~ ' + gist.description ).link( gist.html_url ) +
				'</h3>' +

				'<div id=gist' + i + ' style=max-height:300px;overflow:auto; >' +
				'</div>';

				RES.getGist( gist.id, i )

			}

			if ( userData.type === "Organization" ) {

				txt += '<p>Organizations usually do not have gists unless they were converted to an organization after having been a user repository.</p>';

			}

			parent.ifrMain.contentWindow.contents.innerHTML = txt;

			window.scrollTo( 0, 0 );

		}

	}



	RES.getGist = function( id, index ) {

		var fileName, xhr, gist;

		url = 'https://gist.githubusercontent.com/' + userData.login + '/' + id + '/raw';

		requestFile( url, callback );

		function callback( xhr ) {

			gist = xhr.target.responseText;

			element = document.getElementById( 'gist' + index );
			element.innerText = gist;

		}

	}


	RES.getOrgs = function( user ) {

		var url, xhr, response, orgs, txt;

		url = 'https://api.github.com/users/' + user + '/orgs?' + ( API.token || '' );

		requestFile( url, callback );

		function callback( xhr ) {

			orgs = JSON.parse( xhr.target.responseText );

//console.log( 'orgs', orgs );

			if ( orgs.message ) { parent.ifrMain.contentWindow.contents.innerHTML = orgs.message; return; }

			txt = '<h1>user: ' + user.link( userData.html_url ) + ' organizations </h1>' +
				'raw url: ' + url.link( url );

			for ( var i = 0; i < orgs.length; i++ ) {

				org = orgs[ i ];

//console.log( 'org', org );

				txt +=

					'<h3>' +
						( i + 1 ) + ' ' +
						( org.login + b + '<img src=' + org.avatar_url + ' width=180 >' ).link( 'https://github.com/' + org.login ) +
						b +

					'</h3>' +

					'<div>description: ' + org.description + '</div>';

			}

			parent.ifrMain.contentWindow.contents.innerHTML = txt;

			window.scrollTo( 0, 0 );

		}

	}


	RES.getReceivedEvents = function( user ) {

		var url, xhr, response, receivedEvents, txt;

		url = 'https://api.github.com/users/' + user + '/received_events?sort=updated&order=desc&per_page=100';

		urlToken = url + '&' + ( API.token || '' );

		requestFile( urlToken, callback );

		function callback( xhr ) {

			receivedEvents = JSON.parse( xhr.target.responseText );

//console.log( 'receivedEvents', receivedEvents );

			if ( receivedEvents.message ) { parent.ifrMain.contentWindow.contents.innerHTML = receivedEvents.message; return; }

			txt = '<h1>' + user.link( userData.html_url ) + ' received events</h1>' +
				'raw url: ' + url.link( url );

			for ( var i = 0; i < receivedEvents.length; i++ ) {

				receivedEvent = receivedEvents[ i ];

//console.log( 'receivedEvent', receivedEvent );

				txt +=

					'<h3>' +

						( i + 1 ) + ' ' + receivedEvent.created_at.slice( 0, 10 ) + ' ' +

						receivedEvent.type + ' ' + receivedEvent.actor.login.link( 'https://github.com/' + receivedEvent.actor.url ) + b +

						'<img src=' + receivedEvent.actor.avatar_url + ' width=180 >' +

					'</h3>' +

					'<div>' + receivedEvent.repo.name.link( 'https://github.com/' + receivedEvent.repo.name ) + '</div>';

			}

			parent.ifrMain.contentWindow.contents.innerHTML = txt;

			window.scrollTo( 0, 0 );

		}

	}



	RES.getRepos = function( user ) {

		var urlToken, xhr, repos, txt;

		url = 'https://api.github.com/users/' + user + '/repos' + '?sort=updated&order=desc&per_page=100';

		urlToken = url + '&' + ( API.token || '' );

		currentTopic = 'repos';

		requestFile( urlToken, callback );

		function callback( xhr ) {

			repos = JSON.parse( xhr.target.responseText );

//console.log( 'repos', repos );

			if ( repos.message ) {

				parent.ifrMain.contentWindow.contents.innerHTML = repos.message;

				return;

			}

			txt = '<h1>' + userData.type + ': ' + user.link( userData.html_url ) + ' repositories </h1>' +
				'raw url: ' + url.link( url );

			for ( var i = 0; i < repos.length; i++ ) {

				repo = repos[ i ];

				txt += RES.getRepoInfo( repo, i );

			}

			parent.ifrMain.contentWindow.contents.innerHTML = txt;

			window.scrollTo( 0, 0 );

		}

	}


	RES.getStarred = function( user ) {

		var urlToken, starred, keys, txt;

		url = 'https://api.github.com/users/' + user + '/starred?sort=updated&order=desc&per_page=100';

		urlToken = url + '?' + ( API.token || '' );

		requestFile( urlToken, callback );

		function callback( xhr ) {

			window.scrollTo( 0, 0 );

			starred = JSON.parse( xhr.target.responseText );

//console.log( 'starred', starred );

			txt = '<h1>' + userData.type + ': '+ user.link( userData.html_url ) + ' starred</h1>' +
				'raw url: ' + url.link( url );

			for ( var i = 0; i < starred.length; i++ ) {

				star = starred[ i ];

				txt += RES.getRepoInfo( star, i );

			}

			if ( userData.type === "Organization" ) {

				txt += '<p>Organizations usually do not have stars unless they were converted to an organization after having been a user repository.</p>';

			}

			parent.ifrMain.contentWindow.contents.innerHTML = '<table>' + txt + '</table>';

			window.scrollTo( 0, 0 );

		}

	};


	RES.getSubscriptions = function( user ) {

		var url, urlToken, subscriptions, keys, txt;

		url = 'https://api.github.com/users/' + user + '/subscriptions?sort=updated&order=desc&per_page=100'
		urlToken = url + '?' + ( API.token || '' );

		requestFile( urlToken, callback );

		function callback( xhr ) {

			subscriptions = JSON.parse( xhr.target.responseText );

//console.log( 'subscriptions', subscriptions );

			txt = '<h1>' + userData.type + ': ' + user.link( userData.html_url ) + ' subscriptions</h1>' +
				'raw-url: ' + url.link( url );

			for ( var i = 0; i < subscriptions.length; i++ ) {

				subscription = subscriptions[ i ];

				txt += RES.getRepoInfo( subscription, i );

			}

			if ( userData.type === "Organization" ) {

				txt += '<p>Organizations usually do not have subscriptions unless they were converted to an organization after having been a user repository.</p>';

			}

			parent.ifrMain.contentWindow.contents.innerHTML = '<table>' + txt + '</table>';

			window.scrollTo( 0, 0 );

		}

	};


	RES.getRepoInfo = function( repo, index ) {

		return '<h3 style=margin-bottom:0; >' +

			( index + 1 ) + ' ' + repo.name.link( repo.html_url ) +
			' stars ' + repo.watchers.toLocaleString().link( repo.html_url + '/stargazers' ) +
			' forks ' + repo.forks.toLocaleString().link( repo.html_url + '/network/members' ) +
			' update ' + repo.updated_at.slice( 0, 10 ).link( repo.html_url + '/pulse' ) +

		'</h3>' +

		'<div>language ' + repo.language + ' - open issues ' + repo.open_issues + '</div>' +
		'<div>description: ' + repo.description + '</div>'

		'';

	}
