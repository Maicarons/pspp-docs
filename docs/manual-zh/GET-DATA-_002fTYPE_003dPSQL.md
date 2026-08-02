#### 9.4.2 Postgres 数据库查询
    
    
    GET DATA /TYPE=PSQL
             /CONNECT={connection info}
             /SQL={query}
             [/ASSUMEDSTRWIDTH=w]
             [/UNENCRYPTED]
             [/BSIZE=n].
    
    
`GET DATA /TYPE=PSQL` 从本地或远程 Postgres 数据库服务器导入数据。它会根据表列名或 SQL 查询中指定的名称自动创建变量。PSPP 无法支持某些 Postgres 数据类型的全部精度，因此这些数据类型的数据在 PSPP 导入时会丢失一些精度。PSPP 不支持所有 Postgres 数据类型。如果 PSPP 无法支持某个数据值，`GET DATA` 会发出警告并替换为系统缺失值。

`CONNECT` 子命令是必需的。它是一个指定应从中获取数据的数据库服务器参数的字符串。该字符串的格式在 postgres 手册 <http://www.postgresql.org/docs/8.0/static/libpq.html#LIBPQ-CONNECT> 中给出。

`SQL` 子命令是必需的。它必须是用于从数据库检索数据的有效 SQL 字符串。

`ASSUMEDSTRWIDTH` 子命令指定从数据库读取的字符串变量的最大宽度。如果省略，默认值由为每个变量读取的第一个值中的字符串长度决定。

`UNENCRYPTED` 子命令允许通过不安全的连接检索数据。如果连接未加密，并且未给出 `UNENCRYPTED` 子命令，则会发生错误。连接是否加密取决于底层的 psql 库和数据库服务器的能力。

`BSIZE` 子命令仅用于优化数据传输速度。它指定一次从数据库获取的个案数的上限。默认值为 4096。如果您的 SQL 语句获取大量个案但只有少量变量，则增大此值可能会使数据传输更快。相反，如果变量数量很大，或者运行 PSPP 的机器只有少量内存，则较小的值可能更好。

以下语法是一个示例：
    
    
    GET DATA /TYPE=PSQL
         /CONNECT='host=example.com port=5432 dbname=product user=fred passwd=xxxx'
         /SQL='select * from manufacturer'.
