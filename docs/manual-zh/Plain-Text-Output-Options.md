### 3.3 纯文本输出选项

PSPP 可以生成纯文本输出，使用 ASCII 或 Unicode 制图画线字符绘制方框。要生成纯文本输出，请在 PSPP 命令行上指定 -o file，并可选择性地在其后加上下表的选项以自定义输出格式。

纯文本输出以 UTF-8 编码。

-O format=txt

指定输出格式。仅当 -o 上给出的文件名不以 .txt 或 .list 结尾时才需要。

-O charts={template.png|none}

输出中所包含图表文件的名称。该值应为包含单个 ‘#’ 且以 png 结尾的文件名。输出图表时，‘#’ 会被图表编号替换。默认值为 -o 上指定的文件名去掉扩展名后替换为 -#.png。

指定 `none` 可禁用图表输出。

-O foreground-color=color
-O background-color=color

将 color 设为图表所用背景色或前景色。颜色应以 `#RRRRGGGGBBBB` 格式给出，其中 RRRR、GGGG 和 BBBB 分别是红、绿、蓝分量的 4 位十六进制表示。如果图表被禁用，此选项不起作用。

-O width=columns

页面的宽度，以列数计。如果未指定或给定为 `auto`，则默认值为终端宽度（交互式输出时）或 WIDTH 设置（参见 [SET](SET.md)，输出到文件时）。

-O box={ascii|unicode}

设置表格中线条所用的字符。如果设为 `ascii`，输出使用字符 ‘-’、‘|’ 和 ‘+’ 表示单线，使用 ‘=’ 和 ‘#’ 表示双线。如果设为 `unicode`，则输出使用 Unicode 制表字符。如果区域设置的字符编码为 "UTF-8"，则默认为 `unicode`，否则为 `ascii`。

-O emphasis={none|bold|underline}

如何强调文本。粗体和下划线强调通过重打（overstriking）实现，你可能传递给输出的所有软件不一定都支持。默认：`none`。
