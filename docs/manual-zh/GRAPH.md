### 15.4 GRAPH
    
    
    GRAPH
            /HISTOGRAM [(NORMAL)]= var
            /SCATTERPLOT [(BIVARIATE)] = var1 WITH var2 [BY var3]
            /BAR = {summary-function(var1) | count-function} BY var2 [BY var3]
            [ /MISSING={LISTWISE, VARIABLE} [{EXCLUDE, INCLUDE}] ]
    		[{NOREPORT,REPORT}]
    
    
    
`GRAPH` 命令生成数据的图形绘图。只能指定 `HISTOGRAM`、`BAR` 或 `SCATTERPLOT` 子命令之一，_即_ 每次调用 `GRAPH` 只能生成一个绘图。`MISSING` 是可选的。

| • SCATTERPLOT |  | 笛卡尔图 |
| --- | --- | --- |
| • HISTOGRAM |  | 直方图 |
| • BAR CHART |  | 条形图 |
