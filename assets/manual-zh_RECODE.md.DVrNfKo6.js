import{_ as t,o as a,c as p,a2 as r}from"./chunks/framework.Bg-Zxr5O.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/RECODE.md","filePath":"manual-zh/RECODE.md","lastUpdated":1785684581000}'),o={name:"manual-zh/RECODE.md"};function s(n,e,u,c,_,d){return a(),p("div",null,[...e[0]||(e[0]=[r(`<h3 id="_12-7-recode" tabindex="-1">12.7 RECODE <a class="header-anchor" href="#_12-7-recode" aria-label="Permalink to &quot;12.7 RECODE&quot;">​</a></h3><p><code>RECODE</code> 命令用于把现有取值转换为其他由用户指定的取值。其一般形式为：</p><pre><code>RECODE src_vars
        (src_value src_value … = dest_value)
        (src_value src_value … = dest_value)
        (src_value src_value … = dest_value) …
         [INTO dest_vars].
</code></pre><p>在 <code>RECODE</code> 关键字之后是 src_vars，即待转换取值的变量列表。这些变量可以是字符串变量，也可以是数值变量。但列表必须是同质的；不能在同一次重新编码中混用字符串变量和数值变量。</p><p>在源变量列表之后，应有一个或多个<em>映射</em>。每个映射用括号括起来，包含源取值和目标取值，两者之间用一个 ‘=’ 分隔。源取值用于指定数据集中需要更改的取值，目标取值指定应将其更改成的新取值。每个 src_value 可以是以下形式之一：</p><p>数字</p><p>如果源变量是数值型，则 src_value 可以是一个数字字面量。</p><p>字符串</p><p>如果源变量是字符串型，则 src_value 可以是一个字符串字面量（与所有字符串一样，用单引号或双引号括起来）。</p><p>num1 THRU num2</p><p>这种形式仅在源变量为数值型时有效。它指定 num1 到 num2 之间（含两端）的所有取值。按惯例，num1 应小于 num2。可以使用 ‘LO’ 或 ‘LOWEST’ 表示 num1、用 ‘HI’ 或 ‘HIGHEST’ 表示 num2 来指定开区间范围。</p><p>‘MISSING’</p><p>字面量关键字 ‘MISSING’ 同时匹配系统缺失值和用户缺失值。它对数值型和字符串型变量均有效。</p><p>‘SYSMIS’</p><p>字面量关键字 ‘SYSMIS’ 匹配系统缺失值。它仅对数值型变量有效。</p><p>‘ELSE’</p><p>‘ELSE’ 关键字可用于匹配命令中未被任何其他 src_value 匹配到的取值。如果使用该关键字，应将其放在命令的最后一个映射中。</p><p>源变量之后是一个 ‘=’，其后是 dest_value。dest_value 可以是以下形式之一：</p><p>数字</p><p>目标取值应更改成的数字字面量。这意味着目标变量必须是数值型。</p><p>字符串</p><p>目标取值应更改成的字符串字面量（用引号括起来）。这意味着目标变量必须是字符串型。</p><p>‘SYSMIS’</p><p>关键字 ‘SYSMIS’ 将取值更改为系统缺失值。这意味着目标变量必须是数值型。</p><p>‘COPY’</p><p>特殊关键字 ‘COPY’ 表示源取值不应被修改，而是直接复制到目标取值。仅当指定了 ‘INTO dest_vars’ 时才有意义。</p><p>映射按从左到右的顺序依次考虑。因此，如果一个取值被多个映射中的 src_value 匹配，则采用第一个（最左边）匹配的映射，后续的匹配将被忽略。</p><p>‘INTO dest_vars’ 子句是可选项。命令的行为会根据其是否出现而略有不同。</p><p>如果未出现 ‘INTO dest_vars’，则取值将“就地”重新编码。也就是说，重新编码后的取值会写回原始取值所在的源变量。在这种情况下，每个映射的 dest_value 都必须隐含一个与 src_value 类型相同的值。例如，如果源取值是字符串取值，则 dest_value 不能是 ‘SYSMIS’ 或其他隐含数值结果的形态。dest_value 也不能长于源变量的宽度。</p><p>下面的例子将两个数值变量 x 和 y 就地重新编码。0 重新编码为 99，1 到 10（含）的取值保持不变，1000 及以上的取值重新编码为系统缺失值，所有其他取值更改为 999：</p><pre><code>recode x y
        (0 = 99)
        (1 THRU 10 = COPY)
        (1000 THRU HIGHEST = SYSMIS)
        (ELSE = 999).
</code></pre><p>如果给定了 ‘INTO dest_vars’，则重新编码后的取值会写入 dest_vars 中指定的变量，因此其中必须包含一个有效的变量名列表。dest_vars 中的变量个数必须与 src_vars 中的变量个数相同，且 dest_vars 中变量的顺序与 src_vars 相对应。也就是说，原始取值来自 src_vars 中第 n 个变量的重新编码取值，会被放入 dest_vars 中第 n 个变量。源变量保持不变。如果某个映射隐含字符串作为目标取值，则相应的目标变量必须已经存在，或已使用 <code>STRING</code> 或其他转换命令声明过。而数值变量若不存在则会自动创建。下面的例子处理两个源变量 a 和 b，它们包含字符串取值。因此有两个目标变量 v1 和 v2。凡是 a 或 b 取值为 ‘apple’、‘pear’ 或 ‘pomegranate’ 的个案，会使 v1 或 v2 填入字符串 ‘fruit’；而取值为 ‘tomato’、‘lettuce’ 或 ‘carrot’ 的个案则填入 ‘vegetable’。其他所有取值产生结果 ‘unknown’：</p><pre><code>string v1 (a20).
string v2 (a20).

recode a b
        (&quot;apple&quot; &quot;pear&quot; &quot;pomegranate&quot; = &quot;fruit&quot;)
        (&quot;tomato&quot; &quot;lettuce&quot; &quot;carrot&quot; = &quot;vegetable&quot;)
        (ELSE = &quot;unknown&quot;)
        into v1 v2.
</code></pre><p>还有一个上面未提及的特殊映射。如果源变量是字符串变量，则可以将映射指定为 ‘(CONVERT)’。该映射（若出现）必须是给出的最后一个映射，且必须同时给出 ‘INTO dest_vars’ 子句，并且该子句不能引用字符串变量。‘CONVERT’ 会把以字符串形式给出的数字转换为数值。例如，它将字符串 ‘&quot;3&quot;’ 转换为数值 3（注意它不会把 ‘three’ 转换为 3）。如果字符串无法解析为数字，则改为赋系统缺失值。在下面的例子中，x（字符串变量）取值为空字符串的个案，重新编码为 999，其余个案转换为输入值对应的数值。结果放入数值变量 y：</p><pre><code>recode x
       (&quot;&quot; = 999)
        (convert)
        into y.
</code></pre><p>可以在单条命令中指定多次重新编码。使用斜杠 (‘/’) 引出额外的重新编码，以与之前的重新编码分隔：</p><pre><code>recode
        a  (2 = 22) (else = 99)
        /b (1 = 3) into z
        .
</code></pre><p>这里我们有两次重新编码。第一次作用于源变量 a，将取值 2 就地重新编码为 22，其余所有取值重新编码为 99。第二次重新编码把 b 的取值复制到变量 z，同时将其中所有 1 改为 3。</p>`,38)])])}const S=t(o,[["render",s]]);export{l as __pageData,S as default};
