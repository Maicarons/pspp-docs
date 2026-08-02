#### 15.7.1.2 Scalar Variables

For a categorical variable, `CTABLES` divides the table into a cell per category. For a scalar variable, `CTABLES` instead calculates a summary measure, by default the mean, of the values that fall into a cell. For example, if the only variable specified is a scalar variable, then the output is a single cell that holds the mean of all of the data: 
    
    
    CTABLES /TABLE age.
    

|  | Mean |
| --- | --- |
| D1. AGE: What is your age? | 48 |

A scalar variable may nest with categorical variables. The following example shows the mean age of survey respondents across gender and language groups: 
    
    
    CTABLES /TABLE gender > age BY region.
    

|  |  |  | English | Spanish |
| --- | --- | --- | --- | --- |
|  |  |  | Was this interview conducted in English or Spanish? |  |
|  |  |  | Mean | Mean |
| D1. AGE: What is your age? | S3a. GENDER: | Male | 46 | 37 |
| Female | 51 | 39 |  |  |

The order of nesting of scalar and categorical variables affects table labeling, but it does not affect the data displayed in the table. The following example shows how the output changes when the nesting order of the scalar and categorical variable are interchanged: 
    
    
    CTABLES /TABLE age > gender BY region.
    

|  |  |  | English | Spanish |
| --- | --- | --- | --- | --- |
|  |  |  | Was this interview conducted in English or Spanish? |  |
|  |  |  | Mean | Mean |
| S3a. GENDER: | Male | D1. AGE: What is your age? | 46 | 37 |
| Female | D1. AGE: What is your age? | 51 | 39 |  |

Only a single scalar variable may appear in each section; that is, a scalar variable may not nest inside a scalar variable directly or indirectly. Scalar variables may only appear on one axis within `TABLE`.
