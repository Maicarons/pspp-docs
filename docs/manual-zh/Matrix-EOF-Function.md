#### 16.4.2.9 EOF Function

此函数与 `READ` 语句上使用的文件一起工作。

Matrix Function: **EOF** _( file)_

给定文件句柄或文件名 file，如果文件的最后一行已被读取，则返回整数标量 1；如果还有更多行可用，则返回 0。确定这一点需要尝试读取另一行，这意味着在 `EOF` 之后对同一文件的下一个 `READ` 命令上的 `REREAD` 将无效。

`EOF` 函数使矩阵程序能够灵活地读取包含文本数据的文件，而无需提前知道文件的长度。例如，以下程序将读取 data.txt 中的所有数据行，每行由三个数字组成，作为矩阵 `data` 中的行：

    MATRIX.
    COMPUTE data={}.
    LOOP IF NOT EOF('data.txt').
      READ row/FILE='data.txt'/FIELD=1 TO 1000/SIZE={1,3}.
      COMPUTE data={data; row}.
    END LOOP.
    PRINT data.
    END MATRIX.
