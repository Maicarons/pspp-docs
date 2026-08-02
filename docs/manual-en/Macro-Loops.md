#### 14.2.9 Macro Loops

The body of a macro may include two forms of loops: loops over numerical ranges and loops over tokens. Both forms expand a _loop body_ multiple times, each time setting a named _loop variable_ to a different value. The loop body typically expands the loop variable at least once. 

The MITERATE setting (see [SET MITERATE](SET.md#SET-MITERATE)) limits the number of iterations in a loop. This is a safety measure to ensure that macro expansion terminates. PSPP issues a warning when the MITERATE limit is exceeded. 

#### Loops Over Ranges
    
    
    !DO !var = start !TO end [!BY step]
      body
    !DOEND
    

A loop over a numerical range has the form shown above. start, end, and step (if included) must be expressions with numeric values. The macro processor accepts both integers and real numbers. The macro processor expands body for each numeric value from start to end, inclusive. 

The default value for step is 1. If step is positive and _first > last_, or if step is negative and _first < last_, then the macro processor doesn’t expand the body at all. step may not be zero. 

#### Loops Over Tokens
    
    
    !DO !var !IN (expression)
      body
    !DOEND
    

A loop over tokens takes the form shown above. The macro processor evaluates expression and expands body once per token in the result, substituting the token for !var each time it appears.
