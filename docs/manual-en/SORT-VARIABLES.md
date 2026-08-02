### 11.5 SORT VARIABLES

`SORT VARIABLES` reorders the variables in the active dataset’s dictionary according to a chosen sort key. 
    
    
    SORT VARIABLES [BY]
        (NAME | TYPE | FORMAT | LABEL | VALUES | MISSING | MEASURE
         | ROLE | COLUMNS | ALIGNMENT | ATTRIBUTE name)
        [(D)].
    

The main specification is one of the following identifiers, which determines how the variables are sorted: 

NAME
    

Sorts the variables according to their names, in a case-insensitive fashion. However, when variable names differ only in a number at the end, they are sorted numerically. For example, `VAR5` is sorted before `VAR400` even though ‘4’ precedes ‘5’. 

TYPE
    

Sorts numeric variables before string variables, and shorter string variables before longer ones. 

FORMAT
    

Groups variables by print format; within a format, sorts narrower formats before wider ones; with the same format and width, sorts fewer decimal places before more decimal places. See [FORMATS](FORMATS.md). 

LABEL
    

Sorts variables without a variable label before those with one. See [VARIABLE LABELS](VARIABLE-LABELS.md). 

VALUES
    

Sorts variables without value labels before those with some. See [VALUE LABELS](VALUE-LABELS.md). 

MISSING
    

Sorts variables without missing values before those with some. See [MISSING VALUES](MISSING-VALUES.md). 

MEASURE
    

Sorts nominal variables first, followed by ordinal variables, followed by scale variables. See [VARIABLE LEVEL](VARIABLE-LEVEL.md). 

ROLE
    

Groups variables according to their role. See [VARIABLE ROLE](VARIABLE-ROLE.md). 

COLUMNS
    

Sorts variables in ascending display width. See [VARIABLE WIDTH](VARIABLE-WIDTH.md). 

ALIGNMENT
    

Sorts variables according to their alignment, first left-aligned, then right-aligned, then centered. See [VARIABLE ALIGNMENT](VARIABLE-ALIGNMENT.md). 

ATTRIBUTE name
    

Sorts variables according to the first value of their name attribute. Variables without attribute are sorted first. See [VARIABLE ATTRIBUTE](VARIABLE-ATTRIBUTE.md). 

Only one sort criterion can be specified. The sort is “stable,” so to sort on multiple criteria one may perform multiple sorts. For example, the following will sort primarily based on alignment, with variables that have the same alignment ordered based on display width: 
    
    
    SORT VARIABLES BY COLUMNS.
    SORT VARIABLES BY ALIGNMENT.
    

Specify `(D)` to reverse the sort order.
