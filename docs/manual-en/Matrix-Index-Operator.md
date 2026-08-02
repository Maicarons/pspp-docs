#### 16.4.1.3 Index Operator `()`

The result of the submatrix or indexing operator, written `m(rindex, cindex)`, contains the rows of m whose indexes are given in vector rindex and the columns whose indexes are given in vector cindex. 

In the simplest case, if rindex and cindex are both scalars, the result is also a scalar: 

| {10, 20; 30, 40}(1, 1) | ⇒ | 10 |
| --- | --- | --- |
| {10, 20; 30, 40}(1, 2) | ⇒ | 20 |
| {10, 20; 30, 40}(2, 1) | ⇒ | 30 |
| {10, 20; 30, 40}(2, 2) | ⇒ | 40 |

If the index arguments have multiple elements, then the result includes multiple rows or columns: 

| {10, 20; 30, 40}(1:2, 1) | ⇒ | {10; 30} |
| --- | --- | --- |
| {10, 20; 30, 40}(2, 1:2) | ⇒ | {30, 40} |
| {10, 20; 30, 40}(1:2, 1:2) | ⇒ | {10, 20; 30, 40} |

The special argument ‘:’ may stand in for all the rows or columns in the matrix being indexed, like this: 

| {10, 20; 30, 40}(:, 1) | ⇒ | {10; 30} |
| --- | --- | --- |
| {10, 20; 30, 40}(2, :) | ⇒ | {30, 40} |
| {10, 20; 30, 40}(:, :) | ⇒ | {10, 20; 30, 40} |

The index arguments do not have to be in order, and they may contain repeated values, like this: 

| {10, 20; 30, 40}({2, 1}, 1) | ⇒ | {30; 10} |
| --- | --- | --- |
| {10, 20; 30, 40}(2, {2; 2; 1}) | ⇒ | {40, 40, 30} |
| {10, 20; 30, 40}(2:1:-1, :) | ⇒ | {30, 40; 10, 20} |

When the matrix being indexed is a row or column vector, only a single index argument is needed, like this: 

| {11, 12, 13, 14, 15}(2:4) | ⇒ | {12, 13, 14} |
| --- | --- | --- |
| {11; 12; 13; 14; 15}(2:4) | ⇒ | {12; 13; 14} |

When an index is not an integer, PSPP discards the fractional part. It is an error for an index to be less than 1 or greater than the number of rows or columns: 

| {11, 12, 13, 14}({2.5, 4.6}) | ⇒ | {12, 14} |
| --- | --- | --- |
| {11; 12; 13; 14}(0) | ⇒ | (error) |
