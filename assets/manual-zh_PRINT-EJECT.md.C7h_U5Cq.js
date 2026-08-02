import{_ as a,o as t,c as o,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/PRINT-EJECT.md","filePath":"manual-zh/PRINT-EJECT.md","lastUpdated":1785684581000}'),r={name:"manual-zh/PRINT-EJECT.md"};function c(T,e,d,s,_,E){return t(),o("div",null,[...e[0]||(e[0]=[n(`<h3 id="_8-13-print-eject" tabindex="-1">8.13 PRINT EJECT <a class="header-anchor" href="#_8-13-print-eject" aria-label="Permalink to &quot;8.13 PRINT EJECT&quot;">​</a></h3><pre><code>PRINT EJECT
        OUTFILE=’file_name’
        RECORDS=n_lines
        {NOTABLE,TABLE}
        /[line_no] arg…

arg takes one of the following forms:
        ’string’ [start-end]
        var_list start-end [type_spec]
        var_list (fortran_spec)
        var_list *
</code></pre><p><code>PRINT EJECT</code> 在列表文件或输出文件中前进到新输出页的开头。它也可以像 <code>PRINT</code> 一样输出数据。</p><p>所有 <code>PRINT EJECT</code> 子命令都是可选的。</p><p>在没有 <code>OUTFILE</code> 的情况下，<code>PRINT EJECT</code> 在列表文件中换出当前页，然后生成其他输出（如果指定了的话）。</p><p>在有 <code>OUTFILE</code> 的情况下，<code>PRINT EJECT</code> 将其输出写入指定文件。输出的第一行在第一列插入 ‘1’ 写入。通常，这是唯一的输出行。如果指定了额外的输出行，这些额外的行在第一列插入一个空格写入，与 <code>PRINT</code> 相同。</p><p>有关语法和用法的更多信息，参见 <a href="./PRINT">PRINT</a>。</p>`,7)])])}const l=a(r,[["render",c]]);export{i as __pageData,l as default};
