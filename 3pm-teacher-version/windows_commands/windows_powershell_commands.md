- Test if you have `$PROFILE`
  `Test-Path $PROFILE`
- Create a profile if you don't have one
  `New-Item -Path $PROFILE -ItemType File -Force`
- Open your profile if you need to edit
  `notepad $PROFILE`
- make edits then save and source your file in terminal
  `. $PROFILE`

- Go to your user folder
  `cd ~`

- list all folders and files in a directory
  `ls`

- create a cd alias from the `profile.example.txt`

- Create a directory
  `mkdir directory_name`
  example: `mkdir test1`

- Create a file
  `New-Item filename.txt`
  example:
  `cd test1`
  `New-Item testfile1.txt`

- Add Content to a file
  `Add-Content filename.txt "Content to add"`

- Read the contents of a file
  `Get-Content path\to\your\file.txt`

- Remove items from a directory
  `Remove-Item directory_name -Recurse -Force`

- Move items from one directory to another
  `Move-Item -Path "C:\source\file.txt" -Destination "C:\destination\file.txt"`

- Move a directory
  `Move-Item -Path "D:\Project" -Destination "C:\Users\John\Project"`

- Copy a single file
  `Copy-Item -Path "C:\test1\test.txt" -Destination "C:\Backup\test.txt"`

- Copy a folder from one place to another
`Copy-Item -Path "C:\Users\John\Work" -Destination "D:\Backup\Work" -Recurse`