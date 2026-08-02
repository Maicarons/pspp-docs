### 12.6 IF
    
    
    IF condition variable=expression.
    
    
或
    
    
    IF condition vector(index)=expression.
    
    
`IF` 转换根据测试表达式的真值，有条件地将目标表达式的值赋给目标变量。

在 `IF` 关键字后指定要测试的布尔值表达式（见 [表达式](Expressions.md)）。该表达式对每个个案求值。如果值为真，则计算表达式的值并赋给指定变量。如果值为假或缺失，则不执行任何操作。可以赋值数值和字符串变量。当字符串表达式的宽度与目标变量的宽度不同时，表达式的字符串结果会按需截断或在右侧用空格填充。表达式和变量的类型必须匹配。

目标变量可以指定为向量的元素（见 [VECTOR](VECTOR.md)）。在这种情况下，必须在向量名后的括号中指定向量索引表达式。索引表达式必须求值为数值，在向下舍入到最接近的整数后，是命名向量的有效索引。

使用 `IF` 赋给在 `LEAVE` 上指定的变量（见 [LEAVE](LEAVE.md)）会重置该变量的保留状态。因此，`LEAVE` 应在 `IF` 之后指定，而不是之前。

当 `IF` 在 `TEMPORARY`（见 [TEMPORARY](TEMPORARY.md)）之后指定时，不能使用 `LAG` 函数（见 [LAG](Miscellaneous-Functions.md#LAG)）。
