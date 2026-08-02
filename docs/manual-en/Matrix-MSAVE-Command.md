#### 16.4.12 The `MSAVE` Command
    
    
    MSAVE _expression_
          /TYPE={COV _|_ CORR _|_ MEAN _|_ STDDEV _|_ N _|_ COUNT}
          [/FACTOR=_expression_]
          [/SPLIT=_expression_]
          [/OUTFILE=_file_]
          [/VARIABLES=_variable_ …]
          [/SNAMES=_variable_ …]
          [/FNAMES=_variable_ …].
    

The `MSAVE` command evaluates the _expression_ specified just after the command name, and writes the resulting matrix to a matrix file (see [Matrix Files](Matrix-Files.md)). 

The `TYPE` subcommand is required. It specifies the `ROWTYPE_` to write along with this matrix. 

The `FACTOR` and `SPLIT` subcommands are required on the first `MSAVE` if and only if the matrix file has factor or split variables, respectively. After that, their values are carried along from one `MSAVE` command to the next in syntax order as defaults. Each one takes an expression that must evaluate to a vector with the same number of entries as the matrix has factor or split variables, respectively. Each `MSAVE` only writes data for a single combination of factor and split variables, so many `MSAVE` commands (or one inside a loop) may be needed to write a complete set. 

The remaining `MSAVE` subcommands define the format of the matrix file. All of the `MSAVE` commands within a given matrix program write to the same matrix file, so these subcommands are only meaningful on the first `MSAVE` command within a matrix program. (If they are given again on later `MSAVE` commands, then they must have the same values as on the first.) 

The `OUTFILE` subcommand specifies the name or handle of the matrix file to be written. Output must go to an external file, not a data set or the active file. 

The `VARIABLES` subcommand specifies a comma-separated list of the names of the continuous variables to be written to the matrix file. The `TO` keyword can be used to define variables named with consecutive integer suffixes. These names become column names and names that appear in `VARNAME_` in the matrix file. `ROWTYPE_` and `VARNAME_` are not allowed on `VARIABLES`. If `VARIABLES` is omitted, then PSPP uses the names `COL1`, `COL2`, and so on. 

The `FNAMES` subcommand may be used to supply a comma-separated list of factor variable names. The default names are `FAC1`, `FAC2`, and so on. 

The `SNAMES` subcommand can supply a comma-separated list of split variable names. The default names are `SPL1`, `SPL2`, and so on.
