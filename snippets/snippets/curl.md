

https://curl.haxx.se/docs/manual.html
* Many examples


curl https://api.github.com/theo-armmour


## GitHub API

curl -H "Authorization: token ed7a5e3e458585dbe8c94ce39c322957404af138" https://api.github.com/user

curl -H "Authorization: token ed7a5e3e458585dbe8c94ce39c322957404af138" https://api.github.com/users/theo-armour -I

https://api.github.com/user?access_token=ed7a5e3e458585dbe8c94ce39c322957404af138


curl -H "Authorization: token ed7a5e3e458585dbe8c94ce39c322957404af138" https://api.github.com/users/jaanga

curl https://api.github.com/users/jaanga

## Simple auth
curl -u theo-armour https://api.github.com/users/jaanga

* requires you to enter pw
* not fun with two factor authentication



