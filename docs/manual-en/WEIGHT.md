### 13.7 WEIGHT
    
    
    WEIGHT BY var_name.
    WEIGHT OFF.
    

`WEIGHT` assigns cases varying weights, changing the frequency distribution of the active dataset. Execution of `WEIGHT` is delayed until data have been read. 

If a variable name is specified, `WEIGHT` causes the values of that variable to be used as weighting factors for subsequent statistical procedures. Use of keyword `BY` is optional but recommended. Weighting variables must be numeric. Scratch variables may not be used for weighting (see [Scratch Variables](Scratch-Variables.md)). 

When `OFF` is specified, subsequent statistical procedures weight all cases equally. 

A positive integer weighting factor w on a case yields the same statistical output as would replicating the case w times. A weighting factor of 0 is treated for statistical purposes as if the case did not exist in the input. Weighting values need not be integers, but negative and system-missing values for the weighting variable are interpreted as weighting factors of 0. User-missing values are not treated specially. 

When `WEIGHT` is specified after `TEMPORARY`, it affects only the next procedure (see [TEMPORARY](TEMPORARY.md)). 

`WEIGHT` does not cause cases in the active dataset to be replicated in memory. 

#### 13.7.1 Example Weights

One could define a dataset containing an inventory of stock items. It would be reasonable to use a string variable for a description of the item, and a numeric variable for the number in stock, like in Example 13.5. 

```
data list notable list /item (a16) quantity (f8.0). begin   data nuts    345 screws  10034 washers 32012 bolts   876 end data.  echo 'Unweighted frequency table'. frequencies /variables = item /format=dfreq.  weight by quantity.  echo 'Weighted frequency table'. frequencies /variables = item /format=dfreq.
```

**Example 13.5:** Setting the weight on the variable **quantity**

One analysis which most surely would be of interest is the relative amounts or each item in stock. However without setting a weight variable, `FREQUENCIES` (see [FREQUENCIES](FREQUENCIES.md)) does not tell us what we want to know, since there is only one case for each stock item. Example 13.6 shows the difference between the weighted and unweighted frequency tables. 

|  |  | Frequency | Percent | Valid Percent | Cumulative Percent |
| --- | --- | --- | --- | --- | --- |
| Valid | bolts | 1 | 25.0% | 25.0% | 25.0% |
| nuts | 1 | 25.0% | 25.0% | 50.0% |  |
| screws | 1 | 25.0% | 25.0% | 75.0% |  |
| washers | 1 | 25.0% | 25.0% | 100.0% |  |
| Total | 4 | 100.0% |  |  |  |
|  |  | Frequency | Percent | Valid Percent | Cumulative Percent |
| Valid | washers | 32012 | 74.0% | 74.0% | 74.0% |
| screws | 10034 | 23.2% | 23.2% | 97.2% |  |
| bolts | 876 | 2.0% | 2.0% | 99.2% |  |
| nuts | 345 | .8% | .8% | 100.0% |  |
| Total | 43267 | 100.0% |  |  |  |

**Example 13.6:** Weighted and unweighted frequency tables of **items**
