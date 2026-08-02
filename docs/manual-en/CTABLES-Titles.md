#### 15.7.6 Titles
    
    
    /TITLES
        [TITLE=_string_ …]
        [CAPTION=_string_ …]
        [CORNER=_string_ …]
    

The `TITLES` subcommand sets the title, caption, and corner text for the table output for the previous `TABLE` subcommand. Any number of strings may be specified for each kind of text, with each string appearing on a separate line in the output. The title appears above the table, the caption below the table, and the corner text appears in the table’s upper left corner. By default, the title is “Custom Tables” and the caption and corner text are empty. With some table output styles, the corner text is not displayed. 

The strings provided in this subcommand may contain the following macro-like keywords that PSPP substitutes at the time that it runs the command: 

`)DATE`
    

The current date, e.g. MM/DD/YY. The format is locale-dependent. 

`)TIME`
    

The current time, e.g. HH:MM:SS. The format is locale-dependent. 

`)TABLE`
    

The expression specified on the `TABLE` command. Summary and measurement level specifications are omitted, and variable labels are used in place of variable names.
