#### 5.1.2 Listing the data

Once the data has been entered, you could type 
    
    
    PSPP> list /format=numbered.
    

to list the data. The optional text ‘/format=numbered’ requests the case numbers to be shown along with the data. It should show the following output: 

| Case Number | forename | height |
| --- | --- | --- |
| 1 | Ahmed | 188.00 |
| 2 | Bertram | 167.00 |
| 3 | Catherine | 134.23 |
| 4 | David | 109.10 |

Note that the numeric variable **height** is displayed to 2 decimal places, because the format for that variable is ‘F8.2’. For a complete description of the `LIST` command, see [LIST](LIST.md).
