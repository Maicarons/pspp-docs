#### 15.7.5 各变量类别选项
    
    
    /CATEGORIES VARIABLES=_variables_
        {[_value_ , _value_ …]
       _|_ [ORDER={A _|_ D}]
         [KEY={VALUE _|_ LABEL _|_ _summary_(_variable_)}]
         [MISSING={EXCLUDE _|_ INCLUDE}]}
        [TOTAL={NO _|_ YES} [LABEL=_string_] [POSITION={AFTER _|_ BEFORE}]]
        [EMPTY={INCLUDE _|_ EXCLUDE}]
    

`CATEGORIES` 子命令为一个或多个分类变量指定要包含和排除的类别、所包含类别的排序顺序，以及缺失值的处理方式。它还控制要显示的总计和小计。它可以指定任意多次，每次针对一组不同的变量。`CATEGORIES` 应用于其后面的 `TABLE` 子命令所产生的表。

`CATEGORIES` 不适用于标度变量。

`VARIABLES` 是必需的，必须列出该子命令要影响的变量。

该语法可以显式或隐式地指定要包含的类别及其排序顺序。以下各节给出每种语法形式的细节，随后是有关总计、小计以及 `EMPTY` 设置的信息。

| • 显式类别 |  |  |
| --- | --- | --- |
| • 隐式类别 |  |  |
| • 总计与小计 |  |  |
| • 无取值的类别 |  |  |
