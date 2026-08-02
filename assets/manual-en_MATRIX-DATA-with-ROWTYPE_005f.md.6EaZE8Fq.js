import{_ as a,o as n,c as o,a2 as t}from"./chunks/framework.Bg-Zxr5O.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/MATRIX-DATA-with-ROWTYPE_005f.md","filePath":"manual-en/MATRIX-DATA-with-ROWTYPE_005f.md","lastUpdated":1785684581000}'),i={name:"manual-en/MATRIX-DATA-with-ROWTYPE_005f.md"};function r(d,e,s,c,l,R){return n(),o("div",null,[...e[0]||(e[0]=[t(`<h4 id="_16-2-1-with-rowtype" tabindex="-1">16.2.1 With <code>ROWTYPE_</code> <a class="header-anchor" href="#_16-2-1-with-rowtype" aria-label="Permalink to &quot;16.2.1 With \`ROWTYPE_\`&quot;">​</a></h4><p>If <code>VARIABLES</code> includes <code>ROWTYPE_</code>, each case’s <code>ROWTYPE_</code> indicates the type of data contained in the row. See <a href="./Matrix-Files#Matrix-File-Row-Types">Matrix File Row Types</a>, for a list of supported row types.</p><h4 id="example-1-defaults-with-rowtype" tabindex="-1">Example 1: Defaults with <code>ROWTYPE_</code> <a class="header-anchor" href="#example-1-defaults-with-rowtype" aria-label="Permalink to &quot;Example 1: Defaults with \`ROWTYPE_\`&quot;">​</a></h4><p>This example shows a simple use of <code>MATRIX DATA</code> with <code>ROWTYPE_</code> plus 8 variables named <code>var01</code> through <code>var08</code>.</p><p>Because <code>ROWTYPE_</code> is the first variable in <code>VARIABLES</code>, it appears first on each line. The first three lines in the example data have <code>ROWTYPE_</code> values of ‘MEAN’, ‘SD’, and ‘N’. These indicate that these lines contain vectors of means, standard deviations, and counts, respectively, for <code>var01</code> through <code>var08</code> in order.</p><p>The remaining 8 lines have a ROWTYPE_ of ‘CORR’ which indicates that the values are correlation coefficients. Each of the lines corresponds to a row in the correlation matrix: the first line is for <code>var01</code>, the next line for <code>var02</code>, and so on. The input only contains values for the lower triangle, including the diagonal, since <code>FORMAT=LOWER DIAGONAL</code> is the default.</p><p>With <code>ROWTYPE_</code>, the <code>CONTENTS</code> subcommand is optional and the <code>CELLS</code> subcommand may not be used.</p><pre><code>MATRIX DATA
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
</code></pre><h4 id="example-2-format-upper-nodiagonal" tabindex="-1">Example 2: <code>FORMAT=UPPER NODIAGONAL</code> <a class="header-anchor" href="#example-2-format-upper-nodiagonal" aria-label="Permalink to &quot;Example 2: \`FORMAT=UPPER NODIAGONAL\`&quot;">​</a></h4><p>This syntax produces the same matrix file as example 1, but it uses <code>FORMAT=UPPER NODIAGONAL</code> to specify the upper triangle and omit the diagonal. Because the matrix’s <code>ROWTYPE_</code> is <code>CORR</code>, PSPP automatically fills in the diagonal with 1.</p><pre><code>MATRIX DATA
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
</code></pre><h4 id="example-3-n-subcommand" tabindex="-1">Example 3: <code>N</code> subcommand <a class="header-anchor" href="#example-3-n-subcommand" aria-label="Permalink to &quot;Example 3: \`N\` subcommand&quot;">​</a></h4><p>This syntax uses the <code>N</code> subcommand in place of an <code>N</code> vector. It produces the same matrix file as examples 1 and 2.</p><pre><code>MATRIX DATA
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
</code></pre><h4 id="example-4-split-variables" tabindex="-1">Example 4: Split variables <a class="header-anchor" href="#example-4-split-variables" aria-label="Permalink to &quot;Example 4: Split variables&quot;">​</a></h4><p>This syntax defines two matrices, using the variable ‘s1’ to distinguish between them. Notice how the order of variables in the input matches their order on <code>VARIABLES</code>. This example also uses <code>FORMAT=FULL</code>.</p><pre><code>MATRIX DATA
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
</code></pre><h4 id="example-5-factor-variables" tabindex="-1">Example 5: Factor variables <a class="header-anchor" href="#example-5-factor-variables" aria-label="Permalink to &quot;Example 5: Factor variables&quot;">​</a></h4><p>This syntax defines a matrix file that includes a factor variable ‘f1’. The data includes mean, standard deviation, and count vectors for two values of the factor variable, plus a correlation matrix for pooled data.</p><pre><code>MATRIX DATA
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
</code></pre>`,20)])])}const A=a(i,[["render",r]]);export{p as __pageData,A as default};
