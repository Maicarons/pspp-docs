#### 9.8.1 Writing Comma- and Tab-Separated Data Files
    
    
    SAVE TRANSLATE
            /OUTFILE={’file_name’,file_handle}
            /TYPE=CSV
            [/REPLACE]
            [/MISSING={IGNORE,RECODE}]
    
            [/DROP=var_list]
            [/KEEP=var_list]
            [/RENAME=(src_names=target_names)…]
            [/UNSELECTED={RETAIN,DELETE}]
    
            [/FIELDNAMES]
            [/CELLS={VALUES,LABELS}]
            [/TEXTOPTIONS DELIMITER=’delimiter’]
            [/TEXTOPTIONS QUALIFIER=’qualifier’]
            [/TEXTOPTIONS DECIMAL={DOT,COMMA}]
            [/TEXTOPTIONS FORMAT={PLAIN,VARIABLE}]
    

The SAVE TRANSLATE command with TYPE=CSV or TYPE=TAB writes data in a comma- or tab-separated value format similar to that described by RFC 4180. Each variable becomes one output column, and each case becomes one line of output. If FIELDNAMES is specified, an additional line at the top of the output file lists variable names. 

The CELLS and TEXTOPTIONS FORMAT settings determine how values are written to the output file: 

CELLS=VALUES FORMAT=PLAIN (the default settings)
    

Writes variables to the output in “plain” formats that ignore the details of variable formats. Numeric values are written as plain decimal numbers with enough digits to indicate their exact values in machine representation. Numeric values include ‘e’ followed by an exponent if the exponent value would be less than -4 or greater than 16. Dates are written in MM/DD/YYYY format and times in HH:MM:SS format. WKDAY and MONTH values are written as decimal numbers. 

Numeric values use, by default, the decimal point character set with SET DECIMAL (see [SET DECIMAL](SET.md#SET-DECIMAL)). Use DECIMAL=DOT or DECIMAL=COMMA to force a particular decimal point character. 

CELLS=VALUES FORMAT=VARIABLE
    

Writes variables using their print formats. Leading and trailing spaces are removed from numeric values, and trailing spaces are removed from string values. 

CELLS=LABEL FORMAT=PLAIN
CELLS=LABEL FORMAT=VARIABLE
    

Writes value labels where they exist, and otherwise writes the values themselves as described above. 

Regardless of CELLS and TEXTOPTIONS FORMAT, numeric system-missing values are output as a single space. 

For TYPE=TAB, tab characters delimit values. For TYPE=CSV, the TEXTOPTIONS DELIMITER and DECIMAL settings determine the character that separate values within a line. If DELIMITER is specified, then the specified string separate values. If DELIMITER is not specified, then the default is a comma with DECIMAL=DOT or a semicolon with DECIMAL=COMMA. If DECIMAL is not given either, it is implied by the decimal point character set with SET DECIMAL (see [SET DECIMAL](SET.md#SET-DECIMAL)). 

The TEXTOPTIONS QUALIFIER setting specifies a character that is output before and after a value that contains the delimiter character or the qualifier character. The default is a double quote (‘"’). A qualifier character that appears within a value is doubled.
