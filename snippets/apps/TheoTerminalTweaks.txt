##################################################################################
##.LifehackerTerminalTweaks - Bash configuration file                           ##
##Created: June 28, 2007 | 2008-02-09                                           ##
##License: GPL                                                                  ##
##Credits: Dave Crouse - http://www.novell.com/coolsolutions/tools/17142.html   ## 
##Contact: theo@evereverland.net                                                ##
##################################################################################
# do first
# cd ~
# cp ~/.bashrc ~/.bashrc.bak
# add to .bashrc
# if [ -f ~/.bashrc ]; then
# source ~/.LifehackerTerminalTweaks
# fi

#-----------------------------------------
#------ ALIAS SHORTCUTS START-------------

# install a package and automatically respond yes to confirmation prompt
alias ins="sudo aptitude install -y"

# remove a package and its configuration files
alias remp="sudo aptitude purge"

# search for a package
alias search="apt-cache search"

# shows all files in a directory including hidden files
alias ls="ls -al --color"

# clear the screen
alias c="clear"

# show size of disc in MB/GB instead of "blocks"
alias hdd="df -h"

# navigate up one directory
alias up="cd .."

# navigate to the home directory no matter where you are
alias home="cd ~"

# navigate to the / file system
alias disk="cd /"

# empty trash
alias trash="rm -fr ~/.Trash"

#-----------------------------------------
#------HISTORY START----------------------

# Expand the history size
HISTFILESIZE=100000000
HISTSIZE=100000

# If you would like to prevent bash from saving any history (commented out by default).
# HISTFILESIZE=0
# HISTSIZE=0

#-----------------------------------------
#------COMPLETTION------------------------

# make sure bash completion is turned on
if [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
fi

#------------------------------------------
#------COMPRESSED VIEW START---------------

# display compressed folder view preceded by time
PS1="[\t \u \W]\\$ "


#------------------------------------------
#------WELCOME MESSAGE---------------------
# customize this first message with a message of your choice.
# this will display the username, date, time, a calendar, the amount of users, and the up time.
clear
echo -e "Theo Terminal Tweaks"
echo -e ""
echo -ne "Today is "; date
# echo -e ""; cal ;
# echo -ne "Up time:";uptime | awk /'up/
{print $3,$4}'
echo "";

#------------------------------------------
#------ENCRYPTION/DECRYPTION--------------
# requires gpg
# the proper way to use these functions is simply to enter "encrypt filename" or "decrypt filename"
encrypt ()
{
gpg -ac --no-options "$1"
}

decrypt ()
{
gpg --no-options "$1"
}
