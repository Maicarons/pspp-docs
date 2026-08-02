#### 15.7.9.2 汇总变量的缺失值

对于汇总变量，处于所包含类别中的有效取值会被分析，而缺失的或处于被排除类别中的取值不会被分析，但有以下例外：

  * “`VALIDN`”汇总函数（`VALIDN`、`EVALIDN`、`UVALIDN`、`_area_ PCT.VALIDN` 和 `U _area_ PCT.VALIDN`）只统计所包含类别中的有效值（不包括所包含类别中的缺失值）。
  * “`TOTALN`”汇总函数（`TOTALN`、`ETOTALN`、`UTOTALN`、`_area_ PCT.TOTALN`）以及 `U _area_ PCT.TOTALN` 统计所包含类别中的所有值（有效和缺失）以及被排除类别中的缺失值（不包括有效值）。

对于分类变量，系统缺失值永远不会处于所包含的类别中。对于标度变量，不存在包含与被排除类别的概念，因此实际上所有值都被包含。

下表从另一角度展示了上述规则：

|  | VALIDN | other | TOTALN |
| --- | --- | --- | --- |
| Categorical variables: |  |  |  |
| Valid values in included categories | yes | yes | yes |
| Missing values in included categories | — | yes | yes |
| Missing values in excluded categories | — | — | yes |
| Valid values in excluded categories | — | — | — |
| Scale variables: |  |  |  |
| Valid values | yes | yes | yes |
| User- or system-missing values | — | yes | yes |
