### 12.4 COUNT
    
    
    COUNT var_name = var… (value…)
        [/var_name = var… (value…)]…
    
    Each value takes one of the following forms:
            number
            string
            num1 THRU num2
            MISSING
            SYSMIS
    where num1 is a numeric expression or the words LO  or LOWEST
          and num2 is a numeric expression  or HI or HIGHEST.
    

`COUNT` creates or replaces a numeric _target_ variable that counts the occurrence of a _criterion_ value or set of values over one or more _test_ variables for each case. 

The target variable values are always nonnegative integers. They are never missing. The target variable is assigned an F8.2 output format. See [Input and Output Formats](Input-and-Output-Formats.md). Any variables, including string variables, may be test variables. 

User-missing values of test variables are treated just like any other values. They are **not** treated as system-missing values. User-missing values that are criterion values or inside ranges of criterion values are counted as any other values. However (for numeric variables), keyword `MISSING` may be used to refer to all system- and user-missing values. 

`COUNT` target variables are assigned values in the order specified. In the command `COUNT A=A B(1) /B=A B(2).`, the following actions occur: 

  * \- The number of occurrences of 1 between A and B is counted. 
  * \- A is assigned this value. 
  * \- The number of occurrences of 1 between B and the **new** value of A is counted. 
  * \- B is assigned this value. 

Despite this ordering, all `COUNT` criterion variables must exist before the procedure is executed—they may not be created as target variables earlier in the command! Break such a command into two separate commands. 

#### 12.4.1 Count Examples

In the survey results in dataset hotel.sav a manager wishes to know how many respondents answered with low valued answers to questions **v1** , **v2** and **v3**. This can be found using the code in Example 12.4. Specifically, this code creates a new variable, and populates it with the number of values in **v1** –**v2** which are 2 or lower. 

```
get file="hotel.sav".  count low_counts = v1 v2 v3 (low thru 2).  list /variables v1 v2 v3 low_counts.
```

**Example 12.4:** Counting low values to responses **v1** , **v2** and **v3**

In Example 12.4 the `COUNT` transformation creates a new variable, **low_counts** and its values are shown using the `LIST` command. 

If using the graphic user interface, a two step process must be used to set up the `COUNT` transformation. The first dialog box (Screenshot 12.3) provides for the variables to be chosen. Then, one must click on the button marked “Define Values...” to reveal the dialog box for selecting the values to count. 

```

```

**Screenshot 12.3:** The variables **v1** , **v2** and **v3** selected, ready to define values to count

In this dialog box, you must select the values you wish to count — in this case all values up to and including 2 — as shown in Screenshot 12.4 and click “Add”. As many ranges or may be added as you desire. When all desired ranges have been added click “Continue”. 

```

```

**Screenshot 12.4:** Count “Define Values” dialog with ‘lowest thru 2’ selected

In Result 12.2 we can see the values of **low_counts** after the `COUNT` transformation has completed. The first value is 1, because there is only one variable amoung **v1** , **v2** and **3** which has a value of 2 or less. The second value is 2, because both **v1** and **v2** are 2 or less. 

| v1 | v2 | v3 | low_counts |
| --- | --- | --- | --- |
| 4 | 2 | 3 | 1.00 |
| 1 | 1 | 4 | 2.00 |
| 4 | 2 | 2 | 2.00 |
| 3 | 1 | 3 | 1.00 |
| 5 | 3 | 1 | 1.00 |
| 2 | 2 | 5 | 2.00 |
| 3 | 2 | 4 | 1.00 |
| 1 | 4 | 5 | 1.00 |
| 3 | 2 | 3 | 1.00 |
| 2 | 5 | 4 | 1.00 |
| 4 | 2 | 2 | 2.00 |
| 2 | 1 | 4 | 2.00 |
| 1 | 2 | 5 | 2.00 |
| 2 | 3 | 3 | 1.00 |
| 4 | 1 | 1 | 2.00 |
| 1 | 1 | 5 | 2.00 |
| 1 | 5 | 5 | 1.00 |

**Result 12.2:** The values of **v1** , **v2** , **v3** and **low_counts** after the `COUNT` transformation has run
