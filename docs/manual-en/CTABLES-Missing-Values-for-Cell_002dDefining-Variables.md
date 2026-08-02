#### 15.7.9.1 Missing Values for Cell-Defining Variables

For variables that divide tables into cells, per-variable category options, as described in [CTABLES Per-Variable Category Options](CTABLES-Per_002dVariable-Category-Options.md), determine which data is analyzed. If any of the categories for such a variable would exclude a case, then that case is not included. 

As an example, consider the following entirely artificial dataset, in which ‘x’ and ‘y’ are categorical variables with missing value 9, and ‘z’ is scale: 

| x | y | z |
| --- | --- | --- |
| 1 | 1 | 1 |
| 1 | 2 | 10 |
| 1 | 9 | 100 |
| 2 | 1 | 1000 |
| 2 | 2 | 10000 |
| 2 | 9 | 100000 |
| 9 | 1 | 1000000 |
| 9 | 2 | 10000000 |
| 9 | 9 | 100000000 |

Using ‘x’ and ‘y’ to define cells, and summarizing ‘z’, by default PSPP omits all the cases that have ‘x’ or ‘y’ (or both) missing: 
    
    
    CTABLES /TABLE x > y > z [SUM].
    

|  |  |  |  |  | Sum |
| --- | --- | --- | --- | --- | --- |
| x | 1 | y | 1 | z | 1 |
| 2 | z | 10 |  |  |  |
| 2 | y | 1 | z | 1000 |  |
| 2 | z | 10000 |  |  |  |

If, however, we add `CATEGORIES` specifications to include missing values for ‘y’ or for ‘x’ and ‘y’, the output table includes them, like so: 
    
    
    CTABLES /TABLE x > y > z [SUM] /CATEGORIES VARIABLES=y MISSING=INCLUDE.
    CTABLES /TABLE x > y > z [SUM] /CATEGORIES VARIABLES=x y MISSING=INCLUDE.
    

|  |  |  |  |  | Sum |
| --- | --- | --- | --- | --- | --- |
| x | 1 | y | 1 | z | 1 |
| 2 | z | 10 |  |  |  |
| 9 | z | 100 |  |  |  |
| 2 | y | 1 | z | 1000 |  |
| 2 | z | 10000 |  |  |  |
| 9 | z | 100000 |  |  |  |
|  |  |  |  |  | Sum |
| x | 1 | y | 1 | z | 1 |
| 2 | z | 10 |  |  |  |
| 9 | z | 100 |  |  |  |
| 2 | y | 1 | z | 1000 |  |
| 2 | z | 10000 |  |  |  |
| 9 | z | 100000 |  |  |  |
| 9 | y | 1 | z | 1000000 |  |
| 2 | z | 10000000 |  |  |  |
| 9 | z | 100000000 |  |  |  |
