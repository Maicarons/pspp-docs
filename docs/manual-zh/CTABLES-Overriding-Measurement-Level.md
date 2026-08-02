#### 15.7.1.3 覆盖测量级别

默认情况下，`CTABLES` 使用变量的测量级别来决定将其视为分类变量还是标度变量。被赋予名义或有序测量级别的变量被视为分类变量，标度变量被视为标度变量。

当 PSPP 从外部格式（例如文本文件）读取数据时，变量的测量级别往往未知。如果 `CTABLES` 在某个变量具有未知测量级别时运行，它会先遍历一遍数据，使用前文某节所述的规则（参见 [Measurement Level](Attributes.md#Measurement-Level)）来猜测测量级别。可使用 `VARIABLE LEVEL` 命令设置或更改变量的测量级别（参见 [VARIABLE LEVEL](VARIABLE-LEVEL.md)）。

若要在 `CTABLES` 的某一次使用中临时将变量视为分类变量或标度变量，可在变量名后分别添加 ‘[C]’ 或 ‘[S]’。以下示例展示了变量 `monthDaysMin1drink` 分别作为标度变量（其测量级别的默认处理方式）和分类变量分析时的输出：

    
    CTABLES
        /TABLE monthDaysMin1drink BY gender
        /TABLE monthDaysMin1drink [C] BY gender.
    

|  |  | Male | Female |
| --- | --- | --- | --- |
|  | S3a. GENDER: |  |  |
|  | Male | Female |  |
|  | Mean | Mean |  |
| 20. On how many of the thirty days in this typical month did you have one or more alcoholic beverages to drink? | 7 | 5 |  |
|  |  | S3a. GENDER: |  |
|  |  | Count | Count |
| 20. On how many of the thirty days in this typical month did you have one or more alcoholic beverages to drink? | None | 152 | 258 |
| 1 | 403 | 653 |  |
| 2 | 284 | 324 |  |
| 3 | 169 | 215 |  |
| 4 | 178 | 143 |  |
| 5 | 107 | 106 |  |
| 6 | 67 | 59 |  |
| 7 | 31 | 11 |  |
| 8 | 101 | 74 |  |
| 9 | 6 | 4 |  |
| 10 | 95 | 75 |  |
| 11 | 4 | 0 |  |
| 12 | 58 | 33 |  |
| 13 | 3 | 2 |  |
| 14 | 13 | 3 |  |
| 15 | 79 | 58 |  |
| 16 | 10 | 6 |  |
| 17 | 4 | 2 |  |
| 18 | 5 | 4 |  |
| 19 | 2 | 0 |  |
| 20 | 105 | 47 |  |
| 21 | 2 | 0 |  |
| 22 | 3 | 3 |  |
| 23 | 0 | 3 |  |
| 24 | 3 | 0 |  |
| 25 | 35 | 25 |  |
| 26 | 1 | 1 |  |
| 27 | 3 | 3 |  |
| 28 | 13 | 8 |  |
| 29 | 3 | 3 |  |
| Every day | 104 | 43 |  |
