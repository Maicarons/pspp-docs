### 8.10 LIST

    LIST
            /VARIABLES=var_list
            /CASES=FROM start_index TO end_index BY incr_index
            /FORMAT={UNNUMBERED,NUMBERED} {WRAP,SINGLE}

`LIST` 过程将指定变量的值打印到列表文件中。

`VARIABLES` 子命令指定要打印其取值的变量。`VARIABLES` 关键字是可选的。如果未指定 `VARIABLES` 子命令，则打印活动数据集中的所有变量。

`CASES` 子命令可用于指定要打印的个案子集。指定 `FROM` 及要打印的第一个个案的个案号、`TO` 及要打印的最后一个个案的个案号、`BY` 及打印个案之间前进的个案数，或这些设置的任意子集。如果未指定 `CASES`，则打印所有个案。

`FORMAT` 子命令可用于更改输出格式。`NUMBERED` 将连同每个个案打印个案号；`UNNUMBERED`（默认值）则省略个案号。`WRAP` 和 `SINGLE` 设置目前未使用。

个案号从 1 开始计数。它们是在考虑所有转换之后进行计数的。

`LIST` 是一个过程。它会引发数据被读取。
