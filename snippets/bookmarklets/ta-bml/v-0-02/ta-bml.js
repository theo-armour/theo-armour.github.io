

const GAT = {};

init();


function init () {

	GAT.accessToken = localStorage.getItem( 'githubAccessToken' ) || '';

	let path = location.protocol === "file:" ? "../../" : "https://theo-armour.github.io/snippets/bookmarklets/";

	if ( !window.divTooToo )
	{

		divTooToo = document.body.appendChild( document.createElement( 'div' ) );
		divTooToo.style.cssText =
			'background-color: white; border: 1px solid red; max-height: 90%; width: 22rem; opacity: 0.95; ' +
			' overflow: auto; padding: 10px; position: fixed; right: 1rem; resize: both; top: 1rem; z-index:100000; ';

	} else
	{

		divTooToo.hidden = false;

	}

	divTooToo.innerHTML =
`
	<button onclick=divTooToo.hidden=true; >x</button>

	<a href="https://theo-armour.github.io/snippets/bookmarklets/ta-dashboard/v-0-00/ta-bml-dashboard.html" title="on server" >theo armour bookmarklet</a>
	||
	<a href="file:///D:/Dropbox/Public/git-repos/theo-armour.github.io/snippets/bookmarklets/ta-dashboard/v-0-00/ta-bml-dashboard.html" >local</a>

	<hr>

	<div style="border: 1px solid pink; height:20rem; overflow: auto; /* needed */ resize: both; width: 100%;" >

		<div id=divNotepad style="height: calc( 100% - 0.5rem ); width: 100%;" >


		</div>

	</div>

	<div id=divToSend ></div>
	
	<p>
		<button id=but onclick=getaLine(); >getaLine</button>

		<button id=but onclick=addaLine(logFileContent,logFileSha); >addaLine</button>
	</p>

	<p>
		<a href = 'JavaScript:( () => {
				const features ="location=yes,menubar=no,status=1,width=500,height=600,left=0,top=0,resizable=yes,scrollbars=yes";
				const windo = open( "${ path }/mozilla-text-editor/mozilla-text-editor-theo.html", "Windo", features );
		} )()' >
			mozilla text editor
		</a><br>
		<a href = "JavaScript:( () => {
				const script=document.head.appendChild( document.createElement( 'script' ) );
				script.src='${ path }bookmarklets/216-standard-colors.js';
		} )()" >
			216 standard colors
		</a><br>
		<a href = 'JavaScript:( () => {
			const script=document.head.appendChild( document.createElement( "script" ) );
			script.src="${ path }bookmarklets/ascii-table.js";
		} )()' >
			ascii table
		</a>
	</p>

	<p id=pFiles ></p>

	<div>Access token</div>
		<input value="${ GAT.accessToken }" id=GATinpGitHubApiKey onclick=this.select(); onblur=GAT.setGitHubAccessToken(this.value); title="Obtain API Access Token" style=width:100%; >
	</p>

`;

	getaLine();

	requestFile();

}


function getaLine() {

	const url = "https://api.github.com/repos/theo-armour/theo-armour.github.io/contents/snippets/ta-bml.html";
	//const url = "https://api.github.com/repos/pushme-pullyou/pushme-pullyou.github.io/add-a-line-bookmarks/bookmarks.json";

	const request = new Request( url )

	fetch( request ).then( ( response ) => {

		//if ( response.ok ) {

			return response.json();

		//} else {

		//	return Promise.reject( response );

		//}

	} ).then( ( data ) => {

		console.log( data );

		//divContents.innerText += (JSON.stringify( data ) );

		//console.log( 'data', data );

		decodedData = window.atob( data.content ); // decode the string

		divNotepad.innerHTML= `<div >${ decodedData }</div>`;

		divNotepad.contentEditable = true;

		logFileContent = decodedData;
		logFileSha = data.sha

	} ).catch( ( err ) => {

		console.warn( 'Something went wrong.', err );

	} );

}


function addaLine( content = "", sha ) {

	const url = "https://api.github.com/repos/theo-armour/theo-armour.github.io/contents/snippets/ta-bml.html";

	const request = new Request( url );

	//arrayOfLines = content.match(/[^\r\n]+/g);

	//uuid = getUuidv4();

	//content +=`{ "index": "${ arrayOfLines.length + 1 }", "uuid": "${ uuid }", "date": "${ ( new Date() ).toISOString() }" }\n`;

	content = divNotepad.innerHTML;

	divToSend.innerHTML = content;

	codedData = window.btoa( content ); // encode the string

	fetch( request, {
		method: "PUT",
		headers: { "Authorization": "token " + GAT.accessToken, "Content-Type": "application/json" },
		body: JSON.stringify( {
			"branch": "master",
			"committer": {
				"name": "Theo Armour",
				"email": "t.armour@gmail.com"
			},
			"content": codedData,
			"message": "add to file",
			"sha": logFileSha
		} ),

	} )
	.then( response => response.json() )
	.then( data => {

		//divContents.innerText += (JSON.stringify( data ) );

	} )
	.catch(  err => console.warn( 'Something went wrong.', err ) );

}



function requestFile () {

	url = "https://api.github.com/repos/theo-armour/theo-armour.github.io/contents/snippets/snippets";

	xhr = new XMLHttpRequest();
	xhr.open( 'GET', url, true );
	xhr.onerror = ( xhr ) => console.log( 'error:', xhr );
	//xhr.onprogress = ( xhr ) => console.log( 'bytes loaded:', xhr.loaded );
	xhr.onload = callback;
	xhr.send( null );


	function callback ( xhr ) {

		const text = JSON.parse( xhr.target.response );
		const files = text.filter( item => item.type === "file" ).map( item => item.path.split( "/" ).pop() );
		const htm = files.map( file => `<div><a href="vscode://file/d:/Dropbox/Public/git-repos/theo-armour.github.io/snippets/snippets/${ file }" >${ file }</a></div>` ).join( "" );

		pFiles.innerHTML = htm;

	}

}

GAT.setGitHubAccessToken = function ( accessToken ) {

	console.log( 'accessToken', accessToken );

	localStorage.setItem( "githubAccessToken", accessToken );

	GAT.accessToken = accessToken;

};
