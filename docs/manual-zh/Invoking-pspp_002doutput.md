## 19 调用 `pspp-output`

`pspp-output` 是 PSPP 附带的命令行实用程序。它支持对 SPSS 查看器或 .spv 文件（此处称为 SPV 文件）执行多种操作。SPSS 16 及更高版本写入 SPV 文件以表示其输出编辑器的内容。

SPSS 15 及更早版本使用 .spo 文件。`pspp-output` 不支持此格式。

`pspp-output` 可以通过以下方式调用：
    
    
    pspp-output detect file
    
    pspp-output [options] dir file
    
    pspp-output [options] convert source destination
    
    pspp-output [options] get-table-look source destination
    
    pspp-output [options] convert-table-look source destination
    
    pspp-output --help
    
    pspp-output --version
    
    
下面分别介绍每种形式。`pspp-output` 还有几种未文档化的命令形式，开发人员可能会发现它们在调试时很有用。

| • pspp-output detect 命令 |  |  |
| --- | --- | --- |
| • pspp-output dir 命令 |  |  |
| • pspp-output convert 命令 |  |  |
| • pspp-output get-table-look 命令 |  |  |
| • pspp-output convert-table-look 命令 |  |  |
| • 输入选择选项 |  |  |
