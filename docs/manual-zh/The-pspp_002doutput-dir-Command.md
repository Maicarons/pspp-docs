### 19.2 `dir` 命令
    
    
    pspp-output [options] dir file
    

在 stdout 上打印 SPV 文件 file 的目录表。默认情况下，该表列出文件中除隐藏对象以外的每个对象。关于可用于选择对象子集的选项，请见 [输入选择选项](Input-Selection-Options.md)。

以下是 `dir` 的一个附加选项，主要供 PSPP 开发人员使用：

\--member-names
    

同时显示与每个对象关联的 Zip 成员名称。
