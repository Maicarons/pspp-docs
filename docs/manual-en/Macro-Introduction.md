#### 14.2.2 Introduction

The DEFINE command creates a _macro_ , which is a name for a fragment of PSPP syntax called the macro’s _body_. Following the DEFINE command, syntax may _call_ the macro by name any number of times. Each call substitutes, or _expands_ , the macro’s body in place of the call, as if the body had been written in its place. 

The following syntax defines a macro named `!vars` that expands to the variable names `v1 v2 v3`. The macro’s name begins with ‘!’, which is optional for macro names. The `()` following the macro name are required: 
    
    
    DEFINE !vars()
    v1 v2 v3
    !ENDDEFINE.
    

Here are two ways that `!vars` might be called given the preceding definition: 
    
    
    DESCRIPTIVES !vars.
    FREQUENCIES /VARIABLES=!vars.
    

With macro expansion, the above calls are equivalent to the following: 
    
    
    DESCRIPTIVES v1 v2 v3.
    FREQUENCIES /VARIABLES=v1 v2 v3.
    

The `!vars` macro expands to a fixed body. Macros may have more sophisticated contents: 

  * Macro _arguments_ that are substituted into the body whenever they are named. The values of a macro’s arguments are specified each time it is called. See [Macro Arguments](Macro-Arguments.md). 
  * Macro _functions_ , expanded when the macro is called. See [Macro Functions](Macro-Functions.md). 
  * `!IF` constructs, for conditional expansion. See [Macro Conditional Expansion](Macro-Conditional-Expansion.md). 
  * Two forms of `!DO` construct, for looping over a numerical range or a collection of tokens. See [Macro Loops](Macro-Loops.md). 
  * `!LET` constructs, for assigning to macro variables. See [Macro Variable Assignment](Macro-Variable-Assignment.md). 

Many identifiers associated with macros begin with ‘!’, a character not normally allowed in identifiers. These identifiers are reserved only for use with macros, which helps keep them from being confused with other kinds of identifiers. 

The following sections provide more details on macro syntax and semantics.
