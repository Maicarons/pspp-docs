import{_ as e,o as n,c as a,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Macro-Overview.md","filePath":"manual-zh/Macro-Overview.md","lastUpdated":1785684581000}'),o={name:"manual-zh/Macro-Overview.md"};function t(c,_,d,p,s,i){return n(),a("div",null,[..._[0]||(_[0]=[r(`<h4 id="_14-2-1-overview" tabindex="-1">14.2.1 Overview <a class="header-anchor" href="#_14-2-1-overview" aria-label="Permalink to &quot;14.2.1 Overview&quot;">​</a></h4><pre><code>DEFINE _macro_name_([_argument_[/_argument_]…])
… _body_ …
!ENDDEFINE.
</code></pre><p>每个 <em>argument</em> 采用以下形式：</p><pre><code>{_!arg_name_ = _|_ !POSITIONAL}
[!DEFAULT(_default_)]
[!NOEXPAND]
{!TOKENS(_count_) _|_ !CHAREND(&#39;_token_ &#39;) _|_ !ENCLOSE(&#39;_start_ &#39; _|_ &#39;_end_ &#39;) _|_ !CMDEND}
</code></pre><p>以下指令可以在 <em>body</em> 内部使用：</p><pre><code>!OFFEXPAND
!ONEXPAND
</code></pre><p>以下函数可以在主体内部使用：</p><pre><code>!BLANKS(_count_)
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
</code></pre><p>主体还可以包含以下结构：</p><pre><code>!IF (_condition_) !THEN _true-expansion_ !ENDIF
!IF (_condition_) !THEN _true-expansion_ !ELSE _false-expansion_ !ENDIF

!DO _!var_ = _start_ !TO _end_ [!BY _step_]
  _body_
!DOEND
!DO _!var_ !IN (_expression_)
  _body_
!DOEND

!LET _!var_ = _expression_
</code></pre>`,10)])])}const m=e(o,[["render",t]]);export{N as __pageData,m as default};
