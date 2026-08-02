import{_ as a,o,c as t,a2 as s}from"./chunks/framework.Bg-Zxr5O.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/RANK.md","filePath":"manual-en/RANK.md","lastUpdated":1785684581000}'),r={name:"manual-en/RANK.md"};function d(n,e,c,i,l,h){return o(),t("div",null,[...e[0]||(e[0]=[s(`<h3 id="_15-16-rank" tabindex="-1">15.16 RANK <a class="header-anchor" href="#_15-16-rank" aria-label="Permalink to &quot;15.16 RANK&quot;">​</a></h3><pre><code>RANK
        [VARIABLES=] var_list [{A,D}] [BY var_list]
        /TIES={MEAN,LOW,HIGH,CONDENSE}
        /FRACTION={BLOM,TUKEY,VW,RANKIT}
        /PRINT[={YES,NO}
        /MISSING={EXCLUDE,INCLUDE}

        /RANK [INTO var_list]
        /NTILES(k) [INTO var_list]
        /NORMAL [INTO var_list]
        /PERCENT [INTO var_list]
        /RFRACTION [INTO var_list]
        /PROPORTION [INTO var_list]
        /N [INTO var_list]
        /SAVAGE [INTO var_list]
</code></pre><p>The <code>RANK</code> command ranks variables and stores the results into new variables.</p><p>The <code>VARIABLES</code> subcommand, which is mandatory, specifies one or more variables whose values are to be ranked. After each variable, ‘A’ or ‘D’ may appear, indicating that the variable is to be ranked in ascending or descending order. Ascending is the default. If a <code>BY</code> keyword appears, it should be followed by a list of variables which are to serve as group variables. In this case, the cases are gathered into groups, and ranks calculated for each group.</p><p>The <code>TIES</code> subcommand specifies how tied values are to be treated. The default is to take the mean value of all the tied cases.</p><p>The <code>FRACTION</code> subcommand specifies how proportional ranks are to be calculated. This only has any effect if <code>NORMAL</code> or <code>PROPORTIONAL</code> rank functions are requested.</p><p>The <code>PRINT</code> subcommand may be used to specify that a summary of the rank variables created should appear in the output.</p><p>The function subcommands are <code>RANK</code>, <code>NTILES</code>, <code>NORMAL</code>, <code>PERCENT</code>, <code>RFRACTION</code>, <code>PROPORTION</code> and <code>SAVAGE</code>. Any number of function subcommands may appear. If none are given, then the default is RANK. The <code>NTILES</code> subcommand must take an integer specifying the number of partitions into which values should be ranked. Each subcommand may be followed by the <code>INTO</code> keyword and a list of variables which are the variables to be created and receive the rank scores. There may be as many variables specified as there are variables named on the <code>VARIABLES</code> subcommand. If fewer are specified, then the variable names are automatically created.</p><p>The <code>MISSING</code> subcommand determines how user missing values are to be treated. A setting of <code>EXCLUDE</code> means that variables whose values are user-missing are to be excluded from the rank scores. A setting of <code>INCLUDE</code> means they are to be included. The default is <code>EXCLUDE</code>.</p>`,9)])])}const p=a(r,[["render",d]]);export{u as __pageData,p as default};
