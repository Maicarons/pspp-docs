### 17.14 HOST

在下面的语法中，方括号必须包含在命令语法中，并不表示其中的内容是可选的。
    
    
    HOST COMMAND=[’command’...]
         TIMELIMIT=secs.
    
    
`HOST` 在底层操作系统的 shell 中执行一个或多个命令，每个命令作为必需 `COMMAND` 子命令中的字符串提供。PSPP 在每个独立的 shell 进程中运行命令，并等待其完成后再运行下一个。如果某个命令失败（以非零退出状态退出，或因信号被杀死），则 PSPP 不会运行任何剩余命令。

PSPP 将 /dev/null 作为 shell 的标准输入。如果进程需要从 stdin 读取，请从文件或设备重定向，或使用管道。

PSPP 将 shell 的标准输出和标准错误显示为 PSPP 输出。如果不希望如此，请重定向到文件、`/dev/null` 或其他设备。

以下示例运行 `rsync` 将文件从远程服务器复制到本地文件 data.txt，并将 `rsync` 自身的输出写入 rsync-log.txt。PSPP 显示命令的错误输出（如果有）。如果 `rsync` 需要提示用户（_例如_ 以获取密码），命令将失败。仅当 `rsync` 成功时，PSPP 才会运行 `sha512sum` 命令。
    
    
    HOST COMMAND=['rsync remote:data.txt data.txt > rsync-log.txt'
                  'sha512sum -c data.txt.sha512sum].
    
    
默认情况下，PSPP 会等待这一系列命令完成所需的时间。使用可选的 `TIMELIMIT` 子命令将执行时间限制为指定的秒数。

为 mingw 构建的 PSPP 不支持 `HOST` 的全部功能。

如果 SAFER（见 [SET](SET.md)）设置处于活动状态，PSPP 会拒绝此命令。
