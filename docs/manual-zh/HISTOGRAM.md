#### 15.4.2 直方图

子命令 `HISTOGRAM` 生成直方图。直方图绘图只允许使用一个变量。可以在括号中指定关键字 `NORMAL`，表示应在直方图上叠加理想正态曲线。有关生成直方图的另一种方法，请参见 [EXAMINE](EXAMINE.md)。以下示例为变量 weight 生成直方图绘图。
    
    
    GRAPH
            /HISTOGRAM = weight.
