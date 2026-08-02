#### 15.4.3 Bar Chart

The subcommand `BAR` produces a bar chart. This subcommand requires that a count-function be specified (with no arguments) or a summary-function with a variable var1 in parentheses. Following the summary or count function, the keyword `BY` should be specified and then a catagorical variable, var2. The values of the variable var2 determine the labels of the bars to be plotted. Optionally a second categorical variable var3 may be specified in which case a clustered (grouped) bar chart is produced. 

Valid count functions are 

`COUNT`
    

The weighted counts of the cases in each category. 

`PCT`
    

The weighted counts of the cases in each category expressed as a percentage of the total weights of the cases. 

`CUFREQ`
    

The cumulative weighted counts of the cases in each category. 

`CUPCT`
    

The cumulative weighted counts of the cases in each category expressed as a percentage of the total weights of the cases. 

The summary function is applied to var1 across all cases in each category. The recognised summary functions are: 

`SUM`
    

The sum. 

`MEAN`
    

The arithmetic mean. 

`MAXIMUM`
    

The maximum value. 

`MINIMUM`
    

The minimum value. 

The following examples assume a dataset which is the results of a survey. Each respondent has indicated annual income, their sex and city of residence. One could create a bar chart showing how the mean income varies between of residents of different cities, thus: 
    
    
    GRAPH  /BAR  = MEAN(income) BY city.
    

This can be extended to also indicate how income in each city differs between the sexes. 
    
    
    GRAPH  /BAR  = MEAN(income) BY city BY sex.
    

One might also want to see how many respondents there are from each city. This can be achieved as follows: 
    
    
    GRAPH  /BAR  = COUNT BY city.
    

Bar charts can also be produced using the [FREQUENCIES](FREQUENCIES.md) and [CROSSTABS](CROSSTABS.md) commands.
