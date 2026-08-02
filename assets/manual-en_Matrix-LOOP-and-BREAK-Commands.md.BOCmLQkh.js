import{_ as t,o,c as a,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Matrix-LOOP-and-BREAK-Commands.md","filePath":"manual-en/Matrix-LOOP-and-BREAK-Commands.md","lastUpdated":1785684581000}'),s={name:"manual-en/Matrix-LOOP-and-BREAK-Commands.md"};function r(i,e,d,l,m,h){return o(),a("div",null,[...e[0]||(e[0]=[n(`<h4 id="_16-4-7-the-loop-and-break-commands" tabindex="-1">16.4.7 The <code>LOOP</code> and <code>BREAK</code> Commands <a class="header-anchor" href="#_16-4-7-the-loop-and-break-commands" aria-label="Permalink to &quot;16.4.7 The \`LOOP\` and \`BREAK\` Commands&quot;">​</a></h4><pre><code>LOOP [_var_ =_first_ TO _last_ [BY _step_]] [IF _expression_].
  … _matrix commands_ …
END LOOP [IF _expression_].

BREAK.
</code></pre><p>The <code>LOOP</code> command executes a nested group of matrix commands, called the loop’s <em>body</em> , repeatedly. It has three optional clauses that control how many times the loop body executes. Regardless of these clauses, the global <code>MXLOOPS</code> setting, which defaults to 40, also limits the number of iterations of a loop. To iterate more times, raise the maximum with <code>SET MXLOOPS</code> outside of the <code>MATRIX</code> command (see <a href="./SET#SET-MXLOOPS">SET MXLOOPS</a>).</p><p>The optional index clause causes var to be assigned successive values on each trip through the loop: first first, then <em>first + step</em>, then <em>first + 2 × step</em>, and so on. The loop ends when <em>var &gt; last</em>, for positive step, or <em>var &lt; last</em>, for negative step. If step is not specified, it defaults to 1. All the index clause expressions must evaluate to scalars, and non-integers are rounded toward zero. If step evaluates as zero (or rounds to zero), then the loop body never executes.</p><p>The optional <code>IF</code> on <code>LOOP</code> is evaluated before each iteration through the loop body. If its expression, which must evaluate to a scalar, is zero or negative, then the loop terminates without executing the loop body.</p><p>The optional <code>IF</code> on <code>END LOOP</code> is evaluated after each iteration through the loop body. If its expression, which must evaluate to a scalar, is zero or negative, then the loop terminates.</p><p>The following computes and prints <em>l(n)</em> , whose value is the number of steps in the <a href="https://en.wikipedia.org/wiki/Juggler_sequence" target="_blank" rel="noreferrer">Juggler sequence</a> for <em>n</em> , for <em>n</em> from 2 to 10 inclusive:</p><pre><code>COMPUTE l = {}.
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
</code></pre><table tabindex="0"><thead><tr><th>• Matrix BREAK Command</th><th></th><th></th></tr></thead></table>`,9)])])}const u=t(s,[["render",r]]);export{p as __pageData,u as default};
