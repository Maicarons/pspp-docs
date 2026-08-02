### 6.9 文件句柄

_文件句柄_ 是对数据文件、系统文件或便携文件的引用。最常见的情况是，文件句柄被指定为字符串形式的文件名，即用 ‘'’ 或 ‘"’ 括起来。

以 ‘|’ 开头或结尾的文件名字符串被视为向其中传送数据或从中传送数据的命令名称。您可以使用此功能，通过诸如 ‘curl’ 这样的程序通过网络读取数据（_例如_ `GET '|curl -s -S http://example.com/mydata.sav'`），通过诸如 ‘zcat’ 这样的程序从文件读取压缩数据（_例如_ `GET '|zcat mydata.sav.gz'`），以及用于许多其他目的。

PSPP 还支持使用 `FILE HANDLE` 命令声明命名文件句柄。此命令将您选择的标识符（文件句柄的名称）与文件关联。之后，文件句柄名称可以替代文件名。当 PSPP 语法多次访问一个文件时，声明命名文件句柄可简化日后更新语法以使用不同文件的过程。读取二进制格式的数据文件还需要使用 `FILE HANDLE`。更多信息请参见 [FILE HANDLE](FILE-HANDLE.md)。

在某些情况下，PSPP 必须区分文件句柄是指系统文件还是便携文件。当读取文件需要这样做时，_例如_ 作为 `GET` 或 `MATCH FILES` 的输入文件，PSPP 使用文件的内容来判断。在写入文件的上下文中，_例如_ 作为 `SAVE` 或 `AGGREGATE` 的输出文件，PSPP 根据文件名判断：如果文件名以 ‘.por’ 结尾（大小写不限），则 PSPP 写入便携文件；否则，PSPP 写入系统文件。

INLINE 作为文件句柄名被保留。它指嵌入在 `BEGIN DATA` 和 `END DATA` 之间语法文件中的“数据文件”。更多信息请参见 [BEGIN DATA](BEGIN-DATA.md)。

文件句柄所引用的文件可以在后续的 `FILE HANDLE` 命令中重新分配，前提是它首先使用 `CLOSE FILE HANDLE` 关闭。更多信息请参见 [CLOSE FILE HANDLE](CLOSE-FILE-HANDLE.md)。
