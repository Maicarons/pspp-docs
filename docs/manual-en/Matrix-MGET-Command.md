#### 16.4.11 The `MGET` Command
    
    
    MGET [/FILE=_file_]
         [/TYPE={COV _|_ CORR _|_ MEAN _|_ STDDEV _|_ N _|_ COUNT}].
    

The `MGET` command reads the data from a matrix file (see [Matrix Files](Matrix-Files.md)) into matrix variables. 

All of `MGET`’s subcommands are optional. Specify the name or handle of the matrix file to be read on the `FILE` subcommand; if it is omitted, then the command reads the active file. 

By default, `MGET` reads all of the data from the matrix file. Specify a space-delimited list of matrix types on `TYPE` to limit the kinds of data to the one specified: 

`COV`
    

Covariance matrix. 

`CORR`
    

Correlation coefficient matrix. 

`MEAN`
    

Vector of means. 

`STDDEV`
    

Vector of standard deviations. 

`N`
    

Vector of case counts. 

`COUNT`
    

Vector of counts. 

`MGET` reads the entire matrix file and automatically names, creates, and populates matrix variables using its contents. It constructs the name of each variable by concatenating the following: 

  * A 2-character prefix that identifies the type of the matrix: 

`CV`
    

Covariance matrix. 

`CR`
    

Correlation coefficient matrix. 

`MN`
    

Vector of means. 

`SD`
    

Vector of standard deviations. 

`NC`
    

Vector of case counts. 

`CN`
    

Vector of counts. 

  * If the matrix file has factor variables, `F _n_`, where _n_ is a number identifying a group of factors: `F1` for the first group, `F2` for the second, and so on. This part is omitted for pooled data (where the factors all have the system-missing value). 
  * If the matrix file has split file variables, `S _n_`, where _n_ is a number identifying a split group: `S1` for the first group, `S2` for the second, and so on. 

If `MGET` chooses the name of an existing variable, it issues a warning and does not change the variable.
