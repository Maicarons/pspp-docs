#### 15.7.11 有效权重

    
    /WEIGHT VARIABLE=_variable_
    

`WEIGHT` 子命令是可选的，且必须出现在 `TABLE` 之前。如果指定，它必须命名一个数值变量，称为 _effective weight_（有效权重）或 _adjustment weight_（调整权重）。在 `CTABLES` 的大多数计算中，有效权重变量会取代字典中的权重变量（参见 [WEIGHT](WEIGHT.md)，如果存在的话）。唯一的例外是 `COUNT`、`TOTALN` 和 `VALIDN` 汇总函数，它们改用字典权重。

从 PSPP 字典获得的权重在个案级别会四舍五入到最接近的整数。有效权重不会被四舍五入。无论权重来源如何，PSPP 都不会分析有效权重为零、缺失或为负的个案。
