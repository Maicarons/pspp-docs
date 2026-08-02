#### 16.4.1.1 Matrix Construction Operator `{}`

Use the `{``}` operator to construct matrices. Within the curly braces, commas separate elements within a row and semicolons separate rows. The following examples show a _2×3_ matrix, a _1×4_ row vector, a _3×1_ column vector, and a scalar. 

| {1, 2, 3; 4, 5, 6} | ⇒ | [1  2  3] [4  5  6] |
| --- | --- | --- |
| {3.14, 6.28, 9.24, 12.57} | ⇒ | [3.14  6.28  9.42  12.57] |
| {1.41; 1.73; 2} | ⇒ | [1.41] [1.73] [2.00] |
| {5} | ⇒ | 5 |

Curly braces are not limited to holding numeric literals. They can contain calculations, and they can paste together matrices and vectors in any way as long as the result is rectangular. For example, if ‘m’ is matrix `{1, 2; 3, 4}`, ‘r’ is row vector `{5, 6}`, and ‘c’ is column vector `{7, 8}`, then curly braces can be used as follows: 

| {m, c; r, 10} | ⇒ | [1 2  7] [3 4  8] [5 6 10] |
| --- | --- | --- |
| {c, 2 * c, T(r)} | ⇒ | [7 14 5] [8 16 6] |

The final example above uses the transposition function `T`.
