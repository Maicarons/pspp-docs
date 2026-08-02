import{_ as a,o,c as t,a2 as c}from"./chunks/framework.Bg-Zxr5O.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/DATA-LIST-FREE.md","filePath":"manual-zh/DATA-LIST-FREE.md","lastUpdated":1785684581000}'),d={name:"manual-zh/DATA-LIST-FREE.md"};function n(r,e,p,T,E,s){return o(),t("div",null,[...e[0]||(e[0]=[c(`<h4 id="_8-5-2-data-list-free" tabindex="-1">8.5.2 DATA LIST FREE <a class="header-anchor" href="#_8-5-2-data-list-free" aria-label="Permalink to &quot;8.5.2 DATA LIST FREE&quot;">​</a></h4><pre><code>DATA LIST FREE
        [({TAB,’c’}, …)]
        [{NOTABLE,TABLE}]
        [FILE=’file_name’ [ENCODING=’encoding’]]
        [SKIP=n_records]
        /var_spec…

where each var_spec takes one of the forms
        var_list [(type_spec)]
        var_list *
</code></pre><p>在自由格式中，默认情况下输入数据被构造成以空格、制表符或换行符分隔的一系列字段。如果当前 <code>DECIMAL</code> 分隔符为 <code>DOT</code>（参见 <a href="./SET">SET</a>），则逗号也被视为字段分隔符。每个字段的内容可以不被引号括起，也可以用一对单引号（‘&#39;’）或双引号（‘&quot;’）括起。未被引号括起的空白分隔字段，但不属于任何字段的一部分。任何空格、制表符和换行符的混合都等价于单个空格，用于分隔字段，但连续的逗号会跳过一个字段。</p><p>或者，可以显式指定分隔符，作为紧跟在 FREE 之后的、以逗号分隔的单字符字符串的括号列表。也可以使用单词 TAB 来指定制表符作为分隔符。显式指定分隔符时，只有给定的字符以及换行符才分隔字段。此外，字段开头的空格不会被修剪，连续的分隔符定义空字段，且不允许任何形式的引号。</p><p><code>NOTABLE</code> 和 <code>TABLE</code> 子命令与上文 <code>DATA LIST FIXED</code> 中相同。<code>NOTABLE</code> 为默认值。</p><p><code>FILE</code>、<code>SKIP</code> 和 <code>ENCODING</code> 子命令与上文 <code>DATA LIST FIXED</code> 中相同。</p><p>要解析的变量以单个变量名列表给出。该列表必须以单个斜杠（‘/’）开头。变量名集合中可以包含括号中的格式说明（参见 <a href="./Input-and-Output-Formats">输入与输出格式</a>）。格式说明适用于其之前所有、直到上一个带括号格式说明的变量。</p><p>此外，可以使用星号来指明其前面的所有变量都具有输入/输出格式‘F8.0’。</p><p>指定的字段宽度在输入时被忽略（尽管字段宽度的所有常规限制仍然适用），但在输出时会被采用。</p>`,9)])])}const l=a(d,[["render",n]]);export{A as __pageData,l as default};
