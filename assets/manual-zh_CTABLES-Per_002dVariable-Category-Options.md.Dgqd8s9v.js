import{_ as e,o as a,c as d,a2 as _}from"./chunks/framework.Bg-Zxr5O.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/CTABLES-Per_002dVariable-Category-Options.md","filePath":"manual-zh/CTABLES-Per_002dVariable-Category-Options.md","lastUpdated":1785684581000}'),r={name:"manual-zh/CTABLES-Per_002dVariable-Category-Options.md"};function o(n,t,E,c,i,l){return a(),d("div",null,[...t[0]||(t[0]=[_(`<h4 id="_15-7-5-各变量类别选项" tabindex="-1">15.7.5 各变量类别选项 <a class="header-anchor" href="#_15-7-5-各变量类别选项" aria-label="Permalink to &quot;15.7.5 各变量类别选项&quot;">​</a></h4><pre><code>/CATEGORIES VARIABLES=_variables_
    {[_value_ , _value_ …]
   _|_ [ORDER={A _|_ D}]
     [KEY={VALUE _|_ LABEL _|_ _summary_(_variable_)}]
     [MISSING={EXCLUDE _|_ INCLUDE}]}
    [TOTAL={NO _|_ YES} [LABEL=_string_] [POSITION={AFTER _|_ BEFORE}]]
    [EMPTY={INCLUDE _|_ EXCLUDE}]
</code></pre><p><code>CATEGORIES</code> 子命令为一个或多个分类变量指定要包含和排除的类别、所包含类别的排序顺序，以及缺失值的处理方式。它还控制要显示的总计和小计。它可以指定任意多次，每次针对一组不同的变量。<code>CATEGORIES</code> 应用于其后面的 <code>TABLE</code> 子命令所产生的表。</p><p><code>CATEGORIES</code> 不适用于标度变量。</p><p><code>VARIABLES</code> 是必需的，必须列出该子命令要影响的变量。</p><p>该语法可以显式或隐式地指定要包含的类别及其排序顺序。以下各节给出每种语法形式的细节，随后是有关总计、小计以及 <code>EMPTY</code> 设置的信息。</p><table tabindex="0"><thead><tr><th>• 显式类别</th><th></th><th></th></tr></thead><tbody><tr><td>• 隐式类别</td><td></td><td></td></tr><tr><td>• 总计与小计</td><td></td><td></td></tr><tr><td>• 无取值的类别</td><td></td><td></td></tr></tbody></table>`,7)])])}const A=e(r,[["render",o]]);export{p as __pageData,A as default};
