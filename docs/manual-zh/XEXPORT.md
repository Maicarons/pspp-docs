### 9.10 XEXPORT
    
    
    XEXPORT
            /OUTFILE=’file_name’
            /DIGITS=n
            /DROP=var_list
            /KEEP=var_list
            /RENAME=(src_names=target_names)…
            /TYPE={COMM,TAPE}
            /MAP
    

`XEXPORT` 变换将活动数据集的字典与数据写入指定的可移植文件。

此变换是 PSPP 扩展。

它与 `EXPORT` 过程类似，有两处不同：

  * `XEXPORT` 是一个变换，而非过程。它在数据被过程或类过程命令读取时执行。 
  * `XEXPORT` 不支持 `UNSELECTED` 子命令。 

更多信息请见 [EXPORT](EXPORT.md)。
