## 18 Invoking `pspp-convert`

`pspp-convert` is a command-line utility accompanying PSPP. It reads an SPSS or SPSS/PC+ system file or SPSS portable file or encrypted SPSS syntax file input and writes a copy of it to another output in a different format. Synopsis: 
    
    
    pspp-convert [options] input output
    
    pspp-convert --help
    
    pspp-convert --version
    

The format of input is automatically detected, when possible. The character encoding of old SPSS system files cannot always be guessed correctly, and SPSS/PC+ system files do not include any indication of their encoding. Use `-e encoding` to specify the encoding in this case. 

By default, the intended format for output is inferred based on its extension: 

`csv`
`txt`
    

Comma-separated value. Each value is formatted according to its variable’s print format. The first line in the file contains variable names. 

`sav`
`sys`
    

SPSS system file. 

`por`
    

SPSS portable file. 

`sps`
    

SPSS syntax file. (Only encrypted syntax files may be converted to this format.) 

`pspp-convert` can convert most input formats to most output formats. Encrypted SPSS file formats are exceptions: if the input file is in an encrypted format, then the output file will be the same format (decrypted). To decrypt such a file, specify the encrypted file as input. The output will be the equivalent plaintext file. Options for the output format are ignored in this case. 

The password for encrypted files can be specified a few different ways. If the password is known, use the -p option (documented below) or allow `pspp-convert` to prompt for it. If the password is unknown, use the -a and -l options to specify how to search for it, or \--password-list to specify a file of passwords to try. 

Use `-O format` to override the inferred format or to specify the format for unrecognized extensions. 

`pspp-convert` accepts the following general options: 

-O format
\--output-format=format
    

Sets the output format, where format is one of the extensions listed above, _e.g._ : -O csv. Use \--help to list the supported output formats. 

-c maxcases
\--cases=maxcases
    

By default, all cases are copied from input to output. Specifying this option to limit the number of cases written to output to maxcases. 

-e charset
\--encoding=charset
    

Overrides the encoding in which character strings in input are interpreted. This option is necessary because old SPSS system files, and SPSS/PC+ system files, do not self-identify their encoding. 

-k variable…
\--keep=variable…
    

By default, `pspp-convert` includes all the variables from the input file. Use this option to list specific variables to include; any variables not listed will be dropped. The variables in the output file will also be reordered into the given order. The variable list may use `TO` in the same way as in PSPP syntax, _e.g._ if the dictionary contains consecutive variables `a`, `b`, `c`, and `d`, then \--keep='a to d' will include all of them (and no others). 

-d variable…
\--drop=variable…
    

Drops the specified variables from the output. 

When \--keep and \--drop are used together, \--keep is processed first. 

-h
\--help
    

Prints a usage message on stdout and exits. 

-v
\--version
    

Prints version information on stdout and exits. 

The following options affect CSV output: 

\--recode
    

By default, `pspp-convert` writes user-missing values to CSV output files as their regular values. With this option, `pspp-convert` recodes them to system-missing values (which are written as a single space). 

\--no-var-names
    

By default, `pspp-convert` writes the variable names as the first line of output. With this option, `pspp-convert` omits this line. 

\--labels
    

By default, `pspp-convert` writes variables’ values to CSV output files. With this option, `pspp-convert` writes value labels. 

\--print-formats
    

By default, `pspp-convert` writes numeric variables as plain numbers. This option makes `pspp-convert` honor variables’ print formats. 

\--decimal=decimal
    

This option sets the character used as a decimal point in output. The default is ‘.’. 

\--delimiter=delimiter
    

This option sets the character used to separate fields in output. The default is ‘,’, unless the decimal point is ‘,’, in which case ‘;’ is used. 

\--qualifier=qualifier
    

The option sets the character used to quote fields that contain the delimiter. The default is ‘"’. 

The following options specify how to obtain the password for encrypted files: 

-p password
\--password=password
    

Specifies the password to use to decrypt an encrypted SPSS system file or syntax file. If this option is not specified, `pspp-convert` will prompt interactively for the password as necessary. 

Be aware that command-line options, including passwords, may be visible to other users on multiuser systems. 

When used with -a (or \--password-alphabet) and -l (or \--password-length), this option specifies the starting point for the search. This can be used to restart a search that was interrupted. 

-a alphabet
\--password-alphabet=alphabet
    

Specifies the alphabet of symbols over which to search for an encrypted file’s password. alphabet may include individual characters and ranges delimited by ‘-’. For example, -a a-z searches lowercase letters, -a A-Z0-9 searches uppercase letters and digits, and -a ' -~' searches all printable ASCII characters. 

-l max-length
\--password-length=max-length
    

Specifies the maximum length of the passwords to try. 

\--password-list=file
    

Specifies a file to read containing a list of passwords to try, one per line. If file is -, reads from stdin.
