### 11.7 VARIABLE LABELS

In addition to a variable’s name, each variable can have a _label_. Whereas a variable name is a concise, easy-to-type mnemonic for the variable, a label may be longer and more descriptive. 
    
    
    VARIABLE LABELS
            variable ’label’
            [variable ’label’]…
    

`VARIABLE LABELS` associates explanatory names with variables. This name, called a _variable label_ , is displayed by statistical procedures. 

Specify each variable followed by its label as a quoted string. Variable-label pairs may be separated by an optional slash ‘/’. 

If a listed variable already has a label, the new one replaces it. Specifying an empty string as the label, e.g.‘''’, removes a label.
