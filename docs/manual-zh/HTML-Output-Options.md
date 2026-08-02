### 3.6 HTML 输出选项

要以 HTML 格式生成输出，请在 PSPP 命令行指定 -o file，其后可跟下表中所示的任何选项，以自定义输出格式。

-O format=html
    
指定输出格式。仅当 -o 上给定的文件名不以 .html 结尾时才需要。

-O charts={template.png|none}
    
设置图表文件使用的名称。详见 [纯文本输出选项](Plain-Text-Output-Options.md)。

-O borders=boolean
    
用边框装饰表格。如果设置为 false，生成的表格将没有边框。默认值为 true。

-O bare=boolean
    
HTML 输出驱动通常会输出一个完整的 HTML 文档。如果设置为 true，驱动程序则只输出通常位于 `body` 元素中的内容。默认值为 false。

-O css=boolean
    
使用层叠样式表。层叠样式表可改善外观，并可用于生成符合特定网站风格的页面。默认值为 true。
