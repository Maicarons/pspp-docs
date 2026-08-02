#### 5.1.1 Defining Variables

Variables come in two basic types, _viz_ : _numeric_ and _string_. Variables such as age, height and satisfaction are numeric, whereas name is a string variable. String variables are best reserved for commentary data to assist the human observer. However they can also be used for nominal or categorical data. 

The following example defines two variables **forename** and **height** , and reads data into them by manual input: 
    
    
    PSPP> data list list /forename (A12) height.
    PSPP> begin data.
    data> Ahmed 188
    data> Bertram 167
    data> Catherine 134.231
    data> David 109.1
    data> end data
    PSPP>
    

There are several things to note about this example. 

  * The words ‘data list list’ are an example of the `DATA LIST` command. See [DATA LIST](DATA-LIST.md). It tells PSPP to prepare for reading data. The word ‘list’ intentionally appears twice. The first occurrence is part of the `DATA LIST` call, whilst the second tells PSPP that the data is to be read as free format data with one record per line. 
  * The ‘/’ character is important. It marks the start of the list of variables which you wish to define. 
  * The text ‘forename’ is the name of the first variable, and ‘(A12)’ says that the variable **forename** is a string variable and that its maximum length is 12 bytes. The second variable’s name is specified by the text ‘height’. Since no format is given, this variable has the default format. Normally the default format expects numeric data, which should be entered in the locale of the operating system. Thus, the example is correct for English locales and other locales which use a period (‘.’) as the decimal separator. However if you are using a system with a locale which uses the comma (‘,’) as the decimal separator, then you should in the subsequent lines substitute ‘.’ with ‘,’. Alternatively, you could explicitly tell PSPP that the **height** variable is to be read using a period as its decimal separator by appending the text ‘DOT8.3’ after the word ‘height’. For more information on data formats, see [Input and Output Formats](Input-and-Output-Formats.md). 
  * Normally, PSPP displays the prompt PSPP> whenever it’s expecting a command. However, when it’s expecting data, the prompt changes to data> so that you know to enter data and not a command. 
  * At the end of every command there is a terminating ‘.’ which tells PSPP that the end of a command has been encountered. You should not enter ‘.’ when data is expected (_ie._ when the data> prompt is current) since it is appropriate only for terminating commands.
