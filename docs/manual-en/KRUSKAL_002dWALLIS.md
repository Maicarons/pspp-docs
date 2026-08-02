#### 15.12.7 Kruskal-Wallis Test
    
    
         [ /KRUSKAL-WALLIS = var_list BY var (lower, upper) ]
    

The Kruskal-Wallis test is used to compare data from an arbitrary number of populations. It does not assume normality. The data to be compared are specified by var_list. The categorical variable determining the groups to which the data belongs is given by var. The limits lower and upper specify the valid range of var. If upper is smaller than lower, the PSPP will assume their values to be reversed. Any cases for which var falls outside [lower, upper] are ignored. 

The mean rank of each group as well as the chi-squared value and significance of the test are printed. The abbreviated subcommand `K-W` may be used in place of `KRUSKAL-WALLIS`.
