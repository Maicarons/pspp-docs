## 19 Invoking `pspp-output`

`pspp-output` is a command-line utility accompanying PSPP. It supports multiple operations on SPSS viewer or .spv files, here called SPV files. SPSS 16 and later writes SPV files to represent the contents of its output editor. 

SPSS 15 and earlier versions instead use .spo files. `pspp-output` does not support this format. 

`pspp-options` may be invoked in the following ways: 
    
    
    pspp-output detect file
    
    pspp-output [options] dir file
    
    pspp-output [options] convert source destination
    
    pspp-output [options] get-table-look source destination
    
    pspp-output [options] convert-table-look source destination
    
    pspp-output --help
    
    pspp-output --version
    

Each of these forms is documented separately below. `pspp-output` also has several undocumented command forms that developers may find useful for debugging. 

| • The pspp-output detect Command |  |  |
| --- | --- | --- |
| • The pspp-output dir Command |  |  |
| • The pspp-output convert Command |  |  |
| • The pspp-output get-table-look Command |  |  |
| • The pspp-output convert-table-look Command |  |  |
| • Input Selection Options |  |  |
