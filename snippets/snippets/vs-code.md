# VS Code

## Tips

* Can drag and drop from Sidebar to browser
* F1 for help

## About
* Keyboard shortcuts: Ctrl+K, Ctrl+s
* https://code.visualstudio.com/
* https://en.wikipedia.org/wiki/Visual_Studio_Code
* https://twitter.com/hashtag/vscode?lang=en
* https://code.visualstudio.com/docs
* https://stackoverflow.com/questions/tagged/visual-studio-code

## Configuration

* https://code.visualstudio.com/docs/getstarted/tips-and-tricks
* https://hackernoon.com/how-i-configure-vscode-for-everything-7df65a316a52
* https://www.granneman.com/webdev/editors/visual-studio-code/setting-configuring
* https://dev.to/thegeoffstevens/vs-code-settings-you-should-customize-5e75
* https://vscodecandothat.com/


### To do

* Good workflow on Chromebook
		* 2019-04-29: Looking good
* https://github.com/shanalikhan/code-settings-sync
* Try new line only setting no cr


### Opening VS Code

In terminal
start vscode://file/d:/Google%20Drive/Theo/vscode-gdrive/AutoHotkey.ahk

In browser
vscode://file/d:/Google%20Drive/Theo/vscode-gdrive/AutoHotkey.ahk


## Chrome debug

* https://code.visualstudio.com/docs/editor/debugging
* https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome

		{
			"type": "chrome",
			"request": "launch",
			"name": "Launch Chrome app9",
			"file": "${workspaceFolder}/cookbook-html/chrome-debug/threejs-basic.html"
		}

But what is the benefit over using npm http-server?



## Code Navigation

https://code.visualstudio.com/docs/editor/editingevolved

go to the definition: F12.

Go to Symbol: Ctrl+Shift+O

* Type : symbols will be grouped by category

Matching bracket: Ctrl+Shift+\

Rename symbol: F2


## Emmet < wow!

* https://code.visualstudio.com/docs/editor/emmet
* https://code.visualstudio.com/blogs/2017/08/07/emmet-2.0
	*

* https://docs.emmet.io/
* https://docs.emmet.io/cheat-sheet/

	script:src
	div



## Editor layout

Changes editor split layout from horizontal to vertical

VSC > View > Toggle Editor Group Layout

Alt+Shift+1 (PC)

Cmd+Option+1 (Mac)


## Formatting

selection: Ctrl-K, Ctrl-F


### Beautify

* https://code.visualstudio.com/updates/vMarch
* https://github.com/HookyQR/VSCodeBeautify
* https://medium.com/@bretcameron/the-2019-guide-to-beautifying-visual-studio-code-32470910fc5b
* https://stackoverflow.com/questions/29973357/how-do-you-format-code-in-visual-studio-code-vscode
* https://code.visualstudio.com/docs/getstarted/settings
	* see javascript.format.* and typescript.format.*). 


## GitHub integration

* https://code.visualstudio.com/docs/editor/versioncontrol
* http://www.notyourdadsit.com/blog/2018/4/3/cheatsheet-setup-github-on-visual-studio-code
* https://github.com/settings/keys
* https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account

> ~/.ssh/id_rsa.pub
> ssh-keygen -t rsa -b 4096 -C "Penguin Chromebook"
> cat ~/.ssh/id_rsa.pub
> git remote set-url origin git@github.com:charmor/charmor.github.io.git

C:\Users\tarmo\.ssh\github_rsa.pub

## IntelliSense

Ctrl-space
How to turn off quick suggestions?

* edit settings.json


## Keyboard shortcuts

* https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

Ones I like

* Go to Symbol in File: Ctrl+Shift+O -  group the symbols by kind by adding a colon, @:.
* Code folding: Ctrl+Shift+[ and Ctrl+Shift+]
* Intellisense: Ctrl+Space
* Rename Symbol: Select a symbol then type F2. Alternatively, you can use the context menu.


## Markdown

* https://githubengineering.com/a-formal-spec-for-github-markdown/

* Switch between views, press Ctrl+Shift+V in the editor.
* View the preview side-by-side (Ctrl+K V)




## Marketplace

ESLint ~ easier to use JSHInt online


## Preview Mode

single-click or select a file in the Explorer, show file in a preview mode - reuses an existing Tab.

Preview mode is indicated by italics in the Tab heading


## Search and replace in files

https://code.visualstudio.com/docs/editor/codebasics#_advanced-search-options

* * to match one or more characters in a path segment
* ? to match on one character in a path segment
* ** to match any number of path segments, including none
* {} to group conditions (for example {**/*.html,**/*.txt} matches all HTML and text files)
* [] to declare a range of characters to match (example.[0-9] to match on example.0, example.1, …)

 From the Explorer, you can right-click on a folder and select Find in Folder to search inside a folder only.

## Selection

Box Selection: ctrl-shift-alt-<arrow keys>
Add a cursor: press Ctrl+Alt+<arrow keys>
Create cursors on all occurrences of a string: Ctrl+Shift+L


## Settings


%APPDATA%\Code\User\settings.json

	{

		"editor.detectIndentation": false,
		"editor.insertSpaces": false,
		"editor.tabCompletion": "on"
		"editor.trimAutoWhitespace": true,
		"editor.renderWhitespace": "all",

		"files.autoSave": "afterDelay",
		"files.trimTrailingWhitespace": true,

		"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",

		"workbench.colorTheme": "Visual Studio Light",
		"git.enableSmartCommit": true,
		"git.confirmSync": false,
		"git.autofetch": true,
		"cSpell.userWords": [
			"foss"
		]
	}




## Snippets

* https://code.visualstudio.com/docs/editor/userdefinedsnippets
* https://medium.freecodecamp.org/the-most-powerful-tool-to-boost-your-coding-productivity-2dc80e0eff00
* https://snippet-generator.app

Tips

* Control space to view
* Tab to complete


## Sync settings

* https://github.com/shanalikhan/code-settings-Sync

