
console.log( '', this );


htm =
`
<p>href: ${ location.href }</p>
<p>title: ${ document.title }</div>
<p>modified: ${ document.lastModified }</p>
<div>links: ${ Array.from( document.links ).map( item => `<p>${ item }</p>` ) } </div>
<p>images: ${ JSON.stringify( document.images ) } </p>
`

divData.innerHTML = htm;