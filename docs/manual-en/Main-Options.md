### 3.1 Main Options

Here is a summary of all the options, grouped by type, followed by explanations in the same order. 

In the table, arguments to long options also apply to any corresponding short options. 

_Non-option arguments_
    
    
    
    syntax-file
    

_Output options_
    
    
    
    -o, --output=output-file
    -O option=value
    -O format=format
    -O device={terminal|listing}
    --no-output
    --table-look=file
    -e, --error-file=error-file
    

_Language options_
    
    
    
    -I, --include=dir
    -I-, --no-include
    -b, --batch
    -i, --interactive
    -r, --no-statrc
    -a, --algorithm={compatible|enhanced}
    -x, --syntax={compatible|enhanced}
    --syntax-encoding=encoding
    

_Informational options_
    
    
    
    -h, --help
    -V, --version
    

_Other options_
    
    
    
    -s, --safer
    --testing-mode
    

syntax-file
    

Read and execute the named syntax file. If no syntax files are specified, PSPP prompts for commands. If any syntax files are specified, PSPP by default exits after it runs them, but you may make it prompt for commands by specifying ‘-’ as an additional syntax file. 

-o output-file
    

Write output to output-file. PSPP has several different output drivers that support output in various formats (use \--help to list the available formats). Specify this option more than once to produce multiple output files, presumably in different formats. 

Use ‘-’ as output-file to write output to standard output. 

If no -o option is used, then PSPP writes text and CSV output to standard output and other kinds of output to whose name is based on the format, _e.g._ pspp.pdf for PDF output. 

-O option=value
    

Sets an option for the output file configured by a preceding -o. Most options are specific to particular output formats. A few options that apply generically are listed below. 

-O format=format
    

PSPP uses the extension of the file name given on -o to select an output format. Use this option to override this choice by specifying an alternate format, _e.g._ -o pspp.out -O format=html to write HTML to a file named pspp.out. Use \--help to list the available formats. 

-O device={terminal|listing}
    

Sets whether PSPP considers the output device configured by the preceding -o to be a terminal or a listing device. This affects what output will be sent to the device, as configured by the SET command’s output routing subcommands (see [SET](SET.md)). By default, output written to standard output is considered a terminal device and other output is considered a listing device. 

\--no-output
    

Disables output entirely, if neither -o nor -O is also used. If one of those options is used, \--no-output has no effect. 

\--table-look=file
    

Reads a table style from file and applies it to all PSPP table output. The file should be a TableLook .stt or .tlo file. PSPP searches for file in the current directory, then in .pspp/looks in the user’s home directory, then in a looks subdirectory inside PSPP’s data directory (usually /usr/local/share/pspp). If PSPP cannot find file under the given name, it also tries adding a .stt extension. 

When this option is not specified, PSPP looks for default.stt using the algorithm above, and otherwise it falls back to a default built-in style. 

Using `SET TLOOK` in PSPP syntax overrides the style set on the command line (see [SET](SET.md)). 

-e error-file
\--error-file=error-file
    

Configures a file to receive PSPP error, warning, and note messages in plain text format. Use ‘-’ as error-file to write messages to standard output. The default error file is standard output in the absence of these options, but this is suppressed if an output device writes to standard output (or another terminal), to avoid printing every message twice. Use ‘none’ as error-file to explicitly suppress the default. 

-I dir
\--include=dir
    

Appends dir to the set of directories searched by the `INCLUDE` (see [INCLUDE](INCLUDE.md)) and `INSERT` (see [INSERT](INSERT.md)) commands. 

-I-
\--no-include
    

Clears all directories from the include path, including directories inserted in the include path by default. The default include path is . (the current directory), followed by .pspp in the user’s home directory, followed by PSPP’s system configuration directory (usually /etc/pspp or /usr/local/etc/pspp). 

-b
\--batch
-i
\--interactive
    

These options forces syntax files to be interpreted in batch mode or interactive mode, respectively, rather than the default “auto” mode. See [Syntax Variants](Syntax-Variants.md), for a description of the differences. 

-r
\--no-statrc
    

By default, at startup PSPP searches for a file named rc in the include path (described above) and, if it finds one, runs the commands in it. This option disables this behavior. 

-a {enhanced|compatible}
\--algorithm={enhanced|compatible}
    

With `enhanced`, the default, PSPP uses the best implemented algorithms for statistical procedures. With `compatible`, however, PSPP will in some cases use inferior algorithms to produce the same results as the proprietary program SPSS. 

Some commands have subcommands that override this setting on a per command basis. 

-x {enhanced|compatible}
\--syntax={enhanced|compatible}
    

With `enhanced`, the default, PSPP accepts its own extensions beyond those compatible with the proprietary program SPSS. With `compatible`, PSPP rejects syntax that uses these extensions. 

\--syntax-encoding=encoding
    

Specifies encoding as the encoding for syntax files named on the command line. The encoding also becomes the default encoding for other syntax files read during the PSPP session by the `INCLUDE` and `INSERT` commands. See [INSERT](INSERT.md), for the accepted forms of encoding. 

\--help
    

Prints a message describing PSPP command-line syntax and the available device formats, then exits. 

-V
\--version
    

Prints a brief message listing PSPP’s version, warranties you don’t have, copying conditions and copyright, and e-mail address for bug reports, then exits. 

-s
\--safer
    

Disables certain unsafe operations. This includes the `ERASE` and `HOST` commands, as well as use of pipes as input and output files. 

\--testing-mode
    

Invoke heuristics to assist with testing PSPP. For use by `make check` and similar scripts.
