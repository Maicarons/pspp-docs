import{_ as a,o,c as n,a2 as t}from"./chunks/framework.Bg-Zxr5O.js";const P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/UPDATE.md","filePath":"manual-zh/UPDATE.md","lastUpdated":1785684581000}'),d={name:"manual-zh/UPDATE.md"};function c(r,e,_,l,i,p){return o(),n("div",null,[...e[0]||(e[0]=[t(`<h3 id="_10-4-update" tabindex="-1">10.4 UPDATE <a class="header-anchor" href="#_10-4-update" aria-label="Permalink to &quot;10.4 UPDATE&quot;">​</a></h3><pre><code>UPDATE

Per input file:
        /FILE={*,’file_name’}
        [/RENAME=(src_names=target_names)…]
        [/IN=var_name]
        [/SORT]

Once per command:
        /BY var_list[({D|A})] [var_list[({D|A})]]…
        [/DROP=var_list]
        [/KEEP=var_list]
        [/MAP]
</code></pre><p><code>UPDATE</code> 通过应用来自一个或多个_事务文件_ 的修改来更新一个_主文件_ 。</p><p><code>UPDATE</code> 的大部分语法与其他用于合并多个数据文件的 PSPP 命令相同。关于此通用语法的说明，请见上文的 <a href="./Combining-Files-Common-Syntax">合并文件通用语法</a>。</p><p>必须至少指定两个 <code>FILE</code> 子命令。第一个 <code>FILE</code> 子命令命名主文件，其余命名事务文件。每个输入文件必须按 <code>BY</code> 子命令中命名的变量排序，或者必须在该输入文件的 <code>FILE</code> 子命令之后立即使用 <code>SORT</code> 子命令。</p><p><code>UPDATE</code> 使用 <code>BY</code> 子命令（必需）指定的变量，尝试将事务文件中的每个个案与主文件中的个案相匹配：</p><ul><li>当找到匹配时，事务文件中出现的变量的值将替换新活动文件中这些变量的值。如果多个事务文件中存在匹配的个案，PSPP 先应用第一个事务文件的替换，再应用第二个事务文件的替换，依此类推。类似地，如果单个事务文件含有 <code>BY</code> 值重复的个案，则这些个案会按顺序应用到主文件。</li></ul><p>当事务文件中的变量为缺失值，或字符串变量的值为全空白时，该值绝不用于更新主文件。</p><ul><li>如果主文件中的某个个案在任何事务文件中都没有匹配的个案，则它原样复制到输出中。</li><li>如果事务文件中的某个个案在主文件中没有匹配的个案，则它会导致向输出中添加一个新的个案，该个案由事务文件中的值初始化。</li></ul>`,9)])])}const m=a(d,[["render",c]]);export{P as __pageData,m as default};
