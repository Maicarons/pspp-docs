### 15.13 T-TEST
    
    
    T-TEST
            /MISSING={ANALYSIS,LISTWISE} {EXCLUDE,INCLUDE}
            /CRITERIA=CI(confidence)
    
    
    (One Sample mode.)
            TESTVAL=test_value
            /VARIABLES=var_list
    
    
    (Independent Samples mode.)
            GROUPS=var(value1 [, value2])
            /VARIABLES=var_list
    
    
    (Paired Samples mode.)
            PAIRS=var_list [WITH var_list [(PAIRED)] ]
    
    

`T-TEST` 过程输出用于检验均值假设的表格。它在以下三种模式之一下运行：

  * 单样本模式。 
  * 独立组模式。 
  * 配对模式。 

下面详细描述每种模式。有两个可选子命令为所有模式所共有。

`/CRITERIA` 子命令告知 PSPP 检验中使用的置信区间。默认值为 0.95。

`MISSING` 子命令决定对缺失变量的处理方式。若设置为 `INCLUDE`，则用户缺失值会参与计算，但系统缺失值不会。若设置为 `EXCLUDE`（默认值），则用户缺失值与系统缺失值都会被排除。此为默认值。

若设置为 `LISTWISE`，则只要 `/VARIABLES`、`/PAIRS` 或 `/GROUPS` 子命令中指定的任意变量含有缺失值，整个个案就会被排除出分析。若设置为 `ANALYSIS`，则缺失值仅在其所需分析中被排除。此为默认值。

| • 单样本模式 |  | 与假设均值进行比较检验 |
| --- | --- | --- |
| • 独立样本模式 |  | 检验两个独立组均值是否相等 |
| • 配对样本模式 |  | 检验两个相依组均值是否相等 |
