#### 15.7.7 Table Formatting
    
    
    /FORMAT
        [MINCOLWIDTH={DEFAULT _|_ _width_}]
        [MAXCOLWIDTH={DEFAULT _|_ _width_}]
        [UNITS={POINTS _|_ INCHES _|_ CM}]
        [EMPTY={ZERO _|_ BLANK _|_ _string_}]
        [MISSING=_string_]
    

The `FORMAT` subcommand, which must precede the first `TABLE` subcommand, controls formatting for all the output tables. `FORMAT` and all of its settings are optional. 

Use `MINCOLWIDTH` and `MAXCOLWIDTH` to control the minimum or maximum width of columns in output tables. By default, with `DEFAULT`, column width varies based on content. Otherwise, specify a number for either or both of these settings. If both are specified, `MAXCOLWIDTH` must be greater than or equal to `MINCOLWIDTH`. The default unit, or with `UNITS=POINTS`, is points (1/72 inch), or specify `UNITS=INCHES` to use inches or `UNITS=CM` for centimeters. PSPP does not currently honor any of these settings. 

By default, or with `EMPTY=ZERO`, zero values are displayed in their usual format. Use `EMPTY=BLANK` to use an empty cell instead, or `EMPTY="_string_ "` to use the specified string. 

By default, missing values are displayed as ‘.’, the same as in other tables. Specify `MISSING="_string_ "` to instead use a custom string.
