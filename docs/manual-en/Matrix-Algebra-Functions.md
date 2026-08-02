#### 16.4.2.7 Matrix Algebra Functions

Matrix Function: **CHOL** _( M)_
    

Matrix M must be an _n ×n_ symmetric positive-definite matrix. Returns an _n ×n_ matrix B such that _B ^T×B=M_. 
    
    
    CHOL({4, 12, -16; 12, 37, -43; -16, -43, 98}) ⇒
      2  6 -8
      0  1  5
      0  0  3
    

Matrix Function: **DESIGN** _( M)_
    

Returns a design matrix for M. The design matrix has the same number of rows as M. Each column c in M, from left to right, yields a group of columns in the output. For each unique value v in c, from top to bottom, add a column to the output in which v becomes 1 and other values become 0. 

PSPP issues a warning if a column only contains a single unique value. 
    
    
    DESIGN({1; 2; 3}) ⇒ {1, 0, 0; 0, 1, 0; 0, 0, 1}
    DESIGN({5; 8; 5}) ⇒ {1, 0; 0, 1; 1, 0}
    DESIGN({1, 5; 2, 8; 3, 5})
     ⇒ {1, 0, 0, 1, 0; 0, 1, 0, 0, 1; 0, 0, 1, 1, 0}
    DESIGN({5; 5; 5}) ⇒ (warning)
    

Matrix Function: **DET** _( M)_
    

Returns the determinant of square matrix M. 

`DET({3, 7; 1, -4}) ⇒ -19`

Matrix Function: **EVAL** _( M)_
    

Returns a column vector containing the eigenvalues of symmetric matrix M, sorted in ascending order. 

Use `CALL EIGEN` (see [CALL EIGEN](Matrix-CALL-command.md#CALL-EIGEN)) to compute eigenvalues and eigenvectors of a matrix. 

`EVAL({2, 0, 0; 0, 3, 4; 0, 4, 9}) ⇒ {11; 2; 1}`

Matrix Function: **GINV** _( M)_
    

Returns the _k ×n_ matrix A that is the _generalized inverse_ of _n ×k_ matrix M, defined such that _M ×A×M=M_ and _A ×M×A=A_. 

`GINV({1, 2}) ⇒ {.2; .4}` (approximately)   
`{1:9} * GINV(1:9) * {1:9} ⇒ {1:9}` (approximately) 

Matrix Function: **GSCH** _( M)_
    

M must be a _n ×m_ matrix, _m ≥ n_, with rank n. Returns an _n ×n_ orthonormal basis for M, obtained using the Gram-Schmidt process. 

`GSCH({3, 2; 1, 2}) * SQRT(10) ⇒ {3, -1; 1, 3}` (approximately) 

Matrix Function: **INV** _( M)_
    

Returns the _n ×n_ matrix A that is the inverse of _n ×n_ matrix M, defined such that _M ×A = A×M = I_, where I is the identity matrix. M must not be singular, that is, _\det( M) ≠ 0_. 

`INV({4, 7; 2, 6}) ⇒ {.6, -.7; -.2, .4}` (approximately) 

Matrix Function: **KRONEKER** _( Ma, Mb)_
    

Returns the _pm ×qn_ matrix P that is the _Kroneker product_ of _m ×n_ matrix Ma and _p ×q_ matrix Mb. One may view P as the concatenation of multiple _p ×q_ blocks, each of which is the scalar product of Mb by a different element of Ma. For example, when `A` is a _2×2_ matrix, `KRONEKER(A, B)` is equivalent to `{A(1,1)*B, A(1,2)*B; A(2,1)*B, A(2,2)*B}`. 
    
    
    KRONEKER({1, 2; 3, 4}, {0, 5; 6, 7}) ⇒
       0   5   0  10
       6   7  12  14
       0  15   0  20
      18  21  24  28
    

Matrix Function: **RANK** _( M)_
    

Returns the rank of matrix M, an integer scalar whose value is the dimension of the vector space spanned by its columns or, equivalently, by its rows. 
    
    
    RANK({1, 0, 1; -2, -3, 1; 3, 3, 0}) ⇒ 2
    RANK({1, 1, 0, 2; -1, -1, 0, -2}) ⇒ 1
    RANK({1, -1; 1, -1; 0, 0; 2, -2}) ⇒ 1
    RANK({1, 2, 1; -2, -3, 1; 3, 5, 0}) ⇒ 2
    RANK({1, 0, 2; 2, 1, 0; 3, 2, 1}) ⇒ 3
    

Matrix Function: **SOLVE** _( Ma, Mb)_
    

Ma must be an _n ×n_ matrix, with _\det( Ma) ≠ 0_, and Mb an _n ×k_ matrix. Returns an _n ×k_ matrix X such that _Ma × X = Mb_. 

All of the following examples show approximate results: 
    
    
    SOLVE({2, 3; 4, 9}, {6, 2; 15, 5}) ⇒
       1.50    .50
       1.00    .33
    SOLVE({1, 3, -2; 3, 5, 6; 2, 4, 3}, {5; 7; 8}) ⇒
     -15.00
       8.00
       2.00
    SOLVE({2, 1, -1; -3, -1, 2; -2, 1, 2}, {8; -11; -3}) ⇒
       2.00
       3.00
      -1.00
    

Matrix Function: **SVAL** _( M)_
    

Given _n ×k_ matrix M, returns a _\min( n,k)_-element column vector containing the singular values of M in descending order. 

Use `CALL SVD` (see [CALL SVD](Matrix-CALL-command.md#CALL-SVD)) to compute the full singular value decomposition of a matrix. 
    
    
    SVAL({1, 1; 0, 0}) ⇒ {1.41; .00}
    SVAL({1, 0, 1; 0, 1, 1; 0, 0, 0}) ⇒ {1.73; 1.00; .00}
    SVAL({2, 4; 1, 3; 0, 0; 0, 0}) ⇒ {5.46; .37}
    

Matrix Function: **SWEEP** _( M, nk)_
    

Given _r ×c_ matrix M and integer scalar _k = nk_ such that _1 ≤ k ≤ \min( r,c)_, returns the _r ×c_ sweep matrix A. 

If _M _{kk} ≠ 0_, then: 
    
    
    _A _{kk} = 1/M_{kk}_,
    _A _{ik} = -M_{ik}/M_{kk} for i ≠ k_,
    _A _{kj} = M_{kj}/M_{kk} for j ≠ k, and_
    _A _{ij} = M_{ij} - M_{ik}M_{kj}/M_{kk} for i ≠ k and j ≠ k_.
    

If _M _{kk} = 0_, then: 
    
    
    _A _{ik} = A_{ki} = 0 and_
    _A _{ij} = M_{ij}, for i ≠ k and j ≠ k_.
    

Given `M = {0, 1, 2; 3, 4, 5; 6, 7, 8}`, then (approximately): 
    
    
    SWEEP(M, 1) ⇒
       .00   .00   .00
       .00  4.00  5.00
       .00  7.00  8.00
    SWEEP(M, 2) ⇒
      -.75  -.25   .75
       .75   .25  1.25
       .75 -1.75  -.75
    SWEEP(M, 3) ⇒
     -1.50  -.75  -.25
      -.75  -.38  -.63
       .75   .88   .13
