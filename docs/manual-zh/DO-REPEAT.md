### 14.4 DO REPEAT

    DO REPEAT dummy_name=expansion….
            …
    END REPEAT [PRINT].

    expansion takes one of the following forms:
            var_list
            num_or_range…
            ’string’…
            ALL

    num_or_range takes one of the following forms:
            number
            num1 TO num2

`DO REPEAT` 重复一段代码块，并在每次重复时以不同的变量、数字或字符串对代码块进行文本替换。

指定一个哑变量名，后接等号（‘=’）和替换列表。替换项可以是一个现有或新变量的列表、数字、字符串，或 `ALL`（指定所有现有变量）。当指定数字时，递增的整数序列可用 `num1 TO num2` 表示，因此‘1 TO 5’是‘1 2 3 4 5’的简写。

可以指定多个哑变量。每个变量必须具有相同数量的替换项。

`DO REPEAT` 内的代码重复的次数与每个变量的替换项数量相同。第一次，代入每个哑变量的第一个值；第二次，代入每个哑变量的第二个值；依此类推。

哑变量替换的工作方式类似于宏。它们在哑变量名出现的行的任何位置都会发生。这包括命令名和子命令名，因此出现在代码块中的命令名和子命令名不应被用作哑变量标识符。哑变量替换不会发生在引号字符串、注释、未加引号的字符串（例如 `TITLE` 或 `DOCUMENT` 命令上的文本）内部，也不会发生在 `BEGIN DATA`…`END DATA` 内部。

替换仅在整个单词上发生，因此例如，哑变量 PRINT 不会被代入到单词 PRINTOUT 中。

用作替换项的新变量名不会自动作为变量创建，而只有在代码块中以会创建它们的上下文使用时才会被创建，_例如_在 `NUMERIC` 或 `STRING` 命令上，或在 `COMPUTE` 赋值的左侧。

任何命令都可以出现在 `DO REPEAT` 中，包括嵌套的 `DO REPEAT` 命令。如果 `INCLUDE` 或 `INSERT` 出现在 `DO REPEAT` 中，则替换不适用于被包含的文件。

如果在 `END REPEAT` 上指定了 `PRINT`，则替换后生成的命令应被打印到列表文件，前缀加一个加号（‘+’）。此功能尚未实现。
