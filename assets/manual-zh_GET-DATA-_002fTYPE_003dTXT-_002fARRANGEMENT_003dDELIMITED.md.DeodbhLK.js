import{_ as o,o as t,c as a,a2 as E}from"./chunks/framework.Bg-Zxr5O.js";const I=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/GET-DATA-_002fTYPE_003dTXT-_002fARRANGEMENT_003dDELIMITED.md","filePath":"manual-zh/GET-DATA-_002fTYPE_003dTXT-_002fARRANGEMENT_003dDELIMITED.md","lastUpdated":1785684581000}'),n={name:"manual-zh/GET-DATA-_002fTYPE_003dTXT-_002fARRANGEMENT_003dDELIMITED.md"};function T(d,e,A,r,c,p){return t(),a("div",null,[...e[0]||(e[0]=[E(`<h4 id="_9-4-3-1-读取分隔数据" tabindex="-1">9.4.3.1 读取分隔数据 <a class="header-anchor" href="#_9-4-3-1-读取分隔数据" aria-label="Permalink to &quot;9.4.3.1 读取分隔数据&quot;">​</a></h4><pre><code>GET DATA /TYPE=TXT
        /FILE={’file_name’,file_handle}
        [/ARRANGEMENT={DELIMITED,FIXED}]
        [/FIRSTCASE={first_case}]
        [/IMPORTCASE={ALL,FIRST max_cases,PERCENT percent}]

        /DELIMITERS=&quot;delimiters&quot;
        [/QUALIFIER=&quot;quotes&quot;
        [/DELCASE={LINE,VARIABLES n_variables}]
        /VARIABLES=del_var1 [del_var2]…
where each del_var takes the form:
        variable format
</code></pre><p><code>GET DATA</code> 命令在 TYPE=TXT 且 ARRANGEMENT=DELIMITED 时，以分隔格式从文本文件读取输入数据，其中字段由一组用户指定的分隔符分隔。其功能类似于 DATA LIST FREE（见 <a href="./DATA-LIST-FREE">DATA LIST FREE</a>），但有一些增强。</p><p>必需的 <code>FILE</code> 子命令以及可选的 <code>FIRSTCASE</code> 和 <code>IMPORTCASE</code> 子命令如上所述（见 <a href="./GET-DATA-_002fTYPE_003dTXT">GET DATA /TYPE=TXT</a>）。</p><p><code>DELIMITERS</code> 是必需的，指定可用于分隔字段的字符集。<code>DELIMITERS</code> 上指定字符串中的每个字符将一个个字段与下一个分隔开。无论 <code>DELIMITERS</code> 如何，行尾也会分隔字段。输入中两个连续的分隔符会产生一个空字段，行尾的分隔符也是如此。作为分隔符的空格字符是一个例外：连续的空格不会产生空字段，行尾任意数量的空格也不会。</p><p>要将制表符用作分隔符，请在 <code>DELIMITERS</code> 字符串开头指定 ‘\\t’。要将反斜杠用作分隔符，请指定 ‘\\\\’ 作为第一个分隔符，或者如果制表符也应为分隔符，则紧跟在 ‘\\t’ 之后指定。要读取每个字段出现在单独一行的数据文件，请为 <code>DELIMITERS</code> 指定空字符串。</p><p>可选的 <code>QUALIFIER</code> 子命令命名一个或多个可用于引用输入中字段内值的字符。以指定引号字符之一开头的字段在下一个匹配引号处结束。其间出现的所有分隔符成为字段的一部分，而不是终止字段。能够指定多个引号字符是 PSPP 的扩展。</p><p><code>QUALIFIER</code> 上指定的字符可以通过将该限定符加倍来嵌入其引用的字段中。例如，如果在 <code>QUALIFIER</code> 上指定了 ‘&#39;’，则 <code>&#39;a&#39;&#39;b&#39;</code> 指定包含 ‘a&#39;b’ 的字段。</p><p><code>DELCASE</code> 子命令控制数据在文件中如何跨行断开。使用 LINE（默认设置），每行必须包含恰好一个个案的所有数据。为获得额外灵活性，允许单个个案拆分到多行或多个个案包含在一行中，请指定 VARIABLES <em>n_variables</em>，其中 <em>n_variables</em> 是每个个案的变量数。</p><p><code>VARIABLES</code> 子命令是必需的，且必须是最后一个子命令。按应从输入文件读取的顺序指定每个变量的名称及其输入格式（见 <a href="./Input-and-Output-Formats">输入与输出格式</a>）。</p><h4 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h4><p>在类 Unix 系统上，‘/etc/passwd’ 文件的格式类似于：</p><pre><code>root:$1$nyeSP5gD$pDq/:0:0:,,,:/root:/bin/bash
blp:$1$BrP/pFg4$g7OG:1000:1000:Ben Pfaff,,,:/home/blp:/bin/bash
john:$1$JBuq/Fioq$g4A:1001:1001:John Darrington,,,:/home/john:/bin/bash
jhs:$1$D3li4hPL$88X1:1002:1002:Jason Stover,,,:/home/jhs:/bin/csh
</code></pre><p>以下语法读取 ‘/etc/passwd’ 格式的文件：</p><pre><code>GET DATA /TYPE=TXT /FILE=&#39;/etc/passwd&#39; /DELIMITERS=&#39;:&#39;
        /VARIABLES=username A20
                   password A40
                   uid F10
                   gid F10
                   gecos A40
                   home A40
                   shell A40.
</code></pre><p>考虑以下关于二手车的数据：</p><pre><code>model   year    mileage price   type    age
Civic   2002    29883   15900   Si      2
Civic   2003    13415   15900   EX      1
Civic   1992    107000  3800    n/a     12
Accord  2002    26613   17900   EX      1
</code></pre><p>以下语法可用于读取二手车数据：</p><pre><code>GET DATA /TYPE=TXT /FILE=&#39;cars.data&#39; /DELIMITERS=&#39; &#39; /FIRSTCASE=2
        /VARIABLES=model A8
                   year F4
                   mileage F6
                   price F5
                   type A4
                   age F2.
</code></pre><p>考虑以下关于宠物店动物的信息：</p><pre><code>&#39;Pet&#39;&#39;s Name&#39;, &quot;Age&quot;, &quot;Color&quot;, &quot;Date Received&quot;, &quot;Price&quot;, &quot;Height&quot;, &quot;Type&quot;
, (Years), , , (Dollars), ,
&quot;Rover&quot;, 4.5, Brown, &quot;12 Feb 2004&quot;, 80, &#39;1&#39;&#39;4&quot;&#39;, &quot;Dog&quot;
&quot;Charlie&quot;, , Gold, &quot;5 Apr 2007&quot;, 12.3, &quot;3&quot;&quot;&quot;, &quot;Fish&quot;
&quot;Molly&quot;, 2, Black, &quot;12 Dec 2006&quot;, 25, &#39;5&quot;&#39;, &quot;Cat&quot;
&quot;Gilly&quot;, , White, &quot;10 Apr 2007&quot;, 10, &quot;3&quot;&quot;&quot;, &quot;Guinea Pig&quot;
</code></pre><p>以下语法可用于读取宠物店数据：</p><pre><code>GET DATA /TYPE=TXT /FILE=&#39;pets.data&#39; /DELIMITERS=&#39;, &#39; /QUALIFIER=&#39;&#39;&#39;&quot;&#39; /ESCAPE
        /FIRSTCASE=3
        /VARIABLES=name A10
                   age F3.1
                   color A5
                   received EDATE10
                   price F5.2
                   height a5
                   type a10.
</code></pre>`,23)])])}const i=o(n,[["render",T]]);export{I as __pageData,i as default};
