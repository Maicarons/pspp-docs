#### 15.7.10 Computed Categories
    
    
    /PCOMPUTE &_postcompute_ =EXPR(_expression_)
    /PPROPERTIES &_postcompute_ …
        [LABEL=_string_]
        [FORMAT=[_summary_ _format_]…]
        [HIDESOURCECATS={NO _|_ YES}
    

_Computed categories_ , also called _postcomputes_ , are categories created using arithmetic on categories obtained from the data. The `PCOMPUTE` subcommand creates a postcompute, which may then be used on `CATEGORIES` within an explicit category list (see [CTABLES Explicit Category List](CTABLES-Explicit-Categories.md#CTABLES-Explicit-Category-List)). Optionally, `PPROPERTIES` refines how a postcompute is displayed. The following sections provide the details. 

| • PCOMPUTE |  |  |
| --- | --- | --- |
| • PPROPERTIES |  |  |
