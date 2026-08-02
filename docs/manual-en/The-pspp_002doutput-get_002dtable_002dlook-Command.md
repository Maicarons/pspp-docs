### 19.4 The `get-table-look` Command
    
    
    pspp-output [options] get-table-look source destination
    

Reads SPV file source, applies any selection options (see [Input Selection Options](Input-Selection-Options.md)), picks the first table from the selected object, extracts the TableLook from that table, and writes it to destination (typically with an .stt extension) in the TableLook XML format. 

Use ‘-’ for source to instead write the default look to destination. 

The user may use the TableLook file to change the style of tables in other files, by passing it to the \--table-look option on the `convert` command.
