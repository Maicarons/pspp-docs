### 15.18 RELIABILITY


    RELIABILITY
            /VARIABLES=var_list
            /SCALE (name) = {var_list, ALL}
            /MODEL={ALPHA, SPLIT[(n)]}
            /SUMMARY={TOTAL,ALL}
            /MISSING={EXCLUDE,INCLUDE}


`RELIABILITY` 命令对数据进行信度分析。

`VARIABLES` 子命令是必需的。它确定要执行分析所基于的变量集合。

`SCALE` 子命令确定要计算信度的变量。如果省略 `SCALE`，则使用 `VARIABLES` 子命令中命名的所有变量进行分析。可选的参数 name 可用来为量表设置一个字符串名称。

`MODEL` 子命令确定分析的类型。如果指定 `ALPHA`，则计算该量表的 Cronbach’s Alpha（克隆巴赫 alpha 系数）。如果模型为 `SPLIT`，则变量被分为 2 个子集。可给出可选参数 n，以指定第一个子集中包含多少个变量。如果省略 n，则默认为量表中变量数的一半；若变量数为奇数，则为一半减一。默认模型是 `ALPHA`。

默认情况下，在 `VARIABLES` 子命令中给出的任意变量含有用户缺失值或系统缺失值的个案，都会被从分析中剔除。`MISSING` 子命令决定用户缺失值是纳入还是排除在分析之外。

`SUMMARY` 子命令确定要执行的汇总分析类型。目前只有一种类型：`SUMMARY=TOTAL`，它显示针对合计值进行检验的逐题项分析。

#### 15.18.1 示例 - 可靠性

在分析一项调查的结果之前——尤其是对于选择题调查——最好先了解受访者是认真考虑了答案，还是仅仅随意作答。

在下面的例子中，使用了文件 hotel.sav 中的调查结果。全部五道调查问题都纳入了信度分析。不过，在运行分析之前，必须对数据进行预处理。对调查问题的检查发现，v3 和 v5 两道题表述为负向，而其他题目为正向。为使分析有意义，所有问题必须基于同一量表。可以使用 `RECODE` 命令（参见 [RECODE](RECODE.md)），但更简单的做法是使用 `COMPUTE`（参见 [COMPUTE](COMPUTE.md)），示例 15.8 中采用的就是这种方法。

```
get file="hotel.sav".  * Recode V3 and V5 inverting the sense of the values. compute v3 = 6 - v3. compute v5 = 6 - v5.  reliability 	/variables= all 	/model=alpha.
```

**示例 15.8：** 调查应答信度调查

本例中使用了数据集中的所有变量。因此可以使用特殊关键字 ‘ALL’（参见 [BNF](BNF.md)）。



**截图 15.8：** 选中全部变量的可靠性对话框

结果 15.6 显示 Cronbach’s Alpha 为 0.11，这一数值通常被认为过低，不足以表明数据内部的一致性。这可能源于调查问题数量较少。在认真使用其结果之前，应重新设计该项调查。

| 个案 | N | 百分比 |
| --- | --- | --- |
| 有效 | 17 | 100.0% |
| 排除 | 0 | .0% |
| 合计 | 17 | 100.0% |
| Cronbach's Alpha | 项目数 N |  |
| .11 | 5 |  |

**结果 15.6：** 对 hotel.sav 执行可靠性命令的结果
