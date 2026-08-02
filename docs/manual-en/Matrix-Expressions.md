#### 16.4.1 Matrix Expressions

Many matrix commands use expressions. A matrix expression may use the following operators, listed in descending order of operator precedence. Within a single level, operators associate from left to right. 

  * Function call `()` and matrix construction `{}`
  * Indexing `()`
  * Unary `+` and `-`
  * Integer sequence `:`
  * Exponentiation `**` and `&**`
  * Multiplication `*` and `&*`, and division `/` and `&/`
  * Addition `+` and subtraction `-`
  * Relational `< <= = >= > <>`
  * Logical `NOT`
  * Logical `AND`
  * Logical `OR` and `XOR`

See [Matrix Functions](Matrix-Functions.md), for the available matrix functions. The remaining operators are described in more detail below. 

Expressions appear in the matrix language in some contexts where there would be ambiguity whether ‘/’ is an operator or a separator between subcommands. In these contexts, only the operators with higher precedence than ‘/’ are allowed outside parentheses. Later sections call these _restricted expressions_. 

| • Matrix Construction Operator {} |  |  |
| --- | --- | --- |
| • Integer Sequence Operator ‘ : ’ |  |  |
| • Index Operator () |  |  |
| • Unary Operators |  |  |
| • Elementwise Binary Operators |  |  |
| • Matrix Multiplication Operator ‘ * ’ |  |  |
| • Matrix Exponentiation Operator ** |  |  |
