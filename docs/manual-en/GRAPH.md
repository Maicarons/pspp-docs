### 15.4 GRAPH
    
    
    GRAPH
            /HISTOGRAM [(NORMAL)]= var
            /SCATTERPLOT [(BIVARIATE)] = var1 WITH var2 [BY var3]
            /BAR = {summary-function(var1) | count-function} BY var2 [BY var3]
            [ /MISSING={LISTWISE, VARIABLE} [{EXCLUDE, INCLUDE}] ]
    		[{NOREPORT,REPORT}]
    
    

The `GRAPH` command produces graphical plots of data. Only one of the subcommands `HISTOGRAM`, `BAR` or `SCATTERPLOT` can be specified, _i.e._ only one plot can be produced per call of `GRAPH`. The `MISSING` is optional. 

| • SCATTERPLOT |  | Cartesian Plots |
| --- | --- | --- |
| • HISTOGRAM |  | Histograms |
| • BAR CHART |  | Bar Charts |
