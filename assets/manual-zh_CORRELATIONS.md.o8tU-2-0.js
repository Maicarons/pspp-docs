import{_ as o,o as c,c as d,a2 as I}from"./chunks/framework.Bg-Zxr5O.js";const R=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/CORRELATIONS.md","filePath":"manual-zh/CORRELATIONS.md","lastUpdated":1785684581000}'),a={name:"manual-zh/CORRELATIONS.md"};function S(T,e,t,n,r,A){return c(),d("div",null,[...e[0]||(e[0]=[I(`<h3 id="_15-5-correlations" tabindex="-1">15.5 CORRELATIONS <a class="header-anchor" href="#_15-5-correlations" aria-label="Permalink to &quot;15.5 CORRELATIONS&quot;">​</a></h3><pre><code>CORRELATIONS
     /VARIABLES = var_list [ WITH var_list ]
     [
      .
      .
      .
      /VARIABLES = var_list [ WITH var_list ]
      /VARIABLES = var_list [ WITH var_list ]
     ]

     [ /PRINT={TWOTAIL, ONETAIL} {SIG, NOSIG} ]
     [ /STATISTICS=DESCRIPTIVES XPROD ALL]
     [ /MISSING={PAIRWISE, LISTWISE} {INCLUDE, EXCLUDE} ]
</code></pre><p><code>CORRELATIONS</code> 过程生成一组变量的皮尔逊相关系数表。同时给出系数的显著性。</p><p>至少需要一个 <code>VARIABLES</code> 子命令。如果指定了 <code>WITH</code> 关键字，则生成非方阵相关表。<code>WITH</code> 之前的变量用作表的行，<code>WITH</code> 之后的变量用作表的列。如果未指定 <code>WITH</code> 子命令，则 <code>CORRELATIONS</code> 使用所有变量生成一个方阵、对称的表。</p><p><code>MISSING</code> 子命令决定对缺失变量的处理方式。如果设为 <code>INCLUDE</code>，则用户缺失值会纳入计算，但系统缺失值不会。如果设为 <code>EXCLUDE</code>（默认值），则用户缺失值和系统缺失值都会被排除。</p><p>如果设为 <code>LISTWISE</code>，则只要任何 <code>/VARIABLES</code> 子命令中指定的任一变量含有缺失值，整个个案就会被排除在分析之外。如果设为 <code>PAIRWISE</code>，则只有当某个特定系数对应的两个值之一缺失时，该个案才被视为缺失。默认值为 <code>PAIRWISE</code>。</p><p><code>PRINT</code> 子命令用于控制所报告显著性值的打印方式。如果使用 <code>TWOTAIL</code> 选项，则打印双尾显著性检验。如果给定 <code>ONETAIL</code> 选项，则使用单尾检验。默认值为 <code>TWOTAIL</code>。</p><p>如果指定 <code>NOSIG</code> 选项，则显著性小于 0.05 的相关系数会被高亮。如果指定 <code>SIG</code>，则不执行高亮。这是默认值。</p><p><code>STATISTICS</code> 子命令请求显示额外的统计量。<code>DESCRIPTIVES</code> 关键字请求显示均值、非缺失个案数，以及标准差的无偏估计量。这些统计量显示在单独的表中，涵盖任何 <code>/VARIABLES</code> 子命令中列出的所有变量。<code>XPROD</code> 关键字请求显示每一对变量的交叉乘积偏差和协方差估计量。<code>ALL</code> 关键字是 <code>DESCRIPTIVES</code> 和 <code>XPROD</code> 的并集。</p>`,9)])])}const L=o(a,[["render",S]]);export{R as __pageData,L as default};
