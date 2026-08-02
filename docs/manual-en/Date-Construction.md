#### 7.7.8.4 Functions that Produce Dates

These functions take numeric arguments and give numeric results that represent dates. Arguments taken by these functions are: 

day
    

Refers to a day of the month between 1 and 31. Day 0 is also accepted and refers to the final day of the previous month. Days 29, 30, and 31 are accepted even in months that have fewer days and refer to a day near the beginning of the following month. 

month
    

Refers to a month of the year between 1 and 12. Months 0 and 13 are also accepted and refer to the last month of the preceding year and the first month of the following year, respectively. 

quarter
    

Refers to a quarter of the year between 1 and 4. The quarters of the year begin on the first day of months 1, 4, 7, and 10. 

week
    

Refers to a week of the year between 1 and 53. 

yday
    

Refers to a day of the year between 1 and 366. 

year
    

Refers to a year, 1582 or greater. Years between 0 and 99 are treated according to the epoch set on SET EPOCH, by default beginning 69 years before the current date (see [SET EPOCH](SET.md#SET-EPOCH)). 

If these functions’ arguments are out-of-range, they are correctly normalized before conversion to date format. Non-integers are rounded toward zero. 

Function: __**DATE.DMY** _( day, month, year)_
Function: __**DATE.MDY** _( month, day, year)_
    

Results in a date value corresponding to the midnight before day day of month month of year year. 

Function: __**DATE.MOYR** _( month, year)_
    

Results in a date value corresponding to the midnight before the first day of month month of year year. 

Function: __**DATE.QYR** _( quarter, year)_
    

Results in a date value corresponding to the midnight before the first day of quarter quarter of year year. 

Function: __**DATE.WKYR** _( week, year)_
    

Results in a date value corresponding to the midnight before the first day of week week of year year. 

Function: __**DATE.YRDAY** _( year, yday)_
    

Results in a date value corresponding to the day yday of year year.
