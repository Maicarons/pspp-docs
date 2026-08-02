### 11.13 MISSING VALUES

在许多情况下，可用于分析的数据是不完整的，必须用占位符代替某个值以表明该值未知。缺失值的一种表示方式是通过 $SYSMIS 变量（参见 [System Variables](System-Variables.md)）。另一种更灵活的方式是通过_用户缺失值_（user-missing values），它是按每个变量分别确定的。

`MISSING VALUES` 命令为变量设置用户缺失值。

    MISSING VALUES var_list (missing_values).

    where missing_values takes one of the following forms:
            num1
            num1, num2
            num1, num2, num3
            num1 THRU num2
            num1 THRU num2, num3
            string1
            string1, string2
            string1, string2, string3
    As part of a range, LO or LOWEST may take the place of num1;
    HI or HIGHEST may take the place of num2.

`MISSING VALUES` 为数值变量和字符串变量设置用户缺失值。长字符串变量可以有缺失值，但缺失值第 8 个字节之后的字符必须为空格。

指定一个变量列表，后跟括号内的用户缺失值列表。最多可以给出三个离散值，或者（仅限数值变量）一个可选附带单个离散值的值域。值域可以一端开放，通过使用关键字 `LO` 或 `LOWEST` 或 `HI` 或 `HIGHEST` 来表示。

`MISSING VALUES` 命令立即生效。它不受 `DO IF` 或 `LOOP` 等条件和循环结构的影响。
