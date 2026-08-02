#### 15.7.5.3 Totals and Subtotals

`CATEGORIES` also controls display of totals and subtotals. By default, or with `TOTAL=NO`, totals are not displayed. Use `TOTAL=YES` to display a total. By default, the total is labeled “Total”; use `LABEL="_label_ "` to override it. 

Subtotals are also not displayed by default. To add one or more subtotals, use an explicit category list and insert `SUBTOTAL` or `HSUBTOTAL` in the position or positions where the subtotal should appear. The subtotal becomes an extra row or column or layer. `HSUBTOTAL` additionally hides the categories that make up the subtotal. Either way, the default label is “Subtotal”, use `SUBTOTAL="_label_ "` or `HSUBTOTAL="_label_ "` to specify a custom label. 

The following example syntax and output show how to use `TOTAL=YES` and `SUBTOTAL`: 
    
    
    CTABLES
        /TABLE freqOfDriving
        /CATEGORIES VARIABLES=freqOfDriving [OTHERNM, SUBTOTAL='Valid Total',
                                             MISSING, SUBTOTAL='Missing Total']
                                            TOTAL=YES LABEL='Overall Total'.
    

|  |  | Count |
| --- | --- | --- |
| 1. How often do you usually drive a car or other motor vehicle? | Every day | 4667 |
| Several days a week | 1274 |  |
| Once a week or less | 361 |  |
| Only certain times a year | 130 |  |
| Never | 540 |  |
| Valid Total | 6972 |  |
| Don't know | 8 |  |
| Refused | 19 |  |
| Missing Total | 27 |  |
| Overall Total | 6999 |  |

By default, or with `POSITION=AFTER`, totals are displayed in the output after the last category and subtotals apply to categories that precede them. With `POSITION=BEFORE`, totals come before the first category and subtotals apply to categories that follow them. 

Only categorical variables may have totals and subtotals. Scalar variables may be “totaled” indirectly by enabling totals and subtotals on a categorical variable within which the scalar variable is summarized. For example, the following syntax produces a mean, count, and valid count across all data by adding a total on the categorical `region` variable, as shown: 
    
    
    CTABLES /TABLE=region > monthDaysMin1drink [MEAN, VALIDN]
        /CATEGORIES VARIABLES=region TOTAL=YES LABEL='All regions'.
    

|  |  |  | Mean | Count | Valid N |
| --- | --- | --- | --- | --- | --- |
| 20. On how many of the thirty days in this typical month did you have one or more alcoholic beverages to drink? | Region | NE | 5.6 | 1409 | 945 |
| MW | 5.0 | 1654 | 1026 |  |  |
| S | 6.0 | 2390 | 1285 |  |  |
| W | 6.5 | 1546 | 953 |  |  |
| All regions | 5.8 | 6999 | 4209 |  |  |

By default, PSPP uses the same summary functions for totals and subtotals as other categories. To summarize totals and subtotals differently, specify the summary functions for totals and subtotals after the ordinary summary functions inside a nested set of `[]` following `TOTALS`. For example, the following syntax displays `COUNT` for individual categories and totals and `VALIDN` for totals, as shown: 
    
    
    CTABLES
        /TABLE isLicensedDriver [COUNT, TOTALS[COUNT, VALIDN]]
        /CATEGORIES VARIABLES=isLicensedDriver TOTAL=YES MISSING=INCLUDE.
    

|  |  | Count | Valid N |
| --- | --- | --- | --- |
| D7a. Are you a licensed driver; that is, do you have a valid driver's license? | Yes | 6379 |  |
| No | 572 |  |  |
| Don't know | 4 |  |  |
| Refused | 44 |  |  |
| Total | 6999 | 6951 |  |
