### 15.7 CTABLES

`CTABLES` has the following overall syntax. At least one `TABLE` subcommand is required: 
    
    
    CTABLES
      … _global subcommands_ …
      [/TABLE _axis_ [BY _axis_ [BY _axis_]]
       … _per-table subcommands_ …]…
    

where each _axis_ may be empty or take one of the following forms: 
    
    
    _variable_
    _variable_ [{C _|_ S}]
    _axis_ + _axis_
    _axis_ > _axis_
    (_axis_)
    _axis_ [_summary_ [_string_] [_format_]]
    

The following subcommands precede the first `TABLE` subcommand and apply to all of the output tables. All of these subcommands are optional: 
    
    
    /FORMAT
        [MINCOLWIDTH={DEFAULT _|_ _width_}]
        [MAXCOLWIDTH={DEFAULT _|_ _width_}]
        [UNITS={POINTS _|_ INCHES _|_ CM}]
        [EMPTY={ZERO _|_ BLANK _|_ _string_}]
        [MISSING=_string_]
    /VLABELS
        VARIABLES=_variables_
        DISPLAY={DEFAULT _|_ NAME _|_ LABEL _|_ BOTH _|_ NONE}
    /SMISSING {VARIABLE _|_ LISTWISE}
    /PCOMPUTE &_postcompute_ =EXPR(_expression_)
    /PPROPERTIES &_postcompute_ …
        [LABEL=_string_]
        [FORMAT=[_summary_ _format_]…]
        [HIDESOURCECATS={NO _|_ YES}
    /WEIGHT VARIABLE=_variable_
    /HIDESMALLCOUNTS COUNT=_count_
    

The following subcommands follow `TABLE` and apply only to the previous `TABLE`. All of these subcommands are optional: 
    
    
    /SLABELS
        [POSITION={COLUMN _|_ ROW _|_ LAYER}]
        [VISIBLE={YES _|_ NO}]
    /CLABELS {AUTO _|_ {ROWLABELS _|_ COLLABELS}={OPPOSITE _|_ LAYER}}
    /CATEGORIES VARIABLES=_variables_
        {[_value_ , _value_ …]
       _|_ [ORDER={A _|_ D}]
         [KEY={VALUE _|_ LABEL _|_ _summary_(_variable_)}]
         [MISSING={EXCLUDE _|_ INCLUDE}]}
        [TOTAL={NO _|_ YES} [LABEL=_string_] [POSITION={AFTER _|_ BEFORE}]]
        [EMPTY={INCLUDE _|_ EXCLUDE}]
    /TITLES
        [TITLE=_string_ …]
        [CAPTION=_string_ …]
        [CORNER=_string_ …]
    

The `CTABLES` (aka “custom tables”) command produces multi-dimensional tables from categorical and scale data. It offers many options for data summarization and formatting. 

This section’s examples use data from the 2008 (USA) National Survey of Drinking and Driving Attitudes and Behaviors, a public domain data set from the (USA) National Highway Traffic Administration and available at <https://data.transportation.gov>. PSPP includes this data set, with a modified dictionary, as examples/nhtsa.sav. 

| • Basics |  |  |
| --- | --- | --- |
| • Data Summarization |  |  |
| • Statistics Positions and Labels |  |  |
| • Category Label Positions |  |  |
| • Per-Variable Category Options |  |  |
| • Titles |  |  |
| • Table Formatting |  |  |
| • Display of Variable Labels |  |  |
| • Missing Value Treatment |  |  |
| • Computed Categories |  |  |
| • Effective Weight |  |  |
| • Hiding Small Counts |  |  |
