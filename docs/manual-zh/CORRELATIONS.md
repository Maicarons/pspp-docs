### 15.5 CORRELATIONS
    
    
    CORRELATIONS
         /VARIABLES = var_list [ WITH var_list ]
         [
          .
          .
          .
          /VARIABLES = var_list [ WITH var_list ]
          /VARIABLES = var_list [ WITH var_list ]
         ]
    
         [ /PRINT={TWOTAIL, ONETAIL} {SIG, NOSIG} ]
         [ /STATISTICS=DESCRIPTIVES XPROD ALL]
         [ /MISSING={PAIRWISE, LISTWISE} {INCLUDE, EXCLUDE} ]
    

`CORRELATIONS` 过程生成一组变量的皮尔逊相关系数表。同时给出系数的显著性。

至少需要一个 `VARIABLES` 子命令。如果指定了 `WITH` 关键字，则生成非方阵相关表。`WITH` 之前的变量用作表的行，`WITH` 之后的变量用作表的列。如果未指定 `WITH` 子命令，则 `CORRELATIONS` 使用所有变量生成一个方阵、对称的表。

`MISSING` 子命令决定对缺失变量的处理方式。如果设为 `INCLUDE`，则用户缺失值会纳入计算，但系统缺失值不会。如果设为 `EXCLUDE`（默认值），则用户缺失值和系统缺失值都会被排除。

如果设为 `LISTWISE`，则只要任何 `/VARIABLES` 子命令中指定的任一变量含有缺失值，整个个案就会被排除在分析之外。如果设为 `PAIRWISE`，则只有当某个特定系数对应的两个值之一缺失时，该个案才被视为缺失。默认值为 `PAIRWISE`。

`PRINT` 子命令用于控制所报告显著性值的打印方式。如果使用 `TWOTAIL` 选项，则打印双尾显著性检验。如果给定 `ONETAIL` 选项，则使用单尾检验。默认值为 `TWOTAIL`。

如果指定 `NOSIG` 选项，则显著性小于 0.05 的相关系数会被高亮。如果指定 `SIG`，则不执行高亮。这是默认值。

`STATISTICS` 子命令请求显示额外的统计量。`DESCRIPTIVES` 关键字请求显示均值、非缺失个案数，以及标准差的无偏估计量。这些统计量显示在单独的表中，涵盖任何 `/VARIABLES` 子命令中列出的所有变量。`XPROD` 关键字请求显示每一对变量的交叉乘积偏差和协方差估计量。`ALL` 关键字是 `DESCRIPTIVES` 和 `XPROD` 的并集。
