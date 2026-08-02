import{_ as a,o as t,c as n,a2 as o}from"./chunks/framework.Bg-Zxr5O.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/XSAVE.md","filePath":"manual-zh/XSAVE.md","lastUpdated":1785684581000}'),E={name:"manual-zh/XSAVE.md"};function r(S,e,c,d,s,_){return t(),n("div",null,[...e[0]||(e[0]=[o(`<h3 id="_9-11-xsave" tabindex="-1">9.11 XSAVE <a class="header-anchor" href="#_9-11-xsave" aria-label="Permalink to &quot;9.11 XSAVE&quot;">​</a></h3><pre><code>XSAVE
        /OUTFILE=’file_name’
        /{UNCOMPRESSED,COMPRESSED,ZCOMPRESSED}
        /PERMISSIONS={WRITEABLE,READONLY}
        /DROP=var_list
        /KEEP=var_list
        /VERSION=version
        /RENAME=(src_names=target_names)…
        /NAMES
        /MAP
</code></pre><p><code>XSAVE</code> 变换将活动数据集的字典与数据写入系统文件。它与 <code>SAVE</code> 过程类似，有两处不同：</p><ul><li><code>XSAVE</code> 是一个变换，而非过程。它在数据被过程或类过程命令读取时执行。</li><li><code>XSAVE</code> 不支持 <code>UNSELECTED</code> 子命令。</li></ul><p>更多信息请见 <a href="./SAVE">SAVE</a>。</p>`,5)])])}const A=a(E,[["render",r]]);export{i as __pageData,A as default};
