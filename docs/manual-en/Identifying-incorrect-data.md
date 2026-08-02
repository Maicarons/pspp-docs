#### 5.2.1 Identifying incorrect data

Data from real sources is rarely error free. PSPP has a number of procedures which can be used to help identify data which might be incorrect. 

The `DESCRIPTIVES` command (see [DESCRIPTIVES](DESCRIPTIVES.md)) is used to generate simple linear statistics for a dataset. It is also useful for identifying potential problems in the data. The example file physiology.sav contains a number of physiological measurements of a sample of healthy adults selected at random. However, the data entry clerk made a number of mistakes when entering the data. The following example illustrates the use of `DESCRIPTIVES` to screen this data and identify the erroneous values: 
    
    
    PSPP> get file='/usr/local/share/pspp/examples/physiology.sav'.
    PSPP> descriptives sex, weight, height.
    

For this example, PSPP produces the following output: 

|  | N | Mean | Std Dev | Minimum | Maximum |
| --- | --- | --- | --- | --- | --- |
| Sex of subject | 40 | .45 | .50 | Male | Female |
| Weight in kilograms | 40 | 72.12 | 26.70 | -55.6 | 92.1 |
| Height in millimeters | 40 | 1677.12 | 262.87 | 179 | 1903 |
| Valid N (listwise) | 40 |  |  |  |  |
| Missing N (listwise) | 0 |  |  |  |  |

The most interesting column in the output is the minimum value. The **weight** variable has a minimum value of less than zero, which is clearly erroneous. Similarly, the **height** variable’s minimum value seems to be very low. In fact, it is more than 5 standard deviations from the mean, and is a seemingly bizarre height for an adult person. 

We can look deeper into these discrepancies by issuing an additional `EXAMINE` command: 
    
    
    PSPP> examine height, weight /statistics=extreme(3).
    

This command produces the following additional output (in part): 

|  |  |  | Case Number | Value |
| --- | --- | --- | --- | --- |
| Height in millimeters | Highest | 1 | 14 | 1903 |
| 2 | 15 | 1884 |  |  |
| 3 | 12 | 1802 |  |  |
| Lowest | 1 | 30 | 179 |  |
| 2 | 31 | 1598 |  |  |
| 3 | 28 | 1601 |  |  |
| Weight in kilograms | Highest | 1 | 13 | 92.1 |
| 2 | 5 | 92.1 |  |  |
| 3 | 17 | 91.7 |  |  |
| Lowest | 1 | 38 | -55.6 |  |
| 2 | 39 | 54.5 |  |  |
| 3 | 33 | 55.4 |  |  |

From this new output, you can see that the lowest value of **height** is 179 (which we suspect to be erroneous), but the second lowest is 1598 which we know from `DESCRIPTIVES` is within 1 standard deviation from the mean. Similarly, the lowest value of **weight** is negative, but its second lowest value is plausible. This suggests that the two extreme values are outliers and probably represent data entry errors. 

The output also identifies the case numbers for each extreme value, so we can see that cases 30 and 38 are the ones with the erroneous values.
