#### 9.4.3.1 Reading Delimited Data
    
    
    GET DATA /TYPE=TXT
            /FILE={’file_name’,file_handle}
            [/ARRANGEMENT={DELIMITED,FIXED}]
            [/FIRSTCASE={first_case}]
            [/IMPORTCASE={ALL,FIRST max_cases,PERCENT percent}]
    
            /DELIMITERS="delimiters"
            [/QUALIFIER="quotes"
            [/DELCASE={LINE,VARIABLES n_variables}]
            /VARIABLES=del_var1 [del_var2]…
    where each del_var takes the form:
            variable format
    

The GET DATA command with TYPE=TXT and ARRANGEMENT=DELIMITED reads input data from text files in delimited format, where fields are separated by a set of user-specified delimiters. Its capabilities are similar to those of DATA LIST FREE (see [DATA LIST FREE](DATA-LIST-FREE.md)), with a few enhancements. 

The required `FILE` subcommand and optional `FIRSTCASE` and `IMPORTCASE` subcommands are described above (see [GET DATA /TYPE=TXT](GET-DATA-_002fTYPE_003dTXT.md)). 

`DELIMITERS`, which is required, specifies the set of characters that may separate fields. Each character in the string specified on `DELIMITERS` separates one field from the next. The end of a line also separates fields, regardless of `DELIMITERS`. Two consecutive delimiters in the input yield an empty field, as does a delimiter at the end of a line. A space character as a delimiter is an exception: consecutive spaces do not yield an empty field and neither does any number of spaces at the end of a line. 

To use a tab as a delimiter, specify ‘\t’ at the beginning of the `DELIMITERS` string. To use a backslash as a delimiter, specify ‘\\\’ as the first delimiter or, if a tab should also be a delimiter, immediately following ‘\t’. To read a data file in which each field appears on a separate line, specify the empty string for `DELIMITERS`. 

The optional `QUALIFIER` subcommand names one or more characters that can be used to quote values within fields in the input. A field that begins with one of the specified quote characters ends at the next matching quote. Intervening delimiters become part of the field, instead of terminating it. The ability to specify more than one quote character is a PSPP extension. 

The character specified on `QUALIFIER` can be embedded within a field that it quotes by doubling the qualifier. For example, if ‘'’ is specified on `QUALIFIER`, then `'a''b'` specifies a field that contains ‘a'b’. 

The `DELCASE` subcommand controls how data may be broken across lines in the data file. With LINE, the default setting, each line must contain all the data for exactly one case. For additional flexibility, to allow a single case to be split among lines or multiple cases to be contained on a single line, specify VARIABLES _n_variables_ , where _n_variables_ is the number of variables per case. 

The `VARIABLES` subcommand is required and must be the last subcommand. Specify the name of each variable and its input format (see [Input and Output Formats](Input-and-Output-Formats.md)) in the order they should be read from the input file. 

#### Examples

On a Unix-like system, the ‘/etc/passwd’ file has a format similar to this: 
    
    
    root:$1$nyeSP5gD$pDq/:0:0:,,,:/root:/bin/bash
    blp:$1$BrP/pFg4$g7OG:1000:1000:Ben Pfaff,,,:/home/blp:/bin/bash
    john:$1$JBuq/Fioq$g4A:1001:1001:John Darrington,,,:/home/john:/bin/bash
    jhs:$1$D3li4hPL$88X1:1002:1002:Jason Stover,,,:/home/jhs:/bin/csh
    

The following syntax reads a file in the format used by ‘/etc/passwd’: 
    
    
    GET DATA /TYPE=TXT /FILE='/etc/passwd' /DELIMITERS=':'
            /VARIABLES=username A20
                       password A40
                       uid F10
                       gid F10
                       gecos A40
                       home A40
                       shell A40.
    

Consider the following data on used cars: 
    
    
    model   year    mileage price   type    age
    Civic   2002    29883   15900   Si      2
    Civic   2003    13415   15900   EX      1
    Civic   1992    107000  3800    n/a     12
    Accord  2002    26613   17900   EX      1
    

The following syntax can be used to read the used car data: 
    
    
    GET DATA /TYPE=TXT /FILE='cars.data' /DELIMITERS=' ' /FIRSTCASE=2
            /VARIABLES=model A8
                       year F4
                       mileage F6
                       price F5
                       type A4
                       age F2.
    

Consider the following information on animals in a pet store: 
    
    
    'Pet''s Name', "Age", "Color", "Date Received", "Price", "Height", "Type"
    , (Years), , , (Dollars), ,
    "Rover", 4.5, Brown, "12 Feb 2004", 80, '1''4"', "Dog"
    "Charlie", , Gold, "5 Apr 2007", 12.3, "3""", "Fish"
    "Molly", 2, Black, "12 Dec 2006", 25, '5"', "Cat"
    "Gilly", , White, "10 Apr 2007", 10, "3""", "Guinea Pig"
    

The following syntax can be used to read the pet store data: 
    
    
    GET DATA /TYPE=TXT /FILE='pets.data' /DELIMITERS=', ' /QUALIFIER='''"' /ESCAPE
            /FIRSTCASE=3
            /VARIABLES=name A10
                       age F3.1
                       color A5
                       received EDATE10
                       price F5.2
                       height a5
                       type a10.
