#### 9.4.3 文本数据文件
    
    
    GET DATA /TYPE=TXT
            /FILE={’file_name’,file_handle}
            [ENCODING=’encoding’]
            [/ARRANGEMENT={DELIMITED,FIXED}]
            [/FIRSTCASE={first_case}]
            [/IMPORTCASES=...]
            …additional subcommands depending on ARRANGEMENT…
    
    
当指定 TYPE=TXT 时，`GET DATA` 以分隔或固定列式格式读取数据，很像 DATA LIST（见 [DATA LIST](DATA-LIST.md)）。

`FILE` 子命令是必需的。将要读取的文件指定为字符串文件名或（仅限文本数据）文件句柄（见 [文件句柄](File-Handles.md)）。

`ENCODING` 子命令指定要读取文件的字符编码。有关支持的编码信息，请参见 [INSERT](INSERT.md)。

`ARRANGEMENT` 子命令决定文件的基本格式。DELIMITED（默认设置）指定输入数据中的字段由空格、制表符或其他用户指定的分隔符分隔。FIXED 指定输入数据中的字段出现在个案记录中特定的固定列位置。

默认情况下，个案从输入文件的第一行开始读取。要跳过输入文件开头的行，请将 `FIRSTCASE` 设置为要读取的第一行的行号：2 表示跳过第一行，3 表示跳过前两行，依此类推。

`IMPORTCASES` 出于兼容性被忽略。使用 `N OF CASES` 限制从文件读取的个案数（见 [N OF CASES](N-OF-CASES.md)），或使用 `SAMPLE` 获取个案的随机样本（见 [SAMPLE](SAMPLE.md)）。

其余子命令仅适用于下述两种文件排列中的一种。

| • GET DATA /TYPE=TXT /ARRANGEMENT=DELIMITED |  |  |
| --- | --- | --- |
| • GET DATA /TYPE=TXT /ARRANGEMENT=FIXED |  |  |
