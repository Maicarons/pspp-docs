import{_ as o,o as a,c as d,a2 as c}from"./chunks/framework.Bg-Zxr5O.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Matrix-WRITE-Command.md","filePath":"manual-zh/Matrix-WRITE-Command.md","lastUpdated":1785684581000}'),t={name:"manual-zh/Matrix-WRITE-Command.md"};function r(n,e,E,p,i,T){return a(),d("div",null,[...e[0]||(e[0]=[c(`<h4 id="_16-4-8-2-write-命令" tabindex="-1">16.4.8.2 <code>WRITE</code> 命令 <a class="header-anchor" href="#_16-4-8-2-write-命令" aria-label="Permalink to &quot;16.4.8.2 \`WRITE\` 命令&quot;">​</a></h4><pre><code>WRITE _expression_
      [/OUTFILE=_file_]
      /FIELD=_first_ TO _last_ [BY _width_]
      [/FORMAT=_format_]
      [/MODE={RECTANGULAR _|_ TRIANGULAR}]
      [/HOLD].
</code></pre><p><code>WRITE</code> 命令求值 <em>expression</em>，并以指定格式将其值写入文本文件。在命令名之后写上要求值的表达式。</p><p>在 <code>MATRIX</code> 中出现的第一个 <code>WRITE</code> 命令里，<code>OUTFILE</code> 子命令是必需的。它指定要写入的文本文件，可以是引号中的文件名，也可以是之前在 <code>FILE HANDLE</code> 上声明的文件句柄（参见 <a href="./FILE-HANDLE">FILE HANDLE</a>）。后面的 <code>WRITE</code> 命令（按语法顺序）如果省略 <code>FILE</code>，则使用之前引用的文件。</p><p><code>FIELD</code> 和 <code>FORMAT</code> 子命令指定输出行如何构成。<code>FIELD</code> 是必需的，但 <code>FORMAT</code> 是可选的。详情参见 <a href="./Matrix-READ-and-WRITE-Commands">Matrix READ and WRITE Commands</a>。</p><p>默认情况下，或使用 <code>MODE=RECTANGULAR</code>，命令为每一行和每一列写入一个条目。使用 <code>MODE=TRIANGULAR</code> 时，命令只写入矩阵主对角线上及以下的条目。对角线上方的条目不写入。只有方阵可以使用 <code>MODE=TRIANGULAR</code> 写入。</p><p>通常，每个 <code>WRITE</code> 命令向输出文件写入完整的行。使用 <code>HOLD</code> 时，<code>WRITE</code> 写入的最后一行会被保留，供下一个 <code>WRITE</code> 命令补充。这对于在同一输出行上写入多个矩阵很有用。</p><h4 id="示例-1-基本用法" tabindex="-1">示例 1：基本用法 <a class="header-anchor" href="#示例-1-基本用法" aria-label="Permalink to &quot;示例 1：基本用法&quot;">​</a></h4><p>这个矩阵程序：</p><pre><code>WRITE {1, 2; 3, 4} /OUTFILE=&#39;matrix.txt&#39; /FIELD=1 TO 80.
</code></pre><p>向 matrix.txt 写入以下内容：</p><pre><code> 1 2
 3 4
</code></pre><h4 id="示例-2-三角矩阵" tabindex="-1">示例 2：三角矩阵 <a class="header-anchor" href="#示例-2-三角矩阵" aria-label="Permalink to &quot;示例 2：三角矩阵&quot;">​</a></h4><p>这个矩阵程序：</p><pre><code>WRITE MAGIC(5) /OUTFILE=&#39;matrix.txt&#39; /FIELD=1 TO 80 BY 5 /MODE=TRIANGULAR.
</code></pre><p>向 matrix.txt 写入以下内容：</p><pre><code>    17
    23    5
     4    6   13
    10   12   19   21
    11   18   25    2    9
</code></pre>`,17)])])}const R=o(t,[["render",r]]);export{_ as __pageData,R as default};
