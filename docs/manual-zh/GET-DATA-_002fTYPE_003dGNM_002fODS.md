#### 9.4.1 电子表格文件
    
    
    GET DATA /TYPE={GNM, ODS}
            /FILE={’file_name’}
            /SHEET={NAME ’sheet_name’, INDEX n}
            /CELLRANGE={RANGE ’range’, FULL}
            /READNAMES={ON, OFF}
            /ASSUMEDSTRWIDTH=n.
    
    
可以使用 `GET DATA` 命令读取 Gnumeric 电子表格（<http://gnumeric.org>）以及 OpenDocument 格式的电子表格（<http://libreplanet.org/wiki/Group:OpenDocument/Software>）。使用 `TYPE` 子命令指示文件的格式。/TYPE=GNM 表示 Gnumeric 文件，/TYPE=ODS 表示 OpenDocument。`FILE` 子命令是必需的。用它指定要读取的文件名。所有其他子命令都是可选的。

每个变量的格式由包含该变量第一个数据的电子表格单元格的格式决定。如果该单元格为字符串（文本）格式，则变量的宽度由其所含字符串的长度决定，除非给出了 `ASSUMEDSTRWIDTH` 子命令。

`SHEET` 子命令指定要读取的电子表格文件中的工作表。`SHEET` 子命令有两种形式。在第一种形式中，`/SHEET=name sheet_name`，字符串 sheet_name 是要读取的工作表的名称。在第二种形式中，`/SHEET=index idx`，idx 是要读取的工作表的索引整数。第一个工作表的索引为 1。如果省略 `SHEET` 子命令，则命令读取文件中的第一个工作表。

`CELLRANGE` 子命令指定要读取的工作表中单元格的范围。如果子命令给定为 `/CELLRANGE=FULL`，则读取整个工作表。要仅读取工作表的一部分，请使用形式 `/CELLRANGE=range 'top_left_cell:bottom_right_cell'`。例如，子命令 `/CELLRANGE=range 'C3:P19'` 读取列 C–P 和行 3–19（含）。如果未给出 `CELLRANGE` 子命令，则读取整个工作表。

如果指定 `/READNAMES=ON`，则第一行单元格的内容用作存储后续行数据的变量名称。这是默认设置。如果使用 `/READNAMES=OFF`，则变量接收自动分配的名称。

`ASSUMEDSTRWIDTH` 子命令指定从文件读取的字符串变量的最大宽度。如果省略，默认值由每个变量的第一个电子表格单元格中字符串的长度决定。
