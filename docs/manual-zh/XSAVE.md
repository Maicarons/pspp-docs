### 9.11 XSAVE
    
    
    XSAVE
            /OUTFILE=’file_name’
            /{UNCOMPRESSED,COMPRESSED,ZCOMPRESSED}
            /PERMISSIONS={WRITEABLE,READONLY}
            /DROP=var_list
            /KEEP=var_list
            /VERSION=version
            /RENAME=(src_names=target_names)…
            /NAMES
            /MAP
    

`XSAVE` 变换将活动数据集的字典与数据写入系统文件。它与 `SAVE` 过程类似，有两处不同：

  * `XSAVE` 是一个变换，而非过程。它在数据被过程或类过程命令读取时执行。 
  * `XSAVE` 不支持 `UNSELECTED` 子命令。 

更多信息请见 [SAVE](SAVE.md)。
