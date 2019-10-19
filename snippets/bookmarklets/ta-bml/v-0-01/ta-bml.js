

init();


function init() {

	let path = location.protocol === "file:" ? "../../" : "https://theo-armour.github.io/snippets/bookmarklets/";

	if ( !window.divTooToo ) {

		divTooToo = document.body.appendChild(document.createElement('div'));
		divTooToo.style.cssText =
			'background-color: white; border: 1px solid red; max-height: 90%; width: 22rem; opacity: 0.95; ' +
			' overflow: auto; padding: 10px; position: fixed; right: 1rem; resize: both; top: 1rem; z-index:100000; ';

	} else {

		divTooToo.hidden = false;

	}



	divTooToo.innerHTML =
`
	<button onclick=divTooToo.hidden=true; >x</button>

	<a href="https://theo-armour.github.io/snippets/bookmarklets/ta-dashboard/v-0-00/ta-bml-dashboard.html" title="on server" >theo armour bookmarklet</a>
	||
	<a href="file:///D:/Dropbox/Public/git-repos/theo-armour.github.io/snippets/bookmarklets/ta-dashboard/v-0-00/ta-bml-dashboard.html" >local</a>

	<hr>

	<div id=divNotepad style="border: 1px solid pink; height:30rem; overflow: auto; /* needed */ resize: both; width: 100%;" >

		<div style="height: calc( 100% - 0.5rem ); width: 100%;" >

			<iframe id=ifr src="https://theo-armour.github.io/snippets/bookmarklets/ta-bml/v-0-01/window-local-storage.html" style="border-width:0;height:100%;overflow:hidden;width:100%;" ></iframe>

		</div>

	</div>

	<p>
		<a href = 'JavaScript:( () => {
				const features ="location=yes,menubar=no,status=1,width=500,height=600,left=0,top=0,resizable=yes,scrollbars=yes";
				const windo = open( "${ path }/mozilla-text-editor/mozilla-text-editor-theo.html", "Windo", features );
		} )()' >
			mozilla text editor
		</a>

	</p>

	<!--
	<p>

	<a href="javascript:(function() {
		function se(d) {
			return d.selection ? d.selection.createRange().text : d.getSelection()
		}
		s = se(document);
		for (i=0; i<frames.length && !s; i++) s = se(frames[i].document);
		if (!s || s=='') s = prompt('Enter%20search%20terms%20for%20Wikipedia','');
		open('http://en.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : '')).focus();
	})();" >
	search wikipedia
	</a>


	thesaurus<br> <input id=thes onchange=ff=this.value);window.open("https://www.thesaurus.com/browse/${ this.value }","_blank") ><br>

	define<br> <input onchange=window.open("https://www.google.com/search?q=define%3A${this.value}","_blank") ><br>

	wiki<br> <input onchange=window.open("https://en.wikipedia.org/wiki/` + this.value + `","_blank") ><br>

	</p>

	-->
	<p>
		<a href = "JavaScript:( () => {
				const script=document.head.appendChild( document.createElement( 'script' ) );
				script.src='${ path }bookmarklets/216-standard-colors.js';
		} )()" >
			216 standard colors
		</a>
	</p>
	<p>
		<a href = 'JavaScript:( () => {
			const script=document.head.appendChild( document.createElement( "script" ) );
			script.src="${ path }bookmarklets/ascii-table.js";
		} )()' >
			ascii table
		</a>
	</p>

	<div id=divData ></div>

	<details>

	<summary>testing</summary>

	<p>
		<a href="javascript:(function(){var script=document.createElement('script');
		script.onload=function(){var stats=new Stats();
			document.body.appendChild(stats.dom);
			requestAnimationFrame(function loop(){stats.update();
			requestAnimationFrame(loop)});};
			script.src='https://rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
			document.head.appendChild(script);})()"
		title="Mr.doob's" >
			stat.js
		</a>
		<br>
		<a href="javascript:(function(){
			var script=document.createElement('script');
			script.type='text/javascript';
			script.src='https://cdn.rawgit.com/zz85/zz85-bookmarklets/master/js/ThreeInspector.js';
			document.body.appendChild(script);})()
		">
			zz85 three.js inspector
		</a>
	</p>

	<p>
		<a href = "JavaScript:( () => {
			const script=document.head.appendChild( document.createElement( 'script' ) );
			script.src='https://theo-armour.github.io/snippets/bookmarklets/bookmarklets/test.js';
		} )()" >
			test
		</a>
	</p>

	<p>
		<a href = "JavaScript:( () => {
			const script=document.head.appendChild( document.createElement( 'script' ) );
			script.src='https://theo-armour.github.io/snippets/bookmarklets/bookmarklets/window-open.js';
		} )()" >
			window open
		</a>
	</p>


	Open new  pages easily - even with window location

	<p><a href="https://theo-armour.github.io/snippets/bookmarklets/mozilla-text-editor.html" target="_blank">text edit</a></p>

	<p><a href="javascript:(function(){document.body.contentEditable = true;})()" >make content editable</a></p>

	<p><a href='javascript:(function(){window.open("http://jkirchartz.com/demos/HTML5notepad.html","HTML5 notepad");})()' >jkirchartz html5 notepad</a></p>

	<p><a href='javascript:(function(){window.open("jkirchartz-demos/HTML5notepad.html","HTML5 notepad");})()' >html5 notepad local</a></p>

	<p><a href="javascript:(function(){window.open('http://validator.w3.org/check?uri='+window.location);})()" >Validate with validator.w3.org</a></p>

	<p><a href="javascript:(function(){window.open('data:text/html, <html contenteditable style=padding:10%; ></html>')})()" >open new editable page</a></p>


	</details>

	<p>
		<a href="file:///C:/" title="copy links/paste&go/or use local" >C:/</a> - <a href="file:///D:/" title="copy links/paste&go/or use local" >D:/</a><br>
		<a href="https://github.com/theo-armour/theo-armour.github.io/edit/master/snippets/bookmarklets/theo-armour-bookmarklet.js" target="_blank">theo-armour-bookmarklet.js</a><br>
		<a href="file:///D:/Dropbox/Public/git-repos/theo-armour.github.io/snippets/bookmarks/" target="_blank">bookmarks</a><br>
		<a href="https://github.com/theo-armour/theo-armour.github.io/edit/master/snippets/bookmarks/food.md" target="_blank" >food.md</a><br>

		<a href="https://github.com/theo-armour/qdata/blob/master/README.md" target="_blank">qdata</a><br>

		<a href="file:///D:/Dropbox/Public/git-repos/theo-armour.github.io/snippets/snippets/0-dev-notes.md" target="_blank">dev notes</a><br>

		<a href="vscode://file/d:/Dropbox/Public/git-repos/theo-armour.github.io/snippets/snippets/vs-code.md" >vscode</a>
	</p>

`;

requestFile() 
}

	function requestFile() {

		url = "https://api.github.com/repos/theo-armour/theo-armour.github.io/contents/snippets/snippets"
		xhr = new XMLHttpRequest();
		xhr.open( 'GET', url, true );
		xhr.onerror = ( xhr ) => console.log( 'error:', xhr  );
		//xhr.onprogress = ( xhr ) => console.log( 'bytes loaded:', xhr.loaded );
		xhr.onload = ( xhr ) => console.log( 'response', xhr.target.response );
		xhr.send( null );


		function callback ( text ) {

			htm = text.filter( item => item.type === "file" ).map( item => item.path );

			console.log( 'httm', htm );
		}
	}