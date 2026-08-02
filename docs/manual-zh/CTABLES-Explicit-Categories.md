#### 15.7.5.1 显式类别

要使用 `CTABLES` 显式指定要包含的类别，请在方括号内按所需排序顺序列出类别。使用空格或逗号分隔取值。未被列表覆盖的类别将被排除在分析之外。

列表中的每个元素采用以下形式之一：

`_number_`
`'_string_ '`
    

数值或字符串类别取值，用于具有相应类型的变量。

`'_date_ '`
`'_time_ '`
    

日期或时间类别取值，用于具有日期或时间打印格式的变量。

`_min_ THRU _max_`
`LO THRU _max_`
`_min_ THRU HI`
    

类别取值的范围，其中 min 和 max 各自取上述形式之一，按递增顺序。

`MISSING`
    

所有用户缺失值。（要匹配单个用户缺失值，请指定其类别取值。）

`OTHERNM`
    

未被列表中任何其他元素覆盖的任何非缺失值（无论 `OTHERNM` 在列表中置于何处）。

`&_postcompute_`
    

一个计算类别名（参见 [CTABLES Computed Categories](CTABLES-Computed-Categories.md)）。

`SUBTOTAL`
`HSUBTOTAL`
    

小计（参见 [CTABLES Totals and Subtotals](CTABLES-Totals-and-Subtotals.md)）。

如果列表中的多个元素覆盖某个给定类别，则以列表中最后一个为准。

以下示例语法和输出展示了显式类别如何限制所显示的类别：

    
    CTABLES /TABLE freqOfDriving.
    CTABLES /TABLE freqOfDriving /CATEGORIES VARIABLES=freqOfDriving [1, 2, 3].
    

|  |  | Count |
| --- | --- | --- |
| 1. How often do you usually drive a car or other motor vehicle? | Every day | 4667 |
| Several days a week | 1274 |  |
| Once a week or less | 361 |  |
| Only certain times a year | 130 |  |
| Never | 540 |  |
|  |  | Count |
| 1. How often do you usually drive a car or other motor vehicle? | Every day | 4667 |
| Several days a week | 1274 |  |
| Once a week or less | 361 |  |
