import{_ as o,o as d,c as n,a2 as c}from"./chunks/framework.Bg-Zxr5O.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/DO-REPEAT.md","filePath":"manual-zh/DO-REPEAT.md","lastUpdated":1785684581000}'),a={name:"manual-zh/DO-REPEAT.md"};function t(E,e,r,p,T,_){return d(),n("div",null,[...e[0]||(e[0]=[c(`<h3 id="_14-4-do-repeat" tabindex="-1">14.4 DO REPEAT <a class="header-anchor" href="#_14-4-do-repeat" aria-label="Permalink to &quot;14.4 DO REPEAT&quot;">​</a></h3><pre><code>DO REPEAT dummy_name=expansion….
        …
END REPEAT [PRINT].

expansion takes one of the following forms:
        var_list
        num_or_range…
        ’string’…
        ALL

num_or_range takes one of the following forms:
        number
        num1 TO num2
</code></pre><p><code>DO REPEAT</code> 重复一段代码块，并在每次重复时以不同的变量、数字或字符串对代码块进行文本替换。</p><p>指定一个哑变量名，后接等号（‘=’）和替换列表。替换项可以是一个现有或新变量的列表、数字、字符串，或 <code>ALL</code>（指定所有现有变量）。当指定数字时，递增的整数序列可用 <code>num1 TO num2</code> 表示，因此‘1 TO 5’是‘1 2 3 4 5’的简写。</p><p>可以指定多个哑变量。每个变量必须具有相同数量的替换项。</p><p><code>DO REPEAT</code> 内的代码重复的次数与每个变量的替换项数量相同。第一次，代入每个哑变量的第一个值；第二次，代入每个哑变量的第二个值；依此类推。</p><p>哑变量替换的工作方式类似于宏。它们在哑变量名出现的行的任何位置都会发生。这包括命令名和子命令名，因此出现在代码块中的命令名和子命令名不应被用作哑变量标识符。哑变量替换不会发生在引号字符串、注释、未加引号的字符串（例如 <code>TITLE</code> 或 <code>DOCUMENT</code> 命令上的文本）内部，也不会发生在 <code>BEGIN DATA</code>…<code>END DATA</code> 内部。</p><p>替换仅在整个单词上发生，因此例如，哑变量 PRINT 不会被代入到单词 PRINTOUT 中。</p><p>用作替换项的新变量名不会自动作为变量创建，而只有在代码块中以会创建它们的上下文使用时才会被创建，_例如_在 <code>NUMERIC</code> 或 <code>STRING</code> 命令上，或在 <code>COMPUTE</code> 赋值的左侧。</p><p>任何命令都可以出现在 <code>DO REPEAT</code> 中，包括嵌套的 <code>DO REPEAT</code> 命令。如果 <code>INCLUDE</code> 或 <code>INSERT</code> 出现在 <code>DO REPEAT</code> 中，则替换不适用于被包含的文件。</p><p>如果在 <code>END REPEAT</code> 上指定了 <code>PRINT</code>，则替换后生成的命令应被打印到列表文件，前缀加一个加号（‘+’）。此功能尚未实现。</p>`,11)])])}const P=o(a,[["render",t]]);export{m as __pageData,P as default};
