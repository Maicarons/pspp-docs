### 15.12 NPAR TESTS
    
    
    NPAR TESTS
    
         nonparametric test subcommands
         .
         .
         .
    
         [ /STATISTICS={DESCRIPTIVES} ]
    
         [ /MISSING={ANALYSIS, LISTWISE} {INCLUDE, EXCLUDE} ]
    
         [ /METHOD=EXACT [ TIMER [(n)] ] ]
    

`NPAR TESTS` performs nonparametric tests. Non parametric tests make very few assumptions about the distribution of the data. One or more tests may be specified by using the corresponding subcommand. If the `/STATISTICS` subcommand is also specified, then summary statistics are produces for each variable that is the subject of any test. 

Certain tests may take a long time to execute, if an exact figure is required. Therefore, by default asymptotic approximations are used unless the subcommand `/METHOD=EXACT` is specified. Exact tests give more accurate results, but may take an unacceptably long time to perform. If the `TIMER` keyword is used, it sets a maximum time, after which the test is abandoned, and a warning message printed. The time, in minutes, should be specified in parentheses after the `TIMER` keyword. If the `TIMER` keyword is given without this figure, then a default value of 5 minutes is used. 

| • BINOMIAL |  | Binomial Test |
| --- | --- | --- |
| • CHISQUARE |  | Chi-square Test |
| • COCHRAN |  | Cochran Q Test |
| • FRIEDMAN |  | Friedman Test |
| • KENDALL |  | Kendall’s W Test |
| • KOLMOGOROV-SMIRNOV |  | Kolmogorov Smirnov Test |
| • KRUSKAL-WALLIS |  | Kruskal-Wallis Test |
| • MANN-WHITNEY |  | Mann Whitney U Test |
| • MCNEMAR |  | McNemar Test |
| • MEDIAN |  | Median Test |
| • RUNS |  | Runs Test |
| • SIGN |  | The Sign Test |
| • WILCOXON |  | Wilcoxon Signed Ranks Test |
