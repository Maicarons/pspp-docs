import{_ as a,o as n,c as o,a2 as t}from"./chunks/framework.Bg-Zxr5O.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Macro-Arguments.md","filePath":"manual-en/Macro-Arguments.md","lastUpdated":1785684581000}'),r={name:"manual-en/Macro-Arguments.md"};function s(i,e,l,d,c,p){return n(),o("div",null,[...e[0]||(e[0]=[t(`<h4 id="_14-2-4-macro-arguments" tabindex="-1">14.2.4 Macro Arguments <a class="header-anchor" href="#_14-2-4-macro-arguments" aria-label="Permalink to &quot;14.2.4 Macro Arguments&quot;">​</a></h4><p>This section explains how to use macro arguments. As an initial example, the following syntax defines a macro named <code>!analyze</code> that takes all the syntax up to the first command terminator as an argument:</p><pre><code>DEFINE !analyze(!POSITIONAL !CMDEND)
DESCRIPTIVES !1.
FREQUENCIES /VARIABLES=!1.
!ENDDEFINE.
</code></pre><p>When <code>!analyze</code> is called, it expands to a pair of analysis commands with each <code>!1</code> in the body replaced by the argument. That is, these calls:</p><pre><code>!analyze v1 v2 v3.
!analyze v4 v5.
</code></pre><p>act like the following:</p><pre><code>DESCRIPTIVES v1 v2 v3.
FREQUENCIES /VARIABLES=v1 v2 v3.
DESCRIPTIVES v4 v5.
FREQUENCIES /VARIABLES=v4 v5.
</code></pre><p>Macros may take any number of arguments, described within the parentheses in the DEFINE command. Arguments come in two varieties based on how their values are specified when the macro is called:</p><ul><li>A <em>positional</em> argument has a required value that follows the macro’s name. Use the <code>!POSITIONAL</code> keyword to declare a positional argument.</li></ul><p>When a macro is called, the positional argument values appear in the same order as their definitions, before any keyword argument values.</p><p>References to a positional argument in a macro body are numbered: <code>!1</code> is the first positional argument, <code>!2</code> the second, and so on. In addition, <code>!*</code> expands to all of the positional arguments’ values, separated by spaces.</p><p>The following example uses a positional argument:</p><pre><code>    DEFINE !analyze(!POSITIONAL !CMDEND)
    DESCRIPTIVES !1.
    FREQUENCIES /VARIABLES=!1.
    !ENDDEFINE.
    
    !analyze v1 v2 v3.
    !analyze v4 v5.
</code></pre><ul><li>A <em>keyword</em> argument has a name. In the macro call, its value is specified with the syntax <code>_name_ =_value_</code>. The names allow keyword argument values to take any order in the call.</li></ul><p>In declaration and calls, a keyword argument’s name may not begin with ‘!’, but references to it in the macro body do start with a leading ‘!’.</p><p>The following example uses a keyword argument that defaults to ALL if the argument is not assigned a value:</p><pre><code>    DEFINE !analyze_kw(vars=!DEFAULT(ALL) !CMDEND)
    DESCRIPTIVES !vars.
    FREQUENCIES /VARIABLES=!vars.
    !ENDDEFINE.
    
    !analyze_kw vars=v1 v2 v3.  /* Analyze specified variables.
    !analyze_kw.                /* Analyze all variables.
</code></pre><p>If a macro has both positional and keyword arguments, then the positional arguments must come first in the DEFINE command, and their values also come first in macro calls. A keyword argument may be omitted by leaving its keyword out of the call, and a positional argument may be omitted by putting a command terminator where it would appear. (The latter case also omits any following positional arguments and all keyword arguments, if there are any.) When an argument is omitted, a default value is used: either the value specified in <code>!DEFAULT(_value_)</code>, or an empty value otherwise.</p><p>Each argument declaration specifies the form of its value:</p><p><code>!TOKENS(_count_)</code></p><p>Exactly count tokens, e.g. <code>!TOKENS(1)</code> for a single token. Each identifier, number, quoted string, operator, or punctuator is a token. See <a href="./Tokens">Tokens</a>, for a complete definition.</p><p>The following variant of <code>!analyze_kw</code> accepts only a single variable name (or <code>ALL</code>) as its argument:</p><pre><code>DEFINE !analyze_one_var(!POSITIONAL !TOKENS(1))
DESCRIPTIVES !1.
FREQUENCIES /VARIABLES=!1.
!ENDDEFINE.

!analyze_one_var v1.
</code></pre><p><code>!CHAREND(&#39;token&#39;)</code></p><p>Any number of tokens up to token, which should be an operator or punctuator token such as ‘/’ or ‘+’. The token does not become part of the value.</p><p>With the following variant of <code>!analyze_kw</code>, the variables must be following by ‘/’:</p><pre><code>DEFINE !analyze_parens(vars=!CHARNED(&#39;/&#39;))
DESCRIPTIVES !vars.
FREQUENCIES /VARIABLES=!vars.
!ENDDEFINE.

!analyze_parens vars=v1 v2 v3/.
</code></pre><p><code>!ENCLOSE(&#39;start&#39;,&#39;end&#39;)</code></p><p>Any number of tokens enclosed between start and end, which should each be operator or punctuator tokens. For example, use <code>!ENCLOSE(&#39;(&#39;,&#39;)&#39;)</code> for a value enclosed within parentheses. (Such a value could never have right parentheses inside it, even paired with left parentheses.) The start and end tokens are not part of the value.</p><p>With the following variant of <code>!analyze_kw</code>, the variables must be specified within parentheses:</p><pre><code>DEFINE !analyze_parens(vars=!ENCLOSE(&#39;(&#39;,&#39;)&#39;))
DESCRIPTIVES !vars.
FREQUENCIES /VARIABLES=!vars.
!ENDDEFINE.

!analyze_parens vars=(v1 v2 v3).
</code></pre><p><code>!CMDEND</code></p><p>Any number of tokens up to the end of the command. This should be used only for the last positional parameter, since it consumes all of the tokens in the command calling the macro.</p><p>The following variant of <code>!analyze_kw</code> takes all the variable names up to the end of the command as its argument:</p><pre><code>DEFINE !analyze_kw(vars=!CMDEND)
DESCRIPTIVES !vars.
FREQUENCIES /VARIABLES=!vars.
!ENDDEFINE.

!analyze_kw vars=v1 v2 v3.
</code></pre><p>By default, when an argument’s value contains a macro call, the call is expanded each time the argument appears in the macro’s body. The <code>!NOEXPAND</code> keyword in an argument declaration suppresses this expansion. See <a href="./Controlling-Macro-Expansion">Controlling Macro Expansion</a>.</p>`,36)])])}const E=a(r,[["render",s]]);export{h as __pageData,E as default};
