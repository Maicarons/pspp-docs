#### 15.7.1.3 Overriding Measurement Level

By default, `CTABLES` uses a variable’s measurement level to decide whether to treat it as categorical or scalar. Variables assigned the nominal or ordinal measurement level are treated as categorical, and scalar variables are treated as scalar. 

When PSPP reads data from a file in an external format, such as a text file, variables’ measurement levels are often unknown. If `CTABLES` runs when a variable has an unknown measurement level, it makes an initial pass through the data to guess measurement levels using the rules described in an earlier section (see [Measurement Level](Attributes.md#Measurement-Level)). Use the `VARIABLE LEVEL` command to set or change a variable’s measurement level (see [VARIABLE LEVEL](VARIABLE-LEVEL.md)). 

To treat a variable as categorical or scalar only for one use on `CTABLES`, add ‘[C]’ or ‘[S]’, respectively, after the variable name. The following example shows the output when variable `monthDaysMin1drink` is analyzed as scalar (the default for its measurement level) and as categorical: 
    
    
    CTABLES
        /TABLE monthDaysMin1drink BY gender
        /TABLE monthDaysMin1drink [C] BY gender.
    

|  |  | Male | Female |
| --- | --- | --- | --- |
|  | S3a. GENDER: |  |  |
|  | Male | Female |  |
|  | Mean | Mean |  |
| 20. On how many of the thirty days in this typical month did you have one or more alcoholic beverages to drink? | 7 | 5 |  |
|  |  | S3a. GENDER: |  |
|  |  | Count | Count |
| 20. On how many of the thirty days in this typical month did you have one or more alcoholic beverages to drink? | None | 152 | 258 |
| 1 | 403 | 653 |  |
| 2 | 284 | 324 |  |
| 3 | 169 | 215 |  |
| 4 | 178 | 143 |  |
| 5 | 107 | 106 |  |
| 6 | 67 | 59 |  |
| 7 | 31 | 11 |  |
| 8 | 101 | 74 |  |
| 9 | 6 | 4 |  |
| 10 | 95 | 75 |  |
| 11 | 4 | 0 |  |
| 12 | 58 | 33 |  |
| 13 | 3 | 2 |  |
| 14 | 13 | 3 |  |
| 15 | 79 | 58 |  |
| 16 | 10 | 6 |  |
| 17 | 4 | 2 |  |
| 18 | 5 | 4 |  |
| 19 | 2 | 0 |  |
| 20 | 105 | 47 |  |
| 21 | 2 | 0 |  |
| 22 | 3 | 3 |  |
| 23 | 0 | 3 |  |
| 24 | 3 | 0 |  |
| 25 | 35 | 25 |  |
| 26 | 1 | 1 |  |
| 27 | 3 | 3 |  |
| 28 | 13 | 8 |  |
| 29 | 3 | 3 |  |
| Every day | 104 | 43 |  |
