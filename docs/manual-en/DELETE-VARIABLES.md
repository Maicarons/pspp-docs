### 11.6 DELETE VARIABLES

`DELETE VARIABLES` deletes the specified variables from the dictionary. 
    
    
    DELETE VARIABLES var_list.
    

`DELETE VARIABLES` should not be used after defining transformations but before executing a procedure. If it is used in such a context, it causes the data to be read. If it is used while `TEMPORARY` is in effect, it causes the temporary transformations to become permanent. 

`DELETE VARIABLES` may not be used to delete all variables from the dictionary; use `NEW FILE` to do that (see [NEW FILE](NEW-FILE.md)).
