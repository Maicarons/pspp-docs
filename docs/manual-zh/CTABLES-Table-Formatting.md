#### 15.7.7 表格式设置

    /FORMAT
        [MINCOLWIDTH={DEFAULT _|_ _width_}]
        [MAXCOLWIDTH={DEFAULT _|_ _width_}]
        [UNITS={POINTS _|_ INCHES _|_ CM}]
        [EMPTY={ZERO _|_ BLANK _|_ _string_}]
        [MISSING=_string_]

`FORMAT` 子命令必须位于第一个 `TABLE` 子命令之前，用于控制所有输出表的格式设置。`FORMAT` 及其所有设置均为可选。

使用 `MINCOLWIDTH` 和 `MAXCOLWIDTH` 控制输出表中列的最小或最大宽度。默认使用 `DEFAULT` 时，列宽随内容变化。否则，可为其中一项或两项设置指定一个数字。若两项都指定，则 `MAXCOLWIDTH` 必须大于或等于 `MINCOLWIDTH`。默认单位（或使用 `UNITS=POINTS`）为磅（1/72 英寸），也可指定 `UNITS=INCHES` 使用英寸，或指定 `UNITS=CM` 使用厘米。PSPP 目前并不实际采用这些设置。

默认情况下，或使用 `EMPTY=ZERO` 时，零值以常规格式显示。使用 `EMPTY=BLANK` 则以空单元格代替，或使用 `EMPTY="_string_ "` 使用指定的字符串。

默认情况下，缺失值显示为‘.’，与其他表相同。指定 `MISSING="_string_ "` 则可改用自定义字符串。
