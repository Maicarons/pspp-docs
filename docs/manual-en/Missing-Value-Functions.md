#### 7.7.4 Missing-Value Functions

Missing-value functions take various numeric arguments and yield various types of results. Except where otherwise stated below, the normal rules of evaluation apply within expression arguments to these functions. In particular, user-missing values for numeric variables are converted to system-missing values. 

Function: __**MISSING** _( expr)_
    

When expr is simply the name of a numeric variable, returns 1 if the variable has the system-missing value or if it is user-missing. For any other value 0 is returned. If expr takes another form, the function returns 1 if the value is system-missing, 0 otherwise. 

Function: __**NMISS** _( expr [, expr]…)_
    

Each argument must be a numeric expression. Returns the number of system-missing values in the list, which may include variable ranges using the `var1 TO var2` syntax. 

Function: __**NVALID** _( expr [, expr]…)_
    

Each argument must be a numeric expression. Returns the number of values in the list that are not system-missing. The list may include variable ranges using the `var1 TO var2` syntax. 

Function: __**SYSMIS** _( expr)_
    

Returns 1 if expr has the system-missing value, 0 otherwise. 

Function: __**VALUE** _( variable)_
Function: __**VALUE** _( vector(index))_
    

Prevents the user-missing values of the variable or vector element from being transformed into system-missing values, and always results in its actual value, whether it is valid, user-missing, or system-missing.
