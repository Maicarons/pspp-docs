### 15.12 NPAR TESTS

    NPAR TESTS

         nonparametric test subcommands
         .
         .
         .

         [ /STATISTICS={DESCRIPTIVES} ]

         [ /MISSING={ANALYSIS, LISTWISE} {INCLUDE, EXCLUDE} ]

         [ /METHOD=EXACT [ TIMER [(n)] ] ]


`NPAR TESTS` 执行非参数检验。非参数检验对数据的分布所作假设极少。可以使用相应的子命令指定一个或多个检验。如果同时指定了 `/STATISTICS` 子命令，则会为作为任意检验对象的每个变量生成汇总统计量。

如果需要精确数值，某些检验的执行可能耗时很长。因此，默认使用渐近近似，除非指定了子命令 `/METHOD=EXACT`。精确检验给出更准确的结果，但执行时间可能长得无法接受。如果使用 `TIMER` 关键字，则设置一个最长时间，超过该时间后放弃检验并打印警告消息。时间应以分钟为单位，在 `TIMER` 关键字后的括号中指定。如果 `TIMER` 关键字没有给出该数值，则使用默认值 5 分钟。

| • BINOMIAL |  | 二项分布检验 |
| --- | --- | --- |
| • CHISQUARE |  | 卡方检验 |
| • COCHRAN |  | Cochran Q 检验 |
| • FRIEDMAN |  | Friedman 检验 |
| • KENDALL |  | Kendall’s W 检验 |
| • KOLMOGOROV-SMIRNOV |  | Kolmogorov-Smirnov 检验 |
| • KRUSKAL-WALLIS |  | Kruskal-Wallis 检验 |
| • MANN-WHITNEY |  | Mann-Whitney U 检验 |
| • MCNEMAR |  | McNemar 检验 |
| • MEDIAN |  | 中位数检验 |
| • RUNS |  | 游程检验 |
| • SIGN |  | 符号检验 |
| • WILCOXON |  | Wilcoxon 符号秩检验 |
