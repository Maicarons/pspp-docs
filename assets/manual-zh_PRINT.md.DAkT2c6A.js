import{_ as o,o as a,c as d,a2 as c}from"./chunks/framework.Bg-Zxr5O.js";const I=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/PRINT.md","filePath":"manual-zh/PRINT.md","lastUpdated":1785684581000}'),n={name:"manual-zh/PRINT.md"};function t(r,e,T,p,s,_){return a(),d("div",null,[...e[0]||(e[0]=[c(`<h3 id="_8-12-print" tabindex="-1">8.12 PRINT <a class="header-anchor" href="#_8-12-print" aria-label="Permalink to &quot;8.12 PRINT&quot;">​</a></h3><pre><code>PRINT
        [OUTFILE=’file_name’]
        [RECORDS=n_lines]
        [{NOTABLE,TABLE}]
        [ENCODING=’encoding’]
        [/[line_no] arg…]

arg takes one of the following forms:
        ’string’ [start]
        var_list start-end [type_spec]
        var_list (fortran_spec)
        var_list *
</code></pre><p><code>PRINT</code> 变换将变量数据写入列表文件或输出文件。当过程导致数据被读取时，<code>PRINT</code> 执行。在 <code>PRINT</code> 之后跟随 <code>EXECUTE</code> 可以在不调用过程的情况下打印变量数据（参见 <a href="./EXECUTE">EXECUTE</a>）。</p><p>所有 <code>PRINT</code> 子命令都是可选的。如果未指定字符串或变量，<code>PRINT</code> 输出一个空行。</p><p><code>OUTFILE</code> 子命令指定接收输出的文件。该文件可以是作为字符串的文件名，也可以是文件句柄（参见 <a href="./File-Handles">File Handles</a>）。如果不存在 <code>OUTFILE</code>，则输出发送到 PSPP 的输出列表文件。当存在 <code>OUTFILE</code> 时，输出以纯文本格式写入 file_name，在每行输出开头插入一个空格，即便是原本为空的行也是如此。</p><p><code>ENCODING</code> 子命令只有在同时使用了 <code>OUTFILE</code> 子命令时才能使用。它指定文件的字符编码。有关支持的编码信息，参见 <a href="./INSERT">INSERT</a>。</p><p><code>RECORDS</code> 子命令指定要输出的行数。行数可以选择用括号括起来。</p><p><code>TABLE</code> 会使 <code>PRINT</code> 命令向列表文件输出一个表格，描述它将打印到输出文件的内容。<code>NOTABLE</code>（默认值）抑制此输出表格。</p><p>用斜杠（‘/’）引出要打印的字符串和变量。斜杠后面可选地跟一个数字，表示该输出行指定的行号。在没有此行号的情况下，指定下一行号。可以使用多个斜杠指定多行，每行对应的输出跟在各自的斜杠之后。</p><p>可以打印字面字符串。指定字符串本身即可。可选地，字符串后面可以跟一个列号，指定字符串在该行上应开始的列。否则，字符串打印在该行上的当前位置。</p><p>要打印的变量可以用与 <code>DATA LIST FIXED</code> 相同的方式指定（参见 <a href="./DATA-LIST-FIXED">DATA LIST FIXED</a>）。此外，变量列表后面可以跟一个星号（‘*’），表示变量应以它们的字典打印格式打印，并用空格分隔。后跟斜杠或命令结尾的变量列表以相同方式解释。</p><p>如果使用 FORTRAN 类型说明向后移动当前行，则文本写在该行的该位置，该行被截断到该长度，不过添加的其他文本会再次将该行延伸到该长度。</p>`,12)])])}const i=o(n,[["render",t]]);export{I as __pageData,i as default};
