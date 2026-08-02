### 8.4 DATASET 命令

    DATASET NAME name [WINDOW={ASIS,FRONT}].
    DATASET ACTIVATE name [WINDOW={ASIS,FRONT}].
    DATASET COPY name [WINDOW={MINIMIZED,HIDDEN,FRONT}].
    DATASET DECLARE name [WINDOW={MINIMIZED,HIDDEN,FRONT}].
    DATASET CLOSE {name,*,ALL}.
    DATASET DISPLAY.

`DATASET` 命令简化了在 PSPP 会话中对多个数据集的使用。它们允许创建和销毁数据集。在任何时刻，大多数 PSPP 命令都只与一个称为活动数据集的数据集一起工作。

DATASET NAME 命令为活动数据集指定给定名称，或者如果它已经有名称，则重命名它。如果另一个数据集已经具有给定名称，则该数据集被删除。

DATASET ACTIVATE 命令选择已存在的命名数据集作为活动数据集。在切换活动数据集之前，任何待处理的变化都会被执行，就像指定了 `EXECUTE` 一样。如果活动数据集在切换前没有名称，那么它会被删除，并在切换后变为不可用。

DATASET COPY 命令创建一个具有指定名称的新数据集，其内容是当前活动数据集的副本。在进行复制之前，任何待处理的变化都会被执行，就像指定了 `EXECUTE` 一样。如果具有给定名称的数据集已经存在，则它会被替换。如果该名称是活动数据集的名称，则活动数据集变为无名。

DATASET DECLARE 命令创建一个初始“为空”的新数据集，即它没有字典或数据。如果具有给定名称的数据集已经存在，则此命令没有效果。新数据集可与支持输出到数据集的命令一起使用，_例如_ AGGREGATE（参见 [AGGREGATE](AGGREGATE.md)）。

DATASET CLOSE 命令删除一个数据集。如果通过名称指定了活动数据集，或者指定了‘*’，则活动数据集变为无名。如果通过名称指定了另一个数据集，则它会被删除并变为不可用。指定 ALL 会删除除活动数据集之外的所有数据集，活动数据集则变为无名。

DATASET DISPLAY 命令列出所有当前已定义的数据集。

许多 DATASET 命令接受一个可选的 `WINDOW` 子命令。在 PSPPIRE 图形界面中，为此子命令给定的值会影响数据集窗口的显示方式。在图形界面之外，`WINDOW` 子命令没有效果。有效值为：

ASIS

不改变窗口的显示方式。这是 DATASET NAME 和 DATASET ACTIVATE 的默认值。

FRONT

将数据集窗口提升到最前。使其成为运行语法的默认数据集。

MINIMIZED

将窗口“最小化”显示为图标。优先使用其他数据集来运行语法。这是 DATASET COPY 和 DATASET DECLARE 的默认值。

HIDDEN

隐藏数据集窗口。优先使用其他数据集来运行语法。
