### 15.9 GLM
    
    
    GLM dependent_vars BY fixed_factors
         [/METHOD = SSTYPE(type)]
         [/DESIGN = interaction_0 [interaction_1 [... interaction_n]]]
         [/INTERCEPT = {INCLUDE|EXCLUDE}]
         [/MISSING = {INCLUDE|EXCLUDE}]
    
    
`GLM` 过程可用于固定效应析因方差分析（Anova）。

dependent_vars 是要分析的变量。您可以在同一命令中分析多个变量，此时它们都应出现在 `BY` 关键字之前。

fixed_factors 列表必须是一个或多个分类变量。通常，将标量变量放入 fixed_factors 没有意义，这样做可能导致 PSPP 执行大量不必要的处理。

`METHOD` 子命令用于更改生成平方和的方法。type 的可用值为 1、2 和 3。默认为 type 3。

您可以使用 `DESIGN` 子命令指定自定义设计。设计由交互列表组成，其中每个交互是用 ‘*’ 分隔的变量列表。例如命令
    
    
    GLM subject BY sex age_group race
        /DESIGN = age_group sex group age_group*sex age_group*race
    
    
指定模型 _subject = age_group + sex + race + age_group*sex + age_group*race_。如果未指定 `DESIGN` 子命令，则默认是所有固定因子的所有可能组合。也就是说
    
    
    GLM subject BY sex age_group race
    
    
意味着模型 _subject = age_group + sex + race + age_group*sex + age_group*race + sex*race + age_group*sex*race_。

`MISSING` 子命令决定对缺失变量的处理。如果设置为 `INCLUDE`，则出于 GLM 分析的目的，只有系统缺失值被视为缺失；用户缺失值不被视为缺失。如果设置为 `EXCLUDE`（默认值），则用户缺失值与系统缺失值一样被视为缺失。任何因变量或任何因子变量具有缺失值的个案都会被排除在分析之外。
