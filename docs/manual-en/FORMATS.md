### 11.10 FORMATS
    
    
    FORMATS var_list (fmt_spec) [var_list (fmt_spec)]….
    

`FORMATS` set both print and write formats for the specified variables to the specified format specification. See [Input and Output Formats](Input-and-Output-Formats.md). 

Specify a list of variables followed by a format specification in parentheses. The print and write formats of the specified variables will be changed. All of the variables listed together must have the same type and, for string variables, the same width. 

Additional lists of variables and formats may be included following the first one. 

`FORMATS` takes effect immediately. It is not affected by conditional and looping structures such as `DO IF` or `LOOP`.
