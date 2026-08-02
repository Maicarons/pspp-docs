### 11.10 FORMATS
    
    
    FORMATS var_list (fmt_spec) [var_list (fmt_spec)]….
    
    
`FORMATS` 将指定变量的打印格式和写入格式都设置为指定的格式规范。参见 [输入与输出格式](Input-and-Output-Formats.md)。

指定一个变量列表，后跟括号内的格式规范。所指定变量的打印格式和写入格式将被更改。一起列出的所有变量必须具有相同的类型，对于字符串变量，还必须具有相同的宽度。

可以在第一个列表之后包含额外的变量和格式列表。

`FORMATS` 立即生效。它不受 `DO IF` 或 `LOOP` 等条件与循环结构的影响。
