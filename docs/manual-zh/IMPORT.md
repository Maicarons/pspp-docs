### 9.5 IMPORT
    
    
    IMPORT
            /FILE=’file_name’
            /TYPE={COMM,TAPE}
            /DROP=var_list
            /KEEP=var_list
            /RENAME=(src_names=target_names)…
    
    
`IMPORT` 转换会清空活动数据集的字典和数据，并用系统文件或便携文件中的字典和数据替换它们。

`FILE` 子命令是唯一必需的子命令，它将要读取的便携文件指定为文件名字符串或文件句柄（见 [文件句柄](File-Handles.md)）。

`TYPE` 子命令目前未被使用。

`DROP`、`KEEP` 和 `RENAME` 遵循 `GET`（见 [GET](GET.md)）所用的语法。

`IMPORT` 不会导致数据被读取，只会读取字典。数据在稍后执行过程时读取。

使用 `IMPORT` 读取系统文件是 PSPP 的扩展功能。
