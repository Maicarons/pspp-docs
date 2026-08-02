import{_ as a,o as t,c as n,a2 as o}from"./chunks/framework.Bg-Zxr5O.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/COMMENT.md","filePath":"manual-zh/COMMENT.md","lastUpdated":1785684581000}'),m={name:"manual-zh/COMMENT.md"};function r(c,e,s,d,_,l){return t(),n("div",null,[...e[0]||(e[0]=[o(`<h3 id="_17-4-comment" tabindex="-1">17.4 COMMENT <a class="header-anchor" href="#_17-4-comment" aria-label="Permalink to &quot;17.4 COMMENT&quot;">​</a></h3><pre><code>Comment commands:
    COMMENT comment text … .
    *comment text … .

Comments within a line of syntax:
    FREQUENCIES /VARIABLES=v0 v1 v2.  /* All our categorical variables.
</code></pre><p><code>COMMENT</code> 会被忽略。它用于向 PSPP 语法文件的作者及其他阅读者提供说明信息。</p><p><code>COMMENT</code> 可以跨任意多行。它以行末的句点或者空行结束。注释中可以包含任意字符。</p><p>PSPP 还支持在语法行内使用以 ‘/<em>’ 引入的注释。这类注释在遇到第一个 ‘</em>/’ 或行末时结束，以先出现者为准。仅包含此类注释的行被视为空行，并会结束当前命令。</p>`,5)])])}const M=a(m,[["render",r]]);export{p as __pageData,M as default};
