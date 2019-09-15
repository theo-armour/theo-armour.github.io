
init()

console.log( '',  );

function init() {

	styleCBM = document.body.appendChild(document.createElement('style'));
	styleCBM.innerText =
		`
		.titleCBM { color: green; display:inline-block; margin: 0.5rem 0 0 0; width: 7rem; }
		.inputCBM { width:20rem; }
	`

	uuid = 123466;

	const htm =
	`
		<div class=titleCBM >title: </div><input class=inputCBM value="${ document.title }" >

		<div class=titleCBM >url: </div><input class=inputCBM value="${  location.href }" >

		<div class=titleCBM >filename: </div><input class=inputCBM value="${  location.href }" >

		<div class=titleCBM >favicon: </div><input class=inputCBM >

		<div class=titleCBM >images: </div><input class=inputCBM>

		<div class=titleCBM >uuid: </div><input class=inputCBM  value="${ uuid }" >

		<div class=titleCBM >date:</div><input style=width:12rem; value="${ ( new Date() ).toISOString() }" >

		<div class=titleCBM >update: </div><input style=width:12rem; value="${ ( new Date() ).toISOString() }" >

		<div class=titleCBM >type: </div>"url"<br>

		<div class=titleCBM >tags: </div><textarea style=width:100%; ></textarea>


		<div class=titleCBM >description: </div><textarea style=width:100%; ></textarea>

	`;

	divCaptureBookmark.innerHTML = htm

}