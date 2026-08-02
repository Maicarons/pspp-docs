#### 7.7.6 Statistical Functions

Statistical functions compute descriptive statistics on a list of values. Some statistics can be computed on numeric or string values; other can only be computed on numeric values. Their results have the same type as their arguments. The current case’s weighting factor (see [WEIGHT](WEIGHT.md)) has no effect on statistical functions. 

These functions’ argument lists may include entire ranges of variables using the `var1 TO var2` syntax. 

Unlike most functions, statistical functions can return non-missing values even when some of their arguments are missing. Most statistical functions, by default, require only 1 non-missing value to have a non-missing return, but `CFVAR`, `SD`, and `VARIANCE` require 2. These defaults can be increased (but not decreased) by appending a dot and the minimum number of valid arguments to the function name. For example, `MEAN.3(X, Y, Z)` would only return non-missing if all of ‘X’, ‘Y’, and ‘Z’ were valid. 

Function: __**CFVAR** _( number, number[, …])_
    

Results in the coefficient of variation of the values of number. (The coefficient of variation is the standard deviation divided by the mean.) 

Function: __**MAX** _( value, value[, …])_
    

Results in the value of the greatest value. The values may be numeric or string. 

Function: __**MEAN** _( number, number[, …])_
    

Results in the mean of the values of number. 

Function: __**MEDIAN** _( number, number[, …])_
    

Results in the median of the values of number. Given an even number of nonmissing arguments, yields the mean of the two middle values. 

Function: __**MIN** _( number, number[, …])_
    

Results in the value of the least value. The values may be numeric or string. 

Function: __**SD** _( number, number[, …])_
    

Results in the standard deviation of the values of number. 

Function: __**SUM** _( number, number[, …])_
    

Results in the sum of the values of number. 

Function: __**VARIANCE** _( number, number[, …])_
    

Results in the variance of the values of number.
