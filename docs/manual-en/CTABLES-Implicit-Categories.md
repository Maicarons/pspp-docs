#### 15.7.5.2 Implicit Categories

In the absence of an explicit list of categories, `CATEGORIES` allows `KEY`, `ORDER`, and `MISSING` to specify how to select and sort categories. 

The `KEY` setting specifies the sort key. By default, or with `KEY=VALUE`, categories are sorted by default. Categories may also be sorted by value label, with `KEY=LABEL`, or by the value of a summary function, e.g. `KEY=COUNT`. 

By default, or with `ORDER=A`, categories are sorted in ascending order. Specify `ORDER=D` to sort in descending order. 

User-missing values are excluded by default, or with `MISSING=EXCLUDE`. Specify `MISSING=INCLUDE` to include user-missing values. The system-missing value is always excluded. 

The following example syntax and output show how `MISSING=INCLUDE` causes missing values to be included in a category list. 
    
    
    CTABLES /TABLE freqOfDriving.
    CTABLES /TABLE freqOfDriving
            /CATEGORIES VARIABLES=freqOfDriving MISSING=INCLUDE.
    

|  |  | Count |
| --- | --- | --- |
| 1. How often do you usually drive a car or other motor vehicle? | Every day | 4667 |
| Several days a week | 1274 |  |
| Once a week or less | 361 |  |
| Only certain times a year | 130 |  |
| Never | 540 |  |
|  |  | Count |
| 1. How often do you usually drive a car or other motor vehicle? | Every day | 4667 |
| Several days a week | 1274 |  |
| Once a week or less | 361 |  |
| Only certain times a year | 130 |  |
| Never | 540 |  |
| Don't know | 8 |  |
| Refused | 19 |  |
