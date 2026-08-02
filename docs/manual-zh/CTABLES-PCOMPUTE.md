#### 15.7.10.1 PCOMPUTE
    
    
    /PCOMPUTE &_postcompute_ =EXPR(_expression_)
    

`PCOMPUTE` 子命令必须位于第一个 `TABLE` 命令之前，用于定义计算类别。它是可选的，可使用任意多次以定义多个后计算。

每个 `PCOMPUTE` 定义一个后计算。其语法由一个用于标识后计算的名称（作为以 ‘&’ 为前缀的 PSPP 标识符）、后接 ‘=’ 以及括在 `EXPR(…)` 中的后计算表达式组成。后计算表达式包含：

`[_category_]`
    

这种形式求值为 _category_ 的汇总统计量，例如 `[1]` 求值为与类别 1 关联的汇总统计量的值。_category_ 可以是一个数字、带引号的字符串，或带引号的日期或时间值。给定后计算的所有类别必须具有相同的形式。该类别必须出现在使用此后计算的所有 `CATEGORIES` 列表中。

`[_min_ THRU _max_]`
`[LO THRU _max_]`
`[_min_ THRU HI]`
`MISSING`
`OTHERNM`
    

这些形式求值为用相同语法指定的类别的汇总统计量，如前文所述（参见 [CTABLES Explicit Category List](CTABLES-Explicit-Categories.md#CTABLES-Explicit-Category-List)）。该类别必须出现在使用此后计算的所有 `CATEGORIES` 列表中。

`SUBTOTAL`
    

小计类别的汇总统计量。仅当包含此后计算的 `CATEGORIES` 列表恰好只有一个小计时，才允许使用这种形式。

`SUBTOTAL[_index_]`
    

小计类别 _index_ 的汇总统计量，其中 1 为第一个小计，2 为第二个，依此类推。这种形式可用于具有任意数量小计的 `CATEGORIES` 列表。

`TOTAL`
    

总计的汇总统计量。包含此后计算的 `CATEGORIES` 列表必须启用了总计。

`_a_ + _b_`
`_a_ - _b_`
`_a_ * _b_`
`_a_ / _b_`
`_a_ ** _b_`
    

这些形式对后计算表达式 _a_ 和 _b_ 的值执行算术运算。适用通常的运算符优先级规则。

`_number_`
    

后计算表达式中可以使用数值常量。

`(_a_)`
    

括号可覆盖运算符优先级。

后计算不与任何特定变量关联。相反，它可以在任何合适变量的 `CATEGORIES` 中被引用（例如，只有字符串变量才适合引用字符串类别的后计算表达式，只有带小计的变量才适合引用小计的表达式，……）。

通常一个具名后计算只定义一次，但如果后面的 `PCOMPUTE` 用与前面相同的名称重新定义了某个后计算，则以后面的为准。

以下语法和输出展示了 `PCOMPUTE` 如何计算小计之上的总计，将“Frequent Drivers”和“Infrequent Drivers”两个小计相加，形成“All Drivers”后计算。它还展示了如何计算并显示一个百分比，此处为报告从未驾驶的有效回答的百分比。它使用 `PPROPERTIES`（参见 [CTABLES PPROPERTIES](CTABLES-PPROPERTIES.md)）以 `PCT` 格式显示后者。

    
    CTABLES
        /PCOMPUTE &all_drivers=EXPR([1 THRU 2] + [3 THRU 4])
        /PPROPERTIES &all_drivers LABEL='All Drivers'
        /PCOMPUTE &pct_never=EXPR([5] / ([1 THRU 2] + [3 THRU 4] + [5]) * 100)
        /PPROPERTIES &pct_never LABEL='% Not Drivers' FORMAT=COUNT PCT40.1
        /TABLE=freqOfDriving BY gender
        /CATEGORIES VARIABLES=freqOfDriving
                                 [1 THRU 2, SUBTOTAL='Frequent Drivers',
                                  3 THRU 4, SUBTOTAL='Infrequent Drivers',
                                  &all_drivers, 5, &pct_never,
                                  MISSING, SUBTOTAL='Not Drivers or Missing'].
    

|  |  | Male | Female |
| --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |
|  |  | Count | Count |
| 1. How often do you usually drive a car or other motor vehicle? | Every day | 2305 | 2362 |
| Several days a week | 440 | 834 |  |
| Frequent Drivers | 2745 | 3196 |  |
| Once a week or less | 125 | 236 |  |
| Only certain times a year | 58 | 72 |  |
| Infrequent Drivers | 183 | 308 |  |
| All Drivers | 2928 | 3504 |  |
| Never | 192 | 348 |  |
| % Not Drivers | 6.2% | 9.0% |  |
| Don't know | 3 | 5 |  |
| Refused | 9 | 10 |  |
| Not Drivers or Missing | 204 | 363 |  |
