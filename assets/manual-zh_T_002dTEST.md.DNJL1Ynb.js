import{_ as t,o as d,c as a,a2 as o}from"./chunks/framework.Bg-Zxr5O.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/T_002dTEST.md","filePath":"manual-zh/T_002dTEST.md","lastUpdated":1785684581000}'),n={name:"manual-zh/T_002dTEST.md"};function c(r,e,l,S,T,_){return d(),a("div",null,[...e[0]||(e[0]=[o(`<h3 id="_15-13-t-test" tabindex="-1">15.13 T-TEST <a class="header-anchor" href="#_15-13-t-test" aria-label="Permalink to &quot;15.13 T-TEST&quot;">​</a></h3><pre><code>T-TEST
        /MISSING={ANALYSIS,LISTWISE} {EXCLUDE,INCLUDE}
        /CRITERIA=CI(confidence)


(One Sample mode.)
        TESTVAL=test_value
        /VARIABLES=var_list


(Independent Samples mode.)
        GROUPS=var(value1 [, value2])
        /VARIABLES=var_list


(Paired Samples mode.)
        PAIRS=var_list [WITH var_list [(PAIRED)] ]
</code></pre><p><code>T-TEST</code> 过程输出用于检验均值假设的表格。它在以下三种模式之一下运行：</p><ul><li>单样本模式。</li><li>独立组模式。</li><li>配对模式。</li></ul><p>下面详细描述每种模式。有两个可选子命令为所有模式所共有。</p><p><code>/CRITERIA</code> 子命令告知 PSPP 检验中使用的置信区间。默认值为 0.95。</p><p><code>MISSING</code> 子命令决定对缺失变量的处理方式。若设置为 <code>INCLUDE</code>，则用户缺失值会参与计算，但系统缺失值不会。若设置为 <code>EXCLUDE</code>（默认值），则用户缺失值与系统缺失值都会被排除。此为默认值。</p><p>若设置为 <code>LISTWISE</code>，则只要 <code>/VARIABLES</code>、<code>/PAIRS</code> 或 <code>/GROUPS</code> 子命令中指定的任意变量含有缺失值，整个个案就会被排除出分析。若设置为 <code>ANALYSIS</code>，则缺失值仅在其所需分析中被排除。此为默认值。</p><table tabindex="0"><thead><tr><th>• 单样本模式</th><th></th><th>与假设均值进行比较检验</th></tr></thead><tbody><tr><td>• 独立样本模式</td><td></td><td>检验两个独立组均值是否相等</td></tr><tr><td>• 配对样本模式</td><td></td><td>检验两个相依组均值是否相等</td></tr></tbody></table>`,9)])])}const p=t(n,[["render",c]]);export{i as __pageData,p as default};
