#### 15.7.1.1 Categorical Variables

An axis expression that names a categorical variable divides the data into cells according to the values of that variable. When all the variables named on `TABLE` are categorical, by default each cell displays the number of cases that it contains, so specifying a single variable yields a frequency table, much like the output of the `FREQUENCIES` command (see [FREQUENCIES](FREQUENCIES.md)): 
    
    
    CTABLES /TABLE=ageGroup.
    

|  |  | Count |
| --- | --- | --- |
| Age group | 15 or younger | 0 |
| 16 to 25 | 1099 |  |
| 26 to 35 | 967 |  |
| 36 to 45 | 1037 |  |
| 46 to 55 | 1175 |  |
| 56 to 65 | 1247 |  |
| 66 or older | 1474 |  |

Specifying a row and a column categorical variable yields a crosstabulation, much like the output of the `CROSSTABS` command (see [CROSSTABS](CROSSTABS.md)): 
    
    
    CTABLES /TABLE=ageGroup BY gender.
    

|  |  | Male | Female |
| --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |
|  |  | Count | Count |
| Age group | 15 or younger | 0 | 0 |
| 16 to 25 | 594 | 505 |  |
| 26 to 35 | 476 | 491 |  |
| 36 to 45 | 489 | 548 |  |
| 46 to 55 | 526 | 649 |  |
| 56 to 65 | 516 | 731 |  |
| 66 or older | 531 | 943 |  |

The ‘>’ “nesting” operator nests multiple variables on a single axis, e.g.: 
    
    
    CTABLES /TABLE likelihoodOfBeingStoppedByPolice BY ageGroup > gender.
    

|  |  |  |  | Yes | No |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | 86. In the past year, have you hosted a social event or party where alcohol was served to adults? |  |
|  |  |  |  | Count | Count |
| Age group | 15 or younger | S3a. GENDER: | Male | 0 | 0 |
| Female | 0 | 0 |  |  |  |
| 16 to 25 | S3a. GENDER: | Male | 208 | 386 |  |
| Female | 202 | 303 |  |  |  |
| 26 to 35 | S3a. GENDER: | Male | 225 | 251 |  |
| Female | 242 | 249 |  |  |  |
| 36 to 45 | S3a. GENDER: | Male | 223 | 266 |  |
| Female | 240 | 307 |  |  |  |
| 46 to 55 | S3a. GENDER: | Male | 201 | 325 |  |
| Female | 282 | 366 |  |  |  |
| 56 to 65 | S3a. GENDER: | Male | 196 | 320 |  |
| Female | 279 | 452 |  |  |  |
| 66 or older | S3a. GENDER: | Male | 162 | 367 |  |
| Female | 243 | 700 |  |  |  |

The ‘+’ “stacking” operator allows a single output table to include multiple data analyses. With ‘+’, `CTABLES` divides the output table into multiple _sections_ , each of which includes an analysis of the full data set. For example, the following command separately tabulates age group and driving frequency by gender: 
    
    
    CTABLES /TABLE ageGroup + freqOfDriving BY gender.
    

|  |  | Male | Female |
| --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |
|  |  | Count | Count |
| Age group | 15 or younger | 0 | 0 |
| 16 to 25 | 594 | 505 |  |
| 26 to 35 | 476 | 491 |  |
| 36 to 45 | 489 | 548 |  |
| 46 to 55 | 526 | 649 |  |
| 56 to 65 | 516 | 731 |  |
| 66 or older | 531 | 943 |  |
| 1. How often do you usually drive a car or other motor vehicle? | Every day | 2305 | 2362 |
| Several days a week | 440 | 834 |  |
| Once a week or less | 125 | 236 |  |
| Only certain times a year | 58 | 72 |  |
| Never | 192 | 348 |  |

When ‘+’ and ‘>’ are used together, ‘>’ binds more tightly. Use parentheses to override operator precedence. Thus: 
    
    
    CTABLES /TABLE hasConsideredReduction + hasBeenCriticized > gender.
    CTABLES /TABLE (hasConsideredReduction + hasBeenCriticized) > gender.
    

|  |  |  |  | Count |
| --- | --- | --- | --- | --- |
| 26. During the last 12 months, has there been a time when you felt you should cut down on your drinking? | Yes | 513 |  |  |
| No | 3710 |  |  |  |
| 27. During the last 12 months, has there been a time when people criticized your drinking? | Yes | S3a. GENDER: | Male | 135 |
| Female | 49 |  |  |  |
| No | S3a. GENDER: | Male | 1916 |  |
| Female | 2126 |  |  |  |
|  |  |  |  | Count |
| 26. During the last 12 months, has there been a time when you felt you should cut down on your drinking? | Yes | S3a. GENDER: | Male | 333 |
| Female | 180 |  |  |  |
| No | S3a. GENDER: | Male | 1719 |  |
| Female | 1991 |  |  |  |
| 27. During the last 12 months, has there been a time when people criticized your drinking? | Yes | S3a. GENDER: | Male | 135 |
| Female | 49 |  |  |  |
| No | S3a. GENDER: | Male | 1916 |  |
| Female | 2126 |  |  |  |
