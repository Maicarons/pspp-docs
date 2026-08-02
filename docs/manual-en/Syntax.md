#### 15.17.1 Syntax
    
    
    REGRESSION
            /VARIABLES=var_list
            /DEPENDENT=var_list
            /STATISTICS={ALL, DEFAULTS, R, COEFF, ANOVA, BCOV, CI[conf, TOL]}
            { /ORIGIN | /NOORIGIN }
            /SAVE={PRED, RESID}
    

The `REGRESSION` procedure reads the active dataset and outputs statistics relevant to the linear model specified by the user. 

The `VARIABLES` subcommand, which is required, specifies the list of variables to be analyzed. Keyword `VARIABLES` is required. The `DEPENDENT` subcommand specifies the dependent variable of the linear model. The `DEPENDENT` subcommand is required. All variables listed in the `VARIABLES` subcommand, but not listed in the `DEPENDENT` subcommand, are treated as explanatory variables in the linear model. 

All other subcommands are optional: 

The `STATISTICS` subcommand specifies which statistics are to be displayed. The following keywords are accepted: 

`ALL`
    

All of the statistics below. 

`R`
    

The ratio of the sums of squares due to the model to the total sums of squares for the dependent variable. 

`COEFF`
    

A table containing the estimated model coefficients and their standard errors. 

`CI (conf)`
    

This item is only relevant if COEFF has also been selected. It specifies that the confidence interval for the coefficients should be printed. The optional value conf, which must be in parentheses, is the desired confidence level expressed as a percentage. 

`ANOVA`
    

Analysis of variance table for the model. 

`BCOV`
    

The covariance matrix for the estimated model coefficients. 

`TOL`
    

The variance inflation factor and its reciprocal. This has no effect unless COEFF is also given. 

`DEFAULT`
    

The same as if R, COEFF, and ANOVA had been selected. This is what you get if the /STATISTICS command is not specified, or if it is specified without any parameters. 

The `ORIGIN` and `NOORIGIN` subcommands are mutually exclusive. `ORIGIN` indicates that the regression should be performed through the origin. You should use this option if, and only if you have reason to believe that the regression does indeed pass through the origin — that is to say, the value _b_0_ above, is zero. The default is `NOORIGIN`. 

The `SAVE` subcommand causes PSPP to save the residuals or predicted values from the fitted model to the active dataset. PSPP will store the residuals in a variable called ‘RES1’ if no such variable exists, ‘RES2’ if ‘RES1’ already exists, ‘RES3’ if ‘RES1’ and ‘RES2’ already exist, etc. It will choose the name of the variable for the predicted values similarly, but with ‘PRED’ as a prefix. When `SAVE` is used, PSPP ignores `TEMPORARY`, treating temporary transformations as permanent.
