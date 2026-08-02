#### 15.7.1.1 分类变量

命名一个分类变量的轴表达式会按该变量的值将数据划分到各个单元格。当 `TABLE` 上命名的所有变量都是分类变量时，默认每个单元格显示其包含的个案数，因此只指定一个变量会得到一个频数表，类似于 `FREQUENCIES` 命令的输出（参见 [FREQUENCIES](FREQUENCIES.md)）：

    
    CTABLES /TABLE=ageGroup.
    

|  |  | Count |
| --- | --- | --- |
| Age group | 15 or younger | 0 |
| 16 to 25 | 1099 |  |
| 26 to 35 | 967 |  |
| 36 to 45 | 1037 |  |
| 46 to 55 | 1175 |  |
| 56 to 65 | 1247 |  |
| 66 or older | 1474 |  |

指定一个行分类变量和一个列分类变量会得到一个列联表，类似于 `CROSSTABS` 命令的输出（参见 [CROSSTABS](CROSSTABS.md)）：

    
    CTABLES /TABLE=ageGroup BY gender.
    

|  |  | Male | Female |
| --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |
|  |  | Count | Count |
| Age group | 15 or younger | 0 | 0 |
| 16 to 25 | 594 | 505 |  |
| 26 to 35 | 476 | 491 |  |
| 36 to 45 | 489 | 548 |  |
| 46 to 55 | 526 | 649 |  |
| 56 to 65 | 516 | 731 |  |
| 66 or older | 531 | 943 |  |

‘>’“嵌套”运算符将多个变量嵌套在单个轴上，例如：

    
    CTABLES /TABLE likelihoodOfBeingStoppedByPolice BY ageGroup > gender.
    

|  |  |  |  | Yes | No |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | 86. In the past year, have you hosted a social event or party where alcohol was served to adults? |  |
|  |  |  |  | Count | Count |
| Age group | 15 or younger | S3a. GENDER: | Male | 0 | 0 |
| Female | 0 | 0 |  |  |  |
| 16 to 25 | S3a. GENDER: | Male | 208 | 386 |  |
| Female | 202 | 303 |  |  |  |
| 26 to 35 | S3a. GENDER: | Male | 225 | 251 |  |
| Female | 242 | 249 |  |  |  |
| 36 to 45 | S3a. GENDER: | Male | 223 | 266 |  |
| Female | 240 | 307 |  |  |  |
| 46 to 55 | S3a. GENDER: | Male | 201 | 325 |  |
| Female | 282 | 366 |  |  |  |
| 56 to 65 | S3a. GENDER: | Male | 196 | 320 |  |
| Female | 279 | 452 |  |  |  |
| 66 or older | S3a. GENDER: | Male | 162 | 367 |  |
| Female | 243 | 700 |  |  |  |

‘+’“堆叠”运算符允许单个输出表包含多个数据分析。使用 ‘+’ 时，`CTABLES` 将输出表划分为多个 _sections_（节），每节都包含对完整数据集的一次分析。例如，以下命令分别按性别对年龄组和驾驶频率制表：

    
    CTABLES /TABLE ageGroup + freqOfDriving BY gender.
    

|  |  | Male | Female |
| --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |
|  |  | Count | Count |
| Age group | 15 or younger | 0 | 0 |
| 16 to 25 | 594 | 505 |  |
| 26 to 35 | 476 | 491 |  |
| 36 to 45 | 489 | 548 |  |
| 46 to 55 | 526 | 649 |  |
| 56 to 65 | 516 | 731 |  |
| 66 or older | 531 | 943 |  |
| 1. How often do you usually drive a car or other motor vehicle? | Every day | 2305 | 2362 |
| Several days a week | 440 | 834 |  |
| Once a week or less | 125 | 236 |  |
| Only certain times a year | 58 | 72 |  |
| Never | 192 | 348 |  |

当 ‘+’ 和 ‘>’ 一起使用时，‘>’ 的绑定更紧密。可使用括号覆盖运算符优先级。因此：

    
    CTABLES /TABLE hasConsideredReduction + hasBeenCriticized > gender.
    CTABLES /TABLE (hasConsideredReduction + hasBeenCriticized) > gender.
    

|  |  |  |  | Count |
| --- | --- | --- | --- | --- |
| 26. During the last 12 months, has there been a time when you felt you should cut down on your drinking? | Yes | 513 |  |  |
| No | 3710 |  |  |  |
| 27. During the last 12 months, has there been a time when people criticized your drinking? | Yes | S3a. GENDER: | Male | 135 |
| Female | 49 |  |  |  |
| No | S3a. GENDER: | Male | 1916 |  |
| Female | 2126 |  |  |  |
|  |  |  |  | Count |
| 26. During the last 12 months, has there been a time when you felt you should cut down on your drinking? | Yes | S3a. GENDER: | Male | 333 |
| Female | 180 |  |  |  |
| No | S3a. GENDER: | Male | 1719 |  |
| Female | 1991 |  |  |  |
| 27. During the last 12 months, has there been a time when people criticized your drinking? | Yes | S3a. GENDER: | Male | 135 |
| Female | 49 |  |  |  |
| No | S3a. GENDER: | Male | 1916 |  |
| Female | 2126 |  |  |  |
