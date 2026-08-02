### 6.10 Backus-Naur Form

The syntax of some parts of the PSPP language is presented in this manual using the formalism known as _Backus-Naur Form_ , or BNF. The following table describes BNF: 

  * Words in all-uppercase are PSPP keyword tokens. In BNF, these are often called _terminals_. There are some special terminals, which are written in lowercase for clarity: 

    
`number`
    

A real number. 

`integer`
    

An integer number. 

`string`
    

A string. 

`var-name`
    

A single variable name. 

`=`, `/`, `+`, `-`, etc.
    

Operators and punctuators. 

`.`
    

The end of the command. This is not necessarily an actual dot in the syntax file (see [Commands](Commands.md)). 

  * Other words in all lowercase refer to BNF definitions, called _productions_. These productions are also known as _nonterminals_. Some nonterminals are very common, so they are defined here in English for clarity: 

    
`var-list`
    

A list of one or more variable names or the keyword `ALL`. 

`expression`
    

An expression. See [Expressions](Expressions.md), for details. 

  * ‘::=’ means “is defined as”. The left side of ‘::=’ gives the name of the nonterminal being defined. The right side of ‘::=’ gives the definition of that nonterminal. If the right side is empty, then one possible expansion of that nonterminal is nothing. A BNF definition is called a _production_. 
  * So, the key difference between a terminal and a nonterminal is that a terminal cannot be broken into smaller parts—in fact, every terminal is a single token (see [Tokens](Tokens.md)). On the other hand, nonterminals are composed of a (possibly empty) sequence of terminals and nonterminals. Thus, terminals indicate the deepest level of syntax description. (In parsing theory, terminals are the leaves of the parse tree; nonterminals form the branches.) 
  * The first nonterminal defined in a set of productions is called the _start symbol_. The start symbol defines the entire syntax for that command.
