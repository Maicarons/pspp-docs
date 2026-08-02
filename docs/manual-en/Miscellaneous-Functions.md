#### 7.7.9 Miscellaneous Functions

Function: __**LAG** _( variable[, n])_
    

variable must be a numeric or string variable name. `LAG` yields the value of that variable for the case n before the current one. Results in system-missing (for numeric variables) or blanks (for string variables) for the first n cases. 

`LAG` obtains values from the cases that become the new active dataset after a procedure executes. Thus, `LAG` will not return values from cases dropped by transformations such as `SELECT IF`, and transformations like `COMPUTE` that modify data will change the values returned by `LAG`. These are both the case whether these transformations precede or follow the use of `LAG`. 

If `LAG` is used before `TEMPORARY`, then the values it returns are those in cases just before `TEMPORARY`. `LAG` may not be used after `TEMPORARY`. 

If omitted, ncases defaults to 1. Otherwise, ncases must be a small positive constant integer. There is no explicit limit, but use of a large value will increase memory consumption. 

Function: __**YRMODA** _( year, month, day)_
    

year is a year, either between 0 and 99 or at least 1582. Unlike other PSPP date functions, years between 0 and 99 always correspond to 1900 through 1999. month is a month between 1 and 13\. day is a day between 0 and 31. A day of 0 refers to the last day of the previous month, and a month of 13 refers to the first month of the next year. year must be in range. year, month, and day must all be integers. 

`YRMODA` results in the number of days between 15 Oct 1582 and the date specified, plus one. The date passed to `YRMODA` must be on or after 15 Oct 1582. 15 Oct 1582 has a value of 1. 

Function: _VALUELABEL_ **( variable)**
    

Returns a string matching the label associated with the current value of variable. If the current value of variable has no associated label, then this function returns the empty string. variable may be a numeric or string variable.
