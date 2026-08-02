### 13.2 N OF CASES

    N [OF CASES] num_of_cases [ESTIMATED].


`N OF CASES` 限制其之后命令流中任意过程所处理的个案数量。例如，`N OF CASES 100` 告诉 PSPP 忽略前 100 个之后的所有个案。

当 `N OF CASES` 在 `TEMPORARY` 之后指定时，它只影响下一个过程（参见 [TEMPORARY](TEMPORARY.md)）。否则，超出指定限制的个案不会被任何后续过程处理。

如果 `N OF CASES` 上指定的限制大于活动数据集中的个案数量，则不起作用。

当 `N OF CASES` 与 `SAMPLE` 或 `SELECT IF` 一起使用时，个案限制应用于抽样或个案选择之后获得的个案，无论 `N OF CASES` 在命令文件中相对于 `SAMPLE` 或 `SELECT IF` 的位置如何。因此，无论它们在命令文件中的顺序如何，`N OF CASES 100` 和 `SAMPLE .5` 都会先随机抽取活动数据集大约一半的个案，然后选择这些被抽样个案中的前 100 个。

带有 `ESTIMATED` 关键字的 `N OF CASES` 在 `DATA LIST` 或另一个读取数据的命令之前给出估计的个案数量。`ESTIMATED` 从不限制过程所处理的个案数量。PSPP 当前不使用个案计数估计值。
