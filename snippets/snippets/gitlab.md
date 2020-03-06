# GitLab

## Snippets

* Are like GitHub Gists
* Not things you insert in files


## Page repos

* https://docs.gitlab.com/ee/user/project/pages/


## GitLab API

* https://docs.gitlab.com/ee/api/README.html
	* new project > use template > html

	new project >
	new file > add index.html / license
	new file > choose template type > .gitlab-ci.yml
	apply a gitlab-ci.yml template > HTML

	> CI/CP > pipelines > run


### Not

* https://gitlab.com/theo-armour/snippets
* https://gitlab.com/projects/theo-armour/repository
* https://gitlab.com/api/v4/projects/import
* https://gitlab.com/api/v4/users/theo-armour/pages

### OK

* https://gitlab.com/api/v4/user/
* https://gitlab.com/api/v4/users/theo-armour/projects
	* "readme_url":"https://gitlab.com/theo-armour/theo-armour.gitlab.io/blob/master/README.md
	* "web_url":"https://gitlab.com/theo-armour/theo-armour.gitlab.io"
	* "avatar_url":"https://assets.gitlab-static.net/uploads/-/system/project/avatar/13175347/theo-logo.png"

Projects

* https://gitlab.com/api/v4/projects/13175347/
* https://gitlab.com/api/v4/projects/13175347/events
* https://gitlab.com/api/v4/projects/13175347/issues
* https://gitlab.com/api/v4/projects/13175347/issues_statistics
* https://gitlab.com/api/v4/projects/13175347/labels
* https://gitlab.com/api/v4/projects/13175347/members
* https://gitlab.com/api/v4/projects/13175347/merge_requests
* https://gitlab.com/api/v4/projects/13175347/repository/branches
* https://gitlab.com/api/v4/projects/13175347/repository/tree
* https://gitlab.com/api/v4/projects/13175347/repository/files/README.md?ref=master
* https://gitlab.com/api/v4/projects/13083/repository/files/app%2Fmodels%2Fkey.rb/raw?ref=master
* https://gitlab.com/api/v4/projects/13175347/pages/domains >> []

Edit files

* https://docs.gitlab.com/ee/api/repository_files.html

### Regular URLs

* https://gitlab.com/theo-armour/theo-armour.gitlab.io
* https://theo-armour.gitlab.io/
* https://gitlab.com/pages
* https://pages.gitlab.io/emscripten/


### evereverland.gitlab.io


image: alpine:latest

pages:
  stage: deploy
  script:
  - echo 'Nothing to do...'
  artifacts:
    paths:
    - public
  only:
  - master


### puhya bhai

pages:
  stage: deploy
  script:
    - mkdir .public
    - cp -r * .public
    - mv .public public
  artifacts:
    paths:
      - public
  only:
    - master
