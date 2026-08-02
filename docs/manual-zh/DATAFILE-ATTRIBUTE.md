### 8.3 DATAFILE ATTRIBUTE

    DATAFILE ATTRIBUTE
             ATTRIBUTE=name(’value’) [name(’value’)]…
             ATTRIBUTE=name**[** index**]**(’value’) [name**[** index**]**(’value’)]…
             DELETE=name [name]…
             DELETE=name**[** index**]** [name**[** index**]**]…

`DATAFILE ATTRIBUTE` 添加、修改或删除与活动数据集关联的、用户自定义的属性。自定义的 data file 属性不被 PSPP 解释，但它们作为系统文件的一部分被保存，并可能被读取它们的其他软件使用。

使用 `ATTRIBUTE` 子命令添加或修改一个自定义 data file 属性。以标识符形式指定属性名（参见 [词法符号](Tokens.md)），后接括号中以引号字符串形式给出的期望值。以 `$` 开头的属性名保留供 PSPP 内部使用，以 `@` 或 `$@` 开头的属性名不会被大多数显示其他属性的 PSPP 命令显示。其他属性名不作特殊处理。

属性也可以组织成数组。要赋值给数组元素，可在属性名和值之间添加一个用方括号（`[` 和 `]`）括起的整数数组下标。数组下标从 1 开始，而非 0。只有一个元素（编号 1）的属性数组与不带数组的属性不加区分。

使用 `DELETE` 子命令删除一个属性。仅指定属性名即可删除整个属性，包括属性数组的所有数组元素。指定属性名后跟方括号中的数组下标，可删除属性数组中的单个元素。在后一种情况下，所有编号高于被删除元素的数组元素都会下移，填补空出的位置。

要将自定义属性与特定变量（而非整个活动数据集）关联，请改用 `VARIABLE ATTRIBUTE`（参见 [VARIABLE ATTRIBUTE](VARIABLE-ATTRIBUTE.md)）。

`DATAFILE ATTRIBUTE` 立即生效。它不受诸如 `DO IF` 或 `LOOP` 等条件与循环结构的影响。
