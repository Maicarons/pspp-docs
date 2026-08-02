#### 14.2.3 Macro Bodies

如前所示，宏主体可以包含 PSPP 命令的一个片段（例如变量名）。宏主体也可以包含完整的 PSPP 命令。在后一种情况下，宏主体还应包含命令终止符。

大多数 PSPP 命令可以出现在宏内部。`DEFINE` 命令本身是一个例外，因为内部的 `!ENDDEFINE` 会结束外部宏定义。为了兼容性，`BEGIN DATA`…`END DATA.` 不应在宏内部使用。

宏的主体可以调用另一个宏。以下展示了一种可行的方式：

    DEFINE !commands()
    DESCRIPTIVES !vars.
    FREQUENCIES /VARIABLES=!vars.
    !ENDDEFINE.

    * Initially define the 'vars' macro to analyze v1...v3.
    DEFINE !vars() v1 v2 v3 !ENDDEFINE.
    !commands

    * Redefine 'vars' macro to analyze different variables.
    DEFINE !vars() v4 v5 !ENDDEFINE.
    !commands

如果 `!commands` 宏将待分析的变量作为参数传入，而不是通过另一个宏，使用起来会更方便。下一节展示如何实现这一点。
