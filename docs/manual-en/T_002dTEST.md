### 15.13 T-TEST
    
    
    T-TEST
            /MISSING={ANALYSIS,LISTWISE} {EXCLUDE,INCLUDE}
            /CRITERIA=CI(confidence)
    
    
    (One Sample mode.)
            TESTVAL=test_value
            /VARIABLES=var_list
    
    
    (Independent Samples mode.)
            GROUPS=var(value1 [, value2])
            /VARIABLES=var_list
    
    
    (Paired Samples mode.)
            PAIRS=var_list [WITH var_list [(PAIRED)] ]
    
    

The `T-TEST` procedure outputs tables used in testing hypotheses about means. It operates in one of three modes: 

  * One Sample mode. 
  * Independent Groups mode. 
  * Paired mode. 

Each of these modes are described in more detail below. There are two optional subcommands which are common to all modes. 

The `/CRITERIA` subcommand tells PSPP the confidence interval used in the tests. The default value is 0.95. 

The `MISSING` subcommand determines the handling of missing variables. If `INCLUDE` is set, then user-missing values are included in the calculations, but system-missing values are not. If `EXCLUDE` is set, which is the default, user-missing values are excluded as well as system-missing values. This is the default. 

If `LISTWISE` is set, then the entire case is excluded from analysis whenever any variable specified in the `/VARIABLES`, `/PAIRS` or `/GROUPS` subcommands contains a missing value. If `ANALYSIS` is set, then missing values are excluded only in the analysis for which they would be needed. This is the default. 

| • One Sample Mode |  | Testing against a hypothesized mean |
| --- | --- | --- |
| • Independent Samples Mode |  | Testing two independent groups for equal mean |
| • Paired Samples Mode |  | Testing two interdependent groups for equal mean |
