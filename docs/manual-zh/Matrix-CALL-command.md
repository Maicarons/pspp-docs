#### 16.4.4 The `CALL` Command

矩阵函数返回单个结果。`CALL` 命令实现过程（procedures），其语法形式与函数类似，但通过修改其参数而非返回值来产生结果。

`CALL` 过程的输出参数必须是单个变量名。

以下过程通过 `CALL` 实现，以允许它们返回多个结果。对于这些过程，输出参数不需要命名已存在的变量；如果命名了，则其先前的值被替换：

`CALL EIGEN(M, evec, eval)`

计算对称 _n ×n_ 矩阵 M 的特征值和特征向量。将 M 的特征向量赋给 _n ×n_ 矩阵 evec 的列，并将特征值按降序赋给 n 元素列向量 eval。

使用 `EVAL` 函数（参见 [EVAL](Matrix-Algebra-Functions.md#EVAL)）仅计算对称矩阵的特征值。

例如，以下矩阵语言命令：

    CALL EIGEN({1, 0; 0, 1}, evec, eval).
    PRINT evec.
    PRINT eval.

    CALL EIGEN({3, 2, 4; 2, 0, 2; 4, 2, 3}, evec2, eval2).
    PRINT evec2.
    PRINT eval2.

产生如下输出：

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

计算 _n ×k_ 矩阵 M 的奇异值分解，将 S 赋为 _n ×k_ 对角矩阵，将 U 和 V 赋为酉 _k ×k_ 矩阵，使得 _M = U×S×V^T_。Q 的主对角线包含 M 的奇异值。

使用 `SVAL` 函数（参见 [SVAL](Matrix-Algebra-Functions.md#SVAL)）仅计算矩阵的奇异值。

例如，以下矩阵程序：

    CALL SVD({3, 2, 2; 2, 3, -2}, u, s, v).
    PRINT (u * s * T(v))/FORMAT F5.1.

产生如下输出：

    (u * s * T(v))
       3.0   2.0   2.0
       2.0   3.0  -2.0

最后一个过程通过 `CALL` 实现，以允许它修改矩阵而非返回修改后的版本。对于此过程，输出参数必须命名一个已存在的变量。

`CALL SETDIAG(M, V)`

将 _n ×p_ 矩阵 M 的主对角线替换为 k 元素向量 V 的内容。如果 _k = 1_，即 V 是标量，则将 M 的所有对角元素替换为 V。如果 _k < \min(n,p)_，则只替换前 k 个对角元素；如果 _k > \min(n,p)_，则 V 的多余元素被忽略。

使用 `MDIAG` 函数（参见 [MDIAG](Matrix-Construction-Functions.md#MDIAG)）构造一个具有指定主对角线的新矩阵。

例如，此矩阵程序：

    COMPUTE x={1, 2, 3; 4, 5, 6; 7, 8, 9}.
    CALL SETDIAG(x, 10).
    PRINT x.

输出如下：

    x
      10   2   3
       4  10   6
       7   8  10
