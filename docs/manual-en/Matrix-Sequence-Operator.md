#### 16.4.1.2 Integer Sequence Operator ‘:’

The syntax `first:last:step` yields a row vector of consecutive integers from first to last counting by step. The final `:step` is optional and defaults to 1 when omitted. 

Each of first, last, and step must be a scalar and should be an integer (any fractional part is discarded). Because ‘:’ has a high precedence, operands other than numeric literals must usually be parenthesized. 

When step is positive (or omitted) and _end < start_, or if step is negative and _end > start_, then the result is an empty matrix. If step is 0, then PSPP reports an error. 

Here are some examples: 

| 1:6 | ⇒ | {1, 2, 3, 4, 5, 6} |
| --- | --- | --- |
| 1:6:2 | ⇒ | {1, 3, 5} |
| -1:-5:-1 | ⇒ | {-1, -2, -3, -4, -5} |
| -1:-5 | ⇒ | {} |
| 2:1:0 | ⇒ | (error) |
