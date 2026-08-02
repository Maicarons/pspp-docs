import{_ as a,o,c as d,a2 as c}from"./chunks/framework.Bg-Zxr5O.js";const P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/EXPORT.md","filePath":"manual-zh/EXPORT.md","lastUpdated":1785684581000}'),E={name:"manual-zh/EXPORT.md"};function t(n,e,r,p,T,_){return o(),d("div",null,[...e[0]||(e[0]=[c(`<h3 id="_9-2-export" tabindex="-1">9.2 EXPORT <a class="header-anchor" href="#_9-2-export" aria-label="Permalink to &quot;9.2 EXPORT&quot;">​</a></h3><pre><code>EXPORT
        /OUTFILE=’file_name’
        /UNSELECTED={RETAIN,DELETE}
        /DIGITS=n
        /DROP=var_list
        /KEEP=var_list
        /RENAME=(src_names=target_names)…
        /TYPE={COMM,TAPE}
        /MAP
</code></pre><p><code>EXPORT</code> 过程将活动数据集的字典和数据写入指定的便携文件。</p><p>默认情况下，使用 FILTER 排除的个案会被写入文件。可以通过在 <code>UNSELECTED</code> 子命令上指定 DELETE 来排除它们。指定 RETAIN 使默认行为显式化。</p><p>便携文件以 30 进制表示实数。整数总是以使其精确所需的最大精度表示。非整数默认以机器的最大自然精度表示（在许多机器上约为 15 位十进制数字）。如果许多数字需要这么多位数，便携文件的大小可能会显著增加。作为替代，<code>DIGITS</code> 子命令可用于指定要写入的小数位数精度。<code>DIGITS</code> 仅适用于非整数。</p><p><code>OUTFILE</code> 子命令是唯一必需的子命令，它将要写入的便携文件指定为文件名字符串或文件句柄（见 <a href="./File-Handles">文件句柄</a>）。</p><p><code>DROP</code>、<code>KEEP</code> 和 <code>RENAME</code> 遵循与 <code>SAVE</code> 过程相同的格式（见 <a href="./SAVE">SAVE</a>）。</p><p><code>TYPE</code> 子命令指定便携文件中使用的字符集。其值目前未被使用。</p><p><code>MAP</code> 子命令目前被忽略。</p><p><code>EXPORT</code> 是一个过程。它会导致活动数据集被读取。</p>`,10)])])}const l=a(E,[["render",t]]);export{P as __pageData,l as default};
