### 16.3 MCONVERT

    MCONVERT
        [[MATRIX=]
         [IN({‘*’|’file’})]
         [OUT({‘*’|’file’})]]
        [/{REPLACE,APPEND}].

`MCONVERT` 命令将矩阵数据从相关矩阵和标准差向量转换为协方差矩阵，或反之。

默认情况下，`MCONVERT` 既读取也写入活动文件。使用 `MATRIX` 子命令指定其他文件。要读取矩阵文件，在 `IN` 之后的括号内指定其名称。要写入矩阵文件，在 `OUT` 之后的括号内指定其名称。使用‘*’显式指定活动文件作为输入或输出。

当 `MCONVERT` 读取输入时，默认情况下，每当遇到协方差矩阵时，它会替换为相关矩阵和标准差向量，反之亦然。指定 `/APPEND` 使 `MCONVERT` 改为在不移除现有数据的情况下添加另一种形式的数据。使用 `/REPLACE` 显式请求移除现有数据。

`MCONVERT` 命令要求输入为矩阵文件。使用 `MATRIX DATA` 将文本输入转换为矩阵文件格式。详见 [MATRIX DATA](MATRIX-DATA.md)。
