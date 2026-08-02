#### 8.5.2 DATA LIST FREE
    
    
    DATA LIST FREE
            [({TAB,’c’}, …)]
            [{NOTABLE,TABLE}]
            [FILE=’file_name’ [ENCODING=’encoding’]]
            [SKIP=n_records]
            /var_spec…
    
    where each var_spec takes one of the forms
            var_list [(type_spec)]
            var_list *
    

In free format, the input data is, by default, structured as a series of fields separated by spaces, tabs, or line breaks. If the current `DECIMAL` separator is `DOT` (see [SET](SET.md)), then commas are also treated as field separators. Each field’s content may be unquoted, or it may be quoted with a pairs of apostrophes (‘'’) or double quotes (‘"’). Unquoted white space separates fields but is not part of any field. Any mix of spaces, tabs, and line breaks is equivalent to a single space for the purpose of separating fields, but consecutive commas will skip a field. 

Alternatively, delimiters can be specified explicitly, as a parenthesized, comma-separated list of single-character strings immediately following FREE. The word TAB may also be used to specify a tab character as a delimiter. When delimiters are specified explicitly, only the given characters, plus line breaks, separate fields. Furthermore, leading spaces at the beginnings of fields are not trimmed, consecutive delimiters define empty fields, and no form of quoting is allowed. 

The `NOTABLE` and `TABLE` subcommands are as in `DATA LIST FIXED` above. `NOTABLE` is the default. 

The `FILE`, `SKIP`, and `ENCODING` subcommands are as in `DATA LIST FIXED` above. 

The variables to be parsed are given as a single list of variable names. This list must be introduced by a single slash (‘/’). The set of variable names may contain format specifications in parentheses (see [Input and Output Formats](Input-and-Output-Formats.md)). Format specifications apply to all variables back to the previous parenthesized format specification. 

In addition, an asterisk may be used to indicate that all variables preceding it are to have input/output format ‘F8.0’. 

Specified field widths are ignored on input, although all normal limits on field width apply, but they are honored on output.
