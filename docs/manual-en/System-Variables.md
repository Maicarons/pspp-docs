#### 6.7.2 Variables Automatically Defined by PSPP

There are seven system variables. These are not like ordinary variables because system variables are not always stored. They can be used only in expressions. These system variables, whose values and output formats cannot be modified, are described below. 

    
`$CASENUM`
    

Case number of the case at the moment. This changes as cases are shuffled around. 

`$DATE`
    

Date the PSPP process was started, in format A9, following the pattern `DD-MMM-YY`. 

`$DATE11`
    

Date the PSPP process was started, in format A11, following the pattern `DD-MMM-YYYY`. 

`$JDATE`
    

Number of days between 15 Oct 1582 and the time the PSPP process was started. 

`$LENGTH`
    

Page length, in lines, in format F11. 

`$SYSMIS`
    

System missing value, in format F1. 

`$TIME`
    

Number of seconds between midnight 14 Oct 1582 and the time the active dataset was read, in format F20. 

`$WIDTH`
    

Page width, in characters, in format F3.
