### 11.20 MRSETS

`MRSETS` creates, modifies, deletes, and displays multiple response sets. A multiple response set is a set of variables that represent multiple responses to a survey question. 

Multiple responses are represented in one of the two following ways: 

  * A _multiple dichotomy set_ is analogous to a survey question with a set of checkboxes. Each variable in the set is treated in a Boolean fashion: one value (the "counted value") means that the box was checked, and any other value means that it was not. 
  * A _multiple category set_ represents a survey question where the respondent is instructed to list up to n choices. Each variable represents one of the responses. 

    
    
    MRSETS
        /MDGROUP NAME=name VARIABLES=var_list VALUE=value
         [CATEGORYLABELS={VARLABELS,COUNTEDVALUES}]
         [{LABEL=’label’,LABELSOURCE=VARLABEL}]
    
        /MCGROUP NAME=name VARIABLES=var_list [LABEL=’label’]
    
        /DELETE NAME={[names],ALL}
    
        /DISPLAY NAME={[names],ALL}
    

Any number of subcommands may be specified in any order. 

The `MDGROUP` subcommand creates a new multiple dichotomy set or replaces an existing multiple response set. The `NAME`, `VARIABLES`, and `VALUE` specifications are required. The others are optional: 

  * NAME specifies the name used in syntax for the new multiple dichotomy set. The name must begin with ‘$’; it must otherwise follow the rules for identifiers (see [Tokens](Tokens.md)). 
  * `VARIABLES` specifies the variables that belong to the set. At least two variables must be specified. The variables must be all string or all numeric. 
  * `VALUE` specifies the counted value. If the variables are numeric, the value must be an integer. If the variables are strings, then the value must be a string that is no longer than the shortest of the variables in the set (ignoring trailing spaces). 
  * `CATEGORYLABELS` optionally specifies the source of the labels for each category in the set: 
    * \- `VARLABELS`, the default, uses variable labels or, for variables without variable labels, variable names. PSPP warns if two variables have the same variable label, since these categories cannot be distinguished in output. 
    * \- `COUNTEDVALUES` instead uses each variable’s value label for the counted value. PSPP warns if two variables have the same value label for the counted value or if one of the variables lacks a value label, since such categories cannot be distinguished in output. 
  * `LABEL` optionally specifies a label for the multiple response set. If neither `LABEL` nor `LABELSOURCE=VARLABEL` is specified, the set is unlabeled. 
  * `LABELSOURCE=VARLABEL` draws the multiple response set’s label from the first variable label among the variables in the set; if none of the variables has a label, the name of the first variable is used. `LABELSOURCE=VARLABEL` must be used with `CATEGORYLABELS=COUNTEDVALUES`. It is mutually exclusive with `LABEL`. 

The `MCGROUP` subcommand creates a new multiple category set or replaces an existing multiple response set. The `NAME` and `VARIABLES` specifications are required, and `LABEL` is optional. Their meanings are as described above in `MDGROUP`. PSPP warns if two variables in the set have different value labels for a single value, since each of the variables in the set should have the same possible categories. 

The `DELETE` subcommand deletes multiple response groups. A list of groups may be named within a set of required square brackets, or ALL may be used to delete all groups. 

The `DISPLAY` subcommand displays information about defined multiple response sets. Its syntax is the same as the `DELETE` subcommand. 

Multiple response sets are saved to and read from system files by, _e.g._ , the `SAVE` and `GET` command. Otherwise, multiple response sets are currently used only by third party software.
