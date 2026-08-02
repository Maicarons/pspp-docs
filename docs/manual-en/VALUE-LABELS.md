### 11.11 VALUE LABELS

The values of a variable can be associated with an arbitrary text string. In this way, a short value can stand for a longer, more descriptive label. 

Both numeric and string variables can be given labels. For string variables, the values are case-sensitive, so that, for example, a capitalized value and its lowercase variant would have to be labeled separately if both are present in the data. 
    
    
    VALUE LABELS
            /var_list value ’label’ [value ’label’]…
    

`VALUE LABELS` allows values of variables to be associated with labels. 

To set up value labels for one or more variables, specify the variable names after a slash (‘/’), followed by a list of values and their associated labels, separated by spaces. 

Value labels in output are normally broken into lines automatically. Put ‘\n’ in a label string to force a line break at that point. The label may still be broken into lines at additional points. 

Before `VALUE LABELS` is executed, any existing value labels are cleared from the variables specified. Use `ADD VALUE LABELS` (see [ADD VALUE LABELS](ADD-VALUE-LABELS.md)) to add value labels without clearing those already present.
