### 11.1 DISPLAY

The `DISPLAY` command displays information about the variables in the active dataset. A variety of different forms of information can be requested. By default, all variables in the active dataset are displayed. However you can select variables of interest using the `/VARIABLES` subcommand. 
    
    
    DISPLAY [SORTED] NAMES [[/VARIABLES=]var_list].
    DISPLAY [SORTED] INDEX [[/VARIABLES=]var_list].
    DISPLAY [SORTED] LABELS [[/VARIABLES=]var_list].
    DISPLAY [SORTED] VARIABLES [[/VARIABLES=]var_list].
    DISPLAY [SORTED] DICTIONARY [[/VARIABLES=]var_list].
    DISPLAY [SORTED] SCRATCH [[/VARIABLES=]var_list].
    DISPLAY [SORTED] ATTRIBUTES [[/VARIABLES=]var_list].
    DISPLAY [SORTED] @ATTRIBUTES [[/VARIABLES=]var_list].
    DISPLAY [SORTED] VECTORS.
    

The following keywords primarily cause information about variables to be displayed. With these keywords, by default information is displayed about all variable in the active dataset, in the order that variables occur in the active dataset dictionary. The `SORTED` keyword causes output to be sorted alphabetically by variable name. 

NAMES
    

The variables’ names are displayed. 

INDEX
    

The variables’ names are displayed along with a value describing their position within the active dataset dictionary. 

LABELS
    

Variable names, positions, and variable labels are displayed. 

VARIABLES
    

Variable names, positions, print and write formats, and missing values are displayed. 

DICTIONARY
    

Variable names, positions, print and write formats, missing values, variable labels, and value labels are displayed. 

SCRATCH
    

Variable names are displayed, for scratch variables only (see [Scratch Variables](Scratch-Variables.md)). 

ATTRIBUTES
@ATTRIBUTES
    

Datafile and variable attributes are displayed. The first form of the command omits those attributes whose names begin with `@` or `$@`. In the second for, all datafile and variable attributes are displayed. 

With the `VECTOR` keyword, `DISPLAY` lists all the currently declared vectors. If the `SORTED` keyword is given, the vectors are listed in alphabetical order; otherwise, they are listed in textual order of definition within the PSPP syntax file. 

For related commands, see [DISPLAY DOCUMENTS](DISPLAY-DOCUMENTS.md) and [DISPLAY FILE LABEL](DISPLAY-FILE-LABEL.md).
