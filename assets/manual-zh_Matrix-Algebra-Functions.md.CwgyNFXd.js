import{_ as n,o as m,c as o,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const s=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Matrix-Algebra-Functions.md","filePath":"manual-zh/Matrix-Algebra-Functions.md","lastUpdated":1785684581000}'),p={name:"manual-zh/Matrix-Algebra-Functions.md"};function t(a,e,c,M,i,d){return m(),o("div",null,[...e[0]||(e[0]=[r(`<h4 id="_16-4-2-7-matrix-algebra-functions" tabindex="-1">16.4.2.7 Matrix Algebra Functions <a class="header-anchor" href="#_16-4-2-7-matrix-algebra-functions" aria-label="Permalink to &quot;16.4.2.7 Matrix Algebra Functions&quot;">​</a></h4><p>Matrix Function: <strong>CHOL</strong> <em>( M)</em></p><p>矩阵 M 必须是 <em>n ×n</em> 对称正定矩阵。返回一个 <em>n ×n</em> 矩阵 B，使得 <em>B ^T×B=M</em>。</p><pre><code>CHOL({4, 12, -16; 12, 37, -43; -16, -43, 98}) ⇒
  2  6 -8
  0  1  5
  0  0  3
</code></pre><p>Matrix Function: <strong>DESIGN</strong> <em>( M)</em></p><p>返回 M 的设计矩阵（design matrix）。设计矩阵的行数与 M 相同。M 中从左到右的每一列 c，在输出中产生一组列。对于 c 中从上到下的每个唯一值 v，向输出添加一列，其中 v 变为 1，其他值变为 0。</p><p>如果某一列仅包含单个唯一值，PSPP 会发出警告。</p><pre><code>DESIGN({1; 2; 3}) ⇒ {1, 0, 0; 0, 1, 0; 0, 0, 1}
DESIGN({5; 8; 5}) ⇒ {1, 0; 0, 1; 1, 0}
DESIGN({1, 5; 2, 8; 3, 5})
 ⇒ {1, 0, 0, 1, 0; 0, 1, 0, 0, 1; 0, 0, 1, 1, 0}
DESIGN({5; 5; 5}) ⇒ (warning)
</code></pre><p>Matrix Function: <strong>DET</strong> <em>( M)</em></p><p>返回方阵 M 的行列式。</p><p><code>DET({3, 7; 1, -4}) ⇒ -19</code></p><p>Matrix Function: <strong>EVAL</strong> <em>( M)</em></p><p>返回一个包含对称矩阵 M 的特征值的列向量，按升序排序。</p><p>使用 <code>CALL EIGEN</code>（参见 <a href="./Matrix-CALL-command#CALL-EIGEN">CALL EIGEN</a>）计算矩阵的特征值和特征向量。</p><p><code>EVAL({2, 0, 0; 0, 3, 4; 0, 4, 9}) ⇒ {11; 2; 1}</code></p><p>Matrix Function: <strong>GINV</strong> <em>( M)</em></p><p>返回 <em>k ×n</em> 矩阵 A，它是 <em>n ×k</em> 矩阵 M 的_广义逆_（generalized inverse），定义为满足 <em>M ×A×M=M</em> 且 <em>A ×M×A=A</em>。</p><p><code>GINV({1, 2}) ⇒ {.2; .4}</code>（约等于） <code>{1:9} * GINV(1:9) * {1:9} ⇒ {1:9}</code>（约等于）</p><p>Matrix Function: <strong>GSCH</strong> <em>( M)</em></p><p>M 必须是 <em>n ×m</em> 矩阵，<em>m ≥ n</em>，秩为 n。使用 Gram-Schmidt 过程返回 M 的 <em>n ×n</em> 标准正交基。</p><p><code>GSCH({3, 2; 1, 2}) * SQRT(10) ⇒ {3, -1; 1, 3}</code>（约等于）</p><p>Matrix Function: <strong>INV</strong> <em>( M)</em></p><p>返回 <em>n ×n</em> 矩阵 A，它是 <em>n ×n</em> 矩阵 M 的逆，定义为满足 <em>M ×A = A×M = I</em>，其中 I 是单位矩阵。M 必须非奇异，即 <em>\\det( M) ≠ 0</em>。</p><p><code>INV({4, 7; 2, 6}) ⇒ {.6, -.7; -.2, .4}</code>（约等于）</p><p>Matrix Function: <strong>KRONEKER</strong> <em>( Ma, Mb)</em></p><p>返回 <em>pm ×qn</em> 矩阵 P，它是 <em>m ×n</em> 矩阵 Ma 和 <em>p ×q</em> 矩阵 Mb 的_克羅內克積_（Kroneker product）。可将 P 视为多个 <em>p ×q</em> 块的拼接，每个块是 Mb 与 Ma 不同元素的标量积。例如，当 <code>A</code> 是 <em>2×2</em> 矩阵时，<code>KRONEKER(A, B)</code> 等价于 <code>{A(1,1)*B, A(1,2)*B; A(2,1)*B, A(2,2)*B}</code>。</p><pre><code>KRONEKER({1, 2; 3, 4}, {0, 5; 6, 7}) ⇒
   0   5   0  10
   6   7  12  14
   0  15   0  20
  18  21  24  28
</code></pre><p>Matrix Function: <strong>RANK</strong> <em>( M)</em></p><p>返回矩阵 M 的秩，一个整数标量，其值为其列（等价地，其行）所张成的向量空间的维数。</p><pre><code>RANK({1, 0, 1; -2, -3, 1; 3, 3, 0}) ⇒ 2
RANK({1, 1, 0, 2; -1, -1, 0, -2}) ⇒ 1
RANK({1, -1; 1, -1; 0, 0; 2, -2}) ⇒ 1
RANK({1, 2, 1; -2, -3, 1; 3, 5, 0}) ⇒ 2
RANK({1, 0, 2; 2, 1, 0; 3, 2, 1}) ⇒ 3
</code></pre><p>Matrix Function: <strong>SOLVE</strong> <em>( Ma, Mb)</em></p><p>Ma 必须是 <em>n ×n</em> 矩阵，且 <em>\\det( Ma) ≠ 0</em>，Mb 为 <em>n ×k</em> 矩阵。返回一个 <em>n ×k</em> 矩阵 X，使得 <em>Ma × X = Mb</em>。</p><p>以下所有示例均显示近似结果：</p><pre><code>SOLVE({2, 3; 4, 9}, {6, 2; 15, 5}) ⇒
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
</code></pre><p>Matrix Function: <strong>SVAL</strong> <em>( M)</em></p><p>给定 <em>n ×k</em> 矩阵 M，返回一个 <em>\\min( n,k)</em> 元素的列向量，包含 M 的奇异值，按降序排列。</p><p>使用 <code>CALL SVD</code>（参见 <a href="./Matrix-CALL-command#CALL-SVD">CALL SVD</a>）计算矩阵的完整奇异值分解。</p><pre><code>SVAL({1, 1; 0, 0}) ⇒ {1.41; .00}
SVAL({1, 0, 1; 0, 1, 1; 0, 0, 0}) ⇒ {1.73; 1.00; .00}
SVAL({2, 4; 1, 3; 0, 0; 0, 0}) ⇒ {5.46; .37}
</code></pre><p>Matrix Function: <strong>SWEEP</strong> <em>( M, nk)</em></p><p>给定 <em>r ×c</em> 矩阵 M 和整数标量 <em>k = nk</em>，满足 <em>1 ≤ k ≤ \\min( r,c)</em>，返回 <em>r ×c</em> 扫描矩阵 A。</p><p>若 _M <em>{kk} ≠ 0</em>，则：</p><pre><code>_A _{kk} = 1/M_{kk}_,
_A _{ik} = -M_{ik}/M_{kk} for i ≠ k_,
_A _{kj} = M_{kj}/M_{kk} for j ≠ k, and_
_A _{ij} = M_{ij} - M_{ik}M_{kj}/M_{kk} for i ≠ k and j ≠ k_.
</code></pre><p>若 _M <em>{kk} = 0</em>，则：</p><pre><code>_A _{ik} = A_{ki} = 0 and_
_A _{ij} = M_{ij}, for i ≠ k and j ≠ k_.
</code></pre><p>给定 <code>M = {0, 1, 2; 3, 4, 5; 6, 7, 8}</code>，则（约等于）：</p><pre><code>SWEEP(M, 1) ⇒
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
</code></pre>`,46)])])}const A=n(p,[["render",t]]);export{s as __pageData,A as default};
