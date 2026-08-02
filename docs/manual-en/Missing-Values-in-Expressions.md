### 7.2 Missing Values in Expressions

Most numeric operators yield system-missing when given any system-missing operand. A string operator given any system-missing operand typically results in the empty string. Exceptions are listed under particular operator descriptions. 

String user-missing values are not treated specially in expressions. 

User-missing values for numeric variables are always transformed into the system-missing value, except inside the arguments to the `VALUE` and `SYSMIS` functions. 

The missing-value functions can be used to precisely control how missing values are treated in expressions. See [Missing Value Functions](Missing-Value-Functions.md), for more details.
