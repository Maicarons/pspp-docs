import{_ as a,o as t,c as n,a2 as i}from"./chunks/framework.Bg-Zxr5O.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/UPDATE.md","filePath":"manual-en/UPDATE.md","lastUpdated":1785684581000}'),s={name:"manual-en/UPDATE.md"};function o(r,e,l,c,m,d){return t(),n("div",null,[...e[0]||(e[0]=[i(`<h3 id="_10-4-update" tabindex="-1">10.4 UPDATE <a class="header-anchor" href="#_10-4-update" aria-label="Permalink to &quot;10.4 UPDATE&quot;">​</a></h3><pre><code>UPDATE

Per input file:
        /FILE={*,’file_name’}
        [/RENAME=(src_names=target_names)…]
        [/IN=var_name]
        [/SORT]

Once per command:
        /BY var_list[({D|A})] [var_list[({D|A})]]…
        [/DROP=var_list]
        [/KEEP=var_list]
        [/MAP]
</code></pre><p><code>UPDATE</code> updates a <em>master file</em> by applying modifications from one or more <em>transaction files</em>.</p><p><code>UPDATE</code> shares the bulk of its syntax with other PSPP commands for combining multiple data files. See <a href="./Combining-Files-Common-Syntax">Combining Files Common Syntax</a>, above, for an explanation of this common syntax.</p><p>At least two <code>FILE</code> subcommands must be specified. The first <code>FILE</code> subcommand names the master file, and the rest name transaction files. Every input file must either be sorted on the variables named on the <code>BY</code> subcommand, or the <code>SORT</code> subcommand must be used just after the <code>FILE</code> subcommand for that input file.</p><p><code>UPDATE</code> uses the variables specified on the <code>BY</code> subcommand, which is required, to attempt to match each case in a transaction file with a case in the master file:</p><ul><li>When a match is found, then the values of the variables present in the transaction file replace those variables’ values in the new active file. If there are matching cases in more than more transaction file, PSPP applies the replacements from the first transaction file, then from the second transaction file, and so on. Similarly, if a single transaction file has cases with duplicate <code>BY</code> values, then those are applied in order to the master file.</li></ul><p>When a variable in a transaction file has a missing value or when a string variable’s value is all blanks, that value is never used to update the master file.</p><ul><li>If a case in the master file has no matching case in any transaction file, then it is copied unchanged to the output.</li><li>If a case in a transaction file has no matching case in the master file, then it causes a new case to be added to the output, initialized from the values in the transaction file.</li></ul>`,9)])])}const u=a(s,[["render",o]]);export{f as __pageData,u as default};
