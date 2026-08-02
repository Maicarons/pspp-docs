### 15.15 QUICK CLUSTER

    QUICK CLUSTER var_list
          [/CRITERIA=CLUSTERS(k) [MXITER(max_iter)] CONVERGE(epsilon) [NOINITIAL]]
          [/MISSING={EXCLUDE,INCLUDE} {LISTWISE, PAIRWISE}]
          [/PRINT={INITIAL} {CLUSTER}]
          [/SAVE[=[CLUSTER[(membership_var)]] [DISTANCE[(distance_var)]]]


`QUICK CLUSTER` 命令对数据集执行 k 均值聚类。当你希望将个案分配到具有相似值的聚类中，并且你已经知道聚类的数量时，这很有用。

最低要求是 ‘QUICK CLUSTER’ 后跟包含聚类数据的变量名。通常你还希望指定 `/CRITERIA=CLUSTERS(k)`，其中 k 是聚类数量。如果未指定，则 k 默认为 2。

如果你使用 `/CRITERIA=NOINITIAL`，则使用一种朴素算法来选择初始聚类。这将提供更快的执行速度，但初始聚类的分离程度较差，因此最终结果可能较差。

`QUICK CLUSTER` 使用迭代算法来选择聚类中心。子命令 `/CRITERIA=MXITER(max_iter)` 设置最大迭代次数。在分类过程中，PSPP 将继续迭代，直到完成 max_iter 次迭代或满足收敛准则（见下文）。max_iter 的默认值为 2。

但是，如果你指定 `/CRITERIA=NOUPDATE`，则在选择初始中心后，不再对聚类中心进行更新。在这种情况下，如果指定了 max_iter，则被忽略。

子命令 `/CRITERIA=CONVERGE(epsilon)` 用于设置收敛准则。收敛准则的值为 epsilon 乘以 _初始_ 聚类中心之间的最小距离。当一次迭代与下一次迭代之间的平均聚类距离小于收敛准则时，迭代停止。epsilon 的默认值为零。

`MISSING` 子命令决定如何处理缺失变量。如果设置为 `INCLUDE`，则用户缺失值按表面值处理，而不作为缺失值。如果设置为 `EXCLUDE`（默认值），则用户缺失值和系统缺失值都被排除。

如果设置为 `LISTWISE`，则只要任何聚类变量包含缺失值，整个个案就会从分析中排除。如果设置为 `PAIRWISE`，则仅当所有聚类变量都包含缺失值时，才将该个案视为缺失。否则，它基于非缺失值进行聚类。默认值为 `LISTWISE`。

`PRINT` 子命令请求打印额外的输出。如果设置了 `INITIAL`，则会打印初始聚类成员关系。如果设置了 `CLUSTER`，则显示各个个案的聚类成员关系（可能会产生冗长的输出）。

你可以指定子命令 `SAVE`，要求将每个个案的聚类成员关系以及该个案与其聚类中心的欧氏距离保存到活动数据集中的一个新变量中。要保存聚类成员关系，使用 `CLUSTER` 关键字；要保存距离，使用 `DISTANCE` 关键字。每个关键字后面都可以选择性地跟一个括号内的变量名，以指定包含所保存参数的新变量。如果未指定变量名，则 PSPP 会创建一个。
