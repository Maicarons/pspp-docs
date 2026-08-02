#### 16.4.7 `LOOP` 和 `BREAK` 命令

    LOOP [_var_ =_first_ TO _last_ [BY _step_]] [IF _expression_].
      … _matrix commands_ …
    END LOOP [IF _expression_].

    BREAK.


`LOOP` 命令重复执行一组嵌套的矩阵命令，称为循环的 _循环体_。它有三个可选子句来控制循环体执行的次数。无论这些子句如何，全局设置 `MXLOOPS`（默认为 40）也会限制循环的迭代次数。要迭代更多次，请在 `MATRIX` 命令之外使用 `SET MXLOOPS` 提高上限（参见 [SET MXLOOPS](SET.md#SET-MXLOOPS)）。

可选索引子句使 var 在每次循环时被赋予连续的值：先是 first，然后是 _first \+ step_，然后是 _first \+ 2 × step_，依此类推。当 _var > last_（步长为正）或 _var < last_（步长为负）时，循环结束。如果未指定 step，则默认为 1。所有索引子句表达式都必须求值为标量，非整数向零取整。如果 step 求值为零（或取整为零），则循环体永不执行。

`LOOP` 上的可选 `IF` 在每次执行循环体之前求值。如果其表达式（必须求值为标量）为零或负数，则循环终止，不执行循环体。

`END LOOP` 上的可选 `IF` 在每次执行循环体之后求值。如果其表达式（必须求值为标量）为零或负数，则循环终止。

下面计算并打印 _l(n)_，即 [Juggler 序列](https://en.wikipedia.org/wiki/Juggler_sequence) 中 _n_ 的步数，其中 _n_ 从 2 到 10（含）：

    COMPUTE l = {}.
    LOOP n = 2 TO 10.
      COMPUTE a = n.
      LOOP i = 1 TO 100.
        DO IF MOD(a, 2) = 0.
          COMPUTE a = TRUNC(a &** (1/2)).
        ELSE.
          COMPUTE a = TRUNC(a &** (3/2)).
        END IF.
      END LOOP IF a = 1.
      COMPUTE l = {l; i}.
    END LOOP.
    PRINT l.


| • BREAK 命令 |  |  |
| --- | --- | --- |
