
var version = "0.00.05";
var fileName;
var domain;

type = ["article","documents","kits","manifesto","paper","pdf","post","primary","products","secondary","services","video"];

year = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"];

source = ["academia","blog","designer","configurators","organization","person","portal","publisher","reference","vendor"];

stats =  [ "iframe-ok", "noframe","deprecated","dead", "duplicate", "stale", "off-topic", "favorite"];

tagSets = [ year, type, source, stats ];

tagNames = ["year", "type", "source", "status" ];

const GAT = {};

init()


function init () {

	GAT.accessToken = localStorage.getItem( 'githubAccessToken' ) || '';

	let path = location.protocol === "file:" ? "../../" : "https://theo-armour.github.io/snippets/bookmarklets/";

	if (!window.divCaptureBookmark) {
		divCaptureBookmark = document.body.appendChild(document.createElement('div'));
		divCaptureBookmark.id = "divCaptureBookmark";


		style = document.head.appendChild(document.createElement('style'));
		style.innerText =
		`
			a { opacity: 1 }
			.titleCBM { color: green; display:inline-block; margin: 0.5rem 0 0 0; width: 15%; }
			.inputCBM { width:80%; }
			#divCaptureBookmark {background-color: white; border: 1px solid red;

				font-size: medium;
				max-height: 90%;
				width: 30rem; opacity: 0.95;
				overflow: auto; padding: 10px; position: fixed; right: 30px; resize: both;
				top: 20px; z-index:100000; }

		`;

	} else {

		divCaptureBookmark.hidden = false;

	}


	const date = new Date().toISOString();


	const htm =
	`
		<button onclick=divCaptureBookmark.hidden=true; style=float:right >x</button>

		<div class=titleCBM >title: </div><input id=inpTitle class=inputCBM oninput=updateJson(); value="${ document.title }" ></div>

		<div><div class=titleCBM >url: </div><input id=inpUrl oninput=updateJson(); class=inputCBM value="${ location.href }" ></div>

		<div><div class=titleCBM >filename: </div><input id=inpFileName oninput=updateJson(); class=inputCBM value="${  getFileName() }" ></div>

		<div><div class=titleCBM >favicon: </div><input id=inpFavicon oninput=updateJson(); class=inputCBM ></div>

		<div><div class=titleCBM >images: </div><input id=inpImages oninput=updateJson(); class=inputCBM ></div>

		<div><div class=titleCBM >uuid: </div><input id=inpUuid class=inputCBM value="${ getUuidv4() }" ></div>

		<div><div class=titleCBM >date:</div><input id=inpDateAdd class=inputCBM  value="${ date }" ></div>

		<div class=titleCBM >tags: </div><textarea id=txtTags oninput=updateJson(); style=width:100%; ></textarea>

		<div id=divTagSets ></div>

		<div class=titleCBM >description: </div><textarea id=txtDescription oninput=updateJson(); style=width:100%; ></textarea>

		<div class=titleCBM >json: </div><textarea id=txtJson style=height:15rem;width:100%; ></textarea>

		<div id=divToSend ></div>

		<p>
			<button id=but onclick=getaLine(); >getaLine</button>

			<button id=but onclick=addaLine(logFileContent,logFileSha); >addaLine</button>
			||
			<button onclick=saveFile(); >save</button>

			<span style=float:right >${ version }</span>
		</p>

		<p>Access token<br>
			<input value="${ GAT.accessToken }" id=GATinpGitHubApiKey onclick=this.select(); onblur=GAT.setGitHubAccessToken(this.value); title="Obtain API Access Token" style=width:100%; >
		</p>

	`;

	divCaptureBookmark.innerHTML = htm;

	let iconLink = document.head.querySelector( '[rel=icon]' );
	//console.log( 'iconLink', iconLink );

	let iconHref;

	if ( iconLink && iconLink.href.toLowerCase().startsWith( "http" ) ) {

		iconHref = iconLink.href;

	} else {

		iconHref = `https://www.google.com/s2/favicons?domain=${ document.domain }`;

	}

	inpFavicon.value = iconHref;

	const tags = document.head.querySelector( '[name=keywords]' );
	//console.log( 'tags', tags, tags.content );
	txtTags.value = tags ?  tags.content : "";

	addTagSets();

	const descriptionMeta = document.head.querySelector( '[name=description]' );
	//console.log( 'descriptionMeta', descriptionMeta, descriptionMeta.content );

	txtDescription.value = descriptionMeta ? descriptionMeta.content : "No description element found in HTML file";

	updateJson();

}



function updateJson() {


	const tags = `"${ txtTags.value.split( ",").map( item => item.trim() ) }"`;

	//console.log( 'document.lastModified', document.lastModified );

	const txt =
`{"url": "${inpUrl.value }",
"title": "${ inpTitle.value }",
"name": "${ inpFileName.value }",
"dateAdd": "${ inpDateAdd.value }",
"dateUpdate": "${ inpDateAdd.value }",
"id": "${ inpUuid.value }",
"type": "url",
"images": [ ${ inpImages.value } ],
"favicon": "${ inpFavicon.value }",
"tags": ${ tags },
"description": "${ txtDescription.value }"
}`;

	txtJson.value = txt;

}


function getFileName() {

	//console.log( '', location );

	//console.log( '', location.domain );

	domain = document.domain ? document.domain.replace( /\./g, "-") : "file"
	const title = document.title ? document.title.replace( / /g, "-") : ""
	fileName = domain + "-" + title + ".json";

	return fileName.toLowerCase();

}


function getUuidv4() {

	return ( [ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11 ).replace( /[018]/g, c =>
		( c ^ crypto.getRandomValues( new Uint8Array( 1 )  )[ 0 ] & 15 >> c / 4 ).toString( 16 )
	)

}




function getaLine() {

	const url = "https://api.github.com/repos/theo-armour/theo-armour.github.io/contents/snippets/bookmarklets/bookmark-capture/bookmarks/bookmarks-test.json";
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

		//divNotepad.innerHTML= `<div >${ decodedData }</div>`;

		//divNotepad.contentEditable = true;

		logFileContent = decodedData;
		logFileSha = data.sha

	} ).catch( ( err ) => {

		console.warn( 'Something went wrong.', err );

	} );

}


function addaLine( content = "", sha ) {

	const url = "https://api.github.com/repos/theo-armour/theo-armour.github.io/contents/snippets/bookmark-capture/bookmarks/bookmarks-test.json";

	const request = new Request( url );

	//arrayOfLines = content.match(/[^\r\n]+/g);

	//uuid = getUuidv4();

	//content +=`{ "index": "${ arrayOfLines.length + 1 }", "uuid": "${ uuid }", "date": "${ ( new Date() ).toISOString() }" }\n`;

	content = decodedData + "\n" +  txtJson.value.replace( /\n/g, " " ) + "\n";

	divToSend.innerText = content;

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




function saveFile() {

	//const strings = BOP.jsonLines.map( jsonl => JSON.stringify( jsonl ) ).join( "\n" );

	const strings = decodedData + "\n" + txtJson.value.replace( /\n/g, " " ) + "\n";
	console.log( 'str', strings );

	const blob = new Blob( [ strings ] );
	let a = document.body.appendChild( document.createElement( 'a' ) );
	a.href = window.URL.createObjectURL( blob );
	a.download = inpFileName.value;
	a.click();
	a = null;

}




function addTagSets() {

	let htm = "";

	tagSets.forEach( ( tags, index ) => {

		//console.log( 'tags', tags  );

		const options = tags.map( tag => `<option>${ tag }</option>` ).join();
		//console.log( 'options ', options );

		htm +=
		`<div style=display:inline-block title="${ tagNames[ index ] }" >

			${ tagNames[ index ]  }<br>
			<select id=TGSsel${ tagNames[ index ] } onclick=addTag(this); size=8>${ options }</select>

		</div> &nbsp; `;

	} );

	divTagSets.innerHTML = htm;

}


function addTag( select ) {

	const comma = txtTags.value === "" || txtTags.value.endsWith( ",") ? "" : ",";

	txtTags.value += comma + select.value;

	updateJson();

};

GAT.setGitHubAccessToken = function ( accessToken ) {

	console.log( 'accessToken', accessToken );

	localStorage.setItem( "githubAccessToken", accessToken );

	GAT.accessToken = accessToken;

};
