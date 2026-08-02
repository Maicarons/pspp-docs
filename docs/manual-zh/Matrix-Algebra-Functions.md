#### 16.4.2.7 Matrix Algebra Functions

Matrix Function: **CHOL** _( M)_

矩阵 M 必须是 _n ×n_ 对称正定矩阵。返回一个 _n ×n_ 矩阵 B，使得 _B ^T×B=M_。

    CHOL({4, 12, -16; 12, 37, -43; -16, -43, 98}) ⇒
      2  6 -8
      0  1  5
      0  0  3

Matrix Function: **DESIGN** _( M)_

返回 M 的设计矩阵（design matrix）。设计矩阵的行数与 M 相同。M 中从左到右的每一列 c，在输出中产生一组列。对于 c 中从上到下的每个唯一值 v，向输出添加一列，其中 v 变为 1，其他值变为 0。

如果某一列仅包含单个唯一值，PSPP 会发出警告。

    DESIGN({1; 2; 3}) ⇒ {1, 0, 0; 0, 1, 0; 0, 0, 1}
    DESIGN({5; 8; 5}) ⇒ {1, 0; 0, 1; 1, 0}
    DESIGN({1, 5; 2, 8; 3, 5})
     ⇒ {1, 0, 0, 1, 0; 0, 1, 0, 0, 1; 0, 0, 1, 1, 0}
    DESIGN({5; 5; 5}) ⇒ (warning)

Matrix Function: **DET** _( M)_

返回方阵 M 的行列式。

`DET({3, 7; 1, -4}) ⇒ -19`

Matrix Function: **EVAL** _( M)_

返回一个包含对称矩阵 M 的特征值的列向量，按升序排序。

使用 `CALL EIGEN`（参见 [CALL EIGEN](Matrix-CALL-command.md#CALL-EIGEN)）计算矩阵的特征值和特征向量。

`EVAL({2, 0, 0; 0, 3, 4; 0, 4, 9}) ⇒ {11; 2; 1}`

Matrix Function: **GINV** _( M)_

返回 _k ×n_ 矩阵 A，它是 _n ×k_ 矩阵 M 的_广义逆_（generalized inverse），定义为满足 _M ×A×M=M_ 且 _A ×M×A=A_。

`GINV({1, 2}) ⇒ {.2; .4}`（约等于）
`{1:9} * GINV(1:9) * {1:9} ⇒ {1:9}`（约等于）

Matrix Function: **GSCH** _( M)_

M 必须是 _n ×m_ 矩阵，_m ≥ n_，秩为 n。使用 Gram-Schmidt 过程返回 M 的 _n ×n_ 标准正交基。

`GSCH({3, 2; 1, 2}) * SQRT(10) ⇒ {3, -1; 1, 3}`（约等于）

Matrix Function: **INV** _( M)_

返回 _n ×n_ 矩阵 A，它是 _n ×n_ 矩阵 M 的逆，定义为满足 _M ×A = A×M = I_，其中 I 是单位矩阵。M 必须非奇异，即 _\det( M) ≠ 0_。

`INV({4, 7; 2, 6}) ⇒ {.6, -.7; -.2, .4}`（约等于）

Matrix Function: **KRONEKER** _( Ma, Mb)_

返回 _pm ×qn_ 矩阵 P，它是 _m ×n_ 矩阵 Ma 和 _p ×q_ 矩阵 Mb 的_克羅內克積_（Kroneker product）。可将 P 视为多个 _p ×q_ 块的拼接，每个块是 Mb 与 Ma 不同元素的标量积。例如，当 `A` 是 _2×2_ 矩阵时，`KRONEKER(A, B)` 等价于 `{A(1,1)*B, A(1,2)*B; A(2,1)*B, A(2,2)*B}`。

    KRONEKER({1, 2; 3, 4}, {0, 5; 6, 7}) ⇒
       0   5   0  10
       6   7  12  14
       0  15   0  20
      18  21  24  28

Matrix Function: **RANK** _( M)_

返回矩阵 M 的秩，一个整数标量，其值为其列（等价地，其行）所张成的向量空间的维数。

    RANK({1, 0, 1; -2, -3, 1; 3, 3, 0}) ⇒ 2
    RANK({1, 1, 0, 2; -1, -1, 0, -2}) ⇒ 1
    RANK({1, -1; 1, -1; 0, 0; 2, -2}) ⇒ 1
    RANK({1, 2, 1; -2, -3, 1; 3, 5, 0}) ⇒ 2
    RANK({1, 0, 2; 2, 1, 0; 3, 2, 1}) ⇒ 3

Matrix Function: **SOLVE** _( Ma, Mb)_

Ma 必须是 _n ×n_ 矩阵，且 _\det( Ma) ≠ 0_，Mb 为 _n ×k_ 矩阵。返回一个 _n ×k_ 矩阵 X，使得 _Ma × X = Mb_。

以下所有示例均显示近似结果：

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

给定 _n ×k_ 矩阵 M，返回一个 _\min( n,k)_ 元素的列向量，包含 M 的奇异值，按降序排列。

使用 `CALL SVD`（参见 [CALL SVD](Matrix-CALL-command.md#CALL-SVD)）计算矩阵的完整奇异值分解。

    SVAL({1, 1; 0, 0}) ⇒ {1.41; .00}
    SVAL({1, 0, 1; 0, 1, 1; 0, 0, 0}) ⇒ {1.73; 1.00; .00}
    SVAL({2, 4; 1, 3; 0, 0; 0, 0}) ⇒ {5.46; .37}

Matrix Function: **SWEEP** _( M, nk)_

给定 _r ×c_ 矩阵 M 和整数标量 _k = nk_，满足 _1 ≤ k ≤ \min( r,c)_，返回 _r ×c_ 扫描矩阵 A。

若 _M _{kk} ≠ 0_，则：

    _A _{kk} = 1/M_{kk}_,
    _A _{ik} = -M_{ik}/M_{kk} for i ≠ k_,
    _A _{kj} = M_{kj}/M_{kk} for j ≠ k, and_
    _A _{ij} = M_{ij} - M_{ik}M_{kj}/M_{kk} for i ≠ k and j ≠ k_.

若 _M _{kk} = 0_，则：

    _A _{ik} = A_{ki} = 0 and_
    _A _{ij} = M_{ij}, for i ≠ k and j ≠ k_.

给定 `M = {0, 1, 2; 3, 4, 5; 6, 7, 8}`，则（约等于）：

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
