#### 15.7.2.2 针对单元格组的汇总函数

这些汇总函数在用户选定、并作为函数名一部分指定的输出区域内，对多个单元格进行汇总。支持以下基本区域，按从大到小的顺序排列：

`TABLE`

一个_小节（section）_。堆叠变量将输出的各个小节彼此分隔开。一个小节可能跨越多个层。

`LAYER`

单个层内的一个小节。

`SUBTABLE`

一个_子表（subtable）_，其内容为单个层内最内层行变量与最内层列变量配对形成的单元格。

下面展示了表表达式 `hasBeenPassengerOfDesignatedDriver > hasBeenPassengerOfDrunkDriver BY isLicensedDriver > hasHostedEventWithAlcohol + hasBeenDesignatedDriver BY gender`8 的输出是如何被划分为 `TABLE`、`LAYER` 和 `SUBTABLE` 区域的。表 ID 的每个唯一值对应一个小节，层 ID 和子表 ID 同理。因此，该输出包含两个 `TABLE` 区域（一个对应 `isLicensedDriver`，一个对应 `hasBeenDesignatedDriver`）、四个 `LAYER` 区域（对应那两个变量，按层计数），以及 12 个 `SUBTABLE` 区域。

|  |  |  |  |  | Yes | No | Yes | No |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Male |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  | licensed | desDrv |  |  |  |  |
|  |  |  |  |  | hostAlc | hostAlc |  |  |  |  |
|  |  |  |  |  | Yes | No | Yes | No |  |  |
| desPas | Yes | druPas | Yes | Table ID | 1 | 1 | 1 | 1 | 2 | 2 |
| Layer ID | 1 | 1 | 1 | 1 | 2 | 2 |  |  |  |  |
| Subtable ID | 1 | 1 | 2 | 2 | 3 | 3 |  |  |  |  |
| No | Table ID | 1 | 1 | 1 | 1 | 2 | 2 |  |  |  |
| Layer ID | 1 | 1 | 1 | 1 | 2 | 2 |  |  |  |  |
| Subtable ID | 1 | 1 | 2 | 2 | 3 | 3 |  |  |  |  |
| No | druPas | Yes | Table ID | 1 | 1 | 1 | 1 | 2 | 2 |  |
| Layer ID | 1 | 1 | 1 | 1 | 2 | 2 |  |  |  |  |
| Subtable ID | 4 | 4 | 5 | 5 | 6 | 6 |  |  |  |  |
| No | Table ID | 1 | 1 | 1 | 1 | 2 | 2 |  |  |  |
| Layer ID | 1 | 1 | 1 | 1 | 2 | 2 |  |  |  |  |
| Subtable ID | 4 | 4 | 5 | 5 | 6 | 6 |  |  |  |  |

`CTABLES` 还支持以下区域，用于在一个小节内进一步细分某个子表或某个层：

`LAYERROW`
`LAYERCOL`

分别是某个小节某一层中的一行或一列。

`ROW`
`COL`

分别是某个子表中的一行或一列。

针对上述每个区域，分类变量和标度变量均可使用以下单元格组汇总函数：

`_area_ PCT` 或 `_area_ PCT.COUNT`（“ _Area_ %”，PCT40.1）

区域内总计数的百分比。

`_area_ PCT.VALIDN`（“ _Area_ Valid N %”，PCT40.1）

区域内有效值总计数的百分比。

`_area_ PCT.TOTALN`（“ _Area_ Total N %”，PCT40.1）

区域内所有值总计数的百分比。

标度变量以及分类变量的合计与小计还可使用以下额外的单元格组汇总函数：

`_area_ PCT.SUM`（“ _Area_ Sum %”，PCT40.1）

区域内各值之和的百分比。

#### 脚注

##### (8)

这不一定是一个有意义的表。为了便于阅读，这里使用了简短的变量标签。
