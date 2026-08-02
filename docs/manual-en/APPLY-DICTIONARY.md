### 9.1 APPLY DICTIONARY
    
    
    APPLY DICTIONARY FROM={’file_name’,file_handle}.
    

`APPLY DICTIONARY` applies the variable labels, value labels, and missing values taken from a file to corresponding variables in the active dataset. In some cases it also updates the weighting variable. 

The `FROM` clause is mandatory. Use it to specify a system file or portable file’s name in single quotes, a data set name (see [Datasets](Datasets.md)), or a file handle name (see [File Handles](File-Handles.md)). The dictionary in the file is be read, but it does not replace the active dataset’s dictionary. The file’s data is not read. 

Only variables with names that exist in both the active dataset and the system file are considered. Variables with the same name but different types (numeric, string) cause an error message. Otherwise, the system file variables’ attributes replace those in their matching active dataset variables: 

  * If a system file variable has a variable label, then it replaces the variable label of the active dataset variable. If the system file variable does not have a variable label, then the active dataset variable’s variable label, if any, is retained. 
  * If the system file variable has custom attributes (see [VARIABLE ATTRIBUTE](VARIABLE-ATTRIBUTE.md)), then those attributes replace the active dataset variable’s custom attributes. If the system file variable does not have custom attributes, then the active dataset variable’s custom attributes, if any, is retained. 
  * If the active dataset variable is numeric or short string, then value labels and missing values, if any, are copied to the active dataset variable. If the system file variable does not have value labels or missing values, then those in the active dataset variable, if any, are not disturbed. 

In addition to properties of variables, some properties of the active file dictionary as a whole are updated: 

  * If the system file has custom attributes (see [DATAFILE ATTRIBUTE](DATAFILE-ATTRIBUTE.md)), then those attributes replace the active dataset variable’s custom attributes. 
  * If the active dataset has a weighting variable (see [WEIGHT](WEIGHT.md)), and the system file does not, or if the weighting variable in the system file does not exist in the active dataset, then the active dataset weighting variable, if any, is retained. Otherwise, the weighting variable in the system file becomes the active dataset weighting variable. 

`APPLY DICTIONARY` takes effect immediately. It does not read the active dataset. The system file is not modified.
