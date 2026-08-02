### 17.19 PRESERVE 和 RESTORE

    PRESERVE.
    …
    RESTORE.


`PRESERVE` 保存 `SET`（参见 [SET](SET.md)）能够调整的所有设置。后续的 `RESTORE` 命令恢复这些设置。

`PRESERVE` 最多可嵌套五层。
