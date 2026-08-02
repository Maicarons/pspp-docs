#### 15.7.5 Per-Variable Category Options
    
    
    /CATEGORIES VARIABLES=_variables_
        {[_value_ , _value_ …]
       _|_ [ORDER={A _|_ D}]
         [KEY={VALUE _|_ LABEL _|_ _summary_(_variable_)}]
         [MISSING={EXCLUDE _|_ INCLUDE}]}
        [TOTAL={NO _|_ YES} [LABEL=_string_] [POSITION={AFTER _|_ BEFORE}]]
        [EMPTY={INCLUDE _|_ EXCLUDE}]
    

The `CATEGORIES` subcommand specifies, for one or more categorical variables, the categories to include and exclude, the sort order for included categories, and treatment of missing values. It also controls the totals and subtotals to display. It may be specified any number of times, each time for a different set of variables. `CATEGORIES` applies to the table produced by the `TABLE` subcommand that it follows. 

`CATEGORIES` does not apply to scalar variables. 

`VARIABLES` is required and must list the variables for the subcommand to affect. 

The syntax may specify the categories to include and their sort order either explicitly or implicitly. The following sections give the details of each form of syntax, followed by information on totals and subtotals and the `EMPTY` setting. 

| • Explicit Categories |  |  |
| --- | --- | --- |
| • Implicit Categories |  |  |
| • Totals and Subtotals |  |  |
| • Categories Without Values |  |  |
