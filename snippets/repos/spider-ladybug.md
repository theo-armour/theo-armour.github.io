

### 2019-04-09 ~

* https://semver.org/
* https://en.wikipedia.org/wiki/Software_versioning
* https://medium.com/@jameshamann/a-brief-guide-to-semantic-versioning-c6055d87c90e
* https://docs.npmjs.com/about-semantic-versioning
* https://gist.github.com/jashkenas/cbd2b088e20279ae2c8e
	* Many interesting comments to a short gist


### 2019-04-08 ~

Branch- and release- driven development

I would really like to move the Spider coding workflow over to a release- and branch-driven very git-oriented workflow. I do, however, have several stumbling blocks I have not figured out how to work-around

* Links to scripts of every release are available
* Clicking any link will run that script in your browser
* No need for git or other tools to be used

In other words the entire history of a project - from R1 to the latest release - is always viewable and runnable by non-technical users and every release is in its own branch.

Using a CDN such as jsDelivr it is easy to link to any asset in any branch or release on GitHub.

What is not so easy is to get a link to the the multiple primary HTML files that can run and load all the relevant scripts and other assets.





Suggestions that could be added to the read me for this repo

***

This repo is a general starting-off space for the Ladybug Tools collaboration. Items may include:

* Sandbox code and comments pre-repo stage - but that would otherwise clutter an existing repo
* Issues and comments that might apply to multiple repos
* Style guides and standards that might apply to multiple projects
* General coding or technical issues not related to specific projects such as
	* Calendars
	* FAQs
	* Utilities

Items for this repo should allow for aging and archiving so as to prevent a clutter of old, no longer used stuff
* Aging and archiving
	* Use year folders for last years things no longer
* Deprecation
	* Links to forks with newer versions

This repo does not replace:
* End user discussion on the Discourse Forum
* Project coding matters in their respective repos
* ladybug-tools.github.io for home page code and assets of wide utility and long duration such as logos and licenses

### 2019-04-05

my loss of focus

Ladybug tools Website updates -my inability to complete on static 2D views of live 3D apps

'community' repo - want

multiple new spider reps
- perhaps 3-5
- alternative to 'tools' moniker

Antoine is wonderful and can a coder and a designer work together



### 2019-01-30

Add spider to Ladybug Tools Google Analytics



### 2019-01-07

My difficulty in understanding what we do


NREL politics

JSON format??


## agenda 2019-01-06 Mostapha


Ladybug Tools website


What is Spider?

Spider is a coding cookbook providing easy-to use and easy-to-customize free open source JavaScript source code.
The over-arching intent is to facilitate the transfer of data between CAD and energy analysis programs via real-time 3D visualization. Tools - mostly built upon the Three.js WebGL library - are available to view, examine and edit data files. Currently the scripts - and accompanying sample file libraries - provide good support for gbXML files and Radiance software data files. Many of the coding samples were written is response to user queries. All code is hosted on GitHub and runnable in the browser by clicking the link in the content management scripts.

links will be added

gbXML viewers

gbXML generators

gbXML reports

gbXML repairs

gbXML sample files

Radiance viewers

Radiance reports

Radiance sample files






### 2018-11-??

What should we do to support Spider/keep Theo and Michal happy?
Also, we should discuss:

What should the spider logo be?
How should we integrate Spider into the Ladybug Tools website and the D3 web (https://www.ladybug.tools/#tools)?
What things still remain to be done to get gbXML support in Honeybee?
https://www.ladybug.tools/index.html updates to include Spider
Theo will explain over-complex current status of gbXML viewer code
Discuss app, repo, folder and file naming ideas
Update on NREL politics
Update priorities
Discuss how can Spider can better integrate with other LT tools





## Solar experiments


### Energy Analysis


### epw


## Contacts

* Bring over ibpsa files
* Art as the link gatherer
* Syracuse Prof Dr Tarek Rakha UK
* Mostapha
* Better home page
* Board of Advisors Dr Andrew Marsh
* Statement of Intent


### Waiting


requesting animation frames, https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
multiplying matrices https://en.wikipedia.org/wiki/Matrix_multiplication
and conjugating quaternions / https://en.wikipedia.org/wiki/Quaternion#Conjugation,_the_norm,_and_reciprocal





## Change Log

### 2018-06-09

gbXML Viewer Sun Range Next Generation

'Aragog' gbXML Viewer currently has the ability to depict a Sun range for any date of the year with a maximum of 16 Suns in any rendering.

The current results are moderately acceptable but in no way compare with professional tools such as [Radiance]( https://www.radiance-online.org/). The objective of the current exercise

* Depict the shadows for a gbXML or Radiance .rad files given any reasonable number of Sun positions
* Produce results that are reproducible abd verifiable
* Do all this in a manner that is fast, easy and simple

There are two parts to the solution
* Draw the shadows on the ground
* Draw the shade and shadows on the building

We are currently tackling the first part. Good progress is being made. So here are some first visual results





### 2018-04-15

REP
* code cleanup - delete dead code

ISS
* Duplicate adjacent spaces
* Duplicate Coordinates
* lots of little fixes

HUD2
* Add buttons

### 2018-04-11

Coming soon

GV R13 Numbers

* Getters and setters everywhere  << getting therr
* CSS to buttons // add using algorithm?
* Add areas by CAD object type?

Reports
* Add zones << done
* Use gbXML_TRK.xml

### 2018-04-??

* Tiny surfaces issue
* Add ground plane
* Add color selectors
* Add color schemes choices menu
* add radiance


#### 2018-03-31

epw files

https://github.com/ladybug-tools/epwmap/blob/gh-pages/data/doe.csv

#### 2018-03-25 ~

So Anton sent me this gbXML file which is now online here:
http://www.ladybug.tools/spider/gbxml-viewer/r12/gv-app/gv-app.html#../../../cookbook/07-create-exportable-buildings/test-gbxml-files/SPEED%20gbxml.xml
He asked if I could create a Sun Path for this file
Sun Path definition >> https://en.wikipedia.org/wiki/Sun_path
Using Lagybug Toools / Spider / gbXML Viewer. I instantiated the Sun Path menu and from which I created this screen

Just for fun I also called the Sun Sahadow Range menu and grabbed this screenshot of the model taken at 12 noon on the shortest day of the year and showing the shadows for ten position of the sun. BTW I noted that the latitude and longitude of the the model is situated in my bedroom in San Francisco.

And, well, it would be nice to be even more technical so here is a screen grab showing the Window Wall Ratios of facades facing the eight canonical solar positions



## 2018-03-13
* Aceit, tania, allison, diana, kyle, cynthiam, mia,rob
* David Naylor, Tim Child, David Ellis, TGD

gbXML Viewer R11 / Launch Video

Hi everybody

Here is an update on the software I have been writing: [gbXML Viewer]( http://www.ladybug.tools/spider/gbxml-viewer/ )

One of my goals in all of this is to help encourage more women and young peeps to be involved with STEM (science, tech, engineering and math ) topics.

It seems that my collaborator, Michal, can deliver the goods: [Ladybug Spider gbXML Viewer Introduction Video](  https://www.linkedin.com/feed/update/urn:li:activity:6378839271171772417/ )

Much as I enjoy the watching this video and and listening to its presenter, I wonder if continuing this kind of effort will be a good thing for the people involved and for the product.

You being a seasoned watcher of what peeps watch, I'd really appreciate your take on this effort.

Theo

### 2018-02-07 ~

bristol-clifton-down-road.xml

aim10134 = aim8861

aim9649 = aim10191


### 2017-11-30

Update the main read me

### PW

https://rawgit.com/PerkinsAndWill/spiderAnton/master/SwellInteractive/ScatterPlot4SPEED/ScatterPlot4SPEED.pptx

https://rawgit.com/PerkinsAndWill/spiderAnton/master/SwellInteractive/GeometryVizSpec/GeometryUpdates.pptx

https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Frawgit.com%2FPerkinsAndWill%2FspiderAnton%2Fmaster%2FSwellInteractive%2FGeometryVizSpec%2FGeometryUpdates.pptx


https://github.com/antonszilasi/spiderAnton

https://antonszilasi.github.io/spiderAnton/speed/speed-page.html

https://github.com/antonszilasi/spiderAnton/blob/master/speed/geometry.js

antonszilasi/spiderAnton/blob/newQline/speed/

validation
https://antonszilasi.github.io/spiderAnton//speed/tests/geometryLogicValidator.html


## 2017-10-30 ~ Ben & Anton

Creating schematics ~ not architecture or renderings
User is a DJ
* Needs to hear before playing.
* Everything that's doable must be visible from the get go
* Guns on every mantle piece: is something looks wrong there's a way to fix it
Feels like a game
Works on your phone / Works in VR / Viewer is another menu





## Ben

* Date for presentation
	* nov 9/10

* Presenting the Powerpoint you have shared? Or something else?
* Audience size? Type of venue?
* Any demos? Hands-on?
* Current work is to prove it's doable? That Three.js is a viable solution?
* Any specific correlation needed?
 * The more I do the easier it is for ME and Anton to do their work.





## Chien Si Harriman

What is your business and how can I help?

Is gbXML something you are keen on?

What can we do to help gbXML?

Where would you like to see our dev work?

Can we get any users?

Help Steve Roth or not


cityGML?
IDF?
OSM?
IFC?

NY Hackackathon: What team?


### Ben Welle

Can do gbXML, IFC, NREL ESM files. Probably CityGML, EnergyPus IDF

What should I be doing and where should it be hosted?

Issue: there's not a lot of content out there. need models. need visuals.


I'm mostly online and in writing

Github user login?

Web Site down: http://zeroemissiondesign.com









### Business plan
https://www.forbes.com/sites/davelavinsky/2013/12/03/business-plan-outline-23-point-checklist-for-success/2/#550f27906e20

People / Partners / Skills

Product / Processes /

Customers / Market / Segments

Sales and Marketing / Revenue Model

Operations / Costs

Competition

Metrics / Milestones


## Peeps to contact

Dr Andrew Marsh

Tarek Rakha
Burning Man subreddit
Man with underground data
Dan Macumber <<

# Burning mAnalemma 2017

Burning mAnalemma R7
http://ladybug.tools/spider/burning-manalemma-2017

benjamin.welle@perkins


There's an event called BurningMan https://burningman.org/ now going on in Nevada, USA.

I'm remote hacking with  Temple 2017 http://www.temple2017.org/ and <https://en.wikipedia.org/wiki/Analemma|analemmas> - and adding new features daily.

http://www.ladybug.tools/spider/images/temple-postmodern-ezgif.gif

Animated GIF showing a pile of lumber transformed into a temple or a post-modern architectural deconstruction. It's all here:

http://ladybug.tools/spider/burning-manalemma-2017

Anyway. I'd like to do things like this with the current MicroHouse DXF files.

The issue for me is that these are in the AutoCAD R14 format of DXF. This format is far more complex than previous formats. I should know because I helped write the spec for it what I worked for Autodesk.

Is there any way that the files could be recreated in one of the earlier DXF formats?

Theo


PS There's nothing wrong with the R14 format but it had to handle 3D, PostScript, Paper space and more - thus it is much more of a beast to interpret.



https://ladybug-tools.github.io/spider/images/temple-postmodern-ezgif.gif

Post-modern @burningman - de-constructing @temple_2017!
# Burning_mAnalemma R5  #threejs @Mapbox @ladybug_tools
http://ladybug.tools/spider/burning-manalemma-2017


Climbing Mt Everest? Bring along @burningman @temple_2017!
Burning_mAnalemma R4  #threejs @Mapbox @ladybug_tools
http://ladybug.tools/spider/burning-manalemma-2017


Are you climbing Mountelamma Everest? Bring the Burning Man Temple with you.

Bring the heat of the Burning Man Temple anywhere.

Here's a view of the Notre Damalemmma.

Burning mAnalemma R4



Burning_mAnalemma R3 @temple_2017 @burningman #threejs @Mapbox @ladybug_tools

http://ladybug.tools/spider/burning-manalemma-2017

Feel the heat: Burning mAnalemma brings #temple_2017 to your browser #burningman #threejs #mapbox

https://t.co/u3Nbo8ZO2g


https://github.com/mdahlhausen/epwvis/issues/8

@mostaphaRoudsari @mdahlhausen @MingboPeng

NREL/EnergyPlus have a folder on GitHub with a small number of EPW files - probably for testing - here:

 https://github.com/NREL/EnergyPlus/tree/develop/weather

This folder also includes their 'master.geoson'

https://raw.githubusercontent.com/NREL/EnergyPlus/develop/weather/master.geojson

This geoJSON file supplies links to download all the EnergyPlus EPW files.

http://jess.ensims.com/epw/json/



http://www.ladybug.tools/eval/publication

Mission

* Authoritative / sources / thanks / credits
* Free in every sense / no charges / can fork
* Easy to tinker/tweak

# ladybug-tools.github.io

# spider

# ladybug-web

# 3D-Models

* needs much fixing

## Done

### 2017-07-09

* Much work on glitch parallel eval


### 2017-03-12
ladybug-web
* All fixed
ladybug-tools.github.io
* fixed 2017-03-11
2017-03-11 Analemma fixes