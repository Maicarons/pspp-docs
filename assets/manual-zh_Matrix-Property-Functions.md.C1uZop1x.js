import{_ as e,o as a,c as n,a2 as o}from"./chunks/framework.Bg-Zxr5O.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Matrix-Property-Functions.md","filePath":"manual-zh/Matrix-Property-Functions.md","lastUpdated":1785684581000}'),r={name:"manual-zh/Matrix-Property-Functions.md"};function c(s,t,i,p,d,_){return a(),n("div",null,[...t[0]||(t[0]=[o(`<h4 id="_16-4-2-5-矩阵属性函数" tabindex="-1">16.4.2.5 矩阵属性函数 <a class="header-anchor" href="#_16-4-2-5-矩阵属性函数" aria-label="Permalink to &quot;16.4.2.5 矩阵属性函数&quot;">​</a></h4><p>Matrix Function: <strong>NROW</strong> <em>( M)</em> Matrix Function: <strong>NCOL</strong> <em>( M)</em></p><p>分别返回 M 中的行数或列数。</p><pre><code>NROW({1, 0; -2, -3; 3, 3}) ⇒ 3
NROW(1:5) ⇒ 1

NCOL({1, 0; -2, -3; 3, 3}) ⇒ 2
NCOL(1:5) ⇒ 5
</code></pre><p>Matrix Function: <strong>DIAG</strong> <em>( M)</em></p><p>返回一个列向量，包含 M 主对角线的一个副本。该向量的长度等于 <code>NCOL(M)</code> 和 <code>NROW(M)</code> 中的较小者。</p><p><code>DIAG({1, 0; -2, -3; 3, 3}) ⇒ {1; -3}</code></p>`,7)])])}const u=e(r,[["render",c]]);export{l as __pageData,u as default};
