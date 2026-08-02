#### 示例

  1. DATA LIST TABLE /NAME 1-10 (A) INFO1 TO INFO3 12-17 (1).

         BEGIN DATA.
         John Smith 102311
         Bob Arnold 122015
         Bill Yates  918 6
         END DATA.


定义以下变量：

     * `NAME`，一个 10 字符宽的字符串变量，位于第 1 至 10 列。
     * `INFO1`，一个数值变量，位于第 12 至 13 列。
     * `INFO2`，一个数值变量，位于第 14 至 15 列。
     * `INFO3`，一个数值变量，位于第 16 至 17 列。

`BEGIN DATA`/`END DATA` 命令定义了三个个案：

    Case   NAME         INFO1   INFO2   INFO3
       1   John Smith     10      23      11
       2   Bob Arnold     12      20      15
       3   Bill Yates      9      18       6

`TABLE` 关键字使 PSPP 打印出描述所定义四个变量的表。

  2. DATA LIST FILE="survey.dat"
                 /ID 1-5 NAME 7-36 (A) SURNAME 38-67 (A) MINITIAL 69 (A)
                 /Q01 TO Q50 7-56
                 /.

定义以下变量：

     * `ID`，一个数值变量，位于第一个记录的第 1-5 列。
     * `NAME`，一个 30 字符的字符串变量，位于第一个记录的第 7-36 列。
     * `SURNAME`，一个 30 字符的字符串变量，位于第一个记录的第 38-67 列。
     * `MINITIAL`，一个 1 字符的字符串变量，位于第一个记录的第 69 列。
     * 五十个变量 `Q01`、`Q02`、`Q03`、…、`Q49`、`Q50`，均为数值型，`Q01` 在第 7 列，`Q02` 在第 8 列，…，`Q49` 在第 55 列，`Q50` 在第 56 列，全部位于第二个记录。

个案之间以一个空记录分隔。

数据从当前目录下的 survey.dat 文件中读取。
