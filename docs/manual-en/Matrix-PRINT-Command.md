#### 16.4.5 The `PRINT` Command
    
    
    PRINT [_expression_]
          [/FORMAT=_format_]
          [/TITLE=_title_]
          [/SPACE={NEWPAGE _|_ _n_}]
          [{/RLABELS=_string_ … _|_ /RNAMES=_expression_}]
          [{/CLABELS=_string_ … _|_ /CNAMES=_expression_}].
    

The `PRINT` command is commonly used to display a matrix. It evaluates the restricted expression, if present, and outputs it either as text or a pivot table, depending on the setting of `MDISPLAY` (see [SET MDISPLAY](SET.md#SET-MDISPLAY)). 

Use the `FORMAT` subcommand to specify a format, such as `F8.2`, for displaying the matrix elements. `FORMAT` is optional for numerical matrices. When it is omitted, PSPP chooses how to format entries automatically using m, the magnitude of the largest-magnitude element in the matrix to be displayed: 

  1. If _m < 10^{11}_ and the matrix’s elements are all integers, PSPP chooses the narrowest `F` format that fits m plus a sign. For example, if the matrix is `{1:10}`, then _m = 10_ , which fits in 3 columns with room for a sign, the format is `F3.0`. 
  2. Otherwise, if _m ≥ 10^9_ or _m ≤ 10^{-4}_, PSPP scales all of the numbers in the matrix by _10^x_ , where x is the exponent that would be used to display m in scientific notation. For example, for _m = 5.123×10^{20}_, the scale factor is _10^{20}_. PSPP displays the scaled values in format `F13.10` and notes the scale factor in the output. 
  3. Otherwise, PSPP displays the matrix values, without scaling, in format `F13.10`. 

The optional `TITLE` subcommand specifies a title for the output text or table, as a quoted string. When it is omitted, the syntax of the matrix expression is used as the title. 

Use the `SPACE` subcommand to request extra space above the matrix output. With a numerical argument, it adds the specified number of lines of blank space above the matrix. With `NEWPAGE` as an argument, it prints the matrix at the top of a new page. The `SPACE` subcommand has no effect when a matrix is output as a pivot table. 

The `RLABELS` and `RNAMES` subcommands, which are mutually exclusive, can supply a label to accompany each row in the output. With `RLABELS`, specify the labels as comma-separated strings or other tokens. With `RNAMES`, specify a single expression that evaluates to a vector of strings. Either way, if there are more labels than rows, the extra labels are ignored, and if there are more rows than labels, the extra rows are unlabeled. For output to a pivot table with `RLABELS`, the labels can be any length; otherwise, the labels are truncated to 8 bytes. 

The `CLABELS` and `CNAMES` subcommands work for labeling columns as `RLABELS` and `RNAMES` do for labeling rows. 

When the expression is omitted, `PRINT` does not output a matrix. Instead, it outputs only the text specified on `TITLE`, if any, preceded by any space specified on the `SPACE` subcommand, if any. Any other subcommands are ignored, and the command acts as if `MDISPLAY` is set to `TEXT` regardless of its actual setting. 

The following syntax demonstrates two different ways to label the rows and columns of a matrix with `PRINT`: 
    
    
    MATRIX.
    COMPUTE m={1, 2, 3; 4, 5, 6; 7, 8, 9}.
    PRINT m/RLABELS=a, b, c/CLABELS=x, y, z.
    
    COMPUTE rlabels={"a", "b", "c"}.
    COMPUTE clabels={"x", "y", "z"}.
    PRINT m/RNAMES=rlabels/CNAMES=clabels.
    END MATRIX.
    

With `MDISPLAY=TEXT` (the default), this program outputs the following (twice): 
    
    
    m
                    x        y        z
    a               1        2        3
    b               4        5        6
    c               7        8        9
    

With ‘SET MDISPLAY=TABLES.’ added above ‘MATRIX.’, the output becomes the following (twice): 

|  | x | y | z |
| --- | --- | --- | --- |
| a | 1 | 2 | 3 |
| b | 4 | 5 | 6 |
| c | 7 | 8 | 9 |
