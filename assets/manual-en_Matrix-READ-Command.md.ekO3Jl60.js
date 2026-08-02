import{_ as a,o as t,c as o,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Matrix-READ-Command.md","filePath":"manual-en/Matrix-READ-Command.md","lastUpdated":1785684581000}'),i={name:"manual-en/Matrix-READ-Command.md"};function r(d,e,c,s,m,l){return t(),o("div",null,[...e[0]||(e[0]=[n(`<h4 id="_16-4-8-1-the-read-command" tabindex="-1">16.4.8.1 The <code>READ</code> Command <a class="header-anchor" href="#_16-4-8-1-the-read-command" aria-label="Permalink to &quot;16.4.8.1 The \`READ\` Command&quot;">​</a></h4><pre><code>READ _variable_[(_index_[,_index_])]
     [/FILE=_file_]
     /FIELD=_first_ TO _last_ [BY _width_]
     [/FORMAT=_format_]
     [/SIZE=_expression_]
     [/MODE={RECTANGULAR _|_ SYMMETRIC}]
     [/REREAD].
</code></pre><p>The <code>READ</code> command reads from a text file into a matrix variable. Specify the target variable just after the command name, either just a variable name to create or replace an entire variable, or a variable name followed by an indexing expression to replace a submatrix of an existing variable.</p><p>The <code>FILE</code> subcommand is required in the first <code>READ</code> command that appears within <code>MATRIX</code>. It specifies the text file to be read, either as a file name in quotes or a file handle previously declared on <code>FILE HANDLE</code> (see <a href="./FILE-HANDLE">FILE HANDLE</a>). Later <code>READ</code> commands (in syntax order) use the previous referenced file if <code>FILE</code> is omitted.</p><p>The <code>FIELD</code> and <code>FORMAT</code> subcommands specify how input lines are interpreted. <code>FIELD</code> is required, but <code>FORMAT</code> is optional. See <a href="./Matrix-READ-and-WRITE-Commands">Matrix READ and WRITE Commands</a>, for details.</p><p>The <code>SIZE</code> subcommand is required for reading into an entire variable. Its restricted expression argument should evaluate to a 2-element vector <code>{n, m}</code> or <code>{n; m}</code>, which indicates a <em>n ×m</em> matrix destination. A scalar n is also allowed and indicates a <em>n ×1</em> column vector destination. When the destination is a submatrix, <code>SIZE</code> is optional, and if it is present then it must match the size of the submatrix.</p><p>By default, or with <code>MODE=RECTANGULAR</code>, the command reads an entry for every row and column. With <code>MODE=SYMMETRIC</code>, the command reads only the entries on and below the matrix’s main diagonal, and copies the entries above the main diagonal from the corresponding symmetric entries below it. Only square matrices may use <code>MODE=SYMMETRIC</code>.</p><p>Ordinarily, each <code>READ</code> command starts from a new line in the text file. Specify the <code>REREAD</code> subcommand to instead start from the last line read by the previous <code>READ</code> command. This has no effect for the first <code>READ</code> command to read from a particular file. It is also ineffective just after a command that uses the <code>EOF</code> matrix function (see <a href="./Matrix-EOF-Function#EOF-Matrix-Function">EOF Matrix Function</a>) on a particular file, because <code>EOF</code> has to try to read the next line from the file to determine whether the file contains more input.</p><h4 id="example-1-basic-use" tabindex="-1">Example 1: Basic Use <a class="header-anchor" href="#example-1-basic-use" aria-label="Permalink to &quot;Example 1: Basic Use&quot;">​</a></h4><p>The following matrix program reads the same matrix <code>{1, 2, 4; 2, 3, 5; 4, 5, 6}</code> into matrix variables <code>v</code>, <code>w</code>, and <code>x</code>:</p><pre><code>READ v /FILE=&#39;input.txt&#39; /FIELD=1 TO 100 /SIZE={3, 3}.
READ w /FIELD=1 TO 100 /SIZE={3; 3} /MODE=SYMMETRIC.
READ x /FIELD=1 TO 100 BY 1/SIZE={3, 3} /MODE=SYMMETRIC.
</code></pre><p>given that input.txt contains the following:</p><pre><code>1, 2, 4
2, 3, 5
4, 5, 6
1
2 3
4 5 6
1
23
456
</code></pre><p>The <code>READ</code> command will read as many lines of input as needed for a particular row, so it’s also acceptable to break any of the lines above into multiple lines. For example, the first line <code>1, 2, 4</code> could be written with a line break following either or both commas.</p><h4 id="example-2-reading-into-a-submatrix" tabindex="-1">Example 2: Reading into a Submatrix <a class="header-anchor" href="#example-2-reading-into-a-submatrix" aria-label="Permalink to &quot;Example 2: Reading into a Submatrix&quot;">​</a></h4><p>The following reads a <em>5×5</em> matrix from input2.txt, reversing the order of the rows:</p><pre><code>COMPUTE m = MAKE(5, 5, 0).
LOOP r = 5 TO 1 BY -1.
  READ m(r, :) /FILE=&#39;input2.txt&#39; /FIELD=1 TO 100.
END LOOP.
</code></pre><h4 id="example-3-using-reread" tabindex="-1">Example 3: Using <code>REREAD</code> <a class="header-anchor" href="#example-3-using-reread" aria-label="Permalink to &quot;Example 3: Using \`REREAD\`&quot;">​</a></h4><p>Suppose each of the 5 lines in a file input3.txt starts with an integer count followed by count numbers, e.g.:</p><pre><code>1 5
3 1 2 3
5 6 -1 2 5 1
2 8 9
3 1 3 2
</code></pre><p>Then, the following reads this file into a matrix <code>m</code>:</p><pre><code>COMPUTE m = MAKE(5, 5, 0).
LOOP i = 1 TO 5.
  READ count /FILE=&#39;input3.txt&#39; /FIELD=1 TO 1 /SIZE=1.
  READ m(i, 1:count) /FIELD=3 TO 100 /REREAD.
END LOOP.
</code></pre>`,22)])])}const E=a(i,[["render",r]]);export{p as __pageData,E as default};
