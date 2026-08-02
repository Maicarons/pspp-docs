### 15.17 REGRESSION

The `REGRESSION` procedure fits linear models to data via least-squares estimation. The procedure is appropriate for data which satisfy those assumptions typical in linear regression: 

  * The data set contains _n_ observations of a dependent variable, say _Y_1,…,Y_n_ , and _n_ observations of one or more explanatory variables. Let _X_{11}, X_{12}_ , …, _X_{1n}_ denote the _n_ observations of the first explanatory variable; _X_{21}_ ,…,_X_{2n}_ denote the _n_ observations of the second explanatory variable; _X_{k1}_ ,…,_X_{kn}_ denote the _n_ observations of the _k_ th explanatory variable. 
  * The dependent variable _Y_ has the following relationship to the explanatory variables: _Y_i = b_0 + b_1 X_{1i} + ... + b_k X_{ki} + Z_i_ where _b_0, b_1, …, b_k_ are unknown coefficients, and _Z_1,…,Z_n_ are independent, normally distributed _noise_ terms with mean zero and common variance. The noise, or _error_ terms are unobserved. This relationship is called the _linear model_. 

The `REGRESSION` procedure estimates the coefficients _b_0,…,b_k_ and produces output relevant to inferences for the linear model. 

| • Syntax |  | Syntax definition. |
| --- | --- | --- |
| • Examples |  | Using the REGRESSION procedure. |
