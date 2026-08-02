#### 15.7.2.2 Summary Functions for Groups of Cells

These summary functions summarize over multiple cells within an area of the output chosen by the user and specified as part of the function name. The following basic areas are supported, in decreasing order of size: 

`TABLE`
    

A _section_. Stacked variables divide sections of the output from each other. sections may span multiple layers. 

`LAYER`
    

A section within a single layer. 

`SUBTABLE`
    

A _subtable_ , whose contents are the cells that pair an innermost row variable and an innermost column variable within a single layer. 

The following shows how the output for the table expression `hasBeenPassengerOfDesignatedDriver > hasBeenPassengerOfDrunkDriver BY isLicensedDriver > hasHostedEventWithAlcohol + hasBeenDesignatedDriver BY gender`8 is divided up into `TABLE`, `LAYER`, and `SUBTABLE` areas. Each unique value for Table ID is one section, and similarly for Layer ID and Subtable ID. Thus, this output has two `TABLE` areas (one for `isLicensedDriver` and one for `hasBeenDesignatedDriver`), four `LAYER` areas (for those two variables, per layer), and 12 `SUBTABLE` areas. 

|  |  |  |  |  | Yes | No | Yes | No |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Male |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  | licensed | desDrv |  |  |  |  |
|  |  |  |  |  | hostAlc | hostAlc |  |  |  |  |
|  |  |  |  |  | Yes | No | Yes | No |  |  |
| desPas | Yes | druPas | Yes | Table ID | 1 | 1 | 1 | 1 | 2 | 2 |
| Layer ID | 1 | 1 | 1 | 1 | 2 | 2 |  |  |  |  |
| Subtable ID | 1 | 1 | 2 | 2 | 3 | 3 |  |  |  |  |
| No | Table ID | 1 | 1 | 1 | 1 | 2 | 2 |  |  |  |
| Layer ID | 1 | 1 | 1 | 1 | 2 | 2 |  |  |  |  |
| Subtable ID | 1 | 1 | 2 | 2 | 3 | 3 |  |  |  |  |
| No | druPas | Yes | Table ID | 1 | 1 | 1 | 1 | 2 | 2 |  |
| Layer ID | 1 | 1 | 1 | 1 | 2 | 2 |  |  |  |  |
| Subtable ID | 4 | 4 | 5 | 5 | 6 | 6 |  |  |  |  |
| No | Table ID | 1 | 1 | 1 | 1 | 2 | 2 |  |  |  |
| Layer ID | 1 | 1 | 1 | 1 | 2 | 2 |  |  |  |  |
| Subtable ID | 4 | 4 | 5 | 5 | 6 | 6 |  |  |  |  |

`CTABLES` also supports the following areas that further divide a subtable or a layer within a section: 

`LAYERROW`
`LAYERCOL`
    

A row or column, respectively, in one layer of a section. 

`ROW`
`COL`
    

A row or column, respectively, in a subtable. 

The following summary functions for groups of cells are available for each area described above, for both categorical and scale variables: 

`_area_ PCT` or `_area_ PCT.COUNT` (“ _Area_ %”, PCT40.1)
    

A percentage of total counts within area. 

`_area_ PCT.VALIDN` (“ _Area_ Valid N %”, PCT40.1)
    

A percentage of total counts for valid values within area. 

`_area_ PCT.TOTALN` (“ _Area_ Total N %”, PCT40.1)
    

A percentage of total counts for all values within area. 

Scale variables and totals and subtotals for categorical variables may use the following additional group cell summary function: 

`_area_ PCT.SUM` (“ _Area_ Sum %”, PCT40.1)
    

Percentage of the sum of the values within area. 

#### Footnotes

##### (8)

This is not necessarily a meaningful table. To make it easier to read, short variable labels are used.
