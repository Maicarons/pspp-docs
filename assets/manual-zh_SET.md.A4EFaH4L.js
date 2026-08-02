import{_ as p,o,c,a2 as d}from"./chunks/framework.Bg-Zxr5O.js";const t=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/SET.md","filePath":"manual-zh/SET.md","lastUpdated":1785684581000}'),S={name:"manual-zh/SET.md"};function n(E,e,a,A,T,O){return o(),c("div",null,[...e[0]||(e[0]=[d(`<h3 id="_17-20-set" tabindex="-1">17.20 SET <a class="header-anchor" href="#_17-20-set" aria-label="Permalink to &quot;17.20 SET&quot;">​</a></h3><pre><code>SET

(data input)
        /BLANKS={SYSMIS,’.’,number}
        /DECIMAL={DOT,COMMA}
        /FORMAT=fmt_spec
        /EPOCH={AUTOMATIC,year}
        /RIB={NATIVE,MSBFIRST,LSBFIRST,VAX}
        /RRB={NATIVE,ISL,ISB,IDL,IDB,VF,VD,VG,ZS,ZL}

(interaction)
        /MXERRS=max_errs
        /MXWARNS=max_warnings
        /WORKSPACE=workspace_size

(syntax execution)
        /LOCALE=’locale’
        /MXLOOPS=max_loops
        /SEED={RANDOM,seed_value}
        /UNDEFINED={WARN,NOWARN}
        /FUZZBITS=fuzzbits
        /SCALEMIN=count

(data output)
        /CC{A,B,C,D,E}={’npre,pre,suf,nsuf’,’npre.pre.suf.nsuf’}
        /DECIMAL={DOT,COMMA}
        /FORMAT=fmt_spec
        /LEADZERO={ON,OFF}
        /MDISPLAY={TEXT,TABLES}
        /SMALL=number
        /SUMMARY={NONE,comment}
        /WIB={NATIVE,MSBFIRST,LSBFIRST,VAX}
        /WRB={NATIVE,ISL,ISB,IDL,IDB,VF,VD,VG,ZS,ZL}

(output routing)
        /ERRORS={ON,OFF,TERMINAL,LISTING,BOTH,NONE}
        /MESSAGES={ON,OFF,TERMINAL,LISTING,BOTH,NONE}
        /PRINTBACK={ON,OFF,TERMINAL,LISTING,BOTH,NONE}
        /RESULTS={ON,OFF,TERMINAL,LISTING,BOTH,NONE}

(output driver options)
        /HEADERS={NO,YES,BLANK}
        /LENGTH={NONE,n_lines}
        /WIDTH={NARROW,WIDTH,n_characters}
        /TNUMBERS={VALUES,LABELS,BOTH}
        /TVARS={NAMES,LABELS,BOTH}
        /TLOOK={NONE,file}

(logging)
        /JOURNAL={ON,OFF} [’file_name’]

(system files)
        /SCOMPRESSION={ON,OFF}

(miscellaneous)
        /SAFER=ON
        /LOCALE=’string’

(macros)
        /MEXPAND={ON,OFF}
        /MPRINT={ON,OFF}
        /MITERATE=number
        /MNEST=number

(settings not yet implemented, but accepted and ignored)
        /BASETEXTDIRECTION={AUTOMATIC,RIGHTTOLEFT,LEFTTORIGHT}
        /BLOCK=’c’
        /BOX={’xxx’,’xxxxxxxxxxx’}
        /CACHE={ON,OFF}
        /CELLSBREAK=number
        /COMPRESSION={ON,OFF}
        /CMPTRANS={ON,OFF}
        /HEADER={NO,YES,BLANK}
</code></pre><p><code>SET</code> 允许用户调整与 PSPP 执行相关的若干参数。由于此命令的子命令很多，下面按组来介绍其各个子命令。</p><p>对于接受布尔值的子命令，当用作子命令取值时，<code>ON</code> 与 <code>YES</code> 同义，<code>OFF</code> 与 <code>NO</code> 同义。</p><p>数据输入子命令影响从数据文件读取数据的方式。数据输入子命令如下：</p><p>BLANKS</p><p>这是赋给为空或仅含空白的数据项的值。参数 SYSMIS 或 ’.’ 会使系统缺失值赋给空项。这是默认行为。也可以赋任意实数值。</p><p>DECIMAL</p><p>此值可设为 <code>DOT</code> 或 <code>COMMA</code>。设为 <code>DOT</code> 时，小数点字符为 ‘.’，分组字符为 ‘,’。设为 <code>COMMA</code> 时，小数点字符为 ‘,’，分组字符为 ‘.’。如果设置为 <code>COMMA</code>，则 ‘,’ 在 <code>DATA LIST</code> 命令中不被视为字段分隔符（参见 <a href="./DATA-LIST">DATA LIST</a>）。默认值由系统区域设置决定。</p><p>FORMAT</p><p>允许指定默认的数值输入/输出格式。默认是 F8.2。参见 <a href="./Input-and-Output-Formats">Input and Output Formats</a>。</p><p>EPOCH</p><p>指定从数据文件读取 2 位年份，或在日期构造表达式中使用 2 位年份时所采用的年份范围（参见 <a href="./Date-Construction">Date Construction</a>）。如果为纪元指定了 4 位年份，则 2 位年份从该年份（称为纪元）开始解释。如果指定 <code>AUTOMATIC</code>（默认值），则纪元从当前日期往前 69 年开始。</p><p>RIB</p><p>PSPP 扩展，用于设置读取 IB 或 PIB 格式数据时所用的字节序（端序）（参见 <a href="./Binary-and-Hexadecimal-Numeric-Formats">Binary and Hexadecimal Numeric Formats</a>）。在 <code>MSBFIRST</code> 顺序中，最高有效字节位于 IB 或 PIB 字段的左端。在 <code>LSBFIRST</code> 顺序中，最低有效字节位于左端。<code>VAX</code> 顺序类似于 <code>MSBFIRST</code>，只是每对字节顺序相反。<code>NATIVE</code>（默认值）相当于 <code>MSBFIRST</code> 或 <code>LSBFIRST</code>，取决于运行 PSPP 的机器的本机格式。</p><p>RRB</p><p>PSPP 扩展，用于设置读取 RB 格式数据时所用的浮点格式（参见 <a href="./Binary-and-Hexadecimal-Numeric-Formats">Binary and Hexadecimal Numeric Formats</a>）。可选值有：</p><p>NATIVE</p><p>运行 PSPP 的机器的本机格式。相当于 IDL 或 IDB。</p><p>ISL</p><p>32 位 IEEE 754 单精度浮点，小端字节序。</p><p>ISB</p><p>32 位 IEEE 754 单精度浮点，大端字节序。</p><p>IDL</p><p>64 位 IEEE 754 双精度浮点，小端字节序。</p><p>IDB</p><p>64 位 IEEE 754 双精度浮点，大端字节序。</p><p>VF</p><p>32 位 VAX F 格式，VAX 端字节序。</p><p>VD</p><p>64 位 VAX D 格式，VAX 端字节序。</p><p>VG</p><p>64 位 VAX G 格式，VAX 端字节序。</p><p>ZS</p><p>32 位 IBM Z 架构短格式十六进制浮点，大端字节序。</p><p>ZL</p><p>64 位 IBM Z 架构长格式十六进制浮点，大端字节序。</p><p>Z 架构也支持 IEEE 754 浮点。ZS 和 ZL 格式仅用于非常旧有的输入文件。</p><p>默认是 NATIVE。</p><p>交互子命令影响 PSPP 与在线用户交互的方式。交互子命令如下：</p><p>MXERRS</p><p>PSPP 停止处理当前命令文件之前允许的最大错误数。默认是 50。</p><p>MXWARNS</p><p>PSPP 停止处理当前命令文件之前允许的警告数 + 错误数的最大值。特殊值 0 表示应忽略所有警告情形。除一条初始警告提示将不再给出警告外，不再发出任何警告。默认值是 100。</p><p>语法执行子命令控制 PSPP 命令的执行方式。语法执行子命令如下：</p><p>LOCALE</p><p>为读写语法文件和数据文件的目的而覆盖系统区域设置。参数应为一般形式的区域名称 <code>language_country.encoding</code>，其中 language 和 country 分别是 2 字符的语言和国家缩写，encoding 是 IANA 字符集名称。区域示例如 <code>en_US.UTF-8</code>（美国英语，UTF-8 编码）和 <code>ja_JP.EUC-JP</code>（日本日语，EUC-JP 编码）。</p><p>MXLOOPS</p><p>不受控循环（参见 <a href="./LOOP">LOOP</a>）以及矩阵语言中任意循环（参见 <a href="./Matrix-LOOP-and-BREAK-Commands">Matrix LOOP and BREAK Commands</a>）的最大迭代次数。默认 max_loops 是 40。</p><p>SEED</p><p>初始伪随机数种子。将其设为实数或 RANDOM，以从当前时刻获取初始种子。</p><p>UNDEFINED</p><p>目前未使用。</p><p>FUZZBITS</p><p>使用 RND 运算符四舍五入时，在最低有效位上可接受、用于向上取整的误差的最大位数（针对恰好处于两个可能取值中间附近的数值）（参见 <a href="./Miscellaneous-Mathematics">Miscellaneous Mathematics</a>）。默认 fuzzbits 是 6。</p><p>SCALEMIN</p><p>PSPP 假定变量具有度量尺度（标度）水平所需的最小不同有效值个数。参见 <a href="./Attributes#Measurement-Level">Measurement Level</a>。</p><p>WORKSPACE</p><p>PSPP 用于存储正在处理的数据所使用的最大内存量（以千字节计）。如果所需内存超过工作区大小，则 PSPP 开始使用临时文件来存储数据。设置较大的值可使过程运行更快，但可能导致其他应用程序运行变慢。在没有虚拟内存管理的平台上，设置过大的工作区可能导致 PSPP 中止。</p><p>数据输出子命令影响输出数据的格式。这些子命令如下：</p><p>CCA CCB CCC CCD CCE</p><p>设置自定义货币格式。详情参见 <a href="./Custom-Currency-Formats">Custom Currency Formats</a>。</p><p>DECIMAL</p><p>默认 <code>DOT</code> 设置使小数点字符为 ‘.’。<code>COMMA</code> 设置使小数点字符为 ‘，’。</p><p>FORMAT</p><p>允许指定默认的数值输入/输出格式。默认是 F8.2。参见 <a href="./Input-and-Output-Formats">Input and Output Formats</a>。</p><p>LEADZERO</p><p>控制绝对值小于 1 的数字是否在小数点前显示 0。例如，使用默认的 <code>SET LEADZERO=OFF</code> 时，二分之一显示为 0.5；使用 <code>SET LEADZERO=ON</code> 时，显示为 .5。此设置仅影响 <code>F</code>、<code>COMMA</code> 和 <code>DOT</code> 格式。</p><p>MDISPLAY</p><p>控制在 <code>MATRIX</code>…<code>END MATRIX</code> 内的 <code>PRINT</code> 命令如何输出矩阵。默认 <code>TEXT</code> 下，<code>PRINT</code> 以文本形式输出矩阵。将此设置改为 <code>TABLES</code> 可改为以透视表形式输出矩阵。更多信息参见 <a href="./Matrix-PRINT-Command">Matrix PRINT Command</a>。</p><p>SMALL</p><p>控制在透视表中 PSPP 如何格式化小数字——即当 PSPP 对数字没有其他明确格式时。当此类数字的绝对值小于此处设置的值时，PSPP 以科学计数法格式化该数字；否则以标准记数法格式化。默认是 0.0001。设为 0 可禁用科学计数法。</p><p>SUMMARY</p><p><code>SUMMARY</code> 选项设置注释字符串，该字符串将出现在所有生成的表格中，直到下一次 <code>SUMMARY</code> 被发出。如果指定特殊值 <code>NONE</code>，则不显示任何注释。这些注释字符串在图形用户界面中通过将指针悬停在表格上即可查看。如果注释包含以下任意子串，它们将按如下方式替换：</p><p><code>\\n</code></p><p>换行。</p><p><code>)DATE</code></p><p>当前日期，格式为 ‘dd-mmm-yyyy’</p><p><code>)ADATE</code></p><p>当前日期，格式为 ‘mm/dd/yyyy’</p><p><code>)SDATE</code></p><p>当前日期，格式为 ‘yyyy/mm/dd’</p><p><code>)EDATE</code></p><p>当前日期，格式为 ‘dd.mm.yyyy’</p><p><code>)TIME</code></p><p>当前 12 小时制时间，格式为 ‘hh:mm:ss’</p><p><code>)ETIME</code></p><p>当前 24 小时制时间，格式为 ‘hh:mm:ss’</p><p>WIB</p><p>PSPP 扩展，用于设置写入 IB 或 PIB 格式数据时所用的字节序（端序）（参见 <a href="./Binary-and-Hexadecimal-Numeric-Formats">Binary and Hexadecimal Numeric Formats</a>）。在 <code>MSBFIRST</code> 顺序中，最高有效字节位于 IB 或 PIB 字段的左端。在 <code>LSBFIRST</code> 顺序中，最低有效字节位于左端。<code>VAX</code> 顺序类似于 <code>MSBFIRST</code>，只是每对字节顺序相反。<code>NATIVE</code>（默认值）相当于 <code>MSBFIRST</code> 或 <code>LSBFIRST</code>，取决于运行 PSPP 的机器的本机格式。</p><p>WRB</p><p>PSPP 扩展，用于设置写入 RB 格式数据时所用的浮点格式（参见 <a href="./Binary-and-Hexadecimal-Numeric-Formats">Binary and Hexadecimal Numeric Formats</a>）。可选值与 <code>SET RIB</code> 相同。默认是 <code>NATIVE</code>。</p><p>在 PSPP 基于文本的界面中，输出路由子命令影响输出的发送位置。这些子命令允许的取值如下：</p><p>OFF NONE</p><p>丢弃此类输出。</p><p>TERMINAL</p><p>将此输出写入终端，但不写入列表文件和其他输出设备。</p><p>LISTING</p><p>将此输出写入列表文件和其他输出设备，但不写入终端。</p><p>ON BOTH</p><p>将此类型输出写入所有输出设备。</p><p>这些输出路由子命令为：</p><p>ERRORS</p><p>适用于错误和警告消息。默认是 <code>BOTH</code>。</p><p>MESSAGES</p><p>适用于提示信息。默认是 <code>BOTH</code>。</p><p>PRINTBACK</p><p>决定是否将用作输入的语法作为输出的一部分打印回显。默认是 <code>NONE</code>。</p><p>RESULTS</p><p>适用于不属于上述任何类别的所有内容，例如统计过程的结果。默认是 <code>BOTH</code>。</p><p>这些子命令对 PSPP GUI 环境中的输出没有影响。</p><p>输出驱动选项子命令影响输出驱动程序的设置。这些子命令如下：</p><p>HEADERS LENGTH WIDTH TNUMBERS</p><p><code>TNUMBERS</code> 选项设置输出表格中取值的显示方式。有效设置为 <code>VALUES</code>、<code>LABELS</code> 和 <code>BOTH</code>。如果 <code>TNUMBERS</code> 设为 <code>VALUES</code>，则所有取值以其字面量显示（数值为数字，字符串为字母数字字符串）。如果 <code>TNUMBERS</code> 设为 <code>LABELS</code>，则取值在已分配标签时显示其标签（参见 <a href="./VALUE-LABELS">VALUE LABELS</a>）。如果取值没有标签，则使用字面量显示。如果 <code>TNUMBERS</code> 设为 <code>BOTH</code>，则取值同时显示其标签（如果有）和字面量（括在括号中）。</p><p>TVARS</p><p><code>TVARS</code> 选项设置输出表格中变量的显示方式。有效设置为 <code>NAMES</code>、<code>LABELS</code> 和 <code>BOTH</code>。如果 <code>TVARS</code> 设为 <code>NAMES</code>，则所有变量以其名称显示。如果 <code>TVARS</code> 设为 <code>LABELS</code>，则变量在已设置标签时显示其标签。如果未设置标签，则使用名称（参见 <a href="./VARIABLE-LABELS">VARIABLE LABELS</a>）。如果 <code>TVARS</code> 设为 <code>BOTH</code>，则变量同时显示其标签（如果有）和名称（括在括号中）。</p><p>TLOOK</p><p><code>TLOOK</code> 选项设置后续表格输出所用的样式。指定 <code>NONE</code> 使 PSPP 使用默认内置样式。否则，指定 file 会使 PSPP 以与在 PSPP 命令行指定 --table-look=file 相同的方式搜索 .stt 或 .tlo 文件（参见 <a href="./Main-Options">Main Options</a>）。</p><p>这些子命令影响日志（也称记录）。启用日志后，PSPP 会将它执行的命令，以及它输出的任何错误或其他诊断信息，写入一个称为<em>日志</em>文件的文本文件。</p><p>PSPP 在终端以交互方式运行或在 PSPPIRE GUI 中运行时，默认启用日志。在 GUI 中，使用“编辑 → 选项…”查看或覆盖默认位置，或禁用日志。在语法中，使用 <code>SHOW JOURNAL</code> 查看日志的位置及其是否启用。</p><p>JOURNAL LOG</p><p>指定 <code>ON</code> 启用日志，<code>OFF</code> 禁用日志。指定文件名以设置日志文件的名称。</p><p>系统文件子命令影响 PSPP 生成的系统文件的默认格式。这些子命令如下：</p><p>SCOMPRESSION</p><p>由 <code>SAVE</code> 或 <code>XSAVE</code> 创建的系统文件是否默认压缩。默认是 <code>ON</code>。</p><p>安全子命令影响命令被允许执行的操作。安全子命令如下：</p><p>SAFER</p><p>设置此选项会禁用以下操作：</p><ul><li><code>ERASE</code> 命令。</li><li><code>HOST</code> 命令。</li><li><code>PERMISSIONS</code> 命令。</li><li>管道（以 ‘|’ 开头或结尾的文件名）。</li></ul><p>请注意，此设置并不保证安全（例如，命令仍然可以覆盖文件），但它是一种改进。出于明显的安全原因，一旦设置，在同一会话中无法重置此设置。</p><p>LOCALE</p><p>此项用于设置默认字符编码。编码可以指定为编码名称或别名（参见 <a href="http://www.iana.org/assignments/character-sets" target="_blank" rel="noreferrer">http://www.iana.org/assignments/character-sets</a>），或指定为区域名称。如果以区域名称给出，则只有该区域的字符编码是相关的。</p><p>PSPP 写入的系统文件使用此编码。对于编码未知的、由 PSPP 读取的系统文件，使用此编码解释。</p><p>有效编码和区域名称/别名的完整列表依赖于操作系统。以下都是在常见 GNU/Linux 系统上都可接受的语法示例：</p><pre><code>SET LOCALE=&#39;iso-8859-1&#39;.

SET LOCALE=&#39;ru_RU.cp1251&#39;.

SET LOCALE=&#39;japanese&#39;.
</code></pre><p>与直觉相反，此命令不影响系统区域设置的任何方面。</p><p>以下子命令影响宏的解释。</p><p>MEXPAND</p><p>控制是否展开宏。默认是 ON。</p><p>MPRINT</p><p>控制宏的展开是否包含在输出中。这与命令语法总体上是否包含在输出中是分开的。默认是 OFF。</p><p>MITERATE</p><p>限制宏内 <code>!DO</code> 循环执行的迭代次数。这不影响 <code>LOOP</code> 等其他语言结构。必须将其设为正整数。默认是 1000。</p><p>MNEST</p><p>限制嵌套宏展开的深度层数。必须将其设为正整数。默认是 50。</p><p>以下子命令尚未实现，但 PSPP 接受它们并忽略这些设置。</p><p>BASETEXTDIRECTION BLOCK BOX CACHE CELLSBREAK COMPRESSION CMPTRANS HEADER</p>`,147)])])}const I=p(S,[["render",n]]);export{t as __pageData,I as default};
