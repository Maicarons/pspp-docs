import{_ as o,o as d,c as A,a2 as c}from"./chunks/framework.Bg-Zxr5O.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/REPEATING-DATA.md","filePath":"manual-zh/REPEATING-DATA.md","lastUpdated":1785684581000}'),a={name:"manual-zh/REPEATING-DATA.md"};function T(t,e,n,r,E,p){return d(),A("div",null,[...e[0]||(e[0]=[c(`<h3 id="_8-16-repeating-data" tabindex="-1">8.16 REPEATING DATA <a class="header-anchor" href="#_8-16-repeating-data" aria-label="Permalink to &quot;8.16 REPEATING DATA&quot;">​</a></h3><pre><code>REPEATING DATA
        /STARTS=start-end
        /OCCURS=n_occurs
        /FILE=’file_name’
        /LENGTH=length
        /CONTINUED[=cont_start-cont_end]
        /ID=id_start-id_end=id_var
        /{TABLE,NOTABLE}
        /DATA=var_spec…


where each var_spec takes one of the forms
        var_list start-end [type_spec]
        var_list (fortran_spec)
</code></pre><p><code>REPEATING DATA</code> 解析以统一格式重复出现的数据组，同一行上可能包含多个数据组。每个数据组对应一个个案。<code>REPEATING DATA</code> 只能用于 <code>INPUT PROGRAM</code> 结构内部（参见 <a href="./INPUT-PROGRAM">INPUT PROGRAM</a>）。与 <code>DATA LIST</code> 配合使用时，它可以解析这样一组个案：它们共享一部分变量，但其他数据各不相同。</p><p><code>STARTS</code> 子命令是必需的。使用数字字面量或数值变量名指定列范围。该范围指定了第一行上用于容纳数据组的列。结束列是可选的。如果未指定，则使用输入文件的记录宽度。对于内联文件（参见 <a href="./BEGIN-DATA">BEGIN DATA</a>）为 80 列；对于定长记录宽度的文件，为记录宽度；对于其他文件，默认是 1024 个字符。</p><p><code>OCCURS</code> 子命令是必需的。它必须是一个数字或数值变量名。其值表示当前记录中存在的数据组个数。</p><p><code>DATA</code> 子命令是必需的。它必须是指定的最后一个子命令。用于指定每个重复数据组中存在的数据。列号相对于数据组起始处（第 1 列）指定。数据的指定方式与 <code>DATA LIST FIXED</code> 相同（参见 <a href="./DATA-LIST-FIXED">DATA LIST FIXED</a>）。</p><p>所有其他子命令均为可选。</p><p>FILE 指定要读取的文件，可以是字符串形式的文件名，也可以是文件句柄（参见 <a href="./File-Handles">File Handles</a>）。如果未出现 FILE，则默认使用 <code>DATA LIST</code> 上次使用的文件句柄（按词法顺序，而非控制流顺序）。</p><p>默认情况下 <code>REPEATING DATA</code> 会输出一个表格，描述它将如何解析输入数据。指定 <code>NOTABLE</code> 将禁用此行为；指定 TABLE 将显式启用它。</p><p><code>LENGTH</code> 子命令指定每个数据组的长度（以字符计）。如果未出现，则从 <code>DATA</code> 子命令推断长度。LENGTH 可以是一个数字或变量名。</p><p>通常所有数据组都应出现在同一行上。使用 <code>CONTINUED</code> 命令可以表示数据可延续到后续行。如果续行上的数据从左边界开始并贯穿整个字段宽度，则 <code>CONTINUED</code> 上无需指定列范围。否则，以与 STARTS 相同的方式指定可能的列范围。</p><p>当数据组跨行延续时，很容易因手工编辑疏忽而导致个案错位。<code>ID</code> 子命令允许在每个重复数据组所在行上出现一个个案标识符。<code>REPEATING DATA</code> 会检查每行上的标识符是否一致，并报告不匹配的情况。指定标识符所占用的列范围，后跟等号（‘=’）和标识符变量名。该变量必须已经用 <code>NUMERIC</code> 或其他命令声明过。</p><p><code>REPEATING DATA</code> 应是 <code>INPUT PROGRAM</code> 内部给出的最后一条命令。它不应被包含在 <code>LOOP</code> 结构中（参见 <a href="./LOOP">LOOP</a>）。在 <code>REPEATING DATA</code> 之前（而非之后）使用 <code>DATA LIST</code>。</p>`,13)])])}const s=o(a,[["render",T]]);export{_ as __pageData,s as default};
