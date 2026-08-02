### 16.2 MATRIX DATA
    
    
    MATRIX DATA
            VARIABLES=variables
            [FILE={’file_name’ | INLINE}
            [/FORMAT=[{LIST | FREE}]
                     [{UPPER | LOWER | FULL}]
                     [{DIAGONAL | NODIAGONAL}]]
            [/SPLIT=split_vars]
            [/FACTORS=factor_vars]
            [/N=n]
    
    The following subcommands are only needed when ROWTYPE_ is not
    specified on the VARIABLES subcommand:
            [/CONTENTS={CORR,COUNT,COV,DFE,MAT,MEAN,MSE,
                        N_MATRIX,N|N_VECTOR,N_SCALAR,PROX,SD|STDDEV}]
            [/CELLS=n_cells]
    

The `MATRIX DATA` command convert matrices and vectors from text format into the matrix file format (See [Matrix Files](Matrix-Files.md)) for use by procedures that read matrices. It reads a text file or inline data and outputs to the active file, replacing any data already in the active dataset. The matrix file may then be used by other commands directly from the active file, or it may be written to a .sav file using the `SAVE` command. 

The text data read by `MATRIX DATA` can be delimited by spaces or commas. A plus or minus sign, except immediately following a ‘d’ or ‘e’, also begins a new value. Optionally, values may be enclosed in single or double quotes. 

`MATRIX DATA` can read the types of matrix and vector data supported in matrix files (see [Matrix File Row Types](Matrix-Files.md#Matrix-File-Row-Types)). 

The `FILE` subcommand specifies the source of the command’s input. To read input from a text file, specify its name in quotes. To supply input inline, omit `FILE` or specify `INLINE`. Inline data must directly follow `MATRIX DATA`, inside `BEGIN DATA` (see [BEGIN DATA](BEGIN-DATA.md)). 

`VARIABLES` is the only required subcommand. It names the variables present in each input record in the order that they appear. (`MATRIX DATA` reorders the variables in the matrix file it produces, if needed to fit the matrix file format.) The variable list must include split variables and factor variables, if they are present in the data, in addition to the continuous variables that form matrix rows and columns. It may also include a special variable named `ROWTYPE_`. 

Matrix data may include split variables or factor variables or both. List split variables, if any, on the `SPLIT` subcommand and factor variables, if any, on the `FACTORS` subcommand. Split and factor variables must be numeric. Split and factor variables must also be listed on `VARIABLES`, with one exception: if `VARIABLES` does not include `ROWTYPE_`, then `SPLIT` may name a single variable that is not in `VARIABLES` (see [MATRIX DATA Example 8](MATRIX-DATA-without-ROWTYPE_005f.md#MATRIX-DATA-Example-8)). 

The `FORMAT` subcommand accepts settings to describe the format of the input data: 

`LIST` (default)
`FREE`
    

LIST requires each row to begin at the start of a new input line. FREE allows rows to begin in the middle of a line. Either setting allows a single row to continue across multiple input lines. 

`LOWER` (default)
`UPPER`
`FULL`
    

With LOWER, only the lower triangle is read from the input data and the upper triangle is mirrored across the main diagonal. UPPER behaves similarly for the upper triangle. FULL reads the entire matrix. 

`DIAGONAL` (default)
`NODIAGONAL`
    

With DIAGONAL, the main diagonal is read from the input data. With NODIAGONAL, which is incompatible with FULL, the main diagonal is not read from the input data but instead set to 1 for correlation matrices and system-missing for others. 

The `N` subcommand is a way to specify the size of the population. It is equivalent to specifying an `N` vector with the specified value for each split file. 

`MATRIX DATA` supports two different ways to indicate the kinds of matrices and vectors present in the data, depending on whether a variable with the special name `ROWTYPE_` is present in `VARIABLES`. The following subsections explain `MATRIX DATA` syntax and behavior in each case. 

| • With ROWTYPE_ |  |  |
| --- | --- | --- |
| • Without ROWTYPE_ |  |  |
