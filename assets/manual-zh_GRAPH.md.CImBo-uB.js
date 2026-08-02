import{_ as e,o as a,c as d,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/GRAPH.md","filePath":"manual-zh/GRAPH.md","lastUpdated":1785684581000}'),o={name:"manual-zh/GRAPH.md"};function n(c,t,A,R,T,_){return a(),d("div",null,[...t[0]||(t[0]=[r(`<h3 id="_15-4-graph" tabindex="-1">15.4 GRAPH <a class="header-anchor" href="#_15-4-graph" aria-label="Permalink to &quot;15.4 GRAPH&quot;">​</a></h3><pre><code>GRAPH
        /HISTOGRAM [(NORMAL)]= var
        /SCATTERPLOT [(BIVARIATE)] = var1 WITH var2 [BY var3]
        /BAR = {summary-function(var1) | count-function} BY var2 [BY var3]
        [ /MISSING={LISTWISE, VARIABLE} [{EXCLUDE, INCLUDE}] ]
		[{NOREPORT,REPORT}]
</code></pre><p><code>GRAPH</code> 命令生成数据的图形绘图。只能指定 <code>HISTOGRAM</code>、<code>BAR</code> 或 <code>SCATTERPLOT</code> 子命令之一，<em>即</em> 每次调用 <code>GRAPH</code> 只能生成一个绘图。<code>MISSING</code> 是可选的。</p><table tabindex="0"><thead><tr><th>• SCATTERPLOT</th><th></th><th>笛卡尔图</th></tr></thead><tbody><tr><td>• HISTOGRAM</td><td></td><td>直方图</td></tr><tr><td>• BAR CHART</td><td></td><td>条形图</td></tr></tbody></table>`,4)])])}const l=e(o,[["render",n]]);export{h as __pageData,l as default};
