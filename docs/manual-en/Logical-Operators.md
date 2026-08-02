### 7.5 Logical Operators

The logical operators take logical operands and produce logical results, meaning “true or false.” Logical operators are not true Boolean operators because they may also result in a system-missing value. See [Boolean Values](Boolean-Values.md), for more information. 

    
`a AND b`
`a & b`
    

True if both a and b are true, false otherwise. If one operand is false, the result is false even if the other is missing. If both operands are missing, the result is missing. 

`a OR b`
`a | b`
    

True if at least one of a and b is true. If one operand is true, the result is true even if the other operand is missing. If both operands are missing, the result is missing. 

`NOT a`
`~ a`
    

True if a is false. If the operand is missing, then the result is missing.
