### 11.5 SORT VARIABLES

`SORT VARIABLES` 根据所选的排序键对活动数据集字典中的变量重新排序。


    SORT VARIABLES [BY]
        (NAME | TYPE | FORMAT | LABEL | VALUES | MISSING | MEASURE
         | ROLE | COLUMNS | ALIGNMENT | ATTRIBUTE name)
        [(D)].


主要指定项是下列标识符之一，它决定变量如何排序：

NAME

按变量名排序，不区分大小写。不过，当变量名只在末尾的数字上不同时，会按数值排序。例如，`VAR5` 排在 `VAR400` 之前，尽管 ‘4’ 在 ‘5’ 之前。

TYPE

数值变量排在字符串变量之前，较短的字符串变量排在较长的字符串变量之前。

FORMAT

按打印格式对变量分组；在同一格式内，较窄的格式排在较宽的格式之前；格式和宽度相同时，小数位数较少的排在小数位数较多的之前。参见 [FORMATS](FORMATS.md)。

LABEL

没有变量标签的变量排在有变量标签的变量之前。参见 [VARIABLE LABELS](VARIABLE-LABELS.md)。

VALUES

没有值标签的变量排在有值标签的变量之前。参见 [VALUE LABELS](VALUE-LABELS.md)。

MISSING

没有缺失值的变量排在有缺失值的变量之前。参见 [MISSING VALUES](MISSING-VALUES.md)。

MEASURE

名义变量排在最先，其次是顺序变量，再次是标度变量。参见 [VARIABLE LEVEL](VARIABLE-LEVEL.md)。

ROLE

按变量的角色分组。参见 [VARIABLE ROLE](VARIABLE-ROLE.md)。

COLUMNS

按显示宽度升序排序。参见 [VARIABLE WIDTH](VARIABLE-WIDTH.md)。

ALIGNMENT

按变量的对齐方式排序，先是左对齐，然后右对齐，然后居中。参见 [VARIABLE ALIGNMENT](VARIABLE-ALIGNMENT.md)。

ATTRIBUTE name

按变量 name 属性的第一个取值排序。没有该属性的变量排在最前。参见 [VARIABLE ATTRIBUTE](VARIABLE-ATTRIBUTE.md)。

只能指定一个排序标准。排序是“稳定的”，因此要按多个标准排序，可以执行多次排序。例如，下面会主要基于对齐方式排序，对齐方式相同的变量再按显示宽度排序：


    SORT VARIABLES BY COLUMNS.
    SORT VARIABLES BY ALIGNMENT.


指定 `(D)` 可反转排序顺序。
