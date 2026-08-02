### 14.3 DO IF

    DO IF condition.
            …
    [ELSE IF condition.
            …
    ]…
    [ELSE.
            …]
    END IF.

`DO IF` 根据用户指定的条件，执行若干组变化中的一组。

如果指定的布尔表达式求值为真，则执行 `DO IF` 之后的代码块。如果求值为缺失，则任何代码块都不执行。如果为假，则依次测试第一个 `ELSE IF` 上的布尔表达式（如果存在），并应用相同规则。如果所有表达式都求值为假，则执行 `ELSE` 代码块（如果存在）。

当 `DO IF` 或 `ELSE IF` 在 `TEMPORARY` 之后指定时（参见 [TEMPORARY](TEMPORARY.md)），不能使用 `LAG` 函数（参见 [LAG](Miscellaneous-Functions.md#LAG)）。
