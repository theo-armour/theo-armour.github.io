# GitHub


## Tips

* You can write read me files in HTML because Markdown passes transparently almost all HTML


## JavaScript

* http://jsbeautifier.org/


## Releases

* https://help.github.com/categories/releases/
* https://blog.github.com/2013-07-02-release-your-software/
* https://stackoverflow.com/questions/38675829/how-to-create-releases-for-public-or-private-repository-in-github


Tips

* Right click on Latest Release and copy the URL to share it. The suffix of this URL is always /releases/latest.

## Notes GitHub API

* https://github.com/tiimgreen/github-cheat-sheet
* https://github.com/blog/1647-viewing-yaml-metadata-in-your-documents
* https://github.com/github/markup
* https://www.quora.com/What-is-your-1-favorite-quick-tip-or-trick-using-GitHub


for gists only 2016-10-09 ~

See also

C:\Users\Theo\Dropbox\Public\git-repos\jaanga.github.io\cookbook-html\examples\github-api-rss\github-api.md


## Link to specific lines of source code:

https://github.com/geoffmcl/map-test2/blob/gh-pages/nav.html#L247-L299

https://github.com/blog/699-making-github-more-open-git-backed-wikis

http://stackoverflow.com/questions/1170166/can-i-checkout-github-wikis-like-a-git-repository:
git clone git@github.com:jaanga/terrain.wiki.git


## Readme / gist tips

---
layout: post
title: GitHub API Cheat Sheet
---

yaml tables. must be first thing in the gist


### Bookmarks

5 entertaining things you can find with the GitHub Search API
* https://gist.github.com/jasonrudolph/6065289

fun look at issues
* https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+


# URL shortener github pages etc

http://git.io provides a URL shortener for your GitHub repos.


#### Analytics

https://github.com/blog/1672-introducing-github-traffic-analytics


## Atom

https://github.com/ladybug-analysis-tools/ladybug-web/commits/gh-pages.atom

https://developer.mozilla.org/en-US/docs/Web/Guide/Parsing_and_serializing_XML


#### CDN

https://www.maxcdn.com/
https://rawgit.com/


https://cdn.rawgit.com/showdownjs/showdown/master/dist/showdown.min.js


<script src=http://cdnjs.cloudflare.com/ajax/libs/three.js/r66/three.min.js ></script>

<script src="https://raw.github.com/mrdoob/three.js/r59/build/three.min.js"></script>




## CURL


* just list the sub-folders

curl -i -H 'Authorization: xxxxx' https://api.github.com/theo-armour

curl -u theo-armour:xxxxxx https://api.github.com/theo-armour

curl -i -u theo-armour -H "X-GitHub-OTP: 634579" -d '{"scopes": ["repo", "user"], "note": "getting-started"}' https://api.github.com/authorizations

curl -i -H 'Authorization: token xxxxxx' https://api.github.com/user

curl -i -H 'Authorization: token xxxxxx' https://api.github.com/user/repos



## [GitHub] Desktop

https://help.github.com/desktop/


## Emoji in Labels

For GitHub Pages sites built on GitHub.com, emoji images are served from the GitHub.com CDN, with a base URL of https://assets-cdn.github.com, which results in emoji image URLs like https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png.



Complete list of github markdown emoji markup
* https://gist.github.com/rxaviers/7360908 -
* https://assets-cdn.github.com/images/icons/emoji/octocat.png
* https://www.webpagefx.com/tools/emoji-cheat-sheet/

See html-css.md for lists of emoji


## Labels

### Emoji in labels

* https://hackernoon.com/github-labels-and-emojis-%EF%B8%8F%EF%B8%8F-9d5c351344bb



## Source Code

###  line numbers
https://github.com/leapmotion/leapjs/blob/master/leap.js#L273-L278


## Pages
Setting up your pages site repository
https://help.github.com/articles/setting-up-your-pages-site-repository/

