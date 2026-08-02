import{_ as t,o as n,c as a,a2 as o}from"./chunks/framework.Bg-Zxr5O.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/PRINT-EJECT.md","filePath":"manual-en/PRINT-EJECT.md","lastUpdated":1785684581000}'),i={name:"manual-en/PRINT-EJECT.md"};function s(r,e,d,c,l,p){return n(),a("div",null,[...e[0]||(e[0]=[o(`<h3 id="_8-13-print-eject" tabindex="-1">8.13 PRINT EJECT <a class="header-anchor" href="#_8-13-print-eject" aria-label="Permalink to &quot;8.13 PRINT EJECT&quot;">​</a></h3><pre><code>PRINT EJECT
        OUTFILE=’file_name’
        RECORDS=n_lines
        {NOTABLE,TABLE}
        /[line_no] arg…

arg takes one of the following forms:
        ’string’ [start-end]
        var_list start-end [type_spec]
        var_list (fortran_spec)
        var_list *
</code></pre><p><code>PRINT EJECT</code> advances to the beginning of a new output page in the listing file or output file. It can also output data in the same way as <code>PRINT</code>.</p><p>All <code>PRINT EJECT</code> subcommands are optional.</p><p>Without <code>OUTFILE</code>, <code>PRINT EJECT</code> ejects the current page in the listing file, then it produces other output, if any is specified.</p><p>With <code>OUTFILE</code>, <code>PRINT EJECT</code> writes its output to the specified file. The first line of output is written with ‘1’ inserted in the first column. Commonly, this is the only line of output. If additional lines of output are specified, these additional lines are written with a space inserted in the first column, as with <code>PRINT</code>.</p><p>See <a href="./PRINT">PRINT</a>, for more information on syntax and usage.</p>`,7)])])}const u=t(i,[["render",s]]);export{f as __pageData,u as default};
