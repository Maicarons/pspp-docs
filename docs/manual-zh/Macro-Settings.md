#### 14.2.11 Macro Settings

某些宏行为通过 SET 命令控制（参见 [SET](SET.md)）。本节描述这些设置。

在宏主体内更改这些设置的任何 SET 命令仅在宏之后生效。这是因为 PSPP 一次性展开宏的整个主体，因此主体内的 SET 命令只在之后才执行。

MEXPAND 设置（参见 [SET MEXPAND](SET.md#SET-MEXPAND)）控制是否展开宏。默认情况下，宏展开是开启的。要避免展开宏主体内调用的宏，请使用 `!OFFEXPAND` 和 `!ONEXPAND`（参见 [Controlling Macro Expansion](Controlling-Macro-Expansion.md)）。

当 MPRINT（参见 [SET MPRINT](SET.md#SET-MPRINT)）开启时，PSPP 输出每个被调用宏的展开。此功能对调试宏定义很有用。要阅读展开后的版本，请注意宏展开会移除注释并标准化空白。

MNEST（参见 [SET MNEST](SET.md#SET-MNEST)）限制宏调用展开的深度，即宏展开的嵌套层级。默认值为 50。这主要用于避免自调用宏的无限展开。

MITERATE（参见 [SET MITERATE](SET.md#SET-MITERATE)）限制 `!DO` 结构中的迭代次数。默认值为 1000。
