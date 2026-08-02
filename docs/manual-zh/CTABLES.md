### 15.7 CTABLES

`CTABLES` 的整体语法如下。至少需要一个 `TABLE` 子命令：

    
    CTABLES
      … _global subcommands_ …
      [/TABLE _axis_ [BY _axis_ [BY _axis_]]
       … _per-table subcommands_ …]…
    

其中每个 _axis_（轴）可以为空，或采用以下形式之一：

    
    _variable_
    _variable_ [{C _|_ S}]
    _axis_ + _axis_
    _axis_ > _axis_
    (_axis_)
    _axis_ [_summary_ [_string_] [_format_]]
    

以下子命令位于第一个 `TABLE` 子命令之前，并应用于所有输出表。所有这些子命令都是可选的：

    
    /FORMAT
        [MINCOLWIDTH={DEFAULT _|_ _width_}]
        [MAXCOLWIDTH={DEFAULT _|_ _width_}]
        [UNITS={POINTS _|_ INCHES _|_ CM}]
        [EMPTY={ZERO _|_ BLANK _|_ _string_}]
        [MISSING=_string_]
    /VLABELS
        VARIABLES=_variables_
        DISPLAY={DEFAULT _|_ NAME _|_ LABEL _|_ BOTH _|_ NONE}
    /SMISSING {VARIABLE _|_ LISTWISE}
    /PCOMPUTE &_postcompute_ =EXPR(_expression_)
    /PPROPERTIES &_postcompute_ …
        [LABEL=_string_]
        [FORMAT=[_summary_ _format_]…]
        [HIDESOURCECATS={NO _|_ YES}
    /WEIGHT VARIABLE=_variable_
    /HIDESMALLCOUNTS COUNT=_count_
    

以下子命令位于 `TABLE` 之后，且只应用于前一个 `TABLE`。所有这些子命令都是可选的：

    
    /SLABELS
        [POSITION={COLUMN _|_ ROW _|_ LAYER}]
        [VISIBLE={YES _|_ NO}]
    /CLABELS {AUTO _|_ {ROWLABELS _|_ COLLABELS}={OPPOSITE _|_ LAYER}}
    /CATEGORIES VARIABLES=_variables_
        {[_value_ , _value_ …]
       _|_ [ORDER={A _|_ D}]
         [KEY={VALUE _|_ LABEL _|_ _summary_(_variable_)}]
         [MISSING={EXCLUDE _|_ INCLUDE}]}
        [TOTAL={NO _|_ YES} [LABEL=_string_] [POSITION={AFTER _|_ BEFORE}]]
        [EMPTY={INCLUDE _|_ EXCLUDE}]
    /TITLES
        [TITLE=_string_ …]
        [CAPTION=_string_ …]
        [CORNER=_string_ …]
    

`CTABLES`（又称“custom tables”，自定义表）命令基于分类数据和标度数据生成多维表。它提供了许多用于数据汇总和格式化的选项。

本节示例使用了来自 2008 年（美国）"National Survey of Drinking and Driving Attitudes and Behaviors"（国家饮酒与驾驶态度和行为调查）的数据，这是（美国）国家公路交通安全管理局的一个公共领域数据集，可在 <https://data.transportation.gov> 获取。PSPP 附带了该数据集（带有修改后的字典），位于 examples/nhtsa.sav。

| • 基础 |  |  |
| --- | --- | --- |
| • 数据汇总 |  |  |
| • 统计量位置与标签 |  |  |
| • 类别标签位置 |  |  |
| • 各变量类别选项 |  |  |
| • 标题 |  |  |
| • 表格式设置 |  |  |
| • 变量标签的显示 |  |  |
| • 缺失值处理 |  |  |
| • 计算类别 |  |  |
| • 有效权重 |  |  |
| • 隐藏小计数 |  |  |
