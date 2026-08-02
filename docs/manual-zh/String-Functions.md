#### 7.7.7 字符串函数

字符串函数接受不同类型的参数并返回不同类型的结果。

函数：__**CONCAT** _( string, string[, …])_
    

返回一个由各个字符串依次连接而成的字符串。`CONCAT("abc", "def", "ghi")` 的值为 `"abcdefghi"`。结果字符串会被截断至最多 32767 字节。

函数：__**INDEX** _( haystack, needle)_
函数：__**RINDEX** _( haystack, needle)_
    

返回一个正整数，表示 needle 在 haystack 中首次（对 `INDEX`）或最后（对 `RINDEX`）出现的位置。若 haystack 不包含 needle，则返回 0。若 needle 为空字符串，则返回 1。

函数：__**INDEX** _( haystack, needles, needle_len)_
函数：__**RINDEX** _( haystack, needle, needle_len)_
    

将 needles 划分为多个长度均为 needle_len 的 needle，needle_len 必须是能整除 needles 长度的正整数。在 haystack 中搜索每个 needle 的出现位置，并返回其首次（对 `INDEX`）或最后（对 `RINDEX`）出现的字节下标。若 haystack 不包含任何 needle，或 needles 为空字符串，则返回 0。

函数：__**LENGTH** _( string)_
    

返回 string 中的字节数。

函数：__**LOWER** _( string)_
    

返回一个与 string 相同的字符串，但所有大写字母改为小写字母。“大写”和“小写”的定义取决于系统。

函数：__**LPAD** _( string, length[, padding])_
函数：__**RPAD** _( string, length[, padding])_
    

若 string 长度至少为 length 字节，这些函数返回未改变的 string。否则，它们在 string 的左侧（对 `LPAD`）或右侧（对 `RPAD`）填充 padding 至 length 字节。若 length 缺失或大于 32767，这些函数报告错误并返回未改变的 string。

padding 参数不可为空字符串；若未指定，则默认为空格。若其长度不能恰好填满所需填充空间，返回的字符串将短于 length。

函数：__**LTRIM** _( string[, padding])_
函数：__**RTRIM** _( string[, padding])_
    

这些函数返回移除前导（对 `LTRIM`）或尾随（对 `RTRIM`）padding 副本后的 string。若省略 padding，这些函数移除空格（但不包括制表符或其他空白字符）。若 padding 为空字符串，这些函数返回未改变的 string。

函数：__**NUMBER** _( string, format)_
    

返回将 string 按格式说明符 format 解释后得到的数值。若格式宽度 w 小于 string 的长度，则只使用 string 的前 w 字节，例如 `NUMBER("123", F3.0)` 与 `NUMBER("1234", F3.0)` 的值均为 123。若 w 大于 string 的长度，则视为已用空格右填充。若 string 不符合 format 的正确格式，则返回系统缺失值。

函数：__**REPLACE** _( haystack, needle, replacement[, n])_
    

返回将 haystack 中 needle 的实例替换为 replacement 后的字符串。若指定非负整数 n，则限制最大替换次数；否则替换所有 needle 实例。

函数：__**STRING** _( number, format)_
    

返回对应于 number、且按格式说明符 format 给出的格式的字符串。例如，`STRING(123.56, F5.1)` 的值为 `"123.6"`。

函数：__**STRUNC** _( string, n)_
    

返回移除尾部空格（但不包括制表符或其他空白字符）后、且被截断至最多 n 字节的 string。若 n 为零或负数，返回空字符串；若 n 缺失，返回未改变的 string。

函数：__**SUBSTR** _( string, start)_
    

返回从位置 start 起到末尾的 string 值组成的字符串。若 start 为系统缺失值、小于 1 或大于 string 长度，返回空字符串。

函数：__**SUBSTR** _( string, start, count)_
    

返回从位置 start 开始、长度为 count 字节的 string 子串。若 start 或 count 为系统缺失值、start 小于 1 或大于 string 的字节数、或 count 小于 1，返回空字符串。若 start \+ count \- 1 大于 string 的字节数，返回短于 count 字节的字符串。示例：`SUBSTR("abcdefg", 3, 2)` 的值为 `"cd"`；`SUBSTR("nonsense", 4, 10)` 的值为 `"sense"`。

函数：__**UPCASE** _( string)_
    

返回将小写字母改为大写字母的 string。
