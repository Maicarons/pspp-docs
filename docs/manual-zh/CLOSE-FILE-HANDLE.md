### 8.2 CLOSE FILE HANDLE
    
    
    CLOSE FILE HANDLE handle_name.
    

`CLOSE FILE HANDLE` 解除文件句柄名称与给定文件之间的关联。唯一需要指定的就是要关闭的句柄名称。之后 `FILE HANDLE`。

名为 INLINE 的文件（表示在 `BEGIN DATA` 和 `END DATA` 之间输入的数据）无法被关闭。使用 `CLOSE FILE HANDLE` 关闭它的尝试没有效果。

`CLOSE FILE HANDLE` 是 PSPP 的扩展。
