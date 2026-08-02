#### 5.1.4 Reading data from a pre-prepared PSPP file

When working with other PSPP users, or users of other software which uses the PSPP data format, you may be given the data in a pre-prepared PSPP file. Such files contain not only the data, but the variable definitions, along with their formats, labels and other meta-data. Conventionally, these files (sometimes called “system” files) have the suffix .sav, but that is not mandatory. The following syntax loads a file called my-file.sav. 
    
    
    PSPP> get file='my-file.sav'.
    

You will encounter several instances of this in future examples.
