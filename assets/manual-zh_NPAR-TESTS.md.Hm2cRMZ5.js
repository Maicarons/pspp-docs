import{_ as d,o as e,c as r,a2 as a}from"./chunks/framework.Bg-Zxr5O.js";const N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/NPAR-TESTS.md","filePath":"manual-zh/NPAR-TESTS.md","lastUpdated":1785684581000}'),n={name:"manual-zh/NPAR-TESTS.md"};function o(S,t,T,c,s,E){return e(),r("div",null,[...t[0]||(t[0]=[a(`<h3 id="_15-12-npar-tests" tabindex="-1">15.12 NPAR TESTS <a class="header-anchor" href="#_15-12-npar-tests" aria-label="Permalink to &quot;15.12 NPAR TESTS&quot;">​</a></h3><pre><code>NPAR TESTS

     nonparametric test subcommands
     .
     .
     .

     [ /STATISTICS={DESCRIPTIVES} ]

     [ /MISSING={ANALYSIS, LISTWISE} {INCLUDE, EXCLUDE} ]

     [ /METHOD=EXACT [ TIMER [(n)] ] ]
</code></pre><p><code>NPAR TESTS</code> 执行非参数检验。非参数检验对数据的分布所作假设极少。可以使用相应的子命令指定一个或多个检验。如果同时指定了 <code>/STATISTICS</code> 子命令，则会为作为任意检验对象的每个变量生成汇总统计量。</p><p>如果需要精确数值，某些检验的执行可能耗时很长。因此，默认使用渐近近似，除非指定了子命令 <code>/METHOD=EXACT</code>。精确检验给出更准确的结果，但执行时间可能长得无法接受。如果使用 <code>TIMER</code> 关键字，则设置一个最长时间，超过该时间后放弃检验并打印警告消息。时间应以分钟为单位，在 <code>TIMER</code> 关键字后的括号中指定。如果 <code>TIMER</code> 关键字没有给出该数值，则使用默认值 5 分钟。</p><table tabindex="0"><thead><tr><th>• BINOMIAL</th><th></th><th>二项分布检验</th></tr></thead><tbody><tr><td>• CHISQUARE</td><td></td><td>卡方检验</td></tr><tr><td>• COCHRAN</td><td></td><td>Cochran Q 检验</td></tr><tr><td>• FRIEDMAN</td><td></td><td>Friedman 检验</td></tr><tr><td>• KENDALL</td><td></td><td>Kendall’s W 检验</td></tr><tr><td>• KOLMOGOROV-SMIRNOV</td><td></td><td>Kolmogorov-Smirnov 检验</td></tr><tr><td>• KRUSKAL-WALLIS</td><td></td><td>Kruskal-Wallis 检验</td></tr><tr><td>• MANN-WHITNEY</td><td></td><td>Mann-Whitney U 检验</td></tr><tr><td>• MCNEMAR</td><td></td><td>McNemar 检验</td></tr><tr><td>• MEDIAN</td><td></td><td>中位数检验</td></tr><tr><td>• RUNS</td><td></td><td>游程检验</td></tr><tr><td>• SIGN</td><td></td><td>符号检验</td></tr><tr><td>• WILCOXON</td><td></td><td>Wilcoxon 符号秩检验</td></tr></tbody></table>`,5)])])}const A=d(n,[["render",o]]);export{N as __pageData,A as default};
