#### 16.2.2 Without `ROWTYPE_`

If `VARIABLES` does not contain `ROWTYPE_`, the `CONTENTS` subcommand defines the row types that appear in the file and their order. If `CONTENTS` is omitted, `CONTENTS=CORR` is assumed. 

Factor variables without `ROWTYPE_` introduce special requirements, illustrated below in Examples 8 and 9. 

#### Example 6: Defaults without `ROWTYPE_`

This example shows a simple use of `MATRIX DATA` with 8 variables named `var01` through `var08`, without `ROWTYPE_`. This yields the same matrix file as Example 1 (see [MATRIX DATA Example 1](MATRIX-DATA-with-ROWTYPE_005f.md#MATRIX-DATA-Example-1)). 
    
    
    MATRIX DATA
        VARIABLES=var01 TO var08
       /CONTENTS=MEAN SD N CORR.
    BEGIN DATA.
    24.3   5.4  69.7  20.1  13.4   2.7  27.9   3.7
     5.7   1.5  23.5   5.8   2.8   4.5   5.4   1.5
      92    92    92    92    92    92    92    92
    1.00
     .18  1.00
    -.22  -.17  1.00
     .36   .31  -.14  1.00
     .27   .16  -.12   .22  1.00
     .33   .15  -.17   .24   .21  1.00
     .50   .29  -.20   .32   .12   .38  1.00
     .17   .29  -.05   .20   .27   .20   .04  1.00
    END DATA.
    

#### Example 7: Split variables with explicit values

This syntax defines two matrices, using the variable `s1` to distinguish between them. Each line of data begins with `s1`. This yields the same matrix file as Example 4 (see [MATRIX DATA Example 4](MATRIX-DATA-with-ROWTYPE_005f.md#MATRIX-DATA-Example-4)). 
    
    
    MATRIX DATA
        VARIABLES=s1 var01 TO var04
        /SPLIT=s1
        /FORMAT=FULL
        /CONTENTS=MEAN SD N CORR.
    BEGIN DATA.
    0 34 35 36 37
    0 22 11 55 66
    0 99 98 99 92
    0  1 .9 .8 .7
    0 .9  1 .6 .5
    0 .8 .6  1 .4
    0 .7 .5 .4  1
    1 44 45 34 39
    1 23 15 51 46
    1 98 34 87 23
    1  1 .2 .3 .4
    1 .2  1 .5 .6
    1 .3 .5  1 .7
    1 .4 .6 .7  1
    END DATA.
    

#### Example 8: Split variable with sequential values

Like this previous example, this syntax defines two matrices with split variable `s1`. In this case, though, `s1` is not listed in `VARIABLES`, which means that its value does not appear in the data. Instead, `MATRIX DATA` reads matrix data until the input is exhausted, supplying 1 for the first split, 2 for the second, and so on. 
    
    
    MATRIX DATA
        VARIABLES=var01 TO var04
        /SPLIT=s1
        /FORMAT=FULL
        /CONTENTS=MEAN SD N CORR.
    BEGIN DATA.
    34 35 36 37
    22 11 55 66
    99 98 99 92
     1 .9 .8 .7
    .9  1 .6 .5
    .8 .6  1 .4
    .7 .5 .4  1
    44 45 34 39
    23 15 51 46
    98 34 87 23
     1 .2 .3 .4
    .2  1 .5 .6
    .3 .5  1 .7
    .4 .6 .7  1
    END DATA.
    

#### 16.2.2.1 Factor variables without `ROWTYPE_`

Without `ROWTYPE_`, factor variables introduce two new wrinkles to `MATRIX DATA` syntax. First, the `CELLS` subcommand must declare the number of combinations of factor variables present in the data. If there is, for example, one factor variable for which the data contains three values, one would write `CELLS=3`; if there are two (or more) factor variables for which the data contains five combinations, one would use `CELLS=5`; and so on. 

Second, the `CONTENTS` subcommand must distinguish within-cell data from pooled data by enclosing within-cell row types in parentheses. When different within-cell row types for a single factor appear in subsequent lines, enclose the row types in a single set of parentheses; when different factors’ values for a given within-cell row type appear in subsequent lines, enclose each row type in individual parentheses. 

Without `ROWTYPE_`, input lines for pooled data do not include factor values, not even as missing values, but input lines for within-cell data do. 

The following examples aim to clarify this syntax. 

#### Example 9: Factor variables, grouping within-cell records by factor

This syntax defines the same matrix file as Example 5 (see [MATRIX DATA Example 5](MATRIX-DATA-with-ROWTYPE_005f.md#MATRIX-DATA-Example-5)), without using `ROWTYPE_`. It declares `CELLS=2` because the data contains two values (0 and 1) for factor variable `f1`. Within-cell vector row types `MEAN`, `SD`, and `N` are in a single set of parentheses on `CONTENTS` because they are grouped together in subsequent lines for a single factor value. The data lines with the pooled correlation matrix do not have any factor values. 
    
    
    MATRIX DATA
        VARIABLES=f1 var01 TO var04
        /FACTOR=f1
        /CELLS=2
        /CONTENTS=(MEAN SD N) CORR.
    BEGIN DATA.
    0 34 35 36 37
    0 22 11 55 66
    0 99 98 99 92
    1 44 45 34 39
    1 23 15 51 46
    1 98 34 87 23
       1
      .9  1
      .8 .6  1
      .7 .5 .4  1
    END DATA.
    

#### Example 10: Factor variables, grouping within-cell records by row type

This syntax defines the same matrix file as the previous example. The only difference is that the within-cell vector rows are grouped differently: two rows of means (one for each factor), followed by two rows of standard deviations, followed by two rows of counts. 
    
    
    MATRIX DATA
        VARIABLES=f1 var01 TO var04
        /FACTOR=f1
        /CELLS=2
        /CONTENTS=(MEAN) (SD) (N) CORR.
    BEGIN DATA.
    0 34 35 36 37
    1 44 45 34 39
    0 22 11 55 66
    1 23 15 51 46
    0 99 98 99 92
    1 98 34 87 23
       1
      .9  1
      .8 .6  1
      .7 .5 .4  1
    END DATA.
