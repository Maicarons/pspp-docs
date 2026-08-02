#### 16.4.1.7 Matrix Exponentiation Operator `**`

The result of `A**B` is defined as follows when `A` is a square matrix and `B` is an integer scalar: 

  * For `B > 0`, `A**B` is `A*…*A`, where there are `B` ‘A’s. (PSPP implements this efficiently for large `B`, using exponentiation by squaring.) 
  * For `B < 0`, `A**B` is `INV(A**(-B))`. 
  * For `B = 0`, `A**B` is the identity matrix. 

PSPP reports an error if `A` is not square or `B` is not an integer. 

Examples: 

| {2, 5; 1, 4}**3 | ⇒ | {48, 165; 33, 114} |
| --- | --- | --- |
| {2, 5; 1, 4}**0 | ⇒ | {1, 0; 0, 1} |
| 10*{4, 7; 2, 6}**-1 | ⇒ | {6, -7; -2, 4} |
