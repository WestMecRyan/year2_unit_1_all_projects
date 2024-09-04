### Exercise Set: File and Folder Management

#### Exercise 1: Directory and File Creation

1. **Create Multiple Directories**

   - Create the following directories: `test1`, `test2`, and `test3`.
     ```powershell
     mkdir test1
     mkdir test2
     mkdir test3
     ```

2. **Create Subdirectories in Each Directory**

   - Inside `test1`, create subdirectories `sub1` and `sub2`.
   - Inside `test2`, create subdirectories `sub3` and `sub4`.
     ```powershell
     mkdir test1\sub1
     mkdir test1\sub2
     mkdir test2\sub3
     mkdir test2\sub4
     ```

3. **Navigate into a Subdirectory**

   - Change into the `sub1` directory inside `test1`.
     ```powershell
     cd test1\sub1
     ```

4. **Create Files in Each Subdirectory**
   - Create a file named `file1.txt` in `test1\sub1`, `file2.txt` in `test1\sub2`, and `file3.txt` in `test2\sub3`.
     ```powershell
     New-Item file1.txt
     New-Item file2.txt
     New-Item file3.txt
     ```

#### Exercise 2: File Content Management

1. **Add Content to Each File**

   - Add the text "Content for file1" to `file1.txt` in `test1\sub1`.
   - Add the text "Content for file2" to `file2.txt` in `test1\sub2`.
   - Add the text "Content for file3" to `file3.txt` in `test2\sub3`.
     ```powershell
     Add-Content file1.txt "Content for file1"
     Add-Content file2.txt "Content for file2"
     Add-Content file3.txt "Content for file3"
     ```

2. **Read the Content of Each File**
   - Use `Get-Content` to display the content of `file1.txt`, `file2.txt`, and `file3.txt`.
     ```powershell
     Get-Content test1\sub1\file1.txt
     Get-Content test1\sub2\file2.txt
     Get-Content test2\sub3\file3.txt
     ```

#### Exercise 3: Directory Navigation and File Operations

1. **Navigate Back to the Parent Directory**

   - Change back to the parent directory from `test1\sub1`.
     ```powershell
     cd ..\..
     ```

2. **Change Directory to `test2\sub3`**

   - Navigate directly to `test2\sub3`.
     ```powershell
     cd test2\sub3
     ```

3. **Create Additional Files in `test2\sub3`**

   - Create a file named `file4.txt` and add the text "Content for file4".
     ```powershell
     New-Item file4.txt
     Add-Content file4.txt "Content for file4"
     ```

4. **Read All Files in `test2\sub3`**
   - Display the contents of `file3.txt` and `file4.txt` in `test2\sub3`.
     ```powershell
     Get-Content file3.txt
     Get-Content file4.txt
     ```

#### Exercise 4: Cleanup Operations

1. **Remove a Single File**

   - Delete `file4.txt` from `test2\sub3`.
     ```powershell
     Remove-Item file4.txt
     ```

2. **Remove a Directory and Its Contents**

   - Delete the `test3` directory and its contents.
     ```powershell
     Remove-Item test3 -Recurse -Force
     ```

3. **Remove Multiple Files**

   - Remove `file1.txt` from `test1\sub1` and `file2.txt` from `test1\sub2`.
     ```powershell
     Remove-Item test1\sub1\file1.txt
     Remove-Item test1\sub2\file2.txt
     ```

4. **Remove the `test1` Directory and Its Remaining Contents**
   - Finally, delete the `test1` directory and its remaining contents.
     ```powershell
     Remove-Item test1 -Recurse -Force
     ```


