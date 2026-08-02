#### 16.4.12 `MSAVE` 命令

    MSAVE _expression_
          /TYPE={COV _|_ CORR _|_ MEAN _|_ STDDEV _|_ N _|_ COUNT}
          [/FACTOR=_expression_]
          [/SPLIT=_expression_]
          [/OUTFILE=_file_]
          [/VARIABLES=_variable_ …]
          [/SNAMES=_variable_ …]
          [/FNAMES=_variable_ …].


`MSAVE` 命令求值命令名之后紧跟的 _expression_，并将结果矩阵写入矩阵文件（参见 [Matrix Files](Matrix-Files.md)）。

`TYPE` 子命令是必需的。它指定与之同时写入的 `ROWTYPE_`。

当且仅当矩阵文件分别含有因子变量或拆分变量时，`FACTOR` 和 `SPLIT` 子命令在第一个 `MSAVE` 上是必需的。此后，它们的值会按语法顺序从一个 `MSAVE` 命令沿用到下一个作为默认值。每个子命令接受一个表达式，该表达式必须求值为一个向量，其条目数与矩阵的因子变量或拆分变量数分别相同。每个 `MSAVE` 只写入因子和拆分变量的一种组合的数据，因此可能需要多个 `MSAVE` 命令（或在循环内的一个）来写入完整的一组数据。

其余 `MSAVE` 子命令定义矩阵文件的格式。在给定的矩阵程序内，所有 `MSAVE` 命令都写入同一个矩阵文件，因此这些子命令只在矩阵程序内的第一个 `MSAVE` 命令上有意义。（如果它们在后面的 `MSAVE` 命令上再次给出，则必须与第一个上的值相同。）

`OUTFILE` 子命令指定要写入的矩阵文件的名称或句柄。输出必须写入外部文件，而不是数据集或活动文件。

`VARIABLES` 子命令指定要写入矩阵文件的连续变量名称的逗号分隔列表。`TO` 关键字可用于定义带有连续整数后缀的变量名。这些名称成为矩阵文件中的列名以及 `VARNAME_` 中出现的名称。`ROWTYPE_` 和 `VARNAME_` 不允许出现在 `VARIABLES` 上。如果省略 `VARIABLES`，则 PSPP 使用名称 `COL1`、`COL2` 等。

`FNAMES` 子命令可用于提供因子变量名的逗号分隔列表。默认名称为 `FAC1`、`FAC2` 等。

`SNAMES` 子命令可以提供拆分变量名的逗号分隔列表。默认名称为 `SPL1`、`SPL2` 等。
