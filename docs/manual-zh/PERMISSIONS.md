### 17.18 PERMISSIONS

    PERMISSIONS
            FILE=’file_name’
            /PERMISSIONS = {READONLY,WRITEABLE}.


`PERMISSIONS` 更改文件的权限。有一个必选子命令，用于指定文件应更改到的权限。如果将文件的权限设为 `READONLY`，则该文件将变为不可写，无论你自己还是系统上的其他人都无法写入。如果将权限设为 `WRITEABLE`，则该文件变为可由你写入；授予其他人的权限保持不变。如果 `SAFER`（参见 [SET](SET.md)）设置处于活动状态，则不能使用此命令。
