#### 14.2.12 Additional Notes

#### 14.2.12.1 Calling Macros from Macros

如果宏 A 的主体包含对宏 B 的调用，则该调用可以使用宏参数（包括 `!*`）和宏变量作为 B 的参数的一部分。对于 `!TOKENS` 参数，参数或变量名算作一个记号，而不论其展开为多少；对于 `!CHAREND` 和 `!ENCLOSE` 参数，分隔符仅来自调用，而非展开；`!CMDEND` 在调用命令处结束，而非在参数或变量内的任何命令结束处。

宏函数不支持作为宏调用参数的组成部分。要获得相同效果，请使用 `!LET` 定义宏变量，然后将该宏变量传递给宏。

当宏 A 调用宏 B 时，它们 `DEFINE` 命令的顺序无关紧要，只要在调用 A 时宏 B 已经定义即可。

#### 14.2.12.2 Command Terminators

宏和命令终止符需要小心处理。宏遵循交互式与批处理语法之间的语法差异（参见 [Syntax Variants](Syntax-Variants.md)），这意味着宏的解释可能根据所使用的语法模式而变化。我们在此假设使用交互模式，其中行末的‘.’是结束命令的主要方式。

`DEFINE` 命令需要以 `!ENDDEFINE` 之后的‘.’结束。如果宏主体旨在展开为完整命令，则它可能包含‘.’，但在展开为仅仅是语法片段（例如变量列表）的宏主体内部使用‘.’会导致语法错误。

`!IF` 和 `!DO` 等宏指令不以‘.’结束。

#### 14.2.12.3 Expansion Contexts

宏不会在注释内展开，无论是通过 `/*` 在行内引入的注释，还是作为单独的 COMMENT 或‘*’命令（参见 [COMMENT](COMMENT.md)）。（SPSS 确实会在 COMMENT 和‘*’中展开宏。）

宏不会在带引号的字符串内展开。

只要参数不是带引号的字符串，宏就会在 `TITLE` 和 `SUBTITLE` 命令中展开。

#### 14.2.12.4 PRESERVE and RESTORE

某些宏主体可能使用 SET 命令更改某些设置。在这种情况下，考虑使用 PRESERVE 和 RESTORE 命令来保存并随后恢复这些设置。参见 [PRESERVE and RESTORE](PRESERVE-and-RESTORE.md)。
