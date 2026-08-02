import{_ as a,o as t,c as r,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/STRING.md","filePath":"manual-zh/STRING.md","lastUpdated":1785684581000}'),s={name:"manual-zh/STRING.md"};function p(d,e,o,c,_,m){return t(),r("div",null,[...e[0]||(e[0]=[n(`<h3 id="_11-3-string" tabindex="-1">11.3 STRING <a class="header-anchor" href="#_11-3-string" aria-label="Permalink to &quot;11.3 STRING&quot;">​</a></h3><p><code>STRING</code> 创建新的字符串变量。</p><pre><code>STRING var_list (fmt_spec) [/var_list (fmt_spec)] […].
</code></pre><p>指定要创建的变量名列表，后跟括号中所需的输出格式说明（参见 <a href="./Input-and-Output-Formats">Input and Output Formats</a>）。变量宽度由指定的输出格式隐含确定。所创建的变量会被初始化为空格。</p><p>如果要创建多个具有不同输出格式的变量，可以使用两条或更多条独立的 <code>STRING</code> 命令，也可以指定更多的变量列表与格式说明对，每对之间用斜杠（‘/’）与前面分隔。</p><p>下面的例子是创建三个字符串变量的一种方式；其中两个变量格式为 A24，另一个为 A80：</p><pre><code>STRING firstname lastname (A24) / address (A80).
</code></pre><p>下面是达到相同结果的另一种方式：</p><pre><code>STRING firstname lastname (A24).
STRING address (A80).
</code></pre><p>… 还有另一种方式：</p><pre><code>STRING firstname (A24).
STRING lastname (A24).
STRING address (A80).
</code></pre>`,11)])])}const T=a(s,[["render",p]]);export{l as __pageData,T as default};
