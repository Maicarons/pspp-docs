### 13.4 SELECT IF


    SELECT IF expression.


`SELECT IF` 根据表达式的取值来选择用于分析的个案。未被选中的个案将从活动数据集中永久剔除，除非 `TEMPORARY` 生效（参见 [TEMPORARY](TEMPORARY.md)）。

指定一个布尔表达式（参见 [Expressions](Expressions.md)）。如果某个个案的表达式值为真，则该个案被分析。如果表达式的值为假或缺失，则该个案从数据流中删除。

应将 `SELECT IF` 尽量放在命令文件靠前的位置。尽早删除的个案可以在时间和空间上得到更高效的处理。一旦使用 `SELECT IF` 从活动数据集中删除了个案，就无法再恢复。如果想要能够恢复个案，则应改用 `FILTER`（参见 [FILTER](FILTER.md)）。

当 `SELECT IF` 出现在 `TEMPORARY` 之后时（参见 [TEMPORARY](TEMPORARY.md)），不能使用 `LAG` 函数（参见 [LAG](Miscellaneous-Functions.md#LAG)）。

#### 13.4.1 示例 Select-If

一位工会代表对一家公司中年轻员工的薪资感兴趣。personnel.sav 文件提供了所有员工的薪资及其出生日期。示例 13.1 中的语法展示了如何使用 `SELECT IF` 将分析限制为仅出生于 1999 年 12 月 31 日之后的人。

```
get file = 'personnel.sav'.  echo 'Salaries of all personnel'. descriptives salary.  echo 'Salaries of personnel born after December 31 1999'. select if dob > date.dmy (31,12,1999). descriptives salary.
```

**示例 13.1：** 使用 `SELECT IF` 选择出生于某一日期当天或之后的人。

从结果 13.1 可以看出，数据集中列出了 56 人，其中 17 人出生于 1999 年 12 月 31 日之后。

|  | N | 均值 | 标准差 | 最小值 | 最大值 |
| --- | --- | --- | --- | --- | --- |
| 税前年薪 | 56 | 40028.97 | 8721.17 | $23,451 | $57,044 |
| 有效 N（列表方式） | 56 |  |  |  |  |
| 缺失 N（列表方式） | 0 |  |  |  |  |
|  | N | 均值 | 标准差 | 最小值 | 最大值 |
| 税前年薪 | 17 | 31828.59 | 4454.80 | $23,451 | $39,504 |
| 有效 N（列表方式） | 17 |  |  |  |  |
| 缺失 N（列表方式） | 0 |  |  |  |  |

**结果 13.1：** `SELECT IF` 转换之前和之后的薪资描述统计。

注意，读取数据的 personnel.sav 文件不受影响。该转换只影响活动文件。
