#### 16.4.1.5 Elementwise Binary Operators

The elementwise binary operators require their operands to be matrices with the same dimensions. Alternatively, if one operand is a scalar, then its value is treated as if it were duplicated to the dimensions of the other operand. The result is a matrix of the same size as the operands, in which each element is the result of the applying the operator to the corresponding elements of the operands. 

The elementwise binary operators are listed below. 

  * The arithmetic operators, for familiar arithmetic operations: 

`+`
    

Addition. 

`-`
    

Subtraction. 

`*`
    

Multiplication, if one operand is a scalar. (Otherwise this is matrix multiplication, described below.) 

`/` or `&/`
    

Division. 

`&*`
    

Multiplication. 

`&**`
    

Exponentiation. 

  * The relational operators, whose results are 1 when a comparison is true and 0 when it is false: 

`<` or `LT`
    

Less than. 

`<=` or `LE`
    

Less than or equal. 

`=` or `EQ`
    

Equal. 

`>` or `GT`
    

Greater than. 

`>=` or `GE`
    

Greater than or equal. 

`<>` or `~=` or `NE`
    

Not equal. 

  * The logical operators, which treat positive operands as true and nonpositive operands as false. They yield 0 for false and 1 for true: 

`AND`
    

True if both operands are true. 

`OR`
    

True if at least one operand is true. 

`XOR`
    

True if exactly one operand is true. 

Examples: 

| 1 + 2 | ⇒ | 3 |
| --- | --- | --- |
| 1 + {3; 4} | ⇒ | {4; 5} |
| {66, 77; 88, 99} + 5 | ⇒ | {71, 82; 93, 104} |
| {4, 8; 3, 7} + {1, 0; 5, 2} | ⇒ | {5, 8; 8, 9} |
| {1, 2; 3, 4} < {4, 3; 2, 1} | ⇒ | {1, 1; 0, 0} |
| {1, 3; 2, 4} >= 3 | ⇒ | {0, 1; 0, 1} |
| {0, 0; 1, 1} AND {0, 1; 0, 1} | ⇒ | {0, 0; 0, 1} |
