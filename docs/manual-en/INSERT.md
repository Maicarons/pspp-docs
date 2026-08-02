### 17.16 INSERT
    
    
         INSERT [FILE=]’file_name’
            [CD={NO,YES}]
            [ERROR={CONTINUE,STOP}]
            [SYNTAX={BATCH,INTERACTIVE}]
            [ENCODING={LOCALE, ’charset_name’}].
    

`INSERT` is similar to `INCLUDE` (see [INCLUDE](INCLUDE.md)) but somewhat more flexible. It causes the command processor to read a file as if it were embedded in the current command file. 

If `CD=YES` is specified, then before including the file, the current directory becomes the directory of the included file. The default setting is ‘CD=NO’. Note that this directory remains current until it is changed explicitly (with the `CD` command, or a subsequent `INSERT` command with the ‘CD=YES’ option). It does not revert to its original setting even after the included file is finished processing. 

If `ERROR=STOP` is specified, errors encountered in the inserted file causes processing to immediately cease. Otherwise processing continues at the next command. The default setting is `ERROR=CONTINUE`. 

If `SYNTAX=INTERACTIVE` is specified then the syntax contained in the included file must conform to interactive syntax conventions. See [Syntax Variants](Syntax-Variants.md). The default setting is `SYNTAX=BATCH`. 

`ENCODING` optionally specifies the character set used by the included file. Its argument, which is not case-sensitive, must be in one of the following forms: 

`LOCALE`
    

The encoding used by the system locale, or as overridden by the `SET` command (see [SET](SET.md)). On GNU/Linux and other Unix-like systems, environment variables, _e.g._ `LANG` or `LC_ALL`, determine the system locale. 

charset_name
    

One of the character set names listed by IANA at <http://www.iana.org/assignments/character-sets>. Some examples are `ASCII` (United States), `ISO-8859-1` (western Europe), `EUC-JP` (Japan), and `windows-1252` (Windows). Not all systems support all character sets. 

`Auto,encoding`
    

Automatically detects whether a syntax file is encoded in an Unicode encoding such as UTF-8, UTF-16, or UTF-32. If it is not, then PSPP generally assumes that the file is encoded in encoding (an IANA character set name). However, if encoding is UTF-8, and the syntax file is not valid UTF-8, PSPP instead assumes that the file is encoded in `windows-1252`. 

For best results, encoding should be an ASCII-compatible encoding (the most common locale encodings are all ASCII-compatible), because encodings that are not ASCII compatible cannot be automatically distinguished from UTF-8. 

`Auto`
`Auto,Locale`
    

Automatic detection, as above, with the default encoding taken from the system locale or the setting on `SET LOCALE`. 

When ENCODING is not specified, the default is taken from the \--syntax-encoding command option, if it was specified, and otherwise it is `Auto`.
