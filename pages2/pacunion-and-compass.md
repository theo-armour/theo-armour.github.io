
# PacUnion and Compass Merger

Links regarding the merger
* 2018-08-21: https://www.sfchronicle.com/business/networth/article/Compass-buying-Pacific-Union-second-SF-real-13172961.php
* 2018-08-22: https://www.pacificunionpress.com/the-real-deal-covers-pacific-union-and-compass-deal/
* 2018-08-30: https://www.sfchronicle.com/business/networth/article/It-s-official-Compass-buying-Pacific-Union-to-13192026.php
* https://blog.pacificunion.com/pacific-union-joins-compass/
* https://blog.pacificunion.com/video-pacific-union-joins-compass/


## Pacific Union Web Site

https://www.pacificunion.com/

* There's a find-an-agent page but no-become-an-agent page
* Compared to Comapass, the PacUnion site is much more oriented toward home owner and buyers than toward agents


# Observations on the [compass.com]( https://compas.com ) web site


# Coding Aspects

I looke at the source code of the home page and several other pages, below are some of the things I noticed and my observations.


## Home Page CSS

https://d382qe86mkdg2o.cloudfront.net/static/1b14f521a9c33530eb1af74c5d7d66db17e8ec3e/systemjs_apps/cssout/Consumer.gz.css

	/*! PocketGrid 1.1.0-custom
	* Copyright 2013 Arnaud Leray
	* MIT License
	* Customized for Urban Compass use.

See https://github.com/arnaudleray/pocketgrid

* Last update to file was in February 2014
* One man band product with a single release
* https://stackoverflow.com/questions/21118115/pocketgrid-grid-layout-with-fixed-width-navigation-column

Comment: Archaic scripts from single person operations are not the sort of scripts you expect to find in billion dollar company web sites



## JavaScript

Looking at the code here are some scripts that I see

### SystemJS

From home page source code:

	/*
	* SystemJS v0.19.40
	*/

From SystemJS page

* Configurable module loader enabling backwards compatibility workflows for ES modules in browsers.
* Current release is 2.1.1
* Previous release: https://github.com/systemjs/systemjs/tree/0.21


### Angular

From Compass home page

* npm:angular@1.5.6.js
* Last update 2 years ago
* The current release of Angular is 7.0

Angular was hot in 2014.  It's much less hot these days.

* https://trends.google.com/trends/explore?cat=31&q=React,Angular
* https://medium.com/front-end-hacking/react-vs-angular-vs-vue-js-a-complete-comparison-guide-d16faa185d61


### npm:babel-runtime@5.8.35
* From 2015
* Current releasr is 7


### Variable and ID names

A number of IDs and variable names refer to "uc" and "urban-compass" - as in 'uc-globalHeader-logotype'.
The company changed its web address from urbancompass.com to compass.com after acquiring the address in 2015.

### General Objservation

The code for the compass.com home page is:

* Old
* Contains much useless node.js stuff
* Contains too much source code. It looks like the scripts were meant to be compiled or minified but that seems to have never happened.

Technically
* Frontend: 100% JavaScript hosted on AWS
* Backend: no idea but probably also on AWS

The code of the site might be forgivable for an industrial company or a bank.
Compass, however, purports to be a tech leader. The code of their web site home page in no way matches up with that expectation


Later:

The code for the agents page and some of the other pages is very different than the code for the home page - and has a much better feel to it. The in-house development team is just eighteen people. It looks like most effort has gone into the apps and just some selected web pages.



# Web Page Content

I also browsed around the various pages and have these observations regarding the content

### https://www.compass.com/about/team

* A bunch of amazing looking white people

### Engineering blogL  https://medium.com/compass-true-north

Posts of interest
* https://medium.com/compass-true-north/heads-down-shipping-b8902fafc994
* https://medium.com/compass-true-north/introduction-to-compass-product-engineering-485873a88cac
* https://medium.com/compass-true-north/whats-interesting-and-challenging-in-compass-engineering-c1660a86c873


### Github: https://github.com/UrbanCompass

* Only two people involved



### https://www.compass.com/about/investors

* Marc Benioff is an investor


### https://agents.compass.com/

* Note video "celebrating five years" - company was founded in 2012. It's now 2018.
* Page is very complicated user experience
* Code here is much more interesting than home page


### https://www.compass.com/agents/

* Kind of OK look and feel
* Complex to navigate


### https://www.compass.com/quarterly/

* Latest issue: summer 2017!!


### https://www.compass.com/research/

* iOS only. You must be joking


### https://sign.compass.com/

* Sold Out - A new round of sales in Fall 2018


### Twitter

* Tweeting looks OK

## Conclusions

Navigation gets a bit complicated and the user experience is all a bit messy, but it certainly seems to address the wants and needs of agents

* The whole chitchat has a Tony Robbins feel to it
* Lots of services are available to up-sell to agents
* The business of getting and keeping agents is the paramount message

The only service that Compass does not seem to offer to agents is web site design and hosting.





