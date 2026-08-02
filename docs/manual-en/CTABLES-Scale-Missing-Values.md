#### 15.7.9.3 Scale Missing Values
    
    
    /SMISSING {VARIABLE _|_ LISTWISE}
    

The `SMISSING` subcommand, which must precede the first `TABLE` subcommand, controls treatment of missing values for scalar variables in producing all the output tables. `SMISSING` is optional. 

With `SMISSING=VARIABLE`, which is the default, missing values are excluded on a variable-by-variable basis. With `SMISSING=LISTWISE`, when stacked scalar variables are nested together with a categorical variable, a missing value for any of the scalar variables causes the case to be excluded for all of them. 

As an example, consider the following dataset, in which ‘x’ is a categorical variable and ‘y’ and ‘z’ are scale: 

| x | y | z |
| --- | --- | --- |
| 1 | . | 40.00 |
| 1 | 10.00 | 50.00 |
| 1 | 20.00 | 60.00 |
| 1 | 30.00 | . |

With the default missing-value treatment, ‘x’’s mean is 20, based on the values 10, 20, and 30, and ‘y’’s mean is 50, based on 40, 50, and 60: 
    
    
    CTABLES /TABLE (y + z) > x.
    

|  |  |  | Mean |
| --- | --- | --- | --- |
| y | x | 1 | 20.00 |
| z | x | 1 | 50.00 |

By adding `SMISSING=LISTWISE`, only cases where ‘y’ and ‘z’ are both non-missing are considered, so ‘x’’s mean becomes 15, as the average of 10 and 20, and ‘y’’s mean becomes 55, the average of 50 and 60: 
    
    
    CTABLES /SMISSING LISTWISE /TABLE (y + z) > x.
    

|  |  |  | Mean |
| --- | --- | --- | --- |
| y | x | 1 | 15.00 |
| z | x | 1 | 55.00 |

Even with `SMISSING=LISTWISE`, if ‘y’ and ‘z’ are separately nested with ‘x’, instead of using a single ‘>’ operator, missing values revert to being considered on a variable-by-variable basis: 
    
    
    CTABLES /SMISSING LISTWISE /TABLE (y > x) + (z > x).
    

|  |  |  | Mean |
| --- | --- | --- | --- |
| y | x | 1 | 20.00 |
| z | x | 1 | 50.00 |
