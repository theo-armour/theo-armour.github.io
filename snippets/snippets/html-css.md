//

<link href="mystyle.css" rel="stylesheet" >

It’s much easier to recover from no abstraction than the wrong abstraction

From Quick Tip: What Are Factory Functions in JavaScript
https://www.sitepoint.com/factory-functions-javascript/

## THINGS to look at

http://www.html5rocks.com/en/tutorials/webcomponents/imports/
http://www.w3schools.com/howto/howto_js_animate.asp


## Colors

https://www.w3schools.com/colors/colors_names.asp




### CHARACTERS

* ascii character name:
	* https://www.freeformatter.com/html-entities.html#math-symbols
	* https://www.w3schools.com/charsets/ref_html_8859.asp
	* https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references >> all!
	* https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references
* http://unicode.org/emoji/charts/full-emoji-list.html
* http://www.unicode.org/charts/
* https://en.wikibooks.org/wiki/Unicode/List_of_useful_symbols


☎
©
🔃
🔭
📈
🛈  &#x2139; &#x24D8; i in circle


☰ hamburger / trigram for heaven &#9776;

🗀 &#x1f5c0;
📁 &#x1f4c1;

✎ &#9998; pencil

🖉 &#x1f589; &#128393;

new tab/external link: &#x1F5D7; 🗗  or ❐ &#x2750; or ⧉ &#x29c9;

link &#128279; 🔗 or &#x1f517;

⌂ home: &#x2302;

🕷  &#x1f577; spider
🕸 &#x1f578; spider web
recycle: &#21BB;
Currency: &pound;  &euro;
Arrows: &uArr;  &laquo; &raquo;
Arrows in circle: CCW &#8634; CW &#8635;
Dingbats &#10070; &#10087; ❦ nice: &#x2766;
❧ ❦
Hands: black: L &#x261A; R &#x261B; / White L &#x261C; U &#x261D; R &#x261E; D &#x261F; / V=sign &#x270C;
&malt;
&spades;
&xcirc;
&phone;

http://fontawesome.io/icons/

* code-cookbook/0-cookbook-general/string%20manipulation/characters-interesting.html
- see bottom for rotating characters by degrees.


## Emoji

For GitHub Pages sites built on GitHub.com, emoji images are served from the GitHub.com CDN, with a base URL of https://assets-cdn.github.com, which results in emoji image URLs like https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png.

Complete list of github markdown emoji markup
* https://gist.github.com/rxaviers/7360908 -
* https://assets-cdn.github.com/images/icons/emoji/octocat.png
* https://www.webpagefx.com/tools/emoji-cheat-sheet/

Unicode
* https://api.github.com/emojis
	* https://platform.github.community/t/add-ability-to-query-raw-text-with-unicode-emojis/4603
* https://yutannihilation.github.io/list_of_github_emojis/github_emojis.html

Compare
* https://emojipedia.org/

Purposeful
* https://github.com/dannyfritz/commit-message-emoji
* https://gist.github.com/parmentf/035de27d6ed1dce0b36a

More
https://gist.github.com/endolith/157796


## CSS


### CSS External style sheet

https://www.w3schools.com/css/css_howto.asp

<link rel="stylesheet" type="text/css" href="mystyle.css">

### CSS Docs

https://developer.mozilla.org/en-US/docs/Web/CSS/unset

css: { top: unset; }

<link href="style.css" rel="stylesheet" >

fit-content

* https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
* https://www.w3schools.com/css/default.asp


element.getBoundingClientRect()

* https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

window.getComputedStyle()

getComputedStyle

### CSS Pseudo-classes

https://www.w3schools.com/css/css_pseudo_classes.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes



### CSS BORDERS

outline: none;

* https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

box model

* { box-sizing: border-box; height: 100% vertical-align: top; }

use window.clientWidth << takes scrollbar into account


border-width, border-style, and border-color.
none
hidden
dotted
dashed
solid
double
groove
ridge
inset
outset
dotted solid double dashed
dotted solid


### CSS Dark mode

* https://tombrow.com/dark-mode-website-css
* https://gosink.in/javascript-css-toggle-dark-light-theme-based-on-your-users-preferred-scheme/

:root {
	font-size: 80%;
	font-family: 'Lato', sans-serif;
	--color: #6ec071; /* #4a9d36; */
	--colorLight: #b7dfb8; /* #93cf95; hsla(79, 61%, 70%, 1); #9bcc31; */
	--background-color:  #f7f6ee; /* #f7f8f9; */
	--secondary-color: rgb(240, 250, 244);
	--mnu-width: 22rem;

}

@media (prefers-color-scheme: dark) {
	:root {
	  --background-color: #1e1f23;
	  --secondary-color: #235528;
	  --text-dark: #efefef;
	  --text: #c4c5c9;
	  --text-light: #6c6d71;
	  --text-lighter: #8e8f93;
	}
  }



### CSS Flexbox

* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://www.w3schools.com/css/css3_flexbox.asp
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
* https://medium.freecodecamp.org/learn-css-flexbox-in-5-minutes-b941f0affc34

	.container { display: flex; }

	.container > div { border: 1px solid red; margin: 5px; padding: 10px; }


### CSS Font-size

* em is relative to the font-size of its direct or nearest parent,
* rem is relative to the html (root) font-size.


### CSS Font-family

Google Fonts: https://fonts.google.com/
Font Library: https://fontlibrary.org/
Adobe Edge: https://edgewebfonts.adobe.com/

<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">

body {background-color: #ffffff; color: #555; font-family: 'inconsolata'; font-size: 15px; height: 100%;
	line-height: 18px; margin: 0px; overflow: hidden; }


### CSS Overflow

overflow
overflow-x
overflow-y visible|hidden|scroll|auto|no-display|no-content;


### CSS Variables in JavaScript

* https://www.w3schools.com/css/css3_variables.asp
* https://developer.mozilla.org/en-US/docs/Web/CSS/var
* https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables
* https://stackoverflow.com/questions/36088655/accessing-a-css-custom-property-aka-css-variable-through-javascript


var bodyStyles = window.getComputedStyle(document.body);
var fooBar = bodyStyles.getPropertyValue('--foo-bar'); //get

document.body.style.setProperty('--foo-bar', newValue);//set


// setter
document.documentElement.style.setProperty('--myVariable', 'blue');

// getter
document.documentElement.style.getPropertyValue('--myVariable');

root = document.querySelector(":root");

getComputedStyle(element).getPropertyValue("--my-var");




### CSS Switch

<link rel="stylesheet" id="stylesheet" type="text/css" href="style1.css">
			<p><button onclick=stylesheet.href="style1.css"; >style 1</button></p>

			<p><button onclick=stylesheet.href="style2.css"; >style 2</button></p>

https://www.w3schools.com/w3css/w3css_color_themes.asp



### CSS load with function

function loadCss() {

	const css = document.head.appendChild( document.createElement('link') );
	css.rel = "stylesheet";
	css.href = "style.css";
	console.log( 'css', css );

}


## CSS Tips

### CSS Center with CSS

http://codepen.io/shshaw/full/gEiDt
.Absolute-Center {
  width: 50%;
  height: 50%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}


### CSS Random Gradient Background

// height not always necessary
// IMPORTANT to check

	document.body.style.cssText += ' height: ' + window.innerHeight + 'px; ';

	function setRandomGradientBackground() {

		var col1 = Math.random().toString(16).slice(2, 8);
		var col2 = Math.random().toString(16).slice(2, 8);
		var col3 = Math.random().toString(16).slice(2, 8);
		var x = ( Math.random() * window.innerWidth ).toFixed(0);
		var y = ( Math.random() * window.innerHeight ).toFixed(0);

		document.body.style.backgroundImage = 'radial-gradient( circle farthest-corner at ' + x + 'px ' + y + 'px, #' + col1 + ' 0%, #' + col2 + ' 50%, #' + col3 + ' 100%)';

	}

	setRandomGradientBackground();



### CSS Transform Scale Origin

https://www.sitepoint.com/a-primer-on-css3-transforms/

.divIframe { border: 0px solid red; height: 960px; width: 960px; transform: scale( 0.25 );
	transform-origin: 0 0; }  // or  top left instead og 0 0





**********

## HTML

*  https://www.w3schools.com/tags/default.asp

### Article

* https://www.smashingmagazine.com/2020/01/html5-article-section/


### Audio

<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>



## Button and Range

	body { font: 12pt monospace; margin: 0 auto; max-width: 800px; }
	a { color: crimson; text-decoration: none; }
	a:hover, a:focus { color: #f1f1f1; }


	button, input[ type=button ] { background-color: #ddd; border: none; color: #322; cursor: pointer; padding: 3px 15px; }
	button:hover { background: #ccc; color: #fff }

	input[ type=range ] { -webkit-appearance: none; -moz-appearance: none; background-color: #ddd; box-sizing: border-box; width: 100% }
	input[ type=range ]::-moz-range-thumb { background-color: #888; border-radius: 0; width: 10px; }
	input[ type=range ]::-webkit-slider-thumb { -webkit-appearance: none; background-color: #888; height: 20px; width: 10px; }


html { --mnu-back-col: lightgray; --menu-width: 250px; }

width: calc( 100% - var( --menu-width ) )

		const width = getComputedStyle(document.documentElement).getPropertyValue( '--mnu-width' );


### Cite

<cite>The Scream</cite>

### datalist

<input list="browsers">

<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>

### DETAILS

outline: none;

<details ontoggle=doIt(); open >
  <summary>Copyright 1999-2014.</summary>
  <p> - by Refsnes Data. All Rights Reserved.</p>
  <p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
</details>



### DIV Resize


div {
	resize: both;
	overflow: auto;
}


### Figure

<figure>
  <img src="../html/pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>


### KBD

<em>Emphasized text</em><br>
<strong>Strong text</strong><br>
<code>A piece of computer code</code><br>
<samp>Sample output from a computer program</samp><br>
<kbd>Keyboard input</kbd><br>
<var>Variable</var>



### FORM

- see also Textarea

<input type="text" id="inp" onclick=this.select(); placeholder="Display name" size=20 />

<button onclick="" size="400">Toggle Play/Pause</button>

<input type="button" id="button" name="button1" value="Display button name" size="400" />

<input type="checkbox" id="check" checked>  // checked="checked"
var check = document.getElementById('check');
if ( check.checked ) { doIt(); }

// http://www.w3schools.com/jsref/dom_obj_fileupload.asp

		<input type="file" id="fname" name="file" value="File" />
		<input type="file" id="myFile" multiple size="50" onchange="myFunction()" >

		<input type="radio" onchange="selectCity(this.id);" name="city" id="geneva">Geneva<br>
		<input type="radio" onchange="selectCity(this.id);" name="city" id="san-francisco" checked>San Francisco<br>
		<input type="radio" onchange="selectCity(this.id);" name="city" id="zurich">Zurich

		<input title="Set the " style="width: 200px;" type="range" min="0" max="500" onchange="" step="50" value="300" >
		<input type=number id=inpNum style=width:50px; min=0.01 max=1.0 step=0.05 value=0.5 />



### FORM Type=Range

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
// http://danielstern.ca/range.css/#/

Use oninput: handles both mouse and touch

		'<input type="range" id="rangeinput" value="50" onmousemove="rangevalue.value=value"/> '  +
		'<output id="rangevalue">50</output><br>' +

	input[ type = range ] { -webkit-appearance: none; -moz-appearance: none; background-color: #ddd; width: 100%; }
	input[ type = range ]::-moz-range-thumb { background-color: #888; border-radius: 0; width: 10px; }
	input[ type = range ]::-webkit-slider-thumb { -webkit-appearance: none; background-color: #888; height: 20px; width: 10px; }


	input[type=range] { -webkit-appearance: none; background-color: #ddd; width: 100%; }
	input[type=range]::-moz-range-thumb { background-color: #888; border-radius: 0; width: 10px; }
	input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; background-color: #888; height: 20px; width: 10px; }


	.floatright { float: right; }

		'<output id=outRange >5</output><br>' +
		'<input type=range id=inpRange min=0 max=10 step=1 value=5 oninput=outRange.value=value; /> '  +

		<p title='howdy' >
			title <output id=outRange class=floatRight >5</output>
			<input type=range id=inpRange min=0 max=10 step=1 value=5 oninput=outRange.value=value; />



### valueAsNumber

https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#dom-input-valueasnumber


Still not working in Edge maybe. Use parseFloat... or +


### Range stepUp / stepDown

// Where is there a good use example?

https://www.w3schools.com/jsref/met_range_stepup.asp
https://www.w3schools.com/jsref/met_range_stepdown.asp


### FORM SELECT

// http://www.w3schools.com/jsref/met_select_add.asp << add by code!

<select onchange="" title="select the filed that the colors indicate" size=5  >
	<option selected>aaa aaa aaa</option>
	<option>bbb bbb</option>
	<option>cc cc cc cc</option>
	<option>ddddddd</option>
	<option>eee eee eee eee</option>
</select>


### ICONS

* https://commons.wikimedia.org/wiki/Category:Icons_by_subject < hundreds available
* https://github.com/icons8/flat-color-icons/tree/master/svg
* See also mindmap readme


### IFRAME

align			Sets or returns the value of the align attribute in an iframe
contentDocument	Returns the document object generated by a frame/iframe
contentWindow	Returns the window object generated by a frame/iframe
frameBorder		Sets or returns the value of the frameborder attribute in a frame/iframe
height			Sets or returns the value of the height attribute in an iframe
longDesc		Sets or returns the value of the longdesc attribute in a frame/iframe
marginHeight	Sets or returns the value of the marginheight attribute in a frame/iframe
marginWidth		Sets or returns the value of the marginwidth attribute in a frame/iframe
name			Sets or returns the value of the name attribute in a frame/iframe
noResize		Sets or returns the value of the noresize attribute in a frame
scrolling		Sets or returns the value of the scrolling attribute in a frame/iframe	NOT working
src				Sets or returns the value of the src attribute in a frame/iframe
srcdoc
width			Sets or returns the value of the width attribute in an iframe

http://www.w3schools.com/tags/att_iframe_sandbox.asp

sandbox = 'allow-scripts'

onload

		ifrThree.contentWindow.location.reload(); // true forces all assets to reload



### IMG Images IMG

Random image

* https://commons.wikimedia.org/wiki/Special:Random/Image
* https://picsum.photos/
* https://medium.com/quick-code/how-to-quickly-generate-a-random-gallery-of-images-from-an-unsplash-collection-in-javascript-4ddb2a6a4faf
* https://unsplash.com/



### LABEL

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label

<div class="preference">
	<label for="cheese">Do you like cheese?</label>
	<input type="checkbox" name="cheese" id="cheese">
</div>

<div class="preference">
	<label for="peas">Do you like peas?</label>
	<input type="checkbox" name="peas" id="peas">
</div>

<label>Do you like peas?
  <input type="checkbox" name="peas">
</label>


<label>Do you like peas?
  <input type="radio" name="type"> big
</label>

<label>Do you like peas?
  <input type="radio" name="type"> small
</label>

### <main>, <header>, <footer> and <nav>


### Mark

<p>Do not forget to buy <mark>milk</mark> today.</p>


### META

<meta http-equiv="refresh" content="3" >
<meta http-equiv="refresh" content="0;url=http://jaanga.github.com/blode/we-have-callbacks/index.html" />
<!-- but why? -->
<meta name='viewport' content='width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0' >

<meta name=viewport content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui' >


### Output

<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
<input type="range" id="a" value="50">100
+<input type="number" id="b" value="50">
=<output name="x" for="a b"></output>


### Picture

<picture>
  <source media="(min-width: 650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width: 465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>

### Template


### TEXTAREA


<textarea id=textArea cols=30 rows=5 placeholder="Stuff" >
		'Iteration system wide engenders economies of scale, cross-media technology, presentation action items and life cycle replication.'
</textarea>


### Time

<time datetime="2008-02-14 20:00">Valentines day</time>



### Video

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>