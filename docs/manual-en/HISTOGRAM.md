#### 15.4.2 Histogram

The subcommand `HISTOGRAM` produces a histogram. Only one variable is allowed for the histogram plot. The keyword `NORMAL` may be specified in parentheses, to indicate that the ideal normal curve should be superimposed over the histogram. For an alternative method to produce histograms see [EXAMINE](EXAMINE.md). The following example produces a histogram plot for the variable weight. 
    
    
    GRAPH
            /HISTOGRAM = weight.
