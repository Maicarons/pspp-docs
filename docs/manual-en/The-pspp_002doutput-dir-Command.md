### 19.2 The `dir` Command
    
    
    pspp-output [options] dir file
    

Prints on stdout a table of contents for SPV file file. By default, this table lists every object in the file, except for hidden objects. See [Input Selection Options](Input-Selection-Options.md), for information on the options available to select a subset of objects. 

The following additional option for `dir` is intended mainly for use by PSPP developers: 

\--member-names
    

Also show the names of the Zip members associated with each object.
