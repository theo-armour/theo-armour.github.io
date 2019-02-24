

# Chromebook

 

### Links

Chromebook keyboard shortcuts
* https://support.google.com/chromebook/answer/183101


Tips
* https://www.computerworld.com/article/3237230/chromebooks/chromebook-tips-for-maximum-productivity.html
* https://chromeunboxed.com/tips-tricks/


More
* https://store.google.com/product/google_pixelbook

Linux
* https://www.xda-developers.com/chrome-os-linux-app-support-google-pixelbook/
* https://www.theverge.com/2017/11/16/16656420/google-pixelbook-chromebook-development-linux-crouton-how-to
* https://support.google.com/chromebook/answer/1086915 << stable/beta/dev channel



### Crouton

Then can use Beyond Compare

install help: $sh -e ~/Downloads/crouton

releases: $ sh -e ~/Downloads/crouton -r help
releases: $ sh -e ~/Downloads/crouton -r list
targets:  $ sh -e ~/Downloads/crouton -t help

targets of interest: core?? keyboard??

### Links

https://github.com/dnschneid/crouton/wiki/crouton-in-a-Chromium-OS-window-(xiwi)
https://github.com/dnschneid/crouton/wiki/Crouton-Command-Cheat-Sheet


### Install / Update Command

Start here: https://github.com/dnschneid/crouton

Get into Developer Mode
https://www.chromium.org/a/chromium.org/dev/chromium-os/developer-information-for-chrome-os-devices/chromebook-pixel-2015
>>  at the Recovery screen press Ctrl-D (there's no prompt - you have to know to do it).

sudo sh ~/Downloads/crouton  -t xfce

sudo sh ~/Downloads/crouton -t unity-desktop, touch, extension, xiwi

sudo sh ~/Downloads/crouton -u -t unity,unity-desktop,touch,extension,xiwi,chrome
Control-D on switch on


## Terminal

Control ~ Alt ~ T = cat
Paste: $control ~ shift ~ v <<!!


## Shell

Shell in shell: $ shell
Type 'shell' in the terminal and press Enter to enter Linux shell mode.
This command only works if Developer Mode is enabled.

### Start


$ shell
$ sudo enter-chroot startxfce4
$ sudo startunity <<

### Switch Between Environments

Ctrl+Alt+Back and Ctrl+Alt+Forward plus Ctrl+Alt+Refresh

Use the 'Full screen' and 'switch window' buttons

## Switching

* To switch back to Chrome OS on the fly simply hit Alt+Ctrl+Shift+Back.
* To flip to Ubuntu hit Alt+Ctrl+Shift+Forward.


### Close

Desktop: exit the chroot, just log out (using the “log out” option) of desktop,
Desktop “shut down” command > power the Chromebook down.


### Changing Things

edit-chroot

$ sudo apt-get update

$ sudo startxfce4 -n chrootname -X xiwi-tab

## Downloads

The folder “Downloads” in each environment contains the same content


### Unity

xenial unity 16.04


### Xiwi
Install the xiwi target into your chroot, either via update (crouton -u -t xiwi) or via initial install (crouton -t xiwi,xfce). I

$sudo sh ~/Downloads/crouton -u -t xiwi

### More

theo
burrage
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE4Mjc3MjExMSwxMTgyNzcyMTExLC0xOD
MxNjc0MDY5XX0=
-->