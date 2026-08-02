### 13.7 WEIGHT
    
    
    WEIGHT BY var_name.
    WEIGHT OFF.
    

`WEIGHT` 为个案赋予不同的权重，改变活动数据集的频数分布。`WEIGHT` 的执行会延迟到数据被读取之后。

如果指定了变量名，`WEIGHT` 会使该变量的值被用作后续统计过程的加权因子。关键字 `BY` 的使用可选但推荐。加权变量必须为数值型。临时变量不可用于加权（见 [临时变量](Scratch-Variables.md)）。

指定 `OFF` 时，后续统计过程对所有个案赋予相等的权重。

对个案赋予正整数权重 w，其统计输出与将该个案复制 w 次相同。加权因子为 0 在统计上被视为该个案不存在于输入中。加权值不必为整数，但加权变量的负值和系统缺失值在统计上被解释为加权因子 0。用户缺失值不作特殊对待。

当 `WEIGHT` 在 `TEMPORARY` 之后指定时，它只影响下一个过程（见 [TEMPORARY](TEMPORARY.md)）。

`WEIGHT` 不会导致活动数据集中的个案在内存中被复制。

#### 13.7.1 权重示例

可以定义一个包含库存物品清单的数据集。用字符串变量表示物品的描述，用数值变量表示库存数量，是合理的做法，如示例 13.5 所示。

```
data list notable list /item (a16) quantity (f8.0). begin   data nuts    345 screws  10034 washers 32012 bolts   876 end data.  echo 'Unweighted frequency table'. frequencies /variables = item /format=dfreq.  weight by quantity.  echo 'Weighted frequency table'. frequencies /variables = item /format=dfreq.
```

**示例 13.5：** 对变量 **quantity** 设置权重

最令人感兴趣的分析之一，很可能是每种库存物品的相对数量。但是，如果不设置权重变量，`FREQUENCIES`（见 [FREQUENCIES](FREQUENCIES.md)）无法告诉我们想要了解的信息，因为每种库存物品只有一个个案。示例 13.6 展示了加权与未加权的频数表之间的差异。

|  |  | 频数 | 百分比 | 有效百分比 | 累积百分比 |
| --- | --- | --- | --- | --- | --- |
| 有效 | bolts | 1 | 25.0% | 25.0% | 25.0% |
| nuts | 1 | 25.0% | 25.0% | 50.0% |  |
| screws | 1 | 25.0% | 25.0% | 75.0% |  |
| washers | 1 | 25.0% | 25.0% | 100.0% |  |
| 合计 | 4 | 100.0% |  |  |  |
|  |  | 频数 | 百分比 | 有效百分比 | 累积百分比 |
| 有效 | washers | 32012 | 74.0% | 74.0% | 74.0% |
| screws | 10034 | 23.2% | 23.2% | 97.2% |  |
| bolts | 876 | 2.0% | 2.0% | 99.2% |  |
| nuts | 345 | .8% | .8% | 100.0% |  |
| 合计 | 43267 | 100.0% |  |  |  |

**示例 13.6：** **items** 的加权与未加权频数表
