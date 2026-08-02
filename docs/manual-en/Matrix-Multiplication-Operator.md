#### 16.4.1.6 Matrix Multiplication Operator ‘*’

If `A` is an _m ×n_ matrix and `B` is an _n ×p_ matrix, then `A*B` is the _m ×p_ matrix multiplication product `C`. PSPP reports an error if the number of columns in `A` differs from the number of rows in `B`. 

The `*` operator performs elementwise multiplication (see above) if one of its operands is a scalar. 

No built-in operator yields the inverse of matrix multiplication. Instead, multiply by the result of `INV` or `GINV`. 

Some examples: 

| {1, 2, 3} * {4; 5; 6} | ⇒ | 32 |
| --- | --- | --- |
| {4; 5; 6} * {1, 2, 3} | ⇒ | {4, 8, 12; 5, 10, 15; 6, 12, 18} |
