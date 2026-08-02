### 11.13 MISSING VALUES

In many situations the data available for analysis is incomplete and a placeholder must be used in place of a value to indicate that the value is unknown. One way that missing values are represented is through the $SYSMIS variable (see [System Variables](System-Variables.md)). Another, more flexible way is through _user-missing values_ which are determined on a per variable basis. 

The `MISSING VALUES` command sets user-missing values for variables. 
    
    
    MISSING VALUES var_list (missing_values).
    
    where missing_values takes one of the following forms:
            num1
            num1, num2
            num1, num2, num3
            num1 THRU num2
            num1 THRU num2, num3
            string1
            string1, string2
            string1, string2, string3
    As part of a range, LO or LOWEST may take the place of num1;
    HI or HIGHEST may take the place of num2.
    

`MISSING VALUES` sets user-missing values for numeric and string variables. Long string variables may have missing values, but characters after the first 8 bytes of the missing value must be spaces. 

Specify a list of variables, followed by a list of their user-missing values in parentheses. Up to three discrete values may be given, or, for numeric variables only, a range of values optionally accompanied by a single discrete value. Ranges may be open-ended on one end, indicated through the use of the keyword `LO` or `LOWEST` or `HI` or `HIGHEST`. 

The `MISSING VALUES` command takes effect immediately. It is not affected by conditional and looping constructs such as `DO IF` or `LOOP`.
