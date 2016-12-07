Chromebook
--------------------------------------------------------------------------------

Add Crouton

Then can use Beyond Compare



install help: $sh -e ~/Downloads/crouton

releases: $ sh -e ~/Downloads/crouton -r help
releases: $ sh -e ~/Downloads/crouton -r list
targets: $ sh -e ~/Downloads/crouton -t help

### Install / Update Command 

sudo sh ~/Downloads/crouton  -t xfce
sudo sh ~/Downloads/crouton -t unity-desktop, touch, extension, xiwi

sudo sh ~/Downloads/crouton -u -r trusty -t unity,unity-desktop,touch,extension,xiwi,chrome


Control-D on switch on


## Terminal 

Control ~ Alt ~ T = cat
Paste: $control ~ shift ~ v


## Shell

Shell in shell: $ shell
Type 'shell' in the terminal and press Enter to enter Linux shell mode.
This command only works if Developer Mode is enabled.



### Start


$ shell
$sudo enter-chroot startxfce4
$sudo startunity


### Switch Between Environments

Ctrl+Alt+Back and Ctrl+Alt+Forward plus Ctrl+Alt+Refresh

## Switching 

* To switch back to Chrome OS on the fly simply hit Alt+Ctrl+Shift+Back. 
* To flip to Ubuntu hit Alt+Ctrl+Shift+Forward.


### Close

Desktop: exit the chroot, just log out (using the “log out” option) of desktop, 
Desktop “shut down” command > power the Chromebook down.


### Changing Things

edit-chroot

sudo apt-get update

## Downloads

The folder “Downloads” in each environment contains the same content


### Xiwi
Install the xiwi target into your chroot, either via update (crouton -u -t xiwi) or via initial install (crouton -t xiwi,xfce). I

$sudo sh ~/Downloads/crouton -u -t xiwi
