#### 16.4.8.2 `WRITE` 命令

    WRITE _expression_
          [/OUTFILE=_file_]
          /FIELD=_first_ TO _last_ [BY _width_]
          [/FORMAT=_format_]
          [/MODE={RECTANGULAR _|_ TRIANGULAR}]
          [/HOLD].


`WRITE` 命令求值 _expression_，并以指定格式将其值写入文本文件。在命令名之后写上要求值的表达式。

在 `MATRIX` 中出现的第一个 `WRITE` 命令里，`OUTFILE` 子命令是必需的。它指定要写入的文本文件，可以是引号中的文件名，也可以是之前在 `FILE HANDLE` 上声明的文件句柄（参见 [FILE HANDLE](FILE-HANDLE.md)）。后面的 `WRITE` 命令（按语法顺序）如果省略 `FILE`，则使用之前引用的文件。

`FIELD` 和 `FORMAT` 子命令指定输出行如何构成。`FIELD` 是必需的，但 `FORMAT` 是可选的。详情参见 [Matrix READ and WRITE Commands](Matrix-READ-and-WRITE-Commands.md)。

默认情况下，或使用 `MODE=RECTANGULAR`，命令为每一行和每一列写入一个条目。使用 `MODE=TRIANGULAR` 时，命令只写入矩阵主对角线上及以下的条目。对角线上方的条目不写入。只有方阵可以使用 `MODE=TRIANGULAR` 写入。

通常，每个 `WRITE` 命令向输出文件写入完整的行。使用 `HOLD` 时，`WRITE` 写入的最后一行会被保留，供下一个 `WRITE` 命令补充。这对于在同一输出行上写入多个矩阵很有用。

#### 示例 1：基本用法

这个矩阵程序：

    WRITE {1, 2; 3, 4} /OUTFILE='matrix.txt' /FIELD=1 TO 80.


向 matrix.txt 写入以下内容：

     1 2
     3 4


#### 示例 2：三角矩阵

这个矩阵程序：

    WRITE MAGIC(5) /OUTFILE='matrix.txt' /FIELD=1 TO 80 BY 5 /MODE=TRIANGULAR.


向 matrix.txt 写入以下内容：

        17
        23    5
         4    6   13
        10   12   19   21
        11   18   25    2    9
