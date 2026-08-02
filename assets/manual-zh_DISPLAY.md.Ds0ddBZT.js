import{_ as A,o as a,c as e,a2 as p}from"./chunks/framework.Bg-Zxr5O.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/DISPLAY.md","filePath":"manual-zh/DISPLAY.md","lastUpdated":1785684581000}'),I={name:"manual-zh/DISPLAY.md"};function t(E,S,L,o,D,r){return a(),e("div",null,[...S[0]||(S[0]=[p(`<h3 id="_11-1-display" tabindex="-1">11.1 DISPLAY <a class="header-anchor" href="#_11-1-display" aria-label="Permalink to &quot;11.1 DISPLAY&quot;">​</a></h3><p><code>DISPLAY</code> 命令显示有关活动数据集中变量的信息。可以请求多种不同形式的信息。默认情况下，显示活动数据集中的所有变量。不过，您可以使用 <code>/VARIABLES</code> 子命令选择感兴趣的变量。</p><pre><code>DISPLAY [SORTED] NAMES [[/VARIABLES=]var_list].
DISPLAY [SORTED] INDEX [[/VARIABLES=]var_list].
DISPLAY [SORTED] LABELS [[/VARIABLES=]var_list].
DISPLAY [SORTED] VARIABLES [[/VARIABLES=]var_list].
DISPLAY [SORTED] DICTIONARY [[/VARIABLES=]var_list].
DISPLAY [SORTED] SCRATCH [[/VARIABLES=]var_list].
DISPLAY [SORTED] ATTRIBUTES [[/VARIABLES=]var_list].
DISPLAY [SORTED] @ATTRIBUTES [[/VARIABLES=]var_list].
DISPLAY [SORTED] VECTORS.
</code></pre><p>以下关键字主要用于显示有关变量的信息。使用这些关键字时，默认显示活动数据集字典中所有变量的信息，顺序与变量在活动数据集字典中出现的顺序一致。<code>SORTED</code> 关键字使输出按变量名按字母顺序排序。</p><p>NAMES</p><p>显示变量的名称。</p><p>INDEX</p><p>显示变量的名称，以及描述它们在活动数据集字典中位置的值。</p><p>LABELS</p><p>显示变量名、位置以及变量标签。</p><p>VARIABLES</p><p>显示变量名、位置、打印和写入格式，以及缺失值。</p><p>DICTIONARY</p><p>显示变量名、位置、打印和写入格式、缺失值、变量标签以及值标签。</p><p>SCRATCH</p><p>显示变量名，但仅针对暂用变量（参见 <a href="./Scratch-Variables">暂用变量</a>）。</p><p>ATTRIBUTES @ATTRIBUTES</p><p>显示数据文件和变量属性。命令的第一种形式省略那些名称以 <code>@</code> 或 <code>$@</code> 开头的属性。在第二种形式中，显示所有数据文件和变量属性。</p><p>使用 <code>VECTOR</code> 关键字时，<code>DISPLAY</code> 列出所有当前已声明的向量。如果给定了 <code>SORTED</code> 关键字，则向量按字母顺序列出；否则，按 PSPP 语法文件中定义的文本顺序列出。</p><p>相关命令参见 <a href="./DISPLAY-DOCUMENTS">DISPLAY DOCUMENTS</a> 和 <a href="./DISPLAY-FILE-LABEL">DISPLAY FILE LABEL</a>。</p>`,20)])])}const c=A(I,[["render",t]]);export{d as __pageData,c as default};
