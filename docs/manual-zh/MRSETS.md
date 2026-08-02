### 11.20 MRSETS

`MRSETS` 创建、修改、删除并显示多重响应集（multiple response sets）。多重响应集是一组代表对调查问题多重响应的变量。

多重响应以下列两种方式之一表示：

  * _多重二分集_（multiple dichotomy set）类似于一组复选框的调查问题。集合中的每个变量以布尔方式处理：一个值（“计数值”，counted value）表示复选框被选中，任何其他值表示未被选中。
  * _多重类别集_（multiple category set）表示受访者被要求列出最多 n 个选择的调查问题。每个变量代表其中一个响应。

    MRSETS
        /MDGROUP NAME=name VARIABLES=var_list VALUE=value
         [CATEGORYLABELS={VARLABELS,COUNTEDVALUES}]
         [{LABEL=’label’,LABELSOURCE=VARLABEL}]

        /MCGROUP NAME=name VARIABLES=var_list [LABEL=’label’]

        /DELETE NAME={[names],ALL}

        /DISPLAY NAME={[names],ALL}

可以按任意顺序指定任意数量的子命令。

`MDGROUP` 子命令创建一个新的多重二分集或替换现有的多重响应集。`NAME`、`VARIABLES` 和 `VALUE` 说明是必需的。其他都是可选的：

  * NAME 指定在语法中用于新多重二分集的名称。名称必须以‘$’开头；除此之外必须遵循标识符的规则（参见 [Tokens](Tokens.md)）。
  * `VARIABLES` 指定属于该集合的变量。必须至少指定两个变量。这些变量必须全为字符串或全为数值。
  * `VALUE` 指定计数值。如果变量是数值型，则该值必须为整数。如果变量是字符串型，则该值必须是长度不超过集合中变量最短长度（忽略尾随空格）的字符串。
  * `CATEGORYLABELS` 可选地指定集合中每个类别标签的来源：
    * \- `VARLABELS`，默认值，使用变量标签，或者对于没有变量标签的变量，使用变量名。如果两个变量具有相同的变量标签，PSPP 会发出警告，因为这些类别在输出中无法区分。
    * \- `COUNTEDVALUES` 则使用每个变量计数值的值标签。如果两个变量对计数值具有相同的值标签，或者其中一个变量缺少值标签，PSPP 会发出警告，因为这些类别在输出中无法区分。
  * `LABEL` 可选地指定多重响应集的标签。如果既未指定 `LABEL` 也未指定 `LABELSOURCE=VARLABEL`，则该集无标签。
  * `LABELSOURCE=VARLABEL` 从集合中变量的第一个变量标签获取多重响应集的标签；如果没有变量具有标签，则使用第一个变量的名称。`LABELSOURCE=VARLABEL` 必须与 `CATEGORYLABELS=COUNTEDVALUES` 一起使用。它与 `LABEL` 互斥。

`MCGROUP` 子命令创建一个新的多重类别集或替换现有的多重响应集。`NAME` 和 `VARIABLES` 说明是必需的，`LABEL` 是可选的。它们的含义如上面 `MDGROUP` 中所述。如果集合中的两个变量对单个值具有不同的值标签，PSPP 会发出警告，因为集合中的每个变量应该具有相同的可能类别。

`DELETE` 子命令删除多重响应组。可以在一组必需的方括号内命名一组组，或者使用 ALL 删除所有组。

`DISPLAY` 子命令显示关于已定义多重响应集的信息。其语法与 `DELETE` 子命令相同。

多重响应集由例如 `SAVE` 和 `GET` 命令保存至系统文件并从中读取。除此之外，多重响应集目前仅被第三方软件使用。
