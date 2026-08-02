import{_ as a,o as n,c as o,a2 as t}from"./chunks/framework.Bg-Zxr5O.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/ADD-FILES.md","filePath":"manual-zh/ADD-FILES.md","lastUpdated":1785684581000}'),r={name:"manual-zh/ADD-FILES.md"};function d(c,e,_,s,i,l){return n(),o("div",null,[...e[0]||(e[0]=[t(`<h3 id="_10-2-add-files" tabindex="-1">10.2 ADD FILES <a class="header-anchor" href="#_10-2-add-files" aria-label="Permalink to &quot;10.2 ADD FILES&quot;">​</a></h3><pre><code>ADD FILES

Per input file:
        /FILE={*,’file_name’}
        [/RENAME=(src_names=target_names)…]
        [/IN=var_name]
        [/SORT]

Once per command:
        [/BY var_list[({D|A})] [var_list[({D|A})]…]]
        [/DROP=var_list]
        [/KEEP=var_list]
        [/FIRST=var_name]
        [/LAST=var_name]
        [/MAP]
</code></pre><p><code>ADD FILES</code> 用于合并多个输入文件中的个案。其输出（将替换活动数据集）包含全部输入文件中的所有个案。</p><p><code>ADD FILES</code> 的大部分语法与其他用于合并多个数据文件的 PSPP 命令相同。有关这套公共语法的说明，请参见上文的 <a href="./Combining-Files-Common-Syntax">Combining Files Common Syntax</a>。</p><p>未使用 <code>BY</code> 时，<code>ADD FILES</code> 的输出依次包含第一个指定输入文件的所有个案，随后是第二个文件的所有个案，依此类推。使用 <code>BY</code> 时，输出还会按 <code>BY</code> 变量排序。</p><p>当 <code>ADD FILES</code> 创建输出个案时，凡不属于该个案所来源输入文件的变量，对于数值变量将被设为系统缺失值，对于字符串变量则被设为空格。</p>`,6)])])}const p=a(r,[["render",d]]);export{D as __pageData,p as default};
