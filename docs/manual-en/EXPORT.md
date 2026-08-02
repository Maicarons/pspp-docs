### 9.2 EXPORT
    
    
    EXPORT
            /OUTFILE=’file_name’
            /UNSELECTED={RETAIN,DELETE}
            /DIGITS=n
            /DROP=var_list
            /KEEP=var_list
            /RENAME=(src_names=target_names)…
            /TYPE={COMM,TAPE}
            /MAP
    

The `EXPORT` procedure writes the active dataset’s dictionary and data to a specified portable file. 

By default, cases excluded with FILTER are written to the file. These can be excluded by specifying DELETE on the `UNSELECTED` subcommand. Specifying RETAIN makes the default explicit. 

Portable files express real numbers in base 30. Integers are always expressed to the maximum precision needed to make them exact. Non-integers are, by default, expressed to the machine’s maximum natural precision (approximately 15 decimal digits on many machines). If many numbers require this many digits, the portable file may significantly increase in size. As an alternative, the `DIGITS` subcommand may be used to specify the number of decimal digits of precision to write. `DIGITS` applies only to non-integers. 

The `OUTFILE` subcommand, which is the only required subcommand, specifies the portable file to be written as a file name string or a file handle (see [File Handles](File-Handles.md)). 

`DROP`, `KEEP`, and `RENAME` follow the same format as the `SAVE` procedure (see [SAVE](SAVE.md)). 

The `TYPE` subcommand specifies the character set for use in the portable file. Its value is currently not used. 

The `MAP` subcommand is currently ignored. 

`EXPORT` is a procedure. It causes the active dataset to be read.
