#### 16.4.2.4 最小值、最大值与求和函数

Matrix Function: **CMIN** _( M)_
Matrix Function: **CMAX** _( M)_
Matrix Function: **CSUM** _( M)_
Matrix Function: **CSSQ** _( M)_

返回一个行向量，其列数与 M 相同，其中每个元素是 M 同一列中元素的最小值、最大值、求和或平方和。

`CMIN({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {1, 2, 3}`
`CMAX({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {7, 8, 9}`
`CSUM({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {12, 15, 18}`
`CSSQ({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {66, 93, 126}`

Matrix Function: **MMIN** _( M)_
Matrix Function: **MMAX** _( M)_
Matrix Function: **MSUM** _( M)_
Matrix Function: **MSSQ** _( M)_

返回 M 的元素的最小值、最大值、求和或平方和。

`MMIN({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ 1`
`MMAX({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ 9`
`MSUM({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ 45`
`MSSQ({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ 285`

Matrix Function: **RMIN** _( M)_
Matrix Function: **RMAX** _( M)_
Matrix Function: **RSUM** _( M)_
Matrix Function: **RSSQ** _( M)_

返回一个列向量，其行数与 M 相同，其中每个元素是 M 同一行中元素的最小值、最大值、求和或平方和。

`RMIN({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {1; 4; 7}`
`RMAX({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {3; 6; 9}`
`RSUM({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {6; 15; 24}`
`RSSQ({1, 2, 3; 4, 5, 6; 7, 8, 9} ⇒ {14; 77; 194}`

Matrix Function: **SSCP** _( M)_

返回 _M ^T × M_。

`SSCP({1, 2, 3; 4, 5, 6}) ⇒ {17, 22, 27; 22, 29, 36; 27, 36, 45}`

Matrix Function: **TRACE** _( M)_

返回 M 主对角线上元素的和，等价于 `MSUM(DIAG(M))`。

`TRACE(MDIAG(1:5)) ⇒ 15`
