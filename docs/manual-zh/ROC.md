### 15.19 ROC


    ROC     var_list BY state_var (state_value)
            /PLOT = { CURVE [(REFERENCE)], NONE }
            /PRINT = [ SE ] [ COORDINATES ]
            /CRITERIA = [ CUTOFF({INCLUDE,EXCLUDE}) ]
              [ TESTPOS ({LARGE,SMALL}) ]
              [ CI (confidence) ]
              [ DISTRIBUTION ({FREE, NEGEXPO }) ]
            /MISSING={EXCLUDE,INCLUDE}


`ROC` 命令用于绘制数据集的受试者工作特征（ROC）曲线，并估计曲线下面积。这对于分析某个变量作为自然状态预测因子的有效性很有用。

必需的 var_list 是预测变量列表。变量 state_var 是其取值代表实际状态的变量，state_value 是该变量中表示阳性状态的值。

可选的子命令 `PLOT` 用于确定是否绘制以及怎样绘制 `ROC` 曲线。关键字 `CURVE` 表示应绘制 `ROC` 曲线，可选关键字 `REFERENCE`（应括在括号内）表示应绘制对角线参考线。如果给定关键字 `NONE`，则不绘制 `ROC` 曲线。默认情况下会绘制曲线但不绘制参考线。

可选的子命令 `PRINT` 决定应打印哪些额外的表格。有两种额外的表格可用。`SE` 关键字表示除曲线下面积本身外，还应打印面积的标准误。此外，还会打印原假设“曲线下面积等于 0.5”的 p 值。`COORDINATES` 关键字表示应打印 `ROC` 曲线坐标表。

`CRITERIA` 子命令有四个可选参数：

  * `TESTPOS` 参数可以是 `LARGE` 或 `SMALL`。默认是 `LARGE`，表示预测变量中较大的值视为阳性。`SMALL` 表示较小的值应视为阳性。
  * `CI` 参数指定应打印的置信区间。如果未给出 `PRINT` 子命令中的 `SE` 关键字，则该参数不起作用。
  * `DISTRIBUTION` 参数决定估计曲线下面积时使用的方法。有两种可能，即：`FREE` 和 `NEGEXPO`。`FREE` 方法使用非参数估计，`NEGEXPO` 方法使用双负指数分布估计。`NEGEXPO` 方法只应在阳性实际状态的数量等于阴性实际状态的数量时使用。默认是 `FREE`。
  * `CUTOFF` 参数仅为兼容性而设，会被忽略。

`MISSING` 子命令决定用户缺失值是纳入还是排除在分析之外。默认行为是排除它们。个案按列表方式排除；如果 var_list 中的任意变量或变量 state_var 为缺失值，则整个个案被排除。
