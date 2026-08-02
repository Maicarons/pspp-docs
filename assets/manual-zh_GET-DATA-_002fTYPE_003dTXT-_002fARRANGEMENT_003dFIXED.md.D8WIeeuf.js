import{_ as a,o as T,c as E,a2 as A}from"./chunks/framework.Bg-Zxr5O.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/GET-DATA-_002fTYPE_003dTXT-_002fARRANGEMENT_003dFIXED.md","filePath":"manual-zh/GET-DATA-_002fTYPE_003dTXT-_002fARRANGEMENT_003dFIXED.md","lastUpdated":1785684581000}'),d={name:"manual-zh/GET-DATA-_002fTYPE_003dTXT-_002fARRANGEMENT_003dFIXED.md"};function r(n,e,_,o,c,t){return T(),E("div",null,[...e[0]||(e[0]=[A(`<h4 id="_9-4-3-2-读取固定列式数据" tabindex="-1">9.4.3.2 读取固定列式数据 <a class="header-anchor" href="#_9-4-3-2-读取固定列式数据" aria-label="Permalink to &quot;9.4.3.2 读取固定列式数据&quot;">​</a></h4><pre><code>GET DATA /TYPE=TXT
        /FILE={’file_name’,file_handle}
        [/ARRANGEMENT={DELIMITED,FIXED}]
        [/FIRSTCASE={first_case}]
        [/IMPORTCASE={ALL,FIRST max_cases,PERCENT percent}]

        [/FIXCASE=n]
        /VARIABLES fixed_var [fixed_var]…
            [/rec# fixed_var [fixed_var]…]…
where each fixed_var takes the form:
        variable start-end format
</code></pre><p><code>GET DATA</code> 命令在 TYPE=TXT 且 ARRANGEMENT=FIXED 时，以固定格式从文本文件读取输入数据，其中每个字段位于个案记录中特定的固定列位置。其功能类似于 DATA LIST FIXED（见 <a href="./DATA-LIST-FIXED">DATA LIST FIXED</a>），但有一些增强。</p><p>必需的 <code>FILE</code> 子命令以及可选的 <code>FIRSTCASE</code> 和 <code>IMPORTCASE</code> 子命令如上所述（见 <a href="./GET-DATA-_002fTYPE_003dTXT">GET DATA /TYPE=TXT</a>）。</p><p>可选的 <code>FIXCASE</code> 子命令可用于指定构成每个个案的输入行数的正整数。默认值为 1。</p><p><code>VARIABLES</code> 子命令是必需的，指定可以找到每个变量的位置。对于每个变量，指定其名称，后跟用 ‘-’ 分隔的起始和结束列（<em>例如</em> ‘0-9’），后跟输入格式类型（<em>例如</em> ‘F’）或完整格式规范（<em>例如</em> ‘DOLLAR12.2’）。对于此命令，列从最左列开始从 0 编号。通过斜杠后跟个案中的行号（<em>例如</em> ‘/2’ 表示第二行）来引入个案第二行及以后行中的变量。</p><h4 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h4><p>考虑以下关于二手车的数据：</p><pre><code>model   year    mileage price   type    age
Civic   2002    29883   15900   Si      2
Civic   2003    13415   15900   EX      1
Civic   1992    107000  3800    n/a     12
Accord  2002    26613   17900   EX      1
</code></pre><p>以下语法可用于读取二手车数据：</p><pre><code>GET DATA /TYPE=TXT /FILE=&#39;cars.data&#39; /ARRANGEMENT=FIXED /FIRSTCASE=2
        /VARIABLES=model 0-7 A
                   year 8-15 F
                   mileage 16-23 F
                   price 24-31 F
                   type 32-40 A
                   age 40-47 F.
</code></pre>`,11)])])}const f=a(d,[["render",r]]);export{p as __pageData,f as default};
