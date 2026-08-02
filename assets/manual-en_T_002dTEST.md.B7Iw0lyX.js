import{_ as t,o as a,c as d,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/T_002dTEST.md","filePath":"manual-en/T_002dTEST.md","lastUpdated":1785684581000}'),s={name:"manual-en/T_002dTEST.md"};function o(i,e,l,r,c,m){return a(),d("div",null,[...e[0]||(e[0]=[n(`<h3 id="_15-13-t-test" tabindex="-1">15.13 T-TEST <a class="header-anchor" href="#_15-13-t-test" aria-label="Permalink to &quot;15.13 T-TEST&quot;">​</a></h3><pre><code>T-TEST
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
</code></pre><p>The <code>T-TEST</code> procedure outputs tables used in testing hypotheses about means. It operates in one of three modes:</p><ul><li>One Sample mode.</li><li>Independent Groups mode.</li><li>Paired mode.</li></ul><p>Each of these modes are described in more detail below. There are two optional subcommands which are common to all modes.</p><p>The <code>/CRITERIA</code> subcommand tells PSPP the confidence interval used in the tests. The default value is 0.95.</p><p>The <code>MISSING</code> subcommand determines the handling of missing variables. If <code>INCLUDE</code> is set, then user-missing values are included in the calculations, but system-missing values are not. If <code>EXCLUDE</code> is set, which is the default, user-missing values are excluded as well as system-missing values. This is the default.</p><p>If <code>LISTWISE</code> is set, then the entire case is excluded from analysis whenever any variable specified in the <code>/VARIABLES</code>, <code>/PAIRS</code> or <code>/GROUPS</code> subcommands contains a missing value. If <code>ANALYSIS</code> is set, then missing values are excluded only in the analysis for which they would be needed. This is the default.</p><table tabindex="0"><thead><tr><th>• One Sample Mode</th><th></th><th>Testing against a hypothesized mean</th></tr></thead><tbody><tr><td>• Independent Samples Mode</td><td></td><td>Testing two independent groups for equal mean</td></tr><tr><td>• Paired Samples Mode</td><td></td><td>Testing two interdependent groups for equal mean</td></tr></tbody></table>`,9)])])}const T=t(s,[["render",o]]);export{u as __pageData,T as default};
