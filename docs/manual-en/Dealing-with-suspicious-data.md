#### 5.2.2 Dealing with suspicious data

If possible, suspect data should be checked and re-measured. However, this may not always be feasible, in which case the researcher may decide to disregard these values. PSPP has a feature whereby data can assume the special value ‘SYSMIS’, and will be disregarded in future analysis. See [Missing Observations](Missing-Observations.md). You can set the two suspect values to the ‘SYSMIS’ value using the `RECODE` command. 
    
    
    PSPP> recode height (179 = SYSMIS).
    PSPP> recode weight (LOWEST THRU 0 = SYSMIS).
    

The first command says that for any observation which has a **height** value of 179, that value should be changed to the SYSMIS value. The second command says that any **weight** values of zero or less should be changed to SYSMIS. From now on, they will be ignored in analysis. For detailed information about the `RECODE` command see [RECODE](RECODE.md). 

If you now re-run the `DESCRIPTIVES` or `EXAMINE` commands from the previous section, you will see a data summary with more plausible parameters. You will also notice that the data summaries indicate the two missing values.
