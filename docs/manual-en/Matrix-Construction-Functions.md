#### 16.4.2.3 Matrix Construction Functions

Matrix Function: **BLOCK** _( M1, …, Mn)_
    

Returns a block diagonal matrix with as many rows as the sum of its arguments’ row counts and as many columns as the sum of their columns. Each argument matrix is placed along the main diagonal of the result, and all other elements are zero. 
    
    
    BLOCK({1, 2; 3, 4}, 5, {7; 8; 9}, {10, 11}) ⇒
       1   2   0   0   0   0
       3   4   0   0   0   0
       0   0   5   0   0   0
       0   0   0   7   0   0
       0   0   0   8   0   0
       0   0   0   9   0   0
       0   0   0   0  10  11
    

Matrix Function: **IDENT** _( n)_
Matrix Function: **IDENT** _( nr, nc)_
    

Returns an identity matrix, whose main diagonal elements are one and whose other elements are zero. The returned matrix has n rows and columns or nr rows and nc columns, respectively. 
    
    
    IDENT(1) ⇒ 1
    IDENT(2) ⇒
      1  0
      0  1
    IDENT(3, 5) ⇒
      1  0  0  0  0
      0  1  0  0  0
      0  0  1  0  0
    IDENT(5, 3) ⇒
      1  0  0
      0  1  0
      0  0  1
      0  0  0
      0  0  0
    

Matrix Function: **MAGIC** _( n)_
    

Returns an _n ×n_ matrix that contains each of the integers _1… n_ once, in which each column, each row, and each diagonal sums to _n(n^2+1)/2_. There are many magic squares with given dimensions, but this function always returns the same one for a given value of n. 

`MAGIC(3) ⇒ {8, 1, 6; 3, 5, 7; 4, 9, 2}`   
`MAGIC(4) ⇒ {1, 5, 12, 16; 15, 11, 6, 2; 14, 8, 9, 3; 4, 10, 7, 13}`

Matrix Function: **MAKE** _( nr, nc, s)_
    

Returns an _nr ×nc_ matrix whose elements are all s. 

`MAKE(1, 2, 3) ⇒ {3, 3}`   
`MAKE(2, 1, 4) ⇒ {4; 4}`   
`MAKE(2, 3, 5) ⇒ {5, 5, 5; 5, 5, 5}`

Matrix Function: **MDIAG** _( V)_
    

Given n-element vector V, returns a _n ×n_ matrix whose main diagonal is copied from V. The other elements in the returned vector are zero. 

Use `CALL SETDIAG` (see [CALL SETDIAG](Matrix-CALL-command.md#CALL-SETDIAG)) to replace the main diagonal of a matrix in-place. 
    
    
    MDIAG({1, 2, 3, 4}) ⇒
      1  0  0  0
      0  2  0  0
      0  0  3  0
      0  0  0  4
    

Matrix Function: **RESHAPE** _( M, nr, nc)_
    

Returns an _nr ×nc_ matrix whose elements come from M, which must have the same number of elements as the new matrix, copying elements from M to the new matrix row by row. 
    
    
    RESHAPE(1:12, 1, 12) ⇒
       1   2   3   4   5   6   7   8   9  10  11  12
    RESHAPE(1:12, 2, 6) ⇒
       1   2   3   4   5   6
       7   8   9  10  11  12
    RESHAPE(1:12, 3, 4) ⇒
       1   2   3   4
       5   6   7   8
       9  10  11  12
    RESHAPE(1:12, 4, 3) ⇒
       1   2   3
       4   5   6
       7   8   9
      10  11  12
    

Matrix Function: **T** _( M)_
Matrix Function: **TRANSPOS** _( M)_
    

Returns M with rows exchanged for columns. 

`T({1, 2, 3}) ⇒ {1; 2; 3}`   
`T({1; 2; 3}) ⇒ {1, 2, 3}`

Matrix Function: **UNIFORM** _( nr, nc)_
    

Returns a _nr ×nc_ matrix in which each element is randomly chosen from a uniform distribution of real numbers between 0 and 1. Random number generation honors the current seed setting (see [SET SEED](SET.md#SET-SEED)). 

The following example shows one possible output, but of course every result will be different (given different seeds): 
    
    
    UNIFORM(4, 5)*10 ⇒
      7.71  2.99   .21  4.95  6.34
      4.43  7.49  8.32  4.99  5.83
      2.25   .25  1.98  7.09  7.61
      2.66  1.69  2.64   .88  1.50
