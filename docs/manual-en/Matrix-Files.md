### 16.1 Matrix Files

A matrix file is an SPSS system file that conforms to the dictionary and case structure described in this section. Procedures that read matrices from files expect them to be in the matrix file format. Procedures that write matrices also use this format. 

Text files that contain matrices can be converted to matrix file format. See [MATRIX DATA](MATRIX-DATA.md), for a command to read a text file as a matrix file. 

A matrix file’s dictionary must have the following variables in the specified order: 

  1. Zero or more numeric split variables. These are included by procedures when `SPLIT FILE` is active. `MATRIX DATA` assigns split variables format F4.0. 
  2. `ROWTYPE_`, a string variable with width 8. This variable indicates the kind of matrix or vector that a given case represents. The supported row types are listed below. 
  3. Zero or more numeric factor variables. These are included by procedures that divide data into cells. For within-cell data, factor variables are filled with non-missing values; for pooled data, they are missing. `MATRIX DATA` assigns factor variables format F4.0. 
  4. `VARNAME_`, a string variable. Matrix data includes one row per continuous variable (see below), naming each continuous variable in order. This column is blank for vector data. `MATRIX DATA` makes `VARNAME_` wide enough for the name of any of the continuous variables, but at least 8 bytes. 
  5. One or more numeric continuous variables. These are the variables whose data was analyzed to produce the matrices. `MATRIX DATA` assigns continuous variables format F10.4. 

Case weights are ignored in matrix files. 

#### Row Types

Matrix files support a fixed set of types of matrix and vector data. The `ROWTYPE_` variable in each case of a matrix file indicates its row type. 

The supported matrix row types are listed below. Each type is listed with the keyword that identifies it in `ROWTYPE_`. All supported types of matrices are square, meaning that each matrix must include one row per continuous variable, with the `VARNAME_` variable indicating each continuous variable in turn in the same order as the dictionary. 

`CORR`
    

Correlation coefficients. 

`COV`
    

Covariance coefficients. 

`MAT`
    

General-purpose matrix. 

`N_MATRIX`
    

Counts. 

`PROX`
    

Proximities matrix. 

The supported vector row types are listed below, along with their associated keyword. Vector row types only require a single row, whose `VARNAME_` is blank: 

`COUNT`
    

Unweighted counts. 

`DFE`
    

Degrees of freedom. 

`MEAN`
    

Means. 

`MSE`
    

Mean squared errors. 

`N`
    

Counts. 

`STDDEV`
    

Standard deviations. 

Only the row types listed above may appear in matrix files. The `MATRIX DATA` command, however, accepts the additional row types listed below, which it changes into matrix file row types as part of its conversion process: 

`N_VECTOR`
    

Synonym for `N`. 

`SD`
    

Synonym for `STDDEV`. 

`N_SCALAR`
    

Accepts a single number from the `MATRIX DATA` input and writes it as an `N` row with the number replicated across all the continuous variables.
