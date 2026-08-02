#### 7.7.2 杂项数学函数

杂项数学函数接受数值参数并产生数值结果。

Function: __**ABS** _( number)_

结果为 number 的绝对值。

Function: __**MOD** _( numerator, denominator)_

返回 numerator 除以 denominator 的余数（模）。如果 numerator 为 0，则结果为 0，即使 denominator 为缺失值。如果 denominator 为 0，则结果为系统缺失值。

Function: __**MOD10** _( number)_

返回 number 除以 10 的余数。如果 number 为负数，则 MOD10(number) 为负数或零。

Function: __**RND** _( number [, mult[, fuzzbits]])_

将 number 舍入到 mult 的倍数（默认为 1）。恰好为一半的值向远离零的方向舍入，number 最低有效位中误差小于 fuzzbits 的、略低于一半的值也同样如此。如果未指定 fuzzbits，则默认值取自 SET FUZZBITS（参见 [SET FUZZBITS](SET.md#SET-FUZZBITS)），除非被覆盖，否则为 6。

Function: __**TRUNC** _( number [, mult[, fuzzbits]])_

将 number 向零方向舍入到 mult 的倍数。对于默认的 mult 为 1 的情况，这等价于丢弃 number 的小数部分。number 最低有效位中误差小于 fuzzbits、略低于 mult 倍数的值向远离零的方向舍入。如果未指定 fuzzbits，则默认值取自 SET FUZZBITS（参见 [SET FUZZBITS](SET.md#SET-FUZZBITS)），除非被覆盖，否则为 6。
