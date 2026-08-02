### 12.7 RECODE

The `RECODE` command is used to transform existing values into other, user specified values. The general form is: 
    
    
    RECODE src_vars
            (src_value src_value … = dest_value)
            (src_value src_value … = dest_value)
            (src_value src_value … = dest_value) …
             [INTO dest_vars].
    

Following the `RECODE` keyword itself comes src_vars which is a list of variables whose values are to be transformed. These variables may be string variables or they may be numeric. However the list must be homogeneous; you may not mix string variables and numeric variables in the same recoding. 

After the list of source variables, there should be one or more _mappings_. Each mapping is enclosed in parentheses, and contains the source values and a destination value separated by a single ‘=’. The source values are used to specify the values in the dataset which need to change, and the destination value specifies the new value to which they should be changed. Each src_value may take one of the following forms: 

number
    

If the source variables are numeric then src_value may be a literal number. 

string
    

If the source variables are string variables then src_value may be a literal string (like all strings, enclosed in single or double quotes). 

num1 THRU num2
    

This form is valid only when the source variables are numeric. It specifies all values in the range between num1 and num2, including both endpoints of the range. By convention, num1 should be less than num2. Open-ended ranges may be specified using ‘LO’ or ‘LOWEST’ for num1 or ‘HI’ or ‘HIGHEST’ for num2. 

‘MISSING’
    

The literal keyword ‘MISSING’ matches both system missing and user missing values. It is valid for both numeric and string variables. 

‘SYSMIS’
    

The literal keyword ‘SYSMIS’ matches system missing values. It is valid for both numeric variables only. 

‘ELSE’
    

The ‘ELSE’ keyword may be used to match any values which are not matched by any other src_value appearing in the command. If this keyword appears, it should be used in the last mapping of the command. 

After the source variables comes an ‘=’ and then the dest_value. The dest_value may take any of the following forms: 

number
    

A literal numeric value to which the source values should be changed. This implies the destination variable must be numeric. 

string
    

A literal string value (enclosed in quotation marks) to which the source values should be changed. This implies the destination variable must be a string variable. 

‘SYSMIS’
    

The keyword ‘SYSMIS’ changes the value to the system missing value. This implies the destination variable must be numeric. 

‘COPY’
    

The special keyword ‘COPY’ means that the source value should not be modified, but copied directly to the destination value. This is meaningful only if ‘INTO dest_vars’ is specified. 

Mappings are considered from left to right. Therefore, if a value is matched by a src_value from more than one mapping, the first (leftmost) mapping which matches is considered. Any subsequent matches are ignored. 

The clause ‘INTO dest_vars’ is optional. The behaviour of the command is slightly different depending on whether it appears or not. 

If ‘INTO dest_vars’ does not appear, then values are recoded “in place”. This means that the recoded values are written back to the source variables from whence the original values came. In this case, the dest_value for every mapping must imply a value which has the same type as the src_value. For example, if the source value is a string value, it is not permissible for dest_value to be ‘SYSMIS’ or another forms which implies a numeric result. It is also not permissible for dest_value to be longer than the width of the source variable. 

The following example two numeric variables x and y are recoded in place. Zero is recoded to 99, the values 1 to 10 inclusive are unchanged, values 1000 and higher are recoded to the system-missing value and all other values are changed to 999: 
    
    
    recode x y
            (0 = 99)
            (1 THRU 10 = COPY)
            (1000 THRU HIGHEST = SYSMIS)
            (ELSE = 999).
    

If ‘INTO dest_vars’ is given, then recoded values are written into the variables specified in dest_vars, which must therefore contain a list of valid variable names. The number of variables in dest_vars must be the same as the number of variables in src_vars and the respective order of the variables in dest_vars corresponds to the order of src_vars. That is to say, the recoded value whose original value came from the nth variable in src_vars is placed into the nth variable in dest_vars. The source variables are unchanged. If any mapping implies a string as its destination value, then the respective destination variable must already exist, or have been declared using `STRING` or another transformation. Numeric variables however are automatically created if they don’t already exist. The following example deals with two source variables, a and b which contain string values. Hence there are two destination variables v1 and v2. Any cases where a or b contain the values ‘apple’, ‘pear’ or ‘pomegranate’ result in v1 or v2 being filled with the string ‘fruit’ whilst cases with ‘tomato’, ‘lettuce’ or ‘carrot’ result in ‘vegetable’. Any other values produce the result ‘unknown’: 
    
    
    string v1 (a20).
    string v2 (a20).
    
    recode a b
            ("apple" "pear" "pomegranate" = "fruit")
            ("tomato" "lettuce" "carrot" = "vegetable")
            (ELSE = "unknown")
            into v1 v2.
    

There is one very special mapping, not mentioned above. If the source variable is a string variable then a mapping may be specified as ‘(CONVERT)’. This mapping, if it appears must be the last mapping given and the ‘INTO dest_vars’ clause must also be given and must not refer to a string variable. ‘CONVERT’ causes a number specified as a string to be converted to a numeric value. For example it converts the string ‘"3"’ into the numeric value 3 (note that it does not convert ‘three’ into 3). If the string cannot be parsed as a number, then the system-missing value is assigned instead. In the following example, cases where the value of x (a string variable) is the empty string, are recoded to 999 and all others are converted to the numeric equivalent of the input value. The results are placed into the numeric variable y: 
    
    
    recode x
           ("" = 999)
            (convert)
            into y.
    

It is possible to specify multiple recodings on a single command. Introduce additional recodings with a slash (‘/’) to separate them from the previous recodings: 
    
    
    recode
            a  (2 = 22) (else = 99)
            /b (1 = 3) into z
            .
    

Here we have two recodings. The first affects the source variable a and recodes in-place the value 2 into 22 and all other values to 99. The second recoding copies the values of b into the variable z, changing any instances of 1 into 3.
