#### 7.7.8.3 检查时间的函数

这些函数接受 PSPP 时间格式的数值参数，并返回数值结果。

函数：__**CTIME.DAYS** _( time)_
    

返回 time 中包含的天数及小数天数。

函数：__**CTIME.HOURS** _( time)_
    

返回 time 中包含的小时数及小数小时数。

函数：__**CTIME.MINUTES** _( time)_
    

返回 time 中包含的分钟数及小数分钟数。

函数：__**CTIME.SECONDS** _( time)_
    

返回 time 中包含的秒数及小数秒数。（`CTIME.SECONDS` 不执行任何操作；`CTIME.SECONDS(x)` 等价于 `x`。）
