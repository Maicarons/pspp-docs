import{_ as n,o as a,c as o,a2 as c}from"./chunks/framework.Bg-Zxr5O.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Matrix-CALL-command.md","filePath":"manual-zh/Matrix-CALL-command.md","lastUpdated":1785684581000}'),p={name:"manual-zh/Matrix-CALL-command.md"};function d(m,e,r,t,L,A){return a(),o("div",null,[...e[0]||(e[0]=[c(`<h4 id="_16-4-4-the-call-command" tabindex="-1">16.4.4 The <code>CALL</code> Command <a class="header-anchor" href="#_16-4-4-the-call-command" aria-label="Permalink to &quot;16.4.4 The \`CALL\` Command&quot;">​</a></h4><p>矩阵函数返回单个结果。<code>CALL</code> 命令实现过程（procedures），其语法形式与函数类似，但通过修改其参数而非返回值来产生结果。</p><p><code>CALL</code> 过程的输出参数必须是单个变量名。</p><p>以下过程通过 <code>CALL</code> 实现，以允许它们返回多个结果。对于这些过程，输出参数不需要命名已存在的变量；如果命名了，则其先前的值被替换：</p><p><code>CALL EIGEN(M, evec, eval)</code></p><p>计算对称 <em>n ×n</em> 矩阵 M 的特征值和特征向量。将 M 的特征向量赋给 <em>n ×n</em> 矩阵 evec 的列，并将特征值按降序赋给 n 元素列向量 eval。</p><p>使用 <code>EVAL</code> 函数（参见 <a href="./Matrix-Algebra-Functions#EVAL">EVAL</a>）仅计算对称矩阵的特征值。</p><p>例如，以下矩阵语言命令：</p><pre><code>CALL EIGEN({1, 0; 0, 1}, evec, eval).
PRINT evec.
PRINT eval.

CALL EIGEN({3, 2, 4; 2, 0, 2; 4, 2, 3}, evec2, eval2).
PRINT evec2.
PRINT eval2.
</code></pre><p>产生如下输出：</p><pre><code>evec
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
</code></pre><p><code>CALL SVD(M, U, S, V)</code></p><p>计算 <em>n ×k</em> 矩阵 M 的奇异值分解，将 S 赋为 <em>n ×k</em> 对角矩阵，将 U 和 V 赋为酉 <em>k ×k</em> 矩阵，使得 <em>M = U×S×V^T</em>。Q 的主对角线包含 M 的奇异值。</p><p>使用 <code>SVAL</code> 函数（参见 <a href="./Matrix-Algebra-Functions#SVAL">SVAL</a>）仅计算矩阵的奇异值。</p><p>例如，以下矩阵程序：</p><pre><code>CALL SVD({3, 2, 2; 2, 3, -2}, u, s, v).
PRINT (u * s * T(v))/FORMAT F5.1.
</code></pre><p>产生如下输出：</p><pre><code>(u * s * T(v))
   3.0   2.0   2.0
   2.0   3.0  -2.0
</code></pre><p>最后一个过程通过 <code>CALL</code> 实现，以允许它修改矩阵而非返回修改后的版本。对于此过程，输出参数必须命名一个已存在的变量。</p><p><code>CALL SETDIAG(M, V)</code></p><p>将 <em>n ×p</em> 矩阵 M 的主对角线替换为 k 元素向量 V 的内容。如果 <em>k = 1</em>，即 V 是标量，则将 M 的所有对角元素替换为 V。如果 <em>k &lt; \\min(n,p)</em>，则只替换前 k 个对角元素；如果 <em>k &gt; \\min(n,p)</em>，则 V 的多余元素被忽略。</p><p>使用 <code>MDIAG</code> 函数（参见 <a href="./Matrix-Construction-Functions#MDIAG">MDIAG</a>）构造一个具有指定主对角线的新矩阵。</p><p>例如，此矩阵程序：</p><pre><code>COMPUTE x={1, 2, 3; 4, 5, 6; 7, 8, 9}.
CALL SETDIAG(x, 10).
PRINT x.
</code></pre><p>输出如下：</p><pre><code>x
  10   2   3
   4  10   6
   7   8  10
</code></pre>`,26)])])}const s=n(p,[["render",d]]);export{i as __pageData,s as default};
