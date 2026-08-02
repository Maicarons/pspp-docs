### 15.16 RANK

    RANK
            [VARIABLES=] var_list [{A,D}] [BY var_list]
            /TIES={MEAN,LOW,HIGH,CONDENSE}
            /FRACTION={BLOM,TUKEY,VW,RANKIT}
            /PRINT[={YES,NO}
            /MISSING={EXCLUDE,INCLUDE}

            /RANK [INTO var_list]
            /NTILES(k) [INTO var_list]
            /NORMAL [INTO var_list]
            /PERCENT [INTO var_list]
            /RFRACTION [INTO var_list]
            /PROPORTION [INTO var_list]
            /N [INTO var_list]
            /SAVAGE [INTO var_list]


`RANK` 命令对变量进行秩排序，并将结果存入新变量。

必选的 `VARIABLES` 子命令指定一个或多个要对其值进行排序的变量。在每个变量之后可以出现 ‘A’ 或 ‘D’，表示该变量按升序或降序排序。默认为升序。如果出现 `BY` 关键字，则其后应跟一个作为分组变量的变量列表。在这种情况下，个案被归入各组，并为每组计算秩。

`TIES` 子命令指定如何处理并列值。默认取所有并列个案的均值。

`FRACTION` 子命令指定如何计算比例秩。仅当请求 `NORMAL` 或 `PROPORTIONAL` 秩函数时才起作用。

`PRINT` 子命令可用于指定在输出中显示所创建秩变量的摘要。

函数子命令为 `RANK`、`NTILES`、`NORMAL`、`PERCENT`、`RFRACTION`、`PROPORTION` 和 `SAVAGE`。可以出现任意数量的函子命令。如果均未给出，则默认为 RANK。`NTILES` 子命令必须带一个整数，指定值应被排序划分的区段数。每个子命令后面可以跟 `INTO` 关键字以及一个变量列表，这些变量即为要创建并接收秩得分的变量。指定的变量数量可以多达 `VARIABLES` 子命令上命名的变量数量。如果指定较少，则变量名会自动创建。

`MISSING` 子命令决定如何处理用户缺失值。`EXCLUDE` 设置表示值属于用户缺失值的变量将被排除在秩得分之外。`INCLUDE` 设置表示将它们包含在内。默认值为 `EXCLUDE`。
