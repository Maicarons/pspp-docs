### 17.17 OUTPUT

    OUTPUT MODIFY
           /SELECT TABLES
           /TABLECELLS SELECT = [ class... ]
                       FORMAT = fmt_spec.


> **请注意：** 在上面的大纲中，字符 ‘[’ 和 ‘]’ 是字面量。它们必须出现在语法中才能被正确解释。

`OUTPUT` 改变打印结果的表格的外观。特别是，它可用于设置结果显示的格式和精度。

运行此命令后，默认的表格外观参数将被修改，随后生成的每个新输出表格都会使用新的参数。

在 `/TABLECELLS SELECT =` 之后必须出现一个单元格类别列表，用方括号括起来。该列表决定应选择哪些类别的值进行修改。每个类别可以是：

RESIDUAL

残差值。默认：`F40.2`。

CORRELATION

相关系数。默认：`F40.3`。

PERCENT

百分比。默认：`PCT40.1`。

SIGNIFICANCE

检验的显著性（p 值）。默认：`F40.3`。

COUNT

计数或权重之和。对于加权数据集，默认值为权重变量的打印格式。对于未加权数据集，默认值为 F40.0。

对于表格中出现的其他大多数数值，`SET FORMAT` 可用于指定格式（参见 [SET FORMAT](SET.md#SET-FORMAT)）。

fmt_spec 的值必须是有效的输出格式（参见 [Input and Output Formats](Input-and-Output-Formats.md)）。请注意，并非所有可能的格式对所有类别都有意义。
