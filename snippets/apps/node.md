
https://iojs.org/en/index.html
http://nodejs.org

https://nodejs.org/api/

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



##  Update Node

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
>> npm install http-server -g

	* Install it globally by tacking -g or --global to the command.
	* This is especially important for command line utilities that need to add their bins to the global system PATH.)


## Update NPM


npm version

>> npm -v

## Update NPM packages

Find out which packages need to be updated
https://docs.npmjs.com/getting-started/updating-global-packages

To find out which packages need to be updated, type:
>> npm outdated -g --depth=0.

To update all global packages, type:
>> npm update -g

Uninstall
>> npm uninstall jshint -g


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
