#### 14.2.2 Introduction

`DEFINE` 命令创建一个_宏_（macro），它是称为宏_主体_（body）的一段 PSPP 语法的名称。在 `DEFINE` 命令之后，语法可以通过名称任意次_调用_该宏。每次调用都将该宏的主体替换（或_展开_）到调用所在的位置，就如同主体被写在那个位置一样。

以下语法定义了一个名为 `!vars` 的宏，它展开为变量名 `v1 v2 v3`。宏的名称以‘!’开头，这对宏名是可选的。宏名后面的 `()` 是必需的：

    DEFINE !vars()
    v1 v2 v3
    !ENDDEFINE.

以下是给定上述定义后调用 `!vars` 的两种方式：

    DESCRIPTIVES !vars.
    FREQUENCIES /VARIABLES=!vars.

通过宏展开，上述调用等价于以下内容：

    DESCRIPTIVES v1 v2 v3.
    FREQUENCIES /VARIABLES=v1 v2 v3.

`!vars` 宏展开为一个固定的主体。宏可以有更复杂的内容：

  * 宏_参数_（arguments），每当它们被命名时就被替换进主体。宏参数的值在每次调用时指定。参见 [Macro Arguments](Macro-Arguments.md)。
  * 宏_函数_（functions），在宏被调用时展开。参见 [Macro Functions](Macro-Functions.md)。
  * `!IF` 结构，用于条件展开。参见 [Macro Conditional Expansion](Macro-Conditional-Expansion.md)。
  * 两种形式的 `!DO` 结构，用于遍历数值范围或记号集合。参见 [Macro Loops](Macro-Loops.md)。
  * `!LET` 结构，用于赋值给宏变量。参见 [Macro Variable Assignment](Macro-Variable-Assignment.md)。

许多与宏相关的标识符以‘!’开头，该字符通常不允许出现在标识符中。这些标识符仅保留供宏使用，这有助于避免它们与其他种类的标识符混淆。

以下各节提供关于宏语法和语义的更多细节。
