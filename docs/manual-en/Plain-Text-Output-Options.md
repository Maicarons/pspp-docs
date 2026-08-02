### 3.3 Plain Text Output Options

PSPP can produce plain text output, drawing boxes using ASCII or Unicode line drawing characters. To produce plain text output, specify -o file on the PSPP command line, optionally followed by options from the table below to customize the output format. 

Plain text output is encoded in UTF-8. 

-O format=txt
    

Specify the output format. This is only necessary if the file name given on -o does not end in .txt or .list. 

-O charts={template.png|none}
    

Name for chart files included in output. The value should be a file name that includes a single ‘#’ and ends in png. When a chart is output, the ‘#’ is replaced by the chart number. The default is the file name specified on -o with the extension stripped off and replaced by -#.png. 

Specify `none` to disable chart output. 

-O foreground-color=color
-O background-color=color
    

Sets color as the color to be used for the background or foreground to be used for charts. Color should be given in the format `#RRRRGGGGBBBB`, where RRRR, GGGG and BBBB are 4 character hexadecimal representations of the red, green and blue components respectively. If charts are disabled, this option has no effect. 

-O width=columns
    

Width of a page, in columns. If unspecified or given as `auto`, the default is the width of the terminal, for interactive output, or the WIDTH setting (see [SET](SET.md)), for output to a file. 

-O box={ascii|unicode}
    

Sets the characters used for lines in tables. If set to `ascii`, output uses use the characters ‘-’, ‘|’, and ‘+’ for single-width lines and ‘=’ and ‘#’ for double-width lines. If set to `unicode` then, output uses Unicode box drawing characters. The default is `unicode` if the locale’s character encoding is "UTF-8" or `ascii` otherwise. 

-O emphasis={none|bold|underline}
    

How to emphasize text. Bold and underline emphasis are achieved with overstriking, which may not be supported by all the software to which you might pass the output. Default: `none`.
