## 8 Data Input and Output

Data are the focus of the PSPP language. Each datum belongs to a _case_ (also called an _observation_). Each case represents an individual or “experimental unit”. For example, in the results of a survey, the names of the respondents, their sex, age, etc. and their responses are all data and the data pertaining to single respondent is a case. This chapter examines the PSPP commands for defining variables and reading and writing data. There are alternative commands to read data from predefined sources such as system files or databases (See [GET DATA](GET.md).) 

> **Note:** These commands tell PSPP how to read data, but the data will not actually be read until a procedure is executed. 

| • BEGIN DATA |  | Embed data within a syntax file. |
| --- | --- | --- |
| • CLOSE FILE HANDLE |  | Close a file handle. |
| • DATAFILE ATTRIBUTE |  | Set custom attributes on data files. |
| • DATASET |  | Manage multiple datasets. |
| • DATA LIST |  | Fundamental data reading command. |
| • END CASE |  | Output the current case. |
| • END FILE |  | Terminate the current input program. |
| • FILE HANDLE |  | Support for special file formats. |
| • INPUT PROGRAM |  | Support for complex input programs. |
| • LIST |  | List cases in the active dataset. |
| • NEW FILE |  | Clear the active dataset. |
| • PRINT |  | Display values in print formats. |
| • PRINT EJECT |  | Eject the current page then print. |
| • PRINT SPACE |  | Print blank lines. |
| • REREAD |  | Take another look at the previous input line. |
| • WRITE |  | Display values in write formats. |
