import{_ as a,o as t,c as o,a2 as i}from"./chunks/framework.Bg-Zxr5O.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/GET-DATA-_002fTYPE_003dTXT-_002fARRANGEMENT_003dDELIMITED.md","filePath":"manual-en/GET-DATA-_002fTYPE_003dTXT-_002fARRANGEMENT_003dDELIMITED.md","lastUpdated":1785684581000}'),n={name:"manual-en/GET-DATA-_002fTYPE_003dTXT-_002fARRANGEMENT_003dDELIMITED.md"};function s(d,e,r,c,l,p){return t(),o("div",null,[...e[0]||(e[0]=[i(`<h4 id="_9-4-3-1-reading-delimited-data" tabindex="-1">9.4.3.1 Reading Delimited Data <a class="header-anchor" href="#_9-4-3-1-reading-delimited-data" aria-label="Permalink to &quot;9.4.3.1 Reading Delimited Data&quot;">​</a></h4><pre><code>GET DATA /TYPE=TXT
        /FILE={’file_name’,file_handle}
        [/ARRANGEMENT={DELIMITED,FIXED}]
        [/FIRSTCASE={first_case}]
        [/IMPORTCASE={ALL,FIRST max_cases,PERCENT percent}]

        /DELIMITERS=&quot;delimiters&quot;
        [/QUALIFIER=&quot;quotes&quot;
        [/DELCASE={LINE,VARIABLES n_variables}]
        /VARIABLES=del_var1 [del_var2]…
where each del_var takes the form:
        variable format
</code></pre><p>The GET DATA command with TYPE=TXT and ARRANGEMENT=DELIMITED reads input data from text files in delimited format, where fields are separated by a set of user-specified delimiters. Its capabilities are similar to those of DATA LIST FREE (see <a href="./DATA-LIST-FREE">DATA LIST FREE</a>), with a few enhancements.</p><p>The required <code>FILE</code> subcommand and optional <code>FIRSTCASE</code> and <code>IMPORTCASE</code> subcommands are described above (see <a href="./GET-DATA-_002fTYPE_003dTXT">GET DATA /TYPE=TXT</a>).</p><p><code>DELIMITERS</code>, which is required, specifies the set of characters that may separate fields. Each character in the string specified on <code>DELIMITERS</code> separates one field from the next. The end of a line also separates fields, regardless of <code>DELIMITERS</code>. Two consecutive delimiters in the input yield an empty field, as does a delimiter at the end of a line. A space character as a delimiter is an exception: consecutive spaces do not yield an empty field and neither does any number of spaces at the end of a line.</p><p>To use a tab as a delimiter, specify ‘\\t’ at the beginning of the <code>DELIMITERS</code> string. To use a backslash as a delimiter, specify ‘\\\\’ as the first delimiter or, if a tab should also be a delimiter, immediately following ‘\\t’. To read a data file in which each field appears on a separate line, specify the empty string for <code>DELIMITERS</code>.</p><p>The optional <code>QUALIFIER</code> subcommand names one or more characters that can be used to quote values within fields in the input. A field that begins with one of the specified quote characters ends at the next matching quote. Intervening delimiters become part of the field, instead of terminating it. The ability to specify more than one quote character is a PSPP extension.</p><p>The character specified on <code>QUALIFIER</code> can be embedded within a field that it quotes by doubling the qualifier. For example, if ‘&#39;’ is specified on <code>QUALIFIER</code>, then <code>&#39;a&#39;&#39;b&#39;</code> specifies a field that contains ‘a&#39;b’.</p><p>The <code>DELCASE</code> subcommand controls how data may be broken across lines in the data file. With LINE, the default setting, each line must contain all the data for exactly one case. For additional flexibility, to allow a single case to be split among lines or multiple cases to be contained on a single line, specify VARIABLES <em>n_variables</em> , where <em>n_variables</em> is the number of variables per case.</p><p>The <code>VARIABLES</code> subcommand is required and must be the last subcommand. Specify the name of each variable and its input format (see <a href="./Input-and-Output-Formats">Input and Output Formats</a>) in the order they should be read from the input file.</p><h4 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h4><p>On a Unix-like system, the ‘/etc/passwd’ file has a format similar to this:</p><pre><code>root:$1$nyeSP5gD$pDq/:0:0:,,,:/root:/bin/bash
blp:$1$BrP/pFg4$g7OG:1000:1000:Ben Pfaff,,,:/home/blp:/bin/bash
john:$1$JBuq/Fioq$g4A:1001:1001:John Darrington,,,:/home/john:/bin/bash
jhs:$1$D3li4hPL$88X1:1002:1002:Jason Stover,,,:/home/jhs:/bin/csh
</code></pre><p>The following syntax reads a file in the format used by ‘/etc/passwd’:</p><pre><code>GET DATA /TYPE=TXT /FILE=&#39;/etc/passwd&#39; /DELIMITERS=&#39;:&#39;
        /VARIABLES=username A20
                   password A40
                   uid F10
                   gid F10
                   gecos A40
                   home A40
                   shell A40.
</code></pre><p>Consider the following data on used cars:</p><pre><code>model   year    mileage price   type    age
Civic   2002    29883   15900   Si      2
Civic   2003    13415   15900   EX      1
Civic   1992    107000  3800    n/a     12
Accord  2002    26613   17900   EX      1
</code></pre><p>The following syntax can be used to read the used car data:</p><pre><code>GET DATA /TYPE=TXT /FILE=&#39;cars.data&#39; /DELIMITERS=&#39; &#39; /FIRSTCASE=2
        /VARIABLES=model A8
                   year F4
                   mileage F6
                   price F5
                   type A4
                   age F2.
</code></pre><p>Consider the following information on animals in a pet store:</p><pre><code>&#39;Pet&#39;&#39;s Name&#39;, &quot;Age&quot;, &quot;Color&quot;, &quot;Date Received&quot;, &quot;Price&quot;, &quot;Height&quot;, &quot;Type&quot;
, (Years), , , (Dollars), ,
&quot;Rover&quot;, 4.5, Brown, &quot;12 Feb 2004&quot;, 80, &#39;1&#39;&#39;4&quot;&#39;, &quot;Dog&quot;
&quot;Charlie&quot;, , Gold, &quot;5 Apr 2007&quot;, 12.3, &quot;3&quot;&quot;&quot;, &quot;Fish&quot;
&quot;Molly&quot;, 2, Black, &quot;12 Dec 2006&quot;, 25, &#39;5&quot;&#39;, &quot;Cat&quot;
&quot;Gilly&quot;, , White, &quot;10 Apr 2007&quot;, 10, &quot;3&quot;&quot;&quot;, &quot;Guinea Pig&quot;
</code></pre><p>The following syntax can be used to read the pet store data:</p><pre><code>GET DATA /TYPE=TXT /FILE=&#39;pets.data&#39; /DELIMITERS=&#39;, &#39; /QUALIFIER=&#39;&#39;&#39;&quot;&#39; /ESCAPE
        /FIRSTCASE=3
        /VARIABLES=name A10
                   age F3.1
                   color A5
                   received EDATE10
                   price F5.2
                   height a5
                   type a10.
</code></pre>`,23)])])}const E=a(n,[["render",s]]);export{u as __pageData,E as default};
