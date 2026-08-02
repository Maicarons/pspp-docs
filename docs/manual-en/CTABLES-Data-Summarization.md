#### 15.7.2 Data Summarization

The `CTABLES` command allows the user to control how the data are summarized with _summary specifications_ , syntax that lists one or more summary function names, optionally separated by commas, and which are enclosed in square brackets following a variable name on the `TABLE` subcommand. When all the variables are categorical, summary specifications can be given for the innermost nested variables on any one axis. When a scalar variable is present, only the scalar variable may have summary specifications. 

The following example includes a summary specification for column and row percentages for categorical variables, and mean and median for a scalar variable: 
    
    
    CTABLES
        /TABLE=age [MEAN, MEDIAN] BY gender
        /TABLE=ageGroup [COLPCT, ROWPCT] BY gender.
    

|  |  | Column % | Row % | Column % | Row % |
| --- | --- | --- | --- | --- | --- |
|  | S3a. GENDER: |  |  |  |  |
|  | Male | Female |  |  |  |
|  | Mean | Median | Mean | Median |  |
| D1. AGE: What is your age? | 46 | 45 | 50 | 52 |  |
|  |  | S3a. GENDER: |  |  |  |
|  |  | Male | Female |  |  |
| Age group | 15 or younger | .0% | . | .0% | . |
| 16 to 25 | 19.0% | 54.0% | 13.1% | 46.0% |  |
| 26 to 35 | 15.2% | 49.2% | 12.7% | 50.8% |  |
| 36 to 45 | 15.6% | 47.2% | 14.2% | 52.8% |  |
| 46 to 55 | 16.8% | 44.8% | 16.8% | 55.2% |  |
| 56 to 65 | 16.5% | 41.4% | 18.9% | 58.6% |  |
| 66 or older | 17.0% | 36.0% | 24.4% | 64.0% |  |

A summary specification may override the default label and format by appending a string or format specification or both (in that order) to the summary function name. For example: 
    
    
    CTABLES /TABLE=ageGroup [COLPCT 'Gender %' PCT5.0,
                             ROWPCT 'Age Group %' PCT5.0]
                   BY gender.
    

|  |  | Gender % | Age Group % | Gender % | Age Group % |
| --- | --- | --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |  |  |
|  |  | Male | Female |  |  |
| Age group | 15 or younger | 0% | . | 0% | . |
| 16 to 25 | 19% | 54% | 13% | 46% |  |
| 26 to 35 | 15% | 49% | 13% | 51% |  |
| 36 to 45 | 16% | 47% | 14% | 53% |  |
| 46 to 55 | 17% | 45% | 17% | 55% |  |
| 56 to 65 | 16% | 41% | 19% | 59% |  |
| 66 or older | 17% | 36% | 24% | 64% |  |

In addition to the standard formats, `CTABLES` allows the user to specify the following special formats: 

| NEGPAREN w . d | Encloses negative numbers in parentheses. | 42.96 | (42.96) |
| --- | --- | --- | --- |
| NEQUAL w . d | Adds a N= prefix. | N=42.96 | N=-42.96 |
| PAREN w . d | Encloses all numbers in parentheses. | (42.96) | (-42.96) |
| PCTPAREN w . d | Encloses all numbers in parentheses with a ‘ % ’ suffix. | (42.96%) | (-42.96%) |

Parentheses provide a shorthand to apply summary specifications to multiple variables. For example, both of these commands: 
    
    
    CTABLES /TABLE=ageGroup[COLPCT] + membersOver16[COLPCT] BY gender.
    CTABLES /TABLE=(ageGroup + membersOver16)[COLPCT] BY gender.
    

produce the same output shown below: 

|  |  | Male | Female |
| --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |
|  |  | Column % | Column % |
| Age group | 15 or younger | .0% | .0% |
| 16 to 25 | 19.0% | 13.1% |  |
| 26 to 35 | 15.2% | 12.7% |  |
| 36 to 45 | 15.6% | 14.2% |  |
| 46 to 55 | 16.8% | 16.8% |  |
| 56 to 65 | 16.5% | 18.9% |  |
| 66 or older | 17.0% | 24.4% |  |
| S1. Including yourself, how many members of this household are age 16 or older? | None | .0% | .0% |
| 1 | 21.4% | 35.0% |  |
| 2 | 61.9% | 52.3% |  |
| 3 | 11.0% | 8.2% |  |
| 4 | 4.2% | 3.2% |  |
| 5 | 1.1% | .9% |  |
| 6 or more | .4% | .4% |  |

The following sections list the available summary functions. After each function’s name is given its default label and format. If no format is listed, then the default format is the print format for the variable being summarized. 

| • Summary Functions for Individual Cells |  |  |
| --- | --- | --- |
| • Summary Functions for Groups of Cells |  |  |
| • Summary Functions for Adjusted Weights |  |  |
| • Unweighted Summary Functions |  |  |
