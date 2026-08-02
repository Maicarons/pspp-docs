### 15.2 FREQUENCIES
    
    
    FREQUENCIES
            /VARIABLES=var_list
            /FORMAT={TABLE,NOTABLE,LIMIT(limit)}
                    {AVALUE,DVALUE,AFREQ,DFREQ}
            /MISSING={EXCLUDE,INCLUDE}
            /STATISTICS={DEFAULT,MEAN,SEMEAN,MEDIAN,MODE,STDDEV,VARIANCE,
                         KURTOSIS,SKEWNESS,RANGE,MINIMUM,MAXIMUM,SUM,
                         SESKEWNESS,SEKURTOSIS,ALL,NONE}
            /NTILES=ntiles
            /PERCENTILES=percent…
            /HISTOGRAM=[MINIMUM(x_min)] [MAXIMUM(x_max)]
                       [{FREQ[(y_max)],PERCENT[(y_max)]}] [{NONORMAL,NORMAL}]
            /PIECHART=[MINIMUM(x_min)] [MAXIMUM(x_max)]
                      [{FREQ,PERCENT}] [{NOMISSING,MISSING}]
            /BARCHART=[MINIMUM(x_min)] [MAXIMUM(x_max)]
                      [{FREQ,PERCENT}]
            /ORDER={ANALYSIS,VARIABLE}
    
    
    (These options are not currently implemented.)
            /HBAR=…
            /GROUPED=…
    
    
`FREQUENCIES` 过程为指定变量输出频数表。`FREQUENCIES` 还可以计算和显示描述性统计量（包括中位数和众数）以及百分位数，还有频数分布的各种图形表示。

`VARIABLES` 子命令是唯一必需的子命令。指定要分析的变量。

`FORMAT` 子命令控制输出格式。它有几种可能的设置：

  * `TABLE`，默认值，导致为每个指定变量输出频数表。`NOTABLE` 阻止输出它们。`LIMIT` 带有数字参数时，会在表中的值数量超过指定数量时阻止输出。
  * 通常频数表按值升序排序。这是 `AVALUE`。`DVALUE` 表按值降序排序。`AFREQ` 和 `DFREQ` 表分别按频数升序和降序排序。

`MISSING` 子命令控制对用户缺失值的处理。当设置 `EXCLUDE`（默认）时，用户缺失值不包含在频数表或统计量中。当设置 `INCLUDE` 时，包含用户缺失值。系统缺失值从不包含在统计量中，但列在频数表中。

可用的 `STATISTICS` 与 `DESCRIPTIVES`（见 [DESCRIPTIVES](DESCRIPTIVES.md)）中可用的相同，另外增加了 `MEDIAN`（数据的中位数）和 MODE（众数）。（如果有多个众数，则报告最小值。）默认情况下，为每个变量报告均值、均值的标准差、最小值和最大值。

`PERCENTILES` 导致报告指定的百分位数。百分位数应以 0 到 100（含）之间的数字列表给出。`NTILES` 子命令导致在数据集划分为指定数量范围的边界处报告百分位数。例如，`/NTILES=4` 会导致报告四分位数。

`HISTOGRAM` 子命令导致输出为每个指定数值变量包含直方图。默认情况下 X 轴范围从数据中观察到的最小值到最大值，但 `MINIMUM` 和 `MAXIMUM` 关键字可以设置显式范围。直方图不为字符串变量创建。

指定 `NORMAL` 可在直方图上叠加正态曲线。

`PIECHART` 子命令为每个变量向数据添加饼图。每个扇片代表一个值，扇片大小与该值的频数成比例。默认情况下，所有非缺失值都分配扇片。`MINIMUM` 和 `MAXIMUM` 关键字可用于将显示的扇片限制为给定值范围。关键字 `NOMISSING` 导致缺失值从饼图中省略。这是默认设置。如果改为指定 `MISSING`，则饼图包含一个代表所有系统缺失和用户缺失个案的扇片。

`BARCHART` 子命令为每个变量生成条形图。`MINIMUM` 和 `MAXIMUM` 关键字可用于省略计数超出指定限制的类别。`FREQ` 选项（默认）使纵坐标显示每个类别的频数，而 `PERCENT` 选项显示相对百分比。

`HISTOGRAM` 和 `PIECHART` 上的 `FREQ` 和 `PERCENT` 选项被接受但目前未生效。

`ORDER` 子命令被接受但被忽略。

#### 15.2.1 频数示例

示例 15.2 对 personnel.sav 文件中的 **sex** 和 **occupation** 变量运行频数分析。这有助于大致了解这些名义变量的分布方式。

```
get file='personnel.sav'.  frequencies /variables = sex occupation             /statistics = none.
```

**示例 15.2：** 对 **sex** 和 **occupation** 变量运行频数分析

如果您使用图形用户界面，对话框默认设置为计算若干统计量。其中一些对分类变量特别无用，因此您可能希望禁用它们。

```

```

**截图 15.2：** 已选择 **sex** 和 **occupation** 变量的频数对话框

从结果 15.2 可以明显看出，有 33 名男性、21 名女性和 2 名未输入性别的人。

还可以看到数据中每个职业的数量。处理用作名义值的字符串变量时，运行频数分析有助于检测数据录入条目。请注意，有一个 **occupation** 值被误输入为“Scrientist”。在使用数据之前，应更正此条目或标记为缺失。

|  |  | 频数 | 百分比 | 有效百分比 | 累积百分比 |
| --- | --- | --- | --- | --- | --- |
| 有效 | 男性 | 33 | 58.9% | 61.1% | 61.1% |
| 女性 | 21 | 37.5% | 38.9% | 100.0% |  |
| 缺失 | . | 2 | 3.6% |  |  |
| 总计 | 56 | 100.0% |  |  |  |
|  |  | 频数 | 百分比 | 有效百分比 | 累积百分比 |
| 有效 | 艺术家 | 8 | 14.3% | 14.3% | 14.3% |
| 面包师 | 2 | 3.6% | 3.6% | 17.9% |  |
| 律师 | 1 | 1.8% | 1.8% | 19.6% |  |
| 木匠 | 4 | 7.1% | 7.1% | 26.8% |  |
| 清洁工 | 4 | 7.1% | 7.1% | 33.9% |  |
| 厨师 | 7 | 12.5% | 12.5% | 46.4% |  |
| 经理 | 8 | 14.3% | 14.3% | 60.7% |  |
| 数学家 | 4 | 7.1% | 7.1% | 67.9% |  |
| 画家 | 2 | 3.6% | 3.6% | 71.4% |  |
| 有效载荷专家 | 1 | 1.8% | 1.8% | 73.2% |  |
| 水管工 | 5 | 8.9% | 8.9% | 82.1% |  |
| 科学家 | 7 | 12.5% | 12.5% | 94.6% |  |
| Scrientist | 1 | 1.8% | 1.8% | 96.4% |  |
| 裁缝 | 2 | 3.6% | 3.6% | 100.0% |  |
| 总计 | 56 | 100.0% |  |  |  |

**结果 15.2：** **sex** 和 **occupation** 的相对频数

#### 脚注

##### (6)

分箱数根据 Freedman-Diaconis 规则选择：_2 \times IQR(x)n^{-1/3}_，其中 _IQR(x)_ 是 _x_ 的四分位距，_n_ 是样本数。注意 `EXAMINE` 使用不同的算法确定分箱大小。
