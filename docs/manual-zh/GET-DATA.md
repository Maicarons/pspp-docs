### 9.4 GET DATA
    
    
    GET DATA
            /TYPE={GNM,ODS,PSQL,TXT}
            …additional subcommands depending on TYPE…
    
    
`GET DATA` 命令用于读取由其他应用程序创建的文件和其他数据源。执行此命令时，当前字典和活动数据集会被从指定源读取的变量和数据替换。

`TYPE` 子命令是必需的，并且必须是第一个指定的子命令。它决定要读取的文件或源的类型。PSPP 目前支持以下文件类型：

GNM
    
Gnumeric 创建的电子表格文件 (<http://gnumeric.org>)。

ODS
    
OpenDocument 格式的电子表格文件 (<http://opendocumentformat.org>)。

PSQL
    
来自 PostgreSQL 数据库的关系 (<http://postgresql.org>)。

TXT
    
以列式和分隔格式存储的文本数据文件。

每种支持的文件类型都有额外的子命令，在下方的单独小节中说明。

| • GET DATA /TYPE=GNM/ODS |  | 电子表格 |
| --- | --- | --- |
| • GET DATA /TYPE=PSQL |  | 数据库 |
| • GET DATA /TYPE=TXT |  | 分隔文本文件 |
