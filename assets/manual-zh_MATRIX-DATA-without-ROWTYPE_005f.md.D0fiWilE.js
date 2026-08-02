import{_ as a,o,c as t,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const s=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/MATRIX-DATA-without-ROWTYPE_005f.md","filePath":"manual-zh/MATRIX-DATA-without-ROWTYPE_005f.md","lastUpdated":1785684581000}'),r={name:"manual-zh/MATRIX-DATA-without-ROWTYPE_005f.md"};function c(l,e,i,d,A,T){return o(),t("div",null,[...e[0]||(e[0]=[n(`<h4 id="_16-2-2-without-rowtype" tabindex="-1">16.2.2 Without <code>ROWTYPE_</code> <a class="header-anchor" href="#_16-2-2-without-rowtype" aria-label="Permalink to &quot;16.2.2 Without \`ROWTYPE_\`&quot;">​</a></h4><p>如果 <code>VARIABLES</code> 不包含 <code>ROWTYPE_</code>，则 <code>CONTENTS</code> 子命令定义文件中出现的行类型及其顺序。如果省略 <code>CONTENTS</code>，则假定为 <code>CONTENTS=CORR</code>。</p><p>没有 <code>ROWTYPE_</code> 的因子变量会引入特殊要求，如下面示例 8 和 9 所示。</p><h4 id="example-6-defaults-without-rowtype" tabindex="-1">Example 6: Defaults without <code>ROWTYPE_</code> <a class="header-anchor" href="#example-6-defaults-without-rowtype" aria-label="Permalink to &quot;Example 6: Defaults without \`ROWTYPE_\`&quot;">​</a></h4><p>本例展示了 <code>MATRIX DATA</code> 配合名为 <code>var01</code> 到 <code>var08</code> 的 8 个变量、但不带 <code>ROWTYPE_</code> 的简单用法。这生成与示例 1 相同的矩阵文件（参见 <a href="./MATRIX-DATA-with-ROWTYPE_005f#MATRIX-DATA-Example-1">MATRIX DATA Example 1</a>）。</p><pre><code>MATRIX DATA
    VARIABLES=var01 TO var08
   /CONTENTS=MEAN SD N CORR.
BEGIN DATA.
24.3   5.4  69.7  20.1  13.4   2.7  27.9   3.7
 5.7   1.5  23.5   5.8   2.8   4.5   5.4   1.5
  92    92    92    92    92    92    92    92
1.00
 .18  1.00
-.22  -.17  1.00
 .36   .31  -.14  1.00
 .27   .16  -.12   .22  1.00
 .33   .15  -.17   .24   .21  1.00
 .50   .29  -.20   .32   .12   .38  1.00
 .17   .29  -.05   .20   .27   .20   .04  1.00
END DATA.
</code></pre><h4 id="example-7-split-variables-with-explicit-values" tabindex="-1">Example 7: Split variables with explicit values <a class="header-anchor" href="#example-7-split-variables-with-explicit-values" aria-label="Permalink to &quot;Example 7: Split variables with explicit values&quot;">​</a></h4><p>此语法定义了两个矩阵，使用变量 <code>s1</code> 来区分它们。数据的每一行以 <code>s1</code> 开头。这生成与示例 4 相同的矩阵文件（参见 <a href="./MATRIX-DATA-with-ROWTYPE_005f#MATRIX-DATA-Example-4">MATRIX DATA Example 4</a>）。</p><pre><code>MATRIX DATA
    VARIABLES=s1 var01 TO var04
    /SPLIT=s1
    /FORMAT=FULL
    /CONTENTS=MEAN SD N CORR.
BEGIN DATA.
0 34 35 36 37
0 22 11 55 66
0 99 98 99 92
0  1 .9 .8 .7
0 .9  1 .6 .5
0 .8 .6  1 .4
0 .7 .5 .4  1
1 44 45 34 39
1 23 15 51 46
1 98 34 87 23
1  1 .2 .3 .4
1 .2  1 .5 .6
1 .3 .5  1 .7
1 .4 .6 .7  1
END DATA.
</code></pre><h4 id="example-8-split-variable-with-sequential-values" tabindex="-1">Example 8: Split variable with sequential values <a class="header-anchor" href="#example-8-split-variable-with-sequential-values" aria-label="Permalink to &quot;Example 8: Split variable with sequential values&quot;">​</a></h4><p>与前一个示例类似，此语法使用拆分变量 <code>s1</code> 定义了两个矩阵。不过在这种情况下，<code>s1</code> 没有列在 <code>VARIABLES</code> 中，这意味着它的值不会出现在数据中。相反，<code>MATRIX DATA</code> 读取矩阵数据直到输入耗尽，为第一个拆分提供 1，为第二个拆分提供 2，依此类推。</p><pre><code>MATRIX DATA
    VARIABLES=var01 TO var04
    /SPLIT=s1
    /FORMAT=FULL
    /CONTENTS=MEAN SD N CORR.
BEGIN DATA.
34 35 36 37
22 11 55 66
99 98 99 92
 1 .9 .8 .7
.9  1 .6 .5
.8 .6  1 .4
.7 .5 .4  1
44 45 34 39
23 15 51 46
98 34 87 23
 1 .2 .3 .4
.2  1 .5 .6
.3 .5  1 .7
.4 .6 .7  1
END DATA.
</code></pre><h4 id="_16-2-2-1-factor-variables-without-rowtype" tabindex="-1">16.2.2.1 Factor variables without <code>ROWTYPE_</code> <a class="header-anchor" href="#_16-2-2-1-factor-variables-without-rowtype" aria-label="Permalink to &quot;16.2.2.1 Factor variables without \`ROWTYPE_\`&quot;">​</a></h4><p>没有 <code>ROWTYPE_</code> 时，因子变量给 <code>MATRIX DATA</code> 语法引入两个新的难点。首先，<code>CELLS</code> 子命令必须声明数据中存在的因子变量组合数。例如，如果有一个因子变量，其数据包含三个取值，则应写 <code>CELLS=3</code>；如果有两个（或更多）因子变量，其数据包含五种组合，则应使用 <code>CELLS=5</code>；依此类推。</p><p>其次，<code>CONTENTS</code> 子命令必须通过将单元内行类型用括号括起来，以区分单元内数据与合并数据。当单个因子的不同单元内行类型出现在后续行中时，用一对方括号将这些行类型括起来；当给定单元内行类型的不同因子取值出现在后续行中时，将每个行类型用单独的括号括起来。</p><p>没有 <code>ROWTYPE_</code> 时，合并数据的输入行不包含因子取值，甚至连缺失值也不包含，但单元内数据的输入行包含。</p><p>以下示例旨在阐明此语法。</p><h4 id="example-9-factor-variables-grouping-within-cell-records-by-factor" tabindex="-1">Example 9: Factor variables, grouping within-cell records by factor <a class="header-anchor" href="#example-9-factor-variables-grouping-within-cell-records-by-factor" aria-label="Permalink to &quot;Example 9: Factor variables, grouping within-cell records by factor&quot;">​</a></h4><p>此语法定义了与示例 5（参见 <a href="./MATRIX-DATA-with-ROWTYPE_005f#MATRIX-DATA-Example-5">MATRIX DATA Example 5</a>）相同的矩阵文件，但不使用 <code>ROWTYPE_</code>。它声明 <code>CELLS=2</code>，因为数据包含因子变量 <code>f1</code> 的两个取值（0 和 1）。单元内向量行类型 <code>MEAN</code>、<code>SD</code> 和 <code>N</code> 在 <code>CONTENTS</code> 上处于一对方括号内，因为它们在后续行中按单个因子取值分组在一起。带有合并相关矩阵的数据行没有任何因子取值。</p><pre><code>MATRIX DATA
    VARIABLES=f1 var01 TO var04
    /FACTOR=f1
    /CELLS=2
    /CONTENTS=(MEAN SD N) CORR.
BEGIN DATA.
0 34 35 36 37
0 22 11 55 66
0 99 98 99 92
1 44 45 34 39
1 23 15 51 46
1 98 34 87 23
   1
  .9  1
  .8 .6  1
  .7 .5 .4  1
END DATA.
</code></pre><h4 id="example-10-factor-variables-grouping-within-cell-records-by-row-type" tabindex="-1">Example 10: Factor variables, grouping within-cell records by row type <a class="header-anchor" href="#example-10-factor-variables-grouping-within-cell-records-by-row-type" aria-label="Permalink to &quot;Example 10: Factor variables, grouping within-cell records by row type&quot;">​</a></h4><p>此语法定义了与上一个示例相同的矩阵文件。唯一的区别是单元内向量行的分组方式不同：两行均值（每个因子各一行），随后两行标准差，再随后两行计数。</p><pre><code>MATRIX DATA
    VARIABLES=f1 var01 TO var04
    /FACTOR=f1
    /CELLS=2
    /CONTENTS=(MEAN) (SD) (N) CORR.
BEGIN DATA.
0 34 35 36 37
1 44 45 34 39
0 22 11 55 66
1 23 15 51 46
0 99 98 99 92
1 98 34 87 23
   1
  .9  1
  .8 .6  1
  .7 .5 .4  1
END DATA.
</code></pre>`,23)])])}const h=a(r,[["render",c]]);export{s as __pageData,h as default};
