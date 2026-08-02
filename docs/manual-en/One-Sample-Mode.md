#### 15.13.1 One Sample Mode

The `TESTVAL` subcommand invokes the One Sample mode. This mode is used to test a population mean against a hypothesized mean. The value given to the `TESTVAL` subcommand is the value against which you wish to test. In this mode, you must also use the `/VARIABLES` subcommand to tell PSPP which variables you wish to test. 

#### 15.13.1.1 Example - One-Sample T-test

A researcher wishes to know whether the weight of persons in a population is different from the national average. The samples are drawn from the population under investigation and recorded in the file physiology.sav. From the Department of Health, she knows that the national average weight of healthy adults is 76.8kg. Accordingly the `TESTVAL` is set to 76.8. The null hypothesis therefore is that the mean average weight of the population from which the sample was drawn is 76.8kg. 

As previously noted (see [Identifying incorrect data](Identifying-incorrect-data.md)), one sample in the dataset contains a weight value which is clearly incorrect. So this is excluded from the analysis using the `SELECT` command. 

```
get file='physiology.sav'.  select if (weight > 0).  t-test testval = 76.8 	/variables = weight.
```

**Example 15.6:** Running a one-sample T-Test after excluding all non-positive values

```

```

**Screenshot 15.5:** Using the One-Sample T-Test dialog box to test **weight** for a mean of 76.8kg

Results 15.2 shows that the mean of our sample differs from the test value by -1.40kg. However the significance is very high (0.610). So one cannot reject the null hypothesis, and must conclude there is not enough evidence to suggest that the mean weight of the persons in our population is different from 76.8kg. 

|  | t | df | Sig. (2-tailed) | Mean Difference | 95% Confidence Interval of the Difference |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | N | Mean | Std. Deviation | S.E. Mean |  |  |
| Weight in kilograms | 39 | 75.40 | 17.08 | 2.73 |  |  |
|  | Test Value = 76.8 |  |  |  |  |  |
|  | Lower | Upper |  |  |  |  |
| Weight in kilograms | -.51 | 38 | .610 | -1.40 | -6.94 | 4.13 |

**Results 15.2:** The results of a one-sample T-test of **weight** using a test value of 76.8kg
