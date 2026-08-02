### 12.6 IF
    
    
    IF condition variable=expression.
    

or 
    
    
    IF condition vector(index)=expression.
    

The `IF` transformation conditionally assigns the value of a target expression to a target variable, based on the truth of a test expression. 

Specify a boolean-valued expression (see [Expressions](Expressions.md)) to be tested following the `IF` keyword. This expression is evaluated for each case. If the value is true, then the value of the expression is computed and assigned to the specified variable. If the value is false or missing, nothing is done. Numeric and string variables may be assigned. When a string expression’s width differs from the target variable’s width, the string result of the expression is truncated or padded with spaces on the right as necessary. The expression and variable types must match. 

The target variable may be specified as an element of a vector (see [VECTOR](VECTOR.md)). In this case, a vector index expression must be specified in parentheses following the vector name. The index expression must evaluate to a numeric value that, after rounding down to the nearest integer, is a valid index for the named vector. 

Using `IF` to assign to a variable specified on `LEAVE` (see [LEAVE](LEAVE.md)) resets the variable’s left state. Therefore, `LEAVE` should be specified following `IF`, not before. 

When `IF` is specified following `TEMPORARY` (see [TEMPORARY](TEMPORARY.md)), the `LAG` function may not be used (see [LAG](Miscellaneous-Functions.md#LAG)).
