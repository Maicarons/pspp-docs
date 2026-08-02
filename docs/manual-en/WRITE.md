### 8.16 WRITE
    
    
    WRITE
            OUTFILE=’file_name’
            RECORDS=n_lines
            {NOTABLE,TABLE}
            /[line_no] arg…
    
    arg takes one of the following forms:
            ’string’ [start-end]
            var_list start-end [type_spec]
            var_list (fortran_spec)
            var_list *
    

`WRITE` writes text or binary data to an output file. 

See [PRINT](PRINT.md), for more information on syntax and usage. `PRINT` and `WRITE` differ in only a few ways: 

  * `WRITE` uses write formats by default, whereas `PRINT` uses print formats. 
  * `PRINT` inserts a space between variables unless a format is explicitly specified, but `WRITE` never inserts space between variables in output. 
  * `PRINT` inserts a space at the beginning of each line that it writes to an output file (and `PRINT EJECT` inserts ‘1’ at the beginning of each line that should begin a new page), but `WRITE` does not. 
  * `PRINT` outputs the system-missing value according to its specified output format, whereas `WRITE` outputs the system-missing value as a field filled with spaces. Binary formats are an exception.
