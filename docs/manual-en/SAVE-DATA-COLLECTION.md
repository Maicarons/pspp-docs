### 9.7 SAVE DATA COLLECTION
    
    
    SAVE DATA COLLECTION
            /OUTFILE={’file_name’,file_handle}
            /METADATA={’file_name’,file_handle}
            /{UNCOMPRESSED,COMPRESSED,ZCOMPRESSED}
            /PERMISSIONS={WRITEABLE,READONLY}
            /DROP=var_list
            /KEEP=var_list
            /VERSION=version
            /RENAME=(src_names=target_names)…
            /NAMES
            /MAP
    

Like `SAVE`, `SAVE DATA COLLECTION` writes the dictionary and data in the active dataset to a system file. In addition, it writes metadata to an additional XML metadata file. 

OUTFILE is required. Specify the system file to be written as a string file name or a file handle (see [File Handles](File-Handles.md)). 

METADATA is also required. Specify the metadata file to be written as a string file name or a file handle. Metadata files customarily use a .mdd extension. 

The current implementation of this command is experimental. It only outputs an approximation of the metadata file format. Please report bugs. 

Other subcommands are optional. They have the same meanings as in the `SAVE` command. 

`SAVE DATA COLLECTION` causes the data to be read. It is a procedure.
