#### 5.2.3 Inverting negatively coded variables

Data entry errors are not the only reason for wanting to recode data. The sample file hotel.sav comprises data gathered from a customer satisfaction survey of clients at a particular hotel. The following commands load the file and display its variables and associated data: 
    
    
    PSPP> get file='/usr/local/share/pspp/examples/hotel.sav'.
    PSPP> display dictionary.
    

It yields the following output: 

| Name | Position | Label | Measurement Level | Role | Width | Alignment | Print Format | Write Format |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| v1 | 1 | I am satisfied with the level of service | Ordinal | Input | 8 | Right | F8.0 | F8.0 |
| v2 | 2 | The value for money was good | Ordinal | Input | 8 | Right | F8.0 | F8.0 |
| v3 | 3 | The staff were slow in responding | Ordinal | Input | 8 | Right | F8.0 | F8.0 |
| v4 | 4 | My concerns were dealt with in an efficient manner | Ordinal | Input | 8 | Right | F8.0 | F8.0 |
| v5 | 5 | There was too much noise in the rooms | Ordinal | Input | 8 | Right | F8.0 | F8.0 |
| Variable Value | Label |  |  |  |  |  |  |  |
| I am satisfied with the level of service | 1 | Strongly Disagree |  |  |  |  |  |  |
| 2 | Disagree |  |  |  |  |  |  |  |
| 3 | No Opinion |  |  |  |  |  |  |  |
| 4 | Agree |  |  |  |  |  |  |  |
| 5 | Strongly Agree |  |  |  |  |  |  |  |
| The value for money was good | 1 | Strongly Disagree |  |  |  |  |  |  |
| 2 | Disagree |  |  |  |  |  |  |  |
| 3 | No Opinion |  |  |  |  |  |  |  |
| 4 | Agree |  |  |  |  |  |  |  |
| 5 | Strongly Agree |  |  |  |  |  |  |  |
| The staff were slow in responding | 1 | Strongly Disagree |  |  |  |  |  |  |
| 2 | Disagree |  |  |  |  |  |  |  |
| 3 | No Opinion |  |  |  |  |  |  |  |
| 4 | Agree |  |  |  |  |  |  |  |
| 5 | Strongly Agree |  |  |  |  |  |  |  |
| My concerns were dealt with in an efficient manner | 1 | Strongly Disagree |  |  |  |  |  |  |
| 2 | Disagree |  |  |  |  |  |  |  |
| 3 | No Opinion |  |  |  |  |  |  |  |
| 4 | Agree |  |  |  |  |  |  |  |
| 5 | Strongly Agree |  |  |  |  |  |  |  |
| There was too much noise in the rooms | 1 | Strongly Disagree |  |  |  |  |  |  |
| 2 | Disagree |  |  |  |  |  |  |  |
| 3 | No Opinion |  |  |  |  |  |  |  |
| 4 | Agree |  |  |  |  |  |  |  |
| 5 | Strongly Agree |  |  |  |  |  |  |  |

The output shows that all of the variables **v1** through **v5** are measured on a 5 point Likert scale, with 1 meaning “Strongly disagree” and 5 meaning “Strongly agree”. However, some of the questions are positively worded (**v1** , **v2** , **v4**) and others are negatively worded (**v3** , **v5**). To perform meaningful analysis, we need to recode the variables so that they all measure in the same direction. We could use the `RECODE` command, with syntax such as: 
    
    
    recode v3 (1 = 5) (2 = 4) (4 = 2) (5 = 1).
    

However an easier and more elegant way uses the `COMPUTE` command (see [COMPUTE](COMPUTE.md)). Since the variables are Likert variables in the range (1 … 5), subtracting their value from 6 has the effect of inverting them: 
    
    
    compute var = 6 - var.
    

The following section uses this technique to recode the variables **v3** and **v5**. After applying `COMPUTE` for both variables, all subsequent commands will use the inverted values.
