import{_ as a,o as t,c as o,a2 as i}from"./chunks/framework.Bg-Zxr5O.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/MATRIX-DATA-without-ROWTYPE_005f.md","filePath":"manual-en/MATRIX-DATA-without-ROWTYPE_005f.md","lastUpdated":1785684581000}'),n={name:"manual-en/MATRIX-DATA-without-ROWTYPE_005f.md"};function r(s,e,l,c,d,h){return t(),o("div",null,[...e[0]||(e[0]=[i(`<h4 id="_16-2-2-without-rowtype" tabindex="-1">16.2.2 Without <code>ROWTYPE_</code> <a class="header-anchor" href="#_16-2-2-without-rowtype" aria-label="Permalink to &quot;16.2.2 Without \`ROWTYPE_\`&quot;">​</a></h4><p>If <code>VARIABLES</code> does not contain <code>ROWTYPE_</code>, the <code>CONTENTS</code> subcommand defines the row types that appear in the file and their order. If <code>CONTENTS</code> is omitted, <code>CONTENTS=CORR</code> is assumed.</p><p>Factor variables without <code>ROWTYPE_</code> introduce special requirements, illustrated below in Examples 8 and 9.</p><h4 id="example-6-defaults-without-rowtype" tabindex="-1">Example 6: Defaults without <code>ROWTYPE_</code> <a class="header-anchor" href="#example-6-defaults-without-rowtype" aria-label="Permalink to &quot;Example 6: Defaults without \`ROWTYPE_\`&quot;">​</a></h4><p>This example shows a simple use of <code>MATRIX DATA</code> with 8 variables named <code>var01</code> through <code>var08</code>, without <code>ROWTYPE_</code>. This yields the same matrix file as Example 1 (see <a href="./MATRIX-DATA-with-ROWTYPE_005f#MATRIX-DATA-Example-1">MATRIX DATA Example 1</a>).</p><pre><code>MATRIX DATA
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
</code></pre><h4 id="example-7-split-variables-with-explicit-values" tabindex="-1">Example 7: Split variables with explicit values <a class="header-anchor" href="#example-7-split-variables-with-explicit-values" aria-label="Permalink to &quot;Example 7: Split variables with explicit values&quot;">​</a></h4><p>This syntax defines two matrices, using the variable <code>s1</code> to distinguish between them. Each line of data begins with <code>s1</code>. This yields the same matrix file as Example 4 (see <a href="./MATRIX-DATA-with-ROWTYPE_005f#MATRIX-DATA-Example-4">MATRIX DATA Example 4</a>).</p><pre><code>MATRIX DATA
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
</code></pre><h4 id="example-8-split-variable-with-sequential-values" tabindex="-1">Example 8: Split variable with sequential values <a class="header-anchor" href="#example-8-split-variable-with-sequential-values" aria-label="Permalink to &quot;Example 8: Split variable with sequential values&quot;">​</a></h4><p>Like this previous example, this syntax defines two matrices with split variable <code>s1</code>. In this case, though, <code>s1</code> is not listed in <code>VARIABLES</code>, which means that its value does not appear in the data. Instead, <code>MATRIX DATA</code> reads matrix data until the input is exhausted, supplying 1 for the first split, 2 for the second, and so on.</p><pre><code>MATRIX DATA
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
</code></pre><h4 id="_16-2-2-1-factor-variables-without-rowtype" tabindex="-1">16.2.2.1 Factor variables without <code>ROWTYPE_</code> <a class="header-anchor" href="#_16-2-2-1-factor-variables-without-rowtype" aria-label="Permalink to &quot;16.2.2.1 Factor variables without \`ROWTYPE_\`&quot;">​</a></h4><p>Without <code>ROWTYPE_</code>, factor variables introduce two new wrinkles to <code>MATRIX DATA</code> syntax. First, the <code>CELLS</code> subcommand must declare the number of combinations of factor variables present in the data. If there is, for example, one factor variable for which the data contains three values, one would write <code>CELLS=3</code>; if there are two (or more) factor variables for which the data contains five combinations, one would use <code>CELLS=5</code>; and so on.</p><p>Second, the <code>CONTENTS</code> subcommand must distinguish within-cell data from pooled data by enclosing within-cell row types in parentheses. When different within-cell row types for a single factor appear in subsequent lines, enclose the row types in a single set of parentheses; when different factors’ values for a given within-cell row type appear in subsequent lines, enclose each row type in individual parentheses.</p><p>Without <code>ROWTYPE_</code>, input lines for pooled data do not include factor values, not even as missing values, but input lines for within-cell data do.</p><p>The following examples aim to clarify this syntax.</p><h4 id="example-9-factor-variables-grouping-within-cell-records-by-factor" tabindex="-1">Example 9: Factor variables, grouping within-cell records by factor <a class="header-anchor" href="#example-9-factor-variables-grouping-within-cell-records-by-factor" aria-label="Permalink to &quot;Example 9: Factor variables, grouping within-cell records by factor&quot;">​</a></h4><p>This syntax defines the same matrix file as Example 5 (see <a href="./MATRIX-DATA-with-ROWTYPE_005f#MATRIX-DATA-Example-5">MATRIX DATA Example 5</a>), without using <code>ROWTYPE_</code>. It declares <code>CELLS=2</code> because the data contains two values (0 and 1) for factor variable <code>f1</code>. Within-cell vector row types <code>MEAN</code>, <code>SD</code>, and <code>N</code> are in a single set of parentheses on <code>CONTENTS</code> because they are grouped together in subsequent lines for a single factor value. The data lines with the pooled correlation matrix do not have any factor values.</p><pre><code>MATRIX DATA
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
</code></pre><h4 id="example-10-factor-variables-grouping-within-cell-records-by-row-type" tabindex="-1">Example 10: Factor variables, grouping within-cell records by row type <a class="header-anchor" href="#example-10-factor-variables-grouping-within-cell-records-by-row-type" aria-label="Permalink to &quot;Example 10: Factor variables, grouping within-cell records by row type&quot;">​</a></h4><p>This syntax defines the same matrix file as the previous example. The only difference is that the within-cell vector rows are grouped differently: two rows of means (one for each factor), followed by two rows of standard deviations, followed by two rows of counts.</p><pre><code>MATRIX DATA
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
</code></pre>`,23)])])}const T=a(n,[["render",r]]);export{u as __pageData,T as default};
