Observations Regarding Copyright and License Notices
===

2014-04-26 ~ Theo Armour

I remember reading somewhere the most lawyers in the San Francisco Bay area are involved with intellectual property (IP) issues.
With multi-billion dollar acquisitions just to obtain a suite of patents and multi-billion dollar IP law suites, you can see why.

Given the gravity of IP, it is interesting to see the smallness of the efforts of programmers to protect their own work.

Even in the case of free open source software, there have been instances where patents and copyrights have been established that disregarded the 'prior art'.

The following is a list of links to well-known repositories in GitHub followed by my comments as to aspects of the copyright and license notices (or lack thereof).

At the end is a work-in-progress list of recommendations

### Notes
In very few instances, which was a surprise, have I found a copyright notice or license actually embedded in the source code.
Then again, I have tended to open only a few source code files in these repos so I may have missed some.

Use of 'All rights reserved is obsolete and its use is thus confusing. <https://en.wikipedia.org/wiki/All_rights_reserved>.

A number of notices are written as follows:

> MIT License
> Copyright (c) 2014 xxx xxx
> Blah, blah, blah

Am I the only one who reads this and thinks that people are trying to copyright the MIT License?


## List of Repositories

_In alphabetical order. Ones I like have an asterisk_

### Angular
<https://github.com/angular/angular.js/blob/master/LICENSE>  
It would appear that the MIT License is copyrighted by Google

### Bootstrap *
<https://github.com/twbs/bootstrap>
Copyright notice is at bottom of read me.

Software is under MIT license.
Docs are under CC License. One of the few repositories to differentiate between software and documentation

Clearest and most complete copyright and license seen to date.

### D3
<https://github.com/mbostock/d3/blob/master/LICENSE>  
Title does not indicate this is also a copyright notice  
Copyright notice lists one author but repo stats indicate 76 contributors
No copyright in source code


### Font Awesome
<https://github.com/FortAwesome/Font-Awesome>  
Very complete licensing details in Read Me  
No copyright notice

### GitHub Cheat Sheet
<https://github.com/tiimgreen/github-cheat-sheet>    
Title does not indicate this is also a copyright notice  
Copyright notice lists one author but repo stats indicate 21 contributors

### jQuery
<https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt>  
Title does not indicate this is also a copyright notice

<https://github.com/jquery/jquery/blob/master/AUTHORS.txt>  
Repo does include a list of all authors

### Jekyll
<https://github.com/jekyll/jekyll/blob/master/LICENSE>
It would appear that the MIT License is copyrighted by Tom Preston-Warner  
Copyright notice lists one author but repo stats indicate 313 contributors  

### Khronos Group / glTF ***
<https://github.com/KhronosGroup/glTF/blob/master/LICENSE.md>
Notice that there is formatting, the text is nicely laid out and that the copyright and licenses of all included libraries are listed.

### Leap Motion
<https://github.com/leapmotion/leapjs/blob/master/LICENSE.txt>
Copyright out of date.  
Saved as a text file so word-wrap does not work.  
Text is confusing. How do you release JavaScript in 'Binary form'.  
Uses 'all rights reserved'.


### Node
<https://github.com/joyent/node/blob/master/LICENSE>
MIT License  
Also includes notices for all incorporated software.  

### Three.js
<https://github.com/mrdoob/three.js/blob/master/LICENSE>
It would appear that the MIT License is copyrighted by the three.js authors  


## Recommendations for Notices in GitHub Repositories
_2014-04-26 ~ very preliminary_

* The Read Me - at the bottom - should have a section with a link(s) to the copyright notice and the license as well as to the list of contributors if required.

* The copyright notice and the license should be clearly differentiated

* The copyright should be in the standard format: Copyright (c) date authors(s)

* The copyright notices and licenses of all embedded work should be included

* Adding a word of thanks to the authors of the embedded work is always nice

* Where possible the notices should be nicely formatted and presented Markdown

* If the license is more than a few paragraphs then it would be nice to see a summary or a link to where the license is explained.


