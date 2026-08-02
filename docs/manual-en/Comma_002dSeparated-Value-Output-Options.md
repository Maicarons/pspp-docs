### 3.8 Comma-Separated Value Output Options

To produce output in comma-separated value (CSV) format, specify -o file on the PSPP command line, optionally followed by any of the options shown in the table below to customize the output format. 

-O format=csv
    

Specify the output format. This is only necessary if the file name given on -o does not end in .csv. 

-O separator=field-separator
    

Sets the character used to separate fields. Default: a comma (‘,’). 

-O quote=qualifier
    

Sets qualifier as the character used to quote fields that contain white space, the separator (or any of the characters in the separator, if it contains more than one character), or the quote character itself. If qualifier is longer than one character, only the first character is used; if qualifier is the empty string, then fields are never quoted. 

-O titles=boolean
    

Whether table titles (brief descriptions) should be printed. Default: `on`. 

-O captions=boolean
    

Whether table captions (more extensive descriptions) should be printed. Default: on. 

The CSV format used is an extension to that specified in RFC 4180: 

Tables
    

Each table row is output on a separate line, and each column is output as a field. The contents of a cell that spans multiple rows or columns is output only for the top-left row and column; the rest are output as empty fields. 

Titles
    

When a table has a title and titles are enabled, the title is output just above the table as a single field prefixed by ‘Table:’. 

Captions
    

When a table has a caption and captions are enabled, the caption is output just below the table as a single field prefixed by ‘Caption:’. 

Footnotes
    

Within a table, footnote markers are output as bracketed letters following the cell’s contents, _e.g._ ‘[a]’, ‘[b]’, ... The footnotes themselves are output following the body of the table, as a separate two-column table introduced with a line that says ‘Footnotes:’. Each row in the table represent one footnote: the first column is the marker, the second column is the text. 

Text
    

Text in output is printed as a field on a line by itself. The TITLE and SUBTITLE produce similar output, prefixed by ‘Title:’ or ‘Subtitle:’, respectively. 

Messages
    

Errors, warnings, and notes are printed the same way as text. 

Charts
    

Charts are not included in CSV output. 

Successive output items are separated by a blank line.
