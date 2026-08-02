### 8.12 PRINT

    PRINT
            [OUTFILE=’file_name’]
            [RECORDS=n_lines]
            [{NOTABLE,TABLE}]
            [ENCODING=’encoding’]
            [/[line_no] arg…]

    arg takes one of the following forms:
            ’string’ [start]
            var_list start-end [type_spec]
            var_list (fortran_spec)
            var_list *


`PRINT` 变换将变量数据写入列表文件或输出文件。当过程导致数据被读取时，`PRINT` 执行。在 `PRINT` 之后跟随 `EXECUTE` 可以在不调用过程的情况下打印变量数据（参见 [EXECUTE](EXECUTE.md)）。

所有 `PRINT` 子命令都是可选的。如果未指定字符串或变量，`PRINT` 输出一个空行。

`OUTFILE` 子命令指定接收输出的文件。该文件可以是作为字符串的文件名，也可以是文件句柄（参见 [File Handles](File-Handles.md)）。如果不存在 `OUTFILE`，则输出发送到 PSPP 的输出列表文件。当存在 `OUTFILE` 时，输出以纯文本格式写入 file_name，在每行输出开头插入一个空格，即便是原本为空的行也是如此。

`ENCODING` 子命令只有在同时使用了 `OUTFILE` 子命令时才能使用。它指定文件的字符编码。有关支持的编码信息，参见 [INSERT](INSERT.md)。

`RECORDS` 子命令指定要输出的行数。行数可以选择用括号括起来。

`TABLE` 会使 `PRINT` 命令向列表文件输出一个表格，描述它将打印到输出文件的内容。`NOTABLE`（默认值）抑制此输出表格。

用斜杠（‘/’）引出要打印的字符串和变量。斜杠后面可选地跟一个数字，表示该输出行指定的行号。在没有此行号的情况下，指定下一行号。可以使用多个斜杠指定多行，每行对应的输出跟在各自的斜杠之后。

可以打印字面字符串。指定字符串本身即可。可选地，字符串后面可以跟一个列号，指定字符串在该行上应开始的列。否则，字符串打印在该行上的当前位置。

要打印的变量可以用与 `DATA LIST FIXED` 相同的方式指定（参见 [DATA LIST FIXED](DATA-LIST-FIXED.md)）。此外，变量列表后面可以跟一个星号（‘*’），表示变量应以它们的字典打印格式打印，并用空格分隔。后跟斜杠或命令结尾的变量列表以相同方式解释。

如果使用 FORTRAN 类型说明向后移动当前行，则文本写在该行的该位置，该行被截断到该长度，不过添加的其他文本会再次将该行延伸到该长度。
