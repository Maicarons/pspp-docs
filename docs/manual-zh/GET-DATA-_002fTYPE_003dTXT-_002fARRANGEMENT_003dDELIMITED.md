#### 9.4.3.1 读取分隔数据
    
    
    GET DATA /TYPE=TXT
            /FILE={’file_name’,file_handle}
            [/ARRANGEMENT={DELIMITED,FIXED}]
            [/FIRSTCASE={first_case}]
            [/IMPORTCASE={ALL,FIRST max_cases,PERCENT percent}]
    
            /DELIMITERS="delimiters"
            [/QUALIFIER="quotes"
            [/DELCASE={LINE,VARIABLES n_variables}]
            /VARIABLES=del_var1 [del_var2]…
    where each del_var takes the form:
            variable format
    
    
`GET DATA` 命令在 TYPE=TXT 且 ARRANGEMENT=DELIMITED 时，以分隔格式从文本文件读取输入数据，其中字段由一组用户指定的分隔符分隔。其功能类似于 DATA LIST FREE（见 [DATA LIST FREE](DATA-LIST-FREE.md)），但有一些增强。

必需的 `FILE` 子命令以及可选的 `FIRSTCASE` 和 `IMPORTCASE` 子命令如上所述（见 [GET DATA /TYPE=TXT](GET-DATA-_002fTYPE_003dTXT.md)）。

`DELIMITERS` 是必需的，指定可用于分隔字段的字符集。`DELIMITERS` 上指定字符串中的每个字符将一个个字段与下一个分隔开。无论 `DELIMITERS` 如何，行尾也会分隔字段。输入中两个连续的分隔符会产生一个空字段，行尾的分隔符也是如此。作为分隔符的空格字符是一个例外：连续的空格不会产生空字段，行尾任意数量的空格也不会。

要将制表符用作分隔符，请在 `DELIMITERS` 字符串开头指定 ‘\t’。要将反斜杠用作分隔符，请指定 ‘\\\’ 作为第一个分隔符，或者如果制表符也应为分隔符，则紧跟在 ‘\t’ 之后指定。要读取每个字段出现在单独一行的数据文件，请为 `DELIMITERS` 指定空字符串。

可选的 `QUALIFIER` 子命令命名一个或多个可用于引用输入中字段内值的字符。以指定引号字符之一开头的字段在下一个匹配引号处结束。其间出现的所有分隔符成为字段的一部分，而不是终止字段。能够指定多个引号字符是 PSPP 的扩展。

`QUALIFIER` 上指定的字符可以通过将该限定符加倍来嵌入其引用的字段中。例如，如果在 `QUALIFIER` 上指定了 ‘'’，则 `'a''b'` 指定包含 ‘a'b’ 的字段。

`DELCASE` 子命令控制数据在文件中如何跨行断开。使用 LINE（默认设置），每行必须包含恰好一个个案的所有数据。为获得额外灵活性，允许单个个案拆分到多行或多个个案包含在一行中，请指定 VARIABLES _n_variables_，其中 _n_variables_ 是每个个案的变量数。

`VARIABLES` 子命令是必需的，且必须是最后一个子命令。按应从输入文件读取的顺序指定每个变量的名称及其输入格式（见 [输入与输出格式](Input-and-Output-Formats.md)）。

#### 示例

在类 Unix 系统上，‘/etc/passwd’ 文件的格式类似于：

    root:$1$nyeSP5gD$pDq/:0:0:,,,:/root:/bin/bash
    blp:$1$BrP/pFg4$g7OG:1000:1000:Ben Pfaff,,,:/home/blp:/bin/bash
    john:$1$JBuq/Fioq$g4A:1001:1001:John Darrington,,,:/home/john:/bin/bash
    jhs:$1$D3li4hPL$88X1:1002:1002:Jason Stover,,,:/home/jhs:/bin/csh
    

以下语法读取 ‘/etc/passwd’ 格式的文件：

    GET DATA /TYPE=TXT /FILE='/etc/passwd' /DELIMITERS=':'
            /VARIABLES=username A20
                       password A40
                       uid F10
                       gid F10
                       gecos A40
                       home A40
                       shell A40.
    

考虑以下关于二手车的数据：

    model   year    mileage price   type    age
    Civic   2002    29883   15900   Si      2
    Civic   2003    13415   15900   EX      1
    Civic   1992    107000  3800    n/a     12
    Accord  2002    26613   17900   EX      1
    

以下语法可用于读取二手车数据：

    GET DATA /TYPE=TXT /FILE='cars.data' /DELIMITERS=' ' /FIRSTCASE=2
            /VARIABLES=model A8
                       year F4
                       mileage F6
                       price F5
                       type A4
                       age F2.
    

考虑以下关于宠物店动物的信息：

    'Pet''s Name', "Age", "Color", "Date Received", "Price", "Height", "Type"
    , (Years), , , (Dollars), ,
    "Rover", 4.5, Brown, "12 Feb 2004", 80, '1''4"', "Dog"
    "Charlie", , Gold, "5 Apr 2007", 12.3, "3""", "Fish"
    "Molly", 2, Black, "12 Dec 2006", 25, '5"', "Cat"
    "Gilly", , White, "10 Apr 2007", 10, "3""", "Guinea Pig"
    

以下语法可用于读取宠物店数据：

    GET DATA /TYPE=TXT /FILE='pets.data' /DELIMITERS=', ' /QUALIFIER='''"' /ESCAPE
            /FIRSTCASE=3
            /VARIABLES=name A10
                       age F3.1
                       color A5
                       received EDATE10
                       price F5.2
                       height a5
                       type a10.
