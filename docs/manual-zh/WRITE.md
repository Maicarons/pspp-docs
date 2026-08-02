### 8.16 WRITE
    
    
    WRITE
            OUTFILE=’file_name’
            RECORDS=n_lines
            {NOTABLE,TABLE}
            /[line_no] arg…
    
    arg takes one of the following forms:
            ’string’ [start-end]
            var_list start-end [type_spec]
            var_list (fortran_spec)
            var_list *
    

`WRITE` 将文本或二进制数据写入输出文件。

关于语法与用法的更多信息，请见 [PRINT](PRINT.md)。`PRINT` 与 `WRITE` 仅在几个方面存在差异：

  * `WRITE` 默认使用写格式，而 `PRINT` 使用打印格式。 
  * `PRINT` 在变量之间插入一个空格（除非显式指定了格式），但 `WRITE` 在输出中从不在变量之间插入空格。 
  * `PRINT` 在它写入输出文件的每行开头插入一个空格（而 `PRINT EJECT` 在每行开头插入 ‘1’，表示应另起一页），但 `WRITE` 不会。 
  * `PRINT` 根据指定的输出格式输出系统缺失值，而 `WRITE` 将系统缺失值输出为以空格填充的字段。二进制格式是例外。 
