#### 5.2.2 处理可疑数据

如果可能，应核查可疑数据并重新测量。然而，这可能并不总是可行，在这种情况下，研究者可能决定忽略这些值。PSPP 具有一个特性，即数据可以取特殊值‘SYSMIS’，并在后续分析中被忽略。参见 [缺失观测](Missing-Observations.md)。您可以使用 `RECODE` 命令将这两个可疑值设为‘SYSMIS’值。

    PSPP> recode height (179 = SYSMIS).
    PSPP> recode weight (LOWEST THRU 0 = SYSMIS).

第一条命令表示：对于任何 **height** 值为 179 的观测，该值应改为 SYSMIS 值。第二条命令表示：任何为零或负的 **weight** 值都应改为 SYSMIS。从此以后，它们将在分析中被忽略。有关 `RECODE` 命令的详细信息，参见 [RECODE](RECODE.md)。

如果您现在重新运行上一节中的 `DESCRIPTIVES` 或 `EXAMINE` 命令，您将看到一个参数更合理的数据汇总。您还会注意到，数据汇总中标注了那两个缺失值。
