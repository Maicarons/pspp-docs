### 11.2 NUMERIC

`NUMERIC` 显式声明新的数值型变量，并可选择性地设置它们的输出格式。

    NUMERIC var_list [(fmt_spec)] [/var_list [(fmt_spec)]]…


将新数值型变量的名称指定为 var_list。如果希望设置变量的输出格式，在其名称后跟上括号内的输出格式说明（参见 [Input and Output Formats](Input-and-Output-Formats.md)）；否则默认为 F8.2。

用 `NUMERIC` 创建的变量被初始化为系统缺失值。
