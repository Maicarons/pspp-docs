### 8.16 REPEATING DATA


    REPEATING DATA
            /STARTS=start-end
            /OCCURS=n_occurs
            /FILE=’file_name’
            /LENGTH=length
            /CONTINUED[=cont_start-cont_end]
            /ID=id_start-id_end=id_var
            /{TABLE,NOTABLE}
            /DATA=var_spec…


    where each var_spec takes one of the forms
            var_list start-end [type_spec]
            var_list (fortran_spec)


`REPEATING DATA` 解析以统一格式重复出现的数据组，同一行上可能包含多个数据组。每个数据组对应一个个案。`REPEATING DATA` 只能用于 `INPUT PROGRAM` 结构内部（参见 [INPUT PROGRAM](INPUT-PROGRAM.md)）。与 `DATA LIST` 配合使用时，它可以解析这样一组个案：它们共享一部分变量，但其他数据各不相同。

`STARTS` 子命令是必需的。使用数字字面量或数值变量名指定列范围。该范围指定了第一行上用于容纳数据组的列。结束列是可选的。如果未指定，则使用输入文件的记录宽度。对于内联文件（参见 [BEGIN DATA](BEGIN-DATA.md)）为 80 列；对于定长记录宽度的文件，为记录宽度；对于其他文件，默认是 1024 个字符。

`OCCURS` 子命令是必需的。它必须是一个数字或数值变量名。其值表示当前记录中存在的数据组个数。

`DATA` 子命令是必需的。它必须是指定的最后一个子命令。用于指定每个重复数据组中存在的数据。列号相对于数据组起始处（第 1 列）指定。数据的指定方式与 `DATA LIST FIXED` 相同（参见 [DATA LIST FIXED](DATA-LIST-FIXED.md)）。

所有其他子命令均为可选。

FILE 指定要读取的文件，可以是字符串形式的文件名，也可以是文件句柄（参见 [File Handles](File-Handles.md)）。如果未出现 FILE，则默认使用 `DATA LIST` 上次使用的文件句柄（按词法顺序，而非控制流顺序）。

默认情况下 `REPEATING DATA` 会输出一个表格，描述它将如何解析输入数据。指定 `NOTABLE` 将禁用此行为；指定 TABLE 将显式启用它。

`LENGTH` 子命令指定每个数据组的长度（以字符计）。如果未出现，则从 `DATA` 子命令推断长度。LENGTH 可以是一个数字或变量名。

通常所有数据组都应出现在同一行上。使用 `CONTINUED` 命令可以表示数据可延续到后续行。如果续行上的数据从左边界开始并贯穿整个字段宽度，则 `CONTINUED` 上无需指定列范围。否则，以与 STARTS 相同的方式指定可能的列范围。

当数据组跨行延续时，很容易因手工编辑疏忽而导致个案错位。`ID` 子命令允许在每个重复数据组所在行上出现一个个案标识符。`REPEATING DATA` 会检查每行上的标识符是否一致，并报告不匹配的情况。指定标识符所占用的列范围，后跟等号（‘=’）和标识符变量名。该变量必须已经用 `NUMERIC` 或其他命令声明过。

`REPEATING DATA` 应是 `INPUT PROGRAM` 内部给出的最后一条命令。它不应被包含在 `LOOP` 结构中（参见 [LOOP](LOOP.md)）。在 `REPEATING DATA` 之前（而非之后）使用 `DATA LIST`。
