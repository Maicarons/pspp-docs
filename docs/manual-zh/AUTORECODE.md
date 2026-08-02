### 12.2 AUTORECODE
    
    
    AUTORECODE VARIABLES=src_vars INTO dest_vars
            [ /DESCENDING ]
            [ /PRINT ]
            [ /GROUP ]
            [ /BLANK = {VALID, MISSING} ]
    

`AUTORECODE` 过程考虑一个变量所取的 n 个值，并将它们映射到新数值变量上的值 1…n。

`VARIABLES` 子命令是唯一必需的子命令，且必须排在第一位。指定 `VARIABLES`、等号（‘=’）、源变量列表、`INTO`，以及目标变量列表。源变量和目标变量的数量必须相同。目标变量必须尚未存在。

`AUTORECODE` 通常将源变量的每个递增的非缺失值（对于字符串，基于字符编码比较）赋给其目标变量的连续取值。例如，源变量的最小非缺失值被重编码为 1，次小的为 2，依此类推。如果源变量有用户缺失值，它们会被重编码为紧接在非缺失值之上的连续取值。例如，如果源变量有七个不同的非缺失值，则最小的缺失值会被重编码为 8，次小的为 9，依此类推。

使用 `DESCENDING` 可反转非缺失值的排序顺序，使最大的非缺失值被重编码为 1，第二大为 2，依此类推。即使使用 `DESCENDING`，用户缺失值仍按升序重编码为紧接在非缺失值之上的取值。

系统缺失值总是被重编码为目标变量中的系统缺失值。

如果源值有值标签，则该值标签会保留给目标变量中的新值。否则，源值本身成为每个新值的标签。

变量标签从源变量复制到目标变量。

`PRINT` 当前被忽略。

`GROUP` 子命令仅当要对多个变量重编码时相关。它使源值与目标值之间使用单一的映射，而不是每个变量各用一张映射表。使用 `GROUP` 时，用户缺失值取自第一个含有任何用户缺失值的源变量。

如果给定 `/BLANK=MISSING`，则仅包含空白的字符串变量被重编码为 SYSMIS。如果指定 `/BLANK=VALID`，则它们像其他值一样被分配一个取值。`/BLANK` 与数值无关。`/BLANK=VALID` 为默认值。

`AUTORECODE` 是一个过程。它会导致数据被读取。它会忽略 `TEMPORARY`（参见 [TEMPORARY](TEMPORARY.md)），因此“临时”转换会变成永久转换。

#### 12.2.1 自动重编码示例

在文件 personnel.sav 中，变量 **occupation** 是一个字符串变量。除纯注释性质的数据外，字符串变量通常不是一个好选择。原因之一是数据录入错误很容易被忽略。这在 personnel.sav 中就发生了：本应录入“Scientist”的一项被误录为“Scrientist”。在示例 12.2 中，首先通过 `DO IF` 子句纠正该错误（3），然后使用 `AUTORECODE` 创建一个新数值变量，其取值为 **occupation** 的重编码值。最后，删除旧变量，并将新变量重命名为旧变量的名称。

```
get file='personnel.sav'.  * Correct a typing error in the original file. do if occupation = "Scrientist".  compute occupation = "Scientist". end if.  autorecode 	variables = occupation into occ 	/blank = missing.  * Delete the old variable. delete variables occupation.  * Rename the new variable to the old variable's name. rename variables (occ = occupation).  * Inspect the new variable. display dictionary /variables=occupation.
```

**示例 12.2：** 在纠正数据录入错误后，使用 `AUTORECODE` 将字符串变量转换为数值变量

```

```

**截图 12.1：** 自动重编码对话框，设置为将 **occupation** 重编码为 **occ**

注意在结果 12.1 中，新变量已被自动分配了与旧变量字符串相对应的取值标签。这意味着在未来的分析中，会报告这些描述性字符串，而不是数值。

| Name | Position | Measurement Level | Role | Width | Alignment | Print Format | Write Format |
| --- | --- | --- | --- | --- | --- | --- | --- |
| occupation | 6 | Unknown | Input | 8 | Right | F2.0 | F2.0 |
| Variable Value | Label |  |  |  |  |  |  |
| occupation | 1 | Artist |  |  |  |  |  |
| 2 | Baker |  |  |  |  |  |  |
| 3 | Barrister |  |  |  |  |  |  |
| 4 | Carpenter |  |  |  |  |  |  |
| 5 | Cleaner |  |  |  |  |  |  |
| 6 | Cook |  |  |  |  |  |  |
| 7 | Manager |  |  |  |  |  |  |
| 8 | Mathematician |  |  |  |  |  |  |
| 9 | Painter |  |  |  |  |  |  |
| 10 | Payload Specialist |  |  |  |  |  |  |
| 11 | Plumber |  |  |  |  |  |  |
| 12 | Scientist |  |  |  |  |  |  |
| 13 | Tailor |  |  |  |  |  |  |

**结果 12.1：** `AUTORECODE` 之后 **occupation** 变量的属性

#### 脚注

##### (3)

在纠正此类数据录入错误时，必须谨慎，而不是简单地将其标记为缺失。例如，如果某个职业被录入为“Barister”，这个人是指“Barrister”还是指“Barista”？
