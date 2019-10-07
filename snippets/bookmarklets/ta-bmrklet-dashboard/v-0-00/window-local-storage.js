

init()


function init() {

	//console.log( 'this', this );

	const style = "border:none; height:98%; width:100%;";

	const contents =
	`<iframe src="../../bookmarklets/window-local-storage.html" style="${ style }" ></iframe>`;

	const features ="width=500,height=600,left=0,top=50";

	const windo = open( "", "Windo", features );

	void windo.document.write( contents );

}