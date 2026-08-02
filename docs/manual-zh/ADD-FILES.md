### 10.2 ADD FILES
    
    
    
    ADD FILES
    
    Per input file:
            /FILE={*,’file_name’}
            [/RENAME=(src_names=target_names)…]
            [/IN=var_name]
            [/SORT]
    
    Once per command:
            [/BY var_list[({D|A})] [var_list[({D|A})]…]]
            [/DROP=var_list]
            [/KEEP=var_list]
            [/FIRST=var_name]
            [/LAST=var_name]
            [/MAP]
    
    

`ADD FILES` 用于合并多个输入文件中的个案。其输出（将替换活动数据集）包含全部输入文件中的所有个案。

`ADD FILES` 的大部分语法与其他用于合并多个数据文件的 PSPP 命令相同。有关这套公共语法的说明，请参见上文的 [Combining Files Common Syntax](Combining-Files-Common-Syntax.md)。

未使用 `BY` 时，`ADD FILES` 的输出依次包含第一个指定输入文件的所有个案，随后是第二个文件的所有个案，依此类推。使用 `BY` 时，输出还会按 `BY` 变量排序。

当 `ADD FILES` 创建输出个案时，凡不属于该个案所来源输入文件的变量，对于数值变量将被设为系统缺失值，对于字符串变量则被设为空格。
