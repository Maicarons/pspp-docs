### 12.3 COMPUTE
    
    
    COMPUTE variable = expression.
    

或
    
    
    COMPUTE vector(index) = expression.
    

`COMPUTE` 将表达式的值赋给目标变量。对每个个案，表达式被求值，其值被赋给目标变量。数值变量和字符串变量均可被赋值。当字符串表达式的宽度与目标变量的宽度不同时，表达式的字符串结果会按需从右侧截断或以空格补齐。表达式与变量的类型必须匹配。

仅对数值变量而言，目标变量无需已经存在。`COMPUTE` 创建的数值变量会被赋予 `F8.2` 输出格式。字符串变量必须先声明，才能用作 `COMPUTE` 的目标。

目标变量也可指定为向量的一个元素（参见 [VECTOR](VECTOR.md)）。此时，必须在向量名后的括号中指定一个表达式索引。该表达式索引求值得出的数值在向下舍入到最接近的整数后，必须是该命名向量的有效索引。

使用 `COMPUTE` 为 `LEAVE`（参见 [LEAVE](LEAVE.md)）中指定的变量赋值时，会重置该变量的保留状态。因此，`LEAVE` 应在 `COMPUTE` 之后指定，而非之前。

`COMPUTE` 是一个转换命令。它不会导致活动数据集被读取。

当 `COMPUTE` 在 `TEMPORARY`（参见 [TEMPORARY](TEMPORARY.md)）之后指定时，不能使用 `LAG` 函数（参见 [LAG](Miscellaneous-Functions.md#LAG)）。

#### 12.3.1 COMPUTE 示例

数据集 physiology.sav 包含人员的身高和体重。就某些用途而言，仅身高或仅体重都不令人感兴趣。流行病学家往往更关注 _body mass index_（体重指数，BMI），它有时可用作临床状况的预测指标。体重指数定义为以千克计的人体重量除以以米计的人体身高的平方。4

```
get file='physiology.sav'.  * height is in mm so we must divide by 1000 to get metres. compute bmi = weight / (height/1000)**2. variable label bmi "Body Mass Index".  descriptives /weight height bmi.
```

**示例 12.3：** 根据 **weight**（体重）和 **height**（身高）计算体重指数

示例 12.3 展示了如何使用 `COMPUTE` 生成一个名为 **bmi** 的新变量，并使每个个案的值由 **weight** 和 **height** 的现有值计算得出。它还展示了如何为该新变量添加标签（参见 [VARIABLE LABELS](VARIABLE-LABELS.md)），以便在后续分析中显示更具描述性的标签，这可以从结果 12.2 中 `DESCRIPTIVES` 命令的输出看出。

```

```

**截图 12.2：** 使用对话框生成新变量并计算其值

‘=’ 号后面的表达式可以按需复杂。有关所接受语言的精确描述，请参见 [Expressions](Expressions.md)。通常直接输入代码最简单，不过如果需要，也有可用的对话框。截图 12.2 对此进行了说明。其优点之一是提供一份数学函数列表，可从中选择并粘贴到表达式中。

|  | N | Mean | Std Dev | Minimum | Maximum |
| --- | --- | --- | --- | --- | --- |
| Weight in kilograms | 40 | 72.12 | 26.70 | -55.6 | 92.1 |
| Height in millimeters | 40 | 1677.12 | 262.87 | 179 | 1903 |
| Body Mass Index | 40 | 67.46 | 274.08 | -21.62 | 1756.82 |
| Valid N (listwise) | 40 |  |  |  |  |
| Missing N (listwise) | 0 |  |  |  |  |

**结果 12.2：** 在结果中包含 **bmi** 的分析

#### 脚注

##### (4)

由于 BMI 是具有比率标度且带单位的一个量，术语“index”（指数）其实名不副实，但人们就是这么称呼它的。
