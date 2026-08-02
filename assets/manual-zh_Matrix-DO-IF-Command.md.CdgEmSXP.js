import{_ as a,o,c as d,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Matrix-DO-IF-Command.md","filePath":"manual-zh/Matrix-DO-IF-Command.md","lastUpdated":1785684581000}'),r={name:"manual-zh/Matrix-DO-IF-Command.md"};function t(c,e,m,_,i,s){return o(),d("div",null,[...e[0]||(e[0]=[n(`<h4 id="_16-4-6-the-do-if-command" tabindex="-1">16.4.6 The <code>DO IF</code> Command <a class="header-anchor" href="#_16-4-6-the-do-if-command" aria-label="Permalink to &quot;16.4.6 The \`DO IF\` Command&quot;">​</a></h4><pre><code>DO IF _expression_.
  … _matrix commands_ …
[ELSE IF _expression_.
  … _matrix commands_ …]…
[ELSE
  … _matrix commands_ …]
END IF.
</code></pre><p><code>DO IF</code> 命令求值其表达式参数。如果 <code>DO IF</code> 表达式求值为真，则 PSPP 执行相关联的命令。否则，PSPP 按顺序求值每个 <code>ELSE IF</code> 子句（如果有）上的表达式，并执行第一个产生真值的命令。最后，如果 <code>DO IF</code> 和所有 <code>ELSE IF</code> 表达式都求值为假，PSPP 执行 <code>ELSE</code> 子句（如果有）之后的命令。</p><p><code>DO IF</code> 和 <code>ELSE IF</code> 上的每个表达式必须求值为标量。正的标量被视为真，零或负的标量被视为假。</p><p>以下矩阵语言片段将‘b’设置为 <a href="https://en.wikipedia.org/wiki/Juggler_sequence" target="_blank" rel="noreferrer">Juggler sequence</a> 中‘a’之后的项：</p><pre><code>DO IF MOD(a, 2) = 0.
  COMPUTE b = TRUNC(a &amp;** (1/2)).
ELSE.
  COMPUTE b = TRUNC(a &amp;** (3/2)).
END IF.
</code></pre>`,6)])])}const E=a(r,[["render",t]]);export{l as __pageData,E as default};
