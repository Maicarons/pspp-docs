import{_,o as d,c as a,a2 as e}from"./chunks/framework.Bg-Zxr5O.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/CTABLES.md","filePath":"manual-zh/CTABLES.md","lastUpdated":1785684581000}'),r={name:"manual-zh/CTABLES.md"};function n(E,t,o,s,L,A){return d(),a("div",null,[...t[0]||(t[0]=[e(`<h3 id="_15-7-ctables" tabindex="-1">15.7 CTABLES <a class="header-anchor" href="#_15-7-ctables" aria-label="Permalink to &quot;15.7 CTABLES&quot;">​</a></h3><p><code>CTABLES</code> 的整体语法如下。至少需要一个 <code>TABLE</code> 子命令：</p><pre><code>CTABLES
  … _global subcommands_ …
  [/TABLE _axis_ [BY _axis_ [BY _axis_]]
   … _per-table subcommands_ …]…
</code></pre><p>其中每个 <em>axis</em>（轴）可以为空，或采用以下形式之一：</p><pre><code>_variable_
_variable_ [{C _|_ S}]
_axis_ + _axis_
_axis_ &gt; _axis_
(_axis_)
_axis_ [_summary_ [_string_] [_format_]]
</code></pre><p>以下子命令位于第一个 <code>TABLE</code> 子命令之前，并应用于所有输出表。所有这些子命令都是可选的：</p><pre><code>/FORMAT
    [MINCOLWIDTH={DEFAULT _|_ _width_}]
    [MAXCOLWIDTH={DEFAULT _|_ _width_}]
    [UNITS={POINTS _|_ INCHES _|_ CM}]
    [EMPTY={ZERO _|_ BLANK _|_ _string_}]
    [MISSING=_string_]
/VLABELS
    VARIABLES=_variables_
    DISPLAY={DEFAULT _|_ NAME _|_ LABEL _|_ BOTH _|_ NONE}
/SMISSING {VARIABLE _|_ LISTWISE}
/PCOMPUTE &amp;_postcompute_ =EXPR(_expression_)
/PPROPERTIES &amp;_postcompute_ …
    [LABEL=_string_]
    [FORMAT=[_summary_ _format_]…]
    [HIDESOURCECATS={NO _|_ YES}
/WEIGHT VARIABLE=_variable_
/HIDESMALLCOUNTS COUNT=_count_
</code></pre><p>以下子命令位于 <code>TABLE</code> 之后，且只应用于前一个 <code>TABLE</code>。所有这些子命令都是可选的：</p><pre><code>/SLABELS
    [POSITION={COLUMN _|_ ROW _|_ LAYER}]
    [VISIBLE={YES _|_ NO}]
/CLABELS {AUTO _|_ {ROWLABELS _|_ COLLABELS}={OPPOSITE _|_ LAYER}}
/CATEGORIES VARIABLES=_variables_
    {[_value_ , _value_ …]
   _|_ [ORDER={A _|_ D}]
     [KEY={VALUE _|_ LABEL _|_ _summary_(_variable_)}]
     [MISSING={EXCLUDE _|_ INCLUDE}]}
    [TOTAL={NO _|_ YES} [LABEL=_string_] [POSITION={AFTER _|_ BEFORE}]]
    [EMPTY={INCLUDE _|_ EXCLUDE}]
/TITLES
    [TITLE=_string_ …]
    [CAPTION=_string_ …]
    [CORNER=_string_ …]
</code></pre><p><code>CTABLES</code>（又称“custom tables”，自定义表）命令基于分类数据和标度数据生成多维表。它提供了许多用于数据汇总和格式化的选项。</p><p>本节示例使用了来自 2008 年（美国）&quot;National Survey of Drinking and Driving Attitudes and Behaviors&quot;（国家饮酒与驾驶态度和行为调查）的数据，这是（美国）国家公路交通安全管理局的一个公共领域数据集，可在 <a href="https://data.transportation.gov" target="_blank" rel="noreferrer">https://data.transportation.gov</a> 获取。PSPP 附带了该数据集（带有修改后的字典），位于 examples/nhtsa.sav。</p><table tabindex="0"><thead><tr><th>• 基础</th><th></th><th></th></tr></thead><tbody><tr><td>• 数据汇总</td><td></td><td></td></tr><tr><td>• 统计量位置与标签</td><td></td><td></td></tr><tr><td>• 类别标签位置</td><td></td><td></td></tr><tr><td>• 各变量类别选项</td><td></td><td></td></tr><tr><td>• 标题</td><td></td><td></td></tr><tr><td>• 表格式设置</td><td></td><td></td></tr><tr><td>• 变量标签的显示</td><td></td><td></td></tr><tr><td>• 缺失值处理</td><td></td><td></td></tr><tr><td>• 计算类别</td><td></td><td></td></tr><tr><td>• 有效权重</td><td></td><td></td></tr><tr><td>• 隐藏小计数</td><td></td><td></td></tr></tbody></table>`,12)])])}const T=_(r,[["render",n]]);export{S as __pageData,T as default};
