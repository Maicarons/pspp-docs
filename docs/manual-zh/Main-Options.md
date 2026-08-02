### 3.1 Main Options

以下是所有选项的摘要，按类型分组，随后按相同顺序给出解释。

在表中，长选项的参数的也适用于任何对应的短选项。

_非选项参数_

    syntax-file

_输出选项_

    -o, --output=output-file
    -O option=value
    -O format=format
    -O device={terminal|listing}
    --no-output
    --table-look=file
    -e, --error-file=error-file

_语言选项_

    -I, --include=dir
    -I-, --no-include
    -b, --batch
    -i, --interactive
    -r, --no-statrc
    -a, --algorithm={compatible|enhanced}
    -x, --syntax={compatible|enhanced}
    --syntax-encoding=encoding

_信息选项_

    -h, --help
    -V, --version

_其他选项_

    -s, --safer
    --testing-mode

syntax-file

读取并执行指定的语法文件。如果未指定语法文件，PSPP 会提示输入命令。如果指定了任何语法文件，PSPP 默认在运行完它们后退出，但你可以通过指定‘-’作为额外的语法文件使其提示输入命令。

-o output-file

将输出写入 output-file。PSPP 有几个不同的输出驱动程序，支持各种格式的输出（使用 \--help 列出可用格式）。多次指定此选项可生成多个输出文件，可能采用不同格式。

使用‘-’作为 output-file 将输出写入标准输出。

如果未使用 -o 选项，则 PSPP 将文本和 CSV 输出写入标准输出，并将其他类型的输出写入名称基于格式的文件，例如 PDF 输出为 pspp.pdf。

-O option=value

为前面的 -o 配置的输出文件设置选项。大多数选项特定于特定的输出格式。下面列出一些通用适用的选项。

-O format=format

PSPP 使用 -o 上给出的文件名的扩展名来选择输出格式。使用此选项通过指定替代格式来覆盖此选择，例如 -o pspp.out -O format=html 将 HTML 写入名为 pspp.out 的文件。使用 \--help 列出可用格式。

-O device={terminal|listing}

设置 PSPP 是否将前面的 -o 配置的输出设备视为终端或列表设备。这会影响将哪些输出发送到该设备，由 SET 命令的输出路由子命令配置（参见 [SET](SET.md)）。默认情况下，写入标准输出的输出被视为终端设备，其他输出被视为列表设备。

\--no-output

在没有同时使用时 -o 或 -O 的情况下完全禁用输出。如果使用了这些选项之一，\--no-output 不起作用。

\--table-look=file

从 file 读取表格样式并将其应用于所有 PSPP 表格输出。该文件应为 TableLook .stt 或 .tlo 文件。PSPP 在当前目录中搜索 file，然后在用户主目录中的 .pspp/looks 中搜索，然后在 PSPP 数据目录内的 looks 子目录中搜索（通常为 /usr/local/share/pspp）。如果 PSPP 无法按给定名称找到 file，它还会尝试添加 .stt 扩展名。

当未指定此选项时，PSPP 使用上述算法查找 default.stt，否则回退到默认的内置样式。

在 PSPP 语法中使用 `SET TLOOK` 会覆盖命令行上设置的样式（参见 [SET](SET.md)）。

-e error-file
\--error-file=error-file

配置一个文件，以纯文本格式接收 PSPP 的错误、警告和提示消息。使用‘-’作为 error-file 将消息写入标准输出。在没有这些选项的情况下，默认错误文件是标准输出，但如果输出设备写入标准输出（或另一个终端），则会抑制此默认行为，以避免每条消息打印两次。使用‘none’作为 error-file 显式抑制默认值。

-I dir
\--include=dir

将 dir 追加到由 `INCLUDE`（参见 [INCLUDE](INCLUDE.md)）和 `INSERT`（参见 [INSERT](INSERT.md)）命令搜索的目录集合中。

-I-
\--no-include

从包含路径中清除所有目录，包括默认插入到包含路径中的目录。默认的包含路径是 .（当前目录），随后是用户主目录中的 .pspp，随后是 PSPP 的系统配置目录（通常为 /etc/pspp 或 /usr/local/etc/pspp）。

-b
\--batch
-i
\--interactive

这些选项分别强制语法文件以批处理模式或交互模式解释，而不是默认的“auto”模式。有关差异说明，参见 [Syntax Variants](Syntax-Variants.md)。

-r
\--no-statrc

默认情况下，在启动时 PSPP 在包含路径（如上所述）中搜索名为 rc 的文件，如果找到，则运行其中的命令。此选项禁用此行为。

-a {enhanced|compatible}
\--algorithm={enhanced|compatible}

使用 `enhanced`（默认）时，PSPP 对统计过程使用已实现的最佳算法。然而，使用 `compatible` 时，PSPP 在某些情况下会使用较差的算法，以产生与专有程序 SPSS 相同的结果。

某些命令具有在每个命令基础上覆盖此设置的子命令。

-x {enhanced|compatible}
\--syntax={enhanced|compatible}

使用 `enhanced`（默认）时，PSPP 接受其自身超出专有程序 SPSS 兼容范围的扩展。使用 `compatible` 时，PSPP 拒绝使用这些扩展的语法。

\--syntax-encoding=encoding

将 encoding 指定为命令行上命名的语法文件的编码。该编码也成为 PSPP 会话期间由 `INCLUDE` 和 `INSERT` 命令读取的其他语法文件的默认编码。有关 encoding 的可接受形式，参见 [INSERT](INSERT.md)。

\--help

打印描述 PSPP 命令行语法和可用设备格式的消息，然后退出。

-V
\--version

打印一条简要消息，列出 PSPP 的版本、你不拥有的担保、复制条件和版权，以及用于错误报告的电子邮件地址，然后退出。

-s
\--safer

禁用某些不安全操作。这包括 `ERASE` 和 `HOST` 命令，以及将管道用作输入和输出文件。

\--testing-mode

调用启发式方法以协助测试 PSPP。供 `make check` 及类似脚本使用。
