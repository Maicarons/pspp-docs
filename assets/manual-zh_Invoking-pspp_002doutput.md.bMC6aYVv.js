import{_ as p,o,c as e,a2 as d}from"./chunks/framework.Bg-Zxr5O.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Invoking-pspp_002doutput.md","filePath":"manual-zh/Invoking-pspp_002doutput.md","lastUpdated":1785684581000}'),u={name:"manual-zh/Invoking-pspp_002doutput.md"};function n(s,t,a,r,c,i){return o(),e("div",null,[...t[0]||(t[0]=[d(`<h2 id="_19-调用-pspp-output" tabindex="-1">19 调用 <code>pspp-output</code> <a class="header-anchor" href="#_19-调用-pspp-output" aria-label="Permalink to &quot;19 调用 \`pspp-output\`&quot;">​</a></h2><p><code>pspp-output</code> 是 PSPP 附带的命令行实用程序。它支持对 SPSS 查看器或 .spv 文件（此处称为 SPV 文件）执行多种操作。SPSS 16 及更高版本写入 SPV 文件以表示其输出编辑器的内容。</p><p>SPSS 15 及更早版本使用 .spo 文件。<code>pspp-output</code> 不支持此格式。</p><p><code>pspp-output</code> 可以通过以下方式调用：</p><pre><code>pspp-output detect file

pspp-output [options] dir file

pspp-output [options] convert source destination

pspp-output [options] get-table-look source destination

pspp-output [options] convert-table-look source destination

pspp-output --help

pspp-output --version
</code></pre><p>下面分别介绍每种形式。<code>pspp-output</code> 还有几种未文档化的命令形式，开发人员可能会发现它们在调试时很有用。</p><table tabindex="0"><thead><tr><th>• pspp-output detect 命令</th><th></th><th></th></tr></thead><tbody><tr><td>• pspp-output dir 命令</td><td></td><td></td></tr><tr><td>• pspp-output convert 命令</td><td></td><td></td></tr><tr><td>• pspp-output get-table-look 命令</td><td></td><td></td></tr><tr><td>• pspp-output convert-table-look 命令</td><td></td><td></td></tr><tr><td>• 输入选择选项</td><td></td><td></td></tr></tbody></table>`,7)])])}const h=p(u,[["render",n]]);export{_ as __pageData,h as default};
