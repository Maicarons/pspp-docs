### 19.6 Input Selection Options

The `dir` and `convert` commands, by default, operate on all of the objects in the source SPV file, except for objects that are not visible in the output viewer window. The user may specify these options to select a subset of the input objects. When multiple options are used, only objects that satisfy all of them are selected: 

\--select=[^]class…
    

Include only objects of the given class; with leading ‘^’, include only objects not in the class. Use commas to separate multiple classes. The supported classes are: 

> `charts headings logs models tables texts trees warnings outlineheaders pagetitle notes unknown other`

Use \--select=help to print this list of classes. 

\--commands=[^]command…
\--subtypes=[^]subtype…
\--labels=[^]label…
    

Include only objects with the specified command, subtype, or label. With a leading ‘^’, include only the objects that do not match. Multiple values may be specified separated by commas. An asterisk at the end of a value acts as a wildcard. 

The \--command option matches command identifiers, case insensitively. All of the objects produced by a single command use the same, unique command identifier. Command identifiers are always in English regardless of the language used for output. They often differ from the command name in PSPP syntax. Use the `pspp-output` program’s `dir` command to print command identifiers in particular output. 

The \--subtypes option matches particular tables within a command, case insensitively. Subtypes are not necessarily unique: two commands that produce similar output tables may use the same subtype. Subtypes are always in English and `dir` will print them. 

The \--labels option matches the labels in table output (that is, the table titles). Labels are affected by the output language, variable names and labels, split file settings, and other factors. 

\--nth-commands=n…
    

Include only objects from the nth command that matches \--command (or the nth command overall if \--command is not specified), where n is 1 for the first command, 2 for the second, and so on. 

\--instances=instance…
    

Include the specified instance of an object that matches the other criteria within a single command. The instance may be a number (1 for the first instance, 2 for the second, and so on) or `last` for the last instance. 

\--show-hidden
    

Include hidden output objects in the output. By default, they are excluded. 

\--or
    

Separates two sets of selection options. Objects selected by either set of options are included in the output. 

The following additional input selection options are intended mainly for use by PSPP developers: 

\--errors
    

Include only objects that cause an error when read. With the `convert` command, this is most useful in conjunction with the \--force option. 

\--members=member…
    

Include only the objects that include a listed Zip file member. More than one name may be included, comma-separated. The members in an SPV file may be listed with the `dir` command by adding the \--show-members option or with the `zipinfo` program included with many operating systems. Error messages that `pspp-output` prints when it reads SPV files also often include member names. 

\--member-names
    

Displays the name of the Zip member or members associated with each object just above the object itself.
