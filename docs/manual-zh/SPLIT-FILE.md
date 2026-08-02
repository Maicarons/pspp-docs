### 13.5 SPLIT FILE


    SPLIT FILE [{LAYERED, SEPARATE}] BY var_list.
    SPLIT FILE OFF.


`SPLIT FILE` 允许使用单条统计过程命令，将存在于一个数据文件中的多组数据分别进行分析。

指定一个变量名列表，以分别分析多组数据。这些变量取值相同的相邻个案组成一个组，由统计过程命令作为一个组进行分析。对每一组个案执行独立的分析，并将该组的变量取值随分析结果一同打印。

当指定变量名列表时，也可以指定关键字 `LAYERED` 或 `SEPARATE` 之一。默认的 `LAYERED` 将每组的独立分析合并呈现在一个表格中。`SEPARATE` 则将每次分析呈现在单独的表格中。并非所有过程都遵循这一区分。

分组仅由*相邻*个案构成。若要使用某个取值在工作文件中不相邻的变量进行拆分，首先按该变量对数据排序（参见 [SORT CASES](SORT-CASES.md)）。

指定 `OFF` 可禁用 `SPLIT FILE`，并恢复将整个活动数据集作为一个数据组进行分析。

当 `SPLIT FILE` 出现在 `TEMPORARY` 之后时，它只影响下一个过程（参见 [TEMPORARY](TEMPORARY.md)）。

#### 13.5.1 示例 拆分

文件 horticulture.sav 包含描述若干园艺标本在经受各种 **treatment**（处理）后的 **yield**（产量）数据。如果我们想考察产量的线性统计量，一种方法是使用 `DESCRIPTIVES`（参见 [DESCRIPTIVES](DESCRIPTIVES.md)）。不过，不同 **treatment** 的均值理应有所不同。因此我们可能想执行三次独立的过程——每种处理各一次。示例 13.2 展示了如何使用 `SPLIT FILE` 命令自动完成这一点。

```
get file='horticulture.sav'.  * Ensure cases are sorted before splitting. sort cases by treatment.  split file by treatment.  * Run descriptives on the yield variable descriptives /variable = yield.
```

**示例 13.2：** 对 **treatment** 的每个取值运行 `DESCRIPTIVES`

在示例 13.3 中可以看到，描述统计表出现了 3 次——**treatment** 的每个取值各一次。本例中 ‘N’（观测数）在所有拆分中相同。这是因为该实验特意如此设计。但一般来说，每次拆分的 ‘N’ 可以不同。

|  | N | 均值 | 标准差 | 最小值 | 最大值 |
| --- | --- | --- | --- | --- | --- |
| Variable | Value |  |  |  |  |
| treatment | control |  |  |  |  |
| yield | 30 | 51.23 | 8.28 | 37.86 | 68.59 |
| Valid N (listwise) | 30 |  |  |  |  |
| Missing N (listwise) | 0 |  |  |  |  |
| Variable | Value |  |  |  |  |
| treatment | conventional |  |  |  |  |
|  | N | Mean | Std Dev | Minimum | Maximum |
| yield | 30 | 53.57 | 8.92 | 36.30 | 70.66 |
| Valid N (listwise) | 30 |  |  |  |  |
| Missing N (listwise) | 0 |  |  |  |  |
| Variable | Value |  |  |  |  |
| treatment | traditional |  |  |  |  |
|  | N | Mean | Std Dev | Minimum | Maximum |
| yield | 30 | 56.87 | 8.88 | 39.08 | 75.93 |
| Valid N (listwise) | 30 |  |  |  |  |
| Missing N (listwise) | 0 |  |  |  |  |

**示例 13.3：** 在活动拆分状态下运行 `DESCRIPTIVES` 的结果

除非使用了 `TEMPORARY`，否则一旦为数据集定义了拆分，它会一直保持活动状态，直到被显式禁用。在图形用户界面中，活动拆分变量（如果有）显示在状态栏中（参见截图 13.1）。如果在拆分处于活动状态时将数据集保存到系统文件（参见 [SAVE](SAVE.md)），拆分状态会存储在文件中，并在加载该文件时自动载入。



**截图 13.1：** 指示数据集正使用 **treatment** 变量进行拆分的状态栏

#### 脚注

##### (5)

还有其他可能更好的方法，可使用 `MEANS` 或 `EXAMINE` 命令达到类似结果。
