#### 15.17.1 语法
    
    
    REGRESSION
            /VARIABLES=var_list
            /DEPENDENT=var_list
            /STATISTICS={ALL, DEFAULTS, R, COEFF, ANOVA, BCOV, CI[conf, TOL]}
            { /ORIGIN | /NOORIGIN }
            /SAVE={PRED, RESID}
    

`REGRESSION` 过程读取活动数据集，并输出与用户所指定线性模型相关的统计量。

`VARIABLES` 子命令为必需，用于指定待分析的变量列表。关键字 `VARIABLES` 不可省略。`DEPENDENT` 子命令指定线性模型的因变量。`DEPENDENT` 子命令为必需。在 `VARIABLES` 子命令中列出但未在 `DEPENDENT` 子命令中列出的所有变量，均被视为线性模型中的解释变量。

所有其他子命令均为可选：

`STATISTICS` 子命令指定要显示的统计量。接受以下关键字：

`ALL`
    

下列所有统计量。

`R`
    

模型导致的平方和与因变量总平方和之比。

`COEFF`
    

包含估计模型系数及其标准误的表格。

`CI (conf)`
    

此项仅当同时选定 COEFF 时才有意义。它指定应打印系数的置信区间。可选值 conf 必须置于括号内，是以百分比表示的期望置信水平。

`ANOVA`
    

模型的方差分析表。

`BCOV`
    

估计模型系数的协方差矩阵。

`TOL`
    

方差膨胀因子及其倒数。除非同时给定 COEFF，否则无效。

`DEFAULT`
    

等同于选定了 R、COEFF 和 ANOVA。这是未指定 /STATISTICS 命令，或指定了但未带任何参数时的结果。

`ORIGIN` 与 `NOORIGIN` 子命令互斥。`ORIGIN` 表示回归应经过原点。当且仅当有理由相信回归确实经过原点——即上文的 _b_0_ 为零时，才应使用此选项。默认为 `NOORIGIN`。

`SAVE` 子命令使 PSPP 将拟合模型的残差或预测值保存到活动数据集。若此类变量不存在，PSPP 将残差存入名为 ‘RES1’ 的变量；若 ‘RES1’ 已存在，则存入 ‘RES2’；若 ‘RES1’ 和 ‘RES2’ 均已存在，则存入 ‘RES3’，依此类推。它对预测值变量名的选取方式类似，但以前缀 ‘PRED’ 命名。使用 `SAVE` 时，PSPP 会忽略 `TEMPORARY`，将临时变换视为永久变换。
