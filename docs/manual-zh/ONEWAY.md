### 15.14 ONEWAY

    ONEWAY
            [/VARIABLES = ] var_list BY var
            /MISSING={ANALYSIS,LISTWISE} {EXCLUDE,INCLUDE}
            /CONTRAST= value1 [, value2] ... [,valueN]
            /STATISTICS={DESCRIPTIVES,HOMOGENEITY}
            /POSTHOC={BONFERRONI, GH, LSD, SCHEFFE, SIDAK, TUKEY, ALPHA ([value])}


`ONEWAY` 过程由一个自变量分组的变量进行单因素方差分析。它用于比较被划分为两个以上组的总体的均值。

要分析的因变量应在 `VARIABLES` 子命令中给出。变量列表之后必须跟上 `BY` 关键字以及自变量（或因子）变量的名称。

你可以使用 `STATISTICS` 子命令让 PSPP 显示辅助信息。接受的选项有：

  * DESCRIPTIVES 显示按自变量分组的各组描述统计量。
  * HOMOGENEITY 显示变量及其各组的方差齐性 Levene 检验。

`CONTRAST` 子命令在你预期各组之间存在某些差异时使用。该子命令之后必须跟一个数字列表，这些数字是要检验的组的系数。系数数量必须与不同的组数（或自变量的值数）相对应。如果系数总和不等于零，PSPP 会显示警告，但仍继续分析。`CONTRAST` 子命令最多可给出 10 次，以指定不同的对照检验。`MISSING` 子命令定义如何处理缺失值。如果指定 `LISTWISE`，则自变量或任何因变量含有缺失值的个案都将被忽略。如果指定 `ANALYSIS`，则当自变量缺失或当前正在分析的因变量缺失时，该个案被忽略。默认值为 `ANALYSIS`。`EXCLUDE` 设置表示值属于用户缺失值的变量将被排除在分析之外。`INCLUDE` 设置表示将它们包含在内。默认值为 `EXCLUDE`。

使用 `POSTHOC` 子命令可以对数据进行多次成对比较。可用的比较方法有：

  * `LSD` 最小显著差异法。
  * `TUKEY` Tukey 诚实显著性差异法。
  * `BONFERRONI` Bonferroni 检验。
  * `SCHEFFE` Scheffé 检验。
  * `SIDAK` Sidak 检验。
  * `GH` Games-Howell 检验。

使用可选语法 `ALPHA(value)` 指示 `ONEWAY` 应以值所指定的置信水平执行事后检验。如果未指定 `ALPHA(value)`，则使用的置信水平为 0.05。
