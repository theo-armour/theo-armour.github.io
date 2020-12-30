
## Links of interest

* https://medium.com/frontmen/art-of-debugging-with-chrome-devtools-ab7b5fd8e0b4
* http://bgrins.github.io/devtools-snippets/


## Chrome allow-file-access-from-files

--allow-file-access-from-files
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files

## URLs

chrome://apps
chrome://bookmarks/
chrome://dino << hit the space bar
chrome://downloads/
chrome://extensions/
chrome://flags/
chrome://gpu/
chrome://hardware ??
chrome://history/
chrome://internals/

## PDF edit online

### Portals

* https://www.lifewire.com/best-free-pdf-editors-4147622
* https://www.lifewire.com/edit-pdf-on-chromebook-4783263


### Online apps

* https://pdfbob.com/editor/
* https://smallpdf.com/ ~ 2 documents per day


## PDFs on ChromeSettings > Show advanced settings > Privacy > Content Settings > PDF Documents > Un-check checkbox


For using OpenGL in Chrome, you need to start it with a command line option:
--use-gl=desktop
--allow-file-access-from-files


## Debugger

> debugger;

When the debugger is invoked, execution is paused at the debugger statement. It is like a breakpoint in the script source.

https://medium.freecodecamp.com/10-tips-to-maximize-your-javascript-debugging-experience-b69a75859329#.2i0llw1ym


## Control P

* See dropdown list of all files


## Local Overrides

* Developer console must be open
* find css file
* Click 'Sources' tab > 'Overrides' tab
* 'Enable Local Overrides' must be checked
* right-click file title > 'Save overrides'

* https://developers.google.com/web/updates/2018/01/devtools
* https://glebbahmutov.com/blog/local-overrides/

## 1. Select DOM Elements

https://medium.freecodecamp.org/10-tips-to-maximize-your-javascript-debugging-experience-b69a75859329

$(‘tagName’) $(‘.class’) $(‘#id’) and $(‘.class #id’)

 $$(‘.className’) will give you all the elements that have the class className, and $$(‘.className’)[0]and $$(‘.className’)[1]


2. Convert Your Browser Into An Editor

document.body.contentEditable=true

document.designMode = "on";


<div contenteditable="true">
  This text can be edited!
</div>


3. Find Events Associated with an Element in the DOM

getEventListeners($('selector'))


## 4. Monitor Events



## 5. Find the Time Of Execution of a Code Block

console.time( 'timer 1' ); //Starts the timer with label - myTime

for(var i=0; i < 100000; i++){
  2+4+5;
}

console.timeEnd( 'timer 1' ); //Ends the timer with Label - myTime

//Output - myTime:12345.00 ms


## 6. Arrange the Values of a Variable into a Table

var myArray=[{a:1,b:2,c:3},{a:1,b:2,c:3,d:4},{k:11,f:22},{a:1,b:2,c:3}]
console.table(myArray)

7. Inspect an Element in the DOM
inspect($('#6370'))

inspect($('a')[1])

8. List the Properties of an Element

dir($('selector'))

The dir method displays an interactive list of the object passed to it.
console.dir(document.body);


9. Retrieve the Value of your Last Result
$_


10. Clear the Console and the Memory
clear{}

or Ctrl-L

## Log Objects

thing = 9
9
{thing}
{thing: 9}


## Use $ and $$

use the $ and $$ as shortcuts for document.querySelector() and document.querySelectorAll() respectively.

## debug(fn)

everytime that function is invoked, the debugger will then pause the execution on the first line of that function.

## copy(obj)

copy(anything) is a handy utility in the console that allows you to put anything into the system clipboard.

Give copy some mangled JSON. It will pretty print it for you.