#### 15.12.9 McNemar Test
    
    
         [ /MCNEMAR var_list [ WITH var_list [ (PAIRED) ]]]
    

Use McNemar’s test to analyse the significance of the difference between pairs of correlated proportions. 

If the `WITH` keyword is omitted, then tests for all combinations of the listed variables are performed. If the `WITH` keyword is given, and the `(PAIRED)` keyword is also given, then the number of variables preceding `WITH` must be the same as the number following it. In this case, tests for each respective pair of variables are performed. If the `WITH` keyword is given, but the `(PAIRED)` keyword is omitted, then tests for each combination of variable preceding `WITH` against variable following `WITH` are performed. 

The data in each variable must be dichotomous. If there are more than two distinct variables an error will occur and the test will not be run.
