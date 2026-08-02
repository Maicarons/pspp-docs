#### 7.7.8.5 检查日期的函数

这些函数接受 PSPP 日期或时间格式的数值参数，并返回数值结果。以下名称用于参数：

date

PSPP 日期格式的数值。

time

PSPP 时间格式的数值。

time-or-date

PSPP 时间或日期格式的数值。

Function: __**XDATE.DATE** _( time-or-date)_
    

对于时间，得到 time-or-date 所包含的整天数对应的时间。对于日期，得到对应于 time-or-date 当时或之前最近午夜的日期；即给出 time-or-date 所处的日期。

Function: __**XDATE.HOUR** _( time-or-date)_
    

对于时间，得到 time-or-date 所表示的整天数之外还剩余的整小时数。对于日期，得到对应于 time-or-date 的小时（0 到 23 之间的整数）。

Function: __**XDATE.JDAY** _( date)_
    

得到对应于 date 的年中第几天（1 到 366 之间的整数）。

Function: __**XDATE.MDAY** _( date)_
    

得到对应于 date 的月中第几天（1 到 31 之间的整数）。

Function: __**XDATE.MINUTE** _( time-or-date)_
    

得到 time-or-date 中最后一个小时之后的分钟数（0 到 59 之间的整数）。

Function: __**XDATE.MONTH** _( date)_
    

得到对应于 date 的年中第几月（1 到 12 之间的整数）。

Function: __**XDATE.QUARTER** _( date)_
    

得到对应于 date 的年中第几季度（1 到 4 之间的整数）。

Function: __**XDATE.SECOND** _( time-or-date)_
    

得到 time-or-date 中最后一个整分钟之后的整秒数（0 到 59 之间的整数）。

Function: __**XDATE.TDAY** _( date)_
    

得到从 1582 年 10 月 14 日到 date 的整天数。

Function: __**XDATE.TIME** _( date)_
    

得到对应于 date 的时刻的时间值。这是从 date 对应那天的午夜起的秒数。

Function: __**XDATE.WEEK** _( date)_
    

得到对应于 date 的年中第几周（1 到 53 之间的整数）。

Function: __**XDATE.WKDAY** _( date)_
    

得到对应于 date 的星期几（1 到 7 之间的整数），其中 1 代表星期日。

Function: __**XDATE.YEAR** _( date)_
    

返回对应于 date 的年份（1582 或更大的整数）。
