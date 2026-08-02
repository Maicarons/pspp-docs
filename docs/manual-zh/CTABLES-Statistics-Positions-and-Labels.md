#### 15.7.3 统计量的位置与标签

    /SLABELS
        [POSITION={COLUMN _|_ ROW _|_ LAYER}]
        [VISIBLE={YES _|_ NO}]

`SLABELS` 子命令用于控制其前面的 `TABLE` 子命令中汇总统计量的位置与可见性。

`POSITION` 设置汇总统计量所出现的轴。默认使用 `POSITION=COLUMN`，此时每个汇总统计量显示为一列。例如：

    CTABLES /TABLE=age [MEAN, MEDIAN] BY gender.

|  | Mean | Median | Mean | Median |
| --- | --- | --- | --- | --- |
|  | S3a. GENDER: |  |  |  |
|  | Male | Female |  |  |
| D1. AGE: What is your age? | 46 | 45 | 50 | 52 |

使用 `POSITION=ROW` 时，每个汇总统计量显示为一行，如下所示：

    CTABLES /TABLE=age [MEAN, MEDIAN] BY gender /SLABELS POSITION=ROW.

|  |  | Male | Female |
| --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |
| D1. AGE: What is your age? | Mean | 46 | 50 |
| Median | 45 | 52 |  |

`POSITION=LAYER` 也可用，可将每个汇总统计量放置在一个独立的层中。

汇总统计量的标签默认显示。使用 `VISIBLE=NO` 可将其隐藏。由于未加标签的数据容易造成混淆，只有在数据的含义显而易见时才应考虑这样做，如下面这个简单示例所示：

    CTABLES /TABLE=ageGroup [TABLEPCT] /SLABELS VISIBLE=NO.

| Age group | 15 or younger | .0% |
| --- | --- | --- |
| 16 to 25 | 15.7% |  |
| 26 to 35 | 13.8% |  |
| 36 to 45 | 14.8% |  |
| 46 to 55 | 16.8% |  |
| 56 to 65 | 17.8% |  |
| 66 or older | 21.1% |  |
