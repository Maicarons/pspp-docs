### 9.11 XSAVE
    
    
    XSAVE
            /OUTFILE=’file_name’
            /{UNCOMPRESSED,COMPRESSED,ZCOMPRESSED}
            /PERMISSIONS={WRITEABLE,READONLY}
            /DROP=var_list
            /KEEP=var_list
            /VERSION=version
            /RENAME=(src_names=target_names)…
            /NAMES
            /MAP
    

The `XSAVE` transformation writes the active dataset’s dictionary and data to a system file. It is similar to the `SAVE` procedure, with two differences: 

  * `XSAVE` is a transformation, not a procedure. It is executed when the data is read by a procedure or procedure-like command. 
  * `XSAVE` does not support the `UNSELECTED` subcommand. 

See [SAVE](SAVE.md), for more information.
