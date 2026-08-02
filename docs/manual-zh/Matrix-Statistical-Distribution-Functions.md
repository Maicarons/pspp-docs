#### 16.4.2.8 矩阵统计分布函数

矩阵语言可以使用与 PSPP 变换表达式相同的语法和语义计算若干标准统计分布的函数。详情参见 [Statistical Distribution Functions](Statistical-Distribution-Functions.md)。

矩阵语言对 PDF、CDF、SIG、IDF、NPDF 和 NCDF 函数进行了扩展，允许这些函数的第一个参数可以是任意维数的向量或矩阵。此外，`CDF.BVNOR` 和 `PDF.BVNOR` 允许其前两个参数之一或两者都是向量或矩阵；如果两者都是非标量，则它们必须具有相同的维数。在每种情况下，结果都是一个与输入具有相同维数的矩阵或向量，填充了逐元素的计算结果。
