#### 16.4.5 `PRINT` 命令

    PRINT [_expression_]
          [/FORMAT=_format_]
          [/TITLE=_title_]
          [/SPACE={NEWPAGE _|_ _n_}]
          [{/RLABELS=_string_ … _|_ /RNAMES=_expression_}]
          [{/CLABELS=_string_ … _|_ /CNAMES=_expression_}].


`PRINT` 命令通常用于显示矩阵。它求值受限表达式（如果存在），并根据 `MDISPLAY` 的设置（参见 [SET MDISPLAY](SET.md#SET-MDISPLAY)）以文本或透视表的形式输出。

使用 `FORMAT` 子命令指定用于显示矩阵元素的格式，例如 `F8.2`。对于数值矩阵，`FORMAT` 是可选的。省略时，PSPP 使用 m（即待显示矩阵中绝对值最大元素的量值）自动选择条目的格式：

  1. 如果 _m < 10^{11}_ 且矩阵元素全为整数，PSPP 会选择能容纳 m 加正负号的最窄 `F` 格式。例如，如果矩阵为 `{1:10}`，则 _m = 10_，可容纳在 3 列并留出正负号空间，格式为 `F3.0`。
  2. 否则，如果 _m ≥ 10^9_ 或 _m ≤ 10^{-4}_，PSPP 将矩阵中所有数字按比例缩放 _10^x_，其中 x 是显示 m 的科学计数法所用的指数。例如，对于 _m = 5.123×10^{20}_，缩放因子为 _10^{20}_。PSPP 以格式 `F13.10` 显示缩放后的值，并在输出中注明缩放因子。
  3. 否则，PSPP 以格式 `F13.10` 显示矩阵值，不缩放。

可选的 `TITLE` 子命令以带引号的字符串指定输出文本或表格的标题。省略时，矩阵表达式的语法用作标题。

使用 `SPACE` 子命令在矩阵输出上方请求额外空白。使用数字参数时，它在矩阵上方添加指定行数的空行。使用 `NEWPAGE` 作为参数时，它在新页的顶部打印矩阵。`SPACE` 子命令在矩阵以透视表形式输出时不起作用。

`RLABELS` 和 `RNAMES` 子命令互斥，可为输出中的每一行提供标签。使用 `RLABELS` 时，将标签指定为逗号分隔的字符串或其他记号。使用 `RNAMES` 时，指定一个求值为字符串向量的单一表达式。无论哪种方式，如果标签多于行，多余的标签被忽略；如果行多于标签，多余的行无标签。对于以 `RLABELS` 输出到透视表的情况，标签可以是任意长度；否则，标签被截断为 8 字节。

`CLABELS` 和 `CNAMES` 子命令用于为列添加标签，工作方式类似于 `RLABELS` 和 `RNAMES` 为行添加标签。

当省略表达式时，`PRINT` 不输出矩阵。相反，它只输出 `TITLE` 上指定的文本（如果有），前面加上 `SPACE` 子命令指定的任何空白（如果有）。任何其他子命令都被忽略，并且无论 `MDISPLAY` 实际设置如何，该命令的行为都如同 `MDISPLAY` 被设为 `TEXT`。

以下语法演示了用 `PRINT` 为矩阵的行和列添加标签的两种不同方式：

    MATRIX.
    COMPUTE m={1, 2, 3; 4, 5, 6; 7, 8, 9}.
    PRINT m/RLABELS=a, b, c/CLABELS=x, y, z.

    COMPUTE rlabels={"a", "b", "c"}.
    COMPUTE clabels={"x", "y", "z"}.
    PRINT m/RNAMES=rlabels/CNAMES=clabels.
    END MATRIX.


使用 `MDISPLAY=TEXT`（默认）时，该程序输出如下（两次）：

    m
                    x        y        z
    a               1        2        3
    b               4        5        6
    c               7        8        9


在上面加上 “SET MDISPLAY=TABLES.” 后，输出变为如下（两次）：

|  | x | y | z |
| --- | --- | --- | --- |
| a | 1 | 2 | 3 |
| b | 4 | 5 | 6 |
| c | 7 | 8 | 9 |
