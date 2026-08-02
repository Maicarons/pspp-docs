### 11.14 VARIABLE ATTRIBUTE
    
    
    VARIABLE ATTRIBUTE
             VARIABLES=var_list
             ATTRIBUTE=name(’value’) [name(’value’)]…
             ATTRIBUTE=name**[** index**]**(’value’) [name**[** index**]**(’value’)]…
             DELETE=name [name]…
             DELETE=name**[** index**]** [name**[** index**]**]…
    

`VARIABLE ATTRIBUTE` 添加、修改或移除与活动数据集中变量相关联的用户定义属性。自定义的变量属性不会被 PSPP 解释，但它们会作为系统文件的一部分被保存，并可能被读取它们的其他软件使用。

必需的 `VARIABLES` 子命令必须放在最前。指定后续 `ATTRIBUTE` 或 `DELETE` 子命令所应适用的变量。

使用 `ATTRIBUTE` 子命令添加或修改自定义变量属性。将属性名指定为标识符（见 [记号](Tokens.md)），后跟括号中所需的、带引号字符串形式的值。所指定的属性随后会在 `VARIABLES` 指定的变量中被添加或修改。以 `$` 开头的属性名保留供 PSPP 内部使用，而以 `@` 或 `$@` 开头的属性名不会被大多数显示其他属性的 PSPP 命令显示。其他属性名不作特殊对待。

属性也可以组织为数组。要赋值给数组元素，可在属性名与值之间添加一个用方括号（`[` 和 `]`）括起来的整数数组下标。数组下标从 1 开始，而非 0。只有一个元素（编号 1）的属性数组与单个非数组属性不加区分。

使用 `DELETE` 子命令从 `VARIABLES` 指定的变量中删除属性。单独指定一个属性名可删除整个属性，包括属性数组的所有数组元素。指定属性名后跟方括号中的数组下标，可删除属性数组中的单个元素。在后一种情况下，所有编号高于被删除元素的数组元素都会下移，填补空出的位置。

若要将自定义属性与整个活动数据集（而非特定变量）相关联，请改用 `DATAFILE ATTRIBUTE`（见 [DATAFILE ATTRIBUTE](DATAFILE-ATTRIBUTE.md)）。

`VARIABLE ATTRIBUTE` 立即生效。它不受 `DO IF` 或 `LOOP` 等条件与循环结构的影响。
