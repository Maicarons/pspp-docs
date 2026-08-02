import{_ as t,o as e,c as o,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Matrix-Construction-Functions.md","filePath":"manual-zh/Matrix-Construction-Functions.md","lastUpdated":1785684581000}'),c={name:"manual-zh/Matrix-Construction-Functions.md"};function a(p,n,i,s,m,d){return e(),o("div",null,[...n[0]||(n[0]=[r(`<h4 id="_16-4-2-3-matrix-construction-functions" tabindex="-1">16.4.2.3 Matrix Construction Functions <a class="header-anchor" href="#_16-4-2-3-matrix-construction-functions" aria-label="Permalink to &quot;16.4.2.3 Matrix Construction Functions&quot;">​</a></h4><p>Matrix Function: <strong>BLOCK</strong> <em>( M1, …, Mn)</em></p><p>返回一个块对角矩阵，其行数等于其参数行数之和，列数等于其参数列数之和。每个参数矩阵沿结果的主对角线放置，所有其他元素为零。</p><pre><code>BLOCK({1, 2; 3, 4}, 5, {7; 8; 9}, {10, 11}) ⇒
   1   2   0   0   0   0
   3   4   0   0   0   0
   0   0   5   0   0   0
   0   0   0   7   0   0
   0   0   0   8   0   0
   0   0   0   9   0   0
   0   0   0   0  10  11
</code></pre><p>Matrix Function: <strong>IDENT</strong> <em>( n)</em> Matrix Function: <strong>IDENT</strong> <em>( nr, nc)</em></p><p>返回一个单位矩阵，其主对角线元素为 1，其他元素为 0。返回的矩阵分别具有 n 行 n 列，或 nr 行 nc 列。</p><pre><code>IDENT(1) ⇒ 1
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
</code></pre><p>Matrix Function: <strong>MAGIC</strong> <em>( n)</em></p><p>返回一个 <em>n ×n</em> 矩阵，其中包含每个整数 <em>1… n</em> 恰好一次，其中每一列、每一行和每条对角线的和都是 <em>n(n^2+1)/2</em>。给定维度有许多幻方，但此函数对于给定的 n 值总是返回同一个。</p><p><code>MAGIC(3) ⇒ {8, 1, 6; 3, 5, 7; 4, 9, 2}</code><code>MAGIC(4) ⇒ {1, 5, 12, 16; 15, 11, 6, 2; 14, 8, 9, 3; 4, 10, 7, 13}</code></p><p>Matrix Function: <strong>MAKE</strong> <em>( nr, nc, s)</em></p><p>返回一个 <em>nr ×nc</em> 矩阵，其所有元素均为 s。</p><p><code>MAKE(1, 2, 3) ⇒ {3, 3}</code><code>MAKE(2, 1, 4) ⇒ {4; 4}</code><code>MAKE(2, 3, 5) ⇒ {5, 5, 5; 5, 5, 5}</code></p><p>Matrix Function: <strong>MDIAG</strong> <em>( V)</em></p><p>给定 n 元素向量 V，返回一个 <em>n ×n</em> 矩阵，其主对角线从 V 复制而来。返回向量的其他元素为零。</p><p>使用 <code>CALL SETDIAG</code>（参见 <a href="./Matrix-CALL-command#CALL-SETDIAG">CALL SETDIAG</a>）就地替换矩阵的主对角线。</p><pre><code>MDIAG({1, 2, 3, 4}) ⇒
  1  0  0  0
  0  2  0  0
  0  0  3  0
  0  0  0  4
</code></pre><p>Matrix Function: <strong>RESHAPE</strong> <em>( M, nr, nc)</em></p><p>返回一个 <em>nr ×nc</em> 矩阵，其元素来自 M，M 必须具有与新矩阵相同数量的元素，逐行将元素从 M 复制到新矩阵。</p><pre><code>RESHAPE(1:12, 1, 12) ⇒
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
</code></pre><p>Matrix Function: <strong>T</strong> <em>( M)</em> Matrix Function: <strong>TRANSPOS</strong> <em>( M)</em></p><p>返回将 M 的行与列互换后的结果。</p><p><code>T({1, 2, 3}) ⇒ {1; 2; 3}</code><code>T({1; 2; 3}) ⇒ {1, 2, 3}</code></p><p>Matrix Function: <strong>UNIFORM</strong> <em>( nr, nc)</em></p><p>返回一个 <em>nr ×nc</em> 矩阵，其中每个元素是从 0 到 1 之间实数的均匀分布中随机选择的。随机数生成遵循当前的种子设置（参见 <a href="./SET#SET-SEED">SET SEED</a>）。</p><p>以下示例展示了一种可能的输出，但当然每次结果都会不同（给定不同的种子）：</p><pre><code>UNIFORM(4, 5)*10 ⇒
  7.71  2.99   .21  4.95  6.34
  4.43  7.49  8.32  4.99  5.83
  2.25   .25  1.98  7.09  7.61
  2.66  1.69  2.64   .88  1.50
</code></pre>`,27)])])}const E=t(c,[["render",a]]);export{u as __pageData,E as default};
