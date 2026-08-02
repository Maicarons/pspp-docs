#### 16.4.8.2 The `WRITE` Command
    
    
    WRITE _expression_
          [/OUTFILE=_file_]
          /FIELD=_first_ TO _last_ [BY _width_]
          [/FORMAT=_format_]
          [/MODE={RECTANGULAR _|_ TRIANGULAR}]
          [/HOLD].
    

The `WRITE` command evaluates _expression_ and writes its value to a text file in a specified format. Write the expression to evaluate just after the command name. 

The `OUTFILE` subcommand is required in the first `WRITE` command that appears within `MATRIX`. It specifies the text file to be written, either as a file name in quotes or a file handle previously declared on `FILE HANDLE` (see [FILE HANDLE](FILE-HANDLE.md)). Later `WRITE` commands (in syntax order) use the previous referenced file if `FILE` is omitted. 

The `FIELD` and `FORMAT` subcommands specify how output lines are formed. `FIELD` is required, but `FORMAT` is optional. See [Matrix READ and WRITE Commands](Matrix-READ-and-WRITE-Commands.md), for details. 

By default, or with `MODE=RECTANGULAR`, the command writes an entry for every row and column. With `MODE=TRIANGULAR`, the command writes only the entries on and below the matrix’s main diagonal. Entries above the diagonal are not written. Only square matrices may be written with `MODE=TRIANGULAR`. 

Ordinarily, each `WRITE` command writes complete lines to the output file. With `HOLD`, the final line written by `WRITE` will be held back for the next `WRITE` command to augment. This can be useful to write more than one matrix on a single output line. 

#### Example 1: Basic Usage

This matrix program: 
    
    
    WRITE {1, 2; 3, 4} /OUTFILE='matrix.txt' /FIELD=1 TO 80.
    

writes the following to matrix.txt: 
    
    
     1 2
     3 4
    

#### Example 2: Triangular Matrix

This matrix program: 
    
    
    WRITE MAGIC(5) /OUTFILE='matrix.txt' /FIELD=1 TO 80 BY 5 /MODE=TRIANGULAR.
    

writes the following to matrix.txt: 
    
    
        17
        23    5
         4    6   13
        10   12   19   21
        11   18   25    2    9
