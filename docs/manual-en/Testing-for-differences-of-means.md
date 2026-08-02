#### 5.3.1 Testing for differences of means

A common statistical test involves hypotheses about means. The `T-TEST` command is used to find out whether or not two separate subsets have the same mean. 

A researcher suspected that the heights and core body temperature of persons might be different depending upon their sex. To investigate this, he posed two null hypotheses based on the data from physiology.sav previously encountered: 

  * The mean heights of males and females in the population are equal. 
  * The mean body temperature of males and females in the population are equal. 

For the purposes of the investigation the researcher decided to use a p-value of 0.05. 

In addition to the T-test, the `T-TEST` command also performs the Levene test for equal variances. If the variances are equal, then a more powerful form of the T-test can be used. However if it is unsafe to assume equal variances, then an alternative calculation is necessary. PSPP performs both calculations. 

For the **height** variable, the output shows the significance of the Levene test to be 0.33 which means there is a 33% probability that the Levene test produces this outcome when the variances are equal. Had the significance been less than 0.05, then it would have been unsafe to assume that the variances were equal. However, because the value is higher than 0.05 the homogeneity of variances assumption is safe and the “Equal Variances” row (the more powerful test) can be used. Examining this row, the two tailed significance for the **height** t-test is less than 0.05, so it is safe to reject the null hypothesis and conclude that the mean heights of males and females are unequal. 

For the **temperature** variable, the significance of the Levene test is 0.58 so again, it is safe to use the row for equal variances. The equal variances row indicates that the two tailed significance for **temperature** is 0.20. Since this is greater than 0.05 we must reject the null hypothesis and conclude that there is insufficient evidence to suggest that the body temperature of male and female persons are different. 

The syntax for this analysis is: 
    
    
    PSPP> get file='/usr/local/share/pspp/examples/physiology.sav'.
    PSPP> recode height (179 = SYSMIS).
    PSPP> t-test group=sex(0,1) /variables = height temperature.
    

PSPP produces the following output for this syntax: 

|  |  | F | Sig. | t | df | Sig. (2-tailed) | Mean Difference | Std. Error Difference | 95% Confidence Interval of the Difference |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Group | N | Mean | Std. Deviation | S.E. Mean |  |  |  |  |  |
| Height in millimeters | Male | 22 | 1796.49 | 49.71 | 10.60 |  |  |  |  |  |
| Female | 17 | 1610.77 | 25.43 | 6.17 |  |  |  |  |  |  |
| Internal body temperature in degrees Celcius | Male | 22 | 36.68 | 1.95 | .42 |  |  |  |  |  |
| Female | 18 | 37.43 | 1.61 | .38 |  |  |  |  |  |  |
|  |  | Levene's Test for Equality of Variances | T-Test for Equality of Means |  |  |  |  |  |  |  |
|  |  | Lower | Upper |  |  |  |  |  |  |  |
| Height in millimeters | Equal variances assumed | .97 | .331 | 14.02 | 37.00 | .000 | 185.72 | 13.24 | 158.88 | 212.55 |
| Equal variances not assumed |  |  | 15.15 | 32.71 | .000 | 185.72 | 12.26 | 160.76 | 210.67 |  |
| Internal body temperature in degrees Celcius | Equal variances assumed | .31 | .581 | -1.31 | 38.00 | .198 | -.75 | .57 | -1.91 | .41 |
| Equal variances not assumed |  |  | -1.33 | 37.99 | .190 | -.75 | .56 | -1.89 | .39 |  |

The `T-TEST` command tests for differences of means. Here, the **height** variable’s two tailed significance is less than 0.05, so the null hypothesis can be rejected. Thus, the evidence suggests there is a difference between the heights of male and female persons. However the significance of the test for the **temperature** variable is greater than 0.05 so the null hypothesis cannot be rejected, and there is insufficient evidence to suggest a difference in body temperature.
