#### 15.7.2.3 Summary Functions for Adjusted Weights

If the `WEIGHT` subcommand specified an effective weight variable (see [CTABLES Effective Weight](CTABLES-Effective-Weight.md)), then the following summary functions use its value instead of the dictionary weight variable. Otherwise, they are equivalent to the summary function without the ‘E’-prefix: 

  * `ECOUNT` (“Adjusted Count”, F40.0) 
  * `ETOTALN` (“Adjusted Total N”, F40.0) 
  * `EVALIDN` (“Adjusted Valid N”, F40.0)
