import{_ as a,o as e,c as o,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Matrix-EOF-Function.md","filePath":"manual-zh/Matrix-EOF-Function.md","lastUpdated":1785684581000}'),c={name:"manual-zh/Matrix-EOF-Function.md"};function d(r,t,i,E,_,p){return e(),o("div",null,[...t[0]||(t[0]=[n(`<h4 id="_16-4-2-9-eof-function" tabindex="-1">16.4.2.9 EOF Function <a class="header-anchor" href="#_16-4-2-9-eof-function" aria-label="Permalink to &quot;16.4.2.9 EOF Function&quot;">​</a></h4><p>此函数与 <code>READ</code> 语句上使用的文件一起工作。</p><p>Matrix Function: <strong>EOF</strong> <em>( file)</em></p><p>给定文件句柄或文件名 file，如果文件的最后一行已被读取，则返回整数标量 1；如果还有更多行可用，则返回 0。确定这一点需要尝试读取另一行，这意味着在 <code>EOF</code> 之后对同一文件的下一个 <code>READ</code> 命令上的 <code>REREAD</code> 将无效。</p><p><code>EOF</code> 函数使矩阵程序能够灵活地读取包含文本数据的文件，而无需提前知道文件的长度。例如，以下程序将读取 data.txt 中的所有数据行，每行由三个数字组成，作为矩阵 <code>data</code> 中的行：</p><pre><code>MATRIX.
COMPUTE data={}.
LOOP IF NOT EOF(&#39;data.txt&#39;).
  READ row/FILE=&#39;data.txt&#39;/FIELD=1 TO 1000/SIZE={1,3}.
  COMPUTE data={data; row}.
END LOOP.
PRINT data.
END MATRIX.
</code></pre>`,6)])])}const l=a(c,[["render",d]]);export{F as __pageData,l as default};
