#### 7.7.8 Time & Date Functions

For compatibility, PSPP considers dates before 15 Oct 1582 invalid. Most time and date functions will not accept earlier dates. 

| • Time and Date Concepts |  | How times & dates are defined and represented |
| --- | --- | --- |
| • Time Construction |  | TIME.{DAYS HMS} |
| • Time Extraction |  | CTIME.{DAYS HOURS MINUTES SECONDS} |
| • Date Construction |  | DATE.{DMY MDY MOYR QYR WKYR YRDAY} |
| • Date Extraction |  | XDATE.{DATE HOUR JDAY MDAY MINUTE MONTH                                        QUARTER SECOND TDAY TIME WEEK                                        WKDAY YEAR} |
| • Time and Date Arithmetic |  | DATEDIFF DATESUM |
