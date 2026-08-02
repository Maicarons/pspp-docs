import{_ as a,o as t,c as n,a2 as o}from"./chunks/framework.Bg-Zxr5O.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/ADD-FILES.md","filePath":"manual-en/ADD-FILES.md","lastUpdated":1785684581000}'),s={name:"manual-en/ADD-FILES.md"};function i(r,e,l,c,d,m){return t(),n("div",null,[...e[0]||(e[0]=[o(`<h3 id="_10-2-add-files" tabindex="-1">10.2 ADD FILES <a class="header-anchor" href="#_10-2-add-files" aria-label="Permalink to &quot;10.2 ADD FILES&quot;">​</a></h3><pre><code>ADD FILES

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
</code></pre><p><code>ADD FILES</code> adds cases from multiple input files. The output, which replaces the active dataset, consists all of the cases in all of the input files.</p><p><code>ADD FILES</code> shares the bulk of its syntax with other PSPP commands for combining multiple data files. See <a href="./Combining-Files-Common-Syntax">Combining Files Common Syntax</a>, above, for an explanation of this common syntax.</p><p>When <code>BY</code> is not used, the output of <code>ADD FILES</code> consists of all the cases from the first input file specified, followed by all the cases from the second file specified, and so on. When <code>BY</code> is used, the output is additionally sorted on the <code>BY</code> variables.</p><p>When <code>ADD FILES</code> creates an output case, variables that are not part of the input file from which the case was drawn are set to the system-missing value for numeric variables or spaces for string variables.</p>`,6)])])}const h=a(s,[["render",i]]);export{f as __pageData,h as default};
