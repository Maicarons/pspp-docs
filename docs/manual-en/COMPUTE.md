### 12.3 COMPUTE
    
    
    COMPUTE variable = expression.
    

or 
    
    
    COMPUTE vector(index) = expression.
    

`COMPUTE` assigns the value of an expression to a target variable. For each case, the expression is evaluated and its value assigned to the target variable. Numeric and string variables may be assigned. When a string expression’s width differs from the target variable’s width, the string result of the expression is truncated or padded with spaces on the right as necessary. The expression and variable types must match. 

For numeric variables only, the target variable need not already exist. Numeric variables created by `COMPUTE` are assigned an `F8.2` output format. String variables must be declared before they can be used as targets for `COMPUTE`. 

The target variable may be specified as an element of a vector (see [VECTOR](VECTOR.md)). In this case, an expression index must be specified in parentheses following the vector name. The expression index must evaluate to a numeric value that, after rounding down to the nearest integer, is a valid index for the named vector. 

Using `COMPUTE` to assign to a variable specified on `LEAVE` (see [LEAVE](LEAVE.md)) resets the variable’s left state. Therefore, `LEAVE` should be specified following `COMPUTE`, not before. 

`COMPUTE` is a transformation. It does not cause the active dataset to be read. 

When `COMPUTE` is specified following `TEMPORARY` (see [TEMPORARY](TEMPORARY.md)), the `LAG` function may not be used (see [LAG](Miscellaneous-Functions.md#LAG)). 

#### 12.3.1 Compute Examples

The dataset physiology.sav contains the height and weight of persons. For some purposes, neither height nor weight alone is of interest. Epidemiologists are often more interested in the _body mass index_ which can sometimes be used as a predictor for clinical conditions. The body mass index is defined as the weight of the person in kilograms divided by the square of the person’s height in metres. 4

```
get file='physiology.sav'.  * height is in mm so we must divide by 1000 to get metres. compute bmi = weight / (height/1000)**2. variable label bmi "Body Mass Index".  descriptives /weight height bmi.
```

**Example 12.3:** Computing the body mass index from **weight** and **height**

Example 12.3 shows how you can use `COMPUTE` to generate a new variable called **bmi** and have every case’s value calculated from the existing values of **weight** and **height**. It also shows how you can add a label to this new variable (see [VARIABLE LABELS](VARIABLE-LABELS.md)), so that a more descriptive label appears in subsequent analyses, and this can be seen in the ouput from the `DESCRIPTIVES` command in Results 12.2. 

```

```

**Screenshot 12.2:** Using the dialog box to generate a new variable and compute its values

The expression which follows the ‘=’ sign can be as complicated as necessary. See [Expressions](Expressions.md) for a precise description of the language accepted. Normally it is easiest to enter the code directly, however there is a dialog box available if desired. This is illustrated in Screenshot 12.2. One advantage is that it offers a list of mathematical functions which can be selected and pasted into the expression. 

|  | N | Mean | Std Dev | Minimum | Maximum |
| --- | --- | --- | --- | --- | --- |
| Weight in kilograms | 40 | 72.12 | 26.70 | -55.6 | 92.1 |
| Height in millimeters | 40 | 1677.12 | 262.87 | 179 | 1903 |
| Body Mass Index | 40 | 67.46 | 274.08 | -21.62 | 1756.82 |
| Valid N (listwise) | 40 |  |  |  |  |
| Missing N (listwise) | 0 |  |  |  |  |

**Results 12.2:** An analysis which includes **bmi** in its results

#### Footnotes

##### (4)

Since BMI is a quantity with a ratio scale and has units, the term “index” is a misnomer, but that is what it is called.
