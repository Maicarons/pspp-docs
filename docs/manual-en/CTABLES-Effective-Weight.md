#### 15.7.11 Effective Weight
    
    
    /WEIGHT VARIABLE=_variable_
    

The `WEIGHT` subcommand is optional and must appear before `TABLE`. If it appears, it must name a numeric variable, known as the _effective weight_ or _adjustment weight_. The effective weight variable stands in for the dictionary’s weight variable (see [WEIGHT](WEIGHT.md)), if any, in most calculations in `CTABLES`. The only exceptions are the `COUNT`, `TOTALN`, and `VALIDN` summary functions, which use the dictionary weight instead. 

Weights obtained from the PSPP dictionary are rounded to the nearest integer at the case level. Effective weights are not rounded. Regardless of the weighting source, PSPP does not analyze cases with zero, missing, or negative effective weights.
