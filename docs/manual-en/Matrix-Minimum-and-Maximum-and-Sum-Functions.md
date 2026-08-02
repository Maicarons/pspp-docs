#### 16.4.2.4 Minimum, Maximum, and Sum Functions

Matrix Function: **CMIN** _( M)_
Matrix Function: **CMAX** _( M)_
Matrix Function: **CSUM** _( M)_
Matrix Function: **CSSQ** _( M)_
    

Returns a row vector with the same number of columns as M, in which each element is the minimum, maximum, sum, or sum of squares, respectively, of the elements in the same column of M. 

`CMIN({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {1, 2, 3}`   
`CMAX({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {7, 8, 9}`   
`CSUM({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {12, 15, 18}`   
`CSSQ({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {66, 93, 126}`

Matrix Function: **MMIN** _( M)_
Matrix Function: **MMAX** _( M)_
Matrix Function: **MSUM** _( M)_
Matrix Function: **MSSQ** _( M)_
    

Returns the minimum, maximum, sum, or sum of squares, respectively, of the elements of M. 

`MMIN({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ 1`   
`MMAX({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ 9`   
`MSUM({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ 45`   
`MSSQ({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ 285`

Matrix Function: **RMIN** _( M)_
Matrix Function: **RMAX** _( M)_
Matrix Function: **RSUM** _( M)_
Matrix Function: **RSSQ** _( M)_
    

Returns a column vector with the same number of rows as M, in which each element is the minimum, maximum, sum, or sum of squares, respectively, of the elements in the same row of M. 

`RMIN({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {1; 4; 7}`   
`RMAX({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {3; 6; 9}`   
`RSUM({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {6; 15; 24}`   
`RSSQ({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {14; 77; 194}`

Matrix Function: **SSCP** _( M)_
    

Returns _M ^T × M_. 

`SSCP({1, 2, 3; 4, 5, 6}) ⇒ {17, 22, 27; 22, 29, 36; 27, 36, 45}`

Matrix Function: **TRACE** _( M)_
    

Returns the sum of the elements along M’s main diagonal, equivalent to `MSUM(DIAG(M))`. 

`TRACE(MDIAG(1:5)) ⇒ 15`
