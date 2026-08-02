### 11.4 RENAME VARIABLES

`RENAME VARIABLES` 更改活动数据集中变量的名称。


    RENAME VARIABLES (old_names=new_names)… .


在括号内指定旧变量名列表和新变量名列表，两者之间用等号（‘=’）分隔。旧变量名和新变量名的个数必须相同。每个旧变量被重命名为对应的新变量名。可以指定多个用括号括起来的变量组。当旧变量名和新变量名都只包含一个变量名时，括号可省略。

`RENAME VARIABLES` 立即生效，不会导致数据被读取。

`RENAME VARIABLES` 不能出现在 `TEMPORARY` 之后（参见 [TEMPORARY](TEMPORARY.md)）。
