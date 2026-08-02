#### 5.1.5 将数据保存到 PSPP 文件

如果你想连同变量定义一起保存数据，以便你或其他 PSPP 用户以后使用，可以使用 `SAVE` 命令。

下面的语法会将现有数据和变量保存到名为 my-new-file.sav 的文件中。


    PSPP> save outfile='my-new-file.sav'.


如果 my-new-file.sav 已经存在，则会被覆盖。否则会创建该文件。
