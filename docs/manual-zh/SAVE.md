### 9.6 SAVE


    SAVE
            /OUTFILE={’file_name’,file_handle}
            /UNSELECTED={RETAIN,DELETE}
            /{UNCOMPRESSED,COMPRESSED,ZCOMPRESSED}
            /PERMISSIONS={WRITEABLE,READONLY}
            /DROP=var_list
            /KEEP=var_list
            /VERSION=version
            /RENAME=(src_names=target_names)…
            /NAMES
            /MAP


`SAVE` 过程将活动数据集中的字典和数据写入系统文件。

OUTFILE 是唯一必需的子命令。将待写入的系统文件指定为字符串文件名或文件句柄（参见 [File Handles](File-Handles.md)）。

默认情况下，被 FILTER 排除的个案也会写入系统文件。通过在 `UNSELECTED` 子命令上指定 `DELETE` 可将它们排除。指定 `RETAIN` 则显式采用默认行为。

`UNCOMPRESSED`、`COMPRESSED` 和 `ZCOMPRESSED` 子命令决定系统文件的压缩级别：

`UNCOMPRESSED`

数据不被压缩。每个数值占用 8 字节磁盘空间。每个字符串值按每列宽度 1 字节计，向上取整为 8 字节的倍数。

`COMPRESSED`

数据使用一种简单算法压缩。介于 -99 到 151（含）之间的每个整数数值，或系统缺失值，占用 1 字节磁盘空间。仅由空格组成的字符串的每一 8 字节片段占用 1 字节。任何其他数值或 8 字节字符串片段占用 9 字节磁盘空间。

`ZCOMPRESSED`

数据使用 RFC 1951 中规定的“deflate”压缩算法（与 `gzip` 使用的算法相同）压缩。以该压缩级别写入的文件无法被 PSPP 0.8.1 及更早版本，或 SPSS 20 及更早版本读取。

`COMPRESSED` 是默认的压缩级别。`SET` 命令（参见 [SET](SET.md)）可以更改这一默认值。

`PERMISSIONS` 子命令指定新系统文件的权限。默认值是 WRITEABLE，创建具有读写权限的文件。READONLY 创建只读访问的文件。

默认情况下，活动数据集字典中的所有变量都会写入系统文件。`DROP` 子命令可用于指定不写入的变量列表。相反，KEEP 指定要写入的变量，所有未指定的变量都不写入。

通常变量以其活动数据集中的同名保存到系统文件。使用 `RENAME` 子命令可更改这些名称。在括号内指定变量名列表，后跟等号（‘=’）以及它们应重命名成的名称。单个 `RENAME` 子命令中可以包含多个用括号括起来的变量名组。可以使用形如 `/RENAME=(A B=B A)` 的 `RENAME` 子命令交换变量名。

`RENAME` 子命令的另一种语法允许省略括号。使用这种方式时，一次只能重命名一个变量。例如 `/RENAME=A=B`。这种替代语法已弃用。

`DROP`、`KEEP` 和 `RENAME` 按从左到右的顺序执行。它们各自可以出现任意多次。`SAVE` 从不修改活动数据集。`DROP`、`KEEP` 和 `RENAME` 只影响写入磁盘的系统文件。

`VERSION` 子命令指定文件格式的版本。有效版本为 2 和 3。默认版本是 3。在版本 2 系统文件中，长于 8 字节的变量名会被截断。除此之外两个版本完全相同。

`NAMES` 和 `MAP` 子命令目前被忽略。

`SAVE` 会导致数据被读取。它是一个过程。
