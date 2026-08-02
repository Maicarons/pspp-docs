### 16.2 MATRIX DATA

    MATRIX DATA
            VARIABLES=variables
            [FILE={’file_name’ | INLINE}
            [/FORMAT=[{LIST | FREE}]
                     [{UPPER | LOWER | FULL}]
                     [{DIAGONAL | NODIAGONAL}]]
            [/SPLIT=split_vars]
            [/FACTORS=factor_vars]
            [/N=n]

    The following subcommands are only needed when ROWTYPE_ is not
    specified on the VARIABLES subcommand:
            [/CONTENTS={CORR,COUNT,COV,DFE,MAT,MEAN,MSE,
                        N_MATRIX,N|N_VECTOR,N_SCALAR,PROX,SD|STDDEV}]
            [/CELLS=n_cells]

`MATRIX DATA` 命令将文本格式的矩阵和向量转换为矩阵文件格式（参见 [Matrix Files](Matrix-Files.md)），以供读取矩阵的过程使用。它读取文本文件或内联数据，并输出到活动文件，替换活动数据集中已有的任何数据。然后，矩阵文件可由其他命令直接从活动文件使用，或者可以使用 `SAVE` 命令写入 .sav 文件。

`MATRIX DATA` 读取的文本数据可以由空格或逗号分隔。除紧接在‘d’或‘e’之后的情况外，加号或减号也会开始一个新值。可选地，值可以用单引号或双引号括起来。

`MATRIX DATA` 可以读取矩阵文件中支持的矩阵和向量数据类型（参见 [Matrix File Row Types](Matrix-Files.md#Matrix-File-Row-Types)）。

`FILE` 子命令指定命令输入的来源。要从文本文件读取输入，请用引号指定其名称。要以内联方式提供输入，省略 `FILE` 或指定 `INLINE`。内联数据必须紧接在 `MATRIX DATA` 之后，位于 `BEGIN DATA` 内部（参见 [BEGIN DATA](BEGIN-DATA.md)）。

`VARIABLES` 是唯一必需的子命令。它按出现顺序命名每个输入记录中存在的变量。（如有需要，`MATRIX DATA` 会对其生成的矩阵文件中的变量重新排序，以适应矩阵文件格式。）变量列表必须包含拆分变量和因子变量（如果它们存在于数据中），以及构成矩阵行和列的连续变量。它也可以包含一个名为 `ROWTYPE_` 的特殊变量。

矩阵数据可以包含拆分变量或因子变量，或两者皆有。如有拆分变量，列在 `SPLIT` 子命令上；如有因子变量，列在 `FACTORS` 子命令上。拆分变量和因子变量必须为数值型。拆分变量和因子变量也必须列在 `VARIABLES` 上，有一个例外：如果 `VARIABLES` 不包含 `ROWTYPE_`，则 `SPLIT` 可以命名一个不在 `VARIABLES` 中的变量（参见 [MATRIX DATA Example 8](MATRIX-DATA-without-ROWTYPE_005f.md#MATRIX-DATA-Example-8)）。

`FORMAT` 子命令接受用于描述输入数据格式的设置：

`LIST`（默认）
`FREE`

LIST 要求每一行从一个新输入行的开头开始。FREE 允许行从一行的中间开始。两种设置都允许单个行跨多行输入延续。

`LOWER`（默认）
`UPPER`
`FULL`

使用 LOWER 时，仅从输入数据读取下三角，上三角沿主对角线镜像。UPPER 对上三角的行为类似。FULL 读取整个矩阵。

`DIAGONAL`（默认）
`NODIAGONAL`

使用 DIAGONAL 时，从输入数据读取主对角线。使用 NODIAGONAL（与 FULL 不兼容）时，不从输入数据读取主对角线，而是对相关矩阵设为 1，对其他矩阵设为系统缺失值。

`N` 子命令是一种指定总体大小的方式。它等价于为每个拆分文件指定一个具有该指定值的 `N` 向量。

`MATRIX DATA` 支持两种不同的方式来指示数据中所存在的矩阵和向量种类，取决于 `VARIABLES` 中是否存在名为 `ROWTYPE_` 的特殊变量。以下各小节分别解释每种情况下 `MATRIX DATA` 的语法和行为。

| • With ROWTYPE_ |  |  |
| --- | --- | --- |
| • Without ROWTYPE_ |  |  |
