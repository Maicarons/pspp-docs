#### 15.4.1 Scatterplot

The subcommand `SCATTERPLOT` produces an xy plot of the data. `GRAPH` uses the third variable var3, if specified, to determine the colours and/or markers for the plot. The following is an example for producing a scatterplot. 
    
    
    GRAPH
            /SCATTERPLOT = height WITH weight BY gender.
    

This example produces a scatterplot where height is plotted versus weight. Depending on the value of the gender variable, the colour of the datapoint is different. With this plot it is possible to analyze gender differences for height versus weight relation.
