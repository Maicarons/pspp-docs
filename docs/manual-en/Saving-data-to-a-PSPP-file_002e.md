#### 5.1.5 Saving data to a PSPP file.

If you want to save your data, along with the variable definitions so that you or other PSPP users can use it later, you can do this with the `SAVE` command. 

The following syntax will save the existing data and variables to a file called my-new-file.sav. 
    
    
    PSPP> save outfile='my-new-file.sav'.
    

If my-new-file.sav already exists, then it will be overwritten. Otherwise it will be created.
