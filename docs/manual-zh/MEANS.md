### 15.11 MEANS

    MEANS [TABLES =]
          {var_list}
            [ BY {var_list} [BY {var_list} [BY {var_list} … ]]]

          [ /{var_list}
             [ BY {var_list} [BY {var_list} [BY {var_list} … ]]] ]

          [/CELLS = [MEAN] [COUNT] [STDDEV] [SEMEAN] [SUM] [MIN] [MAX] [RANGE]
            [VARIANCE] [KURT] [SEKURT]
            [SKEW] [SESKEW] [FIRST] [LAST]
            [HARMONIC] [GEOMETRIC]
            [DEFAULT]
            [ALL]
            [NONE] ]

          [/MISSING = [INCLUDE] [DEPENDENT]]

你可以使用 `MEANS` 命令计算算术均值及类似统计量，既可以对整个数据集计算，也可以对数据的类别计算。

该命令最简单的形式为

    MEANS v.

它计算 v 的均值、计数和标准差。如果指定一个分组变量，例如

    MEANS v BY g.

则计算按 g 分组后 v 的均值、计数和标准差。除了均值、计数和标准差，你也可以指定你感兴趣的统计量：

    MEANS x y BY g
          /CELLS = HARMONIC SUM MIN.

此示例计算按 g 分组的 x 和 y 的调和均值、总和和最小值。

`CELLS` 子命令指定要计算哪些统计量。可用的统计量有：

  * `MEAN` 算术均值。
  * `COUNT` 取值的计数。
  * `STDDEV` 标准差。
  * `SEMEAN` 均值的标准误。
  * `SUM` 取值的总和。
  * `MIN` 最小值。
  * `MAX` 最大值。
  * `RANGE` 最大值与最小值之差。
  * `VARIANCE` 方差。
  * `FIRST` 类别中的第一个值。
  * `LAST` 类别中的最后一个值。
  * `SKEW` 偏度。
  * `SESKEW` 偏度的标准误。
  * `KURT` 峰度。
  * `SEKURT` 峰度的标准误。
  * `HARMONIC` 调和均值。
  * `GEOMETRIC` 几何均值。

此外，还识别三个特殊关键字：

  * `DEFAULT` 等同于 `MEAN` `COUNT` `STDDEV`。
  * `ALL` 计算上述所有统计量。
  * `NONE` 不计算任何统计量（仅显示摘要）。

可以在单个命令中指定多个_表_（table）。每个表以‘/’分隔。例如

    MEANS TABLES =
          c d e BY x
          /a b BY x y
          /f BY y BY z.

包含三个表（‘TABLE =’是可选的）。第一个表有三个因变量 c、d 和 e，以及一个分类变量 x。第二个表有两个因变量 a 和 b，以及两个分类变量 x 和 y。第三个表有一个因变量 f，以及一个由 y 和 z 组合形成的分类变量。

默认情况下，只有在计算直接涉及的任何变量遇到缺失值（系统缺失或用户缺失）时，才会将该值从分析中省略。此行为可以通过 `/MISSING` 子命令修改。有三种可能的选项：`TABLE`、`INCLUDE` 和 `DEPENDENT`。

`/MISSING = INCLUDE` 表示因变量或分类变量中的用户缺失值应按其表面值对待，而不被排除。

`/MISSING = DEPENDENT` 表示因变量中的用户缺失值应按其表面值对待，但是具有分类变量用户缺失值的个案应从计算中省略。

#### 15.11.1 Example Means

repairs.sav 数据集包含由不同工厂生产、并在不同操作条件下试验的一组样本的平均故障间隔时间（**mtbf**）。由于分类变量有四种组合，仅通过查看数据列表，很难看出每个类别的分数如何变化。示例 15.4 展示了一种更易于理解的 **mtbf** 列表化方式。

```
get file='repairs.sav'.  means tables = mtbf       by factory by environment.
```

**Example 15.4:** 对 **mtbf** 分数按 **factory** 和 **environment** 类别运行 `MEANS`

结果如 Result 15.3 所示。所示数字表示每个类别的均值、标准差和样本数。然而，这些数字并未表明结果是否在统计上显著。要做到这一点，你需要根据所检验的假设，使用 `ONEWAY`、`GLM` 或 `T-TEST` 过程。

|  | N | Percent | N | Percent | N | Percent |
| --- | --- | --- | --- | --- | --- | --- |
|  | Cases |  |  |  |  |  |
|  | Included | Excluded | Total |  |  |  |
| mtbf * factory * environment | 30 | 100.0% | 0 | .0% | 30 | 100.0% |
| Manufacturing facility | Operating Environment | Mean | N | Std. Deviation |  |  |
| 0 | Temperate | 7.26 | 9 | 2.57 |  |  |
| Tropical | 7.47 | 7 | 2.68 |  |  |  |
| Total | 7.35 | 16 | 2.53 |  |  |  |
| 1 | Temperate | 13.38 | 6 | 7.77 |  |  |
| Tropical | 8.20 | 8 | 8.39 |  |  |  |
| Total | 10.42 | 14 | 8.26 |  |  |  |
| Total | Temperate | 9.71 | 15 | 5.91 |  |  |
| Tropical | 7.86 | 15 | 6.20 |  |  |  |
| Total | 8.78 | 30 | 6.03 |  |  |  |

**Result 15.3:** 按 **factory** 和 **environment** 分类的 **mtbf**

注意，可以计算统计量的变量数量没有限制，每层分类变量的数量没有限制，层的数量也没有限制。但是，对大量变量运行 `MEANS`，或使用包含大量不同取值的分类变量，可能会导致极其庞大的输出，难以解释。因此，你应该仔细考虑选择哪些变量参与分析。
