#### 14.2.11 Macro Settings

Some macro behavior is controlled through the SET command (see [SET](SET.md)). This section describes these settings. 

Any SET command that changes these settings within a macro body only takes effect following the macro. This is because PSPP expands a macro’s entire body at once, so that the SET command inside the body only executes afterwards. 

The MEXPAND setting (see [SET MEXPAND](SET.md#SET-MEXPAND)) controls whether macros will be expanded at all. By default, macro expansion is on. To avoid expansion of macros called within a macro body, use `!OFFEXPAND` and `!ONEXPAND` (see [Controlling Macro Expansion](Controlling-Macro-Expansion.md)). 

When MPRINT (see [SET MPRINT](SET.md#SET-MPRINT)) is turned on, PSPP outputs an expansion of each macro called. This feature can be useful for debugging macro definitions. For reading the expanded version, note that macro expansion removes comments and standardizes white space. 

MNEST (see [SET MNEST](SET.md#SET-MNEST)) limits the depth of expansion of macro calls, that is, the nesting level of macro expansion. The default is 50\. This is mainly useful to avoid infinite expansion in the case of a macro that calls itself. 

MITERATE (see [SET MITERATE](SET.md#SET-MITERATE)) limits the number of iterations in a `!DO` construct. The default is 1000.
