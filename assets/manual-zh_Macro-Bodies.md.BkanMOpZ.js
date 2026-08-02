import{_ as e,o,c as n,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Macro-Bodies.md","filePath":"manual-zh/Macro-Bodies.md","lastUpdated":1785684581000}'),d={name:"manual-zh/Macro-Bodies.md"};function c(s,a,t,E,i,m){return o(),n("div",null,[...a[0]||(a[0]=[r(`<h4 id="_14-2-3-macro-bodies" tabindex="-1">14.2.3 Macro Bodies <a class="header-anchor" href="#_14-2-3-macro-bodies" aria-label="Permalink to &quot;14.2.3 Macro Bodies&quot;">​</a></h4><p>如前所示，宏主体可以包含 PSPP 命令的一个片段（例如变量名）。宏主体也可以包含完整的 PSPP 命令。在后一种情况下，宏主体还应包含命令终止符。</p><p>大多数 PSPP 命令可以出现在宏内部。<code>DEFINE</code> 命令本身是一个例外，因为内部的 <code>!ENDDEFINE</code> 会结束外部宏定义。为了兼容性，<code>BEGIN DATA</code>…<code>END DATA.</code> 不应在宏内部使用。</p><p>宏的主体可以调用另一个宏。以下展示了一种可行的方式：</p><pre><code>DEFINE !commands()
DESCRIPTIVES !vars.
FREQUENCIES /VARIABLES=!vars.
!ENDDEFINE.

* Initially define the &#39;vars&#39; macro to analyze v1...v3.
DEFINE !vars() v1 v2 v3 !ENDDEFINE.
!commands

* Redefine &#39;vars&#39; macro to analyze different variables.
DEFINE !vars() v4 v5 !ENDDEFINE.
!commands
</code></pre><p>如果 <code>!commands</code> 宏将待分析的变量作为参数传入，而不是通过另一个宏，使用起来会更方便。下一节展示如何实现这一点。</p>`,6)])])}const p=e(d,[["render",c]]);export{l as __pageData,p as default};
