import{_ as a,o,c as n,a2 as d}from"./chunks/framework.Bg-Zxr5O.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Matrix-BREAK-Command.md","filePath":"manual-zh/Matrix-BREAK-Command.md","lastUpdated":1785684581000}'),t={name:"manual-zh/Matrix-BREAK-Command.md"};function c(r,e,m,O,E,i){return o(),n("div",null,[...e[0]||(e[0]=[d(`<h4 id="_16-4-7-1-the-break-command" tabindex="-1">16.4.7.1 The <code>BREAK</code> Command <a class="header-anchor" href="#_16-4-7-1-the-break-command" aria-label="Permalink to &quot;16.4.7.1 The \`BREAK\` Command&quot;">​</a></h4><p><code>BREAK</code> 命令可以用在循环体内，通常在 <code>DO IF</code> 命令内部。如果它被执行，则循环立即终止，跳转到 <code>END LOOP</code> 之后的命令。当多个 <code>LOOP</code> 命令嵌套时，<code>BREAK</code> 终止最内层的循环。</p><p>以下示例是对上面示例的修改，展示了 <code>BREAK</code> 如何替代 <code>LOOP</code> 和 <code>END LOOP</code> 上的索引和 <code>IF</code> 子句：</p><pre><code>COMPUTE l = {}.
LOOP n = 2 TO 10.
  COMPUTE a = n.
  COMPUTE i = 1.
  LOOP.
    DO IF MOD(a, 2) = 0.
      COMPUTE a = TRUNC(a &amp;** (1/2)).
    ELSE.
      COMPUTE a = TRUNC(a &amp;** (3/2)).
    END IF.
    DO IF a = 1.
      BREAK.
    END IF.
    COMPUTE i = i + 1.
  END LOOP.
  COMPUTE l = {l; i}.
END LOOP.
PRINT l.
</code></pre>`,4)])])}const P=a(t,[["render",c]]);export{l as __pageData,P as default};
