import{_ as a,o,c as t,a2 as d}from"./chunks/framework.Bg-Zxr5O.js";const T=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/IMPORT.md","filePath":"manual-zh/IMPORT.md","lastUpdated":1785684581000}'),c={name:"manual-zh/IMPORT.md"};function r(n,e,p,_,s,P){return o(),t("div",null,[...e[0]||(e[0]=[d(`<h3 id="_9-5-import" tabindex="-1">9.5 IMPORT <a class="header-anchor" href="#_9-5-import" aria-label="Permalink to &quot;9.5 IMPORT&quot;">​</a></h3><pre><code>IMPORT
        /FILE=’file_name’
        /TYPE={COMM,TAPE}
        /DROP=var_list
        /KEEP=var_list
        /RENAME=(src_names=target_names)…
</code></pre><p><code>IMPORT</code> 转换会清空活动数据集的字典和数据，并用系统文件或便携文件中的字典和数据替换它们。</p><p><code>FILE</code> 子命令是唯一必需的子命令，它将要读取的便携文件指定为文件名字符串或文件句柄（见 <a href="./File-Handles">文件句柄</a>）。</p><p><code>TYPE</code> 子命令目前未被使用。</p><p><code>DROP</code>、<code>KEEP</code> 和 <code>RENAME</code> 遵循 <code>GET</code>（见 <a href="./GET">GET</a>）所用的语法。</p><p><code>IMPORT</code> 不会导致数据被读取，只会读取字典。数据在稍后执行过程时读取。</p><p>使用 <code>IMPORT</code> 读取系统文件是 PSPP 的扩展功能。</p>`,8)])])}const i=a(c,[["render",r]]);export{T as __pageData,i as default};
