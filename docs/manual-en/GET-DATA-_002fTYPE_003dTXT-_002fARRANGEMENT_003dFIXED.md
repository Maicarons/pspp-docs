#### 9.4.3.2 Reading Fixed Columnar Data
    
    
    GET DATA /TYPE=TXT
            /FILE={’file_name’,file_handle}
            [/ARRANGEMENT={DELIMITED,FIXED}]
            [/FIRSTCASE={first_case}]
            [/IMPORTCASE={ALL,FIRST max_cases,PERCENT percent}]
    
            [/FIXCASE=n]
            /VARIABLES fixed_var [fixed_var]…
                [/rec# fixed_var [fixed_var]…]…
    where each fixed_var takes the form:
            variable start-end format
    

The `GET DATA` command with TYPE=TXT and ARRANGEMENT=FIXED reads input data from text files in fixed format, where each field is located in particular fixed column positions within records of a case. Its capabilities are similar to those of DATA LIST FIXED (see [DATA LIST FIXED](DATA-LIST-FIXED.md)), with a few enhancements. 

The required `FILE` subcommand and optional `FIRSTCASE` and `IMPORTCASE` subcommands are described above (see [GET DATA /TYPE=TXT](GET-DATA-_002fTYPE_003dTXT.md)). 

The optional `FIXCASE` subcommand may be used to specify the positive integer number of input lines that make up each case. The default value is 1. 

The `VARIABLES` subcommand, which is required, specifies the positions at which each variable can be found. For each variable, specify its name, followed by its start and end column separated by ‘-’ (_e.g._ ‘0-9’), followed by an input format type (_e.g._ ‘F’) or a full format specification (_e.g._ ‘DOLLAR12.2’). For this command, columns are numbered starting from 0 at the left column. Introduce the variables in the second and later lines of a case by a slash followed by the number of the line within the case, _e.g._ ‘/2’ for the second line. 

#### Examples

Consider the following data on used cars: 
    
    
    model   year    mileage price   type    age
    Civic   2002    29883   15900   Si      2
    Civic   2003    13415   15900   EX      1
    Civic   1992    107000  3800    n/a     12
    Accord  2002    26613   17900   EX      1
    

The following syntax can be used to read the used car data: 
    
    
    GET DATA /TYPE=TXT /FILE='cars.data' /ARRANGEMENT=FIXED /FIRSTCASE=2
            /VARIABLES=model 0-7 A
                       year 8-15 F
                       mileage 16-23 F
                       price 24-31 F
                       type 32-40 A
                       age 40-47 F.
