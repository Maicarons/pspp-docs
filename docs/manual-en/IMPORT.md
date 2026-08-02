### 9.5 IMPORT
    
    
    IMPORT
            /FILE=’file_name’
            /TYPE={COMM,TAPE}
            /DROP=var_list
            /KEEP=var_list
            /RENAME=(src_names=target_names)…
    

The `IMPORT` transformation clears the active dataset dictionary and data and replaces them with a dictionary and data from a system file or portable file. 

The `FILE` subcommand, which is the only required subcommand, specifies the portable file to be read as a file name string or a file handle (see [File Handles](File-Handles.md)). 

The `TYPE` subcommand is currently not used. 

`DROP`, `KEEP`, and `RENAME` follow the syntax used by `GET` (see [GET](GET.md)). 

`IMPORT` does not cause the data to be read; only the dictionary. The data is read later, when a procedure is executed. 

Use of `IMPORT` to read a system file is a PSPP extension.
