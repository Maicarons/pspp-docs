#### 14.2.6 Macro Functions

Macro bodies may manipulate syntax using macro functions. Macro functions accept tokens as arguments and expand to sequences of characters. 

The arguments to macro functions have a restricted form. They may only be a single token (such as an identifier or a string), a macro argument, or a call to a macro function. Thus, the following are valid macro arguments: 
    
    
    x    5.0    x    !1    "5 + 6"    !CONCAT(x,y)
    

and the following are not: 
    
    
    x y    5+6
    

Macro functions expand to sequences of characters. When these character strings are processed further as character strings, e.g. with `!LENGTH`, any character string is valid. When they are interpreted as PSPP syntax, e.g. when the expansion becomes part of a command, they need to be valid for that purpose. For example, `!UNQUOTE("It's")` will yield an error if the expansion `It's` becomes part of a PSPP command, because it contains unbalanced single quotes, but `!LENGTH(!UNQUOTE("It's"))` expands to 4. 

The following macro functions are available. Each function’s documentation includes examples in the form `call → expansion`. 

Macro Function: **!BLANKS** _(count)_
    

Expands to count unquoted spaces, where count is a nonnegative integer. Outside quotes, any positive number of spaces are equivalent; for a quoted string of spaces, use `!QUOTE(!BLANKS(count))`. 

In the examples below, ‘_’ stands in for a space to make the results visible. 
    
    
    !BLANKS(0)                  → empty
    !BLANKS(1)                  → _
    !BLANKS(2)                  → __
    !QUOTE(!BLANKS(5))          → '_____'
    

Macro Function: **!CONCAT** _(arg…)_
    

Expands to the concatenation of all of the arguments. Before concatenation, each quoted string argument is unquoted, as if `!UNQUOTE` were applied. This allows for “token pasting”, combining two (or more) tokens into a single one: 
    
    
    !CONCAT(x, y)                → xy
    !CONCAT('x', 'y')            → xy
    !CONCAT(12, 34)              → 1234
    !CONCAT(!NULL, 123)          → 123
    

`!CONCAT` is often used for constructing a series of similar variable names from a prefix followed by a number and perhaps a suffix. For example: 
    
    
    !CONCAT(x, 0)                → x0
    !CONCAT(x, 0, y)             → x0y
    

An identifier token must begin with a letter (or ‘#’ or ‘@’), which means that attempting to use a number as the first part of an identifier will produce a pair of distinct tokens rather than a single one. For example: 
    
    
    !CONCAT(0, x)                → 0 x
    !CONCAT(0, x, y)             → 0 xy
    

Macro Function: **!EVAL** _(arg)_
    

Expands macro calls in arg. This is especially useful if arg is the name of a macro or a macro argument that expands to one, because arguments to macro functions are not expanded by default (see [Controlling Macro Expansion](Controlling-Macro-Expansion.md)). 

The following examples assume that `!vars` is a macro that expands to `a b c`: 
    
    
    !vars                        → a b c
    !QUOTE(!vars)                → '!vars'
    !EVAL(!vars)                 → a b c
    !QUOTE(!EVAL(!vars))         → 'a b c'
    

These examples additionally assume that argument `!1` has value `!vars`: 
    
    
    !1                           → a b c
    !QUOTE(!1)                   → '!vars'
    !EVAL(!1)                    → a b c
    !QUOTE(!EVAL(!1))            → 'a b c'
    

Macro Function: **!HEAD** _(arg)_
Macro Function: **!TAIL** _(arg)_
    

`!HEAD` expands to just the first token in an unquoted version of arg, and `!TAIL` to all the tokens after the first. 
    
    
    !HEAD('a b c')               → a
    !HEAD('a')                   → a
    !HEAD(!NULL)                 → empty
    !HEAD('')                    → empty
    
    !TAIL('a b c')               → b c
    !TAIL('a')                   → empty
    !TAIL(!NULL)                 → empty
    !TAIL('')                    → empty
    

Macro Function: **!INDEX** _(haystack, needle)_
    

Looks for needle in haystack. If it is present, expands to the 1-based index of its first occurrence; if not, expands to 0. 
    
    
    !INDEX(banana, an)           → 2
    !INDEX(banana, nan)          → 3
    !INDEX(banana, apple)        → 0
    !INDEX("banana", nan)        → 4
    !INDEX("banana", "nan")      → 0
    !INDEX(!UNQUOTE("banana"), !UNQUOTE("nan")) → 3
    

Macro Function: **!LENGTH** _(arg)_
    

Expands to a number token representing the number of characters in arg. 
    
    
    !LENGTH(123)                 → 3
    !LENGTH(123.00)              → 6
    !LENGTH( 123 )               → 3
    !LENGTH("123")               → 5
    !LENGTH(xyzzy)               → 5
    !LENGTH("xyzzy")             → 7
    !LENGTH("xy""zzy")           → 9
    !LENGTH(!UNQUOTE("xyzzy"))   → 5
    !LENGTH(!UNQUOTE("xy""zzy")) → 6
    !LENGTH(!1)                  → 5 if !1 is a b c
    !LENGTH(!1)                  → 0 if !1 is empty
    !LENGTH(!NULL)               → 0
    

Macro Function: **!NULL**
    

Expands to an empty character sequence. 
    
    
    !NULL                        → empty
    !QUOTE(!NULL)                → ''
    

Macro Function: **!QUOTE** _(arg)_
Macro Function: **!UNQUOTE** _(arg)_
    

The `!QUOTE` function expands to its argument surrounded by apostrophes, doubling any apostrophes inside the argument to make sure that it is valid PSPP syntax for a string. If the argument was already a quoted string, `!QUOTE` expands to it unchanged. 

Given a quoted string argument, the `!UNQUOTED` function expands to the string’s contents, with the quotes removed and any doubled quote marks reduced to singletons. If the argument was not a quoted string, `!UNQUOTE` expands to the argument unchanged. 
    
    
    !QUOTE(123.0)                → '123.0'
    !QUOTE( 123 )                → '123'
    !QUOTE('a b c')              → 'a b c'
    !QUOTE("a b c")              → "a b c"
    !QUOTE(!1)                   → 'a ''b'' c' if !1 is a 'b' c
    
    !UNQUOTE(123.0)              → 123.0
    !UNQUOTE( 123 )              → 123
    !UNQUOTE('a b c')            → a b c
    !UNQUOTE("a b c")            → a b c
    !UNQUOTE(!1)                 → a 'b' c if !1 is a 'b' c
    
    !QUOTE(!UNQUOTE(123.0))      → '123.0'
    !QUOTE(!UNQUOTE( 123 ))      → '123'
    !QUOTE(!UNQUOTE('a b c'))    → 'a b c'
    !QUOTE(!UNQUOTE("a b c"))    → 'a b c'
    !QUOTE(!UNQUOTE(!1))         → 'a ''b'' c' if !1 is a 'b' c
    

Macro Function: **!SUBSTR** _(arg, start[, count])_
    

Expands to a substring of arg starting from 1-based position start. If count is given, it limits the number of characters in the expansion; if it is omitted, then the expansion extends to the end of arg. 
    
    
    !SUBSTR(banana, 3)           → nana
    !SUBSTR(banana, 3, 3)        → nan
    !SUBSTR("banana", 1, 3)         → error ("ba is not a valid token)
    !SUBSTR(!UNQUOTE("banana"), 3) → nana
    !SUBSTR("banana", 3, 3)      → ana
    
    !SUBSTR(banana, 3, 0)        → empty
    !SUBSTR(banana, 3, 10)       → nana
    !SUBSTR(banana, 10, 3)       → empty
    

Macro Function: **!UPCASE** _(arg)_
    

Expands to an unquoted version of arg with all letters converted to uppercase. 
    
    
    !UPCASE(freckle)             → FRECKLE
    !UPCASE('freckle')           → FRECKLE
    !UPCASE('a b c')             → A B C
    !UPCASE('A B C')             → A B C
