

		javascript:(function(){var script=document.createElement('script');script.onload=function(){);script.src='try.js';document.head.appendChild(script);})()


		<p>
			<a href=
			"JavaScript:( function(){ var script=document.head.appendChild( document.createElement( 'script' ) );
				script.src='try.js'; } )()" >do it</a>
		</p>


	var divTooToo = divTooToo || undefined;

	init();

	function init() {

		if ( !divTooToo ) {

			divTooToo = document.body.appendChild( document.createElement( 'div' ) );
			divTooToo.style.cssText = 
				'background-color: white; border: 1px solid red; max-width: 350px; opacity: 0.85; ' +
				' padding: 10px; position: fixed; right: 30px; top: 20px; z-index:100000; ';

		}

		let txt = 'lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?';

		divTooToo.innerHTML = txt;

	}



### stat.js

// https://github.com/mrdoob/stats.js

javascript:(

	function(){

		var script=document.createElement('script');

		script.onload=function(){

			var stats=new Stats();

			document.body.appendChild(stats.dom);

			requestAnimationFrame(function loop(){

				stats.update();
				requestAnimationFrame(loop);

			});
		};

		script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';

		document.head.appendChild(script);

	}

)()


## links of interest

http://zz85.github.io/zz85-bookmarklets/

http://zz85.github.io/zz85-bookmarklets/threelabs.html


http://blog.eviltester.com/2017/04/a-quick-intro-to-bookmarklets.html