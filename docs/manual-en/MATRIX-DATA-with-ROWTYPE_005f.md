#### 16.2.1 With `ROWTYPE_`

If `VARIABLES` includes `ROWTYPE_`, each case’s `ROWTYPE_` indicates the type of data contained in the row. See [Matrix File Row Types](Matrix-Files.md#Matrix-File-Row-Types), for a list of supported row types. 

#### Example 1: Defaults with `ROWTYPE_`

This example shows a simple use of `MATRIX DATA` with `ROWTYPE_` plus 8 variables named `var01` through `var08`. 

Because `ROWTYPE_` is the first variable in `VARIABLES`, it appears first on each line. The first three lines in the example data have `ROWTYPE_` values of ‘MEAN’, ‘SD’, and ‘N’. These indicate that these lines contain vectors of means, standard deviations, and counts, respectively, for `var01` through `var08` in order. 

The remaining 8 lines have a ROWTYPE_ of ‘CORR’ which indicates that the values are correlation coefficients. Each of the lines corresponds to a row in the correlation matrix: the first line is for `var01`, the next line for `var02`, and so on. The input only contains values for the lower triangle, including the diagonal, since `FORMAT=LOWER DIAGONAL` is the default. 

With `ROWTYPE_`, the `CONTENTS` subcommand is optional and the `CELLS` subcommand may not be used. 
    
    
    MATRIX DATA
        VARIABLES=ROWTYPE_ var01 TO var08.
    BEGIN DATA.
    MEAN  24.3   5.4  69.7  20.1  13.4   2.7  27.9   3.7
    SD     5.7   1.5  23.5   5.8   2.8   4.5   5.4   1.5
    N       92    92    92    92    92    92    92    92
    CORR  1.00
    CORR   .18  1.00
    CORR  -.22  -.17  1.00
    CORR   .36   .31  -.14  1.00
    CORR   .27   .16  -.12   .22  1.00
    CORR   .33   .15  -.17   .24   .21  1.00
    CORR   .50   .29  -.20   .32   .12   .38  1.00
    CORR   .17   .29  -.05   .20   .27   .20   .04  1.00
    END DATA.
    

#### Example 2: `FORMAT=UPPER NODIAGONAL`

This syntax produces the same matrix file as example 1, but it uses `FORMAT=UPPER NODIAGONAL` to specify the upper triangle and omit the diagonal. Because the matrix’s `ROWTYPE_` is `CORR`, PSPP automatically fills in the diagonal with 1. 
    
    
    MATRIX DATA
        VARIABLES=ROWTYPE_ var01 TO var08
        /FORMAT=UPPER NODIAGONAL.
    BEGIN DATA.
    MEAN  24.3   5.4  69.7  20.1  13.4   2.7  27.9   3.7
    SD     5.7   1.5  23.5   5.8   2.8   4.5   5.4   1.5
    N       92    92    92    92    92    92    92    92
    CORR         .17   .50  -.33   .27   .36  -.22   .18
    CORR               .29   .29  -.20   .32   .12   .38
    CORR                     .05   .20  -.15   .16   .21
    CORR                           .20   .32  -.17   .12
    CORR                                 .27   .12  -.24
    CORR                                      -.20  -.38
    CORR                                             .04
    END DATA.
    

#### Example 3: `N` subcommand

This syntax uses the `N` subcommand in place of an `N` vector. It produces the same matrix file as examples 1 and 2. 
    
    
    MATRIX DATA
        VARIABLES=ROWTYPE_ var01 TO var08
        /FORMAT=UPPER NODIAGONAL
        /N 92.
    BEGIN DATA.
    MEAN  24.3   5.4  69.7  20.1  13.4   2.7  27.9   3.7
    SD     5.7   1.5  23.5   5.8   2.8   4.5   5.4   1.5
    CORR         .17   .50  -.33   .27   .36  -.22   .18
    CORR               .29   .29  -.20   .32   .12   .38
    CORR                     .05   .20  -.15   .16   .21
    CORR                           .20   .32  -.17   .12
    CORR                                 .27   .12  -.24
    CORR                                      -.20  -.38
    CORR                                             .04
    END DATA.
    

#### Example 4: Split variables

This syntax defines two matrices, using the variable ‘s1’ to distinguish between them. Notice how the order of variables in the input matches their order on `VARIABLES`. This example also uses `FORMAT=FULL`. 
    
    
    MATRIX DATA
        VARIABLES=s1 ROWTYPE_  var01 TO var04
        /SPLIT=s1
        /FORMAT=FULL.
    BEGIN DATA.
    0 MEAN 34 35 36 37
    0 SD   22 11 55 66
    0 N    99 98 99 92
    0 CORR  1 .9 .8 .7
    0 CORR .9  1 .6 .5
    0 CORR .8 .6  1 .4
    0 CORR .7 .5 .4  1
    1 MEAN 44 45 34 39
    1 SD   23 15 51 46
    1 N    98 34 87 23
    1 CORR  1 .2 .3 .4
    1 CORR .2  1 .5 .6
    1 CORR .3 .5  1 .7
    1 CORR .4 .6 .7  1
    END DATA.
    

#### Example 5: Factor variables

This syntax defines a matrix file that includes a factor variable ‘f1’. The data includes mean, standard deviation, and count vectors for two values of the factor variable, plus a correlation matrix for pooled data. 
    
    
    MATRIX DATA
        VARIABLES=ROWTYPE_ f1 var01 TO var04
        /FACTOR=f1.
    BEGIN DATA.
    MEAN 0 34 35 36 37
    SD   0 22 11 55 66
    N    0 99 98 99 92
    MEAN 1 44 45 34 39
    SD   1 23 15 51 46
    N    1 98 34 87 23
    CORR .  1
    CORR . .9  1
    CORR . .8 .6  1
    CORR . .7 .5 .4  1
    END DATA.
