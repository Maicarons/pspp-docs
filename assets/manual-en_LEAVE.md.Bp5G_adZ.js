import{_ as a,o as t,c as s,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/LEAVE.md","filePath":"manual-en/LEAVE.md","lastUpdated":1785684581000}'),i={name:"manual-en/LEAVE.md"};function o(r,e,c,d,l,p){return t(),s("div",null,[...e[0]||(e[0]=[n(`<h3 id="_11-21-leave" tabindex="-1">11.21 LEAVE <a class="header-anchor" href="#_11-21-leave" aria-label="Permalink to &quot;11.21 LEAVE&quot;">​</a></h3><p><code>LEAVE</code> prevents the specified variables from being reinitialized whenever a new case is processed.</p><pre><code>LEAVE var_list.
</code></pre><p>Normally, when a data file is processed, every variable in the active dataset is initialized to the system-missing value or spaces at the beginning of processing for each case. When a variable has been specified on <code>LEAVE</code>, this is not the case. Instead, that variable is initialized to 0 (not system-missing) or spaces for the first case. After that, it retains its value between cases.</p><p>This becomes useful for counters. For instance, in the example below the variable <code>SUM</code> maintains a running total of the values in the <code>ITEM</code> variable.</p><pre><code>DATA LIST /ITEM 1-3.
COMPUTE SUM=SUM+ITEM.
PRINT /ITEM SUM.
LEAVE SUM
BEGIN DATA.
123
404
555
999
END DATA.
</code></pre><p>Partial output from this example:</p><pre><code>123   123.00
404   527.00
555  1082.00
999  2081.00
</code></pre><p>It is best to use <code>LEAVE</code> command immediately before invoking a procedure command, because the left status of variables is reset by certain transformations—for instance, <code>COMPUTE</code> and <code>IF</code>. Left status is also reset by all procedure invocations.</p>`,9)])])}const f=a(i,[["render",o]]);export{m as __pageData,f as default};
