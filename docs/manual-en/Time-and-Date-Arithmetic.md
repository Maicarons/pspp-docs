#### 7.7.8.6 Time and Date Arithmetic

Ordinary arithmetic operations on dates and times often produce sensible results. Adding a time to, or subtracting one from, a date produces a new date that much earlier or later. The difference of two dates yields the time between those dates. Adding two times produces the combined time. Multiplying a time by a scalar produces a time that many times longer. Since times and dates are just numbers, the ordinary addition and subtraction operators are employed for these purposes. 

Adding two dates does not produce a useful result. 

Dates and times may have very large values. Thus, it is not a good idea to take powers of these values; also, the accuracy of some procedures may be affected. If necessary, convert times or dates in seconds to some other unit, like days or years, before performing analysis. 

PSPP supplies a few functions for date arithmetic: 

Function: __**DATEDIFF** _( date2, date1, unit)_
    

Returns the span of time from date1 to date2 in terms of unit, which must be a quoted string, one of ‘years’, ‘quarters’, ‘months’, ‘weeks’, ‘days’, ‘hours’, ‘minutes’, and ‘seconds’. The result is an integer, truncated toward zero. 

One year is considered to span from a given date to the same month, day, and time of day the next year. Thus, from Jan. 1 of one year to Jan. 1 the next year is considered to be a full year, but Feb. 29 of a leap year to the following Feb. 28 is not. Similarly, one month spans from a given day of the month to the same day of the following month. Thus, there is never a full month from Jan. 31 of a given year to any day in the following February. 

Function: __**DATESUM** _( date, quantity, unit[, method])_
    

Returns date advanced by the given quantity of the specified unit, which must be one of the strings ‘years’, ‘quarters’, ‘months’, ‘weeks’, ‘days’, ‘hours’, ‘minutes’, and ‘seconds’. 

When unit is ‘years’, ‘quarters’, or ‘months’, only the integer part of quantity is considered. Adding one of these units can cause the day of the month to exceed the number of days in the month. In this case, the method comes into play: if it is omitted or specified as ‘closest’ (as a quoted string), then the resulting day is the last day of the month; otherwise, if it is specified as ‘rollover’, then the extra days roll over into the following month. 

When unit is ‘weeks’, ‘days’, ‘hours’, ‘minutes’, or ‘seconds’, the quantity is not rounded to an integer and method, if specified, is ignored.
