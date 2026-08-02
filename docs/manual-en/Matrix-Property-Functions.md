#### 16.4.2.5 Matrix Property Functions

Matrix Function: **NROW** _( M)_
Matrix Function: **NCOL** _( M)_
    

Returns the number of row or columns, respectively, in M. 
    
    
    NROW({1, 0; -2, -3; 3, 3}) ⇒ 3
    NROW(1:5) ⇒ 1
    
    NCOL({1, 0; -2, -3; 3, 3}) ⇒ 2
    NCOL(1:5) ⇒ 5
    

Matrix Function: **DIAG** _( M)_
    

Returns a column vector containing a copy of M’s main diagonal. The vector’s length is the lesser of `NCOL(M)` and `NROW(M)`. 

`DIAG({1, 0; -2, -3; 3, 3}) ⇒ {1; -3}`
