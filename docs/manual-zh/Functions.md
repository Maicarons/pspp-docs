### 7.7 函数

PSPP 函数提供使用简单运算符无法实现的高级数学能力。函数有共同的语法：每个函数由函数名、左括号、一个或多个参数和右括号组成。

函数名不是保留字。它们的名称只有在后跟左括号时才被特殊处理，因此 ‘EXP(10)’ 指常数 _e_ 的 10 次方，但 ‘EXP’ 本身指名为 `EXP` 的变量的值。

以下各节详细描述每个函数。

| • 数学 |  | EXP LG10 LN LNGAMMA SQRT |
| --- | --- | --- |
| • 杂项数学 |  | ABS MOD MOD10 RND TRUNC |
| • 三角函数 |  | ACOS ARCOS ARSIN ARTAN ASIN ATAN COS SIN TAN |
| • 缺失值函数 |  | MISSING NMISS NVALID SYSMIS VALUE |
| • 集合成员关系 |  | ANY RANGE |
| • 统计函数 |  | CFVAR MAX MEAN MEDIAN MIN SD SUM VARIANCE |
| • 字符串函数 |  | CONCAT INDEX LENGTH LOWER LPAD LTRIM NUMBER REPLACE RINDEX RPAD RTRIM STRING STRUNC SUBSTR UPCASE |
| • 时间与日期 |  | CTIME.xxx DATE.xxx TIME.xxx XDATE.xxx DATEDIFF DATESUM |
| • 杂项函数 |  | LAG YRMODA VALUELABEL |
| • 统计分布函数 |  | PDF CDF SIG IDF RV NPDF NCDF |
