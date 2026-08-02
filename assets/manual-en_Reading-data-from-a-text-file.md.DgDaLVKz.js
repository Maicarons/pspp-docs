import{_ as a,o as t,c as i,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Reading-data-from-a-text-file.md","filePath":"manual-en/Reading-data-from-a-text-file.md","lastUpdated":1785684581000}'),o={name:"manual-en/Reading-data-from-a-text-file.md"};function r(d,e,l,s,f,c){return t(),i("div",null,[...e[0]||(e[0]=[n(`<h4 id="_5-1-3-reading-data-from-a-text-file" tabindex="-1">5.1.3 Reading data from a text file <a class="header-anchor" href="#_5-1-3-reading-data-from-a-text-file" aria-label="Permalink to &quot;5.1.3 Reading data from a text file&quot;">​</a></h4><p>The previous example showed how to define a set of variables and to manually enter the data for those variables. Manual entering of data is tedious work, and often a file containing the data will be have been previously prepared. Let us assume that you have a file called mydata.dat containing the ascii encoded data:</p><pre><code>Ahmed          188.00
Bertram        167.00
Catherine      134.23
David          109.10
              .
              .
              .
Zachariah      113.02
</code></pre><p>You can can tell the <code>DATA LIST</code> command to read the data directly from this file instead of by manual entry, with a command like:</p><pre><code>PSPP&gt; data list file=&#39;mydata.dat&#39; list /forename (A12) height.
</code></pre><p>Notice however, that it is still necessary to specify the names of the variables and their formats, since this information is not contained in the file. It is also possible to specify the file’s character encoding and other parameters. For full details refer to see <a href="./DATA-LIST">DATA LIST</a>.</p>`,6)])])}const p=a(o,[["render",r]]);export{h as __pageData,p as default};
