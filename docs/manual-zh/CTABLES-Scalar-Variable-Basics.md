#### 15.7.1.2 标量变量

对于分类变量，`CTABLES` 将表按每个类别划分为一个单元格。对于标度变量，`CTABLES` 则计算落入某个单元格的取值的汇总度量，默认是均值。例如，如果指定的唯一变量是标度变量，则输出为一个保存了所有数据均值的单元格：

    
    CTABLES /TABLE age.
    

|  | Mean |
| --- | --- |
| D1. AGE: What is your age? | 48 |

标度变量可以与分类变量嵌套。以下示例展示了按性别和语言组的调查受访者平均年龄：

    
    CTABLES /TABLE gender > age BY region.
    

|  |  |  | English | Spanish |
| --- | --- | --- | --- | --- |
|  |  |  | Was this interview conducted in English or Spanish? |  |
|  |  |  | Mean | Mean |
| D1. AGE: What is your age? | S3a. GENDER: | Male | 46 | 37 |
| Female | 51 | 39 |  |  |

标度变量与分类变量的嵌套顺序会影响表的标签，但不影响表中显示的数据。以下示例展示了当标度变量与分类变量的嵌套顺序互换时输出的变化：

    
    CTABLES /TABLE age > gender BY region.
    

|  |  |  | English | Spanish |
| --- | --- | --- | --- | --- |
|  |  |  | Was this interview conducted in English or Spanish? |  |
|  |  |  | Mean | Mean |
| S3a. GENDER: | Male | D1. AGE: What is your age? | 46 | 37 |
| Female | D1. AGE: What is your age? | 51 | 39 |  |

每个节中只能出现一个标度变量；也就是说，标度变量不能直接或间接地嵌套在标度变量内部。标度变量只能出现在 `TABLE` 中的一个轴上。
