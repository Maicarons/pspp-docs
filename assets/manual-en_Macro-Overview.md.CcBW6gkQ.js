import{_,o as n,c as a,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Macro-Overview.md","filePath":"manual-en/Macro-Overview.md","lastUpdated":1785684581000}'),o={name:"manual-en/Macro-Overview.md"};function t(i,e,c,d,s,p){return n(),a("div",null,[...e[0]||(e[0]=[r(`<h4 id="_14-2-1-overview" tabindex="-1">14.2.1 Overview <a class="header-anchor" href="#_14-2-1-overview" aria-label="Permalink to &quot;14.2.1 Overview&quot;">​</a></h4><pre><code>DEFINE _macro_name_([_argument_[/_argument_]…])
… _body_ …
!ENDDEFINE.
</code></pre><p>Each <em>argument</em> takes the following form:</p><pre><code>{_!arg_name_ = _|_ !POSITIONAL}
[!DEFAULT(_default_)]
[!NOEXPAND]
{!TOKENS(_count_) _|_ !CHAREND(&#39;_token_ &#39;) _|_ !ENCLOSE(&#39;_start_ &#39; _|_ &#39;_end_ &#39;) _|_ !CMDEND}
</code></pre><p>The following directives may be used within <em>body</em> :</p><pre><code>!OFFEXPAND
!ONEXPAND
</code></pre><p>The following functions may be used within the body:</p><pre><code>!BLANKS(_count_)
!CONCAT(_arg_ …)
!EVAL(_arg_)
!HEAD(_arg_)
!INDEX(_haystack_ , _needle_)
!LENGTH(_arg_)
!NULL
!QUOTE(_arg_)
!SUBSTR(_arg_ , _start_[, _count_])
!TAIL(_arg_)
!UNQUOTE(_arg_)
!UPCASE(_arg_)
</code></pre><p>The body may also include the following constructs:</p><pre><code>!IF (_condition_) !THEN _true-expansion_ !ENDIF
!IF (_condition_) !THEN _true-expansion_ !ELSE _false-expansion_ !ENDIF

!DO _!var_ = _start_ !TO _end_ [!BY _step_]
  _body_
!DOEND
!DO _!var_ !IN (_expression_)
  _body_
!DOEND

!LET _!var_ = _expression_
</code></pre>`,10)])])}const N=_(o,[["render",t]]);export{l as __pageData,N as default};
