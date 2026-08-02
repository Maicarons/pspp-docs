import{_ as o,o as a,c as t,a2 as d}from"./chunks/framework.Bg-Zxr5O.js";const I=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/WRITE.md","filePath":"manual-zh/WRITE.md","lastUpdated":1785684581000}'),n={name:"manual-zh/WRITE.md"};function c(r,e,l,i,s,T){return a(),t("div",null,[...e[0]||(e[0]=[d(`<h3 id="_8-16-write" tabindex="-1">8.16 WRITE <a class="header-anchor" href="#_8-16-write" aria-label="Permalink to &quot;8.16 WRITE&quot;">​</a></h3><pre><code>WRITE
        OUTFILE=’file_name’
        RECORDS=n_lines
        {NOTABLE,TABLE}
        /[line_no] arg…

arg takes one of the following forms:
        ’string’ [start-end]
        var_list start-end [type_spec]
        var_list (fortran_spec)
        var_list *
</code></pre><p><code>WRITE</code> 将文本或二进制数据写入输出文件。</p><p>关于语法与用法的更多信息，请见 <a href="./PRINT">PRINT</a>。<code>PRINT</code> 与 <code>WRITE</code> 仅在几个方面存在差异：</p><ul><li><code>WRITE</code> 默认使用写格式，而 <code>PRINT</code> 使用打印格式。</li><li><code>PRINT</code> 在变量之间插入一个空格（除非显式指定了格式），但 <code>WRITE</code> 在输出中从不在变量之间插入空格。</li><li><code>PRINT</code> 在它写入输出文件的每行开头插入一个空格（而 <code>PRINT EJECT</code> 在每行开头插入 ‘1’，表示应另起一页），但 <code>WRITE</code> 不会。</li><li><code>PRINT</code> 根据指定的输出格式输出系统缺失值，而 <code>WRITE</code> 将系统缺失值输出为以空格填充的字段。二进制格式是例外。</li></ul>`,5)])])}const R=o(n,[["render",c]]);export{I as __pageData,R as default};
