### 17.15 INCLUDE
    
    
            INCLUDE [FILE=]’file_name’ [ENCODING=’encoding’].
    
    

`INCLUDE` 使 PSPP 命令处理器读取一个额外的命令文件，就好像它被完整包含在当前命令文件中一样。如果在被包含文件中遇到错误，则命令处理停止，不再处理更多命令。包含文件可以任意深度嵌套，直至可用内存的上限。

`INSERT` 命令（见 [INSERT](INSERT.md)）是比 `INCLUDE` 更灵活的替代方案。`INCLUDE` 命令的作用与指定了 `ERROR=STOP CD=NO SYNTAX=BATCH` 的 `INSERT` 相同。

可选的 `ENCODING` 子命令含义与 `INSERT` 中的相同。
