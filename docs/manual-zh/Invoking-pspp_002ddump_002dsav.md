## 20 调用 `pspp-dump-sav`

`pspp-dump-sav` 是 PSPP 附带的命令行实用程序。默认情况下它未安装，因此在您的 PSPP 安装中可能缺少它。它读取一个或多个 SPSS 系统文件并打印其内容。该输出格式对于调试系统文件读取器和写入器，以及发现如何解释未知或了解不多的记录很有用。最终用户可能会发现该输出有助于向 PSPP 开发人员提供 PSPP 未能准确读取的系统文件的信息。

概要：
    
    
    pspp-dump-sav [-d[maxcases] | --data[=maxcases]] file…
    
    pspp-dump-sav --help | -h
    
    pspp-dump-sav --version | -v
    
    
以下选项被接受：

`-d`[maxcases]
`--data`[`=`maxcases]
    
默认情况下，`pspp-dump-sav` 不打印系统文件中的任何数据，只打印文件头。指定此选项以同时打印数据。如果指定了 maxcases，则它限制打印的个案数量。

`-h`
`--help`
    
在 stdout 上打印用法消息并退出。

`-v`
`--version`
    
在 stdout 上打印版本信息并退出。

某些阻止文件成功解释的错误会导致 `pspp-dump-sav` 退出，而不读取命令行上给出的任何其他文件。
