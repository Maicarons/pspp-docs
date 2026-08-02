#### 14.2.10 Macro Variable Assignment

`!LET` 结构求值一个表达式并将结果赋给一个宏变量。它可以创建一个新的宏变量，或更改之前由 `!LET` 或 `!DO` 创建的宏变量的值，但它不能更改宏参数的值。`!LET` 采用以下形式：

    !LET !var = expression

如果 expression 不止一个记号，则必须用括号括起来。
