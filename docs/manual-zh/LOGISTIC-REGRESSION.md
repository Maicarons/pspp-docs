### 15.10 LOGISTIC REGRESSION

    LOGISTIC REGRESSION [VARIABLES =] dependent_var WITH predictors

         [/CATEGORICAL = categorical_predictors]

         [{/NOCONST | /ORIGIN | /NOORIGIN }]

         [/PRINT = [SUMMARY] [DEFAULT] [CI(confidence)] [ALL]]

         [/CRITERIA = [BCON(min_delta)] [ITERATE(max_interations)]
                      [LCON(min_likelihood_delta)] [EPS(min_epsilon)]
                      [CUT(cut_point)]]

         [/MISSING = {INCLUDE|EXCLUDE}]

当你希望用一个或多个预测变量来解释一个二分因变量时，可使用二元 Logistic 回归。

最简单的命令为

    LOGISTIC REGRESSION y WITH x1 x2 … xn.

这里，y 是因变量，必须是二分的；x1 … xn 是预测变量，过程会估计它们的系数。

默认情况下，模型中包含常数项。因此，完整模型为 _{\bf y} = b_0 + b_1 {\bf x_1} \+ b_2 {\bf x_2} \+ \dots \+ b_n {\bf x_n}_

本质上为分类变量的预测变量应当列在 `/CATEGORICAL` 子命令中。此处既可列出简单变量，也可列出变量之间的交互项。

如果你想要不含常数项 _b_0_ 的模型，请使用关键字 `/ORIGIN`。`/NOCONST` 是 `/ORIGIN` 的同义词。

采用迭代的 Newton-Raphson 过程来拟合模型。`/CRITERIA` 子命令用于指定过程的停止准则以及其他参数。cut_point 的值用于分类表中，它是预测值被判定为 1 的阈值。cut_point 的取值必须位于 [0,1] 区间内。在迭代过程中，如果任意一个停止准则得到满足，过程即视为完成。停止准则如下：

  * 迭代次数超过 max_iterations。max_iterations 的默认值为 20。
  * 所有系数估计量的变化小于 min_delta。min_delta 的默认值为 0.001。
  * 似然估计量变化的幅度小于 min_likelihood_delta。min_delta 的默认值为零。这意味着该准则被禁用。
  * 所有个案的估计概率的微分小于 min_epsilon。换言之，概率接近于零或一。min_epsilon 的默认值为 0.00000001。

`PRINT` 子命令控制可选统计量的显示。目前有一个这样的选项 `CI`，表示应显示优势比（odds ratio）的置信区间及其取值。`CI` 后应跟一个括号内的整数，用于指示所需置信区间的置信水平。

`MISSING` 子命令决定对缺失变量的处理方式。如果设置为 `INCLUDE`，则用户缺失值包含在计算中，但系统缺失值不包含在内。如果设置为 `EXCLUDE`（默认值），则用户缺失值和系统缺失值都被排除在外。这是默认设置。
