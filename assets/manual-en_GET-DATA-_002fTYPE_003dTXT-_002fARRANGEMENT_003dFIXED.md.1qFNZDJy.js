import{_ as a,o as n,c as t,a2 as o}from"./chunks/framework.Bg-Zxr5O.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/GET-DATA-_002fTYPE_003dTXT-_002fARRANGEMENT_003dFIXED.md","filePath":"manual-en/GET-DATA-_002fTYPE_003dTXT-_002fARRANGEMENT_003dFIXED.md","lastUpdated":1785684581000}'),d={name:"manual-en/GET-DATA-_002fTYPE_003dTXT-_002fARRANGEMENT_003dFIXED.md"};function i(r,e,c,s,T,l){return n(),t("div",null,[...e[0]||(e[0]=[o(`<h4 id="_9-4-3-2-reading-fixed-columnar-data" tabindex="-1">9.4.3.2 Reading Fixed Columnar Data <a class="header-anchor" href="#_9-4-3-2-reading-fixed-columnar-data" aria-label="Permalink to &quot;9.4.3.2 Reading Fixed Columnar Data&quot;">​</a></h4><pre><code>GET DATA /TYPE=TXT
        /FILE={’file_name’,file_handle}
        [/ARRANGEMENT={DELIMITED,FIXED}]
        [/FIRSTCASE={first_case}]
        [/IMPORTCASE={ALL,FIRST max_cases,PERCENT percent}]

        [/FIXCASE=n]
        /VARIABLES fixed_var [fixed_var]…
            [/rec# fixed_var [fixed_var]…]…
where each fixed_var takes the form:
        variable start-end format
</code></pre><p>The <code>GET DATA</code> command with TYPE=TXT and ARRANGEMENT=FIXED reads input data from text files in fixed format, where each field is located in particular fixed column positions within records of a case. Its capabilities are similar to those of DATA LIST FIXED (see <a href="./DATA-LIST-FIXED">DATA LIST FIXED</a>), with a few enhancements.</p><p>The required <code>FILE</code> subcommand and optional <code>FIRSTCASE</code> and <code>IMPORTCASE</code> subcommands are described above (see <a href="./GET-DATA-_002fTYPE_003dTXT">GET DATA /TYPE=TXT</a>).</p><p>The optional <code>FIXCASE</code> subcommand may be used to specify the positive integer number of input lines that make up each case. The default value is 1.</p><p>The <code>VARIABLES</code> subcommand, which is required, specifies the positions at which each variable can be found. For each variable, specify its name, followed by its start and end column separated by ‘-’ (<em>e.g.</em> ‘0-9’), followed by an input format type (<em>e.g.</em> ‘F’) or a full format specification (<em>e.g.</em> ‘DOLLAR12.2’). For this command, columns are numbered starting from 0 at the left column. Introduce the variables in the second and later lines of a case by a slash followed by the number of the line within the case, <em>e.g.</em> ‘/2’ for the second line.</p><h4 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h4><p>Consider the following data on used cars:</p><pre><code>model   year    mileage price   type    age
Civic   2002    29883   15900   Si      2
Civic   2003    13415   15900   EX      1
Civic   1992    107000  3800    n/a     12
Accord  2002    26613   17900   EX      1
</code></pre><p>The following syntax can be used to read the used car data:</p><pre><code>GET DATA /TYPE=TXT /FILE=&#39;cars.data&#39; /ARRANGEMENT=FIXED /FIRSTCASE=2
        /VARIABLES=model 0-7 A
                   year 8-15 F
                   mileage 16-23 F
                   price 24-31 F
                   type 32-40 A
                   age 40-47 F.
</code></pre>`,11)])])}const f=a(d,[["render",i]]);export{E as __pageData,f as default};
