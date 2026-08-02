### 13.3 SAMPLE
    
    
    SAMPLE num1 [FROM num2].
    

`SAMPLE` randomly samples a proportion of the cases in the active file. Unless it follows `TEMPORARY`, it operates as a transformation, permanently removing cases from the active dataset. 

The proportion to sample can be expressed as a single number between 0 and 1. If k is the number specified, and N is the number of currently-selected cases in the active dataset, then after `SAMPLE k.`, approximately k*N cases are selected. 

The proportion to sample can also be specified in the style `SAMPLE m FROM N`. With this style, cases are selected as follows: 

  1. If N is equal to the number of currently-selected cases in the active dataset, exactly m cases are selected. 
  2. If N is greater than the number of currently-selected cases in the active dataset, an equivalent proportion of cases are selected. 
  3. If N is less than the number of currently-selected cases in the active, exactly m cases are selected _from the first N cases in the active dataset._

`SAMPLE` and `SELECT IF` are performed in the order specified by the syntax file. 

`SAMPLE` is always performed before `N OF CASES`, regardless of ordering in the syntax file (see [N OF CASES](N-OF-CASES.md)). 

The same values for `SAMPLE` may result in different samples. To obtain the same sample, use the `SET` command to set the random number seed to the same value before each `SAMPLE`. Different samples may still result when the file is processed on systems with differing endianness or floating-point formats. By default, the random number seed is based on the system time.
