
https://iojs.org/en/index.html
http://nodejs.org

https://nodejs.org/api/


### 2020-03-30

Node installed in C:\Program Files\nodejs\

Chocolatey installs Python 2.7!!!!


## My Node and NPM

D:\Dropbox\Public\code-cookbook\0-node
D:\Dropbox\Public\git-repos\jaanga.github.io\cookbook-html\npm

http://jaanga.github.io/#cookbook-html/npm/README.md



## Locations

nodes is kept in Program Files (x86)

C:\Program Files\nodejs\

Use Windows Explorer/NotePad++ to open a command window in the folder you want to work in. Then > prompt $$

Or Git Bash


> node
takes to a node window

> node my_parser.js
runs it

// Command line Arguments

	process.argv.forEach( function (val, index, array ) {
		console.log( index + ': ' + val );
		console.log( process.argv[2] );

	});



## Update Node

got to https://nodejs.org/en/ click install.
x64 msi version is good

>> version
node -v

node -help

## NPM ~ https://www.npmjs.org/



https://docs.npmjs.com/getting-started/

https://docs.npmjs.com/misc/faq

from https://www.npmjs.org/doc/misc/npm-faq.html :
npm installs apps in just under the current folder

How do I install something on my computer in a central location?
>> cd

	* Install it globally by tacking -g or --global to the command.
	* This is especially important for command line utilities that need to add their bins to the global system PATH.)


## Update NPM


npm version

>> npm -v

>> npm help

## Update NPM packages

Find out which packages need to be updated
https://docs.npmjs.com/getting-started/updating-global-packages

To find out which packages need to be updated, type:
>> npm outdated -g --depth=0.

To update all global packages, type:
>> npm update -g

Uninstall
>> npm uninstall jshint -g


## NOM Tips


npm <command> -h  quick help on <command>
npm -l            display full usage info
npm help <term>   search for help on <term>
npm help npm      involved overview

source in: file:///C:/Users/tarmo/AppData/Roaming/npm/node_modules/npm/html/doc/cli/npm.html


npm whoami

npm li | list and ll or la for more info

npm version 1.1.0

### npm commands
 access, adduser, audit, bin, bugs, c, cache, ci, cit,
 completion, config, create, ddp, dedupe, deprecate,
 dist-tag, docs, doctor, edit, explore, get, help,
 help-search, hook, i, init, install, install-test, it, link,
 list, ln, login, logout, ls, outdated, owner, pack, ping,
 prefix, profile, prune, publish, rb, rebuild, repo, restart,
 root, run, run-script, s, se, search, set, shrinkwrap, star,
 stars, start, stop, t, team, test, token, tst, un,
 uninstall, unpublish, unstar, up, update, v, version, view,


## Keepers

https://github.com/nodeapps/http-server



## PNG

https://github.com/oliver-moran/jimp

* can write / sync

https://github.com/lukeapage/pngjs2

* createWriteStream only / async

https://github.com/EyalAr/lwip
* needs node-gyp
* follow instructions closely
* needs latest visual studio



https://github.com/leogiese/node-png
