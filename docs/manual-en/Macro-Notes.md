#### 14.2.12 Additional Notes

#### 14.2.12.1 Calling Macros from Macros

If the body of macro A includes a call to macro B, the call can use macro arguments (including `!*`) and macro variables as part of arguments to B. For `!TOKENS` arguments, the argument or variable name counts as one token regardless of the number that it expands into; for `!CHAREND` and `!ENCLOSE` arguments, the delimiters come only from the call, not the expansions; and `!CMDEND` ends at the calling command, not any end of command within an argument or variable. 

Macro functions are not supported as part of the arguments in a macro call. To get the same effect, use `!LET` to define a macro variable, then pass the macro variable to the macro. 

When macro A calls macro B, the order of their `DEFINE` commands doesn’t matter, as long as macro B has been defined when A is called. 

#### 14.2.12.2 Command Terminators

Macros and command terminators require care. Macros honor the syntax differences between interactive and batch syntax (see [Syntax Variants](Syntax-Variants.md)), which means that the interpretation of a macro can vary depending on the syntax mode in use. We assume here that interactive mode is in use, in which ‘.’ at the end of a line is the primary way to end a command. 

The `DEFINE` command needs to end with ‘.’ following the `!ENDDEFINE`. The macro body may contain ‘.’ if it is intended to expand to whole commands, but using ‘.’ within a macro body that expands to just syntax fragments (such as a list of variables) will cause syntax errors. 

Macro directives such as `!IF` and `!DO` do not end with ‘.’. 

#### 14.2.12.3 Expansion Contexts

Macros do not expand within comments, whether introduced within a line by `/*` or as a separate COMMENT or ‘*’ commands (see [COMMENT](COMMENT.md)). (SPSS does expand macros in COMMENT and ‘*’.) 

Macros do not expand within quoted strings. 

Macros are expanded in the `TITLE` and `SUBTITLE` commands as long as their arguments are not quoted strings. 

#### 14.2.12.4 PRESERVE and RESTORE

Some macro bodies might use the SET command to change certain settings. When this is the case, consider using the PRESERVE and RESTORE commands to save and then restore these settings. See [PRESERVE and RESTORE](PRESERVE-and-RESTORE.md).
