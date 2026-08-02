#### 16.4.10 `SAVE` 命令

    SAVE _expression_
         [/OUTFILE={_file_ _|_ *}]
         [/VARIABLES=_variable_ …]
         [/NAMES=_expression_]
         [/STRINGS=_variable_ …].


`SAVE` 矩阵命令求值 _expression_，并将结果矩阵写入 SPSS 系统文件。在系统文件中，矩阵的每一行成为一个个案，每一列成为一个变量。

在 `OUTFILE` 子命令上指定 SPSS 系统文件的名称或句柄，或使用 “*” 将输出写为新的活动文件。在语法顺序中，`OUTFILE` 子命令在 `MATRIX` 内的第一个 `SAVE` 命令上是必需的。对于第一个之后的 `SAVE` 命令，默认输出文件与上一个相同。

当多个 `SAVE` 命令在单个 `MATRIX` 内写入同一目标时，后面的命令追加到同一个输出文件。写入文件的所有矩阵必须具有相同的列数。`VARIABLES`、`NAMES` 和 `STRINGS` 子命令仅对写入给定文件的第一个 `SAVE` 命令有效。

默认情况下，`SAVE` 将输出文件中的变量命名为 `COL1` 到 `COL _n_`。使用 `VARIABLES` 或 `NAMES` 为变量提供有意义的名称。`VARIABLES` 子命令接受逗号分隔的变量名列表。其替代项 `NAMES` 改为接受一个表达式，该表达式必须求值为一行或一列字符串名称向量。名称的数量不必与待写矩阵的列数精确匹配：多余的名称被忽略；多余的列使用默认名称。

默认情况下，`SAVE` 假定待写矩阵全为数值型。要写入字符串列，在 `STRINGS` 上指定字符串列的变量名的逗号分隔列表。
