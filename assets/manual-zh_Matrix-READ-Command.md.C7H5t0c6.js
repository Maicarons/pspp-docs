import{_ as o,o as d,c,a2 as a}from"./chunks/framework.Bg-Zxr5O.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Matrix-READ-Command.md","filePath":"manual-zh/Matrix-READ-Command.md","lastUpdated":1785684581000}'),n={name:"manual-zh/Matrix-READ-Command.md"};function E(t,e,r,p,i,D){return d(),c("div",null,[...e[0]||(e[0]=[a(`<h4 id="_16-4-8-1-read-命令" tabindex="-1">16.4.8.1 <code>READ</code> 命令 <a class="header-anchor" href="#_16-4-8-1-read-命令" aria-label="Permalink to &quot;16.4.8.1 \`READ\` 命令&quot;">​</a></h4><pre><code>READ _variable_[(_index_[,_index_])]
     [/FILE=_file_]
     /FIELD=_first_ TO _last_ [BY _width_]
     [/FORMAT=_format_]
     [/SIZE=_expression_]
     [/MODE={RECTANGULAR _|_ SYMMETRIC}]
     [/REREAD].
</code></pre><p><code>READ</code> 命令从文本文件读取数据到矩阵变量中。在命令名之后指定目标变量，可以是仅一个变量名以创建或替换整个变量，也可以是变量名后跟索引表达式以替换已有变量的子矩阵。</p><p>在 <code>MATRIX</code> 中出现的第一个 <code>READ</code> 命令里，<code>FILE</code> 子命令是必需的。它指定要读取的文本文件，可以是引号中的文件名，也可以是之前在 <code>FILE HANDLE</code> 上声明的文件句柄（参见 <a href="./FILE-HANDLE">FILE HANDLE</a>）。后面的 <code>READ</code> 命令（按语法顺序）如果省略 <code>FILE</code>，则使用之前引用的文件。</p><p><code>FIELD</code> 和 <code>FORMAT</code> 子命令指定如何解释输入行。<code>FIELD</code> 是必需的，但 <code>FORMAT</code> 是可选的。详情参见 <a href="./Matrix-READ-and-WRITE-Commands">Matrix READ and WRITE Commands</a>。</p><p><code>SIZE</code> 子命令在读取到整个变量时是必需的。其受限表达式参数应求值为 2 元素向量 <code>{n, m}</code> 或 <code>{n; m}</code>，表示一个 <em>n ×m</em> 的矩阵目标。也允许标量 n，表示 <em>n ×1</em> 的列向量目标。当目标是子矩阵时，<code>SIZE</code> 是可选的，如果存在则必须与子矩阵的大小匹配。</p><p>默认情况下，或使用 <code>MODE=RECTANGULAR</code>，命令为每一行和每一列读取一个条目。使用 <code>MODE=SYMMETRIC</code> 时，命令只读取矩阵主对角线上及以下的条目，并从下方对应的对称条目复制主对角线上方的条目。只有方阵可以使用 <code>MODE=SYMMETRIC</code>。</p><p>通常，每个 <code>READ</code> 命令从文本文件的新行开始。指定 <code>REREAD</code> 子命令以改为从上一个 <code>READ</code> 命令读取的最后一行开始。这对于从特定文件读取的第一个 <code>READ</code> 命令不起作用。在使用了 <code>EOF</code> 矩阵函数（参见 <a href="./Matrix-EOF-Function#EOF-Matrix-Function">EOF Matrix Function</a>）的命令之后，它同样无效，因为 <code>EOF</code> 必须尝试从文件读取下一行以确定文件是否还有更多输入。</p><h4 id="示例-1-基本用法" tabindex="-1">示例 1：基本用法 <a class="header-anchor" href="#示例-1-基本用法" aria-label="Permalink to &quot;示例 1：基本用法&quot;">​</a></h4><p>以下矩阵程序将同一个矩阵 <code>{1, 2, 4; 2, 3, 5; 4, 5, 6}</code> 读取到矩阵变量 <code>v</code>、<code>w</code> 和 <code>x</code> 中：</p><pre><code>READ v /FILE=&#39;input.txt&#39; /FIELD=1 TO 100 /SIZE={3, 3}.
READ w /FIELD=1 TO 100 /SIZE={3; 3} /MODE=SYMMETRIC.
READ x /FIELD=1 TO 100 BY 1/SIZE={3, 3} /MODE=SYMMETRIC.
</code></pre><p>假设 input.txt 包含以下内容：</p><pre><code>1, 2, 4
2, 3, 5
4, 5, 6
1
2 3
4 5 6
1
23
456
</code></pre><p><code>READ</code> 命令会根据特定行需要读取尽可能多的输入行，因此将上述任意一行拆分成多行也是可接受的。例如，第一行 <code>1, 2, 4</code> 可以在一个或两个逗号之后换行书写。</p><h4 id="示例-2-读取到子矩阵" tabindex="-1">示例 2：读取到子矩阵 <a class="header-anchor" href="#示例-2-读取到子矩阵" aria-label="Permalink to &quot;示例 2：读取到子矩阵&quot;">​</a></h4><p>以下从 input2.txt 读取一个 <em>5×5</em> 矩阵，并反转行的顺序：</p><pre><code>COMPUTE m = MAKE(5, 5, 0).
LOOP r = 5 TO 1 BY -1.
  READ m(r, :) /FILE=&#39;input2.txt&#39; /FIELD=1 TO 100.
END LOOP.
</code></pre><h4 id="示例-3-使用-reread" tabindex="-1">示例 3：使用 <code>REREAD</code> <a class="header-anchor" href="#示例-3-使用-reread" aria-label="Permalink to &quot;示例 3：使用 \`REREAD\`&quot;">​</a></h4><p>假设 input3.txt 中有 5 行，每行以一个整数计数开头，后跟 count 个数字，例如：</p><pre><code>1 5
3 1 2 3
5 6 -1 2 5 1
2 8 9
3 1 3 2
</code></pre><p>那么，以下代码将该文件读取到矩阵 <code>m</code> 中：</p><pre><code>COMPUTE m = MAKE(5, 5, 0).
LOOP i = 1 TO 5.
  READ count /FILE=&#39;input3.txt&#39; /FIELD=1 TO 1 /SIZE=1.
  READ m(i, 1:count) /FIELD=3 TO 100 /REREAD.
END LOOP.
</code></pre>`,22)])])}const A=o(n,[["render",E]]);export{m as __pageData,A as default};
