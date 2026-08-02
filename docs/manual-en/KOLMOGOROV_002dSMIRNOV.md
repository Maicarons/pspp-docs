#### 15.12.6 Kolmogorov-Smirnov Test
    
    
         [ /KOLMOGOROV-SMIRNOV ({NORMAL [mu, sigma], UNIFORM [min, max], POISSON [lambda], EXPONENTIAL [scale] }) = var_list ]
    

The one-sample Kolmogorov-Smirnov subcommand is used to test whether or not a dataset is drawn from a particular distribution. Four distributions are supported, _viz:_ Normal, Uniform, Poisson and Exponential. 

Ideally you should provide the parameters of the distribution against which you wish to test the data. For example, with the normal distribution the mean (mu)and standard deviation (sigma) should be given; with the uniform distribution, the minimum (min)and maximum (max) value should be provided. However, if the parameters are omitted they are imputed from the data. Imputing the parameters reduces the power of the test so should be avoided if possible. 

In the following example, two variables score and age are tested to see if they follow a normal distribution with a mean of 3.5 and a standard deviation of 2.0. 
    
    
      NPAR TESTS
            /KOLMOGOROV-SMIRNOV (normal 3.5 2.0) = score age.
    

If the variables need to be tested against different distributions, then a separate subcommand must be used. For example the following syntax tests score against a normal distribution with mean of 3.5 and standard deviation of 2.0 whilst age is tested against a normal distribution of mean 40 and standard deviation 1.5. 
    
    
      NPAR TESTS
            /KOLMOGOROV-SMIRNOV (normal 3.5 2.0) = score
            /KOLMOGOROV-SMIRNOV (normal 40 1.5) =  age.
    

The abbreviated subcommand `K-S` may be used in place of `KOLMOGOROV-SMIRNOV`.
