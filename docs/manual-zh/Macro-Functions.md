#### 14.2.6 Macro Functions

宏主体可以使用宏函数操纵语法。宏函数接受记号作为参数，并展开为字符序列。

宏函数的参数形式受限。它们只能是单个记号（例如标识符或字符串）、宏参数或宏函数调用。因此，以下是有效的宏参数：

    x    5.0    x    !1    "5 + 6"    !CONCAT(x,y)

而以下不是：

    x y    5+6

宏函数展开为字符序列。当这些字符串进一步作为字符串处理时，例如使用 `!LENGTH`，任意字符串都是有效的。当它们被解释为 PSPP 语法时，例如当展开成为命令的一部分时，它们需要对该用途有效。例如，如果展开 `It's` 成为 PSPP 命令的一部分，则 `!UNQUOTE("It's")` 会产生错误，因为它包含不成对的单引号，但 `!LENGTH(!UNQUOTE("It's"))` 展开为 4。

以下是可用的宏函数。每个函数的文档都包含形式为 `call → expansion` 的示例。

Macro Function: **!BLANKS** _(count)_

展开为 count 个未加引号的空格，其中 count 是一个非负整数。在引号之外，任意正数个空格是等价的；对于带引号的空格字符串，请使用 `!QUOTE(!BLANKS(count))`。

在下面的示例中，‘_’代表一个空格以使结果可见。

    !BLANKS(0)                  → empty
    !BLANKS(1)                  → _
    !BLANKS(2)                  → __
    !QUOTE(!BLANKS(5))          → '_____'

Macro Function: **!CONCAT** _(arg…)_

展开为所有参数的连接。在连接之前，每个带引号的字符串参数都会被去引号，如同应用了 `!UNQUOTE`。这允许“记号拼接”，将两个（或更多）记号组合成一个：

    !CONCAT(x, y)                → xy
    !CONCAT('x', 'y')            → xy
    !CONCAT(12, 34)              → 1234
    !CONCAT(!NULL, 123)          → 123

`!CONCAT` 经常用于从前缀后跟数字（或许还有后缀）构造一系列相似的变量名。例如：

    !CONCAT(x, 0)                → x0
    !CONCAT(x, 0, y)             → x0y

标识符记号必须以字母（或‘#’或‘@’）开头，这意味着尝试使用数字作为标识符的第一部分会产生一对不同的记号，而不是单个记号。例如：

    !CONCAT(0, x)                → 0 x
    !CONCAT(0, x, y)             → 0 xy

Macro Function: **!EVAL** _(arg)_

在 arg 中展开宏调用。如果 arg 是一个宏的名称或展开为宏的宏参数，这尤其有用，因为宏函数的参数默认不会被展开（参见 [Controlling Macro Expansion](Controlling-Macro-Expansion.md)）。

以下示例假设 `!vars` 是一个展开为 `a b c` 的宏：

    !vars                        → a b c
    !QUOTE(!vars)                → '!vars'
    !EVAL(!vars)                 → a b c
    !QUOTE(!EVAL(!vars))         → 'a b c'

这些示例还假设参数 `!1` 的值为 `!vars`：

    !1                           → a b c
    !QUOTE(!1)                   → '!vars'
    !EVAL(!1)                    → a b c
    !QUOTE(!EVAL(!1))            → 'a b c'

Macro Function: **!HEAD** _(arg)_
Macro Function: **!TAIL** _(arg)_

`!HEAD` 展开为 arg 未加引号版本中的第一个记号，`!TAIL` 展开为第一个记号之后的所有记号。

    !HEAD('a b c')               → a
    !HEAD('a')                   → a
    !HEAD(!NULL)                 → empty
    !HEAD('')                    → empty

    !TAIL('a b c')               → b c
    !TAIL('a')                   → empty
    !TAIL(!NULL)                 → empty
    !TAIL('')                    → empty

Macro Function: **!INDEX** _(haystack, needle)_

在 haystack 中查找 needle。如果存在，展开为其首次出现的从 1 开始的索引；如果不存在，展开为 0。

    !INDEX(banana, an)           → 2
    !INDEX(banana, nan)          → 3
    !INDEX(banana, apple)        → 0
    !INDEX("banana", nan)        → 4
    !INDEX("banana", "nan")      → 0
    !INDEX(!UNQUOTE("banana"), !UNQUOTE("nan")) → 3

Macro Function: **!LENGTH** _(arg)_

展开为表示 arg 中字符数的数字记号。

    !LENGTH(123)                 → 3
    !LENGTH(123.00)              → 6
    !LENGTH( 123 )               → 3
    !LENGTH("123")               → 5
    !LENGTH(xyzzy)               → 5
    !LENGTH("xyzzy")             → 7
    !LENGTH("xy""zzy")           → 9
    !LENGTH(!UNQUOTE("xyzzy"))   → 5
    !LENGTH(!UNQUOTE("xy""zzy")) → 6
    !LENGTH(!1)                  → 5 if !1 is a b c
    !LENGTH(!1)                  → 0 if !1 is empty
    !LENGTH(!NULL)               → 0

Macro Function: **!NULL**

展开为空字符序列。

    !NULL                        → empty
    !QUOTE(!NULL)                → ''

Macro Function: **!QUOTE** _(arg)_
Macro Function: **!UNQUOTE** _(arg)_

`!QUOTE` 函数展开为其参数被单引号包围的形式，并将参数内部的任何单引号翻倍，以确保它是字符串的有效 PSPP 语法。如果参数已经是带引号的字符串，`!QUOTE` 原样展开它。

给定带引号的字符串参数，`!UNQUOTED` 函数展开为字符串的内容，去掉引号并将任何双写的引号缩减为单引号。如果参数不是带引号的字符串，`!UNQUOTE` 原样展开该参数。

    !QUOTE(123.0)                → '123.0'
    !QUOTE( 123 )                → '123'
    !QUOTE('a b c')              → 'a b c'
    !QUOTE("a b c")              → "a b c"
    !QUOTE(!1)                   → 'a ''b'' c' if !1 is a 'b' c

    !UNQUOTE(123.0)              → 123.0
    !UNQUOTE( 123 )              → 123
    !UNQUOTE('a b c')            → a b c
    !UNQUOTE("a b c")            → a b c
    !UNQUOTE(!1)                 → a 'b' c if !1 is a 'b' c

    !QUOTE(!UNQUOTE(123.0))      → '123.0'
    !QUOTE(!UNQUOTE( 123 ))      → '123'
    !QUOTE(!UNQUOTE('a b c'))    → 'a b c'
    !QUOTE(!UNQUOTE("a b c"))    → 'a b c'
    !QUOTE(!UNQUOTE(!1))         → 'a ''b'' c' if !1 is a 'b' c

Macro Function: **!SUBSTR** _(arg, start[, count])_

展开为 arg 从 1 开始位置 start 起的子串。如果给定 count，它会限制展开中的字符数；如果省略，则展开延伸到 arg 的末尾。

    !SUBSTR(banana, 3)           → nana
    !SUBSTR(banana, 3, 3)        → nan
    !SUBSTR("banana", 1, 3)         → error ("ba is not a valid token)
    !SUBSTR(!UNQUOTE("banana"), 3) → nana
    !SUBSTR("banana", 3, 3)      → ana

    !SUBSTR(banana, 3, 0)        → empty
    !SUBSTR(banana, 3, 10)       → nana
    !SUBSTR(banana, 10, 3)       → empty

Macro Function: **!UPCASE** _(arg)_

展开为 arg 的未加引号版本，其中所有字母转换为大写。

    !UPCASE(freckle)             → FRECKLE
    !UPCASE('freckle')           → FRECKLE
    !UPCASE('a b c')             → A B C
    !UPCASE('A B C')             → A B C
