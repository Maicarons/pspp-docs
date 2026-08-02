#### Examples

  1. DATA LIST TABLE /NAME 1-10 (A) INFO1 TO INFO3 12-17 (1).
         
         BEGIN DATA.
         John Smith 102311
         Bob Arnold 122015
         Bill Yates  918 6
         END DATA.
         

Defines the following variables: 
     * `NAME`, a 10-character-wide string variable, in columns 1 through 10. 
     * `INFO1`, a numeric variable, in columns 12 through 13. 
     * `INFO2`, a numeric variable, in columns 14 through 15. 
     * `INFO3`, a numeric variable, in columns 16 through 17. 

The `BEGIN DATA`/`END DATA` commands cause three cases to be defined: 
    
    Case   NAME         INFO1   INFO2   INFO3
       1   John Smith     10      23      11
       2   Bob Arnold     12      20      15
       3   Bill Yates      9      18       6
    

The `TABLE` keyword causes PSPP to print out a table describing the four variables defined. 

  2. DATA LIST FILE="survey.dat"
                 /ID 1-5 NAME 7-36 (A) SURNAME 38-67 (A) MINITIAL 69 (A)
                 /Q01 TO Q50 7-56
                 /.
         

Defines the following variables: 
     * `ID`, a numeric variable, in columns 1-5 of the first record. 
     * `NAME`, a 30-character string variable, in columns 7-36 of the first record. 
     * `SURNAME`, a 30-character string variable, in columns 38-67 of the first record. 
     * `MINITIAL`, a 1-character string variable, in column 69 of the first record. 
     * Fifty variables `Q01`, `Q02`, `Q03`, …, `Q49`, `Q50`, all numeric, `Q01` in column 7, `Q02` in column 8, …, `Q49` in column 55, `Q50` in column 56, all in the second record. 

Cases are separated by a blank record. 

Data is read from file survey.dat in the current directory.
