import{_ as a,o as t,c as o,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/XEXPORT.md","filePath":"manual-zh/XEXPORT.md","lastUpdated":1785684581000}'),r={name:"manual-zh/XEXPORT.md"};function c(d,e,_,l,P,s){return t(),o("div",null,[...e[0]||(e[0]=[n(`<h3 id="_9-10-xexport" tabindex="-1">9.10 XEXPORT <a class="header-anchor" href="#_9-10-xexport" aria-label="Permalink to &quot;9.10 XEXPORT&quot;">​</a></h3><pre><code>XEXPORT
        /OUTFILE=’file_name’
        /DIGITS=n
        /DROP=var_list
        /KEEP=var_list
        /RENAME=(src_names=target_names)…
        /TYPE={COMM,TAPE}
        /MAP
</code></pre><p><code>XEXPORT</code> 变换将活动数据集的字典与数据写入指定的可移植文件。</p><p>此变换是 PSPP 扩展。</p><p>它与 <code>EXPORT</code> 过程类似，有两处不同：</p><ul><li><code>XEXPORT</code> 是一个变换，而非过程。它在数据被过程或类过程命令读取时执行。</li><li><code>XEXPORT</code> 不支持 <code>UNSELECTED</code> 子命令。</li></ul><p>更多信息请见 <a href="./EXPORT">EXPORT</a>。</p>`,7)])])}const T=a(r,[["render",c]]);export{p as __pageData,T as default};
