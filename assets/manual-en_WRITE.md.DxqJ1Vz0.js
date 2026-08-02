import{_ as t,o as a,c as n,a2 as o}from"./chunks/framework.Bg-Zxr5O.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/WRITE.md","filePath":"manual-en/WRITE.md","lastUpdated":1785684581000}'),s={name:"manual-en/WRITE.md"};function i(r,e,d,c,l,p){return a(),n("div",null,[...e[0]||(e[0]=[o(`<h3 id="_8-16-write" tabindex="-1">8.16 WRITE <a class="header-anchor" href="#_8-16-write" aria-label="Permalink to &quot;8.16 WRITE&quot;">​</a></h3><pre><code>WRITE
        OUTFILE=’file_name’
        RECORDS=n_lines
        {NOTABLE,TABLE}
        /[line_no] arg…

arg takes one of the following forms:
        ’string’ [start-end]
        var_list start-end [type_spec]
        var_list (fortran_spec)
        var_list *
</code></pre><p><code>WRITE</code> writes text or binary data to an output file.</p><p>See <a href="./PRINT">PRINT</a>, for more information on syntax and usage. <code>PRINT</code> and <code>WRITE</code> differ in only a few ways:</p><ul><li><code>WRITE</code> uses write formats by default, whereas <code>PRINT</code> uses print formats.</li><li><code>PRINT</code> inserts a space between variables unless a format is explicitly specified, but <code>WRITE</code> never inserts space between variables in output.</li><li><code>PRINT</code> inserts a space at the beginning of each line that it writes to an output file (and <code>PRINT EJECT</code> inserts ‘1’ at the beginning of each line that should begin a new page), but <code>WRITE</code> does not.</li><li><code>PRINT</code> outputs the system-missing value according to its specified output format, whereas <code>WRITE</code> outputs the system-missing value as a field filled with spaces. Binary formats are an exception.</li></ul>`,5)])])}const T=t(s,[["render",i]]);export{u as __pageData,T as default};
