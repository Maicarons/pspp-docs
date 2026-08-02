#### 14.2.8 Macro Conditional Expansion

`!IF` 结构可在宏主体内部使用，以实现条件展开。它采用以下形式：

    !IF (expression) !THEN true-expansion !IFEND
    !IF (expression) !THEN true-expansion !ELSE false-expansion !IFEND

当 expression 求值为真时，宏处理器展开 true-expansion；否则，如果存在 false-expansion，则展开 false-expansion。宏处理器将带引号或不带引号的‘0’视为假，其他任何值视为真。
