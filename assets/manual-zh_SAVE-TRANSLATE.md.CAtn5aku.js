import{_ as a,o as E,c as d,a2 as o}from"./chunks/framework.Bg-Zxr5O.js";const s=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/SAVE-TRANSLATE.md","filePath":"manual-zh/SAVE-TRANSLATE.md","lastUpdated":1785684581000}'),t={name:"manual-zh/SAVE-TRANSLATE.md"};function A(n,e,c,T,S,p){return E(),d("div",null,[...e[0]||(e[0]=[o(`<h3 id="_9-8-save-translate" tabindex="-1">9.8 SAVE TRANSLATE <a class="header-anchor" href="#_9-8-save-translate" aria-label="Permalink to &quot;9.8 SAVE TRANSLATE&quot;">​</a></h3><pre><code>SAVE TRANSLATE
        /OUTFILE={’file_name’,file_handle}
        /TYPE={CSV,TAB}
        [/REPLACE]
        [/MISSING={IGNORE,RECODE}]

        [/DROP=var_list]
        [/KEEP=var_list]
        [/RENAME=(src_names=target_names)…]
        [/UNSELECTED={RETAIN,DELETE}]
        [/MAP]

        …additional subcommands depending on TYPE…
</code></pre><p><code>SAVE TRANSLATE</code> 命令用于将数据保存为其他应用程序可识别的多种格式。</p><p><code>OUTFILE</code> 和 <code>TYPE</code> 子命令是必需的。<code>OUTFILE</code> 指定要写入的文件，为字符串文件名或文件句柄（参见 <a href="./File-Handles">File Handles</a>）。<code>TYPE</code> 决定要读取的文件或源的类型。它必须是下列之一：</p><p>CSV</p><p>逗号分隔值格式，</p><p>TAB</p><p>制表符分隔格式。</p><p>默认情况下，<code>SAVE TRANSLATE</code> 不会覆盖已有文件。使用 <code>REPLACE</code> 可强制覆盖已有文件。</p><p>对于 MISSING=IGNORE（默认值），<code>SAVE TRANSLATE</code> 把用户缺失值当作非缺失值处理。指定 MISSING=RECODE 则会像输出系统缺失值那样输出数值型用户缺失值，并将字符串型用户缺失值输出为全是空格。</p><p>默认情况下，活动数据集字典中的所有变量都会保存到系统文件，但 <code>DROP</code> 或 <code>KEEP</code> 可以选出要保存的变量子集。<code>RENAME</code> 子命令也可用于更改保存变量时使用的名称；由于这些名称仅用于输出，它们不必遵循通常的 PSPP 变量命名规则。<code>UNSELECTED</code> 决定被 <code>FILTER</code> 命令过滤掉的个案是否写入输出文件。这些子命令的语法和含义与 <code>SAVE</code> 命令相同（参见 <a href="./SAVE">SAVE</a>）。</p><p>每种受支持的文件类型都有额外的子命令，在下面的独立小节中说明。</p><p><code>SAVE TRANSLATE</code> 会导致数据被读取。它是一个过程。</p><table tabindex="0"><thead><tr><th>• SAVE TRANSLATE /TYPE=CSV and TYPE=TAB</th><th></th><th></th></tr></thead></table>`,14)])])}const l=a(t,[["render",A]]);export{s as __pageData,l as default};
