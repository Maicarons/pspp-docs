#### 15.12.6 Kolmogorov-Smirnov 检验
    
    
         [ /KOLMOGOROV-SMIRNOV ({NORMAL [mu, sigma], UNIFORM [min, max], POISSON [lambda], EXPONENTIAL [scale] }) = var_list ]
    
    
单样本 Kolmogorov-Smirnov 子命令用于检验数据集是否抽取自特定分布。支持四种分布，_即：_ 正态、均匀、泊松和指数。

理想情况下，您应提供要检验数据所针对的分布的参数。例如，对于正态分布，应给出均值（mu）和标准差（sigma）；对于均匀分布，应提供最小值（min）和最大值（max）。但是，如果省略参数，则会从数据中推算。推算参数会降低检验的功效，因此应尽可能避免。

在以下示例中，检验两个变量 score 和 age，看它们是否服从均值为 3.5、标准差为 2.0 的正态分布。
    
    
      NPAR TESTS
            /KOLMOGOROV-SMIRNOV (normal 3.5 2.0) = score age.
    
    
如果需要对变量检验不同的分布，则必须使用单独的子命令。例如，以下语法将 score 检验为均值 3.5、标准差 2.0 的正态分布，同时将 age 检验为均值 40、标准差 1.5 的正态分布。
    
    
      NPAR TESTS
            /KOLMOGOROV-SMIRNOV (normal 3.5 2.0) = score
            /KOLMOGOROV-SMIRNOV (normal 40 1.5) =  age.
    
    
可以使用缩写子命令 `K-S` 代替 `KOLMOGOROV-SMIRNOV`。
