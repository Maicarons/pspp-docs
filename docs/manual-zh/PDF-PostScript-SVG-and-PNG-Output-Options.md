### 3.2 PDF、PostScript、SVG 和 PNG 输出选项

要以 PDF、PostScript、SVG 或 PNG 格式生成输出，请在 PSPP 命令行上指定 -o file，并可选择性地在其后加上下表所示的任何选项以自定义输出格式。

PDF、PostScript 和 SVG 使用真实单位：下面列出的每个尺寸可以带有后缀 ‘mm’ 表示毫米、‘in’ 表示英寸，或 ‘pt’ 表示点。缺少后缀时，小于 50 的数字假定为英寸，大于 50 的数字假定为毫米。

PNG 文件基于像素，因此 PNG 输出中的尺寸最终必须以像素度量。对于这些文件的输出，PSPP 以每英寸 72 像素的比例将指定的尺寸转换为像素。仅对于 PNG 输出，字体默认以更大的每英寸 96 像素渲染。

一个 SVG 或 PNG 文件只能容纳一页。当 PSPP 向 SVG 或 PNG 输出超过一页时，它会创建多个文件。它将第二页输出到带有 `-2` 后缀的文件，第三页带有 `-3` 后缀，依此类推。

-O format={pdf|ps|svg|png}

指定输出格式。仅当 -o 上给出的文件名不以 .pdf、.ps、.svg 或 .png 结尾时才需要。

-O paper-size=paper-size

纸张尺寸，以名称（_例如_ `a4`、`letter`）或度量（_例如_ `210x297`、`8.5x11in`）表示。

默认纸张尺寸取自 `PAPERSIZE` 环境变量，或 `PAPERCONF` 环境变量所指示的文件（如果设置了其中任一变量）。如果没有，且你的系统支持 `LC_PAPER` 区域设置类别，则默认纸张尺寸取自区域设置。否则，如果 /etc/papersize 存在，则从其中读取默认纸张尺寸。作为最后的手段，假定为 A4 纸。

-O foreground-color=color

将颜色设为线条和文本的默认颜色。使用 CSS 颜色格式（如 `#rrggbb`）或名称（如 `black`）作为 color。

-O orientation=orientation

`portrait`（纵向）或 `landscape`（横向）。默认：`portrait`。

-O left-margin=dimension
-O right-margin=dimension
-O top-margin=dimension
-O bottom-margin=dimension

设置页面四周的页边距。允许的尺寸形式见下文。默认：`0.5in`。

-O object-spacing=dimension

设置对象（如标题或表格）之间的垂直间距。

-O prop-font=font-name

设置用于普通文本的默认字体。大多数系统支持类似 CSS 的字体名称，如 “Sans Serif”，但也可能支持范围广泛的特定于系统的字体。

默认：比例字体 `Sans Serif`。

-O font-size=font-size

设置默认字体的大小，以千分之一磅为单位。默认：10000（10 磅）。

-O trim=true

此选项使 PSPP 在添加页边距之前裁剪每页输出周围的空白。这可以使其更易于包含在其他文档中。

-O outline=boolean

仅用于 PDF 输出，此选项控制 PSPP 是否在输出文件中包含大纲。PDF 查看器通常将大纲显示为侧边栏，便于在文件中导航。除非同时指定了 -O trim=true，否则默认为 true。（PSPP 用于生成 PDF 输出的 Cairo 图形库有一个 bug，当轮廓和裁剪一起使用时可能导致崩溃。）

-O font-resolution=dpi

设置字体渲染的分辨率，以每英寸点数计。对于 PDF、PostScript 和 SVG 输出，默认值为 72 dpi，因此 10 磅字体渲染后的高度为 10 磅。对于 PNG 输出，默认值为 96 dpi，因此 10 磅字体渲染后的高度为 _10 / 72 * 96 = 13.3_ 像素。使用较大的 dpi 放大文本输出，或使用较小的 dpi 缩小文本输出。
