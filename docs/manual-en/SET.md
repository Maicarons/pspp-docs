### 17.20 SET
    
    
    SET
    
    (data input)
            /BLANKS={SYSMIS,’.’,number}
            /DECIMAL={DOT,COMMA}
            /FORMAT=fmt_spec
            /EPOCH={AUTOMATIC,year}
            /RIB={NATIVE,MSBFIRST,LSBFIRST,VAX}
            /RRB={NATIVE,ISL,ISB,IDL,IDB,VF,VD,VG,ZS,ZL}
    
    (interaction)
            /MXERRS=max_errs
            /MXWARNS=max_warnings
            /WORKSPACE=workspace_size
    
    (syntax execution)
            /LOCALE=’locale’
            /MXLOOPS=max_loops
            /SEED={RANDOM,seed_value}
            /UNDEFINED={WARN,NOWARN}
            /FUZZBITS=fuzzbits
            /SCALEMIN=count
    
    (data output)
            /CC{A,B,C,D,E}={’npre,pre,suf,nsuf’,’npre.pre.suf.nsuf’}
            /DECIMAL={DOT,COMMA}
            /FORMAT=fmt_spec
            /LEADZERO={ON,OFF}
            /MDISPLAY={TEXT,TABLES}
            /SMALL=number
            /SUMMARY={NONE,comment}
            /WIB={NATIVE,MSBFIRST,LSBFIRST,VAX}
            /WRB={NATIVE,ISL,ISB,IDL,IDB,VF,VD,VG,ZS,ZL}
    
    (output routing)
            /ERRORS={ON,OFF,TERMINAL,LISTING,BOTH,NONE}
            /MESSAGES={ON,OFF,TERMINAL,LISTING,BOTH,NONE}
            /PRINTBACK={ON,OFF,TERMINAL,LISTING,BOTH,NONE}
            /RESULTS={ON,OFF,TERMINAL,LISTING,BOTH,NONE}
    
    (output driver options)
            /HEADERS={NO,YES,BLANK}
            /LENGTH={NONE,n_lines}
            /WIDTH={NARROW,WIDTH,n_characters}
            /TNUMBERS={VALUES,LABELS,BOTH}
            /TVARS={NAMES,LABELS,BOTH}
            /TLOOK={NONE,file}
    
    (logging)
            /JOURNAL={ON,OFF} [’file_name’]
    
    (system files)
            /SCOMPRESSION={ON,OFF}
    
    (miscellaneous)
            /SAFER=ON
            /LOCALE=’string’
    
    (macros)
            /MEXPAND={ON,OFF}
            /MPRINT={ON,OFF}
            /MITERATE=number
            /MNEST=number
    
    (settings not yet implemented, but accepted and ignored)
            /BASETEXTDIRECTION={AUTOMATIC,RIGHTTOLEFT,LEFTTORIGHT}
            /BLOCK=’c’
            /BOX={’xxx’,’xxxxxxxxxxx’}
            /CACHE={ON,OFF}
            /CELLSBREAK=number
            /COMPRESSION={ON,OFF}
            /CMPTRANS={ON,OFF}
            /HEADER={NO,YES,BLANK}
    

`SET` allows the user to adjust several parameters relating to PSPP’s execution. Since there are many subcommands to this command, its subcommands are examined in groups. 

For subcommands that take boolean values, `ON` and `YES` are synonymous, as are `OFF` and `NO`, when used as subcommand values. 

The data input subcommands affect the way that data is read from data files. The data input subcommands are 

BLANKS
    

This is the value assigned to an item data item that is empty or contains only white space. An argument of SYSMIS or ’.’ causes the system-missing value to be assigned to null items. This is the default. Any real value may be assigned. 

DECIMAL
    

This value may be set to `DOT` or `COMMA`. Setting it to `DOT` causes the decimal point character to be ‘.’ and the grouping character to be ‘,’. Setting it to `COMMA` causes the decimal point character to be ‘,’ and the grouping character to be ‘.’. If the setting is `COMMA`, then ‘,’ is not treated as a field separator in the `DATA LIST` command (see [DATA LIST](DATA-LIST.md)). The default value is determined from the system locale. 

FORMAT
    

Allows the default numeric input/output format to be specified. The default is F8.2. See [Input and Output Formats](Input-and-Output-Formats.md). 

EPOCH
    

Specifies the range of years used when a 2-digit year is read from a data file or used in a date construction expression (see [Date Construction](Date-Construction.md)). If a 4-digit year is specified for the epoch, then 2-digit years are interpreted starting from that year, known as the epoch. If `AUTOMATIC` (the default) is specified, then the epoch begins 69 years before the current date. 

RIB
    

PSPP extension to set the byte ordering (endianness) used for reading data in IB or PIB format (see [Binary and Hexadecimal Numeric Formats](Binary-and-Hexadecimal-Numeric-Formats.md)). In `MSBFIRST` ordering, the most-significant byte appears at the left end of a IB or PIB field. In `LSBFIRST` ordering, the least-significant byte appears at the left end. `VAX` ordering is like `MSBFIRST`, except that each pair of bytes is in reverse order. `NATIVE`, the default, is equivalent to `MSBFIRST` or `LSBFIRST` depending on the native format of the machine running PSPP. 

RRB
    

PSPP extension to set the floating-point format used for reading data in RB format (see [Binary and Hexadecimal Numeric Formats](Binary-and-Hexadecimal-Numeric-Formats.md)). The possibilities are: 

NATIVE
    

The native format of the machine running PSPP. Equivalent to either IDL or IDB. 

ISL
    

32-bit IEEE 754 single-precision floating point, in little-endian byte order. 

ISB
    

32-bit IEEE 754 single-precision floating point, in big-endian byte order. 

IDL
    

64-bit IEEE 754 double-precision floating point, in little-endian byte order. 

IDB
    

64-bit IEEE 754 double-precision floating point, in big-endian byte order. 

VF
    

32-bit VAX F format, in VAX-endian byte order. 

VD
    

64-bit VAX D format, in VAX-endian byte order. 

VG
    

64-bit VAX G format, in VAX-endian byte order. 

ZS
    

32-bit IBM Z architecture short format hexadecimal floating point, in big-endian byte order. 

ZL
    

64-bit IBM Z architecture long format hexadecimal floating point, in big-endian byte order. 

Z architecture also supports IEEE 754 floating point. The ZS and ZL formats are only for use with very old input files. 

The default is NATIVE. 

Interaction subcommands affect the way that PSPP interacts with an online user. The interaction subcommands are 

MXERRS
    

The maximum number of errors before PSPP halts processing of the current command file. The default is 50. 

MXWARNS
    

The maximum number of warnings + errors before PSPP halts processing the current command file. The special value of zero means that all warning situations should be ignored. No warnings are issued, except a single initial warning advising you that warnings will not be given. The default value is 100. 

Syntax execution subcommands control the way that PSPP commands execute. The syntax execution subcommands are 

LOCALE
    

Overrides the system locale for the purpose of reading and writing syntax and data files. The argument should be a locale name in the general form `language_country.encoding`, where language and country are 2-character language and country abbreviations, respectively, and encoding is an IANA character set name. Example locales are `en_US.UTF-8` (UTF-8 encoded English as spoken in the United States) and `ja_JP.EUC-JP` (EUC-JP encoded Japanese as spoken in Japan). 

MXLOOPS
    

The maximum number of iterations for an uncontrolled loop (see [LOOP](LOOP.md)), and for any loop in the matrix language (see [Matrix LOOP and BREAK Commands](Matrix-LOOP-and-BREAK-Commands.md)). The default max_loops is 40. 

SEED
    

The initial pseudo-random number seed. Set it to a real number or to RANDOM, to obtain an initial seed from the current time of day. 

UNDEFINED
    

Currently not used. 

FUZZBITS
    

The maximum number of bits of errors in the least-significant places to accept for rounding up a value that is almost halfway between two possibilities for rounding with the RND operator (see [Miscellaneous Mathematics](Miscellaneous-Mathematics.md)). The default fuzzbits is 6. 

SCALEMIN
    

The minimum number of distinct valid values for PSPP to assume that a variable has a scale measurement level. See [Measurement Level](Attributes.md#Measurement-Level). 

WORKSPACE
    

The maximum amount of memory (in kilobytes) that PSPP uses to store data being processed. If memory in excess of the workspace size is required, then PSPP starts to use temporary files to store the data. Setting a higher value means that procedures run faster, but may cause other applications to run slower. On platforms without virtual memory management, setting a very large workspace may cause PSPP to abort. 

Data output subcommands affect the format of output data. These subcommands are 

CCA
CCB
CCC
CCD
CCE
    

Set up custom currency formats. See [Custom Currency Formats](Custom-Currency-Formats.md), for details. 

DECIMAL
    

The default `DOT` setting causes the decimal point character to be ‘.’. A setting of `COMMA` causes the decimal point character to be ‘,’. 

FORMAT
    

Allows the default numeric input/output format to be specified. The default is F8.2. See [Input and Output Formats](Input-and-Output-Formats.md). 

LEADZERO
    

Controls whether numbers with magnitude less than one are displayed with a zero before the decimal point. For example, with `SET LEADZERO=OFF`, which is the default, one-half is shown as 0.5, and with `SET LEADZERO=ON`, it is shown as .5. This setting affects only the `F`, `COMMA`, and `DOT` formats. 

MDISPLAY
    

Controls how the `PRINT` command within `MATRIX`…`END MATRIX` outputs matrices. With the default `TEXT`, `PRINT` outputs matrices as text. Change this setting to `TABLES` to instead output matrices as pivot tables. See [Matrix PRINT Command](Matrix-PRINT-Command.md), for more information. 

SMALL
    

This controls how PSPP formats small numbers in pivot tables, in cases where PSPP does not otherwise have a well-defined format for the numbers. When such a number has a magnitude less than the value set here, PSPP formats the number in scientific notation; otherwise, it formats it in standard notation. The default is 0.0001. Set a value of 0 to disable scientific notation. 

SUMMARY
    

The `SUMMARY` option sets the comment string which will appear in all generated tables until the next `SUMMARY` is issued. If the special value `NONE` is specified, then no comment will appear. These comment strings can be seen in the graphical user interface by placing the pointer over the table. If comment contains any of the following substrings, they will be subsituted as follows: 

`\n`
    

A line break. 

`)DATE`
    

The current date in the form ‘dd-mmm-yyyy’ 

`)ADATE`
    

The current date in the form ‘mm/dd/yyyy’ 

`)SDATE`
    

The current date in the form ‘yyyy/mm/dd’ 

`)EDATE`
    

The current date in the form ‘dd.mm.yyyy’ 

`)TIME`
    

The current 12 hour clock time in the form ‘hh:mm:ss’ 

`)ETIME`
    

The current 24 hour clock time in the form ‘hh:mm:ss’ 

WIB
    

PSPP extension to set the byte ordering (endianness) used for writing data in IB or PIB format (see [Binary and Hexadecimal Numeric Formats](Binary-and-Hexadecimal-Numeric-Formats.md)). In `MSBFIRST` ordering, the most-significant byte appears at the left end of a IB or PIB field. In `LSBFIRST` ordering, the least-significant byte appears at the left end. `VAX` ordering is like `MSBFIRST`, except that each pair of bytes is in reverse order. `NATIVE`, the default, is equivalent to `MSBFIRST` or `LSBFIRST` depending on the native format of the machine running PSPP. 

WRB
    

PSPP extension to set the floating-point format used for writing data in RB format (see [Binary and Hexadecimal Numeric Formats](Binary-and-Hexadecimal-Numeric-Formats.md)). The choices are the same as `SET RIB`. The default is `NATIVE`. 

In the PSPP text-based interface, the output routing subcommands affect where output is sent. The following values are allowed for each of these subcommands: 

OFF
NONE
    

Discard this kind of output. 

TERMINAL
    

Write this output to the terminal, but not to listing files and other output devices. 

LISTING
    

Write this output to listing files and other output devices, but not to the terminal. 

ON
BOTH
    

Write this type of output to all output devices. 

These output routing subcommands are: 

ERRORS
    

Applies to error and warning messages. The default is `BOTH`. 

MESSAGES
    

Applies to notes. The default is `BOTH`. 

PRINTBACK
    

Determines whether the syntax used for input is printed back as part of the output. The default is `NONE`. 

RESULTS
    

Applies to everything not in one of the above categories, such as the results of statistical procedures. The default is `BOTH`. 

These subcommands have no effect on output in the PSPP GUI environment. 

Output driver option subcommands affect output drivers’ settings. These subcommands are 

HEADERS
LENGTH
WIDTH
TNUMBERS
    

The `TNUMBERS` option sets the way in which values are displayed in output tables. The valid settings are `VALUES`, `LABELS` and `BOTH`. If `TNUMBERS` is set to `VALUES`, then all values are displayed with their literal value (which for a numeric value is a number and for a string value an alphanumeric string). If `TNUMBERS` is set to `LABELS`, then values are displayed using their assigned labels if any. (See [VALUE LABELS](VALUE-LABELS.md).) If the value has no label, then the literal value is used for display. If `TNUMBERS` is set to `BOTH`, then values are displayed with both their label (if any) and their literal value in parentheses. 

TVARS
    

The `TVARS` option sets the way in which variables are displayed in output tables. The valid settings are `NAMES`, `LABELS` and `BOTH`. If `TVARS` is set to `NAMES`, then all variables are displayed using their names. If `TVARS` is set to `LABELS`, then variables are displayed using their label if one has been set. If no label has been set, then the name is used. (See [VARIABLE LABELS](VARIABLE-LABELS.md).) If `TVARS` is set to `BOTH`, then variables are displayed with both their label (if any) and their name in parentheses. 

TLOOK
    

The `TLOOK` option sets the style used for subsequent table output. Specifying `NONE` makes PSPP use the default built-in style. Otherwise, specifying file makes PSPP search for an .stt or .tlo file in the same way as specifying \--table-look=file the PSPP command line (see [Main Options](Main-Options.md)). 

These subcommands affect journaling, also called logging. When journaling is enabled, PSPP writes the commands that it executes, plus any errors or other diagostics that it outputs, to a text file, called the _journal_ file. 

PSPP enables journaling by default when it runs interactively in a terminal or in the PSPPIRE GUI. In the GUI, use Edit → Options… to view or override the default location or to disable journaling. From syntax, use `SHOW JOURNAL` to see the journal’s location and whether it is enabled. 

JOURNAL
LOG
    

Specify `ON` to enable the journal and `OFF` to disable it. Specify a file name to set the name of the journal file. 

System file subcommands affect the default format of system files produced by PSPP. These subcommands are 

SCOMPRESSION
    

Whether system files created by `SAVE` or `XSAVE` are compressed by default. The default is `ON`. 

Security subcommands affect the operations that commands are allowed to perform. The security subcommands are 

SAFER
    

Setting this option disables the following operations: 

  * The `ERASE` command. 
  * The `HOST` command. 
  * The `PERMISSIONS` command. 
  * Pipes (file names beginning or ending with ‘|’). 

Be aware that this setting does not guarantee safety (commands can still overwrite files, for instance) but it is an improvement. When set, this setting cannot be reset during the same session, for obvious security reasons. 

LOCALE
    

This item is used to set the default character encoding. The encoding may be specified either as an encoding name or alias (see <http://www.iana.org/assignments/character-sets>), or as a locale name. If given as a locale name, only the character encoding of the locale is relevant. 

System files written by PSPP use this encoding. System files read by PSPP, for which the encoding is unknown, are interpreted using this encoding. 

The full list of valid encodings and locale names/alias are operating system dependent. The following are all examples of acceptable syntax on common GNU/Linux systems. 
    
    
    SET LOCALE='iso-8859-1'.
    
    SET LOCALE='ru_RU.cp1251'.
    
    SET LOCALE='japanese'.
    

Contrary to intuition, this command does not affect any aspect of the system’s locale. 

The following subcommands affect the interpretation of macros. 

MEXPAND
    

Controls whether macros are expanded. The default is ON. 

MPRINT
    

Controls whether the expansion of macros is included in output. This is separate from whether command syntax in general is included in output. The default is OFF. 

MITERATE
    

Limits the number of iterations executed in `!DO` loops within macros. This does not affect other language constructs such as `LOOP`. This must be set to a positive integer. The default is 1000\. 

MNEST
    

Limits the number of levels of nested macro expansions. This must be set to a positive integer. The default is 50. 

The following subcommands are not yet implemented, but PSPP accepts them and ignores the settings. 

BASETEXTDIRECTION
BLOCK
BOX
CACHE
CELLSBREAK
COMPRESSION
CMPTRANS
HEADER
