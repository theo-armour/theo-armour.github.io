# ESLint


## Questions

How to check if rules file is invalid?

Same?

* ./node_modules/.bin/eslint
* npx eslint
* Global install

Installs

* Recommends not to install globallyL https://eslint.org/docs/user-guide/getting-started
* Recommends? How to install globally: https://eslint.org/docs/user-guide/command-line-interface




## Links

* https://eslint.org/
* https://github.com/eslint/eslint
* https://gitter.im/eslint/eslint
* https://groups.google.com/forum/#!forum/eslint





## Rules of interest
* https://eslint.org/docs/rules/prefer-template
* https://eslint.org/docs/rules/quotes#top



So would following be a good example of the rule?

```
	const  a = 23;
	const htm = `
<h1>Hi there</h1>
<p>
	abc<bc>
	def<bc>
	123<bc>
</p>
`;
	let zz;
```

- force ESLint formatter: https://github.com/microsoft/vscode-eslint/issues/417#issuecomment-566209216


Initial configuration of eslint we created during our first session:

- https://github.com/haraldreingruber/spider-covid-19-viz-3d/tree/feature/linting


#### ESLint

* https://eslint.org/docs/user-guide/getting-started

In Git Bash

$ npm install eslint --save-dev

	npm WARN deprecated mkdirp@0.5.4: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
	npm WARN saveError ENOENT: no such file or directory, open 'C:\Users\tarmo\package.json'
	npm notice created a lockfile as package-lock.json. You should commit this file.
	npm WARN enoent ENOENT: no such file or directory, open 'C:\Users\tarmo\package.json'
	npm WARN tarmo No description
	npm WARN tarmo No repository field.
	npm WARN tarmo No README data
	npm WARN tarmo No license field.

	+ eslint@6.8.0
	added 134 packages from 84 contributors and audited 179 packages in 8.033s

	7 packages are looking for funding
	run `npm fund` for details

	found 0 vulnerabilities

$ npx eslint --init

Remember

- Very tricky. Install process is dumber than you think.
- You actually have to edit the lines to move the ">" symbol
- Once you have edited the line, go to to the end of line before pressing enter

$ npx eslint main.js

Takes over 7 seconds to run

Could install globally, but:

> It is also possible to install ESLint globally rather than locally (using npm install eslint --global). However,
> this is not recommended, and any plugins or shareable configs that you use must be installed locally in either case.

$ npx eslint main.js --fix

Does not seem to save changes