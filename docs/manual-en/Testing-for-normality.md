#### 5.2.5 Testing for normality

Many statistical tests rely upon certain properties of the data. One common property, upon which many linear tests depend, is that of normality — the data must have been drawn from a normal distribution. It is necessary then to ensure normality before deciding upon the test procedure to use. One way to do this uses the `EXAMINE` command. 

In the following example, a researcher was examining the failure rates of equipment produced by an engineering company. The file repairs.sav contains the mean time between failures (**mtbf**) of some items of equipment subject to the study. Before performing linear analysis on the data, the researcher wanted to ascertain that the data is normally distributed. 
    
    
    PSPP> get file='/usr/local/share/pspp/examples/repairs.sav'.
    PSPP> examine mtbf
                    /statistics=descriptives.
    

This produces the following output: 

|  |  |  | Statistic | Std. Error |
| --- | --- | --- | --- | --- |
| Mean time between failures (months) | Mean | 8.78 | 1.10 |  |
| 95% Confidence Interval for Mean | Lower Bound | 6.53 |  |  |
| Upper Bound | 11.04 |  |  |  |
| 5% Trimmed Mean | 8.20 |  |  |  |
| Median | 8.29 |  |  |  |
| Variance | 36.34 |  |  |  |
| Std. Deviation | 6.03 |  |  |  |
| Minimum | 1.63 |  |  |  |
| Maximum | 26.47 |  |  |  |
| Range | 24.84 |  |  |  |
| Interquartile Range | 6.03 |  |  |  |
| Skewness | 1.65 | .43 |  |  |
| Kurtosis | 3.41 | .83 |  |  |

A normal distribution has a skewness and kurtosis of zero. The skewness of **mtbf** in the output above makes it clear that the mtbf figures have a lot of positive skew and are therefore not drawn from a normally distributed variable. Positive skew can often be compensated for by applying a logarithmic transformation, as in the following continuation of the example: 
    
    
    PSPP> compute mtbf_ln = ln (mtbf).
    PSPP> examine mtbf_ln
                    /statistics=descriptives.
    

which produces the following additional output: 

|  |  |  | Statistic | Std. Error |
| --- | --- | --- | --- | --- |
| mtbf_ln | Mean | 1.95 | .13 |  |
| 95% Confidence Interval for Mean | Lower Bound | 1.69 |  |  |
| Upper Bound | 2.22 |  |  |  |
| 5% Trimmed Mean | 1.96 |  |  |  |
| Median | 2.11 |  |  |  |
| Variance | .49 |  |  |  |
| Std. Deviation | .70 |  |  |  |
| Minimum | .49 |  |  |  |
| Maximum | 3.28 |  |  |  |
| Range | 2.79 |  |  |  |
| Interquartile Range | .88 |  |  |  |
| Skewness | -.37 | .43 |  |  |
| Kurtosis | .01 | .83 |  |  |

The `COMPUTE` command in the first line above performs the logarithmic transformation: 
    
    
    compute mtbf_ln = ln (mtbf).
    

Rather than redefining the existing variable, this use of `COMPUTE` defines a new variable **mtbf_ln** which is the natural logarithm of **mtbf**. The final command in this example calls `EXAMINE` on this new variable. The results show that both the skewness and kurtosis for **mtbf_ln** are very close to zero. This provides some confidence that the **mtbf_ln** variable is normally distributed and thus safe for linear analysis. In the event that no suitable transformation can be found, then it would be worth considering an appropriate non-parametric test instead of a linear one. See [NPAR TESTS](NPAR-TESTS.md), for information about non-parametric tests.
