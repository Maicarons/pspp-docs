#### 15.7.10.1 PCOMPUTE
    
    
    /PCOMPUTE &_postcompute_ =EXPR(_expression_)
    

The `PCOMPUTE` subcommand, which must precede the first `TABLE` command, defines computed categories. It is optional and may be used any number of times to define multiple postcomputes. 

Each `PCOMPUTE` defines one postcompute. Its syntax consists of a name to identify the postcompute as a PSPP identifier prefixed by ‘&’, followed by ‘=’ and a postcompute expression enclosed in `EXPR(…)`. A postcompute expression consists of: 

`[_category_]`
    

This form evaluates to the summary statistic for _category_ , e.g. `[1]` evaluates to the value of the summary statistic associated with category 1. The _category_ may be a number, a quoted string, or a quoted time or date value. All of the categories for a given postcompute must have the same form. The category must appear in all the `CATEGORIES` list in which the postcompute is used. 

`[_min_ THRU _max_]`
`[LO THRU _max_]`
`[_min_ THRU HI]`
`MISSING`
`OTHERNM`
    

These forms evaluate to the summary statistics for a category specified with the same syntax, as described in previous section (see [CTABLES Explicit Category List](CTABLES-Explicit-Categories.md#CTABLES-Explicit-Category-List)). The category must appear in all the `CATEGORIES` list in which the postcompute is used. 

`SUBTOTAL`
    

The summary statistic for the subtotal category. This form is allowed only if the `CATEGORIES` lists that include this postcompute have exactly one subtotal. 

`SUBTOTAL[_index_]`
    

The summary statistic for subtotal category _index_ , where 1 is the first subtotal, 2 is the second, and so on. This form may be used for `CATEGORIES` lists with any number of subtotals. 

`TOTAL`
    

The summary statistic for the total. The `CATEGORIES` lsits that include this postcompute must have a total enabled. 

`_a_ + _b_`
`_a_ - _b_`
`_a_ * _b_`
`_a_ / _b_`
`_a_ ** _b_`
    

These forms perform arithmetic on the values of postcompute expressions _a_ and _b_. The usual operator precedence rules apply. 

`_number_`
    

Numeric constants may be used in postcompute expressions. 

`(_a_)`
    

Parentheses override operator precedence. 

A postcompute is not associated with any particular variable. Instead, it may be referenced within `CATEGORIES` for any suitable variable (e.g. only a string variable is suitable for a postcompute expression that refers to a string category, only a variable with subtotals for an expression that refers to subtotals, …). 

Normally a named postcompute is defined only once, but if a later `PCOMPUTE` redefines a postcompute with the same name as an earlier one, the later one take precedence. 

The following syntax and output shows how `PCOMPUTE` can compute a total over subtotals, summing the “Frequent Drivers” and “Infrequent Drivers” subtotals to form an “All Drivers” postcompute. It also shows how to calculate and display a percentage, in this case the percentage of valid responses that report never driving. It uses `PPROPERTIES` (see [CTABLES PPROPERTIES](CTABLES-PPROPERTIES.md)) to display the latter in `PCT` format. 
    
    
    CTABLES
        /PCOMPUTE &all_drivers=EXPR([1 THRU 2] + [3 THRU 4])
        /PPROPERTIES &all_drivers LABEL='All Drivers'
        /PCOMPUTE &pct_never=EXPR([5] / ([1 THRU 2] + [3 THRU 4] + [5]) * 100)
        /PPROPERTIES &pct_never LABEL='% Not Drivers' FORMAT=COUNT PCT40.1
        /TABLE=freqOfDriving BY gender
        /CATEGORIES VARIABLES=freqOfDriving
                                 [1 THRU 2, SUBTOTAL='Frequent Drivers',
                                  3 THRU 4, SUBTOTAL='Infrequent Drivers',
                                  &all_drivers, 5, &pct_never,
                                  MISSING, SUBTOTAL='Not Drivers or Missing'].
    

|  |  | Male | Female |
| --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |
|  |  | Count | Count |
| 1. How often do you usually drive a car or other motor vehicle? | Every day | 2305 | 2362 |
| Several days a week | 440 | 834 |  |
| Frequent Drivers | 2745 | 3196 |  |
| Once a week or less | 125 | 236 |  |
| Only certain times a year | 58 | 72 |  |
| Infrequent Drivers | 183 | 308 |  |
| All Drivers | 2928 | 3504 |  |
| Never | 192 | 348 |  |
| % Not Drivers | 6.2% | 9.0% |  |
| Don't know | 3 | 5 |  |
| Refused | 9 | 10 |  |
| Not Drivers or Missing | 204 | 363 |  |
