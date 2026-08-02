#### 7.7.8.4 生成日期的函数

这些函数接受数值参数，并返回表示日期的数值结果。这些函数所接受的参数如下：

day

指一个月中 1 到 31 日之间的某一天。也接受第 0 天，指前一个月的最后一天。即使在天数较少的月份中，也接受 29、30 和 31 日，它们指紧接着下个月初附近的某一天。

month

指一年中 1 到 12 月之间的某个月。也接受第 0 月和 13 月，分别指前一年的最后一月和后一年的第一个月。

quarter

指一年中 1 到 4 季度之间的某个季度。一年中的季度从 1、4、7、10 月的第一天开始。

week

指一年中 1 到 53 周之间的某一周。

yday

指一年中 1 到 366 日之间的某一天。

year

指年份，1582 或更大。0 到 99 之间的年份按照 SET EPOCH 上设置的纪元处理，默认从该当前日期往前 69 年开始（参见 [SET EPOCH](SET.md#SET-EPOCH)）。

如果这些函数的参数超出范围，在转换为日期格式之前会被正确归一化。非整数向零舍入。

Function: __**DATE.DMY** _( day, month, year)_
Function: __**DATE.MDY** _( month, day, year)_
    

得到对应于 year 年 month 月 day 日之前午夜的日期值。

Function: __**DATE.MOYR** _( month, year)_
    

得到对应于 year 年 month 月第一天之前午夜的日期值。

Function: __**DATE.QYR** _( quarter, year)_
    

得到对应于 year 年 quarter 季度第一天之前午夜的日期值。

Function: __**DATE.WKYR** _( week, year)_
    

得到对应于 year 年 week 周第一天之前午夜的日期值。

Function: __**DATE.YRDAY** _( year, yday)_
    

得到对应于 year 年 yday 日的日期值。
