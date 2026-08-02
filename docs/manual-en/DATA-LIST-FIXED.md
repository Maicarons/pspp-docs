#### 8.5.1 DATA LIST FIXED
    
    
    DATA LIST [FIXED]
            {TABLE,NOTABLE}
            [FILE=’file_name’ [ENCODING=’encoding’]]
            [RECORDS=record_count]
            [END=end_var]
            [SKIP=record_count]
            /[line_no] var_spec…
    
    where each var_spec takes one of the forms
            var_list start-end [type_spec]
            var_list (fortran_spec)
    

`DATA LIST FIXED` is used to read data files that have values at fixed positions on each line of single-line or multiline records. The keyword FIXED is optional. 

The `FILE` subcommand must be used if input is to be taken from an external file. It may be used to specify a file name as a string or a file handle (see [File Handles](File-Handles.md)). If the `FILE` subcommand is not used, then input is assumed to be specified within the command file using `BEGIN DATA`…`END DATA` (see [BEGIN DATA](BEGIN-DATA.md)). The `ENCODING` subcommand may only be used if the `FILE` subcommand is also used. It specifies the character encoding of the file. See [INSERT](INSERT.md), for information on supported encodings. 

The optional `RECORDS` subcommand, which takes a single integer as an argument, is used to specify the number of lines per record. If `RECORDS` is not specified, then the number of lines per record is calculated from the list of variable specifications later in `DATA LIST`. 

The `END` subcommand is only useful in conjunction with `INPUT PROGRAM`. See [INPUT PROGRAM](INPUT-PROGRAM.md), for details. 

The optional `SKIP` subcommand specifies a number of records to skip at the beginning of an input file. It can be used to skip over a row that contains variable names, for example. 

`DATA LIST` can optionally output a table describing how the data file is read. The `TABLE` subcommand enables this output, and `NOTABLE` disables it. The default is to output the table. 

The list of variables to be read from the data list must come last. Each line in the data record is introduced by a slash (‘/’). Optionally, a line number may follow the slash. Following, any number of variable specifications may be present. 

Each variable specification consists of a list of variable names followed by a description of their location on the input line. Sets of variables may be specified using the `DATA LIST` `TO` convention (see [Sets of Variables](Sets-of-Variables.md)). There are two ways to specify the location of the variable on the line: columnar style and FORTRAN style. 

In columnar style, the starting column and ending column for the field are specified after the variable name, separated by a dash (‘-’). For instance, the third through fifth columns on a line would be specified ‘3-5’. By default, variables are considered to be in ‘F’ format (see [Input and Output Formats](Input-and-Output-Formats.md)). (This default can be changed; see [SET](SET.md) for more information.) 

In columnar style, to use a variable format other than the default, specify the format type in parentheses after the column numbers. For instance, for alphanumeric ‘A’ format, use ‘(A)’. 

In addition, implied decimal places can be specified in parentheses after the column numbers. As an example, suppose that a data file has a field in which the characters ‘1234’ should be interpreted as having the value 12.34. Then this field has two implied decimal places, and the corresponding specification would be ‘(2)’. If a field that has implied decimal places contains a decimal point, then the implied decimal places are not applied. 

Changing the variable format and adding implied decimal places can be done together; for instance, ‘(N,5)’. 

When using columnar style, the input and output width of each variable is computed from the field width. The field width must be evenly divisible into the number of variables specified. 

FORTRAN style is an altogether different approach to specifying field locations. With this approach, a list of variable input format specifications, separated by commas, are placed after the variable names inside parentheses. Each format specifier advances as many characters into the input line as it uses. 

Implied decimal places also exist in FORTRAN style. A format specification with d decimal places also has d implied decimal places. 

In addition to the standard format specifiers (see [Input and Output Formats](Input-and-Output-Formats.md)), FORTRAN style defines some extensions: 

`X`
    

Advance the current column on this line by one character position. 

`T`x
    

Set the current column on this line to column x, with column numbers considered to begin with 1 at the left margin. 

`NEWREC`x
    

Skip forward x lines in the current record, resetting the active column to the left margin. 

Repeat count
    

Any format specifier may be preceded by a number. This causes the action of that format specifier to be repeated the specified number of times. 

(spec1, …, specN)
    

Group the given specifiers together. This is most useful when preceded by a repeat count. Groups may be nested arbitrarily. 

FORTRAN and columnar styles may be freely intermixed. Columnar style leaves the active column immediately after the ending column specified. Record motion using `NEWREC` in FORTRAN style also applies to later FORTRAN and columnar specifiers. 

| • DATA LIST FIXED Examples |  | Examples of DATA LIST FIXED. |
| --- | --- | --- |
