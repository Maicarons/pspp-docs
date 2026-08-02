#### 16.4.9 The `GET` Command
    
    
    GET _variable_[(_index_[,_index_])]
        [/FILE={_file_ _|_ *}]
        [/VARIABLES=_variable_ …]
        [/NAMES=_variable_]
        [/MISSING={ACCEPT _|_ OMIT _|_ _number_}]
        [/SYSMIS={OMIT _|_ _number_}].
    

The `READ` command reads numeric data from an SPSS system file, SPSS/PC+ system file, or SPSS portable file into a matrix variable or submatrix: 

  * To read data into a variable, specify just its name following `GET`. The variable need not already exist; if it does, it is replaced. The variable will have as many columns as there are variables specified on the `VARIABLES` subcommand and as many rows as there are cases in the input file. 
  * To read data into a submatrix, specify the name of an existing variable, followed by an indexing expression, just after `GET`. The submatrix must have as many columns as variables specified on `VARIABLES` and as many rows as cases in the input file. 

Specify the name or handle of the file to be read on `FILE`. Use ‘*’, or simply omit the `FILE` subcommand, to read from the active file. Reading from the active file is only permitted if it was already defined outside `MATRIX`. 

List the variables to be read as columns in the matrix on the `VARIABLES` subcommand. The list can use `TO` for collections of variables or `ALL` for all variables. If `VARIABLES` is omitted, all variables are read. Only numeric variables may be read. 

If a variable is named on `NAMES`, then the names of the variables read as data columns are stored in a string vector within the given name, replacing any existing matrix variable with that name. Variable names are truncated to 8 bytes. 

The `MISSING` and `SYSMIS` subcommands control the treatment of missing values in the input file. By default, any user- or system-missing data in the variables being read from the input causes an error that prevents `GET` from executing. To accept missing values, specify one of the following settings on `MISSING`: 

`ACCEPT`
    

Accept user-missing values with no change. 

By default, system-missing values still yield an error. Use the `SYSMIS` subcommand to change this treatment: 

`OMIT`
    

Skip any case that contains a system-missing value. 

_number_
    

Recode the system-missing value to _number_. 

`OMIT`
    

Skip any case that contains any user- or system-missing value. 

_number_
    

Recode all user- and system-missing values to _number_. 

The `SYSMIS` subcommand has an effect only with `MISSING=ACCEPT`.
