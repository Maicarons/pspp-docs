import{_ as e,o as t,c as o,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Matrix-Construction-Functions.md","filePath":"manual-en/Matrix-Construction-Functions.md","lastUpdated":1785684581000}'),a={name:"manual-en/Matrix-Construction-Functions.md"};function s(i,n,c,m,u,p){return t(),o("div",null,[...n[0]||(n[0]=[r(`<h4 id="_16-4-2-3-matrix-construction-functions" tabindex="-1">16.4.2.3 Matrix Construction Functions <a class="header-anchor" href="#_16-4-2-3-matrix-construction-functions" aria-label="Permalink to &quot;16.4.2.3 Matrix Construction Functions&quot;">​</a></h4><p>Matrix Function: <strong>BLOCK</strong> <em>( M1, …, Mn)</em></p><p>Returns a block diagonal matrix with as many rows as the sum of its arguments’ row counts and as many columns as the sum of their columns. Each argument matrix is placed along the main diagonal of the result, and all other elements are zero.</p><pre><code>BLOCK({1, 2; 3, 4}, 5, {7; 8; 9}, {10, 11}) ⇒
   1   2   0   0   0   0
   3   4   0   0   0   0
   0   0   5   0   0   0
   0   0   0   7   0   0
   0   0   0   8   0   0
   0   0   0   9   0   0
   0   0   0   0  10  11
</code></pre><p>Matrix Function: <strong>IDENT</strong> <em>( n)</em> Matrix Function: <strong>IDENT</strong> <em>( nr, nc)</em></p><p>Returns an identity matrix, whose main diagonal elements are one and whose other elements are zero. The returned matrix has n rows and columns or nr rows and nc columns, respectively.</p><pre><code>IDENT(1) ⇒ 1
IDENT(2) ⇒
  1  0
  0  1
IDENT(3, 5) ⇒
  1  0  0  0  0
  0  1  0  0  0
  0  0  1  0  0
IDENT(5, 3) ⇒
  1  0  0
  0  1  0
  0  0  1
  0  0  0
  0  0  0
</code></pre><p>Matrix Function: <strong>MAGIC</strong> <em>( n)</em></p><p>Returns an <em>n ×n</em> matrix that contains each of the integers <em>1… n</em> once, in which each column, each row, and each diagonal sums to <em>n(n^2+1)/2</em>. There are many magic squares with given dimensions, but this function always returns the same one for a given value of n.</p><p><code>MAGIC(3) ⇒ {8, 1, 6; 3, 5, 7; 4, 9, 2}</code><br><code>MAGIC(4) ⇒ {1, 5, 12, 16; 15, 11, 6, 2; 14, 8, 9, 3; 4, 10, 7, 13}</code></p><p>Matrix Function: <strong>MAKE</strong> <em>( nr, nc, s)</em></p><p>Returns an <em>nr ×nc</em> matrix whose elements are all s.</p><p><code>MAKE(1, 2, 3) ⇒ {3, 3}</code><br><code>MAKE(2, 1, 4) ⇒ {4; 4}</code><br><code>MAKE(2, 3, 5) ⇒ {5, 5, 5; 5, 5, 5}</code></p><p>Matrix Function: <strong>MDIAG</strong> <em>( V)</em></p><p>Given n-element vector V, returns a <em>n ×n</em> matrix whose main diagonal is copied from V. The other elements in the returned vector are zero.</p><p>Use <code>CALL SETDIAG</code> (see <a href="./Matrix-CALL-command#CALL-SETDIAG">CALL SETDIAG</a>) to replace the main diagonal of a matrix in-place.</p><pre><code>MDIAG({1, 2, 3, 4}) ⇒
  1  0  0  0
  0  2  0  0
  0  0  3  0
  0  0  0  4
</code></pre><p>Matrix Function: <strong>RESHAPE</strong> <em>( M, nr, nc)</em></p><p>Returns an <em>nr ×nc</em> matrix whose elements come from M, which must have the same number of elements as the new matrix, copying elements from M to the new matrix row by row.</p><pre><code>RESHAPE(1:12, 1, 12) ⇒
   1   2   3   4   5   6   7   8   9  10  11  12
RESHAPE(1:12, 2, 6) ⇒
   1   2   3   4   5   6
   7   8   9  10  11  12
RESHAPE(1:12, 3, 4) ⇒
   1   2   3   4
   5   6   7   8
   9  10  11  12
RESHAPE(1:12, 4, 3) ⇒
   1   2   3
   4   5   6
   7   8   9
  10  11  12
</code></pre><p>Matrix Function: <strong>T</strong> <em>( M)</em> Matrix Function: <strong>TRANSPOS</strong> <em>( M)</em></p><p>Returns M with rows exchanged for columns.</p><p><code>T({1, 2, 3}) ⇒ {1; 2; 3}</code><br><code>T({1; 2; 3}) ⇒ {1, 2, 3}</code></p><p>Matrix Function: <strong>UNIFORM</strong> <em>( nr, nc)</em></p><p>Returns a <em>nr ×nc</em> matrix in which each element is randomly chosen from a uniform distribution of real numbers between 0 and 1. Random number generation honors the current seed setting (see <a href="./SET#SET-SEED">SET SEED</a>).</p><p>The following example shows one possible output, but of course every result will be different (given different seeds):</p><pre><code>UNIFORM(4, 5)*10 ⇒
  7.71  2.99   .21  4.95  6.34
  4.43  7.49  8.32  4.99  5.83
  2.25   .25  1.98  7.09  7.61
  2.66  1.69  2.64   .88  1.50
</code></pre>`,27)])])}const h=e(a,[["render",s]]);export{l as __pageData,h as default};
