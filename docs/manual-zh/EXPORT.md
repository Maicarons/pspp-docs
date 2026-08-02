### 9.2 EXPORT
    
    
    EXPORT
            /OUTFILE=’file_name’
            /UNSELECTED={RETAIN,DELETE}
            /DIGITS=n
            /DROP=var_list
            /KEEP=var_list
            /RENAME=(src_names=target_names)…
            /TYPE={COMM,TAPE}
            /MAP
    
    
`EXPORT` 过程将活动数据集的字典和数据写入指定的便携文件。

默认情况下，使用 FILTER 排除的个案会被写入文件。可以通过在 `UNSELECTED` 子命令上指定 DELETE 来排除它们。指定 RETAIN 使默认行为显式化。

便携文件以 30 进制表示实数。整数总是以使其精确所需的最大精度表示。非整数默认以机器的最大自然精度表示（在许多机器上约为 15 位十进制数字）。如果许多数字需要这么多位数，便携文件的大小可能会显著增加。作为替代，`DIGITS` 子命令可用于指定要写入的小数位数精度。`DIGITS` 仅适用于非整数。

`OUTFILE` 子命令是唯一必需的子命令，它将要写入的便携文件指定为文件名字符串或文件句柄（见 [文件句柄](File-Handles.md)）。

`DROP`、`KEEP` 和 `RENAME` 遵循与 `SAVE` 过程相同的格式（见 [SAVE](SAVE.md)）。

`TYPE` 子命令指定便携文件中使用的字符集。其值目前未被使用。

`MAP` 子命令目前被忽略。

`EXPORT` 是一个过程。它会导致活动数据集被读取。
