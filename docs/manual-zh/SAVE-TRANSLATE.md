### 9.8 SAVE TRANSLATE


    SAVE TRANSLATE
            /OUTFILE={’file_name’,file_handle}
            /TYPE={CSV,TAB}
            [/REPLACE]
            [/MISSING={IGNORE,RECODE}]

            [/DROP=var_list]
            [/KEEP=var_list]
            [/RENAME=(src_names=target_names)…]
            [/UNSELECTED={RETAIN,DELETE}]
            [/MAP]

            …additional subcommands depending on TYPE…


`SAVE TRANSLATE` 命令用于将数据保存为其他应用程序可识别的多种格式。

`OUTFILE` 和 `TYPE` 子命令是必需的。`OUTFILE` 指定要写入的文件，为字符串文件名或文件句柄（参见 [File Handles](File-Handles.md)）。`TYPE` 决定要读取的文件或源的类型。它必须是下列之一：

CSV

逗号分隔值格式，

TAB

制表符分隔格式。

默认情况下，`SAVE TRANSLATE` 不会覆盖已有文件。使用 `REPLACE` 可强制覆盖已有文件。

对于 MISSING=IGNORE（默认值），`SAVE TRANSLATE` 把用户缺失值当作非缺失值处理。指定 MISSING=RECODE 则会像输出系统缺失值那样输出数值型用户缺失值，并将字符串型用户缺失值输出为全是空格。

默认情况下，活动数据集字典中的所有变量都会保存到系统文件，但 `DROP` 或 `KEEP` 可以选出要保存的变量子集。`RENAME` 子命令也可用于更改保存变量时使用的名称；由于这些名称仅用于输出，它们不必遵循通常的 PSPP 变量命名规则。`UNSELECTED` 决定被 `FILTER` 命令过滤掉的个案是否写入输出文件。这些子命令的语法和含义与 `SAVE` 命令相同（参见 [SAVE](SAVE.md)）。

每种受支持的文件类型都有额外的子命令，在下面的独立小节中说明。

`SAVE TRANSLATE` 会导致数据被读取。它是一个过程。

| • SAVE TRANSLATE /TYPE=CSV and TYPE=TAB |  |  |
| --- | --- | --- |
