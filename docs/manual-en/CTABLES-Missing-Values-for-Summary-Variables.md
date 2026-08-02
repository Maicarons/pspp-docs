#### 15.7.9.2 Missing Values for Summary Variables

For summary variables, values that are valid and in included categories are analyzed, and values that are missing or in excluded categories are not analyzed, with the following exceptions: 

  * The “`VALIDN`” summary functions (`VALIDN`, `EVALIDN`, `UVALIDN`, `_area_ PCT.VALIDN`, and `U _area_ PCT.VALIDN`) only count valid values in included categories (not missing values in included categories). 
  * The “`TOTALN`” summary functions (`TOTALN`, `ETOTALN`, `UTOTALN`, `_area_ PCT.TOTALN`), and `U _area_ PCT.TOTALN` count all values (valid and missing) in included categories and missing (but not valid) values in excluded categories. 

For categorical variables, system-missing values are never in included categories. For scale variables, there is no notion of included and excluded categories, so all values are effectively included. 

The following table provides another view of the above rules: 

|  | VALIDN | other | TOTALN |
| --- | --- | --- | --- |
| Categorical variables: |  |  |  |
| Valid values in included categories | yes | yes | yes |
| Missing values in included categories | — | yes | yes |
| Missing values in excluded categories | — | — | yes |
| Valid values in excluded categories | — | — | — |
| Scale variables: |  |  |  |
| Valid values | yes | yes | yes |
| User- or system-missing values | — | yes | yes |
