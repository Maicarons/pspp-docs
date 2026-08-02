### 3.4 SPV 输出选项

SPSS 16 及更高版本写入 .spv 文件来表示其输出编辑器中的内容。要生成 .spv 格式的输出，请在 PSPP 命令行上指定 -o 文件，其后可选地跟下表所示任意选项以自定义输出格式。

-O format=spv

指定输出格式。仅当 -o 上给出的文件名不以 .spv 结尾时才需要。

-O paper-size=paper-size
-O left-margin=dimension
-O right-margin=dimension
-O top-margin=dimension
-O bottom-margin=dimension
-O object-spacing=dimension

这些选项与 PDF 输出具有相同的语法和含义。详情参见 [PDF PostScript SVG and PNG Output Options](PDF-PostScript-SVG-and-PNG-Output-Options.md)。
