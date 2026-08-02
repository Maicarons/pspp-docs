#### 15.4.1 散点图

`SCATTERPLOT` 子命令生成数据的 xy 散点图。`GRAPH` 使用第三个变量 var3（如果指定了的话）来决定绘图的颜色和/或标记。下面是一个生成散点图的例子。


    GRAPH
            /SCATTERPLOT = height WITH weight BY gender.


这个例子生成以身高对体重绘制的散点图。根据 gender 变量取值的不同，数据点的颜色也不同。借助此图可以分析身高与体重关系中性别的差异。
