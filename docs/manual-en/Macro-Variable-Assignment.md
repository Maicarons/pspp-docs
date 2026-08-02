#### 14.2.10 Macro Variable Assignment

The `!LET` construct evaluates an expression and assigns the result to a macro variable. It may create a new macro variable or change the value of one created by a previous `!LET` or `!DO`, but it may not change the value of a macro argument. `!LET` has the following form: 
    
    
    !LET !var = expression
    

If expression is more than one token, it must be enclosed in parentheses.
