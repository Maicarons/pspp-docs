#### 16.4.7.1 The `BREAK` Command

`BREAK` 命令可以用在循环体内，通常在 `DO IF` 命令内部。如果它被执行，则循环立即终止，跳转到 `END LOOP` 之后的命令。当多个 `LOOP` 命令嵌套时，`BREAK` 终止最内层的循环。

以下示例是对上面示例的修改，展示了 `BREAK` 如何替代 `LOOP` 和 `END LOOP` 上的索引和 `IF` 子句：

    COMPUTE l = {}.
    LOOP n = 2 TO 10.
      COMPUTE a = n.
      COMPUTE i = 1.
      LOOP.
        DO IF MOD(a, 2) = 0.
          COMPUTE a = TRUNC(a &** (1/2)).
        ELSE.
          COMPUTE a = TRUNC(a &** (3/2)).
        END IF.
        DO IF a = 1.
          BREAK.
        END IF.
        COMPUTE i = i + 1.
      END LOOP.
      COMPUTE l = {l; i}.
    END LOOP.
    PRINT l.
