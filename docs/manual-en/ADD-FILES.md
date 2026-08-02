### 10.2 ADD FILES
    
    
    ADD FILES
    
    Per input file:
            /FILE={*,’file_name’}
            [/RENAME=(src_names=target_names)…]
            [/IN=var_name]
            [/SORT]
    
    Once per command:
            [/BY var_list[({D|A})] [var_list[({D|A})]…]]
            [/DROP=var_list]
            [/KEEP=var_list]
            [/FIRST=var_name]
            [/LAST=var_name]
            [/MAP]
    

`ADD FILES` adds cases from multiple input files. The output, which replaces the active dataset, consists all of the cases in all of the input files. 

`ADD FILES` shares the bulk of its syntax with other PSPP commands for combining multiple data files. See [Combining Files Common Syntax](Combining-Files-Common-Syntax.md), above, for an explanation of this common syntax. 

When `BY` is not used, the output of `ADD FILES` consists of all the cases from the first input file specified, followed by all the cases from the second file specified, and so on. When `BY` is used, the output is additionally sorted on the `BY` variables. 

When `ADD FILES` creates an output case, variables that are not part of the input file from which the case was drawn are set to the system-missing value for numeric variables or spaces for string variables.
