
//var divTooToo = divTooToo || undefined;

init();

function init() {

	let path = location.protocol === "file:" ? "../../" : "https://theo-armour.github.io/snippets/bookmarklets/";

	if (!window.divTooToo) {

		style = document.body.appendChild(document.createElement('style'));
		style.innerText =
			`
			a { color: blue; opacity: 0.85 }
		`
		divTooToo = document.body.appendChild(document.createElement('div'));
		divTooToo.style.cssText =
			'background-color: white; border: 1px solid red; max-height: 90%; width: 350px; opacity: 0.95; ' +
			' overflow: auto; padding: 10px; position: fixed; right: 30px; resize: both; top: 20px; z-index:100000; ';

	} else {

		divTooToo.hidden = false;

	}



	divTooToo.innerHTML =
		`
	<button onclick=divTooToo.hidden=true; >x</button>

	<a href="https://theo-armour.github.io/snippets/bookmarklets/theo-armour-bookmarklet.html" title="on server" >theo armour bookmarklet</a>
	/
	<a href="file:///D:/Dropbox/Public/git-repos/theo-armour.github.io/snippets/bookmarklets/ta-bmrklet-dashboard/v-0-00/ta-bmrklet-dashboard.html" >local</a>

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

	<hr>

	<p>
		<a href = 'JavaScript:( () => {
			const script=document.head.appendChild( document.createElement( "script" ) );
			script.src="${ path }bookmarklets/capture-bookmark.js";
		} )()' >
			capture bookmark
		</a>
	<p>

	<div id=divCaptureBookmark ></div>

		<a href = 'JavaScript:( () => {
				const features ="location=yes,menubar=no,status=1,width=500,height=600,left=0,top=0,resizable=yes,scrollbars=yes";
				const windo = open( "${ path }/mozilla-text-editor/mozilla-text-editor-theo.html", "Windo", features );
		} )()' >
			mozilla text editor
		</a>
	</p>
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
	</p>

	<p>
		<a href = "JavaScript:( () => {
			const script=document.head.appendChild( document.createElement( 'script' ) );
			script.src='${ path }bookmarklets/window-local-storage.js';
		} )()" >
		window local storage
	</a>
	</p>
	<p>
		<a href='javascript:(function(){
			var e=[],t=document.getElementsByTagName("a"),n=t.length,r=window.open("","win","width=300,height=300");
			for(;n>0;n--){var i=t[n-1].getAttribute("href");t[n-1]!=null&amp;&amp;i!=null&amp;&amp;i.charAt(0)==="h"&amp;
			&amp;i.indexOf(window.location.hostname)==-1&amp;
			&amp;e.push("<li><a href="+i+">"+i+"</a></li>")}r.document.open("text/html","replace"),r.document.write("<h1>Links Found:</h1><ul>"+e.join("")+"</ul>")})()
		'>Get all external Links</a>
	</p>
	<p>
		<a href = "JavaScript:( () => {
				const script=document.head.appendChild( document.createElement( 'script' ) );
				script.src='${ path}bookmarklets/216-standard-colors.js';
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

	<p>
	<a id=aPageData href = 'JavaScript:( () => {
		const script=document.head.appendChild( document.createElement( "script" ) );
		script.src="https://theo-armour.github.io/snippets/bookmarklets/bookmarklets/page-data-bookmark.js";
	} )()' >
		page-data-bookmark
	</a>

	<p>
	<a id=aPageData href = 'JavaScript:( () => {
		const script=document.head.appendChild( document.createElement( "script" ) );
		script.src="../../bookmarklets/page-data-bookmark.js";
	} )()' >
		page-data-bookmark local
	</a>

	<div id=divData ></div>
</p>
	<details>

	<summary>testing</summary>

	<p id=pGetInput >
		<a href= "javascript: inp=pDoIt.appendChild(document.createElement('input'));
			inp.value='thinking';
			inp.select();
			document.execCommand('copy');
			delete inp;
		">
			get input
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

		<a href="https://github.com/theo-armour/qdata/blob/master/README.md" target="_blank">qdata</a>
	</p>

`;


}