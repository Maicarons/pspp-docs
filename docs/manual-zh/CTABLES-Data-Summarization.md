#### 15.7.2 数据汇总

`CTABLES` 命令允许用户通过 _summary specifications_（汇总说明）来控制数据的汇总方式，该语法在 `TABLE` 子命令中变量名之后的方括号内列出一个或多个汇总函数名（可选以逗号分隔）。当所有变量都是分类变量时，可以为任一轴上最内层嵌套的变量给出汇总说明。当存在标量变量时，只有标量变量可以有汇总说明。

以下示例包含分类变量的列百分比和行百分比汇总说明，以及标量变量的均值和中位数：

    
    CTABLES
        /TABLE=age [MEAN, MEDIAN] BY gender
        /TABLE=ageGroup [COLPCT, ROWPCT] BY gender.
    

|  |  | Column % | Row % | Column % | Row % |
| --- | --- | --- | --- | --- | --- |
|  | S3a. GENDER: |  |  |  |  |
|  | Male | Female |  |  |  |
|  | Mean | Median | Mean | Median |  |
| D1. AGE: What is your age? | 46 | 45 | 50 | 52 |  |
|  |  | S3a. GENDER: |  |  |  |
|  |  | Male | Female |  |  |
| Age group | 15 or younger | .0% | . | .0% | . |
| 16 to 25 | 19.0% | 54.0% | 13.1% | 46.0% |  |
| 26 to 35 | 15.2% | 49.2% | 12.7% | 50.8% |  |
| 36 to 45 | 15.6% | 47.2% | 14.2% | 52.8% |  |
| 46 to 55 | 16.8% | 44.8% | 16.8% | 55.2% |  |
| 56 to 65 | 16.5% | 41.4% | 18.9% | 58.6% |  |
| 66 or older | 17.0% | 36.0% | 24.4% | 64.0% |  |

汇总说明可以通过在汇总函数名后附加字符串或格式说明（或两者，按此顺序）来覆盖默认标签和格式。例如：

    
    CTABLES /TABLE=ageGroup [COLPCT 'Gender %' PCT5.0,
                             ROWPCT 'Age Group %' PCT5.0]
                   BY gender.
    

|  |  | Gender % | Age Group % | Gender % | Age Group % |
| --- | --- | --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |  |  |
|  |  | Male | Female |  |  |
| Age group | 15 or younger | 0% | . | 0% | . |
| 16 to 25 | 19% | 54% | 13% | 46% |  |
| 26 to 35 | 15% | 49% | 13% | 51% |  |
| 36 to 45 | 16% | 47% | 14% | 53% |  |
| 46 to 55 | 17% | 45% | 17% | 55% |  |
| 56 to 65 | 16% | 41% | 19% | 59% |  |
| 66 or older | 17% | 36% | 24% | 64% |  |

除标准格式外，`CTABLES` 还允许用户指定以下特殊格式：

| NEGPAREN w . d | 将负数括在括号中。 | 42.96 | (42.96) |
| --- | --- | --- | --- |
| NEQUAL w . d | 添加 N= 前缀。 | N=42.96 | N=-42.96 |
| PAREN w . d | 将所有数字括在括号中。 | (42.96) | (-42.96) |
| PCTPAREN w . d | 将所有数字括在括号中，并带 ‘ % ’ 后缀。 | (42.96%) | (-42.96%) |

括号提供了一种简写方式，可将汇总说明应用于多个变量。例如，以下两个命令：

    
    CTABLES /TABLE=ageGroup[COLPCT] + membersOver16[COLPCT] BY gender.
    CTABLES /TABLE=(ageGroup + membersOver16)[COLPCT] BY gender.
    

产生如下所示的相同输出：

|  |  | Male | Female |
| --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |
|  |  | Column % | Column % |
| Age group | 15 or younger | .0% | .0% |
| 16 to 25 | 19.0% | 13.1% |  |
| 26 to 35 | 15.2% | 12.7% |  |
| 36 to 45 | 15.6% | 14.2% |  |
| 46 to 55 | 16.8% | 16.8% |  |
| 56 to 65 | 16.5% | 18.9% |  |
| 66 or older | 17.0% | 24.4% |  |
| S1. Including yourself, how many members of this household are age 16 or older? | None | .0% | .0% |
| 1 | 21.4% | 35.0% |  |
| 2 | 61.9% | 52.3% |  |
| 3 | 11.0% | 8.2% |  |
| 4 | 4.2% | 3.2% |  |
| 5 | 1.1% | .9% |  |
| 6 or more | .4% | .4% |  |

以下各节列出了可用的汇总函数。每个函数名之后给出其默认标签和格式。如果未列出格式，则默认格式为被汇总变量的打印格式。

| • 单个单元格的汇总函数 |  |  |
| --- | --- | --- |
| • 单元格组的汇总函数 |  |  |
| • 调整权重的汇总函数 |  |  |
| • 非加权汇总函数 |  |  |
