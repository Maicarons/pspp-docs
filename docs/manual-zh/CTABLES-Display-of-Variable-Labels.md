#### 15.7.8 变量标签的显示

    
    /VLABELS
        VARIABLES=_variables_
        DISPLAY={DEFAULT _|_ NAME _|_ LABEL _|_ BOTH _|_ NONE}
    

`VLABELS` 子命令必须位于第一个 `TABLE` 子命令之前，它控制所有输出表中变量标签的显示。`VLABELS` 是可选的。它可以出现多次，以针对不同变量调整设置。

`VARIABLES` 和 `DISPLAY` 是必需的。`DISPLAY` 的值控制 `VARIABLES` 所列变量的变量标签如何显示。支持的取值有：

`DEFAULT`
    

使用 `SET TVARS` 的设置（参见 [SET TVARS](SET.md#SET-TVARS)）。

`NAME`
    

只显示变量名。

`LABEL`
    

只显示变量标签。

`BOTH`
    

显示变量名和标签。

`NONE`
    

不显示任何内容。
