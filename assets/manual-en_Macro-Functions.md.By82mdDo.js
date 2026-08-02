import{_ as n,o as a,c as o,a2 as t}from"./chunks/framework.Bg-Zxr5O.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Macro-Functions.md","filePath":"manual-en/Macro-Functions.md","lastUpdated":1785684581000}'),r={name:"manual-en/Macro-Functions.md"};function s(c,e,i,p,u,d){return a(),o("div",null,[...e[0]||(e[0]=[t(`<h4 id="_14-2-6-macro-functions" tabindex="-1">14.2.6 Macro Functions <a class="header-anchor" href="#_14-2-6-macro-functions" aria-label="Permalink to &quot;14.2.6 Macro Functions&quot;">​</a></h4><p>Macro bodies may manipulate syntax using macro functions. Macro functions accept tokens as arguments and expand to sequences of characters.</p><p>The arguments to macro functions have a restricted form. They may only be a single token (such as an identifier or a string), a macro argument, or a call to a macro function. Thus, the following are valid macro arguments:</p><pre><code>x    5.0    x    !1    &quot;5 + 6&quot;    !CONCAT(x,y)
</code></pre><p>and the following are not:</p><pre><code>x y    5+6
</code></pre><p>Macro functions expand to sequences of characters. When these character strings are processed further as character strings, e.g. with <code>!LENGTH</code>, any character string is valid. When they are interpreted as PSPP syntax, e.g. when the expansion becomes part of a command, they need to be valid for that purpose. For example, <code>!UNQUOTE(&quot;It&#39;s&quot;)</code> will yield an error if the expansion <code>It&#39;s</code> becomes part of a PSPP command, because it contains unbalanced single quotes, but <code>!LENGTH(!UNQUOTE(&quot;It&#39;s&quot;))</code> expands to 4.</p><p>The following macro functions are available. Each function’s documentation includes examples in the form <code>call → expansion</code>.</p><p>Macro Function: <strong>!BLANKS</strong> <em>(count)</em></p><p>Expands to count unquoted spaces, where count is a nonnegative integer. Outside quotes, any positive number of spaces are equivalent; for a quoted string of spaces, use <code>!QUOTE(!BLANKS(count))</code>.</p><p>In the examples below, ‘_’ stands in for a space to make the results visible.</p><pre><code>!BLANKS(0)                  → empty
!BLANKS(1)                  → _
!BLANKS(2)                  → __
!QUOTE(!BLANKS(5))          → &#39;_____&#39;
</code></pre><p>Macro Function: <strong>!CONCAT</strong> <em>(arg…)</em></p><p>Expands to the concatenation of all of the arguments. Before concatenation, each quoted string argument is unquoted, as if <code>!UNQUOTE</code> were applied. This allows for “token pasting”, combining two (or more) tokens into a single one:</p><pre><code>!CONCAT(x, y)                → xy
!CONCAT(&#39;x&#39;, &#39;y&#39;)            → xy
!CONCAT(12, 34)              → 1234
!CONCAT(!NULL, 123)          → 123
</code></pre><p><code>!CONCAT</code> is often used for constructing a series of similar variable names from a prefix followed by a number and perhaps a suffix. For example:</p><pre><code>!CONCAT(x, 0)                → x0
!CONCAT(x, 0, y)             → x0y
</code></pre><p>An identifier token must begin with a letter (or ‘#’ or ‘@’), which means that attempting to use a number as the first part of an identifier will produce a pair of distinct tokens rather than a single one. For example:</p><pre><code>!CONCAT(0, x)                → 0 x
!CONCAT(0, x, y)             → 0 xy
</code></pre><p>Macro Function: <strong>!EVAL</strong> <em>(arg)</em></p><p>Expands macro calls in arg. This is especially useful if arg is the name of a macro or a macro argument that expands to one, because arguments to macro functions are not expanded by default (see <a href="./Controlling-Macro-Expansion">Controlling Macro Expansion</a>).</p><p>The following examples assume that <code>!vars</code> is a macro that expands to <code>a b c</code>:</p><pre><code>!vars                        → a b c
!QUOTE(!vars)                → &#39;!vars&#39;
!EVAL(!vars)                 → a b c
!QUOTE(!EVAL(!vars))         → &#39;a b c&#39;
</code></pre><p>These examples additionally assume that argument <code>!1</code> has value <code>!vars</code>:</p><pre><code>!1                           → a b c
!QUOTE(!1)                   → &#39;!vars&#39;
!EVAL(!1)                    → a b c
!QUOTE(!EVAL(!1))            → &#39;a b c&#39;
</code></pre><p>Macro Function: <strong>!HEAD</strong> <em>(arg)</em> Macro Function: <strong>!TAIL</strong> <em>(arg)</em></p><p><code>!HEAD</code> expands to just the first token in an unquoted version of arg, and <code>!TAIL</code> to all the tokens after the first.</p><pre><code>!HEAD(&#39;a b c&#39;)               → a
!HEAD(&#39;a&#39;)                   → a
!HEAD(!NULL)                 → empty
!HEAD(&#39;&#39;)                    → empty

!TAIL(&#39;a b c&#39;)               → b c
!TAIL(&#39;a&#39;)                   → empty
!TAIL(!NULL)                 → empty
!TAIL(&#39;&#39;)                    → empty
</code></pre><p>Macro Function: <strong>!INDEX</strong> <em>(haystack, needle)</em></p><p>Looks for needle in haystack. If it is present, expands to the 1-based index of its first occurrence; if not, expands to 0.</p><pre><code>!INDEX(banana, an)           → 2
!INDEX(banana, nan)          → 3
!INDEX(banana, apple)        → 0
!INDEX(&quot;banana&quot;, nan)        → 4
!INDEX(&quot;banana&quot;, &quot;nan&quot;)      → 0
!INDEX(!UNQUOTE(&quot;banana&quot;), !UNQUOTE(&quot;nan&quot;)) → 3
</code></pre><p>Macro Function: <strong>!LENGTH</strong> <em>(arg)</em></p><p>Expands to a number token representing the number of characters in arg.</p><pre><code>!LENGTH(123)                 → 3
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
</code></pre><p>Macro Function: <strong>!NULL</strong></p><p>Expands to an empty character sequence.</p><pre><code>!NULL                        → empty
!QUOTE(!NULL)                → &#39;&#39;
</code></pre><p>Macro Function: <strong>!QUOTE</strong> <em>(arg)</em> Macro Function: <strong>!UNQUOTE</strong> <em>(arg)</em></p><p>The <code>!QUOTE</code> function expands to its argument surrounded by apostrophes, doubling any apostrophes inside the argument to make sure that it is valid PSPP syntax for a string. If the argument was already a quoted string, <code>!QUOTE</code> expands to it unchanged.</p><p>Given a quoted string argument, the <code>!UNQUOTED</code> function expands to the string’s contents, with the quotes removed and any doubled quote marks reduced to singletons. If the argument was not a quoted string, <code>!UNQUOTE</code> expands to the argument unchanged.</p><pre><code>!QUOTE(123.0)                → &#39;123.0&#39;
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
</code></pre><p>Macro Function: <strong>!SUBSTR</strong> <em>(arg, start[, count])</em></p><p>Expands to a substring of arg starting from 1-based position start. If count is given, it limits the number of characters in the expansion; if it is omitted, then the expansion extends to the end of arg.</p><pre><code>!SUBSTR(banana, 3)           → nana
!SUBSTR(banana, 3, 3)        → nan
!SUBSTR(&quot;banana&quot;, 1, 3)         → error (&quot;ba is not a valid token)
!SUBSTR(!UNQUOTE(&quot;banana&quot;), 3) → nana
!SUBSTR(&quot;banana&quot;, 3, 3)      → ana

!SUBSTR(banana, 3, 0)        → empty
!SUBSTR(banana, 3, 10)       → nana
!SUBSTR(banana, 10, 3)       → empty
</code></pre><p>Macro Function: <strong>!UPCASE</strong> <em>(arg)</em></p><p>Expands to an unquoted version of arg with all letters converted to uppercase.</p><pre><code>!UPCASE(freckle)             → FRECKLE
!UPCASE(&#39;freckle&#39;)           → FRECKLE
!UPCASE(&#39;a b c&#39;)             → A B C
!UPCASE(&#39;A B C&#39;)             → A B C
</code></pre>`,47)])])}const T=n(r,[["render",s]]);export{l as __pageData,T as default};
