### 19.3 `convert` 命令
    
    
    pspp-output [options] convert source destination
    

读取 SPV 文件 source 并将其转换为另一种格式，将输出写入 destination。

默认情况下，destination 的目标格式是根据其扩展名推断的，方式与 `pspp` 程序对其输出文件的处理相同。详情请见 [调用 PSPP](Invoking-PSPP.md)。

关于可用于选择要包含在输出中的对象子集的选项，请见 [输入选择选项](Input-Selection-Options.md)。以下是可接受的其他附加选项：

-O format=format
    

覆盖根据输出文件扩展名推断的格式。使用 \--help 可列出可用格式。关于可用输出格式的详细信息，请见 [调用 PSPP](Invoking-PSPP.md)。

-O option=value
    

为输出文件格式设置一个选项。关于可用输出选项的详细信息，请见 [调用 PSPP](Invoking-PSPP.md)。

-F
\--force
    

默认情况下，如果 source 已损坏或无法以其他方式处理，则不会写入 destination。使用 -F 或 \--force 时，即使有错误，也会尽最大可能写入 destination。

\--table-look=file
    

从 file 读取一种表格样式，并将其应用到所有输出表格。该文件应为 TableLook .stt 或 .tlo 文件。

\--use-page-setup
    

默认情况下，`convert` 命令对 destination 使用默认的页面设置（例如页面大小和页边距），或者在使用 -O 选项指定时，使用其所指定的页面设置。指定此选项可忽略这些页面设置来源，而优先使用嵌入在 SPV 中的页面设置（如果存在）。
