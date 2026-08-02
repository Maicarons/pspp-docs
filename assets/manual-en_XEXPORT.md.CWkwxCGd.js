import{_ as a,o as t,c as o,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/XEXPORT.md","filePath":"manual-en/XEXPORT.md","lastUpdated":1785684581000}'),n={name:"manual-en/XEXPORT.md"};function i(d,e,s,c,p,l){return t(),o("div",null,[...e[0]||(e[0]=[r(`<h3 id="_9-10-xexport" tabindex="-1">9.10 XEXPORT <a class="header-anchor" href="#_9-10-xexport" aria-label="Permalink to &quot;9.10 XEXPORT&quot;">​</a></h3><pre><code>XEXPORT
        /OUTFILE=’file_name’
        /DIGITS=n
        /DROP=var_list
        /KEEP=var_list
        /RENAME=(src_names=target_names)…
        /TYPE={COMM,TAPE}
        /MAP
</code></pre><p>The <code>XEXPORT</code> transformation writes the active dataset dictionary and data to a specified portable file.</p><p>This transformation is a PSPP extension.</p><p>It is similar to the <code>EXPORT</code> procedure, with two differences:</p><ul><li><code>XEXPORT</code> is a transformation, not a procedure. It is executed when the data is read by a procedure or procedure-like command.</li><li><code>XEXPORT</code> does not support the <code>UNSELECTED</code> subcommand.</li></ul><p>See <a href="./EXPORT">EXPORT</a>, for more information.</p>`,7)])])}const P=a(n,[["render",i]]);export{m as __pageData,P as default};
