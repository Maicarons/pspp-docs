#### 16.4.1.4 Unary Operators

The unary operators take a single operand of any dimensions and operate on each of its elements independently. The unary operators are: 

`-`
    

Inverts the sign of each element. 

`+`
    

No change. 

`NOT`
    

Logical inversion: each positive value becomes 0 and each zero or negative value becomes 1. 

Examples: 

| -{1, -2; 3, -4} | ⇒ | {-1, 2; -3, 4} |
| --- | --- | --- |
| +{1, -2; 3, -4} | ⇒ | {1, -2; 3, -4} |
| NOT {1, 0; -1, 1} | ⇒ | {0, 1; 1, 0} |
