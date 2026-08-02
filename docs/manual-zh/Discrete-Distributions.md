#### 7.7.10.2 离散分布

以下是可用的离散分布：

Function: __**PDF.BERNOULLI** _( x)_
Function: __**CDF.BERNOULLI** _( x, p)_
Function: __**RV.BERNOULLI** _( p)_
    

成功概率为 p 的伯努利分布。约束：x = 0 或 1，0 <= p <= 1。

Function: __**PDF.BINOM** _( x, n, p)_
Function: __**CDF.BINOM** _( x, n, p)_
Function: __**RV.BINOM** _( n, p)_
    

试验次数为 n、成功概率为 p 的二项分布。约束：整数 n > 0，0 <= p <= 1，整数 x <= n。

Function: __**PDF.GEOM** _( x, n, p)_
Function: __**CDF.GEOM** _( x, n, p)_
Function: __**RV.GEOM** _( n, p)_
    

成功概率为 p 的几何分布。约束：0 <= p <= 1，整数 x > 0。

Function: __**PDF.HYPER** _( x, a, b, c)_
Function: __**CDF.HYPER** _( x, a, b, c)_
Function: __**RV.HYPER** _( a, b, c)_
    

当从 a 个对象中抽取 b 个、且可用对象中有 c 个具区分性时的超几何分布。约束：整数 a > 0，整数 b <= a，整数 c <= a，整数 x >= 0。

Function: __**PDF.LOG** _( x, p)_
Function: __**RV.LOG** _( p)_
    

概率参数为 p 的对数分布。约束：0 <= p < 1，x >= 1。

Function: __**PDF.NEGBIN** _( x, n, p)_
Function: __**CDF.NEGBIN** _( x, n, p)_
Function: __**RV.NEGBIN** _( n, p)_
    

成功次数参数为 n、成功概率参数为 p 的负二项分布。约束：整数 n >= 0，0 < p <= 1，整数 x >= 1。

Function: __**PDF.POISSON** _( x, mu)_
Function: __**CDF.POISSON** _( x, mu)_
Function: __**RV.POISSON** _( mu)_
    

均值为 mu 的泊松分布。约束：mu > 0，整数 x >= 0。
