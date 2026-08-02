### 6.4 Types of Commands

Commands in PSPP are divided roughly into six categories: 

**Utility commands**
    

Set or display various global options that affect PSPP operations. May appear anywhere in a syntax file. See [Utility commands](Utilities.md). 

**File definition commands**
    

Give instructions for reading data from text files or from special binary “system files”. Most of these commands replace any previous data or variables with new data or variables. At least one file definition command must appear before the first command in any of the categories below. See [Data Input and Output](Data-Input-and-Output.md). 

**Input program commands**
    

Though rarely used, these provide tools for reading data files in arbitrary textual or binary formats. See [INPUT PROGRAM](INPUT-PROGRAM.md). 

**Transformations**
    

Perform operations on data and write data to output files. Transformations are not carried out until a procedure is executed. 

**Restricted transformations**
    

Transformations that cannot appear in certain contexts. See [Order of Commands](Order-of-Commands.md), for details. 

**Procedures**
    

Analyze data, writing results of analyses to the listing file. Cause transformations specified earlier in the file to be performed. In a more general sense, a _procedure_ is any command that causes the active dataset (the data) to be read.
