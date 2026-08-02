#### 9.4.3 Textual Data Files
    
    
    GET DATA /TYPE=TXT
            /FILE={’file_name’,file_handle}
            [ENCODING=’encoding’]
            [/ARRANGEMENT={DELIMITED,FIXED}]
            [/FIRSTCASE={first_case}]
            [/IMPORTCASES=...]
            …additional subcommands depending on ARRANGEMENT…
    

When TYPE=TXT is specified, GET DATA reads data in a delimited or fixed columnar format, much like DATA LIST (see [DATA LIST](DATA-LIST.md)). 

The `FILE` subcommand is mandatory. Specify the file to be read as a string file name or (for textual data only) a file handle (see [File Handles](File-Handles.md)). 

The `ENCODING` subcommand specifies the character encoding of the file to be read. See [INSERT](INSERT.md), for information on supported encodings. 

The `ARRANGEMENT` subcommand determines the file’s basic format. DELIMITED, the default setting, specifies that fields in the input data are separated by spaces, tabs, or other user-specified delimiters. FIXED specifies that fields in the input data appear at particular fixed column positions within records of a case. 

By default, cases are read from the input file starting from the first line. To skip lines at the beginning of an input file, set `FIRSTCASE` to the number of the first line to read: 2 to skip the first line, 3 to skip the first two lines, and so on. 

`IMPORTCASES` is ignored, for compatibility. Use `N OF CASES` to limit the number of cases read from a file (see [N OF CASES](N-OF-CASES.md)), or `SAMPLE` to obtain a random sample of cases (see [SAMPLE](SAMPLE.md)). 

The remaining subcommands apply only to one of the two file arrangements, described below. 

| • GET DATA /TYPE=TXT /ARRANGEMENT=DELIMITED |  |  |
| --- | --- | --- |
| • GET DATA /TYPE=TXT /ARRANGEMENT=FIXED |  |  |
