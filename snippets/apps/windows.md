

### God Mode
http://www.howtogeek.com/howto/8711/stupid-geek-tricks-enable-the-secret-how-to-geek-mode-in-windows/

## Access Denied
http://windows.microsoft.com/en-US/windows-vista/Troubleshoot-access-denied-when-opening-files-or-folders 
use lock hunter...


## Lessons Learned
Use Ninite.com to install Chrome, Firefox DropBox, Evernote, Google Drive etc

Don't forget DropBox takes forever. 
* Sync only a few folders at a time
* Start with just one or two folders

Create a recovery drive in a USB drive
* Needs 8GB



## windows find

https://technet.microsoft.com/en-us/library/cc732459.aspx


findstr /p /s /i "word word"  *.html


### Start Menus
C:\ProgramData\Microsoft\Windows\Start Menu\Programs

look into
bitLocker
homeGroup

## Startup

C:\Users\tarmo\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup


## Speed Keys
Win + E = My Computer
Win + F = Search
Win + M = minimize windows
Win + R = Run dialog
Shift + Del = Bypass Recycle
Control + Shift + Escape = Windows Task Manager

## Windows Shutdown
C:\WINDOWS\system32\shutdown.exe -i -r -f -t15

C:\WINDOWS\system32\shutdown.exe /s -/t 60 << the one to use.

http://support.microsoft.com/kb/317371  << win 2000
-r restart not shutdown
-f force running apps to close
-i gui must be first
-t time in seconds

-s shutdown
command window shutdown /?
Open a Command Prompt From the Desktop Right-Click Menu
Just hold down the Shift key and right-click on the desktop…
Command line stuff
ipconfig
dxdiag


## Symlinks

mklink ~ symlinks
http://www.howtogeek.com/howto/windows-vista/using-symlinks-in-windows-vista/ 


> mklink /D C:\TestFolder C:\Users\Geek\TestFolder
// mklink /D C:\Dropbox\Public\code-cookbook\three.js C:\Dropbox\2012-reference\git-repos\three.js

mklink /D C:\Dropbox\Public\code-cookbook\three.js C:\Dropbox\Public\git-repos\three.js

// mklink /D  c:\Dropbox\xampp\htdocs\pub c:\Dropbox\public\
mklink /D C:\Dropbox\apps-portable\PortableApps\xampp\htdocs\pub c:\Dropbox\public\

mklink /D c:\Dropbox\apps-portable\ d:\apps-portable\ 


mklink /D c:\

How to get rid of log on screen at boot up?
http://www.sevenforums.com/tutorials/377-log-automatically-startup.html
run netplwiz

http://archive.atomicmpc.com.au/forums.asp?s=2&c=8&t=17415

Go to Control Panel, and User Accounts. Click 'Change the way users log on or off', then untick 'Use the welcome screen.'

Goto start then run and type control userpasswords2
Untick the users must enter password & choose which user always logs on.

## background image
http://www.sevenforums.com/tutorials/67200-remove-background-images-where-available.html

## windows run Send To menu
just type in run menu or the location bar: shell:sendto
or paste %APPDATA%\Microsoft\Windows\SendTo into address bar

## windows xp Set My Documents Folder
Change My Documents: right-click My Documents icon > Properties

Regedit

windows keyboard shortcuts
http://support.microsoft.com/kb/301583

## defaults
Windows normal screen dark blue is RGB 58 110 165
