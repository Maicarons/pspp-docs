### 10.1 Common Syntax
    
    
    Per input file:
            /FILE={*,’file_name’}
            [/RENAME=(src_names=target_names)…]
            [/IN=var_name]
            [/SORT]
    
    Once per command:
            /BY var_list[({D|A})] [var_list[({D|A}]]…
            [/DROP=var_list]
            [/KEEP=var_list]
            [/FIRST=var_name]
            [/LAST=var_name]
            [/MAP]
    

This section describes the syntactical features in common among the `ADD FILES`, `MATCH FILES`, and `UPDATE` commands. The following sections describe details specific to each command. 

Each of these commands reads two or more input files and combines them. The command’s output becomes the new active dataset. None of the commands actually change the input files. Therefore, if you want the changes to become permanent, you must explicitly save them using an appropriate procedure or transformation (see [System and Portable File IO](System-and-Portable-File-IO.md)). 

The syntax of each command begins with a specification of the files to be read as input. For each input file, specify FILE with a system file or portable file’s name as a string, a dataset (see [Datasets](Datasets.md)) or file handle name, (see [File Handles](File-Handles.md)), or an asterisk (‘*’) to use the active dataset as input. Use of portable files on `FILE` is a PSPP extension. 

At least two `FILE` subcommands must be specified. If the active dataset is used as an input source, then `TEMPORARY` must not be in effect. 

Each `FILE` subcommand may be followed by any number of `RENAME` subcommands that specify a parenthesized group or groups of variable names as they appear in the input file, followed by those variables’ new names, separated by an equals sign (`=`), _e.g._ `/RENAME=(OLD1=NEW1)(OLD2=NEW2)`. To rename a single variable, the parentheses may be omitted: `/RENAME=old=new`. Within a parenthesized group, variables are renamed simultaneously, so that `/RENAME=(A B=B A)` exchanges the names of variables A and B. Otherwise, renaming occurs in left-to-right order. 

Each `FILE` subcommand may optionally be followed by a single `IN` subcommand, which creates a numeric variable with the specified name and format F1.0. The IN variable takes value 1 in an output case if the given input file contributed to that output case, and 0 otherwise. The `DROP`, `KEEP`, and `RENAME` subcommands have no effect on IN variables. 

If `BY` is used (see below), the `SORT` keyword must be specified after a `FILE` if that input file is not already sorted on the `BY` variables. When `SORT` is specified, PSPP sorts the input file’s data on the `BY` variables before it applies it to the command. When `SORT` is used, `BY` is required. `SORT` is a PSPP extension. 

PSPP merges the dictionaries of all of the input files to form the dictionary of the new active dataset, like so: 

  * The variables in the new active dataset are the union of all the input files’ variables, matched based on their name. When a single input file contains a variable with a given name, the output file will contain exactly that variable. When more than one input file contains a variable with a given name, those variables must be all string or all numeric. If they are string variables, then the result will have the width of the longest variable with that name, with narrower values padded on the right with spaces to fill the width. Variables are matched after renaming with the `RENAME` subcommand. Thus, `RENAME` can be used to resolve conflicts. Only variables in the output file can conflict, so `DROP` or `KEEP`, as described below, can also resolve a conflict. 
  * The variable label for each output variable is taken from the first specified input file that has a variable label for that variable, and similarly for value labels and missing values. 
  * The file label of the new active dataset (see [FILE LABEL](FILE-LABEL.md)) is that of the first specified `FILE` that has a file label. 
  * The documents in the new active dataset (see [DOCUMENT](DOCUMENT.md)) are the concatenation of all the input files’ documents, in the order in which the `FILE` subcommands are specified. 
  * If all of the input files are weighted on the same variable, then the new active dataset is weighted on that variable. Otherwise, the new active dataset is not weighted. 

The remaining subcommands apply to the output file as a whole, rather than to individual input files. They must be specified at the end of the command specification, following all of the `FILE` and related subcommands. The most important of these subcommands is `BY`, which specifies a set of one or more variables that may be used to find corresponding cases in each of the input files. The variables specified on `BY` must be present in all of the input files. Furthermore, if any of the input files are not sorted on the `BY` variables, then `SORT` must be specified for those input files. 

The variables listed on `BY` may include (A) or (D) annotations to specify ascending or descending sort order. See [SORT CASES](SORT-CASES.md), for more details on this notation. Adding (A) or (D) to the `BY` subcommand specification is a PSPP extension. 

The `DROP` subcommand can be used to specify a list of variables to exclude from the output. By contrast, the `KEEP` subcommand can be used to specify variables to include in the output; all variables not listed are dropped. `DROP` and `KEEP` are executed in left-to-right order and may be repeated any number of times. `DROP` and `KEEP` do not affect variables created by the `IN`, `FIRST`, and `LAST` subcommands, which are always included in the new active dataset, but they can be used to drop `BY` variables. 

The `FIRST` and `LAST` subcommands are optional. They may only be specified on `MATCH FILES` and `ADD FILES`, and only when `BY` is used. `FIRST` and `LIST` each adds a numeric variable to the new active dataset, with the name given as the subcommand’s argument and F1.0 print and write formats. The value of the `FIRST` variable is 1 in the first output case with a given set of values for the `BY` variables, and 0 in other cases. Similarly, the `LAST` variable is 1 in the last case with a given of `BY` values, and 0 in other cases. 

When any of these commands creates an output case, variables that are only in files that are not present for the current case are set to the system-missing value for numeric variables or spaces for string variables. 

These commands may combine any number of files, limited only by the machine’s memory.
