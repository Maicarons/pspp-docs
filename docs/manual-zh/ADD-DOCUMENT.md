### 17.1 ADD DOCUMENT
    
    
    ADD DOCUMENT
        ’line one’ ’line two’ … ’last line’ .
    
    
`ADD DOCUMENT` 向活动数据集添加一行或多行描述性注释。以这种方式添加的文档会保存到系统文件中。可以使用 `SYSFILE INFO` 或 `DISPLAY DOCUMENTS` 查看它们。可以使用 `DROP DOCUMENTS` 将其从活动数据集中移除。

每行文档文本必须用引号括起来，且长度不得超过 80 字节。参见 [DOCUMENT](DOCUMENT.md)。
