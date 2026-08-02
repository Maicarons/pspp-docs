#### 7.7.10.1 连续分布

以下是可用的连续分布：

Function: __**PDF.BETA** _( x)_
Function: __**CDF.BETA** _( x, a, b)_
Function: __**IDF.BETA** _( p, a, b)_
Function: __**RV.BETA** _( a, b)_
Function: __**NPDF.BETA** _( x, a, b, lambda)_
Function: __**NCDF.BETA** _( x, a, b, lambda)_
    

形状参数为 a 和 b 的 Beta 分布。非中心分布额外接受一个参数 lambda。约束：a > 0，b > 0，lambda >= 0，0 <= x <= 1，0 <= p <= 1。

Function: __**PDF.BVNOR** _( x0, x1, rho)_
Function: __**CDF.BVNOR** _( x0, x1, rho)_
    

两个标准正态变量、相关系数为 rho 的二元正态分布。必须提供两个变量 x0 和 x1。约束：0 <= rho <= 1，0 <= p <= 1。

Function: __**PDF.CAUCHY** _( x, a, b)_
Function: __**CDF.CAUCHY** _( x, a, b)_
Function: __**IDF.CAUCHY** _( p, a, b)_
Function: __**RV.CAUCHY** _( a, b)_
    

位置参数为 a、尺度参数为 b 的柯西分布。约束：b > 0，0 < p < 1。

Function: __**CDF.CHISQ** _( x, df)_
Function: __**SIG.CHISQ** _( x, df)_
Function: __**IDF.CHISQ** _( p, df)_
Function: __**RV.CHISQ** _( df)_
Function: __**NCDF.CHISQ** _( x, df, lambda)_
    

自由度为 df 的卡方分布。非中心分布额外接受一个参数 lambda。约束：df > 0，lambda > 0，x >= 0，0 <= p < 1。

Function: __**PDF.EXP** _( x, a)_
Function: __**CDF.EXP** _( x, a)_
Function: __**IDF.EXP** _( p, a)_
Function: __**RV.EXP** _( a)_
    

尺度参数为 a 的指数分布。a 的倒数表示衰减率。约束：a > 0，x >= 0，0 <= p < 1。

Function: __**PDF.XPOWER** _( x, a, b)_
Function: __**RV.XPOWER** _( a, b)_
    

尺度参数 a 为正、幂参数 b 非负的指数幂分布。约束：a > 0，b >= 0，x >= 0，0 <= p <= 1。此分布为 PSPP 扩展。

Function: __**PDF.F** _( x, df1, df2)_
Function: __**CDF.F** _( x, df1, df2)_
Function: __**SIG.F** _( x, df1, df2)_
Function: __**IDF.F** _( p, df1, df2)_
Function: __**RV.F** _( df1, df2)_
    

两个自由度为 df1 和 df2 的卡方偏离量的 F 分布。非中心分布额外接受一个参数 lambda。约束：df1 > 0，df2 > 0，lambda >= 0，x >= 0，0 <= p < 1。

Function: __**PDF.GAMMA** _( x, a, b)_
Function: __**CDF.GAMMA** _( x, a, b)_
Function: __**IDF.GAMMA** _( p, a, b)_
Function: __**RV.GAMMA** _( a, b)_
    

形状参数为 a、尺度参数为 b 的伽马分布。约束：a > 0，b > 0，x >= 0，0 <= p < 1。

Function: __**PDF.LANDAU** _( x)_
Function: __**RV.LANDAU** _()_
    

朗道分布。

Function: __**PDF.LAPLACE** _( x, a, b)_
Function: __**CDF.LAPLACE** _( x, a, b)_
Function: __**IDF.LAPLACE** _( p, a, b)_
Function: __**RV.LAPLACE** _( a, b)_
    

位置参数为 a、尺度参数为 b 的拉普拉斯分布。约束：b > 0，0 < p < 1。

Function: __**RV.LEVY** _( c, alpha)_
    

尺度为 c、指数为 alpha 的列维对称 α-稳定分布。约束：0 < alpha <= 2。

Function: __**RV.LVSKEW** _( c, alpha, beta)_
    

尺度为 c、指数为 alpha、偏度为参数 beta 的列维偏斜 α-稳定分布。约束：0 < alpha <= 2，-1 <= beta <= 1。

Function: __**PDF.LOGISTIC** _( x, a, b)_
Function: __**CDF.LOGISTIC** _( x, a, b)_
Function: __**IDF.LOGISTIC** _( p, a, b)_
Function: __**RV.LOGISTIC** _( a, b)_
    

位置参数为 a、尺度参数为 b 的逻辑斯谛分布。约束：b > 0，0 < p < 1。

Function: __**PDF.LNORMAL** _( x, a, b)_
Function: __**CDF.LNORMAL** _( x, a, b)_
Function: __**IDF.LNORMAL** _( p, a, b)_
Function: __**RV.LNORMAL** _( a, b)_
    

参数为 a 和 b 的对数正态分布。约束：a > 0，b > 0，x >= 0，0 <= p < 1。

Function: __**PDF.NORMAL** _( x, mu, sigma)_
Function: __**CDF.NORMAL** _( x, mu, sigma)_
Function: __**IDF.NORMAL** _( p, mu, sigma)_
Function: __**RV.NORMAL** _( mu, sigma)_
    

均值为 mu、标准差为 sigma 的正态分布。约束：b > 0，0 < p < 1。另有三个函数可用作简写：

Function: __**CDFNORM** _( x)_
    

等价于 CDF.NORMAL(x, 0, 1)。

Function: __**PROBIT** _( p)_
    

等价于 IDF.NORMAL(p, 0, 1)。

Function: __**NORMAL** _( sigma)_
    

等价于 RV.NORMAL(0, sigma)。

Function: __**PDF.NTAIL** _( x, a, sigma)_
Function: __**RV.NTAIL** _( a, sigma)_
    

下界为 a、标准差为 sigma 的正态尾分布。此分布为 PSPP 扩展。约束：a > 0，x > a，0 < p < 1。

Function: __**PDF.PARETO** _( x, a, b)_
Function: __**CDF.PARETO** _( x, a, b)_
Function: __**IDF.PARETO** _( p, a, b)_
Function: __**RV.PARETO** _( a, b)_
    

阈值为参数 a、形状为参数 b 的帕累托分布。约束：a > 0，b > 0，x >= a，0 <= p < 1。

Function: __**PDF.RAYLEIGH** _( x, sigma)_
Function: __**CDF.RAYLEIGH** _( x, sigma)_
Function: __**IDF.RAYLEIGH** _( p, sigma)_
Function: __**RV.RAYLEIGH** _( sigma)_
    

尺度参数为 sigma 的瑞利分布。此分布为 PSPP 扩展。约束：sigma > 0，x > 0。

Function: __**PDF.RTAIL** _( x, a, sigma)_
Function: __**RV.RTAIL** _( a, sigma)_
    

下界为 a、尺度参数为 sigma 的瑞利尾分布。此分布为 PSPP 扩展。约束：a > 0，sigma > 0，x > a。

Function: __**PDF.T** _( x, df)_
Function: __**CDF.T** _( x, df)_
Function: __**IDF.T** _( p, df)_
Function: __**RV.T** _( df)_
    

自由度为 df 的 t 分布。非中心分布额外接受一个参数 lambda。约束：df > 0，0 < p < 1。

Function: __**PDF.T1G** _( x, a, b)_
Function: __**CDF.T1G** _( x, a, b)_
Function: __**IDF.T1G** _( p, a, b)_
    

参数为 a 和 b 的 I 型冈贝尔分布。此分布为 PSPP 扩展。约束：0 < p < 1。

Function: __**PDF.T2G** _( x, a, b)_
Function: __**CDF.T2G** _( x, a, b)_
Function: __**IDF.T2G** _( p, a, b)_
    

参数为 a 和 b 的 II 型冈贝尔分布。此分布为 PSPP 扩展。约束：x > 0，0 < p < 1。

Function: __**PDF.UNIFORM** _( x, a, b)_
Function: __**CDF.UNIFORM** _( x, a, b)_
Function: __**IDF.UNIFORM** _( p, a, b)_
Function: __**RV.UNIFORM** _( a, b)_
    

参数为 a 和 b 的均匀分布。约束：a <= x <= b，0 <= p <= 1。另有函数可用作简写：

Function: __**UNIFORM** _( b)_
    

等价于 RV.UNIFORM(0, b)。

Function: __**PDF.WEIBULL** _( x, a, b)_
Function: __**CDF.WEIBULL** _( x, a, b)_
Function: __**IDF.WEIBULL** _( p, a, b)_
Function: __**RV.WEIBULL** _( a, b)_
    

参数为 a 和 b 的威布尔分布。约束：a > 0，b > 0，x >= 0，0 <= p < 1。
