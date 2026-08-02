#### 7.7.10.2 Discrete Distributions

The following discrete distributions are available: 

Function: __**PDF.BERNOULLI** _( x)_
Function: __**CDF.BERNOULLI** _( x, p)_
Function: __**RV.BERNOULLI** _( p)_
    

Bernoulli distribution with probability of success p. Constraints: x = 0 or 1, 0 <= p <= 1. 

Function: __**PDF.BINOM** _( x, n, p)_
Function: __**CDF.BINOM** _( x, n, p)_
Function: __**RV.BINOM** _( n, p)_
    

Binomial distribution with n trials and probability of success p. Constraints: integer n > 0, 0 <= p <= 1, integer x <= n. 

Function: __**PDF.GEOM** _( x, n, p)_
Function: __**CDF.GEOM** _( x, n, p)_
Function: __**RV.GEOM** _( n, p)_
    

Geometric distribution with probability of success p. Constraints: 0 <= p <= 1, integer x > 0\. 

Function: __**PDF.HYPER** _( x, a, b, c)_
Function: __**CDF.HYPER** _( x, a, b, c)_
Function: __**RV.HYPER** _( a, b, c)_
    

Hypergeometric distribution when b objects out of a are drawn and c of the available objects are distinctive. Constraints: integer a > 0, integer b <= a, integer c <= a, integer x >= 0. 

Function: __**PDF.LOG** _( x, p)_
Function: __**RV.LOG** _( p)_
    

Logarithmic distribution with probability parameter p. Constraints: 0 <= p < 1, x >= 1. 

Function: __**PDF.NEGBIN** _( x, n, p)_
Function: __**CDF.NEGBIN** _( x, n, p)_
Function: __**RV.NEGBIN** _( n, p)_
    

Negative binomial distribution with number of successes parameter n and probability of success parameter p. Constraints: integer n >= 0, 0 < p <= 1, integer x >= 1. 

Function: __**PDF.POISSON** _( x, mu)_
Function: __**CDF.POISSON** _( x, mu)_
Function: __**RV.POISSON** _( mu)_
    

Poisson distribution with mean mu. Constraints: mu > 0, integer x >= 0.
