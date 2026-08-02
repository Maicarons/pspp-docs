### 15.8 FACTOR
    
    
    FACTOR  {
             VARIABLES=var_list,
             MATRIX IN ({CORR,COV}={*,file_spec})
            }
    
            [ /METHOD = {CORRELATION, COVARIANCE} ]
    
            [ /ANALYSIS=var_list ]
    
            [ /EXTRACTION={PC, PAF}]
    
            [ /ROTATION={VARIMAX, EQUAMAX, QUARTIMAX, PROMAX[(k)], NOROTATE}]
    
            [ /PRINT=[INITIAL] [EXTRACTION] [ROTATION] [UNIVARIATE] [CORRELATION] [COVARIANCE] [DET] [KMO] [AIC] [SIG] [ALL] [DEFAULT] ]
    
            [ /PLOT=[EIGEN] ]
    
            [ /FORMAT=[SORT] [BLANK(n)] [DEFAULT] ]
    
            [ /CRITERIA=[FACTORS(n)] [MINEIGEN(l)] [ITERATE(m)] [ECONVERGE (delta)] [DEFAULT] ]
    
            [ /MISSING=[{LISTWISE, PAIRWISE}] [{INCLUDE, EXCLUDE}] ]
    
    
`FACTOR` 命令对数据集执行因子分析或主轴线因子分析。它可用于发现数据中的公共因子，或用于数据降维。

`VARIABLES` 子命令是必需的（除非使用 `MATRIX IN` 子命令）。它列出参与分析的变量。（`ANALYSIS` 子命令可以选择进一步限制参与的变量；它主要与 `MATRIX IN` 结合使用。）

如果指定 `MATRIX IN` 而不是 `VARIABLES`，则分析在预先准备好的相关矩阵或协方差矩阵文件上执行，而不是在单个数据个案上执行。通常矩阵文件由 `MATRIX DATA` 生成（见 [MATRIX DATA](MATRIX-DATA.md)）或由第三方提供。如果指定，`MATRIX IN` 后必须跟 ‘COV’ 或 ‘CORR’，然后跟 ‘=’ 和 file_spec，全部在括号内。file_spec 可以是星号（指示当前加载的数据集），也可以是要加载的文件名。有关文件的预期格式，请参见 [MATRIX DATA](MATRIX-DATA.md)。

`/EXTRACTION` 子命令用于指定从数据中提取因子（成分）的方式。如果指定 `PC`，则使用主成分分析。如果指定 `PAF`，则使用主轴线因子分析。默认使用主成分分析。

`/ROTATION` 子命令用于指定旋转提取解的方法。有三种正交旋转方法可用：`VARIMAX`（默认）、`EQUAMAX` 和 `QUARTIMAX`。有一种斜交旋转方法，_即_：`PROMAX`。可选地，您可以输入 promax 旋转的幂 k，必须括在括号内。k 的默认值为 5。如果您不希望执行任何旋转，关键字 `NOROTATE` 可阻止命令对数据执行任何旋转。

`/METHOD` 子命令应用于确定分析数据的是协方差矩阵还是相关矩阵。默认分析相关矩阵。

`/PRINT` 子命令可用于选择报告分析的哪些特征：

  * `UNIVARIATE` 打印均值、标准差和总权重的表格。
  * `INITIAL` 打印初始共同度和特征值。
  * `EXTRACTION` 打印提取的共同度和特征值。
  * `ROTATION` 打印旋转后的共同度和特征值。
  * `CORRELATION` 打印相关矩阵。
  * `COVARIANCE` 打印协方差矩阵。
  * `DET` 打印相关或协方差矩阵的行列式。
  * `AIC` 打印反映像协方差矩阵和反映像相关矩阵。
  * `KMO` 打印 Kaiser-Meyer-Olkin 取样充足性度量和 Bartlett 球形度检验。
  * `SIG` 打印相关矩阵元素的显著性。
  * `ALL` 打印以上所有内容。
  * `DEFAULT` 等同于 `INITIAL` 和 `EXTRACTION`。

如果给定 `/PLOT=EIGEN`，则打印特征值的“碎石”图。这有助于可视化因子并决定应保留哪些因子（成分）。

`/FORMAT` 子命令决定在载荷矩阵中如何显示数据。如果指定 `SORT`，则变量按显著性降序排序。如果指定 `BLANK(n)`，则绝对值小于 n 的系数不打印。如果指定关键字 `DEFAULT`，或未指定 `/FORMAT` 子命令，则不执行排序，并打印所有系数。

您可以使用 `/CRITERIA` 子命令指定如何选择提取的因子（成分）数量。如果指定 `FACTORS(n)`（其中 n 为整数），则提取 n 个因子。否则使用 `MINEIGEN` 设置。`MINEIGEN(l)` 要求提取所有特征值大于或等于 l 的因子。l 的默认值为 1。`ECONVERGE` 设置仅在使用迭代算法提取因子（如主轴线因子分析）时生效。`ECONVERGE(delta)` 指定当一次迭代与上一次迭代之间共同度估计的最大绝对差值小于 delta 时停止迭代。delta 的默认值为 0.001。

`ITERATE(m)` 可能出现任意次数，用于两个不同的目的。它用于设置收敛的最大迭代次数（m），也用于设置旋转的最大迭代次数。它影响收敛还是旋转取决于 `ITERATE` 子命令后面跟随哪个子命令。如果跟随 `EXTRACTION`，则影响收敛。如果跟随 `ROTATION`，则影响旋转。如果 `ITERATE` 子命令后既不跟随 `ROTATION` 也不跟随 `EXTRACTION`，则整个子命令被忽略。m 的默认值为 25。

`MISSING` 子命令决定对缺失变量的处理。如果设置 `INCLUDE`，则用户缺失值包含在计算中，但系统缺失值不包含。如果设置 `EXCLUDE`（默认），则用户缺失值与系统缺失值一样被排除。这是默认设置。如果设置 `LISTWISE`，则只要 `VARIABLES` 子命令中指定的任何变量包含缺失值，整个个案就被排除在分析之外。

如果设置 `PAIRWISE`，则仅当特定系数的两个值都缺失时，个案才被视为缺失。默认是 `LISTWISE`。
