#### 16.4.8.1 The `READ` Command
    
    
    READ _variable_[(_index_[,_index_])]
         [/FILE=_file_]
         /FIELD=_first_ TO _last_ [BY _width_]
         [/FORMAT=_format_]
         [/SIZE=_expression_]
         [/MODE={RECTANGULAR _|_ SYMMETRIC}]
         [/REREAD].
    

The `READ` command reads from a text file into a matrix variable. Specify the target variable just after the command name, either just a variable name to create or replace an entire variable, or a variable name followed by an indexing expression to replace a submatrix of an existing variable. 

The `FILE` subcommand is required in the first `READ` command that appears within `MATRIX`. It specifies the text file to be read, either as a file name in quotes or a file handle previously declared on `FILE HANDLE` (see [FILE HANDLE](FILE-HANDLE.md)). Later `READ` commands (in syntax order) use the previous referenced file if `FILE` is omitted. 

The `FIELD` and `FORMAT` subcommands specify how input lines are interpreted. `FIELD` is required, but `FORMAT` is optional. See [Matrix READ and WRITE Commands](Matrix-READ-and-WRITE-Commands.md), for details. 

The `SIZE` subcommand is required for reading into an entire variable. Its restricted expression argument should evaluate to a 2-element vector `{n, m}` or `{n; m}`, which indicates a _n ×m_ matrix destination. A scalar n is also allowed and indicates a _n ×1_ column vector destination. When the destination is a submatrix, `SIZE` is optional, and if it is present then it must match the size of the submatrix. 

By default, or with `MODE=RECTANGULAR`, the command reads an entry for every row and column. With `MODE=SYMMETRIC`, the command reads only the entries on and below the matrix’s main diagonal, and copies the entries above the main diagonal from the corresponding symmetric entries below it. Only square matrices may use `MODE=SYMMETRIC`. 

Ordinarily, each `READ` command starts from a new line in the text file. Specify the `REREAD` subcommand to instead start from the last line read by the previous `READ` command. This has no effect for the first `READ` command to read from a particular file. It is also ineffective just after a command that uses the `EOF` matrix function (see [EOF Matrix Function](Matrix-EOF-Function.md#EOF-Matrix-Function)) on a particular file, because `EOF` has to try to read the next line from the file to determine whether the file contains more input. 

#### Example 1: Basic Use

The following matrix program reads the same matrix `{1, 2, 4; 2, 3, 5; 4, 5, 6}` into matrix variables `v`, `w`, and `x`: 
    
    
    READ v /FILE='input.txt' /FIELD=1 TO 100 /SIZE={3, 3}.
    READ w /FIELD=1 TO 100 /SIZE={3; 3} /MODE=SYMMETRIC.
    READ x /FIELD=1 TO 100 BY 1/SIZE={3, 3} /MODE=SYMMETRIC.
    

given that input.txt contains the following: 
    
    
    1, 2, 4
    2, 3, 5
    4, 5, 6
    1
    2 3
    4 5 6
    1
    23
    456
    

The `READ` command will read as many lines of input as needed for a particular row, so it’s also acceptable to break any of the lines above into multiple lines. For example, the first line `1, 2, 4` could be written with a line break following either or both commas. 

#### Example 2: Reading into a Submatrix

The following reads a _5×5_ matrix from input2.txt, reversing the order of the rows: 
    
    
    COMPUTE m = MAKE(5, 5, 0).
    LOOP r = 5 TO 1 BY -1.
      READ m(r, :) /FILE='input2.txt' /FIELD=1 TO 100.
    END LOOP.
    

#### Example 3: Using `REREAD`

Suppose each of the 5 lines in a file input3.txt starts with an integer count followed by count numbers, e.g.: 
    
    
    1 5
    3 1 2 3
    5 6 -1 2 5 1
    2 8 9
    3 1 3 2
    

Then, the following reads this file into a matrix `m`: 
    
    
    COMPUTE m = MAKE(5, 5, 0).
    LOOP i = 1 TO 5.
      READ count /FILE='input3.txt' /FIELD=1 TO 1 /SIZE=1.
      READ m(i, 1:count) /FIELD=3 TO 100 /REREAD.
    END LOOP.
