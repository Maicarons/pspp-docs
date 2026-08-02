#### 9.4.3.2 读取固定列式数据
    
    
    GET DATA /TYPE=TXT
            /FILE={’file_name’,file_handle}
            [/ARRANGEMENT={DELIMITED,FIXED}]
            [/FIRSTCASE={first_case}]
            [/IMPORTCASE={ALL,FIRST max_cases,PERCENT percent}]
    
            [/FIXCASE=n]
            /VARIABLES fixed_var [fixed_var]…
                [/rec# fixed_var [fixed_var]…]…
    where each fixed_var takes the form:
            variable start-end format
    
    
`GET DATA` 命令在 TYPE=TXT 且 ARRANGEMENT=FIXED 时，以固定格式从文本文件读取输入数据，其中每个字段位于个案记录中特定的固定列位置。其功能类似于 DATA LIST FIXED（见 [DATA LIST FIXED](DATA-LIST-FIXED.md)），但有一些增强。

必需的 `FILE` 子命令以及可选的 `FIRSTCASE` 和 `IMPORTCASE` 子命令如上所述（见 [GET DATA /TYPE=TXT](GET-DATA-_002fTYPE_003dTXT.md)）。

可选的 `FIXCASE` 子命令可用于指定构成每个个案的输入行数的正整数。默认值为 1。

`VARIABLES` 子命令是必需的，指定可以找到每个变量的位置。对于每个变量，指定其名称，后跟用 ‘-’ 分隔的起始和结束列（_例如_ ‘0-9’），后跟输入格式类型（_例如_ ‘F’）或完整格式规范（_例如_ ‘DOLLAR12.2’）。对于此命令，列从最左列开始从 0 编号。通过斜杠后跟个案中的行号（_例如_ ‘/2’ 表示第二行）来引入个案第二行及以后行中的变量。

#### 示例

考虑以下关于二手车的数据：
    
    
    model   year    mileage price   type    age
    Civic   2002    29883   15900   Si      2
    Civic   2003    13415   15900   EX      1
    Civic   1992    107000  3800    n/a     12
    Accord  2002    26613   17900   EX      1
    
    
以下语法可用于读取二手车数据：
    
    
    GET DATA /TYPE=TXT /FILE='cars.data' /ARRANGEMENT=FIXED /FIRSTCASE=2
            /VARIABLES=model 0-7 A
                       year 8-15 F
                       mileage 16-23 F
                       price 24-31 F
                       type 32-40 A
                       age 40-47 F.
