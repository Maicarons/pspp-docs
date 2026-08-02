#### 15.7.10.2 PPROPERTIES
    
    
    /PPROPERTIES &_postcompute_ …
        [LABEL=_string_]
        [FORMAT=[_summary_ _format_]…]
        [HIDESOURCECATS={NO _|_ YES}
    

`PPROPERTIES` 子命令必须出现在 `TABLE` 之前，用于为之前 `PCOMPUTE` 子命令定义的一个或多个后计算设置属性。该子命令的语法以后计算列表开头，每个都以 `PCOMPUTE` 中指定的 ‘&’ 为前缀。

`PPROPERTIES` 上的所有设置都是可选的。使用 `LABEL` 设置后计算在表输出中显示的标签。后计算的默认标签是定义它所用的表达式。

后计算始终使用包含它的变量相同的汇总函数，但 `FORMAT` 可控制用于显示其值的格式。它接受一个汇总函数名和格式说明符的列表。

默认情况下，或使用 `HIDESOURCECATS=NO` 时，计算类别所引用的类别与其他类别一样显示。使用 `HIDESOURCECATS=YES` 可隐藏它们。

上一节提供了一个 `PPROPERTIES` 的示例。
