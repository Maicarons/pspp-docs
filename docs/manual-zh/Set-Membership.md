#### 7.7.5 集合成员函数

集合成员函数判断某个取值是否为某个集合的成员。它们接受一组数值参数或一组字符串参数，并产生布尔结果。

字符串比较按照 [Relational Operators](Relational-Operators.md) 中给出的规则执行。用户缺失字符串值被视为有效值。

Function: __**ANY** _( value, set [, set]…)_

如果 value 等于 set 中任意一个取值，则返回真，否则返回假。对于数值参数，如果 value 为系统缺失，或 set 中所有取值都为系统缺失，则返回系统缺失。如果 value

Function: __**RANGE** _( value, low, high [, low, high]…)_

如果 value 落在任意一个由 low 和 high（含端点）所界定区间内，则返回真，否则返回假。low 和 high 必须成对给出。如果任一 high 小于其 low，或对于数值参数，如果 value 为系统缺失，或所有 low-high 对都包含一个（或两个）系统缺失值，则返回系统缺失。如果 low 或 high 存在缺失，则该对不与 value 匹配，即使 value 等于那个非缺失的端点。
