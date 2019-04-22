

# https://code.visualstudio.com/

* https://code.visualstudio.com/docs



## Opening VS Code

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

But what is the benefit over usinf npm http-server?



## Code Navigation

https://code.visualstudio.com/docs/editor/editingevolved

go to the definition: F12.

Go to Symbol: Ctrl+Shift+O
* Type : symbols will be grouped by category

Matching bracket: Ctrl+Shift+\

Rename symbol: F2


## Emmet < wow!

* https://code.visualstudio.com/docs/editor/emmet
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

## IntelliSense

Ctrl-space


## Markdown

* https://githubengineering.com/a-formal-spec-for-github-markdown/

To switch between views, press Ctrl+Shift+V in the editor. You can view the preview side-by-side (Ctrl+K V)


* Can drag and drop from Sidebar to browser
* F1 for help

How to turn off quick suggestions?
* edit settings.json

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

https://code.visualstudio.com/docs/editor/userdefinedsnippets

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

* Control space to view
* tab to complete

## Sync settings

* https://github.com/shanalikhan/code-settings-sync