#### 16.4.8.1 `READ` 命令

    READ _variable_[(_index_[,_index_])]
         [/FILE=_file_]
         /FIELD=_first_ TO _last_ [BY _width_]
         [/FORMAT=_format_]
         [/SIZE=_expression_]
         [/MODE={RECTANGULAR _|_ SYMMETRIC}]
         [/REREAD].


`READ` 命令从文本文件读取数据到矩阵变量中。在命令名之后指定目标变量，可以是仅一个变量名以创建或替换整个变量，也可以是变量名后跟索引表达式以替换已有变量的子矩阵。

在 `MATRIX` 中出现的第一个 `READ` 命令里，`FILE` 子命令是必需的。它指定要读取的文本文件，可以是引号中的文件名，也可以是之前在 `FILE HANDLE` 上声明的文件句柄（参见 [FILE HANDLE](FILE-HANDLE.md)）。后面的 `READ` 命令（按语法顺序）如果省略 `FILE`，则使用之前引用的文件。

`FIELD` 和 `FORMAT` 子命令指定如何解释输入行。`FIELD` 是必需的，但 `FORMAT` 是可选的。详情参见 [Matrix READ and WRITE Commands](Matrix-READ-and-WRITE-Commands.md)。

`SIZE` 子命令在读取到整个变量时是必需的。其受限表达式参数应求值为 2 元素向量 `{n, m}` 或 `{n; m}`，表示一个 _n ×m_ 的矩阵目标。也允许标量 n，表示 _n ×1_ 的列向量目标。当目标是子矩阵时，`SIZE` 是可选的，如果存在则必须与子矩阵的大小匹配。

默认情况下，或使用 `MODE=RECTANGULAR`，命令为每一行和每一列读取一个条目。使用 `MODE=SYMMETRIC` 时，命令只读取矩阵主对角线上及以下的条目，并从下方对应的对称条目复制主对角线上方的条目。只有方阵可以使用 `MODE=SYMMETRIC`。

通常，每个 `READ` 命令从文本文件的新行开始。指定 `REREAD` 子命令以改为从上一个 `READ` 命令读取的最后一行开始。这对于从特定文件读取的第一个 `READ` 命令不起作用。在使用了 `EOF` 矩阵函数（参见 [EOF Matrix Function](Matrix-EOF-Function.md#EOF-Matrix-Function)）的命令之后，它同样无效，因为 `EOF` 必须尝试从文件读取下一行以确定文件是否还有更多输入。

#### 示例 1：基本用法

以下矩阵程序将同一个矩阵 `{1, 2, 4; 2, 3, 5; 4, 5, 6}` 读取到矩阵变量 `v`、`w` 和 `x` 中：

    READ v /FILE='input.txt' /FIELD=1 TO 100 /SIZE={3, 3}.
    READ w /FIELD=1 TO 100 /SIZE={3; 3} /MODE=SYMMETRIC.
    READ x /FIELD=1 TO 100 BY 1/SIZE={3, 3} /MODE=SYMMETRIC.


假设 input.txt 包含以下内容：

    1, 2, 4
    2, 3, 5
    4, 5, 6
    1
    2 3
    4 5 6
    1
    23
    456


`READ` 命令会根据特定行需要读取尽可能多的输入行，因此将上述任意一行拆分成多行也是可接受的。例如，第一行 `1, 2, 4` 可以在一个或两个逗号之后换行书写。

#### 示例 2：读取到子矩阵

以下从 input2.txt 读取一个 _5×5_ 矩阵，并反转行的顺序：

    COMPUTE m = MAKE(5, 5, 0).
    LOOP r = 5 TO 1 BY -1.
      READ m(r, :) /FILE='input2.txt' /FIELD=1 TO 100.
    END LOOP.


#### 示例 3：使用 `REREAD`

假设 input3.txt 中有 5 行，每行以一个整数计数开头，后跟 count 个数字，例如：

    1 5
    3 1 2 3
    5 6 -1 2 5 1
    2 8 9
    3 1 3 2


那么，以下代码将该文件读取到矩阵 `m` 中：

    COMPUTE m = MAKE(5, 5, 0).
    LOOP i = 1 TO 5.
      READ count /FILE='input3.txt' /FIELD=1 TO 1 /SIZE=1.
      READ m(i, 1:count) /FIELD=3 TO 100 /REREAD.
    END LOOP.
