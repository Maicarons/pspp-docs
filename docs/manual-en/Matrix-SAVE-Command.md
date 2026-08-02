#### 16.4.10 The `SAVE` Command
    
    
    SAVE _expression_
         [/OUTFILE={_file_ _|_ *}]
         [/VARIABLES=_variable_ …]
         [/NAMES=_expression_]
         [/STRINGS=_variable_ …].
    

The `SAVE` matrix command evaluates _expression_ and writes the resulting matrix to an SPSS system file. In the system file, each matrix row becomes a case and each column becomes a variable. 

Specify the name or handle of the SPSS system file on the `OUTFILE` subcommand, or ‘*’ to write the output as the new active file. The `OUTFILE` subcommand is required on the first `SAVE` command, in syntax order, within `MATRIX`. For `SAVE` commands after the first, the default output file is the same as the previous. 

When multiple `SAVE` commands write to one destination within a single `MATRIX`, the later commands append to the same output file. All the matrices written to the file must have the same number of columns. The `VARIABLES`, `NAMES`, and `STRINGS` subcommands are honored only for the first `SAVE` command that writes to a given file. 

By default, `SAVE` names the variables in the output file `COL1` through `COL _n_`. Use `VARIABLES` or `NAMES` to give the variables meaningful names. The `VARIABLES` subcommand accepts a comma-separated list of variable names. Its alternative, `NAMES`, instead accepts an expression that must evaluate to a row or column string vector of names. The number of names need not exactly match the number of columns in the matrix to be written: extra names are ignored; extra columns use default names. 

By default, `SAVE` assumes that the matrix to be written is all numeric. To write string columns, specify a comma-separated list of the string columns’ variable names on `STRINGS`.
