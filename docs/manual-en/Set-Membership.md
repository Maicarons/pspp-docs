#### 7.7.5 Set-Membership Functions

Set membership functions determine whether a value is a member of a set. They take a set of numeric arguments or a set of string arguments, and produce Boolean results. 

String comparisons are performed according to the rules given in [Relational Operators](Relational-Operators.md). User-missing string values are treated as valid values. 

Function: __**ANY** _( value, set [, set]…)_
    

Returns true if value is equal to any of the set values, and false otherwise. For numeric arguments, returns system-missing if value is system-missing or if all the values in set are system-missing. If value

Function: __**RANGE** _( value, low, high [, low, high]…)_
    

Returns true if value is in any of the intervals bounded by low and high inclusive, and false otherwise. low and high must be given in pairs. Returns system-missing if any high is less than its low or, for numeric arguments, if value is system-missing or if all the low-high pairs contain one (or two) system-missing values. A pair does not match value if either low or high is missing, even if value equals the non-missing endpoint.
