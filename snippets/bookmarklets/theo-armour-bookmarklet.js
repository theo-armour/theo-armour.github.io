
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


		divTooToo.innerHTML = 
`


	<p>
		<a href="
			javascript:function C(v){return '<td>'+v+'</td><td>'+((v>>4).toString(16)+(v&15).toString(16)).toUpperCase()+'</td><td bgcolor=DDDDDD>&'+'#'+v+';
			</td>';}
			var c=4,b=Math.ceil(224/c),a='<table border=0><tr>';for(j=0;j<c;j++){a+='<td>DEC</td><td>HEX</td><td>ASC</td>';}a+='</tr>';
			for(i=33;i<33+b;i++){a+='<tr>';
			for(j=0;j<c;j++){t=i+(j*b);
			if(t<=255)a+=C(t);}a+='</tr>';}a+='</table>';var W=open('','','width=500,height=600,left=0,top=0,resizable,scrollbars');
			void(W.document.write(a));
			">ascii table</a>
	</p>

	<p>
			<a href='javascript:(function(){
			var e=[],t=document.getElementsByTagName("a"),n=t.length,r=window.open("","win","width=300,height=300");
			for(;n>0;n--){var i=t[n-1].getAttribute("href");t[n-1]!=null&amp;&amp;i!=null&amp;&amp;i.charAt(0)==="h"&amp;
			&amp;i.indexOf(window.location.hostname)==-1&amp;
			&amp;e.push("<li><a href="+i+">"+i+"</a></li>")}r.document.open("text/html","replace"),r.document.write("<h1>Links Found:</h1><ul>"+e.join("")+"</ul>")})()
			'>Get all external Links
			</a>
	</p>

	<p>
			<a href="
				javascript:t='';c=new%20Array('00','33','66','99','CC','FF');for(i=0;i<6;i++){t+='<table%20width=100%>';for(j=0;j<6;j++){t+='<tr>';for(k=0;k<6;k++){L=c[i]+c[j]+c[k];t+='<td%20bgcolor='+L+'>'+L}t+='</tr>'}t+='</table>'};with(document){write(t);void(close())}
			">216 colors</a>
	</p>


	<p>

		<a href="
		javascript:(function(){var script=document.createElement('script');script.type='text/javascript';script.src='https://cdn.rawgit.com/zz85/zz85-bookmarklets/master/js/ThreeInspector.js';document.body.appendChild(script);})()
		">zz85 three.js inspector</a>

	</p>
`



	}

