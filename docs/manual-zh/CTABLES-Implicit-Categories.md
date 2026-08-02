#### 15.7.5.2 隐式类别

在没有显式类别列表的情况下，`CATEGORIES` 允许通过 `KEY`、`ORDER` 和 `MISSING` 来指定如何选择并排序类别。

`KEY` 设置指定排序键。默认情况下，或使用 `KEY=VALUE` 时，类别按默认值排序。类别也可以按值标签排序（`KEY=LABEL`），或按汇总函数的值排序，例如 `KEY=COUNT`。

默认情况下，或使用 `ORDER=A` 时，类别按升序排序。指定 `ORDER=D` 则按降序排序。

默认情况下，或使用 `MISSING=EXCLUDE` 时，用户缺失值被排除。指定 `MISSING=INCLUDE` 可包含用户缺失值。系统缺失值始终被排除。

以下示例语法和输出展示了 `MISSING=INCLUDE` 如何使缺失值被包含在类别列表中。

    
    CTABLES /TABLE freqOfDriving.
    CTABLES /TABLE freqOfDriving
            /CATEGORIES VARIABLES=freqOfDriving MISSING=INCLUDE.
    

|  |  | Count |
| --- | --- | --- |
| 1. How often do you usually drive a car or other motor vehicle? | Every day | 4667 |
| Several days a week | 1274 |  |
| Once a week or less | 361 |  |
| Only certain times a year | 130 |  |
| Never | 540 |  |
|  |  | Count |
| 1. How often do you usually drive a car or other motor vehicle? | Every day | 4667 |
| Several days a week | 1274 |  |
| Once a week or less | 361 |  |
| Only certain times a year | 130 |  |
| Never | 540 |  |
| Don't know | 8 |  |
| Refused | 19 |  |
