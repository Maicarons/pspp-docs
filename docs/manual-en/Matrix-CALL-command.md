#### 16.4.4 The `CALL` Command

A matrix function returns a single result. The `CALL` command implements procedures, which take a similar syntactic form to functions but yield results by modifying their arguments rather than returning a value. 

Output arguments to a `CALL` procedure must be a single variable name. 

The following procedures are implemented via `CALL` to allow them to return multiple results. For these procedures, the output arguments need not name existing variables; if they do, then their previous values are replaced: 

`CALL EIGEN(M, evec, eval)`
    

Computes the eigenvalues and eigenvector of symmetric _n ×n_ matrix M. Assigns the eigenvectors of M to the columns of _n ×n_ matrix evec and the eigenvalues in descending order to n-element column vector eval. 

Use the `EVAL` function (see [EVAL](Matrix-Algebra-Functions.md#EVAL)) to compute just the eigenvalues of a symmetric matrix. 

For example, the following matrix language commands: 
    
    
    CALL EIGEN({1, 0; 0, 1}, evec, eval).
    PRINT evec.
    PRINT eval.
    
    CALL EIGEN({3, 2, 4; 2, 0, 2; 4, 2, 3}, evec2, eval2).
    PRINT evec2.
    PRINT eval2.
    

yield this output: 
    
    
    evec
      1  0
      0  1
    
    eval
      1
      1
    
    evec2
      -.6666666667   .0000000000   .7453559925
      -.3333333333  -.8944271910  -.2981423970
      -.6666666667   .4472135955  -.5962847940
    
    eval2
      8.0000000000
     -1.0000000000
     -1.0000000000
    

`CALL SVD(M, U, S, V)`
    

Computes the singular value decomposition of _n ×k_ matrix M, assigning S a _n ×k_ diagonal matrix and to U and V unitary _k ×k_ matrices such that _M = U×S×V^T_. The main diagonal of Q contains the singular values of M. 

Use the `SVAL` function (see [SVAL](Matrix-Algebra-Functions.md#SVAL)) to compute just the singular values of a matrix. 

For example, the following matrix program: 
    
    
    CALL SVD({3, 2, 2; 2, 3, -2}, u, s, v).
    PRINT (u * s * T(v))/FORMAT F5.1.
    

yields this output: 
    
    
    (u * s * T(v))
       3.0   2.0   2.0
       2.0   3.0  -2.0
    

The final procedure is implemented via `CALL` to allow it to modify a matrix instead of returning a modified version. For this procedure, the output argument must name an existing variable. 

`CALL SETDIAG(M, V)`
    

Replaces the main diagonal of _n ×p_ matrix M by the contents of k-element vector V. If _k = 1_, so that V is a scalar, replaces all of the diagonal elements of M by V. If _k < \min(n,p)_, only the upper k diagonal elements are replaced; if _k > \min(n,p)_, then the extra elements of V are ignored. 

Use the `MDIAG` function (see [MDIAG](Matrix-Construction-Functions.md#MDIAG)) to construct a new matrix with a specified main diagonal. 

For example, this matrix program: 
    
    
    COMPUTE x={1, 2, 3; 4, 5, 6; 7, 8, 9}.
    CALL SETDIAG(x, 10).
    PRINT x.
    

outputs the following: 
    
    
    x
      10   2   3
       4  10   6
       7   8  10
