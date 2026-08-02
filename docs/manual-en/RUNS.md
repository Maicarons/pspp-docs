#### 15.12.11 Runs Test
    
    
         [ /RUNS ({MEAN, MEDIAN, MODE, value})  = var_list ]
    

The `/RUNS` subcommand tests whether a data sequence is randomly ordered. 

It works by examining the number of times a variable’s value crosses a given threshold. The desired threshold must be specified within parentheses. It may either be specified as a number or as one of `MEAN`, `MEDIAN` or `MODE`. Following the threshold specification comes the list of variables whose values are to be tested. 

The subcommand shows the number of runs, the asymptotic significance based on the length of the data.
