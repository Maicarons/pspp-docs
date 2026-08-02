import{_ as e,o as t,c as r,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const s=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Reading-data-from-a-text-file.md","filePath":"manual-zh/Reading-data-from-a-text-file.md","lastUpdated":1785684581000}'),d={name:"manual-zh/Reading-data-from-a-text-file.md"};function o(i,a,l,_,c,m){return t(),r("div",null,[...a[0]||(a[0]=[n(`<h4 id="_5-1-3-从文本文件读取数据" tabindex="-1">5.1.3 从文本文件读取数据 <a class="header-anchor" href="#_5-1-3-从文本文件读取数据" aria-label="Permalink to &quot;5.1.3 从文本文件读取数据&quot;">​</a></h4><p>前面的例子展示了如何定义一组变量并手动输入这些变量的数据。手动输入数据是一项繁琐的工作，而包含数据的文件通常已经事先准备好。假设你有一个名为 mydata.dat 的文件，其中包含 ASCII 编码的数据：</p><pre><code>Ahmed          188.00
Bertram        167.00
Catherine      134.23
David          109.10
              .
              .
              .
Zachariah      113.02
</code></pre><p>你可以通过类似下面的命令，让 <code>DATA LIST</code> 命令直接从这个文件读取数据，而不必手动输入：</p><pre><code>PSPP&gt; data list file=&#39;mydata.dat&#39; list /forename (A12) height.
</code></pre><p>不过请注意，仍然需要指定变量名及其格式，因为文件中并不包含这些信息。也可以指定文件的字符编码及其他参数。完整细节请参见 <a href="./DATA-LIST">DATA LIST</a>。</p>`,6)])])}const f=e(d,[["render",o]]);export{s as __pageData,f as default};
