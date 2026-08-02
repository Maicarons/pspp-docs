### 6.5 命令的顺序

PSPP 对命令的顺序限制不多。主要限制是：变量在引用之前必须先被定义。本节描述命令顺序的细节，但大多数用户无需参考它们。

PSPP 有五种内部状态，称为 _initial_（初始）、_input-program_（输入程序）、_file-type_（文件类型）、_transformation_（变换）和 _procedure_（过程）状态。（请注意区分 `INPUT PROGRAM` 和 `FILE TYPE` 这两个 _命令_ 与 _input-program_ 和 _file-type_ 这两个 _状态_。）

PSPP 从初始状态开始。每个命令的成功完成都可能导致状态转换。每种类型的命令都有其自身的状态转换规则：

**Utility commands（实用命令）**

  * 在任何状态下都有效。
  * 不会引起状态转换。例外：当 `N OF CASES` 在过程状态执行时，会引起向变换状态的转换。

**`DATA LIST`**

  * 在任何状态下都有效。
  * 在初始或过程状态执行时，会引起向变换状态的转换。
  * 在过程或变换状态执行时清除活动数据集。

**`INPUT PROGRAM`**

  * 在 input-program 和 file-type 状态下无效。
  * 引起向 input-program 状态的转换。
  * 清除活动数据集。

**`FILE TYPE`**

  * 在 input-program 和 file-type 状态下无效。
  * 引起向 file-type 状态的转换。
  * 清除活动数据集。

**其他文件定义命令**

  * 在 input-program 和 file-type 状态下无效。
  * 引起向变换状态的转换。
  * 清除活动数据集，但 `ADD FILES`、`MATCH FILES` 和 `UPDATE` 除外。

**Transformations（变换）**

  * 在初始和 file-type 状态下无效。
  * 引起向变换状态的转换。

**Restricted transformations（受限变换）**

  * 在初始、input-program 和 file-type 状态下无效。
  * 引起向变换状态的转换。

**Procedures（过程）**

  * 在初始、input-program 和 file-type 状态下无效。
  * 引起向过程状态的转换。
