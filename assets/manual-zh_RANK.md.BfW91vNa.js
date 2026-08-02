import{_ as o,o as d,c,a2 as a}from"./chunks/framework.Bg-Zxr5O.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/RANK.md","filePath":"manual-zh/RANK.md","lastUpdated":1785684581000}'),N={name:"manual-zh/RANK.md"};function t(n,e,r,A,I,R){return d(),c("div",null,[...e[0]||(e[0]=[a(`<h3 id="_15-16-rank" tabindex="-1">15.16 RANK <a class="header-anchor" href="#_15-16-rank" aria-label="Permalink to &quot;15.16 RANK&quot;">​</a></h3><pre><code>RANK
        [VARIABLES=] var_list [{A,D}] [BY var_list]
        /TIES={MEAN,LOW,HIGH,CONDENSE}
        /FRACTION={BLOM,TUKEY,VW,RANKIT}
        /PRINT[={YES,NO}
        /MISSING={EXCLUDE,INCLUDE}

        /RANK [INTO var_list]
        /NTILES(k) [INTO var_list]
        /NORMAL [INTO var_list]
        /PERCENT [INTO var_list]
        /RFRACTION [INTO var_list]
        /PROPORTION [INTO var_list]
        /N [INTO var_list]
        /SAVAGE [INTO var_list]
</code></pre><p><code>RANK</code> 命令对变量进行秩排序，并将结果存入新变量。</p><p>必选的 <code>VARIABLES</code> 子命令指定一个或多个要对其值进行排序的变量。在每个变量之后可以出现 ‘A’ 或 ‘D’，表示该变量按升序或降序排序。默认为升序。如果出现 <code>BY</code> 关键字，则其后应跟一个作为分组变量的变量列表。在这种情况下，个案被归入各组，并为每组计算秩。</p><p><code>TIES</code> 子命令指定如何处理并列值。默认取所有并列个案的均值。</p><p><code>FRACTION</code> 子命令指定如何计算比例秩。仅当请求 <code>NORMAL</code> 或 <code>PROPORTIONAL</code> 秩函数时才起作用。</p><p><code>PRINT</code> 子命令可用于指定在输出中显示所创建秩变量的摘要。</p><p>函数子命令为 <code>RANK</code>、<code>NTILES</code>、<code>NORMAL</code>、<code>PERCENT</code>、<code>RFRACTION</code>、<code>PROPORTION</code> 和 <code>SAVAGE</code>。可以出现任意数量的函子命令。如果均未给出，则默认为 RANK。<code>NTILES</code> 子命令必须带一个整数，指定值应被排序划分的区段数。每个子命令后面可以跟 <code>INTO</code> 关键字以及一个变量列表，这些变量即为要创建并接收秩得分的变量。指定的变量数量可以多达 <code>VARIABLES</code> 子命令上命名的变量数量。如果指定较少，则变量名会自动创建。</p><p><code>MISSING</code> 子命令决定如何处理用户缺失值。<code>EXCLUDE</code> 设置表示值属于用户缺失值的变量将被排除在秩得分之外。<code>INCLUDE</code> 设置表示将它们包含在内。默认值为 <code>EXCLUDE</code>。</p>`,9)])])}const s=o(N,[["render",t]]);export{_ as __pageData,s as default};
