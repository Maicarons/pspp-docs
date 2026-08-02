#### 16.4.6 The `DO IF` Command

    DO IF _expression_.
      … _matrix commands_ …
    [ELSE IF _expression_.
      … _matrix commands_ …]…
    [ELSE
      … _matrix commands_ …]
    END IF.

`DO IF` 命令求值其表达式参数。如果 `DO IF` 表达式求值为真，则 PSPP 执行相关联的命令。否则，PSPP 按顺序求值每个 `ELSE IF` 子句（如果有）上的表达式，并执行第一个产生真值的命令。最后，如果 `DO IF` 和所有 `ELSE IF` 表达式都求值为假，PSPP 执行 `ELSE` 子句（如果有）之后的命令。

`DO IF` 和 `ELSE IF` 上的每个表达式必须求值为标量。正的标量被视为真，零或负的标量被视为假。

以下矩阵语言片段将‘b’设置为 [Juggler sequence](https://en.wikipedia.org/wiki/Juggler_sequence) 中‘a’之后的项：

    DO IF MOD(a, 2) = 0.
      COMPUTE b = TRUNC(a &** (1/2)).
    ELSE.
      COMPUTE b = TRUNC(a &** (3/2)).
    END IF.
