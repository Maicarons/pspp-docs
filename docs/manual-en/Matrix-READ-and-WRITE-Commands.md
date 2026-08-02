#### 16.4.8 The `READ` and `WRITE` Commands

The `READ` and `WRITE` commands perform matrix input and output with text files. They share the following syntax for specifying how data is divided among input lines: 
    
    
    /FIELD=_first_ TO _last_ [BY _width_]
    [/FORMAT=_format_]
    

Both commands require the `FIELD` subcommand. It specifies the range of columns, from first to last, inclusive, that the data occupies on each line of the file. The leftmost column is column 1\. The columns must be literal numbers, not expressions. To use entire lines, even if they might be very long, specify a column range such as `1 TO 100000`. 

The `FORMAT` subcommand is optional for numerical matrices. For string matrix input and output, specify an `A` format. In addition to `FORMAT`, the optional `BY` specification on `FIELD` determine the meaning of each text line: 

  * With neither `BY` nor `FORMAT`, the numbers in the text file are in `F` format separated by spaces or commas. For `WRITE`, PSPP uses as many digits of precision as needed to accurately represent the numbers in the matrix. 
  * `BY _width_` divides the input area into fixed-width fields with the given _width_. The input area must be a multiple of _width_ columns wide. Numbers are read or written as `F _width_.0` format. 
  * `FORMAT="_count_ F"` divides the input area into integer _count_ equal-width fields per line. The input area must be a multiple of _count_ columns wide. Another format type may be substituted for `F`. 
  * `FORMAT=F _w_`[`._d_`] divides the input area into fixed-width fields with width _w_. The input area must be a multiple of _w_ columns wide. Another format type may be substituted for `F`. The `READ` command disregards _d_. 
  * `FORMAT=F` specifies format `F` without indicating a field width. Another format type may be substituted for `F`. The `WRITE` command accepts this form, but it has no effect unless `BY` is also used to specify a field width. 

If `BY` and `FORMAT` both specify or imply a field width, then they must indicate the same field width. 

| • The READ Command |  |  |
| --- | --- | --- |
| • The WRITE Command |  |  |
