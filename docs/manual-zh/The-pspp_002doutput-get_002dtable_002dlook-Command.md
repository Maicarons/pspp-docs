### 19.4 `get-table-look` 命令
    
    
    pspp-output [options] get-table-look source destination
    

读取 SPV 文件 source，应用任何选择选项（见 [输入选择选项](Input-Selection-Options.md)），从所选对象中选取第一个表格，从该表格中提取 TableLook，并以 TableLook XML 格式将其写入 destination（通常带 .stt 扩展名）。

将 source 设为 ‘-’ 可将默认外观写入 destination。

用户可以通过将 TableLook 文件传递给 `convert` 命令的 \--table-look 选项，来更改其他文件中表格的样式。
