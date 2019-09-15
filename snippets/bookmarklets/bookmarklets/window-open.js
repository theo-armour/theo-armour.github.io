
init()

function init() {

	console.log( 'test', 23 );

	const features ="location=yes,menubar=no,status=1,width=500,height=600,left=0,top=0,resizable=yes,scrollbars=yes";

	const windo = open( "", "Windo", features );

	void( windo.document.write( `Hello, World! ${ new Date() }` ) );

}