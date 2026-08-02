### 11.6 DELETE VARIABLES

`DELETE VARIABLES` 从字典中删除指定的变量。

    DELETE VARIABLES var_list.

`DELETE VARIABLES` 不应在定义变化之后、但在执行某个规程之前使用。如果在这样的上下文中使用，它会引发数据的读取。如果在 `TEMPORARY` 生效时使用它，会导致临时变化变为永久。

`DELETE VARIABLES` 不能用于从字典中删除所有变量；要做到这一点请使用 `NEW FILE`（参见 [NEW FILE](NEW-FILE.md)）。
