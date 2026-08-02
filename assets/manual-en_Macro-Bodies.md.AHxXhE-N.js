import{_ as o,o as e,c as n,a2 as t}from"./chunks/framework.Bg-Zxr5O.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Macro-Bodies.md","filePath":"manual-en/Macro-Bodies.md","lastUpdated":1785684581000}'),r={name:"manual-en/Macro-Bodies.md"};function c(s,a,d,i,m,l){return e(),n("div",null,[...a[0]||(a[0]=[t(`<h4 id="_14-2-3-macro-bodies" tabindex="-1">14.2.3 Macro Bodies <a class="header-anchor" href="#_14-2-3-macro-bodies" aria-label="Permalink to &quot;14.2.3 Macro Bodies&quot;">​</a></h4><p>As previously shown, a macro body may contain a fragment of a PSPP command (such as a variable name). A macro body may also contain full PSPP commands. In the latter case, the macro body should also contain the command terminators.</p><p>Most PSPP commands may occur within a macro. The <code>DEFINE</code> command itself is one exception, because the inner <code>!ENDDEFINE</code> ends the outer macro definition. For compatibility, <code>BEGIN DATA</code>…<code>END DATA.</code> should not be used within a macro.</p><p>The body of a macro may call another macro. The following shows one way that could work:</p><pre><code>DEFINE !commands()
DESCRIPTIVES !vars.
FREQUENCIES /VARIABLES=!vars.
!ENDDEFINE.

* Initially define the &#39;vars&#39; macro to analyze v1...v3.
DEFINE !vars() v1 v2 v3 !ENDDEFINE.
!commands

* Redefine &#39;vars&#39; macro to analyze different variables.
DEFINE !vars() v4 v5 !ENDDEFINE.
!commands
</code></pre><p>The <code>!commands</code> macro would be easier to use if it took the variables to analyze as an argument rather than through another macro. The following section shows how to do that.</p>`,6)])])}const p=o(r,[["render",c]]);export{E as __pageData,p as default};
