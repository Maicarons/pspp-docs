### 13.4 SELECT IF
    
    
    SELECT IF expression.
    

`SELECT IF` selects cases for analysis based on the value of expression. Cases not selected are permanently eliminated from the active dataset, unless `TEMPORARY` is in effect (see [TEMPORARY](TEMPORARY.md)). 

Specify a boolean expression (see [Expressions](Expressions.md)). If the value of the expression is true for a particular case, the case is analyzed. If the expression has a false or missing value, then the case is deleted from the data stream. 

Place `SELECT IF` as early in the command file as possible. Cases that are deleted early can be processed more efficiently in time and space. Once cases have been deleted from the active dataset using `SELECT IF` they cannot be re-instated. If you want to be able to re-instate cases, then use `FILTER` (see [FILTER](FILTER.md)) instead. 

When `SELECT IF` is specified following `TEMPORARY` (see [TEMPORARY](TEMPORARY.md)), the `LAG` function may not be used (see [LAG](Miscellaneous-Functions.md#LAG)). 

#### 13.4.1 Example Select-If

A shop steward is interested in the salaries of younger personnel in a firm. The file personnel.sav provides the salaries of all the workers and their dates of birth. The syntax in Example 13.1 shows how `SELECT IF` can be used to limit analysis only to those persons born after December 31, 1999. 

```
get file = 'personnel.sav'.  echo 'Salaries of all personnel'. descriptives salary.  echo 'Salaries of personnel born after December 31 1999'. select if dob > date.dmy (31,12,1999). descriptives salary.
```

**Example 13.1:** Using `SELECT IF` to select persons born on or after a certain date.

From Result 13.1 one can see that there are 56 persons listed in the dataset, and 17 of them were born after December 31, 1999. 

|  | N | Mean | Std Dev | Minimum | Maximum |
| --- | --- | --- | --- | --- | --- |
| Annual salary before tax | 56 | 40028.97 | 8721.17 | $23,451 | $57,044 |
| Valid N (listwise) | 56 |  |  |  |  |
| Missing N (listwise) | 0 |  |  |  |  |
|  | N | Mean | Std Dev | Minimum | Maximum |
| Annual salary before tax | 17 | 31828.59 | 4454.80 | $23,451 | $39,504 |
| Valid N (listwise) | 17 |  |  |  |  |
| Missing N (listwise) | 0 |  |  |  |  |

**Result 13.1:** Salary descriptives before and after the `SELECT IF` transformation.

Note that the personnel.sav file from which the data were read is unaffected. The transformation affects only the active file.
