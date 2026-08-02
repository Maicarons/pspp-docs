#### 6.7.1 Attributes of Variables

Each variable has a number of attributes, including: 

**Name**
    

An identifier, up to 64 bytes long. Each variable must have a different name. See [Tokens](Tokens.md). 

Some system variable names begin with ‘$’, but user-defined variables’ names may not begin with ‘$’. 

The final character in a variable name should not be ‘.’, because such an identifier will be misinterpreted when it is the final token on a line: `FOO.` is divided into two separate tokens, ‘FOO’ and ‘.’, indicating end-of-command. See [Tokens](Tokens.md). 

The final character in a variable name should not be ‘_’, because some such identifiers are used for special purposes by PSPP procedures. 

As with all PSPP identifiers, variable names are not case-sensitive. PSPP capitalizes variable names on output the same way they were capitalized at their point of definition in the input. 

**Type**
    

Numeric or string. 

**Width**
    

(string variables only) String variables with a width of 8 characters or fewer are called _short string variables_. Short string variables may be used in a few contexts where _long string variables_ (those with widths greater than 8) are not allowed. 

**Position**
    

Variables in the dictionary are arranged in a specific order. `DISPLAY` can be used to show this order: see [DISPLAY](DISPLAY.md). 

**Initialization**
    

Either reinitialized to 0 or spaces for each case, or left at its existing value. See [LEAVE](LEAVE.md). 

**Missing values**
    

Optionally, up to three values, or a range of values, or a specific value plus a range, can be specified as _user-missing values_. There is also a _system-missing value_ that is assigned to an observation when there is no other obvious value for that observation. Observations with missing values are automatically excluded from analyses. User-missing values are actual data values, while the system-missing value is not a value at all. See [Missing Observations](Missing-Observations.md). 

**Variable label**
    

A string that describes the variable. See [VARIABLE LABELS](VARIABLE-LABELS.md). 

**Value label**
    

Optionally, these associate each possible value of the variable with a string. See [VALUE LABELS](VALUE-LABELS.md). 

**Print format**
    

Display width, format, and (for numeric variables) number of decimal places. This attribute does not affect how data are stored, just how they are displayed. Example: a width of 8, with 2 decimal places. See [Input and Output Formats](Input-and-Output-Formats.md). 

**Write format**
    

Similar to print format, but used by the `WRITE` command (see [WRITE](WRITE.md)). 

**Measurement level**
    

One of the following: 

Nominal
    

Each value of a nominal variable represents a distinct category. The possible categories are finite and often have value labels. The order of categories is not significant. Political parties, US states, and yes/no choices are nominal. Numeric and string variables can be nominal. 

Ordinal
    

Ordinal variables also represent distinct categories, but their values are arranged according to some natural order. Likert scales, e.g. from strongly disagree to strongly agree, are ordinal. Data grouped into ranges, e.g. age groups or income groups, are ordinal. Both numeric and string variables can be ordinal. String values are ordered alphabetically, so letter grades from A to F will work as expected, but `poor`, `satisfactory`, `excellent` will not. 

Scale
    

Scale variables are ones for which differences and ratios are meaningful. These are often values which have a natural unit attached, such as age in years, income in dollars, or distance in miles. Only numeric variables are scalar. 

Variables created by `COMPUTE` and similar transformations, obtained from external sources, etc., initially have an unknown measurement level. Any procedure that reads the data will then assign a default measurement level. PSPP can assign some defaults without reading the data: 

  * Nominal, if it’s a string variable. 
  * Nominal, if the variable has a WKDAY or MONTH print format. 
  * Scale, if the variable has a DOLLAR, CCA through CCE, or time or date print format. 

Otherwise, PSPP reads the data and decides based on its distribution: 

  * Nominal, if all observations are missing. 
  * Scale, if one or more valid observations are noninteger or negative. 
  * Scale, if no valid observation is less than 10. 
  * Scale, if the variable has 24 or more unique valid values. The value 24 is the default and can be adjusted (see [SET SCALEMIN](SET.md#SET-SCALEMIN)). 

Finally, if none of the above is true, PSPP assigns the variable a nominal measurement level. 

**Custom attributes**
    

User-defined associations between names and values. See [VARIABLE ATTRIBUTE](VARIABLE-ATTRIBUTE.md). 

**Role**
    

The intended role of a variable for use in dialog boxes in graphical user interfaces. See [VARIABLE ROLE](VARIABLE-ROLE.md).
