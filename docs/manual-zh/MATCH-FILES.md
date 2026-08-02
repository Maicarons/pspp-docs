### 10.3 MATCH FILES

    MATCH FILES

    Per input file:
            /{FILE,TABLE}={*,’file_name’}
            [/RENAME=(src_names=target_names)…]
            [/IN=var_name]
            [/SORT]

    Once per command:
            /BY var_list[({D|A}] [var_list[({D|A})]…]
            [/DROP=var_list]
            [/KEEP=var_list]
            [/FIRST=var_name]
            [/LAST=var_name]
            [/MAP]

`MATCH FILES` 将多个输入文件中对应的个案集合并到输出中的单个个案里，从而合并它们的数据。

`MATCH FILES` 的大部分语法与其他用于合并多个数据文件的 PSPP 命令相同。关于此公共语法的说明，参见上文的 [Combining Files Common Syntax](Combining-Files-Common-Syntax.md)。

`MATCH FILES` 如何匹配输入文件中的个案取决于是否指定了 `BY`：

  * 如果未使用 `BY`，`MATCH FILES` 将每个输入文件中的第一个个案组合起来产生第一个输出个案，然后将每个输入文件中的第二个个案组合产生第二个输出个案，依此类推。如果某些输入文件的个案数少于其他文件，则较短的文件在其输入耗尽之后不再对输出的个案作出贡献。
  * 如果使用了 `BY`，`MATCH FILES` 将每个输入文件中在 `BY` 变量上取值相同的个案组合起来。

当使用 `BY` 时，可以使用 `TABLE` 子命令引入_表查找文件_（table lookup file）。`TABLE` 的语法与 `FILE` 相同，并且 `RENAME`、`IN` 和 `SORT` 子命令可以像跟随 `FILE` 一样跟随 `TABLE`。无论有多少个 `TABLE`，都必须至少指定一个 `FILE`。表查找文件在大多数情况下与其他输入文件处理方式相同，特别是表查找文件必须按 `BY` 变量排序，或者必须对该 `TABLE` 指定 `SORT` 子命令。

表查找文件中的个案在被使用一次后不会被消耗掉。这意味着表查找文件中的数据可以对应 `FILE` 输入文件中的任意数量的个案。表查找文件类似于传统关系数据库系统中的查找表。

如果某个表查找文件包含多个具有相同 `BY` 变量集合的个案，则仅使用第一个个案。

当 `MATCH FILES` 创建输出个案时，对于当前个案不存在、仅存在于某些文件中的变量，数值变量被设为系统缺失值，字符串变量被设为空格。
