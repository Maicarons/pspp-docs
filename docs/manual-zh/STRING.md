### 11.3 STRING

`STRING` 创建新的字符串变量。


    STRING var_list (fmt_spec) [/var_list (fmt_spec)] […].


指定要创建的变量名列表，后跟括号中所需的输出格式说明（参见 [Input and Output Formats](Input-and-Output-Formats.md)）。变量宽度由指定的输出格式隐含确定。所创建的变量会被初始化为空格。

如果要创建多个具有不同输出格式的变量，可以使用两条或更多条独立的 `STRING` 命令，也可以指定更多的变量列表与格式说明对，每对之间用斜杠（‘/’）与前面分隔。

下面的例子是创建三个字符串变量的一种方式；其中两个变量格式为 A24，另一个为 A80：


    STRING firstname lastname (A24) / address (A80).


下面是达到相同结果的另一种方式：


    STRING firstname lastname (A24).
    STRING address (A80).


… 还有另一种方式：


    STRING firstname (A24).
    STRING lastname (A24).
    STRING address (A80).
