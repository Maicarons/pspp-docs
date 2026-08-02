import{_ as e,o,c as d,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Custom-Currency-Formats.md","filePath":"manual-zh/Custom-Currency-Formats.md","lastUpdated":1785684581000}'),a={name:"manual-zh/Custom-Currency-Formats.md"};function C(n,t,u,p,s,c){return o(),d("div",null,[...t[0]||(t[0]=[r(`<h4 id="_6-7-4-2-自定义货币格式" tabindex="-1">6.7.4.2 自定义货币格式 <a class="header-anchor" href="#_6-7-4-2-自定义货币格式" aria-label="Permalink to &quot;6.7.4.2 自定义货币格式&quot;">​</a></h4><p>自定义货币格式与基本数值格式密切相关，但它们允许用户自定义输出格式。<code>SET</code> 命令使用以下语法配置自定义货币格式：</p><pre><code>SET CCx=&quot;string&quot;.
</code></pre><p>其中 x 为 A、B、C、D 或 E，string 长度不超过 16 个字符。</p><p>string 必须恰好包含三个逗号或恰好包含三个句点（但不能两者都有），不过可以使用单引号字符来“转义”其后的逗号、句点或单引号。如果使用三个逗号，则逗号用于输出中的分组，句点用作小数点。使用句点则会互换这两种角色。</p><p>逗号或句点将 string 划分为四个字段，分别称为_负向前缀_、<em>前缀</em>、<em>后缀_和_负向后缀</em>。只要有空间，前缀和后缀就会添加到输出中。当输出包含非零数字时，负向前缀和负向后缀总是会添加到负数上。</p><p>以下语法展示了如何使用自定义货币格式来重现基本数值格式：</p><pre><code>SET CCA=&quot;-,,,&quot;.  /* 与 COMMA 相同。
SET CCB=&quot;-...&quot;.  /* 与 DOT 相同。
SET CCC=&quot;-,$,,&quot;. /* 与 DOLLAR 相同。
SET CCD=&quot;-,,%,&quot;. /* 类似于 PCT，但以逗号分组。
</code></pre><p>下面是一些自定义货币格式的更多示例。最后一个示例展示了如何使用单引号来转义分隔符：</p><pre><code>SET CCA=&quot;,EUR,,-&quot;.   /* 欧元。
SET CCB=&quot;(,USD ,,)&quot;. /* 美元。
SET CCC=&quot;-.R$..&quot;.    /* 巴西雷亚尔。
SET CCD=&quot;-,, NIS,&quot;.  /* 以色列谢克尔。
SET CCE=&quot;-.Rp&#39;. ..&quot;. /* 印度尼西亚卢比。
</code></pre><p>这些格式将产生如下输出：</p><table tabindex="0"><thead><tr><th>Format</th><th>3145.59</th><th>-3145.59</th></tr></thead><tbody><tr><td>CCA12.2</td><td>EUR3,145.59</td><td>EUR3,145.59-</td></tr><tr><td>CCB14.2</td><td>USD 3,145.59</td><td>(USD 3,145.59)</td></tr><tr><td>CCC11.2</td><td>R$3.145,59</td><td>-R$3.145,59</td></tr><tr><td>CCD13.2</td><td>3,145.59 NIS</td><td>-3,145.59 NIS</td></tr><tr><td>CCE10.0</td><td>Rp. 3.146</td><td>-Rp. 3.146</td></tr></tbody></table><p>所有自定义货币格式的默认值都是‘-,,,’，等价于 COMMA 格式。</p>`,13)])])}const q=e(a,[["render",C]]);export{m as __pageData,q as default};
