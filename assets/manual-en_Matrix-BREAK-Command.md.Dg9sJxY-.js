import{_ as a,o,c as n,a2 as t}from"./chunks/framework.Bg-Zxr5O.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Matrix-BREAK-Command.md","filePath":"manual-en/Matrix-BREAK-Command.md","lastUpdated":1785684581000}'),d={name:"manual-en/Matrix-BREAK-Command.md"};function m(c,e,i,r,s,l){return o(),n("div",null,[...e[0]||(e[0]=[t(`<h4 id="_16-4-7-1-the-break-command" tabindex="-1">16.4.7.1 The <code>BREAK</code> Command <a class="header-anchor" href="#_16-4-7-1-the-break-command" aria-label="Permalink to &quot;16.4.7.1 The \`BREAK\` Command&quot;">​</a></h4><p>The <code>BREAK</code> command may be used inside a loop body, ordinarily within a <code>DO IF</code> command. If it is executed, then the loop terminates immediately, jumping to the command just following <code>END LOOP</code>. When multiple <code>LOOP</code> commands nest, <code>BREAK</code> terminates the innermost loop.</p><p>The following example is a revision of the one above that shows how <code>BREAK</code> could substitute for the index and <code>IF</code> clauses on <code>LOOP</code> and <code>END LOOP</code>:</p><pre><code>COMPUTE l = {}.
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
</code></pre>`,4)])])}const p=a(d,[["render",m]]);export{E as __pageData,p as default};
