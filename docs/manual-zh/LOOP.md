### 14.5 LOOP

    LOOP [index_var=start TO end [BY incr]] [IF condition].
            …
    END LOOP [IF condition].

`LOOP` 对一组命令进行迭代。它提供了多种终止选项。

指定 index_var 可使该变量按特定增量从一个值计数到另一个值。index_var 必须是已存在的数值变量。start、end 和 incr 是数值表达式（参见 [Expressions](Expressions.md)。）。

在第一次迭代时，index_var 被设为 start 的值。在随后的每次迭代中，index_var 按 incr 的值递增。如果 end > start，则当 index_var > end 时循环终止；否则当 index_var < end 时循环终止。如果未指定 incr，则默认为适当的 +1 或 -1。

如果 end > start 且 incr < 0，或者 end < start 且 incr > 0，则循环从不执行。尽管如此，index_var 仍会被设为 start 的值。

允许在循环内修改 index_var，但这对下一次迭代中 index_var 的值没有影响。

在 `LOOP` 上指定一个布尔表达式作为条件，可使循环仅在该条件为真时执行。如果在第一次执行循环内容之前条件为假或缺失，则循环内容根本不会执行。

如果 index 子句和条件子句同时出现在 `LOOP` 上，则索引变量总是在条件求值之前被设置。因此，使用索引变量的条件总是会看到下一次执行循环体时要使用的索引值。

在 `END LOOP` 上指定一个布尔表达式作为条件，可使所包含的代码块执行后，若条件为真则循环终止。该条件在循环末尾而非开头求值，因此仅带有 `END LOOP` 条件的循环体总是至少执行一次。

如果未出现 index 子句，则全局 `MXLOOPS` 设置（默认为 40）限制迭代次数（参见 [SET MXLOOPS](SET.md#SET-MXLOOPS)）。

`BREAK` 也会终止 `LOOP` 的执行（参见 [BREAK](BREAK.md)）。

循环索引变量默认在个案之间被重置为系统缺失值，而非保留，除非使用暂存变量作为索引。当循环嵌套时，这通常是不期望的行为，可通过 `LEAVE`（参见 [LEAVE](LEAVE.md)）或使用暂存变量作为循环索引来纠正。

当 `LOOP` 或 `END LOOP` 在 `TEMPORARY` 之后指定时（参见 [TEMPORARY](TEMPORARY.md)），不能使用 `LAG` 函数（参见 [LAG](Miscellaneous-Functions.md#LAG)）。
