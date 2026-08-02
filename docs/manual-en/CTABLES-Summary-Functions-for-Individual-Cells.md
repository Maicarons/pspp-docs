#### 15.7.2.1 Summary Functions for Individual Cells

This section lists the summary functions that consider only an individual cell in `CTABLES`. Only one such summary function, `COUNT`, may be applied to both categorical and scale variables: 

`COUNT` (“Count”, F40.0)
    

The sum of weights in a cell. 

If `CATEGORIES` for one or more of the variables in a table include missing values (see [CTABLES Per-Variable Category Options](CTABLES-Per_002dVariable-Category-Options.md)), then some or all of the categories for a cell might be missing values. `COUNT` counts data included in a cell regardless of whether its categories are missing. 

The following summary functions apply only to scale variables or totals and subtotals for categorical variables. Be cautious about interpreting the summary value in the latter case, because it is not necessarily meaningful; however, the mean of a Likert scale, etc. may have a straightforward interpreation. 

`MAXIMUM` (“Maximum”)
    

The largest value. 

`MEAN` (“Mean”)
    

The mean. 

`MEDIAN` (“Median”)
    

The median value. 

`MINIMUM` (“Minimum”)
    

The smallest value. 

`MISSING` (“Missing”)
    

Sum of weights of user- and system-missing values. 

`MODE` (“Mode”)
    

The highest-frequency value. Ties are broken by taking the smallest mode. 

`PTILE` _n_ (“Percentile _n_ ”)
    

The nth percentile, where _0 ≤ n ≤ 100_. 

`RANGE` (“Range”)
    

The maximum minus the minimum. 

`SEMEAN` (“Std Error of Mean”)
    

The standard error of the mean. 

`STDDEV` (“Std Deviation”)
    

The standard deviation. 

`SUM` (“Sum”)
    

The sum. 

`TOTALN` (“Total N”, F40.0)
    

The sum of weights in a cell. 

For scale data, `COUNT` and `TOTALN` are the same. 

For categorical data, `TOTALN` counts missing values in excluded categories, that is, user-missing values not in an explicit category list on `CATEGORIES` (see [CTABLES Per-Variable Category Options](CTABLES-Per_002dVariable-Category-Options.md)), or user-missing values excluded because `MISSING=EXCLUDE` is in effect on `CATEGORIES`, or system-missing values. `COUNT` does not count these. 

See [CTABLES Missing Values for Summary Variables](CTABLES-Missing-Values-for-Summary-Variables.md), for details of how `CTABLES` summarizes missing values. 

`VALIDN` (“Valid N”, F40.0)
    

The sum of valid count weights in included categories. 

For categorical variables, `VALIDN` does not count missing values regardless of whether they are in included categories via `CATEGORIES`. `VALIDN` does not count valid values that are in excluded categories. See [CTABLES Missing Values for Summary Variables](CTABLES-Missing-Values-for-Summary-Variables.md), for details. 

`VARIANCE` (“Variance”)
    

The variance.
