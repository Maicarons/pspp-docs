#### 5.1.2 Listing the data

数据输入完毕后，你可以输入

    PSPP> list /format=numbered.

来列出数据。可选文本‘/format=numbered’要求连同数据一起显示个案号。它应显示以下输出：

| Case Number | forename | height |
| --- | --- | --- |
| 1 | Ahmed | 188.00 |
| 2 | Bertram | 167.00 |
| 3 | Catherine | 134.23 |
| 4 | David | 109.10 |

注意，数值变量 **height** 显示为 2 位小数，因为该变量的格式为‘F8.2’。关于 `LIST` 命令的完整说明，参见 [LIST](LIST.md)。
