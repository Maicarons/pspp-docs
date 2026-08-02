#### 7.7.8 时间与日期函数

为保持兼容性，PSPP 认为 1582 年 10 月 15 日之前的日期无效。大多数时间与日期函数不接受更早的日期。

| • 时间与日期概念 |  | 时间与日期如何定义与表示 |
| --- | --- | --- |
| • 时间构造 |  | TIME.{DAYS HMS} |
| • 时间提取 |  | CTIME.{DAYS HOURS MINUTES SECONDS} |
| • 日期构造 |  | DATE.{DMY MDY MOYR QYR WKYR YRDAY} |
| • 日期提取 |  | XDATE.{DATE HOUR JDAY MDAY MINUTE MONTH                                        QUARTER SECOND TDAY TIME WEEK                                        WKDAY YEAR} |
| • 时间与日期算术 |  | DATEDIFF DATESUM |
