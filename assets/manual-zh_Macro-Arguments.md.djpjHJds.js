import{_ as a,o as n,c as E,a2 as o}from"./chunks/framework.Bg-Zxr5O.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Macro-Arguments.md","filePath":"manual-zh/Macro-Arguments.md","lastUpdated":1785684581000}'),r={name:"manual-zh/Macro-Arguments.md"};function c(p,e,d,I,l,s){return n(),E("div",null,[...e[0]||(e[0]=[o(`<h4 id="_14-2-4-macro-arguments" tabindex="-1">14.2.4 Macro Arguments <a class="header-anchor" href="#_14-2-4-macro-arguments" aria-label="Permalink to &quot;14.2.4 Macro Arguments&quot;">​</a></h4><p>本节解释如何使用宏参数。作为初始示例，以下语法定义了一个名为 <code>!analyze</code> 的宏，它将直到第一个命令终止符的所有语法作为一个参数：</p><pre><code>DEFINE !analyze(!POSITIONAL !CMDEND)
DESCRIPTIVES !1.
FREQUENCIES /VARIABLES=!1.
!ENDDEFINE.
</code></pre><p>当调用 <code>!analyze</code> 时，它展开为一对分析命令，主体中的每个 <code>!1</code> 都被该参数替换。也就是说，这些调用：</p><pre><code>!analyze v1 v2 v3.
!analyze v4 v5.
</code></pre><p>等价于以下内容：</p><pre><code>DESCRIPTIVES v1 v2 v3.
FREQUENCIES /VARIABLES=v1 v2 v3.
DESCRIPTIVES v4 v5.
FREQUENCIES /VARIABLES=v4 v5.
</code></pre><p>宏可以接受任意数量的参数，在 DEFINE 命令的括号内描述。参数根据宏调用时其值的指定方式分为两种：</p><ul><li><em>位置参数</em>（positional argument）具有一个必需的值，位于宏名称之后。使用 <code>!POSITIONAL</code> 关键字声明位置参数。</li></ul><p>当调用宏时，位置参数值以与其定义相同的顺序出现，位于任何关键字参数值之前。</p><p>对宏主体中位置参数的引用是编号的：<code>!1</code> 是第一个位置参数，<code>!2</code> 是第二个，依此类推。此外，<code>!*</code> 展开为所有位置参数的值，以空格分隔。</p><p>以下示例使用一个位置参数：</p><pre><code>    DEFINE !analyze(!POSITIONAL !CMDEND)
    DESCRIPTIVES !1.
    FREQUENCIES /VARIABLES=!1.
    !ENDDEFINE.

    !analyze v1 v2 v3.
    !analyze v4 v5.
</code></pre><ul><li><em>关键字参数</em>（keyword argument）具有一个名称。在宏调用中，其值使用语法 <code>_name_ =_value_</code> 指定。名称允许关键字参数值在调用中以任意顺序出现。</li></ul><p>在声明和调用中，关键字参数的名称不能以‘!’开头，但在宏主体中对它的引用以开头的‘!’开始。</p><p>以下示例使用了一个关键字参数，如果未给该参数赋值，则默认为 ALL：</p><pre><code>    DEFINE !analyze_kw(vars=!DEFAULT(ALL) !CMDEND)
    DESCRIPTIVES !vars.
    FREQUENCIES /VARIABLES=!vars.
    !ENDDEFINE.

    !analyze_kw vars=v1 v2 v3.  /* Analyze specified variables.
    !analyze_kw.                /* Analyze all variables.
</code></pre><p>如果宏既有位置参数又有关键字参数，则位置参数必须位于 DEFINE 命令的首位，它们的值在宏调用中也首先出现。关键字参数可以通过在调用中省略其关键字来省略，位置参数可以通过在其应出现的位置放置命令终止符来省略。（后一种情况也会省略任何随后的位置参数以及所有关键字参数，如果有的话。）当省略某个参数时，使用默认值：要么是在 <code>!DEFAULT(_value_)</code> 中指定的值，要么是空值。</p><p>每个参数声明指定其值的格式：</p><p><code>!TOKENS(_count_)</code></p><p>恰好 count 个记号，例如 <code>!TOKENS(1)</code> 表示单个记号。每个标识符、数字、带引号的字符串、运算符或标点符号都是一个记号。完整定义参见 <a href="./Tokens">Tokens</a>。</p><p><code>!analyze_kw</code> 的以下变体仅接受单个变量名（或 <code>ALL</code>）作为参数：</p><pre><code>DEFINE !analyze_one_var(!POSITIONAL !TOKENS(1))
DESCRIPTIVES !1.
FREQUENCIES /VARIABLES=!1.
!ENDDEFINE.

!analyze_one_var v1.
</code></pre><p><code>!CHAREND(&#39;token&#39;)</code></p><p>任意数量的记号直到 token，token 应为运算符或标点符号记号，如‘/’或‘+’。该记号不成为值的一部分。</p><p>使用 <code>!analyze_kw</code> 的以下变体，变量必须后跟‘/’：</p><pre><code>DEFINE !analyze_parens(vars=!CHARNED(&#39;/&#39;))
DESCRIPTIVES !vars.
FREQUENCIES /VARIABLES=!vars.
!ENDDEFINE.

!analyze_parens vars=v1 v2 v3/.
</code></pre><p><code>!ENCLOSE(&#39;start&#39;,&#39;end&#39;)</code></p><p>任意数量、由 start 和 end 包围的记号，start 和 end 应各为运算符或标点符号记号。例如，使用 <code>!ENCLOSE(&#39;(&#39;,&#39;)&#39;)</code> 表示括在括号内的一个值。（这样的值内部不可能有右括号，即使与左括号配对也不行。）start 和 end 记号不是值的一部分。</p><p>使用 <code>!analyze_kw</code> 的以下变体，变量必须指定在括号内：</p><pre><code>DEFINE !analyze_parens(vars=!ENCLOSE(&#39;(&#39;,&#39;)&#39;))
DESCRIPTIVES !vars.
FREQUENCIES /VARIABLES=!vars.
!ENDDEFINE.

!analyze_parens vars=(v1 v2 v3).
</code></pre><p><code>!CMDEND</code></p><p>任意数量的记号直到命令结束。这只应用于最后一个位置参数，因为它会消耗调用该宏的命令中的所有记号。</p><p><code>!analyze_kw</code> 的以下变体将直到命令结束的所有变量名作为其参数：</p><pre><code>DEFINE !analyze_kw(vars=!CMDEND)
DESCRIPTIVES !vars.
FREQUENCIES /VARIABLES=!vars.
!ENDDEFINE.

!analyze_kw vars=v1 v2 v3.
</code></pre><p>默认情况下，当参数的值包含宏调用时，该调用在参数每次出现在宏主体中时展开。参数声明中的 <code>!NOEXPAND</code> 关键字抑制这种展开。参见 <a href="./Controlling-Macro-Expansion">Controlling Macro Expansion</a>。</p>`,36)])])}const N=a(r,[["render",c]]);export{v as __pageData,N as default};
