Notes GitHub
===

* https://github.com/tiimgreen/github-cheat-sheet
* https://github.com/blog/1647-viewing-yaml-metadata-in-your-documents
* https://github.com/github/markup
* https://www.quora.com/What-is-your-1-favorite-quick-tip-or-trick-using-GitHub


for gists only 2016-10-09 ~

################ API

https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+


https://developer.github.com/v3/

https://api.github.com/rate_limit
https://help.github.com/categories/search/
https://help.github.com/articles/searching-repositories/
https://help.github.com/articles/searching-code/ << Only files under 384k are searched


http://stackoverflow.com/questions/12882049/list-all-java-repositories-on-github-using-api?rq=1
https://github.com/search?q=3D+extension:stl&type=Code&s=indexed

https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc
https://api.github.com/search/repositories?q=language:Java&sort=stars&order=desc


// http://stackoverflow.com/questions/14731459/github-api-fetch-all-folders-and-files-in-single-get-request


## Theo

https://api.github.com/users/theo-armour/events


https://api.github.com/repos/theo-armour/theo-armour.github.io/git/trees/master?recursive=1

https://api.github.com/repos/theo-armour/theo-armour.github.io/contents/aceit/
https://api.github.com/repos/theo-armour/theo-armour.github.io/contents/aceit/index.html


## Jaanga

https://api.github.com/users/jaanga/received_events

https://api.github.com/repos/jaanga/algesurf/contents/parametric-equations/equation-files/
https://api.github.com/repos/jaanga/algesurf/git/trees/gh-pages?recursive=1
https://api.github.com/repos/jaanga/algesurf
https://api.github.com/repos/jaanga/jaanga.github.io/git/trees/master?recursive=1

https://api.github.com/repos/jaanga/jaanga.github.io/git/trees/5bc5abeabb0706b67596c8663894729bb255759d?recursive=1

## Analytic Physics

https://api.github.com/repos/paulmasson/sagemath-docs

https://api.github.com/repos/paulmasson/sagemath-docs/contents/functions/


## Dirksen
https://api.github.com/repos/josdirksen/learning-threejs/git/trees/master?recursive=1


## NASA

https://api.github.com/repos/nasa/nasa-3d-resources

https://api.github.com/repos/nasa/NASA-3D-Resources/contents/3D%20Printing

https://api.github.com/repos/nasa/nasa-3d-resources/git/trees/master?recursive=1


## STL
https://github.com/blog/1465-stl-file-viewing


https://github.com/search?q=NASA-3D&extension:stl&type=Code&s=indexed
https://github.com/search?q=3D+Printing+extension:stl&type=Code&s=indexed


https://api.github.com/search/code?q=3D+extension:stl


## Three.js
https://api.github.com/repos/mrdoob/three.js << go here to see what's available

https://api.github.com/repos/mrdoob/three.js/stats/contributors
https://api.github.com/repos/mrdoob/three.js/stats/commit_activity
https://api.github.com/repos/mrdoob/three.js/stats/participation

https://api.github.com/repos/mrdoob/three.js/git/commits/6295c939392a5fc6033d9e5e28877dd48618275c
https://api.github.com/repos/mrdoob/three.js/commits?path=examples/webgl_geometry_colors_lookuptable.html
https://api.github.com/repos/mrdoob/three.js/commits?path=examples <<
https://api.github.com/repos/mrdoob/three.js/commits?path=src/lights


https://api.github.com/search/repositories?q=webgl+repo:three.js&sort=stars&order=desc
https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc

https://api.github.com/repos/mrdoob/three.js/contents/examples?ref=dev
https://api.github.com/repos/mrdoob/three.js/contents/examples?ref=r70

https://api.github.com/repos/mrdoob/three.js/git/trees/master?recursive=1 <<<<<<<<<<<<<<
https://api.github.com/repos/mrdoob/three.js/git/trees/dev?recursive=1
https://api.github.com/repos/mrdoob/three.js/git/trees/r70?recursive=1



https://api.github.com/repos/mrdoob/three.js/tags


https://api.github.com/repos/mrdoob/three.js/contents/examples/
https://api.github.com/repos/mrdoob/three.js/contents/examples/models
https://api.github.com/repos/mrdoob/three.js/contents/examples/models

https://api.github.com/repos/mrdoob/three.js/contents/examples/canvas_ascii_effect.html?ref=dev
https://api.github.com/repos/mrdoob/three.js/contents/examples?ref=dev
https://api.github.com/repos/mrdoob/three.js/contents/examples?ref=r25

https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/canvas_ascii_effect.html
https://raw.githubusercontent.com/mrdoob/three.js/r70/examples/canvas_ascii_effect.html
https://raw.github.com/mrdoob/three.js/dev/examples/webgl_effects_parallaxbarrier.html


## SAGE

https://github.com/sagemath/sage/blob/master/src/sage
https://github.com/sagemath/sage/blob/master/src/sage/functions/jacobi.py


https://api.github.com/repos/sagemath/sage/git/trees/3defc14ec89f8439928ba56448fee77eec3eb647?recursive=5

https://api.github.com/repos/sagemath/sage/functions



https://api.github.com/repos/sagemath/sage/contents/src/sage?recursive=5

https://api.github.com/repos/sagemath/sage/contents/src/sage/functions?ref=develop

https://raw.githubusercontent.com/sagemath/sage/master/src/sage/functions/jacobi.py


* just list the sub-folders

curl -i -H 'Authorization: 34555a60a42e4e68f3ccc6d9e5c94da82ec2fd38' https://api.github.com/theo-armour

curl -u theo-armour:34555a60a42e4e68f3ccc6d9e5c94da82ec2fd38 https://api.github.com/theo-armour

curl -i -u theo-armour -H "X-GitHub-OTP: 634579" -d '{"scopes": ["repo", "user"], "note": "getting-started"}' https://api.github.com/authorizations

curl -i -H 'Authorization: token 34555a60a42e4e68f3ccc6d9e5c94da82ec2fd38' https://api.github.com/user

curl -i -H 'Authorization: token 34555a60a42e4e68f3ccc6d9e5c94da82ec2fd38' https://api.github.com/user/repos




## Git

$ git config -l
$ git status

$ git add -vA .
$ git commit -am “updated master”
$ git push

$ git reset --hard

function prompt {"PS: $(get-date)>"}

^^^





####
https://github.com/theo-armour

http://theo-armour.github.com/

http://theo-armour.github.com/explayrimental/

git for windows install/update
gitub reference setup ~ git portable setupg

Reminders
differentiate between origin and upstream
:*O:/gad::git add -vA .
:*O:/gh::git checkout
:*O:/gcom::git commit -am ""
:*O:/gn::git config --list
:*O:/gp::git push origin gh-pages
:*O:/gs::git status
:*O:/gt::git clone git://github.com/mrdoob/three.js.git

How to update a local clone directly from upstream source
http://help.github.com/fork-a-repo/
$ git fetch upstream
$ git merge upstream/master

What to do with unfamiliar folder
$ git
$ git config -l
$ git status
$ git show  << type “q” to quit
$ git logi
$ git shortlog
$ git git add -v .

Checking the Branches > git branch

$ git branch -av <<  show local and remote verbosely

Renaming the branch

$ git branch -m oldname newname

Changing to a branch >> git checkout

$ git checkout <branch>

Coding between branches experimental & master & origin (github)
$ git checkout experimental
[ make changes ]
$ git add -vA . << verbose and All
$ git commit -am “updated experimental”

$ git checkout master
$ git merge experimental
$ git add -vA .
$ git commit -a -m “updated master”git
$ git push origin master

try git add A to delete folders?git

Adding release numbers >> git Tag
$ git tag -a r34
see also git describe
brings up Vim >> edit file > press Exc key >> :wq to save and exit

Git remote
http://help.github.com/create-a-repo/

$ git remote rm origin
$ git remote add origin git@github.com:theo-armour/threo.js.git

cloning a branch >> git clone
http://help.github.com/fork-a-repo/
$ git clone git@github.com:username/appname.git

Clones a repository into a newly created directory, creates remote-tracking branches for each branch in the cloned repository (visible using git branch -r), and creates and checks out an /initial branch that is forked from the cloned repository’s currently active branch.

After the clone, a plain git fetch without arguments will update all the remote-tracking branches, and a git pull without arguments will in addition merge the remote master branch into the current master branch, if any.

$ git fetch
$ git pull
$ git gc

$ git pull upstream gh-pages

$git reset --hard
- must add the hard for it to work...
- allows a pull to work after you have screwed up the local directory

First time
$ git clone git://github.com/mrdoob/three.js.git
$ cd three.js
$ git checkout dev [master]g

Updates
git pull origin dev
