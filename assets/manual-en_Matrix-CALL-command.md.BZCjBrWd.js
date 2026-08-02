import{_ as t,o as a,c as n,a2 as o}from"./chunks/framework.Bg-Zxr5O.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Matrix-CALL-command.md","filePath":"manual-en/Matrix-CALL-command.md","lastUpdated":1785684581000}'),r={name:"manual-en/Matrix-CALL-command.md"};function i(m,e,c,s,p,l){return a(),n("div",null,[...e[0]||(e[0]=[o(`<h4 id="_16-4-4-the-call-command" tabindex="-1">16.4.4 The <code>CALL</code> Command <a class="header-anchor" href="#_16-4-4-the-call-command" aria-label="Permalink to &quot;16.4.4 The \`CALL\` Command&quot;">​</a></h4><p>A matrix function returns a single result. The <code>CALL</code> command implements procedures, which take a similar syntactic form to functions but yield results by modifying their arguments rather than returning a value.</p><p>Output arguments to a <code>CALL</code> procedure must be a single variable name.</p><p>The following procedures are implemented via <code>CALL</code> to allow them to return multiple results. For these procedures, the output arguments need not name existing variables; if they do, then their previous values are replaced:</p><p><code>CALL EIGEN(M, evec, eval)</code></p><p>Computes the eigenvalues and eigenvector of symmetric <em>n ×n</em> matrix M. Assigns the eigenvectors of M to the columns of <em>n ×n</em> matrix evec and the eigenvalues in descending order to n-element column vector eval.</p><p>Use the <code>EVAL</code> function (see <a href="./Matrix-Algebra-Functions#EVAL">EVAL</a>) to compute just the eigenvalues of a symmetric matrix.</p><p>For example, the following matrix language commands:</p><pre><code>CALL EIGEN({1, 0; 0, 1}, evec, eval).
PRINT evec.
PRINT eval.

CALL EIGEN({3, 2, 4; 2, 0, 2; 4, 2, 3}, evec2, eval2).
PRINT evec2.
PRINT eval2.
</code></pre><p>yield this output:</p><pre><code>evec
  1  0
  0  1

eval
  1
  1

evec2
  -.6666666667   .0000000000   .7453559925
  -.3333333333  -.8944271910  -.2981423970
  -.6666666667   .4472135955  -.5962847940

eval2
  8.0000000000
 -1.0000000000
 -1.0000000000
</code></pre><p><code>CALL SVD(M, U, S, V)</code></p><p>Computes the singular value decomposition of <em>n ×k</em> matrix M, assigning S a <em>n ×k</em> diagonal matrix and to U and V unitary <em>k ×k</em> matrices such that <em>M = U×S×V^T</em>. The main diagonal of Q contains the singular values of M.</p><p>Use the <code>SVAL</code> function (see <a href="./Matrix-Algebra-Functions#SVAL">SVAL</a>) to compute just the singular values of a matrix.</p><p>For example, the following matrix program:</p><pre><code>CALL SVD({3, 2, 2; 2, 3, -2}, u, s, v).
PRINT (u * s * T(v))/FORMAT F5.1.
</code></pre><p>yields this output:</p><pre><code>(u * s * T(v))
   3.0   2.0   2.0
   2.0   3.0  -2.0
</code></pre><p>The final procedure is implemented via <code>CALL</code> to allow it to modify a matrix instead of returning a modified version. For this procedure, the output argument must name an existing variable.</p><p><code>CALL SETDIAG(M, V)</code></p><p>Replaces the main diagonal of <em>n ×p</em> matrix M by the contents of k-element vector V. If <em>k = 1</em>, so that V is a scalar, replaces all of the diagonal elements of M by V. If <em>k &lt; \\min(n,p)</em>, only the upper k diagonal elements are replaced; if <em>k &gt; \\min(n,p)</em>, then the extra elements of V are ignored.</p><p>Use the <code>MDIAG</code> function (see <a href="./Matrix-Construction-Functions#MDIAG">MDIAG</a>) to construct a new matrix with a specified main diagonal.</p><p>For example, this matrix program:</p><pre><code>COMPUTE x={1, 2, 3; 4, 5, 6; 7, 8, 9}.
CALL SETDIAG(x, 10).
PRINT x.
</code></pre><p>outputs the following:</p><pre><code>x
  10   2   3
   4  10   6
   7   8  10
</code></pre>`,26)])])}const h=t(r,[["render",i]]);export{u as __pageData,h as default};
