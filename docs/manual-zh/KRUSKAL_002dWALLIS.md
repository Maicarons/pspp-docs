#### 15.12.7 Kruskal-Wallis 检验
    
    
         [ /KRUSKAL-WALLIS = var_list BY var (lower, upper) ]
    
    
Kruskal-Wallis 检验用于比较来自任意数量总体的数据。它不假设正态性。待比较的数据由 var_list 指定。决定数据所属组的分类变量由 var 给出。下限 lower 和上限 upper 指定 var 的有效范围。如果 upper 小于 lower，PSPP 将假定两者的值互换。任何 var 落在 [lower, upper] 之外的个案都将被忽略。

会打印每个组的秩均值，以及检验的卡方值和显著性。可以使用缩写子命令 `K-W` 代替 `KRUSKAL-WALLIS`。
