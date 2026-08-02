#### 16.4.2.5 矩阵属性函数

Matrix Function: **NROW** _( M)_
Matrix Function: **NCOL** _( M)_

分别返回 M 中的行数或列数。

    NROW({1, 0; -2, -3; 3, 3}) ⇒ 3
    NROW(1:5) ⇒ 1

    NCOL({1, 0; -2, -3; 3, 3}) ⇒ 2
    NCOL(1:5) ⇒ 5


Matrix Function: **DIAG** _( M)_

返回一个列向量，包含 M 主对角线的一个副本。该向量的长度等于 `NCOL(M)` 和 `NROW(M)` 中的较小者。

`DIAG({1, 0; -2, -3; 3, 3}) ⇒ {1; -3}`
