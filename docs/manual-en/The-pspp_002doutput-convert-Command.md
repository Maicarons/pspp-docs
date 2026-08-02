### 19.3 The `convert` Command
    
    
    pspp-output [options] convert source destination
    

Reads SPV file source and converts it to another format, writing the output to destination. 

By default, the intended format for destination is inferred based on its extension, in the same way that the `pspp` program does for its output files. See [Invoking PSPP](Invoking-PSPP.md), for details. 

See [Input Selection Options](Input-Selection-Options.md), for information on the options available to select a subset of objects to include in the output. The following additional options are accepted: 

-O format=format
    

Overrides the format inferred from the output file’s extension. Use \--help to list the available formats. See [Invoking PSPP](Invoking-PSPP.md), for details of the available output formats. 

-O option=value
    

Sets an option for the output file format. See [Invoking PSPP](Invoking-PSPP.md), for details of the available output options. 

-F
\--force
    

By default, if the source is corrupt or otherwise cannot be processed, the destination is not written. With -F or \--force, the destination is written as best it can, even with errors. 

\--table-look=file
    

Reads a table style from file and applies it to all of the output tables. The file should be a TableLook .stt or .tlo file. 

\--use-page-setup
    

By default, the `convert` command uses the default page setup (for example, page size and margins) for destination, or the one specified with -O options, if any. Specify this option to ignore these sources of page setup in favor of the one embedded in the SPV, if any.
