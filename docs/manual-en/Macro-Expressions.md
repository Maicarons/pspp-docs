#### 14.2.7 Macro Expressions

Macro expressions are used in conditional expansion and loops, which are described in the following sections. A macro expression may use the following operators, listed in descending order of operator precedence: 

`()`
    

Parentheses override the default operator precedence. 

`!EQ !NE !GT !LT !GE !LE = ~= <> > < >= <=`
    

Relational operators compare their operands and yield a Boolean result, either ‘0’ for false or ‘1’ for true. 

These operators always compare their operands as strings. This can be surprising when the strings are numbers because, e.g., `1 < 1.0` and `10 < 2` both evaluate to ‘1’ (true). 

Comparisons are case sensitive, so that `a = A` evaluates to ‘0’ (false). 

`!NOT ~`
`!AND &`
`!OR |`
    

Logical operators interpret their operands as Boolean values, where quoted or unquoted ‘0’ is false and anything else is true, and yield a Boolean result, either ‘0’ for false or ‘1’ for true. 

Macro expressions do not include any arithmetic operators. 

An operand in an expression may be a single token (including a macro argument name) or a macro function invocation. Either way, the expression evaluator unquotes the operand, so that `1 = '1'` is true.
