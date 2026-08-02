### 8.14 PRINT SPACE

    PRINT SPACE [OUTFILE=’file_name’] [ENCODING=’encoding’] [n_lines].


`PRINT SPACE` 向输出文件打印一行或多行空行。

`OUTFILE` 子命令是可选的。它可用于将输出定向到由文件名作为字符串或文件句柄指定的文件（参见 [File Handles](File-Handles.md)）。如果未指定 OUTFILE，则输出定向到列表文件。

`ENCODING` 子命令只有在同时使用了 `OUTFILE` 时才能使用。它指定文件的字符编码。有关支持的编码信息，参见 [INSERT](INSERT.md)。

n_lines 也是可选的。如果存在，它是一个表达式（参见 [Expressions](Expressions.md)），指定要打印的空行数。该表达式必须求值为非负值。
