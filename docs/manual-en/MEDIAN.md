#### 15.12.10 Median Test
    
    
         [ /MEDIAN [(value)] = var_list BY variable (value1, value2) ]
    

The median test is used to test whether independent samples come from populations with a common median. The median of the populations against which the samples are to be tested may be given in parentheses immediately after the `/MEDIAN` subcommand. If it is not given, the median is imputed from the union of all the samples. 

The variables of the samples to be tested should immediately follow the ‘=’ sign. The keyword `BY` must come next, and then the grouping variable. Two values in parentheses should follow. If the first value is greater than the second, then a 2 sample test is performed using these two values to determine the groups. If however, the first variable is less than the second, then a _k_ sample test is conducted and the group values used are all values encountered which lie in the range [value1,value2].
