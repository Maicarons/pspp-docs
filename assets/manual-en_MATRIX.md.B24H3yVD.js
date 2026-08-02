import{_ as t,o as a,c as n,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/MATRIX.md","filePath":"manual-en/MATRIX.md","lastUpdated":1785684581000}'),d={name:"manual-en/MATRIX.md"};function o(_,e,i,s,m,p){return a(),n("div",null,[...e[0]||(e[0]=[r(`<h3 id="_16-4-matrix" tabindex="-1">16.4 MATRIX <a class="header-anchor" href="#_16-4-matrix" aria-label="Permalink to &quot;16.4 MATRIX&quot;">​</a></h3><pre><code>MATRIX.
… _matrix commands_ …
END MATRIX.
</code></pre><p>The following basic matrix commands are supported:</p><pre><code>COMPUTE _variable_[(_index_[,_index_])]=_expression_.
CALL _procedure_(_argument_ , …).
PRINT [_expression_]
      [/FORMAT=_format_]
      [/TITLE=_title_]
      [/SPACE={NEWPAGE _|_ _n_}]
      [{/RLABELS=_string_ … _|_ /RNAMES=_expression_}]
      [{/CLABELS=_string_ … _|_ /CNAMES=_expression_}].
</code></pre><p>The following matrix commands offer support for flow control:</p><pre><code>DO IF _expression_.
  … _matrix commands_ …
[ELSE IF _expression_.
  … _matrix commands_ …]…
[ELSE
  … _matrix commands_ …]
END IF.

LOOP [_var_ =_first_ TO _last_ [BY _step_]] [IF _expression_].
  … _matrix commands_ …
END LOOP [IF _expression_].

BREAK.
</code></pre><p>The following matrix commands support matrix input and output:</p><pre><code>READ _variable_[(_index_[,_index_])]
     [/FILE=_file_]
     /FIELD=_first_ TO _last_ [BY _width_]
     [/FORMAT=_format_]
     [/SIZE=_expression_]
     [/MODE={RECTANGULAR _|_ SYMMETRIC}]
     [/REREAD].
WRITE _expression_
      [/OUTFILE=_file_]
      /FIELD=_first_ TO _last_ [BY _width_]
      [/MODE={RECTANGULAR _|_ TRIANGULAR}]
      [/HOLD]
      [/FORMAT=_format_].
GET _variable_[(_index_[,_index_])]
    [/FILE={_file_ _|_ *}]
    [/VARIABLES=_variable_ …]
    [/NAMES=_expression_]
    [/MISSING={ACCEPT _|_ OMIT _|_ _number_}]
    [/SYSMIS={OMIT _|_ _number_}].
SAVE _expression_
     [/OUTFILE={_file_ _|_ *}]
     [/VARIABLES=_variable_ …]
     [/NAMES=_expression_]
     [/STRINGS=_variable_ …].
MGET [/FILE=_file_]
     [/TYPE={COV _|_ CORR _|_ MEAN _|_ STDDEV _|_ N _|_ COUNT}].
MSAVE _expression_
      /TYPE={COV _|_ CORR _|_ MEAN _|_ STDDEV _|_ N _|_ COUNT}
      [/OUTFILE=_file_]
      [/VARIABLES=_variable_ …]
      [/SNAMES=_variable_ …]
      [/SPLIT=_expression_]
      [/FNAMES=_variable_ …]
      [/FACTOR=_expression_].
</code></pre><p>The following matrix commands provide additional support:</p><pre><code>DISPLAY [{DICTIONARY _|_ STATUS}].
RELEASE _variable_ ….
</code></pre><p><code>MATRIX</code> and <code>END MATRIX</code> enclose a special PSPP sub-language, called the matrix language. The matrix language does not require an active dataset to be defined and only a few of the matrix language commands work with any datasets that are defined. Each instance of <code>MATRIX</code>…<code>END MATRIX</code> is a separate program whose state is independent of any instance, so that variables declared within a matrix program are forgotten at its end.</p><p>The matrix language works with matrices, where a <em>matrix</em> is a rectangular array of real numbers. An <em>n ×m</em> matrix has n rows and m columns. Some special cases are important: a <em>n ×1</em> matrix is a <em>column vector</em> , a <em>1× n</em> is a <em>row vector</em> , and a <em>1×1</em> matrix is a <em>scalar</em>.</p><p>The matrix language also has limited support for matrices that contain 8-byte strings instead of numbers. Strings longer than 8 bytes are truncated, and shorter strings are padded with spaces. String matrices are mainly useful for labeling rows and columns when printing numerical matrices with the <code>MATRIX PRINT</code> command. Arithmetic operations on string matrices will not produce useful results. The user should not mix strings and numbers within a matrix.</p><p>The matrix language does not work with cases. A variable in the matrix language represents a single matrix.</p><p>The matrix language does not support missing values.</p><p><code>MATRIX</code> is a procedure, so it cannot be enclosed inside <code>DO IF</code>, <code>LOOP</code>, etc.</p><p>Macros may be used within a matrix program, and macros may expand to include entire matrix programs. The <code>DEFINE</code> command may not appear within a matrix program. See <a href="./DEFINE">DEFINE</a>, for more information about macros.</p><p>The following sections describe the details of the matrix language: first, the syntax of matrix expressions, then each of the supported commands. The <code>COMMENT</code> command (see <a href="./COMMENT">COMMENT</a>) is also supported.</p><table tabindex="0"><thead><tr><th>• Matrix Expressions</th><th></th><th></th></tr></thead><tbody><tr><td>• Matrix Functions</td><td></td><td></td></tr><tr><td>• The COMPUTE Command</td><td></td><td></td></tr><tr><td>• The CALL Command</td><td></td><td></td></tr><tr><td>• The PRINT Command</td><td></td><td></td></tr><tr><td>• The DO IF Command</td><td></td><td></td></tr><tr><td>• The LOOP and BREAK Commands</td><td></td><td></td></tr><tr><td>• The READ and WRITE Commands</td><td></td><td></td></tr><tr><td>• The GET Command</td><td></td><td></td></tr><tr><td>• The SAVE Command</td><td></td><td></td></tr><tr><td>• The MGET Command</td><td></td><td></td></tr><tr><td>• The MSAVE Command</td><td></td><td></td></tr><tr><td>• The DISPLAY Command</td><td></td><td></td></tr><tr><td>• The RELEASE Command</td><td></td><td></td></tr></tbody></table>`,19)])])}const T=t(d,[["render",o]]);export{l as __pageData,T as default};
