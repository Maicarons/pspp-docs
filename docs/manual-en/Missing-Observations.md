### 6.6 Handling missing observations

PSPP includes special support for unknown numeric data values. Missing observations are assigned a special value, called the _system-missing value_. This “value” actually indicates the absence of a value; it means that the actual value is unknown. Procedures automatically exclude from analyses those observations or cases that have missing values. Details of missing value exclusion depend on the procedure and can often be controlled by the user; refer to descriptions of individual procedures for details. 

The system-missing value exists only for numeric variables. String variables always have a defined value, even if it is only a string of spaces. 

Variables, whether numeric or string, can have designated _user-missing values_. Every user-missing value is an actual value for that variable. However, most of the time user-missing values are treated in the same way as the system-missing value. 

For more information on missing values, see the following sections: [Datasets](Datasets.md), [MISSING VALUES](MISSING-VALUES.md), [Expressions](Expressions.md). See also the documentation on individual procedures for information on how they handle missing values.
