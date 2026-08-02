### 9.7 SAVE DATA COLLECTION


    SAVE DATA COLLECTION
            /OUTFILE={’file_name’,file_handle}
            /METADATA={’file_name’,file_handle}
            /{UNCOMPRESSED,COMPRESSED,ZCOMPRESSED}
            /PERMISSIONS={WRITEABLE,READONLY}
            /DROP=var_list
            /KEEP=var_list
            /VERSION=version
            /RENAME=(src_names=target_names)…
            /NAMES
            /MAP


与 `SAVE` 一样，`SAVE DATA COLLECTION` 将活动数据集中的字典和数据写入系统文件。此外，它还会将元数据写入一个额外的 XML 元数据文件。

OUTFILE 是必需的。将待写入的系统文件指定为字符串文件名或文件句柄（参见 [File Handles](File-Handles.md)）。

METADATA 也是必需的。将待写入的元数据文件指定为字符串文件名或文件句柄。元数据文件习惯上使用 .mdd 扩展名。

此命令的当前实现为实验性。它只输出近似的元数据文件格式。如有问题请报告缺陷。

其他子命令均为可选。它们的含义与 `SAVE` 命令中的相同。

`SAVE DATA COLLECTION` 会导致数据被读取。它是一个过程。
