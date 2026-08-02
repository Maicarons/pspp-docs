### 17.16 INSERT
    
    
         INSERT [FILE=]’file_name’
            [CD={NO,YES}]
            [ERROR={CONTINUE,STOP}]
            [SYNTAX={BATCH,INTERACTIVE}]
            [ENCODING={LOCALE, ’charset_name’}].
    
    
`INSERT` 与 `INCLUDE`（见 [INCLUDE](INCLUDE.md)）类似，但更灵活一些。它使命令处理器读取一个文件，就好像它被嵌入在当前命令文件中一样。

如果指定 `CD=YES`，则在包含文件之前，当前目录会变为被包含文件所在的目录。默认设置为 ‘CD=NO’。注意，此目录会保持为当前目录，直到被显式更改（通过 `CD` 命令，或带有 ‘CD=YES’ 选项的后续 `INSERT` 命令）。即使被包含文件处理完毕，它也不会恢复为原来的设置。

如果指定 `ERROR=STOP`，则在被插入文件中遇到的错误会导致处理立即停止。否则处理在下一个命令处继续。默认设置为 `ERROR=CONTINUE`。

如果指定 `SYNTAX=INTERACTIVE`，则包含文件中的语法必须符合交互式语法约定。见 [Syntax Variants](Syntax-Variants.md)。默认设置为 `SYNTAX=BATCH`。

`ENCODING` 可选地指定被包含文件使用的字符集。其参数不区分大小写，必须采用以下形式之一：

`LOCALE`
    
系统区域设置使用的编码，或由 `SET` 命令覆盖（见 [SET](SET.md)）。在 GNU/Linux 和其他类 Unix 系统上，环境变量（_例如_ `LANG` 或 `LC_ALL`）决定系统区域设置。

charset_name
    
IANA 在 <http://www.iana.org/assignments/character-sets> 列出的字符集名称之一。一些示例是 `ASCII`（美国）、`ISO-8859-1`（西欧）、`EUC-JP`（日本）和 `windows-1252`（Windows）。并非所有系统都支持所有字符集。

`Auto,encoding`
    
自动检测语法文件是否以 Unicode 编码（如 UTF-8、UTF-16 或 UTF-32）编码。如果不是，则 PSPP 通常假定文件以 encoding（IANA 字符集名称）编码。但是，如果 encoding 为 UTF-8，且语法文件不是有效的 UTF-8，PSPP 则假定文件以 `windows-1252` 编码。

为获得最佳结果，encoding 应为 ASCII 兼容编码（最常见的区域设置编码都是 ASCII 兼容的），因为非 ASCII 兼容的编码无法与 UTF-8 自动区分。

`Auto`
`Auto,Locale`
    
如上所述的自动检测，默认编码取自系统区域设置或 `SET LOCALE` 的设置。

当未指定 ENCODING 时，默认值取自 \--syntax-encoding 命令选项（如果已指定），否则为 `Auto`。
