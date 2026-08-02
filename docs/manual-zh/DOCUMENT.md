### 17.5 DOCUMENT

    DOCUMENT documentary_text.

`DOCUMENT` 向活动数据集添加一行或多行描述性注释。以这种方式添加的文档会被保存到系统文件中。可以使用 `SYSFILE INFO` 或 `DISPLAY DOCUMENTS` 查看它们。可以使用 `DROP DOCUMENTS` 从活动数据集中移除它们。

在 `DOCUMENT` 关键字之后指定文档文本。它被原样解释——任何引号或其他标点符号都会包含在文件中。您可以将文档文本扩展到任意多行，包括使用空行分隔段落。行会被截断到 80 字节。不要忘记在行末用句点结束命令。参见 [ADD DOCUMENT](ADD-DOCUMENT.md)。
