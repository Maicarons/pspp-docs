#### 5.1.3 从文本文件读取数据

前面的例子展示了如何定义一组变量并手动输入这些变量的数据。手动输入数据是一项繁琐的工作，而包含数据的文件通常已经事先准备好。假设你有一个名为 mydata.dat 的文件，其中包含 ASCII 编码的数据：


    Ahmed          188.00
    Bertram        167.00
    Catherine      134.23
    David          109.10
                  .
                  .
                  .
    Zachariah      113.02


你可以通过类似下面的命令，让 `DATA LIST` 命令直接从这个文件读取数据，而不必手动输入：


    PSPP> data list file='mydata.dat' list /forename (A12) height.


不过请注意，仍然需要指定变量名及其格式，因为文件中并不包含这些信息。也可以指定文件的字符编码及其他参数。完整细节请参见 [DATA LIST](DATA-LIST.md)。
