#### 15.7.2.1 针对单个单元格的汇总函数

本节列出了只考虑 `CTABLES` 中单个单元格的汇总函数。只有一个这样的汇总函数 `COUNT` 可同时应用于分类变量和标度变量：

`COUNT`（“Count”，F40.0）

单元格中权重之和。

如果表中一个或多个变量的 `CATEGORIES` 包含缺失值（参见 [CTABLES 各变量类别选项](CTABLES-Per_002dVariable-Category-Options.md)），则一个单元格的部分或全部类别可能是缺失值。`COUNT` 会对单元格中包含的数据进行计数，无论其类别是否为缺失值。

下列汇总函数仅适用于标度变量，或分类变量的合计与小计。对于后者，解释汇总值时要谨慎，因为它未必有意义；不过，诸如李克特量表（Likert scale）的均值等可能具有直观的解释。

`MAXIMUM`（“Maximum”）

最大值。

`MEAN`（“Mean”）

均值。

`MEDIAN`（“Median”）

中位数值。

`MINIMUM`（“Minimum”）

最小值。

`MISSING`（“Missing”）

用户缺失值与系统缺失值的权重之和。

`MODE`（“Mode”）

出现频率最高的值。出现并列时，取最小的众数。

`PTILE` _n_（“Percentile _n_ ”）

第 n 个百分位数，其中 _0 ≤ n ≤ 100_。

`RANGE`（“Range”）

最大值减去最小值。

`SEMEAN`（“Std Error of Mean”）

均值的标准误。

`STDDEV`（“Std Deviation”）

标准差。

`SUM`（“Sum”）

总和。

`TOTALN`（“Total N”，F40.0）

单元格中权重之和。

对标度数据而言，`COUNT` 与 `TOTALN` 相同。

对分类数据而言，`TOTALN` 会统计被排除类别中的缺失值，即在 `CATEGORIES` 的显式类别列表中不存在的用户缺失值（参见 [CTABLES 各变量类别选项](CTABLES-Per_002dVariable-Category-Options.md)）、因 `CATEGORIES` 中 `MISSING=EXCLUDE` 生效而被排除的用户缺失值，以及系统缺失值。`COUNT` 不统计这些。

有关 `CTABLES` 如何汇总缺失值的细节，请参见 [CTABLES 汇总变量的缺失值](CTABLES-Missing-Values-for-Summary-Variables.md)。

`VALIDN`（“Valid N”，F40.0）

所包含类别中有效计数权重之和。

对分类变量而言，无论缺失值是否通过 `CATEGORIES` 包含在类别中，`VALIDN` 都不统计缺失值。`VALIDN` 也不统计处于被排除类别中的有效值。细节请参见 [CTABLES 汇总变量的缺失值](CTABLES-Missing-Values-for-Summary-Variables.md)。

`VARIANCE`（“Variance”）

方差。
