### 16.4 MATRIX
    
    
    MATRIX.
    … _matrix commands_ …
    END MATRIX.
    

The following basic matrix commands are supported: 
    
    
    COMPUTE _variable_[(_index_[,_index_])]=_expression_.
    CALL _procedure_(_argument_ , …).
    PRINT [_expression_]
          [/FORMAT=_format_]
          [/TITLE=_title_]
          [/SPACE={NEWPAGE _|_ _n_}]
          [{/RLABELS=_string_ … _|_ /RNAMES=_expression_}]
          [{/CLABELS=_string_ … _|_ /CNAMES=_expression_}].
    

The following matrix commands offer support for flow control: 
    
    
    DO IF _expression_.
      … _matrix commands_ …
    [ELSE IF _expression_.
      … _matrix commands_ …]…
    [ELSE
      … _matrix commands_ …]
    END IF.
    
    LOOP [_var_ =_first_ TO _last_ [BY _step_]] [IF _expression_].
      … _matrix commands_ …
    END LOOP [IF _expression_].
    
    BREAK.
    

The following matrix commands support matrix input and output: 
    
    
    READ _variable_[(_index_[,_index_])]
         [/FILE=_file_]
         /FIELD=_first_ TO _last_ [BY _width_]
         [/FORMAT=_format_]
         [/SIZE=_expression_]
         [/MODE={RECTANGULAR _|_ SYMMETRIC}]
         [/REREAD].
    WRITE _expression_
          [/OUTFILE=_file_]
          /FIELD=_first_ TO _last_ [BY _width_]
          [/MODE={RECTANGULAR _|_ TRIANGULAR}]
          [/HOLD]
          [/FORMAT=_format_].
    GET _variable_[(_index_[,_index_])]
        [/FILE={_file_ _|_ *}]
        [/VARIABLES=_variable_ …]
        [/NAMES=_expression_]
        [/MISSING={ACCEPT _|_ OMIT _|_ _number_}]
        [/SYSMIS={OMIT _|_ _number_}].
    SAVE _expression_
         [/OUTFILE={_file_ _|_ *}]
         [/VARIABLES=_variable_ …]
         [/NAMES=_expression_]
         [/STRINGS=_variable_ …].
    MGET [/FILE=_file_]
         [/TYPE={COV _|_ CORR _|_ MEAN _|_ STDDEV _|_ N _|_ COUNT}].
    MSAVE _expression_
          /TYPE={COV _|_ CORR _|_ MEAN _|_ STDDEV _|_ N _|_ COUNT}
          [/OUTFILE=_file_]
          [/VARIABLES=_variable_ …]
          [/SNAMES=_variable_ …]
          [/SPLIT=_expression_]
          [/FNAMES=_variable_ …]
          [/FACTOR=_expression_].
    

The following matrix commands provide additional support: 
    
    
    DISPLAY [{DICTIONARY _|_ STATUS}].
    RELEASE _variable_ ….
    

`MATRIX` and `END MATRIX` enclose a special PSPP sub-language, called the matrix language. The matrix language does not require an active dataset to be defined and only a few of the matrix language commands work with any datasets that are defined. Each instance of `MATRIX`…`END MATRIX` is a separate program whose state is independent of any instance, so that variables declared within a matrix program are forgotten at its end. 

The matrix language works with matrices, where a _matrix_ is a rectangular array of real numbers. An _n ×m_ matrix has n rows and m columns. Some special cases are important: a _n ×1_ matrix is a _column vector_ , a _1× n_ is a _row vector_ , and a _1×1_ matrix is a _scalar_. 

The matrix language also has limited support for matrices that contain 8-byte strings instead of numbers. Strings longer than 8 bytes are truncated, and shorter strings are padded with spaces. String matrices are mainly useful for labeling rows and columns when printing numerical matrices with the `MATRIX PRINT` command. Arithmetic operations on string matrices will not produce useful results. The user should not mix strings and numbers within a matrix. 

The matrix language does not work with cases. A variable in the matrix language represents a single matrix. 

The matrix language does not support missing values. 

`MATRIX` is a procedure, so it cannot be enclosed inside `DO IF`, `LOOP`, etc. 

Macros may be used within a matrix program, and macros may expand to include entire matrix programs. The `DEFINE` command may not appear within a matrix program. See [DEFINE](DEFINE.md), for more information about macros. 

The following sections describe the details of the matrix language: first, the syntax of matrix expressions, then each of the supported commands. The `COMMENT` command (see [COMMENT](COMMENT.md)) is also supported. 

| • Matrix Expressions |  |  |
| --- | --- | --- |
| • Matrix Functions |  |  |
| • The COMPUTE Command |  |  |
| • The CALL Command |  |  |
| • The PRINT Command |  |  |
| • The DO IF Command |  |  |
| • The LOOP and BREAK Commands |  |  |
| • The READ and WRITE Commands |  |  |
| • The GET Command |  |  |
| • The SAVE Command |  |  |
| • The MGET Command |  |  |
| • The MSAVE Command |  |  |
| • The DISPLAY Command |  |  |
| • The RELEASE Command |  |  |
