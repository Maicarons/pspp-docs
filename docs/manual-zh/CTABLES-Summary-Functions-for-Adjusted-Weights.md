#### 15.7.2.3 调整权重所用的汇总函数

如果 `WEIGHT` 子命令指定了有效权重变量（参见 [CTABLES 有效权重](CTABLES-Effective-Weight.md)），则下列汇总函数使用其值，而不是字典权重变量的值。否则，它们等同于不带“E”前缀的汇总函数：

  * `ECOUNT`（“Adjusted Count”，F40.0）
  * `ETOTALN`（“Adjusted Total N”，F40.0）
  * `EVALIDN`（“Adjusted Valid N”，F40.0）
