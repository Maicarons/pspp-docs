### 11.2 NUMERIC

`NUMERIC` explicitly declares new numeric variables, optionally setting their output formats. 
    
    
    NUMERIC var_list [(fmt_spec)] [/var_list [(fmt_spec)]]…
    

Specify the names of the new numeric variables as var_list. If you wish to set the variables’ output formats, follow their names by an output format specification in parentheses (see [Input and Output Formats](Input-and-Output-Formats.md)); otherwise, the default is F8.2. 

Variables created with `NUMERIC` are initialized to the system-missing value.
