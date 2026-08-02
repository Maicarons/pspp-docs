#### 7.7.8.5 Functions that Examine Dates

These functions take numeric arguments in PSPP date or time format and give numeric results. These names are used for arguments: 

date
    

A numeric value in PSPP date format. 

time
    

A numeric value in PSPP time format. 

time-or-date
    

A numeric value in PSPP time or date format. 

Function: __**XDATE.DATE** _( time-or-date)_
    

For a time, results in the time corresponding to the number of whole days date-or-time includes. For a date, results in the date corresponding to the latest midnight at or before date-or-time; that is, gives the date that date-or-time is in. 

Function: __**XDATE.HOUR** _( time-or-date)_
    

For a time, results in the number of whole hours beyond the number of whole days represented by date-or-time. For a date, results in the hour (as an integer between 0 and 23) corresponding to date-or-time. 

Function: __**XDATE.JDAY** _( date)_
    

Results in the day of the year (as an integer between 1 and 366) corresponding to date. 

Function: __**XDATE.MDAY** _( date)_
    

Results in the day of the month (as an integer between 1 and 31) corresponding to date. 

Function: __**XDATE.MINUTE** _( time-or-date)_
    

Results in the number of minutes (as an integer between 0 and 59) after the last hour in time-or-date. 

Function: __**XDATE.MONTH** _( date)_
    

Results in the month of the year (as an integer between 1 and 12) corresponding to date. 

Function: __**XDATE.QUARTER** _( date)_
    

Results in the quarter of the year (as an integer between 1 and 4) corresponding to date. 

Function: __**XDATE.SECOND** _( time-or-date)_
    

Results in the number of whole seconds after the last whole minute (as an integer between 0 and 59) in time-or-date. 

Function: __**XDATE.TDAY** _( date)_
    

Results in the number of whole days from 14 Oct 1582 to date. 

Function: __**XDATE.TIME** _( date)_
    

Results in the time of day at the instant corresponding to date, as a time value. This is the number of seconds since midnight on the day corresponding to date. 

Function: __**XDATE.WEEK** _( date)_
    

Results in the week of the year (as an integer between 1 and 53) corresponding to date. 

Function: __**XDATE.WKDAY** _( date)_
    

Results in the day of week (as an integer between 1 and 7) corresponding to date, where 1 represents Sunday. 

Function: __**XDATE.YEAR** _( date)_
    

Returns the year (as an integer 1582 or greater) corresponding to date.
