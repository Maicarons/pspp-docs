#### 15.7.5.4 无取值的类别

某些类别可能未包含在正在分析的数据集中。例如，我们的示例数据集中“15 or younger”（15 岁或更小）年龄组没有个案。默认情况下，或使用 `EMPTY=INCLUDE` 时，PSPP 会在输出表中包含这些空类别。要排除它们，指定 `EMPTY=EXCLUDE`。

对于隐式类别，空类别可能包括具有值标签的给定变量的所有取值；对于显式类别，它们包括单独列出的所有取值，以及被范围、`MISSING` 或 `OTHERNM` 所覆盖的所有带值标签的取值。

以下示例语法和输出展示了 `EMPTY=EXCLUDE` 对 `membersOver16` 变量的效果，其中 0 被标记为“None”，但没有取值为该值的个案：

    
    CTABLES /TABLE=membersOver16.
    CTABLES /TABLE=membersOver16 /CATEGORIES VARIABLES=membersOver16 EMPTY=EXCLUDE.
    

|  |  | Count |
| --- | --- | --- |
| S1. Including yourself, how many members of this household are age 16 or older? | None | 0 |
| 1 | 1586 |  |
| 2 | 3031 |  |
| 3 | 505 |  |
| 4 | 194 |  |
| 5 | 55 |  |
| 6 or more | 21 |  |
|  |  | Count |
| S1. Including yourself, how many members of this household are age 16 or older? | 1 | 1586 |
| 2 | 3031 |  |
| 3 | 505 |  |
| 4 | 194 |  |
| 5 | 55 |  |
| 6 or more | 21 |  |
