### 15.9 GLM
    
    
    GLM dependent_vars BY fixed_factors
         [/METHOD = SSTYPE(type)]
         [/DESIGN = interaction_0 [interaction_1 [... interaction_n]]]
         [/INTERCEPT = {INCLUDE|EXCLUDE}]
         [/MISSING = {INCLUDE|EXCLUDE}]
    

The `GLM` procedure can be used for fixed effects factorial Anova. 

The dependent_vars are the variables to be analysed. You may analyse several variables in the same command in which case they should all appear before the `BY` keyword. 

The fixed_factors list must be one or more categorical variables. Normally it does not make sense to enter a scalar variable in the fixed_factors and doing so may cause PSPP to do a lot of unnecessary processing. 

The `METHOD` subcommand is used to change the method for producing the sums of squares. Available values of type are 1, 2 and 3. The default is type 3. 

You may specify a custom design using the `DESIGN` subcommand. The design comprises a list of interactions where each interaction is a list of variables separated by a ‘*’. For example the command 
    
    
    GLM subject BY sex age_group race
        /DESIGN = age_group sex group age_group*sex age_group*race
    

specifies the model _subject = age_group + sex + race + age_group*sex + age_group*race_. If no `DESIGN` subcommand is specified, then the default is all possible combinations of the fixed factors. That is to say 
    
    
    GLM subject BY sex age_group race
    

implies the model _subject = age_group + sex + race + age_group*sex + age_group*race + sex*race + age_group*sex*race_. 

The `MISSING` subcommand determines the handling of missing variables. If `INCLUDE` is set then, for the purposes of GLM analysis, only system-missing values are considered to be missing; user-missing values are not regarded as missing. If `EXCLUDE` is set, which is the default, then user-missing values are considered to be missing as well as system-missing values. A case for which any dependent variable or any factor variable has a missing value is excluded from the analysis.
