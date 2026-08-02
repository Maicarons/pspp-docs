import{_ as a,o as t,c as o,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/XSAVE.md","filePath":"manual-en/XSAVE.md","lastUpdated":1785684581000}'),n={name:"manual-en/XSAVE.md"};function s(d,e,i,c,E,S){return t(),o("div",null,[...e[0]||(e[0]=[r(`<h3 id="_9-11-xsave" tabindex="-1">9.11 XSAVE <a class="header-anchor" href="#_9-11-xsave" aria-label="Permalink to &quot;9.11 XSAVE&quot;">​</a></h3><pre><code>XSAVE
        /OUTFILE=’file_name’
        /{UNCOMPRESSED,COMPRESSED,ZCOMPRESSED}
        /PERMISSIONS={WRITEABLE,READONLY}
        /DROP=var_list
        /KEEP=var_list
        /VERSION=version
        /RENAME=(src_names=target_names)…
        /NAMES
        /MAP
</code></pre><p>The <code>XSAVE</code> transformation writes the active dataset’s dictionary and data to a system file. It is similar to the <code>SAVE</code> procedure, with two differences:</p><ul><li><code>XSAVE</code> is a transformation, not a procedure. It is executed when the data is read by a procedure or procedure-like command.</li><li><code>XSAVE</code> does not support the <code>UNSELECTED</code> subcommand.</li></ul><p>See <a href="./SAVE">SAVE</a>, for more information.</p>`,5)])])}const m=a(n,[["render",s]]);export{_ as __pageData,m as default};
