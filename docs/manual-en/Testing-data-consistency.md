#### 5.2.4 Testing data consistency

A sensible check to perform on survey data is the calculation of reliability. This gives the statistician some confidence that the questionnaires have been completed thoughtfully. If you examine the labels of variables **v1** , **v3** and **v4** , you will notice that they ask very similar questions. One would therefore expect the values of these variables (after recoding) to closely follow one another, and we can test that with the `RELIABILITY` command (see [RELIABILITY](RELIABILITY.md)). The following example shows a PSPP session where the user recodes negatively scaled variables and then requests reliability statistics for **v1** , **v3** , and **v4**. 
    
    
    PSPP> get file='/usr/local/share/pspp/examples/hotel.sav'.
    PSPP> compute v3 = 6 - v3.
    PSPP> compute v5 = 6 - v5.
    PSPP> reliability v1, v3, v4.
    

This yields the following output: 

| Cases | N | Percent |
| --- | --- | --- |
| Valid | 17 | 100.0% |
| Excluded | 0 | .0% |
| Total | 17 | 100.0% |
| Cronbach's Alpha | N of Items |  |
| .81 | 3 |  |

As a rule of thumb, many statisticians consider a value of Cronbach’s Alpha of 0.7 or higher to indicate reliable data. 

Here, the value is 0.81, which suggests a high degree of reliability among variables **v1** , **v3** and **v4** , so the data and the recoding that we performed are vindicated.
