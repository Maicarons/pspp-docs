### 15.6 CROSSTABS
    
    
    CROSSTABS
            /TABLES=var_list BY var_list [BY var_list]…
            /MISSING={TABLE,INCLUDE,REPORT}
            /FORMAT={TABLES,NOTABLES}
                    {AVALUE,DVALUE}
            /CELLS={COUNT,ROW,COLUMN,TOTAL,EXPECTED,RESIDUAL,SRESIDUAL,
                    ASRESIDUAL,ALL,NONE}
            /COUNT={ASIS,CASE,CELL}
                   {ROUND,TRUNCATE}
            /STATISTICS={CHISQ,PHI,CC,LAMBDA,UC,BTAU,CTAU,RISK,GAMMA,D,
                         KAPPA,ETA,CORR,ALL,NONE}
            /BARCHART
    
    (Integer mode.)
            /VARIABLES=var_list (low,high)…
    

`CROSSTABS` 过程显示用户所请求的列联表。它可以为列联表中的每个单元格计算若干统计量。此外，还可以为每个表本身计算若干统计量。

`TABLES` 子命令用于指定要报告的表。允许任意维度数，每个维度也允许任意数量的变量。`TABLES` 子命令可根据需要重复多次。这是 _general mode_（通用模式）下唯一必需的子命令。

有时，可能希望调用一种称为 _integer mode_（整数模式）的特殊模式。通常，在通用模式下，PSPP 自动确定数据中出现了哪些值。在整数模式下，用户指定数据所取值的范围。要调用此模式，需指定 `VARIABLES` 子命令，为 `TABLES` 子命令中要使用的每个变量给出括号内的数据值范围。范围内的数据值会被截断为最接近的整数，然后赋给该值。若出现范围之外的值，则将它们丢弃。当使用该子命令时，`VARIABLES` 必须位于 `TABLES` 子命令之前。

在通用模式下，`TABLES` 上可指定数值变量和字符串变量。在整数模式下，只允许数值变量。

`MISSING` 子命令决定对用户缺失值的处理方式。设为默认值 `TABLE` 时，缺失值按表逐个丢弃。设为 `INCLUDE` 时，用户缺失值被纳入表和统计。设为 `REPORT` 时（仅允许在整数模式下），用户缺失值被纳入表，但会标注脚注，并排除在统计计算之外。

`FORMAT` 子命令控制要显示的列联表的特征。它有多种可选设置：

  * `TABLES`（默认）会使列联表被输出。`NOTABLES`（等价于 `CELLS=NONE`）则抑制其输出。
  * `AVALUE`（默认）使取值按升序排序。`DVALUE` 表示降序排序。

`CELLS` 子命令控制所显示的列联表中每个单元格的内容。可选设置如下：

COUNT
    

频数。

ROW
    

行百分比。

COLUMN
    

列百分比。

TOTAL
    

表百分比。

EXPECTED
    

期望值。

RESIDUAL
    

残差。

SRESIDUAL
    

标准化残差。

ASRESIDUAL
    

调整标准化残差。

ALL
    

以上全部。

NONE
    

完全抑制单元格。

未指定任何设置的 ‘/CELLS’ 会请求 `COUNT`、`ROW`、`COLUMN` 和 `TOTAL`。如果完全未指定 `CELLS`，则只选择 `COUNT`。

默认情况下，列联表和统计使用原始个案权重，不四舍五入。使用 `/COUNT` 子命令进行取整：CASE 在读取个案时对各个权重取整，CELL 在列联表构建完成后对其中各单元格的权重取整，ASIS 显式指定默认的不取整行为。请求取整时，默认 ROUND 按最接近的整数取整，TRUNCATE 向零取整。

`STATISTICS` 子命令选择要计算的统计量：

CHISQ
    

皮尔逊卡方、似然比、费歇尔精确检验、连续性校正、线性-by-线性关联。

PHI
    

Phi 系数。

CC
    

列联系数。

LAMBDA
    

Lambda。

UC
    

不确定系数。

BTAU
    

Tau-b。

CTAU
    

Tau-c。

RISK
    

风险估计。

GAMMA
    

Gamma。

D
    

Somers’ D。

KAPPA
    

Cohen’s Kappa。

ETA
    

Eta。

CORR
    

斯皮尔曼相关、皮尔逊 r。

ALL
    

以上全部。

NONE
    

无统计量。

所选统计量仅在适用时才计算。某些统计量要求特定大小的表，有些统计量仅在整数模式下计算。

未指定任何设置的 ‘/STATISTICS’ 会选择 CHISQ。如果未给出 `STATISTICS` 子命令，则不计算任何统计量。

‘/BARCHART’ 子命令为每个表的前两个变量生成簇状条形图。如果表的变量超过两个，则第三个及后续层级的计数会被聚合，图表会像只有两个变量一样生成。

**请注意：** 当前 `CROSSTABS` 的实现存在以下限制：

  * 某些方向性度量的显著性未计算。
  * 未计算 Goodman 和 Kruskal 的 tau 或对称 Somers’ d 的渐近标准误。
  * 未计算对称不确定系数的近似 T。

欢迎修复上述任何缺陷。

#### 15.6.1 列联表示例

一位研究者希望了解在某行业中，个人的性别是否与其职业相关。为了调查这一点，她确认 personnel.sav 是一个具有代表性的、随机选取的人员样本。该研究者的零假设是：个人的性别与其职业无关。她使用卡方独立性检验来研究该假设。

```
get file="personnel.sav".  crosstabs 	/tables= occupation by sex 	/cells = count expected 	/statistics=chisq.
```

**示例 15.3：** 对 **sex** 和 **occupation** 变量运行列联表

示例 15.3 中的语法执行了卡方独立性检验。行 `/tables = occupation by sex` 表示 **occupation** 和 **sex** 是要制表的变量。要使用图形用户界面完成此操作，必须将这些变量名分别放入“Row”（行）和“Column”（列）字段，如截图 15.3 所示。

```

```

**截图 15.3：** 已选择 **sex** 和 **occupation** 变量的列联表对话框

类似地，“Cells”（单元格）按钮会显示一个对话框，用于选择 `count` 和 `expected` 选项。对于此检验，可以取消选择所有其他单元格选项。

可使用“Format”（格式）和“Statistics”（统计）按钮为 `FORMAT` 和 `STATISTICS` 子命令选择选项。在本例中，“Statistics”只需勾选“Chisq”选项。其他所有选项都应取消勾选。“Format”对话框不需要特殊设置。

如结果 15.1 所示，`CROSSTABS` 生成一个列联表，其中包含每个性别和每个职业的观测频数和期望频数。期望频数是在零假设成立时本应观测到的频数。

Pearson 卡方值的显著性远大于通常接受的 0.05，因此无法拒绝零假设。于是研究者只能得出：个人的性别与其职业无关。

|  | N | Percent | N | Percent | N | Percent |
| --- | --- | --- | --- | --- | --- | --- |
|  | Cases |  |  |  |  |  |
|  | Valid | Missing | Total |  |  |  |
| occupation × sex | 54 | 96.4% | 2 | 3.6% | 56 | 100.0% |
|  |  |  | sex | Total |  |  |
|  |  |  | Male | Female |  |  |
| occupation | Artist | Count | 2 | 6 | 8 |  |
| Expected | 4.89 | 3.11 | .15 |  |  |  |
| Baker | Count | 1 | 1 | 2 |  |  |
| Expected | 1.22 | .78 | .04 |  |  |  |
| Barrister | Count | 0 | 1 | 1 |  |  |
| Expected | .61 | .39 | .02 |  |  |  |
| Carpenter | Count | 3 | 1 | 4 |  |  |
| Expected | 2.44 | 1.56 | .07 |  |  |  |
| Cleaner | Count | 4 | 0 | 4 |  |  |
| Expected | 2.44 | 1.56 | .07 |  |  |  |
| Cook | Count | 3 | 2 | 5 |  |  |
| Expected | 3.06 | 1.94 | .09 |  |  |  |
| Manager | Count | 4 | 4 | 8 |  |  |
| Expected | 4.89 | 3.11 | .15 |  |  |  |
| Mathematician | Count | 3 | 1 | 4 |  |  |
| Expected | 2.44 | 1.56 | .07 |  |  |  |
| Painter | Count | 1 | 1 | 2 |  |  |
| Expected | 1.22 | .78 | .04 |  |  |  |
| Payload Specialist | Count | 1 | 0 | 1 |  |  |
| Expected | .61 | .39 | .02 |  |  |  |
| Plumber | Count | 5 | 0 | 5 |  |  |
| Expected | 3.06 | 1.94 | .09 |  |  |  |
| Scientist | Count | 5 | 2 | 7 |  |  |
| Expected | 4.28 | 2.72 | .13 |  |  |  |
| Scrientist | Count | 0 | 1 | 1 |  |  |
| Expected | .61 | .39 | .02 |  |  |  |
| Tailor | Count | 1 | 1 | 2 |  |  |
| Expected | 1.22 | .78 | .04 |  |  |  |
| Total | Count | 33 | 21 | 54 |  |  |
| Expected | .61 | .39 | 1.00 |  |  |  |
|  | Value | df | Asymptotic Sig. (2-tailed) |  |  |  |
| Pearson Chi-Square | 15.59 | 13 | .272 |  |  |  |
| Likelihood Ratio | 19.66 | 13 | .104 |  |  |  |
| N of Valid Cases | 54 |  |  |  |  |  |

**结果 15.1：** **sex** 与 **occupation** 之间独立性的检验结果
