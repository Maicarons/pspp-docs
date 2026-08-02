#### 15.7.5.3 合计与小计

`CATEGORIES` 还控制合计与小计的显示。默认情况下，或使用 `TOTAL=NO` 时，不显示合计。使用 `TOTAL=YES` 可显示合计。默认合计标签为“Total”；使用 `LABEL="_label_ "` 可覆盖它。

小计默认也不显示。要添加一个或多个小计，需使用显式类别列表，并在小计应出现的位置插入 `SUBTOTAL` 或 `HSUBTOTAL`。小计会成为额外的一行、一列或一个层。`HSUBTOTAL` 还会额外隐藏构成该小计的各个类别。无论哪种方式，默认标签均为“Subtotal”，可使用 `SUBTOTAL="_label_ "` 或 `HSUBTOTAL="_label_ "` 指定自定义标签。

下面的示例语法与输出展示了如何使用 `TOTAL=YES` 和 `SUBTOTAL`：

    CTABLES
        /TABLE freqOfDriving
        /CATEGORIES VARIABLES=freqOfDriving [OTHERNM, SUBTOTAL='Valid Total',
                                             MISSING, SUBTOTAL='Missing Total']
                                            TOTAL=YES LABEL='Overall Total'.

|  |  | Count |
| --- | --- | --- |
| 1. How often do you usually drive a car or other motor vehicle? | Every day | 4667 |
| Several days a week | 1274 |  |
| Once a week or less | 361 |  |
| Only certain times a year | 130 |  |
| Never | 540 |  |
| Valid Total | 6972 |  |
| Don't know | 8 |  |
| Refused | 19 |  |
| Missing Total | 27 |  |
| Overall Total | 6999 |  |

默认情况下，或使用 `POSITION=AFTER` 时，合计显示在最后一个类别之后，小计应用于其前面的类别。使用 `POSITION=BEFORE` 时，合计显示在第一个类别之前，小计应用于其后面的类别。

只有分类变量才能有合计与小计。标度变量可通过对其中汇总该标度变量的分类变量启用合计与小计来间接“合计”。例如，下面这段语法通过对分类变量 `region` 添加合计，得出所有数据的均值、计数和有效计数，如下所示：

    CTABLES /TABLE=region > monthDaysMin1drink [MEAN, VALIDN]
        /CATEGORIES VARIABLES=region TOTAL=YES LABEL='All regions'.

|  |  |  | Mean | Count | Valid N |
| --- | --- | --- | --- | --- | --- |
| 20. On how many of the thirty days in this typical month did you have one or more alcoholic beverages to drink? | Region | NE | 5.6 | 1409 | 945 |
| MW | 5.0 | 1654 | 1026 |  |  |
| S | 6.0 | 2390 | 1285 |  |  |
| W | 6.5 | 1546 | 953 |  |  |
| All regions | 5.8 | 6999 | 4209 |  |  |

默认情况下，PSPP 对合计与小计使用与其他类别相同的汇总函数。若要以不同方式汇总合计与小计，可在 `TOTALS` 之后的嵌套 `[]` 集合内、普通汇总函数之后指定合计与小计的汇总函数。例如，下面这段语法对各个类别显示 `COUNT`，并对合计显示 `COUNT` 与 `VALIDN`，如下所示：

    CTABLES
        /TABLE isLicensedDriver [COUNT, TOTALS[COUNT, VALIDN]]
        /CATEGORIES VARIABLES=isLicensedDriver TOTAL=YES MISSING=INCLUDE.

|  |  | Count | Valid N |
| --- | --- | --- | --- |
| D7a. Are you a licensed driver; that is, do you have a valid driver's license? | Yes | 6379 |  |
| No | 572 |  |  |
| Don't know | 4 |  |  |
| Refused | 44 |  |  |
| Total | 6999 | 6951 |  |
