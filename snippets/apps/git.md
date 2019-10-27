# Git



$ git add -vA . << verbose and All
$ git commit -am “updated experimental”

$git reset --hard
- must add the hard for it to work...
- allows a pull to work after you have screwed up the local directory





$ git config -l
$ git status

$ git add -vA .
$ git commit -am “updated master”
$ git push

$ git reset --hard



Cleaning up repos
>> http://stackoverflow.com/questions/3119850/is-there-a-way-to-clean-up-git

$ git reflog expire --expire-unreachable=now --all
$ git gc --prune=now



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

$ git remote -v

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




