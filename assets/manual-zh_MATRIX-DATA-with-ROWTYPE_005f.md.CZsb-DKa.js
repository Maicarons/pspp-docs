import{_ as a,o,c as R,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/MATRIX-DATA-with-ROWTYPE_005f.md","filePath":"manual-zh/MATRIX-DATA-with-ROWTYPE_005f.md","lastUpdated":1785684581000}'),d={name:"manual-zh/MATRIX-DATA-with-ROWTYPE_005f.md"};function c(r,e,A,t,O,l){return o(),R("div",null,[...e[0]||(e[0]=[n(`<h4 id="_16-2-1-with-rowtype" tabindex="-1">16.2.1 With <code>ROWTYPE_</code> <a class="header-anchor" href="#_16-2-1-with-rowtype" aria-label="Permalink to &quot;16.2.1 With \`ROWTYPE_\`&quot;">​</a></h4><p>如果 <code>VARIABLES</code> 包含 <code>ROWTYPE_</code>，则每个个案的 <code>ROWTYPE_</code> 指示该行所包含数据的类型。受支持的行类型列表参见 <a href="./Matrix-Files#Matrix-File-Row-Types">Matrix File Row Types</a>。</p><h4 id="example-1-defaults-with-rowtype" tabindex="-1">Example 1: Defaults with <code>ROWTYPE_</code> <a class="header-anchor" href="#example-1-defaults-with-rowtype" aria-label="Permalink to &quot;Example 1: Defaults with \`ROWTYPE_\`&quot;">​</a></h4><p>本例展示了 <code>MATRIX DATA</code> 配合 <code>ROWTYPE_</code> 以及名为 <code>var01</code> 到 <code>var08</code> 的 8 个变量的简单用法。</p><p>由于 <code>ROWTYPE_</code> 是 <code>VARIABLES</code> 中的第一个变量，它出现在每一行的首位。示例数据的前三行具有分别为‘MEAN’、‘SD’和‘N’的 <code>ROWTYPE_</code> 值。这些表明这些行分别包含 <code>var01</code> 到 <code>var08</code> 依次对应的均值、标准差和计数的向量。</p><p>其余 8 行的 ROWTYPE_ 为‘CORR’，表明这些值是相关系数。每一行对应于相关矩阵中的一行：第一行为 <code>var01</code>，下一行为 <code>var02</code>，依此类推。由于 <code>FORMAT=LOWER DIAGONAL</code> 是默认值，输入仅包含下三角（含对角线）的值。</p><p>使用 <code>ROWTYPE_</code> 时，<code>CONTENTS</code> 子命令是可选的，且不能使用 <code>CELLS</code> 子命令。</p><pre><code>MATRIX DATA
    VARIABLES=ROWTYPE_ var01 TO var08.
BEGIN DATA.
MEAN  24.3   5.4  69.7  20.1  13.4   2.7  27.9   3.7
SD     5.7   1.5  23.5   5.8   2.8   4.5   5.4   1.5
N       92    92    92    92    92    92    92    92
CORR  1.00
CORR   .18  1.00
CORR  -.22  -.17  1.00
CORR   .36   .31  -.14  1.00
CORR   .27   .16  -.12   .22  1.00
CORR   .33   .15  -.17   .24   .21  1.00
CORR   .50   .29  -.20   .32   .12   .38  1.00
CORR   .17   .29  -.05   .20   .27   .20   .04  1.00
END DATA.
</code></pre><h4 id="example-2-format-upper-nodiagonal" tabindex="-1">Example 2: <code>FORMAT=UPPER NODIAGONAL</code> <a class="header-anchor" href="#example-2-format-upper-nodiagonal" aria-label="Permalink to &quot;Example 2: \`FORMAT=UPPER NODIAGONAL\`&quot;">​</a></h4><p>此语法生成与示例 1 相同的矩阵文件，但它使用 <code>FORMAT=UPPER NODIAGONAL</code> 指定上三角并省略对角线。由于矩阵的 <code>ROWTYPE_</code> 为 <code>CORR</code>，PSPP 自动用 1 填充对角线。</p><pre><code>MATRIX DATA
    VARIABLES=ROWTYPE_ var01 TO var08
    /FORMAT=UPPER NODIAGONAL.
BEGIN DATA.
MEAN  24.3   5.4  69.7  20.1  13.4   2.7  27.9   3.7
SD     5.7   1.5  23.5   5.8   2.8   4.5   5.4   1.5
N       92    92    92    92    92    92    92    92
CORR         .17   .50  -.33   .27   .36  -.22   .18
CORR               .29   .29  -.20   .32   .12   .38
CORR                     .05   .20  -.15   .16   .21
CORR                           .20   .32  -.17   .12
CORR                                 .27   .12  -.24
CORR                                      -.20  -.38
CORR                                             .04
END DATA.
</code></pre><h4 id="example-3-n-subcommand" tabindex="-1">Example 3: <code>N</code> subcommand <a class="header-anchor" href="#example-3-n-subcommand" aria-label="Permalink to &quot;Example 3: \`N\` subcommand&quot;">​</a></h4><p>此语法使用 <code>N</code> 子命令代替 <code>N</code> 向量。它生成与示例 1 和 2 相同的矩阵文件。</p><pre><code>MATRIX DATA
    VARIABLES=ROWTYPE_ var01 TO var08
    /FORMAT=UPPER NODIAGONAL
    /N 92.
BEGIN DATA.
MEAN  24.3   5.4  69.7  20.1  13.4   2.7  27.9   3.7
SD     5.7   1.5  23.5   5.8   2.8   4.5   5.4   1.5
CORR         .17   .50  -.33   .27   .36  -.22   .18
CORR               .29   .29  -.20   .32   .12   .38
CORR                     .05   .20  -.15   .16   .21
CORR                           .20   .32  -.17   .12
CORR                                 .27   .12  -.24
CORR                                      -.20  -.38
CORR                                             .04
END DATA.
</code></pre><h4 id="example-4-split-variables" tabindex="-1">Example 4: Split variables <a class="header-anchor" href="#example-4-split-variables" aria-label="Permalink to &quot;Example 4: Split variables&quot;">​</a></h4><p>此语法使用变量‘s1’来区分两个矩阵。注意输入中变量的顺序与它们在 <code>VARIABLES</code> 上的顺序相匹配。本例还使用了 <code>FORMAT=FULL</code>。</p><pre><code>MATRIX DATA
    VARIABLES=s1 ROWTYPE_  var01 TO var04
    /SPLIT=s1
    /FORMAT=FULL.
BEGIN DATA.
0 MEAN 34 35 36 37
0 SD   22 11 55 66
0 N    99 98 99 92
0 CORR  1 .9 .8 .7
0 CORR .9  1 .6 .5
0 CORR .8 .6  1 .4
0 CORR .7 .5 .4  1
1 MEAN 44 45 34 39
1 SD   23 15 51 46
1 N    98 34 87 23
1 CORR  1 .2 .3 .4
1 CORR .2  1 .5 .6
1 CORR .3 .5  1 .7
1 CORR .4 .6 .7  1
END DATA.
</code></pre><h4 id="example-5-factor-variables" tabindex="-1">Example 5: Factor variables <a class="header-anchor" href="#example-5-factor-variables" aria-label="Permalink to &quot;Example 5: Factor variables&quot;">​</a></h4><p>此语法定义了一个包含因子变量‘f1’的矩阵文件。数据包含该因子变量两个取值的均值、标准差和计数向量，以及合并数据的相关矩阵。</p><pre><code>MATRIX DATA
    VARIABLES=ROWTYPE_ f1 var01 TO var04
    /FACTOR=f1.
BEGIN DATA.
MEAN 0 34 35 36 37
SD   0 22 11 55 66
N    0 99 98 99 92
MEAN 1 44 45 34 39
SD   1 23 15 51 46
N    1 98 34 87 23
CORR .  1
CORR . .9  1
CORR . .8 .6  1
CORR . .7 .5 .4  1
END DATA.
</code></pre>`,20)])])}const i=a(d,[["render",c]]);export{p as __pageData,i as default};
