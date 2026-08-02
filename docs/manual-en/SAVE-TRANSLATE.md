### 9.8 SAVE TRANSLATE
    
    
    SAVE TRANSLATE
            /OUTFILE={’file_name’,file_handle}
            /TYPE={CSV,TAB}
            [/REPLACE]
            [/MISSING={IGNORE,RECODE}]
    
            [/DROP=var_list]
            [/KEEP=var_list]
            [/RENAME=(src_names=target_names)…]
            [/UNSELECTED={RETAIN,DELETE}]
            [/MAP]
    
            …additional subcommands depending on TYPE…
    

The `SAVE TRANSLATE` command is used to save data into various formats understood by other applications. 

The `OUTFILE` and `TYPE` subcommands are mandatory. `OUTFILE` specifies the file to be written, as a string file name or a file handle (see [File Handles](File-Handles.md)). `TYPE` determines the type of the file or source to read. It must be one of the following: 

CSV
    

Comma-separated value format, 

TAB
    

Tab-delimited format. 

By default, `SAVE TRANSLATE` does not overwrite an existing file. Use `REPLACE` to force an existing file to be overwritten. 

With MISSING=IGNORE, the default, `SAVE TRANSLATE` treats user-missing values as if they were not missing. Specify MISSING=RECODE to output numeric user-missing values like system-missing values and string user-missing values as all spaces. 

By default, all the variables in the active dataset dictionary are saved to the system file, but `DROP` or `KEEP` can select a subset of variable to save. The `RENAME` subcommand can also be used to change the names under which variables are saved; because they are used only in the output, these names do not have to conform to the usual PSPP variable naming rules. `UNSELECTED` determines whether cases filtered out by the `FILTER` command are written to the output file. These subcommands have the same syntax and meaning as on the `SAVE` command (see [SAVE](SAVE.md)). 

Each supported file type has additional subcommands, explained in separate sections below. 

`SAVE TRANSLATE` causes the data to be read. It is a procedure. 

| • SAVE TRANSLATE /TYPE=CSV and TYPE=TAB |  |  |
| --- | --- | --- |
