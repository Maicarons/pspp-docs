import{_ as a,o as n,c as o,a2 as s}from"./chunks/framework.Bg-Zxr5O.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/MISSING-VALUES.md","filePath":"manual-zh/MISSING-VALUES.md","lastUpdated":1785684581000}'),t={name:"manual-zh/MISSING-VALUES.md"};function S(r,e,c,d,m,i){return n(),o("div",null,[...e[0]||(e[0]=[s(`<h3 id="_11-13-missing-values" tabindex="-1">11.13 MISSING VALUES <a class="header-anchor" href="#_11-13-missing-values" aria-label="Permalink to &quot;11.13 MISSING VALUES&quot;">​</a></h3><p>在许多情况下，可用于分析的数据是不完整的，必须用占位符代替某个值以表明该值未知。缺失值的一种表示方式是通过 $SYSMIS 变量（参见 <a href="./System-Variables">System Variables</a>）。另一种更灵活的方式是通过_用户缺失值_（user-missing values），它是按每个变量分别确定的。</p><p><code>MISSING VALUES</code> 命令为变量设置用户缺失值。</p><pre><code>MISSING VALUES var_list (missing_values).

where missing_values takes one of the following forms:
        num1
        num1, num2
        num1, num2, num3
        num1 THRU num2
        num1 THRU num2, num3
        string1
        string1, string2
        string1, string2, string3
As part of a range, LO or LOWEST may take the place of num1;
HI or HIGHEST may take the place of num2.
</code></pre><p><code>MISSING VALUES</code> 为数值变量和字符串变量设置用户缺失值。长字符串变量可以有缺失值，但缺失值第 8 个字节之后的字符必须为空格。</p><p>指定一个变量列表，后跟括号内的用户缺失值列表。最多可以给出三个离散值，或者（仅限数值变量）一个可选附带单个离散值的值域。值域可以一端开放，通过使用关键字 <code>LO</code> 或 <code>LOWEST</code> 或 <code>HI</code> 或 <code>HIGHEST</code> 来表示。</p><p><code>MISSING VALUES</code> 命令立即生效。它不受 <code>DO IF</code> 或 <code>LOOP</code> 等条件和循环结构的影响。</p>`,7)])])}const I=a(t,[["render",S]]);export{u as __pageData,I as default};
