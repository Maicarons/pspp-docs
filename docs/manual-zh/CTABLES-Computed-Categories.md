#### 15.7.10 计算类别

    
    /PCOMPUTE &_postcompute_ =EXPR(_expression_)
    /PPROPERTIES &_postcompute_ …
        [LABEL=_string_]
        [FORMAT=[_summary_ _format_]…]
        [HIDESOURCECATS={NO _|_ YES}
    

_Computed categories_（计算类别），又称 _postcomputes_（后计算），是使用该数据所得类别进行算术运算而创建的类别。`PCOMPUTE` 子命令创建一个后计算，随后可用于显式类别列表中的 `CATEGORIES`（参见 [CTABLES Explicit Category List](CTABLES-Explicit-Categories.md#CTABLES-Explicit-Category-List)）。可选地，`PPROPERTIES` 可细化后计算的显示方式。以下各节提供详细信息。

| • PCOMPUTE |  |  |
| --- | --- | --- |
| • PPROPERTIES |  |  |
