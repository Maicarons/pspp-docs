import{_ as a,o,c as n,a2 as d}from"./chunks/framework.Bg-Zxr5O.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/LEAVE.md","filePath":"manual-zh/LEAVE.md","lastUpdated":1785684581000}'),c={name:"manual-zh/LEAVE.md"};function t(E,e,r,p,_,s){return o(),n("div",null,[...e[0]||(e[0]=[d(`<h3 id="_11-21-leave" tabindex="-1">11.21 LEAVE <a class="header-anchor" href="#_11-21-leave" aria-label="Permalink to &quot;11.21 LEAVE&quot;">​</a></h3><p><code>LEAVE</code> 防止指定的变量在每次处理新个案时被重新初始化。</p><pre><code>LEAVE var_list.
</code></pre><p>通常，在处理数据文件时，活动数据集中的每个变量在对每个个案开始处理时都会被初始化为系统缺失值或空格。<code>LEAVE</code> 指定的变量则不会如此。相反，该变量对于第一个个案会被初始化为 0（而非系统缺失值）或空格，此后它在各个个案之间保持其取值。</p><p>这对于计数器很有用。例如，在下面的示例中，变量 <code>SUM</code> 维护了 <code>ITEM</code> 变量中取值的累计总和。</p><pre><code>DATA LIST /ITEM 1-3.
COMPUTE SUM=SUM+ITEM.
PRINT /ITEM SUM.
LEAVE SUM
BEGIN DATA.
123
404
555
999
END DATA.
</code></pre><p>该示例的部分输出：</p><pre><code>123   123.00
404   527.00
555  1082.00
999  2081.00
</code></pre><p>最好紧在调用过程命令之前使用 <code>LEAVE</code> 命令，因为变量的保留状态会被某些转换命令重置——例如 <code>COMPUTE</code> 和 <code>IF</code>。保留状态还会被所有过程调用重置。</p>`,9)])])}const T=a(c,[["render",t]]);export{A as __pageData,T as default};
