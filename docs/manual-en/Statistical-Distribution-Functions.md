#### 7.7.10 Statistical Distribution Functions

PSPP can calculate several functions of standard statistical distributions. These functions are named systematically based on the function and the distribution. The table below describes the statistical distribution functions in general: 

PDF.dist (x[, param…])
    

Probability density function for dist. The domain of x depends on dist. For continuous distributions, the result is the density of the probability function at x, and the range is nonnegative real numbers. For discrete distributions, the result is the probability of x. 

CDF.dist (x[, param…])
    

Cumulative distribution function for dist, that is, the probability that a random variate drawn from the distribution is less than x. The domain of x depends dist. The result is a probability. 

SIG.dist (x[, param…)
    

Tail probability function for dist, that is, the probability that a random variate drawn from the distribution is greater than x. The domain of x depends dist. The result is a probability. Only a few distributions include an `SIG` function. 

IDF.dist (p[, param…])
    

Inverse distribution function for dist, the value of x for which the CDF would yield p. The value of p is a probability. The range depends on dist and is identical to the domain for the corresponding CDF. 

RV.dist ([param…])
    

Random variate function for dist. The range depends on the distribution. 

NPDF.dist (x[, param…])
    

Noncentral probability density function. The result is the density of the given noncentral distribution at x. The domain of x depends on dist. The range is nonnegative real numbers. Only a few distributions include an `NPDF` function. 

NCDF.dist (x[, param…])
    

Noncentral cumulative distribution function for dist, that is, the probability that a random variate drawn from the given noncentral distribution is less than x. The domain of x depends dist. The result is a probability. Only a few distributions include an NCDF function. 

The individual distributions are described individually below. 

| • Continuous Distributions |  |  |
| --- | --- | --- |
| • Discrete Distributions |  |  |
