### 13.6 TEMPORARY
    
    
    TEMPORARY.
    

`TEMPORARY` 用于使其后的变换效果成为临时性的。这些变换仅影响下一个过程或类过程命令的执行。其效果不会被保存到活动数据集。

`TEMPORARY` 唯一的说明就是命令名本身。

`TEMPORARY` 不能出现在 `DO IF` 或 `LOOP` 结构内部。它在过程与类过程命令之间只能出现一次。

`TEMPORARY` 之后不能使用临时变量。

#### 13.6.1 TEMPORARY 示例

在示例 13.4 中有两个 `COMPUTE` 变换。其中一个紧接在 `TEMPORARY` 命令之后，因此只对下一个过程有效，在本例中即第一个 `DESCRIPTIVES` 命令。

```
data list notable /x 1-2. begin data.  2  4 10 15 20 24 end data.  compute x=x/2.  temporary. compute x=x+3.  descriptives x. descriptives x.
```

**示例 13.4：** 在 `TEMPORARY` 之后运行 `COMPUTE` 变换

第一个 `DESCRIPTIVES` 过程读取的数据为 4、5、8、10.5、13、15。第二个 `DESCRIPTIVES` 过程读取的数据为 1、2、5、7.5、10、12。这是因为第二个 `COMPUTE` 变换对第二个 `DESCRIPTIVES` 过程不起作用。你可以在结果 13.2 中核对这些数值。

|  | N | 均值 | 标准差 | 最小值 | 最大值 |
| --- | --- | --- | --- | --- | --- |
| x | 6 | 9.25 | 4.38 | 4 | 15 |
| 有效 N（列表法） | 6 |  |  |  |  |
| 缺失 N（列表法） | 0 |  |  |  |  |
|  | N | 均值 | 标准差 | 最小值 | 最大值 |
| x | 6 | 6.25 | 4.38 | 1 | 12 |
| 有效 N（列表法） | 6 |  |  |  |  |
| 缺失 N（列表法） | 0 |  |  |  |  |

**结果 13.2：** 在临时变换之后连续运行两个 `DESCRIPTIVES` 命令的结果
