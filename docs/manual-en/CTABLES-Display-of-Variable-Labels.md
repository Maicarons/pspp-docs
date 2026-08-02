#### 15.7.8 Display of Variable Labels
    
    
    /VLABELS
        VARIABLES=_variables_
        DISPLAY={DEFAULT _|_ NAME _|_ LABEL _|_ BOTH _|_ NONE}
    

The `VLABELS` subcommand, which must precede the first `TABLE` subcommand, controls display of variable labels in all the output tables. `VLABELS` is optional. It may appear multiple times to adjust settings for different variables. 

`VARIABLES` and `DISPLAY` are required. The value of `DISPLAY` controls how variable labels are displayed for the variables listed on `VARIABLES`. The supported values are: 

`DEFAULT`
    

Use the setting from `SET TVARS` (see [SET TVARS](SET.md#SET-TVARS)). 

`NAME`
    

Show only a variable name. 

`LABEL`
    

Show only a variable label. 

`BOTH`
    

Show variable name and label. 

`NONE`
    

Show nothing.
