#### 14.2.3 Macro Bodies

As previously shown, a macro body may contain a fragment of a PSPP command (such as a variable name). A macro body may also contain full PSPP commands. In the latter case, the macro body should also contain the command terminators. 

Most PSPP commands may occur within a macro. The `DEFINE` command itself is one exception, because the inner `!ENDDEFINE` ends the outer macro definition. For compatibility, `BEGIN DATA`…`END DATA.` should not be used within a macro. 

The body of a macro may call another macro. The following shows one way that could work: 
    
    
    DEFINE !commands()
    DESCRIPTIVES !vars.
    FREQUENCIES /VARIABLES=!vars.
    !ENDDEFINE.
    
    * Initially define the 'vars' macro to analyze v1...v3.
    DEFINE !vars() v1 v2 v3 !ENDDEFINE.
    !commands
    
    * Redefine 'vars' macro to analyze different variables.
    DEFINE !vars() v4 v5 !ENDDEFINE.
    !commands
    

The `!commands` macro would be easier to use if it took the variables to analyze as an argument rather than through another macro. The following section shows how to do that.
