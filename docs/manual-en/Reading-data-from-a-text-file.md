#### 5.1.3 Reading data from a text file

The previous example showed how to define a set of variables and to manually enter the data for those variables. Manual entering of data is tedious work, and often a file containing the data will be have been previously prepared. Let us assume that you have a file called mydata.dat containing the ascii encoded data: 
    
    
    Ahmed          188.00
    Bertram        167.00
    Catherine      134.23
    David          109.10
                  .
                  .
                  .
    Zachariah      113.02
    

You can can tell the `DATA LIST` command to read the data directly from this file instead of by manual entry, with a command like: 
    
    
    PSPP> data list file='mydata.dat' list /forename (A12) height.
    

Notice however, that it is still necessary to specify the names of the variables and their formats, since this information is not contained in the file. It is also possible to specify the file’s character encoding and other parameters. For full details refer to see [DATA LIST](DATA-LIST.md).
