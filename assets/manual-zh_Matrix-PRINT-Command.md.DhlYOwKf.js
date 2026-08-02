import{_ as d,o,c as t,a2 as c}from"./chunks/framework.Bg-Zxr5O.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Matrix-PRINT-Command.md","filePath":"manual-zh/Matrix-PRINT-Command.md","lastUpdated":1785684581000}'),a={name:"manual-zh/Matrix-PRINT-Command.md"};function n(r,e,m,P,_,p){return o(),t("div",null,[...e[0]||(e[0]=[c(`<h4 id="_16-4-5-print-命令" tabindex="-1">16.4.5 <code>PRINT</code> 命令 <a class="header-anchor" href="#_16-4-5-print-命令" aria-label="Permalink to &quot;16.4.5 \`PRINT\` 命令&quot;">​</a></h4><pre><code>PRINT [_expression_]
      [/FORMAT=_format_]
      [/TITLE=_title_]
      [/SPACE={NEWPAGE _|_ _n_}]
      [{/RLABELS=_string_ … _|_ /RNAMES=_expression_}]
      [{/CLABELS=_string_ … _|_ /CNAMES=_expression_}].
</code></pre><p><code>PRINT</code> 命令通常用于显示矩阵。它求值受限表达式（如果存在），并根据 <code>MDISPLAY</code> 的设置（参见 <a href="./SET#SET-MDISPLAY">SET MDISPLAY</a>）以文本或透视表的形式输出。</p><p>使用 <code>FORMAT</code> 子命令指定用于显示矩阵元素的格式，例如 <code>F8.2</code>。对于数值矩阵，<code>FORMAT</code> 是可选的。省略时，PSPP 使用 m（即待显示矩阵中绝对值最大元素的量值）自动选择条目的格式：</p><ol><li>如果 <em>m &lt; 10^{11}</em> 且矩阵元素全为整数，PSPP 会选择能容纳 m 加正负号的最窄 <code>F</code> 格式。例如，如果矩阵为 <code>{1:10}</code>，则 <em>m = 10</em>，可容纳在 3 列并留出正负号空间，格式为 <code>F3.0</code>。</li><li>否则，如果 <em>m ≥ 10^9</em> 或 <em>m ≤ 10^{-4}</em>，PSPP 将矩阵中所有数字按比例缩放 <em>10^x</em>，其中 x 是显示 m 的科学计数法所用的指数。例如，对于 <em>m = 5.123×10^{20}</em>，缩放因子为 <em>10^{20}</em>。PSPP 以格式 <code>F13.10</code> 显示缩放后的值，并在输出中注明缩放因子。</li><li>否则，PSPP 以格式 <code>F13.10</code> 显示矩阵值，不缩放。</li></ol><p>可选的 <code>TITLE</code> 子命令以带引号的字符串指定输出文本或表格的标题。省略时，矩阵表达式的语法用作标题。</p><p>使用 <code>SPACE</code> 子命令在矩阵输出上方请求额外空白。使用数字参数时，它在矩阵上方添加指定行数的空行。使用 <code>NEWPAGE</code> 作为参数时，它在新页的顶部打印矩阵。<code>SPACE</code> 子命令在矩阵以透视表形式输出时不起作用。</p><p><code>RLABELS</code> 和 <code>RNAMES</code> 子命令互斥，可为输出中的每一行提供标签。使用 <code>RLABELS</code> 时，将标签指定为逗号分隔的字符串或其他记号。使用 <code>RNAMES</code> 时，指定一个求值为字符串向量的单一表达式。无论哪种方式，如果标签多于行，多余的标签被忽略；如果行多于标签，多余的行无标签。对于以 <code>RLABELS</code> 输出到透视表的情况，标签可以是任意长度；否则，标签被截断为 8 字节。</p><p><code>CLABELS</code> 和 <code>CNAMES</code> 子命令用于为列添加标签，工作方式类似于 <code>RLABELS</code> 和 <code>RNAMES</code> 为行添加标签。</p><p>当省略表达式时，<code>PRINT</code> 不输出矩阵。相反，它只输出 <code>TITLE</code> 上指定的文本（如果有），前面加上 <code>SPACE</code> 子命令指定的任何空白（如果有）。任何其他子命令都被忽略，并且无论 <code>MDISPLAY</code> 实际设置如何，该命令的行为都如同 <code>MDISPLAY</code> 被设为 <code>TEXT</code>。</p><p>以下语法演示了用 <code>PRINT</code> 为矩阵的行和列添加标签的两种不同方式：</p><pre><code>MATRIX.
COMPUTE m={1, 2, 3; 4, 5, 6; 7, 8, 9}.
PRINT m/RLABELS=a, b, c/CLABELS=x, y, z.

COMPUTE rlabels={&quot;a&quot;, &quot;b&quot;, &quot;c&quot;}.
COMPUTE clabels={&quot;x&quot;, &quot;y&quot;, &quot;z&quot;}.
PRINT m/RNAMES=rlabels/CNAMES=clabels.
END MATRIX.
</code></pre><p>使用 <code>MDISPLAY=TEXT</code>（默认）时，该程序输出如下（两次）：</p><pre><code>m
                x        y        z
a               1        2        3
b               4        5        6
c               7        8        9
</code></pre><p>在上面加上 “SET MDISPLAY=TABLES.” 后，输出变为如下（两次）：</p><table tabindex="0"><thead><tr><th></th><th>x</th><th>y</th><th>z</th></tr></thead><tbody><tr><td>a</td><td>1</td><td>2</td><td>3</td></tr><tr><td>b</td><td>4</td><td>5</td><td>6</td></tr><tr><td>c</td><td>7</td><td>8</td><td>9</td></tr></tbody></table>`,16)])])}const T=d(a,[["render",n]]);export{E as __pageData,T as default};
