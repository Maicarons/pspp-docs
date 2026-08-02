### 9.9 SYSFILE INFO


    SYSFILE INFO FILE=’file_name’ [ENCODING=’encoding’].


`SYSFILE INFO` 读取 SPSS 系统文件、SPSS/PC+ 系统文件或 SPSS 可移植文件中的字典，并显示其字典中的信息。

指定文件名或文件句柄。`SYSFILE INFO` 读取该文件并显示其字典的信息。

在可能的情况下，PSPP 会自动检测文件中字符串数据的编码。旧版 SPSS 系统文件的字符编码并非总能正确推断，而 SPSS/PC+ 系统文件不包含任何编码指示。指定 `ENCODING` 子命令并以 IANA 字符集名称作为字符串参数，以覆盖默认值；或指定 `ENCODING='DETECT'` 来分析并报告该系统文件可能有效的编码。`ENCODING` 子命令是 PSPP 的扩展。

`SYSFILE INFO` 不影响当前的活动数据集。
