### 9.4 GET DATA
    
    
    GET DATA
            /TYPE={GNM,ODS,PSQL,TXT}
            …additional subcommands depending on TYPE…
    

The `GET DATA` command is used to read files and other data sources created by other applications. When this command is executed, the current dictionary and active dataset are replaced with variables and data read from the specified source. 

The `TYPE` subcommand is mandatory and must be the first subcommand specified. It determines the type of the file or source to read. PSPP currently supports the following file types: 

GNM
    

Spreadsheet files created by Gnumeric (<http://gnumeric.org>). 

ODS
    

Spreadsheet files in OpenDocument format (<http://opendocumentformat.org>). 

PSQL
    

Relations from PostgreSQL databases (<http://postgresql.org>). 

TXT
    

Textual data files in columnar and delimited formats. 

Each supported file type has additional subcommands, explained in separate sections below. 

| • GET DATA /TYPE=GNM/ODS |  | Spreadsheets |
| --- | --- | --- |
| • GET DATA /TYPE=PSQL |  | Databases |
| • GET DATA /TYPE=TXT |  | Delimited Text Files |
