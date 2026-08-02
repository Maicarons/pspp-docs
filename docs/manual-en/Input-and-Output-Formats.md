#### 6.7.4 Input and Output Formats

An _input format_ describes how to interpret the contents of an input field as a number or a string. It might specify that the field contains an ordinary decimal number, a time or date, a number in binary or hexadecimal notation, or one of several other notations. Input formats are used by commands such as `DATA LIST` that read data or syntax files into the PSPP active dataset. 

Every input format corresponds to a default _output format_ that specifies the formatting used when the value is output later. It is always possible to explicitly specify an output format that resembles the input format. Usually, this is the default, but in cases where the input format is unfriendly to human readability, such as binary or hexadecimal formats, the default output format is an easier-to-read decimal format. 

Every variable has two output formats, called its _print format_ and _write format_. Print formats are used in most output contexts; write formats are used only by `WRITE` (see [WRITE](WRITE.md)). Newly created variables have identical print and write formats, and `FORMATS`, the most commonly used command for changing formats (see [FORMATS](FORMATS.md)), sets both of them to the same value as well. Thus, most of the time, the distinction between print and write formats is unimportant. 

Input and output formats are specified to PSPP with a _format specification_ of the form `TYPEw` or `TYPEw.d`, where TYPE is one of the format types described later, w is a field width measured in columns, and d is an optional number of decimal places. If d is omitted, a value of 0 is assumed. Some formats do not allow a nonzero d to be specified. 

The following sections describe the input and output formats supported by PSPP. 

| • Basic Numeric Formats |  |  |
| --- | --- | --- |
| • Custom Currency Formats |  |  |
| • Legacy Numeric Formats |  |  |
| • Binary and Hexadecimal Numeric Formats |  |  |
| • Time and Date Formats |  |  |
| • Date Component Formats |  |  |
| • String Formats |  |  |
