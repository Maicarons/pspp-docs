#### 14.2.4 Macro Arguments

本节解释如何使用宏参数。作为初始示例，以下语法定义了一个名为 `!analyze` 的宏，它将直到第一个命令终止符的所有语法作为一个参数：

    DEFINE !analyze(!POSITIONAL !CMDEND)
    DESCRIPTIVES !1.
    FREQUENCIES /VARIABLES=!1.
    !ENDDEFINE.

当调用 `!analyze` 时，它展开为一对分析命令，主体中的每个 `!1` 都被该参数替换。也就是说，这些调用：

    !analyze v1 v2 v3.
    !analyze v4 v5.

等价于以下内容：

    DESCRIPTIVES v1 v2 v3.
    FREQUENCIES /VARIABLES=v1 v2 v3.
    DESCRIPTIVES v4 v5.
    FREQUENCIES /VARIABLES=v4 v5.

宏可以接受任意数量的参数，在 DEFINE 命令的括号内描述。参数根据宏调用时其值的指定方式分为两种：

  * _位置参数_（positional argument）具有一个必需的值，位于宏名称之后。使用 `!POSITIONAL` 关键字声明位置参数。

当调用宏时，位置参数值以与其定义相同的顺序出现，位于任何关键字参数值之前。

对宏主体中位置参数的引用是编号的：`!1` 是第一个位置参数，`!2` 是第二个，依此类推。此外，`!*` 展开为所有位置参数的值，以空格分隔。

以下示例使用一个位置参数：

        DEFINE !analyze(!POSITIONAL !CMDEND)
        DESCRIPTIVES !1.
        FREQUENCIES /VARIABLES=!1.
        !ENDDEFINE.

        !analyze v1 v2 v3.
        !analyze v4 v5.

  * _关键字参数_（keyword argument）具有一个名称。在宏调用中，其值使用语法 `_name_ =_value_` 指定。名称允许关键字参数值在调用中以任意顺序出现。

在声明和调用中，关键字参数的名称不能以‘!’开头，但在宏主体中对它的引用以开头的‘!’开始。

以下示例使用了一个关键字参数，如果未给该参数赋值，则默认为 ALL：

        DEFINE !analyze_kw(vars=!DEFAULT(ALL) !CMDEND)
        DESCRIPTIVES !vars.
        FREQUENCIES /VARIABLES=!vars.
        !ENDDEFINE.

        !analyze_kw vars=v1 v2 v3.  /* Analyze specified variables.
        !analyze_kw.                /* Analyze all variables.

如果宏既有位置参数又有关键字参数，则位置参数必须位于 DEFINE 命令的首位，它们的值在宏调用中也首先出现。关键字参数可以通过在调用中省略其关键字来省略，位置参数可以通过在其应出现的位置放置命令终止符来省略。（后一种情况也会省略任何随后的位置参数以及所有关键字参数，如果有的话。）当省略某个参数时，使用默认值：要么是在 `!DEFAULT(_value_)` 中指定的值，要么是空值。

每个参数声明指定其值的格式：

`!TOKENS(_count_)`

恰好 count 个记号，例如 `!TOKENS(1)` 表示单个记号。每个标识符、数字、带引号的字符串、运算符或标点符号都是一个记号。完整定义参见 [Tokens](Tokens.md)。

`!analyze_kw` 的以下变体仅接受单个变量名（或 `ALL`）作为参数：

    DEFINE !analyze_one_var(!POSITIONAL !TOKENS(1))
    DESCRIPTIVES !1.
    FREQUENCIES /VARIABLES=!1.
    !ENDDEFINE.

    !analyze_one_var v1.

`!CHAREND('token')`

任意数量的记号直到 token，token 应为运算符或标点符号记号，如‘/’或‘+’。该记号不成为值的一部分。

使用 `!analyze_kw` 的以下变体，变量必须后跟‘/’：

    DEFINE !analyze_parens(vars=!CHARNED('/'))
    DESCRIPTIVES !vars.
    FREQUENCIES /VARIABLES=!vars.
    !ENDDEFINE.

    !analyze_parens vars=v1 v2 v3/.

`!ENCLOSE('start','end')`

任意数量、由 start 和 end 包围的记号，start 和 end 应各为运算符或标点符号记号。例如，使用 `!ENCLOSE('(',')')` 表示括在括号内的一个值。（这样的值内部不可能有右括号，即使与左括号配对也不行。）start 和 end 记号不是值的一部分。

使用 `!analyze_kw` 的以下变体，变量必须指定在括号内：

    DEFINE !analyze_parens(vars=!ENCLOSE('(',')'))
    DESCRIPTIVES !vars.
    FREQUENCIES /VARIABLES=!vars.
    !ENDDEFINE.

    !analyze_parens vars=(v1 v2 v3).

`!CMDEND`

任意数量的记号直到命令结束。这只应用于最后一个位置参数，因为它会消耗调用该宏的命令中的所有记号。

`!analyze_kw` 的以下变体将直到命令结束的所有变量名作为其参数：

    DEFINE !analyze_kw(vars=!CMDEND)
    DESCRIPTIVES !vars.
    FREQUENCIES /VARIABLES=!vars.
    !ENDDEFINE.

    !analyze_kw vars=v1 v2 v3.

默认情况下，当参数的值包含宏调用时，该调用在参数每次出现在宏主体中时展开。参数声明中的 `!NOEXPAND` 关键字抑制这种展开。参见 [Controlling Macro Expansion](Controlling-Macro-Expansion.md)。
