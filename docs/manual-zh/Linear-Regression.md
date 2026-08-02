#### 5.3.2 Linear Regression

线性回归是一种用于探究一个变量是否及如何与其他变量呈线性关系的技术。如果发现某个变量呈线性关系，则可用于预测该变量未来的取值。

在下面的示例中，公司的服务部门希望能够预测维修设备所需的时间，以提高其报价准确性。有人提出，维修时间可能与故障间隔时间以及设备的占空比有关。本次调查选择了 0.1 的 p 值。为了探究这一假设，使用了 `REGRESSION` 命令。该命令不仅检验变量之间是否相关，还识别潜在的线性关系。参见 [REGRESSION](REGRESSION.md)。

第一次尝试包含 **duty_cycle**：

    PSPP> get file='/usr/local/share/pspp/examples/repairs.sav'.
    PSPP> regression /variables = mtbf duty_cycle /dependent = mttr.

这次尝试产生了如下输出（部分）：

|  | Unstandardized Coefficients | Standardized Coefficients | t | Sig. |  |
| --- | --- | --- | --- | --- | --- |
|  | B | Std. Error | Beta |  |  |
| (Constant) | 10.59 | 3.11 | .00 | 3.40 | .002 |
| Mean time between failures (months) | 3.02 | .20 | .95 | 14.88 | .000 |
| Ratio of working to non-working time | -1.12 | 3.69 | -.02 | -.30 | .763 |

上表中的系数表明，公式 _mttr = 9.81 + 3.1 \times mtbf \+ 1.09 \times duty_cycle_ 可用于预测维修时间。然而，duty_cycle 系数的显著性值非常高，这将使其成为一个不可靠的预测变量。因此，重复了测试，但省略了 **duty_cycle** 变量：

    PSPP> regression /variables = mtbf /dependent = mttr.

第二次尝试产生了如下输出（部分）：

|  | Unstandardized Coefficients | Standardized Coefficients | t | Sig. |  |
| --- | --- | --- | --- | --- | --- |
|  | B | Std. Error | Beta |  |  |
| (Constant) | 9.90 | 2.10 | .00 | 4.71 | .000 |
| Mean time between failures (months) | 3.01 | .20 | .94 | 15.21 | .000 |

这一次，所有系数的显著性都不高于 0.06，表明在 0.06 的水平上，公式 _mttr = 10.5 + 3.11 \times mtbf_ 是维修时间的可靠预测变量。
