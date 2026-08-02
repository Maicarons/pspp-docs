#### 14.2.5 控制宏展开

多种因素控制着在不同情形下是否展开宏调用。在最高层级，`SET MEXPAND` 控制是否展开宏调用。默认情况下它是启用的。详见 [SET MEXPAND](SET.md#SET-MEXPAND)。

宏体可包含宏调用。默认情况下，这些会被展开。如果宏体包含 `!OFFEXPAND` 或 `!ONEXPAND` 指令，则 `!OFFEXPAND` 会禁用宏调用的展开，直到后续出现 `!ONEXPAND` 为止。

宏参数的值可包含宏调用。这些宏调用会被展开，除非该参数是用 `!NOEXPAND` 关键字声明的。

宏函数的参数是一种特殊上下文，不会展开宏调用。例如，若 `!vars` 是一个宏的名称，则 `!LENGTH(!vars)` 展开为 5；如果位置参数 1 的值为 `!vars`，则 `!LENGTH(!1)` 同样展开为 5。要在这些情况下展开宏，可使用 `!EVAL` 宏函数，例如 `!LENGTH(!EVAL(!vars))` 或 `!LENGTH(!EVAL(!1))`。详见 [宏函数](Macro-Functions.md)。

这些规则适用于宏调用，而不适用于宏体内对宏函数、宏参数以及由 `!DO` 或 `!LET` 创建的宏变量的使用，后者总是会被展开。

`SET MEXPAND` 可以出现在宏体内部，但它不会影响其所在宏的展开。请改用 `!OFFEXPAND` 和 `!ONEXPAND`。
