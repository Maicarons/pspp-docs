### 8.1 BEGIN DATA
    
    
    BEGIN DATA.
    …
    END DATA.
    
    
`BEGIN DATA` 和 `END DATA` 可用于在 PSPP 语法文件中嵌入原始 ASCII 数据。在 `BEGIN DATA` 之前必须先使用 `DATA LIST` 或其他输入过程（参见 [DATA LIST](DATA-LIST.md)）。`BEGIN DATA` 和 `END DATA` 必须成对使用。`END DATA` 必须单独占一行，行首不能有空白，且 `END` 与 `DATA` 之间只能有一个空格，如下所示：
    
    
    END DATA.
