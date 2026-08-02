#### 15.17.2 Examples

The following PSPP syntax will generate the default output and save the predicted values and residuals to the active dataset. 
    
    
    title 'Demonstrate REGRESSION procedure'.
    data list / v0 1-2 (A) v1 v2 3-22 (10).
    begin data.
    b  7.735648 -23.97588
    b  6.142625 -19.63854
    a  7.651430 -25.26557
    c  6.125125 -16.57090
    a  8.245789 -25.80001
    c  6.031540 -17.56743
    a  9.832291 -28.35977
    c  5.343832 -16.79548
    a  8.838262 -29.25689
    b  6.200189 -18.58219
    end data.
    list.
    regression /variables=v0 v1 v2 /statistics defaults /dependent=v2
               /save pred resid /method=enter.
