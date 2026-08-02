#### 8.5.1 DATA LIST FIXED

    DATA LIST [FIXED]
            {TABLE,NOTABLE}
            [FILE=’file_name’ [ENCODING=’encoding’]]
            [RECORDS=record_count]
            [END=end_var]
            [SKIP=record_count]
            /[line_no] var_spec…

    where each var_spec takes one of the forms
            var_list start-end [type_spec]
            var_list (fortran_spec)

`DATA LIST FIXED` 用于读取在单行或多行记录的每一行上具有固定位置的值的数据文件。关键字 FIXED 是可选的。

如果要从外部文件获取输入，则必须使用 `FILE` 子命令。它可用于以字符串形式指定文件名或文件句柄（参见 [文件句柄](File-Handles.md)）。如果未使用 `FILE` 子命令，则假定输入是通过 `BEGIN DATA`…`END DATA`（参见 [BEGIN DATA](BEGIN-DATA.md)）在命令文件内指定的。`ENCODING` 子命令仅在与 `FILE` 子命令同时使用时才能使用。它指定文件的字符编码。有关支持的编码信息，参见 [INSERT](INSERT.md)。

可选的 `RECORDS` 子命令以单个整数作为参数，用于指定每个记录的行数。如果未指定 `RECORDS`，则每个记录的行数由 `DATA LIST` 后面列出的变量说明计算而得。

`END` 子命令仅在与 `INPUT PROGRAM` 配合使用时才有用。详见 [INPUT PROGRAM](INPUT-PROGRAM.md)。

可选的 `SKIP` 子命令指定在输入文件开头要跳过的记录数。例如，它可用于跳过包含变量名的一行。

`DATA LIST` 可选择输出一个描述数据文件如何被读取的表。`TABLE` 子命令启用此输出，`NOTABLE` 禁用它。默认是输出该表。

要从数据列表中读取的变量列表必须放在最后。数据记录中的每一行以一个斜杠（‘/’）开头。可选地，行号可以跟在斜杠之后。随后可以出现任意数量的变量说明。

每个变量说明由一个变量名列表后接它们在输入行上位置的说明组成。可以使用 `DATA LIST` 的 `TO` 约定来指定变量集合（参见 [变量集合](Sets-of-Variables.md)）。有两种方式可以指定变量在行上的位置：列式（columnar）和 FORTRAN 式。

在列式中，字段的起始列和结束列在变量名之后以短横线（‘-’）分隔指定。例如，行上的第 3 到第 5 列应指定为‘3-5’。默认情况下，变量被视为‘F’格式（参见 [输入与输出格式](Input-and-Output-Formats.md)）。（此默认可更改；更多信息见 [SET](SET.md)。）

在列式中，若要使用默认之外的变量格式，可在列号之后以括号指定格式类型。例如，对于字母数字‘A’格式，使用‘(A)’。

此外，可在列号之后的括号中指定隐含小数位。例如，假设某数据文件有一个字段，其中字符‘1234’应被解释为具有值 12.34。那么该字段有两个隐含小数位，相应的说明将是‘(2)’。如果带有隐含小数位的字段包含小数点，则不应用隐含小数位。

更改变量格式与添加隐含小数位可以一起进行；例如‘(N,5)’。

使用列式时，每个变量的输入和输出宽度由字段宽度计算得出。字段宽度必须能被所指定的变量个数整除。

FORTRAN 式是一种完全不同的指定字段位置的方法。使用这种方法时，变量输入格式说明的列表（以逗号分隔）被放在变量名之后的括号内。每个格式说明符会沿输入行推进它所使用的字符数那么多位置。

FORTRAN 式中也存在隐含小数位。带有 d 个小数位的格式说明也带有 d 个隐含小数位。

除标准格式说明符（参见 [输入与输出格式](Input-and-Output-Formats.md)）外，FORTRAN 式还定义了一些扩展：

`X`

将本行当前列向前推进一个字符位置。

`T`x

将本行当前列设置为第 x 列，列号被认为从左边距的 1 开始计数。

`NEWREC`x

在当前记录中向前跳过 x 行，并将活动列重置到左边距。

重复计数

任何格式说明符之前都可加一个数字。这会导致该格式说明符的动作重复指定次数。

(spec1, …, specN)

将给定说明符分组在一起。这在前面带有重复计数时最为有用。分组可以任意嵌套。

FORTRAN 式和列式可以自由混用。列式将活动列留在所指定结束列的正后方。FORTRAN 式中使用 `NEWREC` 的记录移动也适用于后续的 FORTRAN 和列式说明符。

| • DATA LIST FIXED Examples |  | DATA LIST FIXED 的示例。 |
| --- | --- | --- |
