### 3.7 OpenDocument 输出选项

要以 OpenDocument 文本（ODT）文档形式生成输出，请在 PSPP 命令行上指定 -o file。如果 file 不以 .odt 结尾，你还必须指定 -O format=odt。

仅当你的 PSPP 安装是使用 libxml2 库编译时，ODT 支持才可用。

OpenDocument 输出格式没有任何可配置选项。
