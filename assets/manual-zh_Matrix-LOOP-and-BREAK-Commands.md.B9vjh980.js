import{_ as a,o as t,c as n,a2 as o}from"./chunks/framework.Bg-Zxr5O.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Matrix-LOOP-and-BREAK-Commands.md","filePath":"manual-zh/Matrix-LOOP-and-BREAK-Commands.md","lastUpdated":1785684581000}'),r={name:"manual-zh/Matrix-LOOP-and-BREAK-Commands.md"};function d(O,e,s,m,c,p){return t(),n("div",null,[...e[0]||(e[0]=[o(`<h4 id="_16-4-7-loop-和-break-命令" tabindex="-1">16.4.7 <code>LOOP</code> 和 <code>BREAK</code> 命令 <a class="header-anchor" href="#_16-4-7-loop-和-break-命令" aria-label="Permalink to &quot;16.4.7 \`LOOP\` 和 \`BREAK\` 命令&quot;">​</a></h4><pre><code>LOOP [_var_ =_first_ TO _last_ [BY _step_]] [IF _expression_].
  … _matrix commands_ …
END LOOP [IF _expression_].

BREAK.
</code></pre><p><code>LOOP</code> 命令重复执行一组嵌套的矩阵命令，称为循环的 <em>循环体</em>。它有三个可选子句来控制循环体执行的次数。无论这些子句如何，全局设置 <code>MXLOOPS</code>（默认为 40）也会限制循环的迭代次数。要迭代更多次，请在 <code>MATRIX</code> 命令之外使用 <code>SET MXLOOPS</code> 提高上限（参见 <a href="./SET#SET-MXLOOPS">SET MXLOOPS</a>）。</p><p>可选索引子句使 var 在每次循环时被赋予连续的值：先是 first，然后是 <em>first + step</em>，然后是 <em>first + 2 × step</em>，依此类推。当 <em>var &gt; last</em>（步长为正）或 <em>var &lt; last</em>（步长为负）时，循环结束。如果未指定 step，则默认为 1。所有索引子句表达式都必须求值为标量，非整数向零取整。如果 step 求值为零（或取整为零），则循环体永不执行。</p><p><code>LOOP</code> 上的可选 <code>IF</code> 在每次执行循环体之前求值。如果其表达式（必须求值为标量）为零或负数，则循环终止，不执行循环体。</p><p><code>END LOOP</code> 上的可选 <code>IF</code> 在每次执行循环体之后求值。如果其表达式（必须求值为标量）为零或负数，则循环终止。</p><p>下面计算并打印 <em>l(n)</em>，即 <a href="https://en.wikipedia.org/wiki/Juggler_sequence" target="_blank" rel="noreferrer">Juggler 序列</a> 中 <em>n</em> 的步数，其中 <em>n</em> 从 2 到 10（含）：</p><pre><code>COMPUTE l = {}.
LOOP n = 2 TO 10.
  COMPUTE a = n.
  LOOP i = 1 TO 100.
    DO IF MOD(a, 2) = 0.
      COMPUTE a = TRUNC(a &amp;** (1/2)).
    ELSE.
      COMPUTE a = TRUNC(a &amp;** (3/2)).
    END IF.
  END LOOP IF a = 1.
  COMPUTE l = {l; i}.
END LOOP.
PRINT l.
</code></pre><table tabindex="0"><thead><tr><th>• BREAK 命令</th><th></th><th></th></tr></thead></table>`,9)])])}const l=a(r,[["render",d]]);export{i as __pageData,l as default};
