import{_ as a,o as n,c as A,a2 as t}from"./chunks/framework.Bg-Zxr5O.js";const s=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/SAVE-DATA-COLLECTION.md","filePath":"manual-zh/SAVE-DATA-COLLECTION.md","lastUpdated":1785684581000}'),E={name:"manual-zh/SAVE-DATA-COLLECTION.md"};function o(d,e,l,r,T,_){return n(),A("div",null,[...e[0]||(e[0]=[t(`<h3 id="_9-7-save-data-collection" tabindex="-1">9.7 SAVE DATA COLLECTION <a class="header-anchor" href="#_9-7-save-data-collection" aria-label="Permalink to &quot;9.7 SAVE DATA COLLECTION&quot;">​</a></h3><pre><code>SAVE DATA COLLECTION
        /OUTFILE={’file_name’,file_handle}
        /METADATA={’file_name’,file_handle}
        /{UNCOMPRESSED,COMPRESSED,ZCOMPRESSED}
        /PERMISSIONS={WRITEABLE,READONLY}
        /DROP=var_list
        /KEEP=var_list
        /VERSION=version
        /RENAME=(src_names=target_names)…
        /NAMES
        /MAP
</code></pre><p>与 <code>SAVE</code> 一样，<code>SAVE DATA COLLECTION</code> 将活动数据集中的字典和数据写入系统文件。此外，它还会将元数据写入一个额外的 XML 元数据文件。</p><p>OUTFILE 是必需的。将待写入的系统文件指定为字符串文件名或文件句柄（参见 <a href="./File-Handles">File Handles</a>）。</p><p>METADATA 也是必需的。将待写入的元数据文件指定为字符串文件名或文件句柄。元数据文件习惯上使用 .mdd 扩展名。</p><p>此命令的当前实现为实验性。它只输出近似的元数据文件格式。如有问题请报告缺陷。</p><p>其他子命令均为可选。它们的含义与 <code>SAVE</code> 命令中的相同。</p><p><code>SAVE DATA COLLECTION</code> 会导致数据被读取。它是一个过程。</p>`,8)])])}const O=a(E,[["render",o]]);export{s as __pageData,O as default};
