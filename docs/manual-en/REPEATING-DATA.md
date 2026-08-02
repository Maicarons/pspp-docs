### 8.16 REPEATING DATA
    
    
    REPEATING DATA
            /STARTS=start-end
            /OCCURS=n_occurs
            /FILE=’file_name’
            /LENGTH=length
            /CONTINUED[=cont_start-cont_end]
            /ID=id_start-id_end=id_var
            /{TABLE,NOTABLE}
            /DATA=var_spec…
    
    where each var_spec takes one of the forms
            var_list start-end [type_spec]
            var_list (fortran_spec)
    

`REPEATING DATA` parses groups of data repeating in a uniform format, possibly with several groups on a single line. Each group of data corresponds with one case. `REPEATING DATA` may only be used within an `INPUT PROGRAM` structure (see [INPUT PROGRAM](INPUT-PROGRAM.md)). When used with `DATA LIST`, it can be used to parse groups of cases that share a subset of variables but differ in their other data. 

The `STARTS` subcommand is required. Specify a range of columns, using literal numbers or numeric variable names. This range specifies the columns on the first line that are used to contain groups of data. The ending column is optional. If it is not specified, then the record width of the input file is used. For the inline file (see [BEGIN DATA](BEGIN-DATA.md)) this is 80 columns; for a file with fixed record widths it is the record width; for other files it is 1024 characters by default. 

The `OCCURS` subcommand is required. It must be a number or the name of a numeric variable. Its value is the number of groups present in the current record. 

The `DATA` subcommand is required. It must be the last subcommand specified. It is used to specify the data present within each repeating group. Column numbers are specified relative to the beginning of a group at column 1. Data is specified in the same way as with `DATA LIST FIXED` (see [DATA LIST FIXED](DATA-LIST-FIXED.md)). 

All other subcommands are optional. 

FILE specifies the file to read, either a file name as a string or a file handle (see [File Handles](File-Handles.md)). If FILE is not present then the default is the last file handle used on `DATA LIST` (lexically, not in terms of flow of control). 

By default `REPEATING DATA` will output a table describing how it will parse the input data. Specifying `NOTABLE` will disable this behavior; specifying TABLE will explicitly enable it. 

The `LENGTH` subcommand specifies the length in characters of each group. If it is not present then length is inferred from the `DATA` subcommand. LENGTH can be a number or a variable name. 

Normally all the data groups are expected to be present on a single line. Use the `CONTINUED` command to indicate that data can be continued onto additional lines. If data on continuation lines starts at the left margin and continues through the entire field width, no column specifications are necessary on `CONTINUED`. Otherwise, specify the possible range of columns in the same way as on STARTS. 

When data groups are continued from line to line, it is easy for cases to get out of sync through careless hand editing. The `ID` subcommand allows a case identifier to be present on each line of repeating data groups. `REPEATING DATA` will check for the same identifier on each line and report mismatches. Specify the range of columns that the identifier will occupy, followed by an equals sign (‘=’) and the identifier variable name. The variable must already have been declared with `NUMERIC` or another command. 

`REPEATING DATA` should be the last command given within an `INPUT PROGRAM`. It should not be enclosed within a `LOOP` structure (see [LOOP](LOOP.md)). Use `DATA LIST` before, not after, `REPEATING DATA`.
