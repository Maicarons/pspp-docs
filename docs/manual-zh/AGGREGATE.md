### 12.1 AGGREGATE
    
    
    AGGREGATE
            [OUTFILE={*,’file_name’,file_handle} [MODE={REPLACE,ADDVARIABLES}]]
            [/MISSING=COLUMNWISE]
            [/PRESORTED]
            [/DOCUMENT]
            [/BREAK=var_list]
            /dest_var[’label’]…=agr_func(src_vars[, args]…)…
    

`AGGREGATE` 将一组个案汇总为单个个案。它把在一个或多个称为 _break variables_（分组变量）的变量上取值相同的个案划分成组。提供若干函数用于汇总个案内容。

`AGGREGATE` 的语法由用于控制其行为的子命令（全部可选）组成，其后跟一个或多个目标变量赋值，每个赋值都使用一个聚合函数来定义其计算方式。

必须排在第一位的 `OUTFILE` 子命令命名了 `AGGREGATE` 输出的目标。它可以通过文件名或文件句柄（参见 [File Handles](File-Handles.md)）指定一个系统文件，通过名称指定一个数据集（参见 [Datasets](Datasets.md)），或使用 ‘*’ 替换活动数据集。`AGGREGATE` 将其输出写入该文件。

仅当 `OUTFILE=*` 时，可紧接着用值 `ADDVARIABLES` 或 `REPLACE` 指定 `MODE`：

  * 使用默认值 `REPLACE` 时，活动数据集被一个新数据集替换，该新数据集只包含分组变量和目标变量。新文件包含的个案数等于分组变量的唯一组合数。
  * 使用 `ADDVARIABLES` 时，目标变量被添加到现有活动数据集的变量中。在分组变量上取值组合相同的个案，其目标变量取值也相同。活动数据集中的个案数量保持不变。数据必须已按分组变量排序，也就是说，`ADDVARIABLES` 隐含 `PRESORTED`。

如果省略 `OUTFILE`，`AGGREGATE` 的行为如同指定了 `OUTFILE=* MODE=ADDVARIABLES`。

默认情况下，`AGGREGATE` 先按分组变量对数据排序。如果活动数据集已经按分组变量排序或分组，可指定 `PRESORTED` 以节省时间。使用 `MODE=ADDVARIABLES` 时，数据必须预先排序。

指定 `DOCUMENT` 可将活动数据集中的文档复制到聚合文件（参见 [DOCUMENT](DOCUMENT.md)）。否则，即使聚合文件替换了活动数据集，聚合文件中也不包含任何文档。

通常，只要聚合函数所用的非缺失数据足够，`AGGREGATE` 就会产生非缺失值，即只需一个非缺失值，而对于 `SD` 和 `SD.` 聚合函数则需两个非缺失值。指定 `/MISSING=COLUMNWISE` 可使 `AGGREGATE` 在输入值中有一个或多个缺失时输出缺失值。

`BREAK` 子命令可选，但通常会出现。在 `BREAK` 上列出用于将活动数据集划分为待汇总组的变量。

`AGGREGATE` 对子命令的顺序有严格要求。`OUTFILE` 必须排第一，其后是 `MISSING`。`PRESORTED` 和 `DOCUMENT` 在 `MISSING` 之后，二者顺序任意，其后是 `BREAK`，再之后是聚合变量说明。

至少需要一组聚合变量。每组包含一个聚合变量列表、一个等号（‘=’）、一个聚合函数名（见下表），以及括号中的源变量列表。少数聚合函数不接受源变量，有些聚合函数在源变量名之后还需要额外的参数。

`AGGREGATE` 创建的聚合变量通常没有变量标签、值标签或缺失值。它们的默认打印和写入格式取决于所使用的聚合函数，详见下表。聚合变量的变量标签可在聚合变量列表中的变量名之后指定。

每组必须具有与聚合变量数量完全相等的源变量。每个聚合变量接收将指定聚合函数应用于相应源变量的结果。

以下聚合函数只能应用于数值变量：

`MEAN(var_name…)`
    

算术平均值。限于数值。默认格式为 F8.2。

`MEDIAN(var_name…)`
    

中位数。限于数值。默认格式为 F8.2。

`SD(var_name…)`
    

均值的标准差。限于数值。默认格式为 F8.2。

`SUM(var_name…)`
    

总和。限于数值。默认格式为 F8.2。

这些聚合函数可应用于数值变量和字符串变量：

`CGT(var_name…, value)`
`CLT(var_name…, value)`
`CIN(var_name…, low, high)`
`COUT(var_name…, low, high)`
    

个案的总权重，分别对应于大于或小于 value，或在闭区间 [low,high] 之内或之外的情形。默认格式为 F5.3。

`FGT(var_name…, value)`
`FLT(var_name…, value)`
`FIN(var_name…, low, high)`
`FOUT(var_name…, low, high)`
    

取值中大于或小于 value，或在闭区间 [low,high] 之内或之外的比例。默认格式为 F5.3。

`FIRST(var_name…)`
`LAST(var_name…)`
    

分别是分组组内第一个或最后一个非缺失值。聚合变量从源变量接收完整的字典信息。`AGGREGATE`（以及 `SORT CASES`）执行的排序是稳定排序。这意味着在排序前分组变量取特定值的第一个（或最后一个）个案，在排序后仍是该分组组内的第一个（或最后一个）个案。

`MIN(var_name…)`
`MAX(var_name…)`
    

分别是最小值或最大值。聚合变量从源变量接收完整的字典信息。

`N(var_name…)`
`NMISS(var_name…)`
    

分别是非缺失值或缺失值的总权重。若未启用加权，默认格式为 F7.0；若已启用，则为 F8.2（参见 [WEIGHT](WEIGHT.md)）。

`NU(var_name…)`
`NUMISS(var_name…)`
    

分别是非缺失值或缺失值的计数，忽略个案权重。默认格式为 F7.0。

`PGT(var_name…, value)`
`PLT(var_name…, value)`
`PIN(var_name…, low, high)`
`POUT(var_name…, low, high)`
    

取值中大于或小于 VALUE，或在闭区间 [low,high] 之内或之外的百分比（0 到 100）。默认格式为 F5.1。

这些聚合函数不接受源变量：

`N`
    

聚合形成本组的所有个案的总权重。若未启用加权，默认格式为 F7.0；若已启用，则为 F8.2（参见 [WEIGHT](WEIGHT.md)）。

`NU`
    

聚合形成本组的个案计数，忽略个案权重。默认格式为 F7.0。

聚合函数按照内部字符编码比较字符串值。在大多数现代计算机上，这是 ASCII 或其超集。

上面列出的聚合函数在计算中会排除所有用户缺失值。要包含用户缺失值，可在函数名末尾加一个句点（‘.’）。（例如 ‘SUM.’）。（注意：若将此类函数作为一行中的最后一个记号，该句点会被解释为该命令的结束符。）

`AGGREGATE` 会忽略并取消当前的 `SPLIT FILE` 设置（参见 [SPLIT FILE](SPLIT-FILE.md)）。

#### 12.1.1 聚合示例

数据集 personnel.sav 提供了许多人的职业和薪水。然而在许多场合，如此详细的信息并无太大意义，但各个职业的聚合统计量往往是有用的。在示例 12.1 中，`AGGREGATE` 命令用于计算每个职业的均值、中位数和标准差。

```
GET FILE="personnel.sav". AGGREGATE OUTFILE=* MODE=REPLACE         /BREAK=occupation         /occ_mean_salary=MEAN(salary)         /occ_median_salary=MEDIAN(salary)         /occ_std_dev_salary=SD(salary). LIST.
```

**示例 12.1：** 从 personnel.sav 文件计算聚合统计量

由于我们选择了 ‘MODE=REPLACE’ 选项，在结果 12.1 中不再存在单个人员的个案。每个聚合值已被单个个案所取代。

| occupation | occ_mean_salary | occ_median_salary | occ_std_dev_salary |
| --- | --- | --- | --- |
| Artist | 37836.18 | 34712.50 | 7631.48 |
| Baker | 45075.20 | 45075.20 | 4411.21 |
| Barrister | 39504.00 | 39504.00 | . |
| Carpenter | 39349.11 | 36190.04 | 7453.40 |
| Cleaner | 41142.50 | 39647.49 | 14378.98 |
| Cook | 40357.79 | 43194.00 | 11064.51 |
| Manager | 46452.14 | 45657.56 | 6901.69 |
| Mathematician | 34531.06 | 34763.06 | 5267.68 |
| Painter | 45063.55 | 45063.55 | 15159.67 |
| Payload Specialist | 34355.72 | 34355.72 | . |
| Plumber | 40413.91 | 40410.00 | 4726.05 |
| Scientist | 36687.07 | 36803.83 | 10873.54 |
| Scrientist | 42530.65 | 42530.65 | . |
| Tailor | 34586.79 | 34586.79 | 3728.98 |

**结果 12.1：** 每个 **occupation**（职业）的聚合均值、中位数和标准差

注意，标准差的某些值为空。这是因为相应职业只有一个个案。
