#### 5.3.2 Linear Regression

Linear regression is a technique used to investigate if and how a variable is linearly related to others. If a variable is found to be linearly related, then this can be used to predict future values of that variable. 

In the following example, the service department of the company wanted to be able to predict the time to repair equipment, in order to improve the accuracy of their quotations. It was suggested that the time to repair might be related to the time between failures and the duty cycle of the equipment. The p-value of 0.1 was chosen for this investigation. In order to investigate this hypothesis, the `REGRESSION` command was used. This command not only tests if the variables are related, but also identifies the potential linear relationship. See [REGRESSION](REGRESSION.md). 

A first attempt includes **duty_cycle** : 
    
    
    PSPP> get file='/usr/local/share/pspp/examples/repairs.sav'.
    PSPP> regression /variables = mtbf duty_cycle /dependent = mttr.
    

This attempt yields the following output (in part): 

|  | Unstandardized Coefficients | Standardized Coefficients | t | Sig. |  |
| --- | --- | --- | --- | --- | --- |
|  | B | Std. Error | Beta |  |  |
| (Constant) | 10.59 | 3.11 | .00 | 3.40 | .002 |
| Mean time between failures (months) | 3.02 | .20 | .95 | 14.88 | .000 |
| Ratio of working to non-working time | -1.12 | 3.69 | -.02 | -.30 | .763 |

The coefficients in the above table suggest that the formula _mttr = 9.81 + 3.1 \times mtbf \+ 1.09 \times duty_cycle_ can be used to predict the time to repair. However, the significance value for the duty_cycle coefficient is very high, which would make this an unsafe predictor. For this reason, the test was repeated, but omitting the **duty_cycle** variable: 
    
    
    PSPP> regression /variables = mtbf /dependent = mttr.
    

This second try produces the following output (in part): 

|  | Unstandardized Coefficients | Standardized Coefficients | t | Sig. |  |
| --- | --- | --- | --- | --- | --- |
|  | B | Std. Error | Beta |  |  |
| (Constant) | 9.90 | 2.10 | .00 | 4.71 | .000 |
| Mean time between failures (months) | 3.01 | .20 | .94 | 15.21 | .000 |

This time, the significance of all coefficients is no higher than 0.06, suggesting that at the 0.06 level, the formula _mttr = 10.5 + 3.11 \times mtbf_ is a reliable predictor of the time to repair.
