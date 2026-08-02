#### 14.2.4 Macro Arguments

This section explains how to use macro arguments. As an initial example, the following syntax defines a macro named `!analyze` that takes all the syntax up to the first command terminator as an argument: 
    
    
    DEFINE !analyze(!POSITIONAL !CMDEND)
    DESCRIPTIVES !1.
    FREQUENCIES /VARIABLES=!1.
    !ENDDEFINE.
    

When `!analyze` is called, it expands to a pair of analysis commands with each `!1` in the body replaced by the argument. That is, these calls: 
    
    
    !analyze v1 v2 v3.
    !analyze v4 v5.
    

act like the following: 
    
    
    DESCRIPTIVES v1 v2 v3.
    FREQUENCIES /VARIABLES=v1 v2 v3.
    DESCRIPTIVES v4 v5.
    FREQUENCIES /VARIABLES=v4 v5.
    

Macros may take any number of arguments, described within the parentheses in the DEFINE command. Arguments come in two varieties based on how their values are specified when the macro is called: 

  * A _positional_ argument has a required value that follows the macro’s name. Use the `!POSITIONAL` keyword to declare a positional argument. 

When a macro is called, the positional argument values appear in the same order as their definitions, before any keyword argument values. 

References to a positional argument in a macro body are numbered: `!1` is the first positional argument, `!2` the second, and so on. In addition, `!*` expands to all of the positional arguments’ values, separated by spaces. 

The following example uses a positional argument: 
        
        DEFINE !analyze(!POSITIONAL !CMDEND)
        DESCRIPTIVES !1.
        FREQUENCIES /VARIABLES=!1.
        !ENDDEFINE.
        
        !analyze v1 v2 v3.
        !analyze v4 v5.
        

  * A _keyword_ argument has a name. In the macro call, its value is specified with the syntax `_name_ =_value_`. The names allow keyword argument values to take any order in the call. 

In declaration and calls, a keyword argument’s name may not begin with ‘!’, but references to it in the macro body do start with a leading ‘!’. 

The following example uses a keyword argument that defaults to ALL if the argument is not assigned a value: 
        
        DEFINE !analyze_kw(vars=!DEFAULT(ALL) !CMDEND)
        DESCRIPTIVES !vars.
        FREQUENCIES /VARIABLES=!vars.
        !ENDDEFINE.
        
        !analyze_kw vars=v1 v2 v3.  /* Analyze specified variables.
        !analyze_kw.                /* Analyze all variables.
        

If a macro has both positional and keyword arguments, then the positional arguments must come first in the DEFINE command, and their values also come first in macro calls. A keyword argument may be omitted by leaving its keyword out of the call, and a positional argument may be omitted by putting a command terminator where it would appear. (The latter case also omits any following positional arguments and all keyword arguments, if there are any.) When an argument is omitted, a default value is used: either the value specified in `!DEFAULT(_value_)`, or an empty value otherwise. 

Each argument declaration specifies the form of its value: 

`!TOKENS(_count_)`
    

Exactly count tokens, e.g. `!TOKENS(1)` for a single token. Each identifier, number, quoted string, operator, or punctuator is a token. See [Tokens](Tokens.md), for a complete definition. 

The following variant of `!analyze_kw` accepts only a single variable name (or `ALL`) as its argument: 
    
    
    DEFINE !analyze_one_var(!POSITIONAL !TOKENS(1))
    DESCRIPTIVES !1.
    FREQUENCIES /VARIABLES=!1.
    !ENDDEFINE.
    
    !analyze_one_var v1.
    

`!CHAREND('token')`
    

Any number of tokens up to token, which should be an operator or punctuator token such as ‘/’ or ‘+’. The token does not become part of the value. 

With the following variant of `!analyze_kw`, the variables must be following by ‘/’: 
    
    
    DEFINE !analyze_parens(vars=!CHARNED('/'))
    DESCRIPTIVES !vars.
    FREQUENCIES /VARIABLES=!vars.
    !ENDDEFINE.
    
    !analyze_parens vars=v1 v2 v3/.
    

`!ENCLOSE('start','end')`
    

Any number of tokens enclosed between start and end, which should each be operator or punctuator tokens. For example, use `!ENCLOSE('(',')')` for a value enclosed within parentheses. (Such a value could never have right parentheses inside it, even paired with left parentheses.) The start and end tokens are not part of the value. 

With the following variant of `!analyze_kw`, the variables must be specified within parentheses: 
    
    
    DEFINE !analyze_parens(vars=!ENCLOSE('(',')'))
    DESCRIPTIVES !vars.
    FREQUENCIES /VARIABLES=!vars.
    !ENDDEFINE.
    
    !analyze_parens vars=(v1 v2 v3).
    

`!CMDEND`
    

Any number of tokens up to the end of the command. This should be used only for the last positional parameter, since it consumes all of the tokens in the command calling the macro. 

The following variant of `!analyze_kw` takes all the variable names up to the end of the command as its argument: 
    
    
    DEFINE !analyze_kw(vars=!CMDEND)
    DESCRIPTIVES !vars.
    FREQUENCIES /VARIABLES=!vars.
    !ENDDEFINE.
    
    !analyze_kw vars=v1 v2 v3.
    

By default, when an argument’s value contains a macro call, the call is expanded each time the argument appears in the macro’s body. The `!NOEXPAND` keyword in an argument declaration suppresses this expansion. See [Controlling Macro Expansion](Controlling-Macro-Expansion.md).
