# VS Code

## To do

2020-05-23

* styelint has online demo that seems nice - but in use may have learning curve issues
* https://stylelint.io/demo
* This whole linting and beautifying thing is a big issue. Much bigger than I thought.

Some thoughts

* Start with simple: CSS
* First explore VS Code defaults
* perhaps let Glitch do it
    * Glitch both formats and fixes CSS
    * Uses spaces not tabs - but only two - so maybe I can get used to this

To do

Redefine Alt Home and Alt End to go home and end
2020-05-22

Using https://github.com/HookyQR/VSCodeBeautify

- styelint looks interesting

- Try prettier

  - Works on css, js  
  - Reset settings.json
  - Get rid of all typescript

- Good workflow on Chromebook * 2019-04-29: Looking good

- <https://github.com/shanalikhan/code-settings-sync>

- Try new line only setting no cr

## Tips

- settings.json

- Keyboard shortcuts: Ctrl+K, Ctrl+s

- F1 for help

- Can drag and drop from Sidebar to browser

## About

- <https://code.visualstudio.com/>
- <https://en.wikipedia.org/wiki/Visual_Studio_Code>
- <https://twitter.com/hashtag/vscode?lang=en>
- <https://code.visualstudio.com/docs>
- <https://stackoverflow.com/questions/tagged/visual-studio-code>

## Included but not 'supported'

- Beautify
- TypeScript

## Articles

### Extensions

- <https://github.com/viatsko/awesome-vscode?>

### Tips

- <https://github.com/viatsko/awesome-vscode?WT.mc_id=vscode-smashing-buhollan>

### Configuration

- <https://code.visualstudio.com/docs/getstarted/tips-and-tricks>
- <https://hackernoon.com/how-i-configure-vscode-for-everything-7df65a316a52>
- <https://www.granneman.com/webdev/editors/visual-studio-code/setting-configuring>
- <https://dev.to/thegeoffstevens/vs-code-settings-you-should-customize-5e75>
- <https://vscodecandothat.com/>
- <https://www.smashingmagazine.com/2018/01/visual-studio-code/> * Visual Studio Code Can Do That?

### Chromebook linux

Access Gdrive files from Chromebook Linux

- <https://support.google.com/pixelbook/thread/1087442?msgid=17296031>

### Opening VS Code

In terminal

```
start vscode://file/d:/Google%20Drive/Theo/vscode-gdrive/AutoHotkey.ahk
```

In browser

```
vscode://file/d:/Google%20Drive/Theo/vscode-gdrive/AutoHotkey.ahk
```

## Chrome debug

- <https://code.visualstudio.com/docs/editor/debugging>
- <https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome>

  ```
  {
              "type": "chrome",
              "request": "launch",
              "name": "Launch Chrome app9",
              "file": "${workspaceFolder}/cookbook-html/chrome-debug/threejs-basic.html"
          }
  ```

But what is the benefit over using npm http-server?

## Code Navigation

<https://code.visualstudio.com/docs/editor/editingevolved>

go to the definition: F12.

Go to Symbol: Ctrl+Shift+O

- Type : symbols will be grouped by category

Matching bracket: Ctrl+Shift+\

Rename symbol: F2

## Emmet < wow!

- <https://code.visualstudio.com/docs/editor/emmet>
- <https://code.visualstudio.com/blogs/2017/08/07/emmet-2.0>
- <https://docs.emmet.io/>
- <https://docs.emmet.io/cheat-sheet/>

  ```
  script:src
      div
  ```

## Editor layout

Changes editor split layout from horizontal to vertical

VSC > View > Toggle Editor Group Layout

Alt+Shift+1 (PC)

Cmd+Option+1 (Mac)

## Formatting

selection: Ctrl-K, Ctrl-F Set default format tool with "Format document with..." in context menu

### Beautify

- <https://code.visualstudio.com/updates/vMarch>
- <https://github.com/HookyQR/VSCodeBeautify>
- <https://medium.com/@bretcameron/the-2019-guide-to-beautifying-visual-studio-code-32470910fc5b>
- <https://stackoverflow.com/questions/29973357/how-do-you-format-code-in-visual-studio-code-vscode>
- <https://code.visualstudio.com/docs/getstarted/settings> _see javascript.format._ and typescript.format.*).

### Prettier

- <https://prettier.io/docs/en/options.html>
- limited selection of options

## GitHub integration

- <https://code.visualstudio.com/docs/editor/versioncontrol>
- <http://www.notyourdadsit.com/blog/2018/4/3/cheatsheet-setup-github-on-visual-studio-code>
- <https://github.com/settings/keys>
- <https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account>

> ~/.ssh/id_rsa.pub ssh-keygen -t rsa -b 4096 -C "Penguin Chromebook" cat ~/.ssh/id_rsa.pub git remote set-url origin git@github.com:charmor/charmor.github.io.git

> ~/.ssh/id_rsa.pub ssh-keygen -t rsa -b 4096 -C "Penguin Chromebook" cat ~/.ssh/id_rsa.pub git remote set-url origin git@github.com:theo-armour/qdata.git

C:\Users\tarmo.ssh\github_rsa.pub

## IntelliSense

Ctrl-space How to turn off quick suggestions?

- edit settings.json

## Keyboard shortcuts

- <https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf>

Ones I like

- Go to Symbol in File: Ctrl+Shift+O - group the symbols by kind by adding a colon, @:.
- Code folding: Ctrl+Shift+[ and Ctrl+Shift+]
- Intellisense: Ctrl+Space
- Rename Symbol: Select a symbol then type F2\. Alternatively, you can use the context menu.

## Markdown

- <https://githubengineering.com/a-formal-spec-for-github-markdown/>

- Switch between views, press Ctrl+Shift+V in the editor.

- View the preview side-by-side (Ctrl+K V)

## Marketplace

ESLint ~ easier to use JSHInt online


## Quick Open Control-P

Clear Recently Opened" also clears editor quick open history

* https://github.com/microsoft/vscode/issues/35935

## Preview Mode

single-click or select a file in the Explorer, show file in a preview mode - reuses an existing Tab.

Preview mode is indicated by italics in the Tab heading

## Search and replace in files

- HTML mirror cursor#

<https://code.visualstudio.com/docs/editor/codebasics#_advanced-search-options>

- to match one or more characters in a path segment
- ? to match on one character in a path segment
- ** to match any number of path segments, including none
- {} to group conditions (for example {**/*.html,**/*.txt} matches all HTML and text files)
- [] to declare a range of characters to match (example.[0-9] to match on example.0, example.1, ...)

From the Explorer, you can right-click on a folder and select Find in Folder to search inside a folder only.

## Selection

Box Selection: ctrl-shift-alt-

<arrow keys="">
Add a cursor: press Ctrl+Alt+<arrow keys="">
Create cursors on all occurrences of a string: Ctrl+Shift+L</arrow></arrow>

## Settings

* User: user\%APPDATA%\Roaming\Code\User\settings.json
* Workspace: in workspace root
* Folder:

theo

fodd


```
{


    "cSpell.userWords": [
        "foss",
        "Chromebook",
        "Evereverland",
        "Theo's",
        "foss",
        "polylines",
        "raycaster",
        "scrollbar",
        "spacebar",
        "teodoro",
        "theo",
        "wireframe"
    ],

	"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.detectIndentation": false,
    "editor.insertSpaces": false,
    "editor.tabCompletion": "on"
    "editor.trimAutoWhitespace": true,
    "editor.renderControlCharacters": true,
    "editor.renderWhitespace": "all",

"eslint.format.enable": true,

    "explorer.confirmDragAndDrop": false,
	  "explorer.openEditors.visible": 10,

    "files.autoSave": "afterDelay",
    "files.trimTrailingWhitespace": true,




    "git.enableSmartCommit": true,
    "git.confirmSync": false,
    "git.autofetch": true,

"sync.forceUpload": true,

    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",

        "workbench.colorTheme": "Visual Studio Light"
}
```

## Snippets

- <https://code.visualstudio.com/docs/editor/userdefinedsnippets>
- <https://medium.freecodecamp.org/the-most-powerful-tool-to-boost-your-coding-productivity-2dc80e0eff00>

- <https://snippet-generator.app>

Tips

- Control space to view
- Tab to complete

## Sync settings

- <https://github.com/shanalikhan/code-settings-Sync>
