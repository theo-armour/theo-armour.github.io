
# Content Editable


### Editable Content & Mozilla text editor

Making content editable
* https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content

Midas (the scriptable text editor component)
* https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Midas

Document.execCommand()
* https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand


### Cut and Paste
open new page then paste this in address bar

```
data:text/html, <html contenteditable style='padding:10%;'></html>
```


### Make current page editable bookmarklets

javascript:(function(){document.body.contentEditable = true;})()

### In HTML page
```
<p><a href='javascript:(function(){window.open("http://jkirchartz.com/demos/HTML5notepad.html","HTML5 notepad");})()' >html5 notepad</a></p>
```

```
data:text/html;charset=utf-8, <title>Scratchpad</title><style>body {padding: 5%; font-size: 1.5em; font-family: Arial; }"></style>
<link rel="shortcut icon" href="https://ssl.gstatic.com/docs/documents/images/kix-favicon6.ico"/><body OnLoad='document.body.focus();' contenteditable spellcheck="true" >
```


### jjjjjjjjjjjjjjjjjjjj/new-note

* https://github.com/jjjjjjjjjjjjjjjjjjjj/new-note
* https://jjjjjjjjjjjjjjjjjjjj.github.io/new-note/
* https://github.com/jjjjjjjjjjjjjjjjjjjj/new-note/blob/master/index.html

Reviews
* https://news.ycombinator.com/item?id=17002648
* https://www.reddit.com/r/webdev/comments/8keh5s/200_byte_pure_htmlcss_responsive_inbrowser_notepad/

### Saving Edited Content

* http://html5doctor.com/the-contenteditable-attribute/
* http://jsbin.com/owavu3/1/edit?html,js,output
* http://html5doctor.com/the-contenteditable-attribute/


