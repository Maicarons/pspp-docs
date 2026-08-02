import{_ as t,o as e,c as d,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/MATRIX.md","filePath":"manual-zh/MATRIX.md","lastUpdated":1785684581000}'),r={name:"manual-zh/MATRIX.md"};function a(o,_,E,T,i,s){return e(),d("div",null,[..._[0]||(_[0]=[n(`<h3 id="_16-4-matrix" tabindex="-1">16.4 MATRIX <a class="header-anchor" href="#_16-4-matrix" aria-label="Permalink to &quot;16.4 MATRIX&quot;">​</a></h3><pre><code>MATRIX.
… _matrix commands_ …
END MATRIX.
</code></pre><p>支持以下基本矩阵命令：</p><pre><code>COMPUTE _variable_[(_index_[,_index_])]=_expression_.
CALL _procedure_(_argument_ , …).
PRINT [_expression_]
      [/FORMAT=_format_]
      [/TITLE=_title_]
      [/SPACE={NEWPAGE _|_ _n_}]
      [{/RLABELS=_string_ … _|_ /RNAMES=_expression_}]
      [{/CLABELS=_string_ … _|_ /CNAMES=_expression_}].
</code></pre><p>以下矩阵命令提供流程控制支持：</p><pre><code>DO IF _expression_.
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
</code></pre><p>以下矩阵命令支持矩阵输入和输出：</p><pre><code>READ _variable_[(_index_[,_index_])]
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
</code></pre><p>以下矩阵命令提供额外支持：</p><pre><code>DISPLAY [{DICTIONARY _|_ STATUS}].
RELEASE _variable_ ….
</code></pre><p><code>MATRIX</code> 和 <code>END MATRIX</code> 包围一种称为矩阵语言的特殊 PSPP 子语言。矩阵语言不需要定义活动数据集，并且只有少数矩阵语言命令会与任何已定义的数据集一起工作。每个 <code>MATRIX</code>…<code>END MATRIX</code> 实例都是一个独立的程序，其状态与任何其他实例无关，因此在矩阵程序内声明的变量在其结束时被遗忘。</p><p>矩阵语言处理矩阵，其中_矩阵_（matrix）是实数的矩形数组。一个 <em>n ×m</em> 矩阵有 n 行和 m 列。一些特殊情况很重要：<em>n ×1</em> 矩阵是_列向量_（column vector），<em>1× n</em> 是_行向量_（row vector），而 <em>1×1</em> 矩阵是_标量_（scalar）。</p><p>矩阵语言还有限支持包含 8 字节字符串而非数字的矩阵。长于 8 字节的字符串会被截断，较短的字符串用空格填充。字符串矩阵主要用于在使用 <code>MATRIX PRINT</code> 命令打印数值矩阵时为行和列添加标签。对字符串矩阵的算术运算不会产生有用的结果。用户不应在矩阵中混用字符串和数字。</p><p>矩阵语言不处理个案。矩阵语言中的变量代表单个矩阵。</p><p>矩阵语言不支持缺失值。</p><p><code>MATRIX</code> 是一个过程，因此它不能被包围在 <code>DO IF</code>、<code>LOOP</code> 等之内。</p><p>宏可以在矩阵程序内使用，并且宏可以展开为包含整个矩阵程序。<code>DEFINE</code> 命令不能出现在矩阵程序内。关于宏的更多信息，参见 <a href="./DEFINE">DEFINE</a>。</p><p>以下各节描述矩阵语言的细节：首先是矩阵表达式的语法，然后是每个受支持的命令。同时也支持 <code>COMMENT</code> 命令（参见 <a href="./COMMENT">COMMENT</a>）。</p><table tabindex="0"><thead><tr><th>• Matrix Expressions</th><th></th><th></th></tr></thead><tbody><tr><td>• Matrix Functions</td><td></td><td></td></tr><tr><td>• The COMPUTE Command</td><td></td><td></td></tr><tr><td>• The CALL Command</td><td></td><td></td></tr><tr><td>• The PRINT Command</td><td></td><td></td></tr><tr><td>• The DO IF Command</td><td></td><td></td></tr><tr><td>• The LOOP and BREAK Commands</td><td></td><td></td></tr><tr><td>• The READ and WRITE Commands</td><td></td><td></td></tr><tr><td>• The GET Command</td><td></td><td></td></tr><tr><td>• The SAVE Command</td><td></td><td></td></tr><tr><td>• The MGET Command</td><td></td><td></td></tr><tr><td>• The MSAVE Command</td><td></td><td></td></tr><tr><td>• The DISPLAY Command</td><td></td><td></td></tr><tr><td>• The RELEASE Command</td><td></td><td></td></tr></tbody></table>`,19)])])}const A=t(r,[["render",a]]);export{p as __pageData,A as default};
