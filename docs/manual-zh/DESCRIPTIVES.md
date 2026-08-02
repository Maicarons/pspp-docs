### 15.1 DESCRIPTIVES

    DESCRIPTIVES
            /VARIABLES=var_list
            /MISSING={VARIABLE,LISTWISE} {INCLUDE,NOINCLUDE}
            /FORMAT={LABELS,NOLABELS} {NOINDEX,INDEX} {LINE,SERIAL}
            /SAVE
            /STATISTICS={ALL,MEAN,SEMEAN,STDDEV,VARIANCE,KURTOSIS,
                         SKEWNESS,RANGE,MINIMUM,MAXIMUM,SUM,DEFAULT,
                         SESKEWNESS,SEKURTOSIS}
            /SORT={NONE,MEAN,SEMEAN,STDDEV,VARIANCE,KURTOSIS,SKEWNESS,
                   RANGE,MINIMUM,MAXIMUM,SUM,SESKEWNESS,SEKURTOSIS,NAME}
                  {A,D}

`DESCRIPTIVES` 规程读取活动数据集，并输出用户所请求的线性描述性统计量。此外，它还可以选择性地计算 Z 分数。

`VARIABLES` 子命令是必需的，它指定要分析的变量列表。关键字 `VARIABLES` 是可选的。

所有其他子命令都是可选的：

`MISSING` 子命令决定对缺失变量的处理。如果设置为 `INCLUDE`，则用户缺失值被包含在计算中。如果设置为 `NOINCLUDE`（默认值），则用户缺失值被排除。如果设置为 `VARIABLE`，则缺失值按变量逐个排除；如果设置为 `LISTWISE`，则只要该个案中任何值为系统缺失（或在 `INCLUDE` 设置时为用户缺失）值，整个个案就被排除。

`FORMAT` 子命令没有效果。接受它是为了向后兼容。

`SAVE` 子命令使 `DESCRIPTIVES` 为所有指定变量计算 Z 分数。这些 Z 分数被保存到新变量中。变量名的生成方式是：先尝试原变量名前加 Z 并截断到最多 8 个字符，然后依次尝试 ZSC000 到 ZSC999、STDZ00 到 STDZ09、ZZZZ00 到 ZZZZ09、ZQZQ00 到 ZQZQ09。此外，也可以在变量列表的 `VARIABLES` 上，通过在每个变量后加括号来显式指定 Z 分数变量名。计算 Z 分数时，PSPP 忽略 `TEMPORARY`，将临时变化视为永久。

`STATISTICS` 子命令指定要显示的统计量：

``ALL``

以下所有统计量。

``MEAN``

算术平均值。

``SEMEAN``

均值的标准误。

``STDDEV``

标准差。

``VARIANCE``

方差。

``KURTOSIS``

峰度及峰度的标准误。

``SKEWNESS``

偏度及偏度的标准误。

``RANGE``

极差。

``MINIMUM``

最小值。

``MAXIMUM``

最大值。

``SUM``

总和。

``DEFAULT``

均值、均值的标准差、最小值、最大值。

``SEKURTOSIS``

峰度的标准误。

``SESKEWNESS``

偏度的标准误。

`SORT` 子命令指定统计量应如何排序。大多数可能的值应当不言自明。`NAME` 使统计量按名称排序。默认情况下，统计量按它们在 `VARIABLES` 子命令上指定的顺序列出。`A` 和 `D` 设置分别要求升序或降序排序。

#### 15.1.1 Descriptives 示例

physiology.sav 文件包含一组样本人群的多种生理数据。对变量 **height** 和 **temperature** 运行 `DESCRIPTIVES` 命令并使用默认选项，可以查看这两个变量的简单线性统计量。在示例 15.1 中，这些变量在 `VARIABLES` 子命令上指定，并使用了 `SAVE` 选项，以请求计算 Z 分数。

命令完成后，本示例再次运行 `DESCRIPTIVES`，这次针对 **zheight** 和 **ztemperature** 变量，它们是由第一个 `DESCRIPTIVES` 命令生成的两个归一化（Z 分数）变量。

```
get file='physiology.sav'.  descriptives         /variables = height temperature         /save.  descriptives         /variables = zheight ztemperature.
```

**示例 15.1：** 运行两个 `DESCRIPTIVES` 命令，其中一个带有 `SAVE` 子命令

```

```

**截图 15.1：** 选入了两个变量及 Z 分数选项的 Descriptives 对话框

在结果 15.1 中，我们可以看到每个变量都有 40 个有效数据，且没有缺失值。height 和 temperature 的均值分别为 16677.12 和 37.02。temperature 的描述性统计量看起来是合理的。但 **height** 的标准差异常高，最小值也低得可疑。这是由于数据中的一个录入错误（参见 [识别不正确的数据](Identifying-incorrect-data.md)）所致。

在第二个 Descriptive Statistics 命令中，可以看到两个 Z 分数变量的均值和标准差分别为 0 和 1。所有 Z 分数统计量都应具有这些性质，因为它们是原始分数的归一化版本。

|  | N | Mean | Std Dev | Minimum | Maximum |
| --- | --- | --- | --- | --- | --- |
| Source | Target |  |  |  |  |
| Height in millimeters | Zheight |  |  |  |  |
| Internal body temperature in degrees Celcius | Ztemperature |  |  |  |  |
| Height in millimeters | 40 | 1677.12 | 262.87 | 179 | 1903 |
| Internal body temperature in degrees Celcius | 40 | 37.02 | 1.82 | 32.59 | 39.97 |
| Valid N (listwise) | 40 |  |  |  |  |
| Missing N (listwise) | 0 |  |  |  |  |
|  | N | Mean | Std Dev | Minimum | Maximum |
| Z-score of Height in millimeters | 40 | 1.93E-015 | 1.00 | -5.70 | .86 |
| Z-score of Internal body temperature in degrees Celcius | 40 | 1.37E-015 | 1.00 | -2.44 | 1.62 |
| Valid N (listwise) | 40 |  |  |  |  |
| Missing N (listwise) | 0 |  |  |  |  |

**结果 15.1：** 包含两个归一化变量（Z 分数）的描述性统计量
