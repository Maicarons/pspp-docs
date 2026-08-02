### 17.21 SHOW


    SHOW
            [ALL]
            [BLANKS]
            [CC]
            [CCA]
            [CCB]
            [CCC]
            [CCD]
            [CCE]
            [COPYING]
            [DECIMAL]
            [DIRECTORY]
            [ENVIRONMENT]
            [FORMAT]
            [FUZZBITS]
            [LENGTH]
            [MEXPAND]
            [MPRINT]
            [MITERATE]
            [MNEST]
            [MXERRS]
            [MXLOOPS]
            [MXWARNS]
            [N]
            [SCOMPRESSION]
            [SYSTEM]
            [TEMPDIR]
            [UNDEFINED]
            [VERSION]
            [WARRANTY]
            [WEIGHT]
            [WIDTH]


`SHOW` 可用于显示 PSPP 执行参数的当前状态。可使用 `SET` 更改的参数（参见 [SET](SET.md)），可以使用 `SHOW` 中同名的子命令来查看。`SHOW` 还支持以下附加子命令：

`ALL`

显示所有设置。

`CC`

显示所有自定义货币设置（`CCA` 到 `CCE`）。

`DIRECTORY`

显示当前工作目录。

`ENVIRONMENT`

显示操作系统详细信息。

`N`

报告活动数据集中的个案数。报告的数字未经加权。如果未定义数据集，则报告 ‘Unknown’（未知）。

`SYSTEM`

显示 PSPP 构建方式的相关信息。这些信息在缺陷报告中很有用。详情参见 [Bugs](Bugs.md)。

`TEMPDIR`

显示存储临时文件的目录路径。

`VERSION`

显示此 PSPP 安装的版本。

`WARRANTY`

显示 PSPP 无担保声明的详情。

`COPYING` / `LICENSE`

显示 PSPP 版权许可的条款（参见 [License](License.md)）。

不带任何子命令指定 `SHOW` 等同于 `SHOW ALL`。
