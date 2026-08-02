#### 15.12.8 Mann-Whitney U Test

         [ /MANN-WHITNEY = var_list BY var (group1, group2) ]

Mann-Whitney 子命令用于检验两组数据是否来自不同的总体。要检验的变量应在 var_list 中指定，而决定检验变量属于哪个组的分组变量在 var 中指定。Var 可以是字符串变量或字母（alpha）变量。group1 和 group2 指定 var 的两个取值，它们决定检验数据的分组。var 取值既非 group1 也非 group2 的个案将被忽略。

将打印 Mann-Whitney U 统计量、Wilcoxon W 以及显著性。你可以将子命令 `MANN-WHITNEY` 缩写为 `M-W`。
