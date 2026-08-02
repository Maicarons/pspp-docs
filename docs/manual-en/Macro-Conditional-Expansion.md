#### 14.2.8 Macro Conditional Expansion

The `!IF` construct may be used inside a macro body to allow for conditional expansion. It takes the following forms: 
    
    
    !IF (expression) !THEN true-expansion !IFEND
    !IF (expression) !THEN true-expansion !ELSE false-expansion !IFEND
    

When expression evaluates to true, the macro processor expands true-expansion; otherwise, it expands false-expansion, if it is present. The macro processor considers quoted or unquoted ‘0’ to be false, and anything else to be true.
