#### 7.7.10.1 Continuous Distributions

The following continuous distributions are available: 

Function: __**PDF.BETA** _( x)_
Function: __**CDF.BETA** _( x, a, b)_
Function: __**IDF.BETA** _( p, a, b)_
Function: __**RV.BETA** _( a, b)_
Function: __**NPDF.BETA** _( x, a, b, lambda)_
Function: __**NCDF.BETA** _( x, a, b, lambda)_
    

Beta distribution with shape parameters a and b. The noncentral distribution takes an additional parameter lambda. Constraints: a > 0, b > 0, lambda >= 0, 0 <= x <= 1, 0 <= p <= 1. 

Function: __**PDF.BVNOR** _( x0, x1, rho)_
Function: __**CDF.BVNOR** _( x0, x1, rho)_
    

Bivariate normal distribution of two standard normal variables with correlation coefficient rho. Two variates x0 and x1 must be provided. Constraints: 0 <= rho <= 1, 0 <= p <= 1. 

Function: __**PDF.CAUCHY** _( x, a, b)_
Function: __**CDF.CAUCHY** _( x, a, b)_
Function: __**IDF.CAUCHY** _( p, a, b)_
Function: __**RV.CAUCHY** _( a, b)_
    

Cauchy distribution with location parameter a and scale parameter b. Constraints: b > 0, 0 < p < 1\. 

Function: __**CDF.CHISQ** _( x, df)_
Function: __**SIG.CHISQ** _( x, df)_
Function: __**IDF.CHISQ** _( p, df)_
Function: __**RV.CHISQ** _( df)_
Function: __**NCDF.CHISQ** _( x, df, lambda)_
    

Chi-squared distribution with df degrees of freedom. The noncentral distribution takes an additional parameter lambda. Constraints: df > 0, lambda > 0, x >= 0, 0 <= p < 1\. 

Function: __**PDF.EXP** _( x, a)_
Function: __**CDF.EXP** _( x, a)_
Function: __**IDF.EXP** _( p, a)_
Function: __**RV.EXP** _( a)_
    

Exponential distribution with scale parameter a. The inverse of a represents the rate of decay. Constraints: a > 0, x >= 0, 0 <= p < 1\. 

Function: __**PDF.XPOWER** _( x, a, b)_
Function: __**RV.XPOWER** _( a, b)_
    

Exponential power distribution with positive scale parameter a and nonnegative power parameter b. Constraints: a > 0, b >= 0, x >= 0, 0 <= p <= 1. This distribution is a PSPP extension. 

Function: __**PDF.F** _( x, df1, df2)_
Function: __**CDF.F** _( x, df1, df2)_
Function: __**SIG.F** _( x, df1, df2)_
Function: __**IDF.F** _( p, df1, df2)_
Function: __**RV.F** _( df1, df2)_
    

F-distribution of two chi-squared deviates with df1 and df2 degrees of freedom. The noncentral distribution takes an additional parameter lambda. Constraints: df1 > 0, df2 > 0, lambda >= 0, x >= 0, 0 <= p < 1\. 

Function: __**PDF.GAMMA** _( x, a, b)_
Function: __**CDF.GAMMA** _( x, a, b)_
Function: __**IDF.GAMMA** _( p, a, b)_
Function: __**RV.GAMMA** _( a, b)_
    

Gamma distribution with shape parameter a and scale parameter b. Constraints: a > 0, b > 0, x >= 0, 0 <= p < 1\. 

Function: __**PDF.LANDAU** _( x)_
Function: __**RV.LANDAU** _()_
    

Landau distribution. 

Function: __**PDF.LAPLACE** _( x, a, b)_
Function: __**CDF.LAPLACE** _( x, a, b)_
Function: __**IDF.LAPLACE** _( p, a, b)_
Function: __**RV.LAPLACE** _( a, b)_
    

Laplace distribution with location parameter a and scale parameter b. Constraints: b > 0, 0 < p < 1\. 

Function: __**RV.LEVY** _( c, alpha)_
    

Levy symmetric alpha-stable distribution with scale c and exponent alpha. Constraints: 0 < alpha <= 2. 

Function: __**RV.LVSKEW** _( c, alpha, beta)_
    

Levy skew alpha-stable distribution with scale c, exponent alpha, and skewness parameter beta. Constraints: 0 < alpha <= 2, -1 <= beta <= 1. 

Function: __**PDF.LOGISTIC** _( x, a, b)_
Function: __**CDF.LOGISTIC** _( x, a, b)_
Function: __**IDF.LOGISTIC** _( p, a, b)_
Function: __**RV.LOGISTIC** _( a, b)_
    

Logistic distribution with location parameter a and scale parameter b. Constraints: b > 0, 0 < p < 1\. 

Function: __**PDF.LNORMAL** _( x, a, b)_
Function: __**CDF.LNORMAL** _( x, a, b)_
Function: __**IDF.LNORMAL** _( p, a, b)_
Function: __**RV.LNORMAL** _( a, b)_
    

Lognormal distribution with parameters a and b. Constraints: a > 0, b > 0, x >= 0, 0 <= p < 1\. 

Function: __**PDF.NORMAL** _( x, mu, sigma)_
Function: __**CDF.NORMAL** _( x, mu, sigma)_
Function: __**IDF.NORMAL** _( p, mu, sigma)_
Function: __**RV.NORMAL** _( mu, sigma)_
    

Normal distribution with mean mu and standard deviation sigma. Constraints: b > 0, 0 < p < 1\. Three additional functions are available as shorthand: 

Function: __**CDFNORM** _( x)_
    

Equivalent to CDF.NORMAL(x, 0, 1). 

Function: __**PROBIT** _( p)_
    

Equivalent to IDF.NORMAL(p, 0, 1). 

Function: __**NORMAL** _( sigma)_
    

Equivalent to RV.NORMAL(0, sigma). 

Function: __**PDF.NTAIL** _( x, a, sigma)_
Function: __**RV.NTAIL** _( a, sigma)_
    

Normal tail distribution with lower limit a and standard deviation sigma. This distribution is a PSPP extension. Constraints: a > 0, x > a, 0 < p < 1\. 

Function: __**PDF.PARETO** _( x, a, b)_
Function: __**CDF.PARETO** _( x, a, b)_
Function: __**IDF.PARETO** _( p, a, b)_
Function: __**RV.PARETO** _( a, b)_
    

Pareto distribution with threshold parameter a and shape parameter b. Constraints: a > 0, b > 0, x >= a, 0 <= p < 1\. 

Function: __**PDF.RAYLEIGH** _( x, sigma)_
Function: __**CDF.RAYLEIGH** _( x, sigma)_
Function: __**IDF.RAYLEIGH** _( p, sigma)_
Function: __**RV.RAYLEIGH** _( sigma)_
    

Rayleigh distribution with scale parameter sigma. This distribution is a PSPP extension. Constraints: sigma > 0, x > 0\. 

Function: __**PDF.RTAIL** _( x, a, sigma)_
Function: __**RV.RTAIL** _( a, sigma)_
    

Rayleigh tail distribution with lower limit a and scale parameter sigma. This distribution is a PSPP extension. Constraints: a > 0, sigma > 0, x > a. 

Function: __**PDF.T** _( x, df)_
Function: __**CDF.T** _( x, df)_
Function: __**IDF.T** _( p, df)_
Function: __**RV.T** _( df)_
    

T-distribution with df degrees of freedom. The noncentral distribution takes an additional parameter lambda. Constraints: df > 0, 0 < p < 1\. 

Function: __**PDF.T1G** _( x, a, b)_
Function: __**CDF.T1G** _( x, a, b)_
Function: __**IDF.T1G** _( p, a, b)_
    

Type-1 Gumbel distribution with parameters a and b. This distribution is a PSPP extension. Constraints: 0 < p < 1\. 

Function: __**PDF.T2G** _( x, a, b)_
Function: __**CDF.T2G** _( x, a, b)_
Function: __**IDF.T2G** _( p, a, b)_
    

Type-2 Gumbel distribution with parameters a and b. This distribution is a PSPP extension. Constraints: x > 0, 0 < p < 1\. 

Function: __**PDF.UNIFORM** _( x, a, b)_
Function: __**CDF.UNIFORM** _( x, a, b)_
Function: __**IDF.UNIFORM** _( p, a, b)_
Function: __**RV.UNIFORM** _( a, b)_
    

Uniform distribution with parameters a and b. Constraints: a <= x <= b, 0 <= p <= 1. An additional function is available as shorthand: 

Function: __**UNIFORM** _( b)_
    

Equivalent to RV.UNIFORM(0, b). 

Function: __**PDF.WEIBULL** _( x, a, b)_
Function: __**CDF.WEIBULL** _( x, a, b)_
Function: __**IDF.WEIBULL** _( p, a, b)_
Function: __**RV.WEIBULL** _( a, b)_
    

Weibull distribution with parameters a and b. Constraints: a > 0, b > 0, x >= 0, 0 <= p < 1\.
