### 8.13 PRINT EJECT

    PRINT EJECT
            OUTFILE=’file_name’
            RECORDS=n_lines
            {NOTABLE,TABLE}
            /[line_no] arg…

    arg takes one of the following forms:
            ’string’ [start-end]
            var_list start-end [type_spec]
            var_list (fortran_spec)
            var_list *


`PRINT EJECT` 在列表文件或输出文件中前进到新输出页的开头。它也可以像 `PRINT` 一样输出数据。

所有 `PRINT EJECT` 子命令都是可选的。

在没有 `OUTFILE` 的情况下，`PRINT EJECT` 在列表文件中换出当前页，然后生成其他输出（如果指定了的话）。

在有 `OUTFILE` 的情况下，`PRINT EJECT` 将其输出写入指定文件。输出的第一行在第一列插入 ‘1’ 写入。通常，这是唯一的输出行。如果指定了额外的输出行，这些额外的行在第一列插入一个空格写入，与 `PRINT` 相同。

有关语法和用法的更多信息，参见 [PRINT](PRINT.md)。
