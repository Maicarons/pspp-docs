#### 15.7.5.4 Categories Without Values

Some categories might not be included in the data set being analyzed. For example, our example data set has no cases in the “15 or younger” age group. By default, or with `EMPTY=INCLUDE`, PSPP includes these empty categories in output tables. To exclude them, specify `EMPTY=EXCLUDE`. 

For implicit categories, empty categories potentially include all the values with value labels for a given variable; for explicit categories, they include all the values listed individually and all values with value labels that are covered by ranges or `MISSING` or `OTHERNM`. 

The following example syntax and output show the effect of `EMPTY=EXCLUDE` for the `membersOver16` variable, in which 0 is labeled “None” but no cases exist with that value: 
    
    
    CTABLES /TABLE=membersOver16.
    CTABLES /TABLE=membersOver16 /CATEGORIES VARIABLES=membersOver16 EMPTY=EXCLUDE.
    

|  |  | Count |
| --- | --- | --- |
| S1. Including yourself, how many members of this household are age 16 or older? | None | 0 |
| 1 | 1586 |  |
| 2 | 3031 |  |
| 3 | 505 |  |
| 4 | 194 |  |
| 5 | 55 |  |
| 6 or more | 21 |  |
|  |  | Count |
| S1. Including yourself, how many members of this household are age 16 or older? | 1 | 1586 |
| 2 | 3031 |  |
| 3 | 505 |  |
| 4 | 194 |  |
| 5 | 55 |  |
| 6 or more | 21 |  |
