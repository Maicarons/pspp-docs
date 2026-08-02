import{_ as n,o as t,c as a,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const M=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Matrix-Algebra-Functions.md","filePath":"manual-en/Matrix-Algebra-Functions.md","lastUpdated":1785684581000}'),o={name:"manual-en/Matrix-Algebra-Functions.md"};function m(i,e,s,p,c,d){return t(),a("div",null,[...e[0]||(e[0]=[r(`<h4 id="_16-4-2-7-matrix-algebra-functions" tabindex="-1">16.4.2.7 Matrix Algebra Functions <a class="header-anchor" href="#_16-4-2-7-matrix-algebra-functions" aria-label="Permalink to &quot;16.4.2.7 Matrix Algebra Functions&quot;">​</a></h4><p>Matrix Function: <strong>CHOL</strong> <em>( M)</em></p><p>Matrix M must be an <em>n ×n</em> symmetric positive-definite matrix. Returns an <em>n ×n</em> matrix B such that <em>B ^T×B=M</em>.</p><pre><code>CHOL({4, 12, -16; 12, 37, -43; -16, -43, 98}) ⇒
  2  6 -8
  0  1  5
  0  0  3
</code></pre><p>Matrix Function: <strong>DESIGN</strong> <em>( M)</em></p><p>Returns a design matrix for M. The design matrix has the same number of rows as M. Each column c in M, from left to right, yields a group of columns in the output. For each unique value v in c, from top to bottom, add a column to the output in which v becomes 1 and other values become 0.</p><p>PSPP issues a warning if a column only contains a single unique value.</p><pre><code>DESIGN({1; 2; 3}) ⇒ {1, 0, 0; 0, 1, 0; 0, 0, 1}
DESIGN({5; 8; 5}) ⇒ {1, 0; 0, 1; 1, 0}
DESIGN({1, 5; 2, 8; 3, 5})
 ⇒ {1, 0, 0, 1, 0; 0, 1, 0, 0, 1; 0, 0, 1, 1, 0}
DESIGN({5; 5; 5}) ⇒ (warning)
</code></pre><p>Matrix Function: <strong>DET</strong> <em>( M)</em></p><p>Returns the determinant of square matrix M.</p><p><code>DET({3, 7; 1, -4}) ⇒ -19</code></p><p>Matrix Function: <strong>EVAL</strong> <em>( M)</em></p><p>Returns a column vector containing the eigenvalues of symmetric matrix M, sorted in ascending order.</p><p>Use <code>CALL EIGEN</code> (see <a href="./Matrix-CALL-command#CALL-EIGEN">CALL EIGEN</a>) to compute eigenvalues and eigenvectors of a matrix.</p><p><code>EVAL({2, 0, 0; 0, 3, 4; 0, 4, 9}) ⇒ {11; 2; 1}</code></p><p>Matrix Function: <strong>GINV</strong> <em>( M)</em></p><p>Returns the <em>k ×n</em> matrix A that is the <em>generalized inverse</em> of <em>n ×k</em> matrix M, defined such that <em>M ×A×M=M</em> and <em>A ×M×A=A</em>.</p><p><code>GINV({1, 2}) ⇒ {.2; .4}</code> (approximately)<br><code>{1:9} * GINV(1:9) * {1:9} ⇒ {1:9}</code> (approximately)</p><p>Matrix Function: <strong>GSCH</strong> <em>( M)</em></p><p>M must be a <em>n ×m</em> matrix, <em>m ≥ n</em>, with rank n. Returns an <em>n ×n</em> orthonormal basis for M, obtained using the Gram-Schmidt process.</p><p><code>GSCH({3, 2; 1, 2}) * SQRT(10) ⇒ {3, -1; 1, 3}</code> (approximately)</p><p>Matrix Function: <strong>INV</strong> <em>( M)</em></p><p>Returns the <em>n ×n</em> matrix A that is the inverse of <em>n ×n</em> matrix M, defined such that <em>M ×A = A×M = I</em>, where I is the identity matrix. M must not be singular, that is, <em>\\det( M) ≠ 0</em>.</p><p><code>INV({4, 7; 2, 6}) ⇒ {.6, -.7; -.2, .4}</code> (approximately)</p><p>Matrix Function: <strong>KRONEKER</strong> <em>( Ma, Mb)</em></p><p>Returns the <em>pm ×qn</em> matrix P that is the <em>Kroneker product</em> of <em>m ×n</em> matrix Ma and <em>p ×q</em> matrix Mb. One may view P as the concatenation of multiple <em>p ×q</em> blocks, each of which is the scalar product of Mb by a different element of Ma. For example, when <code>A</code> is a <em>2×2</em> matrix, <code>KRONEKER(A, B)</code> is equivalent to <code>{A(1,1)*B, A(1,2)*B; A(2,1)*B, A(2,2)*B}</code>.</p><pre><code>KRONEKER({1, 2; 3, 4}, {0, 5; 6, 7}) ⇒
   0   5   0  10
   6   7  12  14
   0  15   0  20
  18  21  24  28
</code></pre><p>Matrix Function: <strong>RANK</strong> <em>( M)</em></p><p>Returns the rank of matrix M, an integer scalar whose value is the dimension of the vector space spanned by its columns or, equivalently, by its rows.</p><pre><code>RANK({1, 0, 1; -2, -3, 1; 3, 3, 0}) ⇒ 2
RANK({1, 1, 0, 2; -1, -1, 0, -2}) ⇒ 1
RANK({1, -1; 1, -1; 0, 0; 2, -2}) ⇒ 1
RANK({1, 2, 1; -2, -3, 1; 3, 5, 0}) ⇒ 2
RANK({1, 0, 2; 2, 1, 0; 3, 2, 1}) ⇒ 3
</code></pre><p>Matrix Function: <strong>SOLVE</strong> <em>( Ma, Mb)</em></p><p>Ma must be an <em>n ×n</em> matrix, with <em>\\det( Ma) ≠ 0</em>, and Mb an <em>n ×k</em> matrix. Returns an <em>n ×k</em> matrix X such that <em>Ma × X = Mb</em>.</p><p>All of the following examples show approximate results:</p><pre><code>SOLVE({2, 3; 4, 9}, {6, 2; 15, 5}) ⇒
   1.50    .50
   1.00    .33
SOLVE({1, 3, -2; 3, 5, 6; 2, 4, 3}, {5; 7; 8}) ⇒
 -15.00
   8.00
   2.00
SOLVE({2, 1, -1; -3, -1, 2; -2, 1, 2}, {8; -11; -3}) ⇒
   2.00
   3.00
  -1.00
</code></pre><p>Matrix Function: <strong>SVAL</strong> <em>( M)</em></p><p>Given <em>n ×k</em> matrix M, returns a <em>\\min( n,k)</em>-element column vector containing the singular values of M in descending order.</p><p>Use <code>CALL SVD</code> (see <a href="./Matrix-CALL-command#CALL-SVD">CALL SVD</a>) to compute the full singular value decomposition of a matrix.</p><pre><code>SVAL({1, 1; 0, 0}) ⇒ {1.41; .00}
SVAL({1, 0, 1; 0, 1, 1; 0, 0, 0}) ⇒ {1.73; 1.00; .00}
SVAL({2, 4; 1, 3; 0, 0; 0, 0}) ⇒ {5.46; .37}
</code></pre><p>Matrix Function: <strong>SWEEP</strong> <em>( M, nk)</em></p><p>Given <em>r ×c</em> matrix M and integer scalar <em>k = nk</em> such that <em>1 ≤ k ≤ \\min( r,c)</em>, returns the <em>r ×c</em> sweep matrix A.</p><p>If _M <em>{kk} ≠ 0</em>, then:</p><pre><code>_A _{kk} = 1/M_{kk}_,
_A _{ik} = -M_{ik}/M_{kk} for i ≠ k_,
_A _{kj} = M_{kj}/M_{kk} for j ≠ k, and_
_A _{ij} = M_{ij} - M_{ik}M_{kj}/M_{kk} for i ≠ k and j ≠ k_.
</code></pre><p>If _M <em>{kk} = 0</em>, then:</p><pre><code>_A _{ik} = A_{ki} = 0 and_
_A _{ij} = M_{ij}, for i ≠ k and j ≠ k_.
</code></pre><p>Given <code>M = {0, 1, 2; 3, 4, 5; 6, 7, 8}</code>, then (approximately):</p><pre><code>SWEEP(M, 1) ⇒
   .00   .00   .00
   .00  4.00  5.00
   .00  7.00  8.00
SWEEP(M, 2) ⇒
  -.75  -.25   .75
   .75   .25  1.25
   .75 -1.75  -.75
SWEEP(M, 3) ⇒
 -1.50  -.75  -.25
  -.75  -.38  -.63
   .75   .88   .13
</code></pre>`,46)])])}const l=n(o,[["render",m]]);export{M as __pageData,l as default};
