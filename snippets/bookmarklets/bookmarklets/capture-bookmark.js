
init()

console.log( '',  );

function init() {

	styleCBM = document.body.appendChild(document.createElement('style'));
	styleCBM.innerText =
		`
		.titleCBM { color: green; display:inline-block; margin: 0.5rem 0 0 0; width: 7rem; }
		.inputCBM { width:20rem; }
	`

	divTooToo.style.width="30rem";

	const date = new Date().toISOString();



	const htm =
	`
		<div class=titleCBM >title: </div><input id=inpTitle class=inputCBM oninput=updateJson() value="${ document.title }" >

		<div class=titleCBM >url: </div><input id=inpUrl class=inputCBM value="${ location.href }" >

		<div class=titleCBM >filename: </div><input id=inpFileName class=inputCBM value="${  getFileName() }" >

		<div class=titleCBM >favicon: </div><input id=inpFavicon class=inputCBM >

		<div class=titleCBM >images: </div><input id=inpImages class=inputCBM>

		<div class=titleCBM >uuid: </div><input id=inpUuid class=inputCBM  value="${ getUuidv4() }" >

		<div class=titleCBM >date:</div><input id=inpDateAdd style=width:12rem; value="${ date }" >

		<br>

		<div class=titleCBM >tags: </div><textarea id=txtTags style=width:100%; ></textarea>

		<div class=titleCBM >description: </div><textarea id=txtDescription style=width:100%; ></textarea>

		<div class=titleCBM >json: </div><textarea id=txtJson style=height:15rem;width:100%; ></textarea>

		<button onclick=saveFile(); >save</button>
	`;

	divCaptureBookmark.innerHTML = htm;

	inpFavicon.value = `https://www.google.com/s2/favicons?domain=${ inpUrl }`;

	updateJson();

}

function updateJson() {


	const tags = `["${ txtTags.value.slice().replace( /,/g, '","') }"]`;

	inpFavicon.value = `https://www.google.com/s2/favicons?domain=${ inpUrl }`;

	const txt =
`{
"url": "${inpUrl.value }",
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

	console.log( '', location );

	console.log( '', location.domain );

	fName = location.pathname;
	
	return fName;

}


function getUuidv4() {

	return ( [ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11 ).replace( /[018]/g, c =>
		( c ^ crypto.getRandomValues( new Uint8Array( 1 )  )[ 0 ] & 15 >> c / 4 ).toString( 16 )
	);

};

saveFile = function() {


	//const strings = BOP.jsonLines.map( jsonl => JSON.stringify( jsonl ) ).join( "\n" );

	const strings = txtJson.value;
	//console.log( 'str', strings );

	const blob = new Blob( [ strings ] );
	let a = document.body.appendChild( document.createElement( 'a' ) );
	a.href = window.URL.createObjectURL( blob );
	a.download = fileName;
	a.click();
	a = null;

};