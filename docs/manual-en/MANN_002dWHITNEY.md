#### 15.12.8 Mann-Whitney U Test
    
    
         [ /MANN-WHITNEY = var_list BY var (group1, group2) ]
    

The Mann-Whitney subcommand is used to test whether two groups of data come from different populations. The variables to be tested should be specified in var_list and the grouping variable, that determines to which group the test variables belong, in var. Var may be either a string or an alpha variable. Group1 and group2 specify the two values of var which determine the groups of the test data. Cases for which the var value is neither group1 or group2 are ignored. 

The value of the Mann-Whitney U statistic, the Wilcoxon W, and the significance are printed. You may abbreviated the subcommand `MANN-WHITNEY` to `M-W`.
