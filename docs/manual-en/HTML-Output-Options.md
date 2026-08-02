### 3.6 HTML Output Options

To produce output in HTML format, specify -o file on the PSPP command line, optionally followed by any of the options shown in the table below to customize the output format. 

-O format=html
    

Specify the output format. This is only necessary if the file name given on -o does not end in .html. 

-O charts={template.png|none}
    

Sets the name used for chart files. See [Plain Text Output Options](Plain-Text-Output-Options.md), for details. 

-O borders=boolean
    

Decorate the tables with borders. If set to false, the tables produced will have no borders. The default value is true. 

-O bare=boolean
    

The HTML output driver ordinarily outputs a complete HTML document. If set to true, the driver instead outputs only what would normally be the contents of the `body` element. The default value is false. 

-O css=boolean
    

Use cascading style sheets. Cascading style sheets give an improved appearance and can be used to produce pages which fit a certain web site’s style. The default value is true.
