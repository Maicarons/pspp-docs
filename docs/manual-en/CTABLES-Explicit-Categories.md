#### 15.7.5.1 Explicit Categories

To use `CTABLES` to explicitly specify categories to include, list the categories within square brackets in the desired sort order. Use spaces or commas to separate values. Categories not covered by the list are excluded from analysis. 

Each element of the list takes one of the following forms: 

`_number_`
`'_string_ '`
    

A numeric or string category value, for variables that have the corresponding type. 

`'_date_ '`
`'_time_ '`
    

A date or time category value, for variables that have a date or time print format. 

`_min_ THRU _max_`
`LO THRU _max_`
`_min_ THRU HI`
    

A range of category values, where min and max each takes one of the forms above, in increasing order. 

`MISSING`
    

All user-missing values. (To match individual user-missing values, specify their category values.) 

`OTHERNM`
    

Any non-missing value not covered by any other element of the list (regardless of where `OTHERNM` is placed in the list). 

`&_postcompute_`
    

A computed category name (see [CTABLES Computed Categories](CTABLES-Computed-Categories.md)). 

`SUBTOTAL`
`HSUBTOTAL`
    

A subtotal (see [CTABLES Totals and Subtotals](CTABLES-Totals-and-Subtotals.md)). 

If multiple elements of the list cover a given category, the last one in the list takes precedence. 

The following example syntax and output show how an explicit category can limit the displayed categories: 
    
    
    CTABLES /TABLE freqOfDriving.
    CTABLES /TABLE freqOfDriving /CATEGORIES VARIABLES=freqOfDriving [1, 2, 3].
    

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
