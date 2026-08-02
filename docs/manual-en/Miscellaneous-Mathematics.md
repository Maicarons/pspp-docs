#### 7.7.2 Miscellaneous Mathematical Functions

Miscellaneous mathematical functions take numeric arguments and produce numeric results. 

Function: __**ABS** _( number)_
    

Results in the absolute value of number. 

Function: __**MOD** _( numerator, denominator)_
    

Returns the remainder (modulus) of numerator divided by denominator. If numerator is 0, then the result is 0, even if denominator is missing. If denominator is 0, the result is system-missing. 

Function: __**MOD10** _( number)_
    

Returns the remainder when number is divided by 10. If number is negative, MOD10(number) is negative or zero. 

Function: __**RND** _( number [, mult[, fuzzbits]])_
    

Rounds number and rounds it to a multiple of mult (by default 1). Halves are rounded away from zero, as are values that fall short of halves by less than fuzzbits of errors in the least-significant bits of number. If fuzzbits is not specified then the default is taken from SET FUZZBITS (see [SET FUZZBITS](SET.md#SET-FUZZBITS)), which is 6 unless overridden. 

Function: __**TRUNC** _( number [, mult[, fuzzbits]])_
    

Rounds number to a multiple of mult, toward zero. For the default mult of 1, this is equivalent to discarding the fractional part of number. Values that fall short of a multiple of mult by less than fuzzbits of errors in the least-significant bits of number are rounded away from zero. If fuzzbits is not specified then the default is taken from SET FUZZBITS (see [SET FUZZBITS](SET.md#SET-FUZZBITS)), which is 6 unless overridden.
