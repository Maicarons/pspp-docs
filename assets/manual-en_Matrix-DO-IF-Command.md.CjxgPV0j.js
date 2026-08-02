import{_ as a,o as t,c as o,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Matrix-DO-IF-Command.md","filePath":"manual-en/Matrix-DO-IF-Command.md","lastUpdated":1785684581000}'),r={name:"manual-en/Matrix-DO-IF-Command.md"};function s(d,e,c,i,m,l){return t(),o("div",null,[...e[0]||(e[0]=[n(`<h4 id="_16-4-6-the-do-if-command" tabindex="-1">16.4.6 The <code>DO IF</code> Command <a class="header-anchor" href="#_16-4-6-the-do-if-command" aria-label="Permalink to &quot;16.4.6 The \`DO IF\` Command&quot;">​</a></h4><pre><code>DO IF _expression_.
  … _matrix commands_ …
[ELSE IF _expression_.
  … _matrix commands_ …]…
[ELSE
  … _matrix commands_ …]
END IF.
</code></pre><p>A <code>DO IF</code> command evaluates its expression argument. If the <code>DO IF</code> expression evaluates to true, then PSPP executes the associated commands. Otherwise, PSPP evaluates the expression on each <code>ELSE IF</code> clause (if any) in order, and executes the commands associated with the first one that yields a true value. Finally, if the <code>DO IF</code> and all the <code>ELSE IF</code> expressions all evaluate to false, PSPP executes the commands following the <code>ELSE</code> clause (if any).</p><p>Each expression on <code>DO IF</code> and <code>ELSE IF</code> must evaluate to a scalar. Positive scalars are considered to be true, and scalars that are zero or negative are considered to be false.</p><p>The following matrix language fragment sets ‘b’ to the term following ‘a’ in the <a href="https://en.wikipedia.org/wiki/Juggler_sequence" target="_blank" rel="noreferrer">Juggler sequence</a>:</p><pre><code>DO IF MOD(a, 2) = 0.
  COMPUTE b = TRUNC(a &amp;** (1/2)).
ELSE.
  COMPUTE b = TRUNC(a &amp;** (3/2)).
END IF.
</code></pre>`,6)])])}const h=a(r,[["render",s]]);export{p as __pageData,h as default};
