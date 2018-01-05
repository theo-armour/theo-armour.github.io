
https://iojs.org/en/index.html
http://nodejs.org

https://nodejs.org/api/

nodes is kept in Program Files (x86)

Use Windows Explorer/NotePad++ to open a command window in the folder you want to work in. Then > prompt $$

> node
takes to a node window

> node my_parser.js
runs it



// Command line Arguments

	process.argv.forEach( function (val, index, array ) {
		console.log( index + ': ' + val );
		console.log( process.argv[2] );

	});

>> update
got to https://nodejs.org/download/ click install.
x64 msi version is good

>> version 
node -v

node -help

### NPM ~ https://www.npmjs.org/

https://docs.npmjs.com/getting-started/

https://docs.npmjs.com/misc/faq

from https://www.npmjs.org/doc/misc/npm-faq.html :
npm installs apps in just under the current folder 

How do I install something on my computer in a central location? 
>> npm install http-server -g

	* Install it globally by tacking -g or --global to the command.
	* This is especially important for command line utilities that need to add their bins to the global system PATH.)

Uninstall
>> npm uninstall jshint -g 

npm version

>> npm -v


How do I update npm? 

>> npm install npm -g
	* same as install

Find out which packages need to be updated 
>> npm outdated -g --depth=0.

To update global packages 

>> npm install <package> -g



### Keepers


https://github.com/nodeapps/http-server

### PNG

https://github.com/oliver-moran/jimp

* can write / sync

https://github.com/lukeapage/pngjs2

* createWriteStream only / async

https://github.com/EyalAr/lwip
* needs node-gyp
* follow instructions closely
* needs latest visual studio



https://github.com/leogiese/node-png
