### 11.18 VARIABLE ROLE
    
    
    VARIABLE ROLE
            /role var_list
            [/role var_list]…
    

`VARIABLE ROLE` 设置变量的预期角色，供图形用户界面中的对话框使用。每个角色为跟随它的变量指定以下角色之一：

`INPUT`
    

输入变量，例如自变量。

`TARGET`
    

输出变量，例如因变量。

`BOTH`
    

同时用于输入与输出的变量。

`NONE`
    

未分配角色。（这是变量的默认角色。）

`PARTITION`
    

用于将数据拆分为若干组以进行测试。

`SPLIT`
    

除某些第三方软件外没有含义。（此角色的含义与 `SPLIT FILE` 无关。）

PSPPIRE 图形界面尚未按预期使用变量角色。
