## 18 调用 `pspp-convert`

`pspp-convert` 是 PSPP 附带的命令行实用程序。它读取 SPSS 或 SPSS/PC+ 系统文件、SPSS 便携文件或加密的 SPSS 语法文件作为输入，并将副本以不同格式写入另一个输出。概要：

    pspp-convert [options] input output
    
    pspp-convert --help
    
    pspp-convert --version
    
输入的格式在可能时自动检测。旧 SPSS 系统文件的字符编码并非总能正确猜测，而 SPSS/PC+ 系统文件不包含任何编码指示。在这种情况下，使用 `-e encoding` 指定编码。

默认情况下，输出的目标格式根据其扩展名推断：

`csv`
`txt`
    
逗号分隔值。每个值根据其变量的打印格式格式化。文件的第一行包含变量名。

`sav`
`sys`
    
SPSS 系统文件。

`por`
    
SPSS 便携文件。

`sps`
    
SPSS 语法文件。（只有加密的语法文件可以转换为此格式。）

`pspp-convert` 可以将大多数输入格式转换为大多数输出格式。加密的 SPSS 文件格式是例外：如果输入文件是加密格式，则输出文件将是相同格式（已解密）。要解密此类文件，请将加密文件指定为输入。输出将是等效的纯文本文件。这种情况下输出格式的选项会被忽略。

加密文件的密码可以通过几种不同的方式指定。如果知道密码，请使用 -p 选项（如下所述）或允许 `pspp-convert` 提示输入。如果不知道密码，请使用 -a 和 -l 选项指定如何搜索它，或使用 \--password-list 指定要尝试的密码文件。

使用 `-O format` 覆盖推断的格式或为无法识别的扩展名指定格式。

`pspp-convert` 接受以下常规选项：

-O format
\--output-format=format
    
设置输出格式，其中 format 是上面列出的扩展名之一，_例如_：-O csv。使用 \--help 列出支持的输出格式。

-c maxcases
\--cases=maxcases
    
默认情况下，所有个案都从输入复制到输出。指定此选项可将写入输出的个案数限制为 maxcases。

-e charset
\--encoding=charset
    
覆盖解释输入中字符串的编码。此选项是必要的，因为旧 SPSS 系统文件和 SPSS/PC+ 系统文件不会自行标识其编码。

-k variable…
\--keep=variable…
    
默认情况下，`pspp-convert` 包含输入文件中的所有变量。使用此选项列出要包含的特定变量；任何未列出的变量将被丢弃。输出文件中的变量也会重新排序为给定的顺序。变量列表可以像 PSPP 语法中一样使用 `TO`，_例如_ 如果字典包含连续变量 `a`、`b`、`c` 和 `d`，则 \--keep='a to d' 将包含所有这些变量（不包含其他变量）。

-d variable…
\--drop=variable…
    
从输出中丢弃指定的变量。

当 \--keep 和 \--drop 一起使用时，先处理 \--keep。

-h
\--help
    
在 stdout 上打印用法消息并退出。

-v
\--version
    
在 stdout 上打印版本信息并退出。

以下选项影响 CSV 输出：

\--recode
    
默认情况下，`pspp-convert` 将用户缺失值作为常规值写入 CSV 输出文件。使用此选项时，`pspp-convert` 将它们重新编码为系统缺失值（写入为单个空格）。

\--no-var-names
    
默认情况下，`pspp-convert` 将变量名作为输出的第一行写入。使用此选项时，`pspp-convert` 省略此行。

\--labels
    
默认情况下，`pspp-convert` 将变量的值写入 CSV 输出文件。使用此选项时，`pspp-convert` 写入值标签。

\--print-formats
    
默认情况下，`pspp-convert` 将数值变量作为纯数字写入。此选项使 `pspp-convert` 遵循变量的打印格式。

\--decimal=decimal
    
此选项设置输出中用作小数点的字符。默认值为 ‘.’。

\--delimiter=delimiter
    
此选项设置用于分隔输出中字段的字符。默认值为 ‘，’，除非小数点为 ‘，’，此时使用 ‘；’。

\--qualifier=qualifier
    
此选项设置用于引用包含分隔符的字段的字符。默认值为 ‘"’。

以下选项指定如何获取加密文件的密码：

-p password
\--password=password
    
指定用于解密加密 SPSS 系统文件或语法文件的密码。如果未指定此选项，`pspp-convert` 将在必要时交互提示输入密码。

请注意，在多用户系统上，命令行选项（包括密码）可能对其他用户可见。

与 -a（或 \--password-alphabet）和 -l（或 \--password-length）一起使用时，此选项指定搜索的起点。这可用于重新开始被中断的搜索。

-a alphabet
\--password-alphabet=alphabet
    
指定用于搜索加密文件密码的符号字母表。alphabet 可以包含单个字符和以 ‘-’ 分隔的范围。例如，-a a-z 搜索小写字母，-a A-Z0-9 搜索大写字母和数字，-a ' -~' 搜索所有可打印的 ASCII 字符。

-l max-length
\--password-length=max-length
    
指定要尝试的密码的最大长度。

\--password-list=file
    
指定要读取的包含密码列表的文件，每行一个密码。如果 file 为 -，则从 stdin 读取。
