#### 14.2.9 Macro Loops

宏的主体可以包含两种形式的循环：遍历数值范围的循环和遍历记号的循环。两种形式都会多次展开_循环体_（loop body），每次将一个命名的_循环变量_（loop variable）设置为不同的值。循环体通常至少展开该循环变量一次。

MITERATE 设置（参见 [SET MITERATE](SET.md#SET-MITERATE)）限制循环中的迭代次数。这是一种确保宏展开终止的安全措施。当超过 MITERATE 限制时，PSPP 会发出警告。

#### Loops Over Ranges

    !DO !var = start !TO end [!BY step]
      body
    !DOEND

遍历数值范围的循环采用如上所示的形式。start、end 和 step（如果包含）必须是具有数值的表达式。宏处理器接受整数和实数。宏处理器对从 start 到 end（含）的每个数值展开 body。

step 的默认值为 1。如果 step 为正且 _first > last_，或者 step 为负且 _first < last_，则宏处理器根本不展开 body。step 不能为零。

#### Loops Over Tokens

    !DO !var !IN (expression)
      body
    !DOEND

遍历记号的循环采用如上所示的形式。宏处理器求值 expression，并对结果中的每个记号展开 body 一次，每次出现时将记号替换 `!var`。
