import{_ as t,o as a,c as n,a2 as i}from"./chunks/framework.Bg-Zxr5O.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Matrix-EOF-Function.md","filePath":"manual-en/Matrix-EOF-Function.md","lastUpdated":1785684581000}'),o={name:"manual-en/Matrix-EOF-Function.md"};function r(l,e,d,c,s,f){return a(),n("div",null,[...e[0]||(e[0]=[i(`<h4 id="_16-4-2-9-eof-function" tabindex="-1">16.4.2.9 EOF Function <a class="header-anchor" href="#_16-4-2-9-eof-function" aria-label="Permalink to &quot;16.4.2.9 EOF Function&quot;">​</a></h4><p>This function works with files being used on the <code>READ</code> statement.</p><p>Matrix Function: <strong>EOF</strong> <em>( file)</em></p><p>Given a file handle or file name file, returns an integer scalar 1 if the last line in the file has been read or 0 if more lines are available. Determining this requires attempting to read another line, which means that <code>REREAD</code> on the next <code>READ</code> command following <code>EOF</code> on the same file will be ineffective.</p><p>The <code>EOF</code> function gives a matrix program the flexibility to read a file with text data without knowing the length of the file in advance. For example, the following program will read all the lines of data in data.txt, each consisting of three numbers, as rows in matrix <code>data</code>:</p><pre><code>MATRIX.
COMPUTE data={}.
LOOP IF NOT EOF(&#39;data.txt&#39;).
  READ row/FILE=&#39;data.txt&#39;/FIELD=1 TO 1000/SIZE={1,3}.
  COMPUTE data={data; row}.
END LOOP.
PRINT data.
END MATRIX.
</code></pre>`,6)])])}const p=t(o,[["render",r]]);export{m as __pageData,p as default};
