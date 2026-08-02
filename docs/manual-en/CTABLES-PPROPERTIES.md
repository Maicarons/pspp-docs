#### 15.7.10.2 PPROPERTIES
    
    
    /PPROPERTIES &_postcompute_ …
        [LABEL=_string_]
        [FORMAT=[_summary_ _format_]…]
        [HIDESOURCECATS={NO _|_ YES}
    

The `PPROPERTIES` subcommand, which must appear before `TABLE`, sets properties for one or more postcomputes defined on prior `PCOMPUTE` subcommands. The subcommand syntax begins with the list of postcomputes, each prefixed with ‘&’ as specified on `PCOMPUTE`. 

All of the settings on `PPROPERTIES` are optional. Use `LABEL` to set the label shown for the postcomputes in table output. The default label for a postcompute is the expression used to define it. 

A postcompute always uses same summary functions as the variable whose categories contain it, but `FORMAT` allows control over the format used to display their values. It takes a list of summary function names and format specifiers. 

By default, or with `HIDESOURCECATS=NO`, categories referred to by computed categories are displayed like other categories. Use `HIDESOURCECATS=YES` to hide them. 

The previous section provides an example for `PPROPERTIES`.
