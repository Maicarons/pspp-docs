### 7.6 Relational Operators

The relational operators take numeric or string operands and produce Boolean results. 

Strings cannot be compared to numbers. When strings of different lengths are compared, the shorter string is right-padded with spaces to match the length of the longer string. 

The results of string comparisons, other than tests for equality or inequality, depend on the character set in use. String comparisons are case-sensitive. 

    
`a EQ b`
`a = b`
    

True if a is equal to b. 

`a LE b`
`a <= b`
    

True if a is less than or equal to b. 

`a LT b`
`a < b`
    

True if a is less than b. 

`a GE b`
`a >= b`
    

True if a is greater than or equal to b. 

`a GT b`
`a > b`
    

True if a is greater than b. 

`a NE b`
`a ~= b`
`a <> b`
    

True if a is not equal to b.
