### 8.14 PRINT SPACE
    
    
    PRINT SPACE [OUTFILE=’file_name’] [ENCODING=’encoding’] [n_lines].
    

`PRINT SPACE` prints one or more blank lines to an output file. 

The `OUTFILE` subcommand is optional. It may be used to direct output to a file specified by file name as a string or file handle (see [File Handles](File-Handles.md)). If OUTFILE is not specified then output is directed to the listing file. 

The `ENCODING` subcommand may only be used if `OUTFILE` is also used. It specifies the character encoding of the file. See [INSERT](INSERT.md), for information on supported encodings. 

n_lines is also optional. If present, it is an expression (see [Expressions](Expressions.md)) specifying the number of blank lines to be printed. The expression must evaluate to a nonnegative value.
