import{_ as o,o as c,c as d,a2 as E}from"./chunks/framework.Bg-Zxr5O.js";const I=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/EXAMINE.md","filePath":"manual-zh/EXAMINE.md","lastUpdated":1785684581000}'),a={name:"manual-zh/EXAMINE.md"};function r(n,e,T,t,A,O){return c(),d("div",null,[...e[0]||(e[0]=[E(`<h3 id="_15-3-examine" tabindex="-1">15.3 EXAMINE <a class="header-anchor" href="#_15-3-examine" aria-label="Permalink to &quot;15.3 EXAMINE&quot;">​</a></h3><pre><code>EXAMINE
        VARIABLES= var1 [var2] … [varN]
           [BY factor1 [BY subfactor1]
             [ factor2 [BY subfactor2]]
             …
             [ factor3 [BY subfactor3]]
            ]
        /STATISTICS={DESCRIPTIVES, EXTREME[(n)], ALL, NONE}
        /PLOT={BOXPLOT, NPPLOT, HISTOGRAM, SPREADLEVEL[(t)], ALL, NONE}
        /CINTERVAL p
        /COMPARE={GROUPS,VARIABLES}
        /ID=identity_variable
        /{TOTAL,NOTOTAL}
        /PERCENTILE=[percentiles]={HAVERAGE, WAVERAGE, ROUND, AEMPIRICAL, EMPIRICAL }
        /MISSING={LISTWISE, PAIRWISE} [{EXCLUDE, INCLUDE}]
		[{NOREPORT,REPORT}]
</code></pre><p><code>EXAMINE</code> 命令用于进行探索性数据分析。特别是，它有助于检验一个分布与正态分布的吻合程度，并寻找离群值和极端值。</p><p><code>VARIABLES</code> 子命令是必需的。它指定因变量以及可选的要用作分析因子的变量。在第一个 <code>BY</code> 关键字（如果有）之前列出的变量是因变量。因变量之后可选地跟一个因子列表，它告诉 PSPP 如何对每个因变量拆分分析。</p><p>在因变量之后，可以指定因子。因子（如果需要）应以单个 <code>BY</code> 关键字开头。每个因子的格式为：</p><pre><code>factorvar [BY subfactorvar].
</code></pre><p>factorvar 和 subfactorvar 的每个唯一组合将数据集划分为_单元格_。为每个单元格以及整个数据集（除非给定 <code>NOTOTAL</code>）计算统计量。</p><p><code>STATISTICS</code> 子命令指定要显示哪些统计量。<code>DESCRIPTIVES</code> 生成一个显示一些参数与非参数统计量的表。<code>EXTREME</code> 生成一个显示每个单元格极值的表。括号中的数字 n 决定显示多少个上端和下端极值。默认数量为 5。</p><p><code>TOTAL</code> 和 <code>NOTOTAL</code> 子命令互斥。如果出现 <code>TOTAL</code>，则生成整个数据集以及每个单元格的统计量。如果出现 <code>NOTOTAL</code>，则只生成单元格的统计量（除非没有给定因子变量）。如果没有指定因子变量，这些子命令没有效果。</p><p><code>PLOT</code> 子命令指定要生成哪些图形（如果有）。可用的图形有 <code>HISTOGRAM</code>、<code>NPPLOT</code>、<code>BOXPLOT</code> 和 <code>SPREADLEVEL</code>。前三个可用于直观查看每个单元格与正态分布的吻合程度，而 Spread vs. Level 图可用于直观查看方差在因子之间差异。<code>PLOT</code> 为箱线图显示离群值和极端值。7</p><p><code>SPREADLEVEL</code> 图显示四分位距相对于中位数。它接受一个可选参数 t，指定在绘图前如何变换数据。给定的值 t 是数据被提升到的幂。例如，如果 t 给定为 2，则使用数据的平方。然而，0 是一个特殊值。如果 t 为 0 或被省略，则数据通过取自然对数来变换，而不是提升到 t 次幂。</p><p>当请求一个或多个图形时，<code>EXAMINE</code> 还会对每个类别执行 Shapiro-Wilk 检验。不过有一些注意事项：</p><ul><li>所有权重值必须为整数。</li><li>累计权重值必须处于 [3, 5000] 范围内</li></ul><p><code>COMPARE</code> 子命令仅在与生成箱线图相关时有意义，并且仅在有多个因变量和至少一个因子时才有用。如果指定 <code>/COMPARE=GROUPS</code>，则为每个因变量生成一个图，每个图都包含各单元格的箱线图。如果指定 <code>/COMPARE=VARIABLES</code>，则为每个单元格生成一个图，每个图都包含每个因变量的一个箱线图。如果省略 <code>/COMPARE</code> 子命令，则 PSPP 的行为如同给定了 <code>/COMPARE=GROUPS</code>。</p><p><code>ID</code> 子命令仅在与 <code>/PLOT=BOXPLOT</code> 或 <code>/STATISTICS=EXTREME</code> 一起给定时相关。如果给定，它应提供一个变量的名称，用于标注极端值和离群值。数值型或字符串型变量均可。如果未给定 <code>ID</code> 子命令，则使用个案号进行标注。</p><p><code>CINTERVAL</code> 子命令指定在计算描述性统计量时使用的置信区间。默认是 95%。</p><p><code>PERCENTILES</code> 子命令指定要计算哪些百分位数，以及用于计算它们的算法。默认是使用 <code>HAVERAGE</code> 算法计算 5、10、25、50、75、90、95 百分位数。</p><p><code>TOTAL</code> 和 <code>NOTOTAL</code> 子命令互斥。如果给定 <code>NOTOTAL</code> 且在 <code>VARIABLES</code> 子命令中指定了因子，则会生成未因子化的因变量以及已因子化变量的统计量。如果没有指定因子，则 <code>TOTAL</code> 和 <code>NOTOTAL</code> 都没有效果。</p><p>以下示例为两个变量 score1 和 score2 生成描述性统计量和直方图。给定了两个因子，<em>即</em>：gender 和 gender BY culture。因此，为 gender 的每个不同值_以及_ gender 和 race 值的每个不同组合生成描述性统计量和直方图。由于给定了 <code>NOTOTAL</code> 关键字，不生成涵盖整个数据集的 score1 和 score2 的统计量和直方图。</p><pre><code>EXAMINE score1 score2 BY
        gender
        gender BY culture
        /STATISTICS = DESCRIPTIVES
        /PLOT = HISTOGRAM
        /NOTOTAL.
</code></pre><p>下面是第二个示例，展示了 <code>examine</code> 命令如何用于查找极值。</p><pre><code>EXAMINE height weight BY
        gender
        /STATISTICS = EXTREME (3)
        /PLOT = BOXPLOT
        /COMPARE = GROUPS
        /ID = name.
</code></pre><p>在此示例中，我们查看一组个体的身高和体重，以及它们在男性和女性之间的差异。会显示一个表，给出每个性别以及整个数据集中 <strong>height</strong> 和 <strong>weight</strong> 的 3 个最大值和 3 个最小值。此外，<code>/PLOT</code> 子命令请求箱线图。因为指定了 <code>/COMPARE = GROUPS</code>，男性和女性的箱线图并排显示在同一个图形中，使我们能轻松看到性别之间的差异。由于变量名在 <code>ID</code> 子命令上指定，name 变量的值被用于标注极端值。</p><p><strong>警告！</strong> 如果您指定了许多因变量或具有许多不同值的因子变量，那么 <code>EXAMINE</code> 将产生非常大量的输出。</p><h4 id="脚注" tabindex="-1">脚注 <a class="header-anchor" href="#脚注" aria-label="Permalink to &quot;脚注&quot;">​</a></h4><h5 id="_7" tabindex="-1">(7) <a class="header-anchor" href="#_7" aria-label="Permalink to &quot;(7)&quot;">​</a></h5><p><code>HISTOGRAM</code> 使用 Sturges 规则确定分箱数，约为 <em>1 + \\log2(n)</em>，其中 <em>n</em> 是样本数。注意 <code>FREQUENCIES</code> 使用不同的算法来寻找分箱大小。</p>`,27)])])}const S=o(a,[["render",r]]);export{I as __pageData,S as default};
