# Using git for commits and viewing past commits

Make sure to have an alias for pretty logs in your .gitconfig file in your C:\your.user\ folder

// file .gitconfig
-------------
[alias]
       plog = "!git log --oneline --graph --all"
-------------

- make a project folder
- run `git init`
- run `git branch -m master main`
- create a file in the folder called file1.txt
- run `git add file1.txt`