import{_ as e,o as a,c as o,a2 as d}from"./chunks/framework.Bg-Zxr5O.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/GRAPH.md","filePath":"manual-en/GRAPH.md","lastUpdated":1785684581000}'),r={name:"manual-en/GRAPH.md"};function n(c,t,s,l,A,R){return a(),o("div",null,[...t[0]||(t[0]=[d(`<h3 id="_15-4-graph" tabindex="-1">15.4 GRAPH <a class="header-anchor" href="#_15-4-graph" aria-label="Permalink to &quot;15.4 GRAPH&quot;">​</a></h3><pre><code>GRAPH
        /HISTOGRAM [(NORMAL)]= var
        /SCATTERPLOT [(BIVARIATE)] = var1 WITH var2 [BY var3]
        /BAR = {summary-function(var1) | count-function} BY var2 [BY var3]
        [ /MISSING={LISTWISE, VARIABLE} [{EXCLUDE, INCLUDE}] ]
		[{NOREPORT,REPORT}]
</code></pre><p>The <code>GRAPH</code> command produces graphical plots of data. Only one of the subcommands <code>HISTOGRAM</code>, <code>BAR</code> or <code>SCATTERPLOT</code> can be specified, <em>i.e.</em> only one plot can be produced per call of <code>GRAPH</code>. The <code>MISSING</code> is optional.</p><table tabindex="0"><thead><tr><th>• SCATTERPLOT</th><th></th><th>Cartesian Plots</th></tr></thead><tbody><tr><td>• HISTOGRAM</td><td></td><td>Histograms</td></tr><tr><td>• BAR CHART</td><td></td><td>Bar Charts</td></tr></tbody></table>`,4)])])}const T=e(r,[["render",n]]);export{p as __pageData,T as default};
