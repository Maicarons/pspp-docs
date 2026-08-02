import{_ as o,o as a,c as e,a2 as c}from"./chunks/framework.Bg-Zxr5O.js";const s=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Macro-Functions.md","filePath":"manual-zh/Macro-Functions.md","lastUpdated":1785684581000}'),t={name:"manual-zh/Macro-Functions.md"};function r(p,n,T,E,d,U){return a(),e("div",null,[...n[0]||(n[0]=[c(`<h4 id="_14-2-6-macro-functions" tabindex="-1">14.2.6 Macro Functions <a class="header-anchor" href="#_14-2-6-macro-functions" aria-label="Permalink to &quot;14.2.6 Macro Functions&quot;">​</a></h4><p>宏主体可以使用宏函数操纵语法。宏函数接受记号作为参数，并展开为字符序列。</p><p>宏函数的参数形式受限。它们只能是单个记号（例如标识符或字符串）、宏参数或宏函数调用。因此，以下是有效的宏参数：</p><pre><code>x    5.0    x    !1    &quot;5 + 6&quot;    !CONCAT(x,y)
</code></pre><p>而以下不是：</p><pre><code>x y    5+6
</code></pre><p>宏函数展开为字符序列。当这些字符串进一步作为字符串处理时，例如使用 <code>!LENGTH</code>，任意字符串都是有效的。当它们被解释为 PSPP 语法时，例如当展开成为命令的一部分时，它们需要对该用途有效。例如，如果展开 <code>It&#39;s</code> 成为 PSPP 命令的一部分，则 <code>!UNQUOTE(&quot;It&#39;s&quot;)</code> 会产生错误，因为它包含不成对的单引号，但 <code>!LENGTH(!UNQUOTE(&quot;It&#39;s&quot;))</code> 展开为 4。</p><p>以下是可用的宏函数。每个函数的文档都包含形式为 <code>call → expansion</code> 的示例。</p><p>Macro Function: <strong>!BLANKS</strong> <em>(count)</em></p><p>展开为 count 个未加引号的空格，其中 count 是一个非负整数。在引号之外，任意正数个空格是等价的；对于带引号的空格字符串，请使用 <code>!QUOTE(!BLANKS(count))</code>。</p><p>在下面的示例中，‘_’代表一个空格以使结果可见。</p><pre><code>!BLANKS(0)                  → empty
!BLANKS(1)                  → _
!BLANKS(2)                  → __
!QUOTE(!BLANKS(5))          → &#39;_____&#39;
</code></pre><p>Macro Function: <strong>!CONCAT</strong> <em>(arg…)</em></p><p>展开为所有参数的连接。在连接之前，每个带引号的字符串参数都会被去引号，如同应用了 <code>!UNQUOTE</code>。这允许“记号拼接”，将两个（或更多）记号组合成一个：</p><pre><code>!CONCAT(x, y)                → xy
!CONCAT(&#39;x&#39;, &#39;y&#39;)            → xy
!CONCAT(12, 34)              → 1234
!CONCAT(!NULL, 123)          → 123
</code></pre><p><code>!CONCAT</code> 经常用于从前缀后跟数字（或许还有后缀）构造一系列相似的变量名。例如：</p><pre><code>!CONCAT(x, 0)                → x0
!CONCAT(x, 0, y)             → x0y
</code></pre><p>标识符记号必须以字母（或‘#’或‘@’）开头，这意味着尝试使用数字作为标识符的第一部分会产生一对不同的记号，而不是单个记号。例如：</p><pre><code>!CONCAT(0, x)                → 0 x
!CONCAT(0, x, y)             → 0 xy
</code></pre><p>Macro Function: <strong>!EVAL</strong> <em>(arg)</em></p><p>在 arg 中展开宏调用。如果 arg 是一个宏的名称或展开为宏的宏参数，这尤其有用，因为宏函数的参数默认不会被展开（参见 <a href="./Controlling-Macro-Expansion">Controlling Macro Expansion</a>）。</p><p>以下示例假设 <code>!vars</code> 是一个展开为 <code>a b c</code> 的宏：</p><pre><code>!vars                        → a b c
!QUOTE(!vars)                → &#39;!vars&#39;
!EVAL(!vars)                 → a b c
!QUOTE(!EVAL(!vars))         → &#39;a b c&#39;
</code></pre><p>这些示例还假设参数 <code>!1</code> 的值为 <code>!vars</code>：</p><pre><code>!1                           → a b c
!QUOTE(!1)                   → &#39;!vars&#39;
!EVAL(!1)                    → a b c
!QUOTE(!EVAL(!1))            → &#39;a b c&#39;
</code></pre><p>Macro Function: <strong>!HEAD</strong> <em>(arg)</em> Macro Function: <strong>!TAIL</strong> <em>(arg)</em></p><p><code>!HEAD</code> 展开为 arg 未加引号版本中的第一个记号，<code>!TAIL</code> 展开为第一个记号之后的所有记号。</p><pre><code>!HEAD(&#39;a b c&#39;)               → a
!HEAD(&#39;a&#39;)                   → a
!HEAD(!NULL)                 → empty
!HEAD(&#39;&#39;)                    → empty

!TAIL(&#39;a b c&#39;)               → b c
!TAIL(&#39;a&#39;)                   → empty
!TAIL(!NULL)                 → empty
!TAIL(&#39;&#39;)                    → empty
</code></pre><p>Macro Function: <strong>!INDEX</strong> <em>(haystack, needle)</em></p><p>在 haystack 中查找 needle。如果存在，展开为其首次出现的从 1 开始的索引；如果不存在，展开为 0。</p><pre><code>!INDEX(banana, an)           → 2
!INDEX(banana, nan)          → 3
!INDEX(banana, apple)        → 0
!INDEX(&quot;banana&quot;, nan)        → 4
!INDEX(&quot;banana&quot;, &quot;nan&quot;)      → 0
!INDEX(!UNQUOTE(&quot;banana&quot;), !UNQUOTE(&quot;nan&quot;)) → 3
</code></pre><p>Macro Function: <strong>!LENGTH</strong> <em>(arg)</em></p><p>展开为表示 arg 中字符数的数字记号。</p><pre><code>!LENGTH(123)                 → 3
!LENGTH(123.00)              → 6
!LENGTH( 123 )               → 3
!LENGTH(&quot;123&quot;)               → 5
!LENGTH(xyzzy)               → 5
!LENGTH(&quot;xyzzy&quot;)             → 7
!LENGTH(&quot;xy&quot;&quot;zzy&quot;)           → 9
!LENGTH(!UNQUOTE(&quot;xyzzy&quot;))   → 5
!LENGTH(!UNQUOTE(&quot;xy&quot;&quot;zzy&quot;)) → 6
!LENGTH(!1)                  → 5 if !1 is a b c
!LENGTH(!1)                  → 0 if !1 is empty
!LENGTH(!NULL)               → 0
</code></pre><p>Macro Function: <strong>!NULL</strong></p><p>展开为空字符序列。</p><pre><code>!NULL                        → empty
!QUOTE(!NULL)                → &#39;&#39;
</code></pre><p>Macro Function: <strong>!QUOTE</strong> <em>(arg)</em> Macro Function: <strong>!UNQUOTE</strong> <em>(arg)</em></p><p><code>!QUOTE</code> 函数展开为其参数被单引号包围的形式，并将参数内部的任何单引号翻倍，以确保它是字符串的有效 PSPP 语法。如果参数已经是带引号的字符串，<code>!QUOTE</code> 原样展开它。</p><p>给定带引号的字符串参数，<code>!UNQUOTED</code> 函数展开为字符串的内容，去掉引号并将任何双写的引号缩减为单引号。如果参数不是带引号的字符串，<code>!UNQUOTE</code> 原样展开该参数。</p><pre><code>!QUOTE(123.0)                → &#39;123.0&#39;
!QUOTE( 123 )                → &#39;123&#39;
!QUOTE(&#39;a b c&#39;)              → &#39;a b c&#39;
!QUOTE(&quot;a b c&quot;)              → &quot;a b c&quot;
!QUOTE(!1)                   → &#39;a &#39;&#39;b&#39;&#39; c&#39; if !1 is a &#39;b&#39; c

!UNQUOTE(123.0)              → 123.0
!UNQUOTE( 123 )              → 123
!UNQUOTE(&#39;a b c&#39;)            → a b c
!UNQUOTE(&quot;a b c&quot;)            → a b c
!UNQUOTE(!1)                 → a &#39;b&#39; c if !1 is a &#39;b&#39; c

!QUOTE(!UNQUOTE(123.0))      → &#39;123.0&#39;
!QUOTE(!UNQUOTE( 123 ))      → &#39;123&#39;
!QUOTE(!UNQUOTE(&#39;a b c&#39;))    → &#39;a b c&#39;
!QUOTE(!UNQUOTE(&quot;a b c&quot;))    → &#39;a b c&#39;
!QUOTE(!UNQUOTE(!1))         → &#39;a &#39;&#39;b&#39;&#39; c&#39; if !1 is a &#39;b&#39; c
</code></pre><p>Macro Function: <strong>!SUBSTR</strong> <em>(arg, start[, count])</em></p><p>展开为 arg 从 1 开始位置 start 起的子串。如果给定 count，它会限制展开中的字符数；如果省略，则展开延伸到 arg 的末尾。</p><pre><code>!SUBSTR(banana, 3)           → nana
!SUBSTR(banana, 3, 3)        → nan
!SUBSTR(&quot;banana&quot;, 1, 3)         → error (&quot;ba is not a valid token)
!SUBSTR(!UNQUOTE(&quot;banana&quot;), 3) → nana
!SUBSTR(&quot;banana&quot;, 3, 3)      → ana

!SUBSTR(banana, 3, 0)        → empty
!SUBSTR(banana, 3, 10)       → nana
!SUBSTR(banana, 10, 3)       → empty
</code></pre><p>Macro Function: <strong>!UPCASE</strong> <em>(arg)</em></p><p>展开为 arg 的未加引号版本，其中所有字母转换为大写。</p><pre><code>!UPCASE(freckle)             → FRECKLE
!UPCASE(&#39;freckle&#39;)           → FRECKLE
!UPCASE(&#39;a b c&#39;)             → A B C
!UPCASE(&#39;A B C&#39;)             → A B C
</code></pre>`,47)])])}const N=o(t,[["render",r]]);export{s as __pageData,N as default};
