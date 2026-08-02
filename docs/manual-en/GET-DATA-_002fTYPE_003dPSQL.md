#### 9.4.2 Postgres Database Queries
    
    
    GET DATA /TYPE=PSQL
             /CONNECT={connection info}
             /SQL={query}
             [/ASSUMEDSTRWIDTH=w]
             [/UNENCRYPTED]
             [/BSIZE=n].
    

`GET DATA /TYPE=PSQL` imports data from a local or remote Postgres database server. It automatically creates variables based on the table column names or the names specified in the SQL query. PSPP cannot support the full precision of some Postgres data types, so data of those types will lose some precision when PSPP imports them. PSPP does not support all Postgres data types. If PSPP cannot support a datum, `GET DATA` issues a warning and substitutes the system-missing value. 

The `CONNECT` subcommand is mandatory. It is a string specifying the parameters of the database server from which the data should be fetched. The format of the string is given in the postgres manual <http://www.postgresql.org/docs/8.0/static/libpq.html#LIBPQ-CONNECT>. 

The `SQL` subcommand is mandatory. It must be a valid SQL string to retrieve data from the database. 

The `ASSUMEDSTRWIDTH` subcommand specifies the maximum width of string variables read from the database. If omitted, the default value is determined from the length of the string in the first value read for each variable. 

The `UNENCRYPTED` subcommand allows data to be retrieved over an insecure connection. If the connection is not encrypted, and the `UNENCRYPTED` subcommand is not given, then an error occurs. Whether or not the connection is encrypted depends upon the underlying psql library and the capabilities of the database server. 

The `BSIZE` subcommand serves only to optimise the speed of data transfer. It specifies an upper limit on number of cases to fetch from the database at once. The default value is 4096. If your SQL statement fetches a large number of cases but only a small number of variables, then the data transfer may be faster if you increase this value. Conversely, if the number of variables is large, or if the machine on which PSPP is running has only a small amount of memory, then a smaller value is probably better. 

The following syntax is an example: 
    
    
    GET DATA /TYPE=PSQL
         /CONNECT='host=example.com port=5432 dbname=product user=fred passwd=xxxx'
         /SQL='select * from manufacturer'.
