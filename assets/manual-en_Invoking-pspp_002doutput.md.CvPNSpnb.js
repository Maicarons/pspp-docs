import{_ as p,o,c as e,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Invoking-pspp_002doutput.md","filePath":"manual-en/Invoking-pspp_002doutput.md","lastUpdated":1785684581000}'),d={name:"manual-en/Invoking-pspp_002doutput.md"};function s(a,t,u,i,r,l){return o(),e("div",null,[...t[0]||(t[0]=[n(`<h2 id="_19-invoking-pspp-output" tabindex="-1">19 Invoking <code>pspp-output</code> <a class="header-anchor" href="#_19-invoking-pspp-output" aria-label="Permalink to &quot;19 Invoking \`pspp-output\`&quot;">​</a></h2><p><code>pspp-output</code> is a command-line utility accompanying PSPP. It supports multiple operations on SPSS viewer or .spv files, here called SPV files. SPSS 16 and later writes SPV files to represent the contents of its output editor.</p><p>SPSS 15 and earlier versions instead use .spo files. <code>pspp-output</code> does not support this format.</p><p><code>pspp-options</code> may be invoked in the following ways:</p><pre><code>pspp-output detect file

pspp-output [options] dir file

pspp-output [options] convert source destination

pspp-output [options] get-table-look source destination

pspp-output [options] convert-table-look source destination

pspp-output --help

pspp-output --version
</code></pre><p>Each of these forms is documented separately below. <code>pspp-output</code> also has several undocumented command forms that developers may find useful for debugging.</p><table tabindex="0"><thead><tr><th>• The pspp-output detect Command</th><th></th><th></th></tr></thead><tbody><tr><td>• The pspp-output dir Command</td><td></td><td></td></tr><tr><td>• The pspp-output convert Command</td><td></td><td></td></tr><tr><td>• The pspp-output get-table-look Command</td><td></td><td></td></tr><tr><td>• The pspp-output convert-table-look Command</td><td></td><td></td></tr><tr><td>• Input Selection Options</td><td></td><td></td></tr></tbody></table>`,7)])])}const h=p(d,[["render",s]]);export{m as __pageData,h as default};
