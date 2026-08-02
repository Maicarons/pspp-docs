#### 15.7.12 隐藏小计数
    
    
    /HIDESMALLCOUNTS COUNT=_count_
    

`HIDESMALLCOUNTS` 子命令是可选的。如果指定了它，则输出表中小于 _count_ 值的 `COUNT`、`ECOUNT` 和 `UCOUNT` 取值会显示为 `<_count_`，而不是它们的真实值。_count_ 的值必须是整数，且至少为 2。

以下语法和示例展示了如何使用 `HIDESMALLCOUNTS`：

    
    CTABLES /HIDESMALLCOUNTS COUNT=10 /TABLE placeOfLastDrinkBeforeDrive.
    

|  |  | Count |
| --- | --- | --- |
| 37. Please think about the most recent occasion that you drove within two hours of drinking alcoholic beverages. Where did you drink on that occasion? | Other (list) | <10 |
| Your home | 182 |  |
| Friend's home | 264 |  |
| Bar/Tavern/Club | 279 |  |
| Restaurant | 495 |  |
| Work | 21 |  |
| Bowling alley | <10 |  |
| Hotel/Motel | <10 |  |
| Country Club/Golf course | 17 |  |
| Drank in the car/On the road | <10 |  |
| Sporting event | 15 |  |
| Movie theater | <10 |  |
| Shopping/Store/Grocery store | <10 |  |
| Wedding | 15 |  |
| Party at someone else's home | 81 |  |
| Park/picnic | 14 |  |
| Party at your house | <10 |  |
