### 11.1 DISPLAY

`DISPLAY` 命令显示有关活动数据集中变量的信息。可以请求多种不同形式的信息。默认情况下，显示活动数据集中的所有变量。不过，您可以使用 `/VARIABLES` 子命令选择感兴趣的变量。

    DISPLAY [SORTED] NAMES [[/VARIABLES=]var_list].
    DISPLAY [SORTED] INDEX [[/VARIABLES=]var_list].
    DISPLAY [SORTED] LABELS [[/VARIABLES=]var_list].
    DISPLAY [SORTED] VARIABLES [[/VARIABLES=]var_list].
    DISPLAY [SORTED] DICTIONARY [[/VARIABLES=]var_list].
    DISPLAY [SORTED] SCRATCH [[/VARIABLES=]var_list].
    DISPLAY [SORTED] ATTRIBUTES [[/VARIABLES=]var_list].
    DISPLAY [SORTED] @ATTRIBUTES [[/VARIABLES=]var_list].
    DISPLAY [SORTED] VECTORS.

以下关键字主要用于显示有关变量的信息。使用这些关键字时，默认显示活动数据集字典中所有变量的信息，顺序与变量在活动数据集字典中出现的顺序一致。`SORTED` 关键字使输出按变量名按字母顺序排序。

NAMES

显示变量的名称。

INDEX

显示变量的名称，以及描述它们在活动数据集字典中位置的值。

LABELS

显示变量名、位置以及变量标签。

VARIABLES

显示变量名、位置、打印和写入格式，以及缺失值。

DICTIONARY

显示变量名、位置、打印和写入格式、缺失值、变量标签以及值标签。

SCRATCH

显示变量名，但仅针对暂用变量（参见 [暂用变量](Scratch-Variables.md)）。

ATTRIBUTES
@ATTRIBUTES

显示数据文件和变量属性。命令的第一种形式省略那些名称以 `@` 或 `$@` 开头的属性。在第二种形式中，显示所有数据文件和变量属性。

使用 `VECTOR` 关键字时，`DISPLAY` 列出所有当前已声明的向量。如果给定了 `SORTED` 关键字，则向量按字母顺序列出；否则，按 PSPP 语法文件中定义的文本顺序列出。

相关命令参见 [DISPLAY DOCUMENTS](DISPLAY-DOCUMENTS.md) 和 [DISPLAY FILE LABEL](DISPLAY-FILE-LABEL.md)。
