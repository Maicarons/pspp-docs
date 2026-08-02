import{_ as T,o as A,c as L,a2 as S}from"./chunks/framework.Bg-Zxr5O.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/SAVE-TRANSLATE-_002fTYPE_003dCSV-and-TYPE_003dTAB.md","filePath":"manual-zh/SAVE-TRANSLATE-_002fTYPE_003dCSV-and-TYPE_003dTAB.md","lastUpdated":1785684581000}'),a={name:"manual-zh/SAVE-TRANSLATE-_002fTYPE_003dCSV-and-TYPE_003dTAB.md"};function e(I,E,n,_,t,M){return A(),L("div",null,[...E[0]||(E[0]=[S(`<h4 id="_9-8-1-写入逗号分隔和制表符分隔的数据文件" tabindex="-1">9.8.1 写入逗号分隔和制表符分隔的数据文件 <a class="header-anchor" href="#_9-8-1-写入逗号分隔和制表符分隔的数据文件" aria-label="Permalink to &quot;9.8.1 写入逗号分隔和制表符分隔的数据文件&quot;">​</a></h4><pre><code>SAVE TRANSLATE
        /OUTFILE={’file_name’,file_handle}
        /TYPE=CSV
        [/REPLACE]
        [/MISSING={IGNORE,RECODE}]

        [/DROP=var_list]
        [/KEEP=var_list]
        [/RENAME=(src_names=target_names)…]
        [/UNSELECTED={RETAIN,DELETE}]

        [/FIELDNAMES]
        [/CELLS={VALUES,LABELS}]
        [/TEXTOPTIONS DELIMITER=’delimiter’]
        [/TEXTOPTIONS QUALIFIER=’qualifier’]
        [/TEXTOPTIONS DECIMAL={DOT,COMMA}]
        [/TEXTOPTIONS FORMAT={PLAIN,VARIABLE}]
</code></pre><p>带有 TYPE=CSV 或 TYPE=TAB 的 SAVE TRANSLATE 命令以类似 RFC 4180 所描述的逗号或制表符分隔值格式写入数据。每个变量成为输出的一列，每个个案成为输出的一行。如果指定了 FIELDNAMES，则输出文件顶部的额外一行列出变量名。</p><p>CELLS 和 TEXTOPTIONS FORMAT 设置决定取值如何写入输出文件：</p><p>CELLS=VALUES FORMAT=PLAIN（默认设置）</p><p>以“普通”格式写入变量，忽略变量格式的细节。数值作为普通十进制数字写入，具有足以表示其机器表示中精确值的位数。当指数值小于 -4 或大于 16 时，数值后附带 ‘e’ 及指数。日期以 MM/DD/YYYY 格式写入，时间以 HH:MM:SS 格式写入。WKDAY 和 MONTH 值作为十进制数字写入。</p><p>数值默认使用由 SET DECIMAL 设置的句点字符（参见 <a href="./SET#SET-DECIMAL">SET DECIMAL</a>）。使用 DECIMAL=DOT 或 DECIMAL=COMMA 可强制使用特定的句点字符。</p><p>CELLS=VALUES FORMAT=VARIABLE</p><p>使用变量的打印格式写入变量。数值的首尾空格被移除，字符串值的尾部空格被移除。</p><p>CELLS=LABEL FORMAT=PLAIN CELLS=LABEL FORMAT=VARIABLE</p><p>在值标签存在时写入值标签，否则按上述方式写入取值本身。</p><p>无论 CELLS 和 TEXTOPTIONS FORMAT 如何设置，数值型系统缺失值都输出为单个空格。</p><p>对于 TYPE=TAB，制表符分隔取值。对于 TYPE=CSV，TEXTOPTIONS DELIMITER 和 DECIMAL 设置决定一行内分隔取值的字符。如果指定了 DELIMITER，则使用指定的字符串分隔取值。如果未指定 DELIMITER，则默认为：DECIMAL=DOT 时为逗号，DECIMAL=COMMA 时为分号。如果也未给出 DECIMAL，则由 SET DECIMAL 设置的句点字符隐含决定（参见 <a href="./SET#SET-DECIMAL">SET DECIMAL</a>）。</p><p>TEXTOPTIONS QUALIFIER 设置指定一个字符，在包含分隔符字符或限定符字符的取值前后输出。默认是双引号（‘&quot;’）。出现在取值内部的限定符字符会写成两个。</p>`,14)])])}const O=T(a,[["render",e]]);export{C as __pageData,O as default};
