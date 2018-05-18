https://github.com/JKirchartz/demos


javascript:(function(){window.open("http://jkirchartz.com/demos/HTML5notepad.html","HTML5 notepad","width=800,height=600");})()

http://jkirchartz.com/demos/


https://rawgit.com/JKirchartz/demos/gh-pages/HTML5notepad.html

https://rawgit.com/JKirchartz/demos/gh-pages/notebook.html

https://rawgit.com/JKirchartz/demos/gh-pages/notes.html


Validate with validator.w3.org
javascript:(function(){window.open("http://validator.w3.org/check?uri="+window.location);})()

javascript:(function(){window.open("http://talkify.net/?url="+window.location.href);})()

javascript:(function(){window.open("http://chart.apis.google.com/chart?cht=qr&chs=500x500&chl=" + window.location,"", "width=500, height=500")})()

javascript:(function(){document.body.contentEditable = true;})()

for embedding??

javascript:(function(){var u = window.location.toString(); u = u.replace(new RegExp("(i\.)"),""); u = u.substr(0,u.lastIndexOf(".")) || u; window.open(u,"_blank","");})()