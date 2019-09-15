/*

<script>
t='';c=new Array('00','33','66','99','CC','FF');
for(i=0;i<6;i++){t+='<table width=100%>';
for(j=0;j<6;j++){t+='<tr>';
for(k=0;k<6;k++){L=c[i]+c[j]+c[k];
t+='<td bgcolor='+L+'>'+L}t+='</tr>'}t+='</table>'};
with(document){write(t);void(close())}
</script>

*/

init()

function init() {

	console.log( 'test', 23 );

	const features ="location=yes,menubar=no,status=1,width=500,height=600,left=0,top=0,resizable=yes,scrollbars=yes";

	t='';

	c=new Array('00','33','66','99','CC','FF');

	for(i=0;i<6;i++){

		t+='<table width=100%>';

		for(j=0;j<6;j++){

			t+='<tr>';

			for(k=0;k<6;k++){

				L=c[i]+c[j]+c[k];
				
				t+='<td bgcolor='+L+'>'+L

			}

			t+='</tr>'
		}

		t+='</table>'

	};

	const windo = open( "", "Windo", features );

	void( windo.document.write( t ) );

}