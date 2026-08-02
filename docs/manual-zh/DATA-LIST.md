### 8.5 DATA LIST

`DATA LIST` 用于读取文本或二进制数据，是最基础的数据读取命令。即便是更为复杂精密的输入方法，也将 `DATA LIST` 命令作为构建模块。理解 `DATA LIST` 对于理解如何使用 PSPP 读取数据文件十分重要。

`DATA LIST` 有两种主要变体，即固定格式和自由格式。此外，自由格式还有一个次要变体——列表格式，有关它与普通自由格式的差异将在下文讨论。

`DATA LIST` 的每种形式都在下文详述。

参见 [GET DATA](GET-DATA.md)，该命令在 DATA LIST 的基础上提供了一些增强功能，在许多情况下可替代 DATA LIST。

| • DATA LIST FIXED |  | 数据的固定列位置。 |
| --- | --- | --- |
| • DATA LIST FREE |  | 可任意使用间隔。 |
| • DATA LIST LIST |  | 每个个案必须位于单独一行。 |
