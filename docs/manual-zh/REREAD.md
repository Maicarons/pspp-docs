### 8.15 REREAD


    REREAD [FILE=handle] [COLUMN=column] [ENCODING=’encoding’].


`REREAD` 转换允许将由 `DATA LIST` 或其他输入命令已处理过的数据文件中先前的输入行重新读取，以便进一步处理。

可选的 `FILE` 子命令用于指定要重新读取其行的文件。该文件必须以文件句柄名称的形式给出（参见 [File Handles](File-Handles.md)）。如果未指定 FILE，则假定为 `DATA LIST` 上最后指定的文件（按词法顺序最后指定的文件，而非控制流顺序）。

默认情况下，被重新读取的行将被整行重新读取。通过 `COLUMN` 子命令，可以使该行的某个前缀免于被重新读取。指定一个表达式（参见 [Expressions](Expressions.md)），其求值结果为应包含在重新读取行中的起始列。列从左侧边界的第 1 列开始编号。

`ENCODING` 子命令只有在同时使用了 `FILE` 子命令时才能使用。它指定文件的字符编码。有关受支持编码的信息，请参见 [INSERT](INSERT.md)。

多次发出 `REREAD` 不会在文件中向后回退，而是会将同一行重新读取多次。
