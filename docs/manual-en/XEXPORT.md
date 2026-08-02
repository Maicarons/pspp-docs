### 9.10 XEXPORT
    
    
    XEXPORT
            /OUTFILE=’file_name’
            /DIGITS=n
            /DROP=var_list
            /KEEP=var_list
            /RENAME=(src_names=target_names)…
            /TYPE={COMM,TAPE}
            /MAP
    

The `XEXPORT` transformation writes the active dataset dictionary and data to a specified portable file. 

This transformation is a PSPP extension. 

It is similar to the `EXPORT` procedure, with two differences: 

  * `XEXPORT` is a transformation, not a procedure. It is executed when the data is read by a procedure or procedure-like command. 
  * `XEXPORT` does not support the `UNSELECTED` subcommand. 

See [EXPORT](EXPORT.md), for more information.
