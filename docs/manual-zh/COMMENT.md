### 17.4 COMMENT
    
    
    Comment commands:
        COMMENT comment text … .
        *comment text … .
    
    Comments within a line of syntax:
        FREQUENCIES /VARIABLES=v0 v1 v2.  /* All our categorical variables.
    

`COMMENT` 会被忽略。它用于向 PSPP 语法文件的作者及其他阅读者提供说明信息。

`COMMENT` 可以跨任意多行。它以行末的句点或者空行结束。注释中可以包含任意字符。

PSPP 还支持在语法行内使用以 ‘/*’ 引入的注释。这类注释在遇到第一个 ‘*/’ 或行末时结束，以先出现者为准。仅包含此类注释的行被视为空行，并会结束当前命令。
