import{_ as E,o as n,c as A,a2 as a}from"./chunks/framework.Bg-Zxr5O.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/FILE-HANDLE.md","filePath":"manual-zh/FILE-HANDLE.md","lastUpdated":1785684581000}'),I={name:"manual-zh/FILE-HANDLE.md"};function d(o,e,D,C,L,p){return n(),A("div",null,[...e[0]||(e[0]=[a(`<h3 id="_8-8-file-handle" tabindex="-1">8.8 FILE HANDLE <a class="header-anchor" href="#_8-8-file-handle" aria-label="Permalink to &quot;8.8 FILE HANDLE&quot;">​</a></h3><pre><code>For text files:
        FILE HANDLE handle_name
                /NAME=’file_name
                [/MODE=CHARACTER]
                [/ENDS={CR,CRLF}]
                /TABWIDTH=tab_width
                [ENCODING=’encoding’]

For binary files in native encoding with fixed-length records:
        FILE HANDLE handle_name
                /NAME=’file_name’
                /MODE=IMAGE
                [/LRECL=rec_len]
                [ENCODING=’encoding’]

For binary files in native encoding with variable-length records:
        FILE HANDLE handle_name
                /NAME=’file_name’
                /MODE=BINARY
                [/LRECL=rec_len]
                [ENCODING=’encoding’]

For binary files encoded in EBCDIC:
        FILE HANDLE handle_name
                /NAME=’file_name’
                /MODE=360
                /RECFORM={FIXED,VARIABLE,SPANNED}
                [/LRECL=rec_len]
                [ENCODING=’encoding’]
</code></pre><p>使用 <code>FILE HANDLE</code> 将文件句柄名称与文件及其属性关联，以便后续命令可以通过句柄名称引用该文件。文本文件的名称可以直接在访问文件的命令上指定，因此仅当文件不是包含文本行的普通文件时才需要 <code>FILE HANDLE</code>。但是，即使对于文本文件也可以使用 <code>FILE HANDLE</code>，并且先指定一次文件名称，然后以后通过抽象句柄引用它可能更容易。</p><p>将文件句柄名称指定为紧跟 <code>FILE HANDLE</code> 命令名的标识符。标识符 INLINE 保留用于表示嵌入在语法文件中的数据（见 <a href="./BEGIN-DATA">BEGIN DATA</a>）。文件句柄名称不得已在先前的 <code>FILE HANDLE</code> 调用中使用过，除非它已被中间命令关闭（见 <a href="./CLOSE-FILE-HANDLE">CLOSE FILE HANDLE</a>）。</p><p><code>FILE HANDLE</code> 的效果和语法取决于所选的 MODE：</p><ul><li>在默认的 CHARACTER 模式下，数据文件作为文本文件读取。每个文本行作为一个记录读取。</li></ul><p>在 CHARACTER 模式下，输入程序会将制表符扩展为空格，但显式指定了分隔符的 <code>DATA LIST FREE</code> 除外。默认每个制表符为 4 个字符宽，但 TABWIDTH（PSPP 扩展）可用于指定替代宽度。使用 TABWIDTH 为 0 可禁止制表符扩展。</p><p>默认情况下，以 CHARACTER 模式写入的文件使用 PSPP 运行所在系统的行尾，即在 Windows 上默认为 CR LF 行尾，在其他系统上默认为仅 LF。指定 ENDS 为 CR 或 CRLF 可覆盖默认值。无论 ENDS 如何，PSPP 在任何类型的系统上都使用这两种约定读取文件。</p><ul><li>在 IMAGE 模式下，数据文件被视为一系列固定长度的二进制记录。应使用 LRECL 指定记录长度（以字节为单位），默认为 1024。在输入时，如果 IMAGE 文件的长度不是记录长度的整数倍，则为错误。在输出时，如有必要，每条记录用空格填充或截断，使其恰好为正确长度。</li><li>在 BINARY 模式下，数据文件被视为一系列可变长度的二进制记录。可以指定 LRECL，但其值被忽略。每条记录的数据前后各有一个 32 位有符号整数（小端字节序），指定记录的长度。（这种冗余允许以相反顺序高效读取这些文件中的记录，尽管 PSPP 始终以正向顺序读取它们。）该长度不包括任一整数。</li><li>模式 360 读取和写入最早在 1960 年代用于 IBM 大型机操作系统磁带、至今仍由其现代后继系统支持的格式的文件。更多信息，请参见 OS/400 Tape and Diskette Device Programming，可在 IBM 网站上获取。</li></ul><p>模式 360 文件中的字母数字数据以 EBCDIC 编码。PSPP 在输入或输出时根据需要执行 EBCDIC 与主机本机格式之间的转换，使用一对一的 ASCII/EBCDIC 转换，因此从 ASCII 到 EBCDIC 再回到 ASCII（反之亦然）的“往返”始终产生完全相同的原始数据。</p><p><code>RECFORM</code> 子命令在模式 360 中是必需的。确切的文件格式取决于其设置：</p><p>F FIXED</p><p>此记录格式等同于 IMAGE 模式，但进行 EBCDIC 转换。</p><p>IBM 文档称此为 <code>*F</code>（定长、解块）格式。</p><p>V VARIABLE</p><p>文件由一个或多个可变长度块组成的序列。每个块以一个 4 字节的 <em>块描述字</em>（BDW）开始。BDW 的前两个字节是 Big-endian 字节序的无符号整数，指定块的长度，包括 BDW 本身。BDW 的另外两个字节在输入时被忽略，在输出时写为零。</p><p>BDW 之后，每个块的其余部分是一个或多个可变长度记录的序列，每个记录又以具有与 BDW 相同格式的 4 字节 <em>记录描述字</em>（RDW）开始。RDW 之后，每个记录的其余部分是记录数据。</p><p>VARIABLE 模式下记录的最大长度为 65,527 字节：65,535 字节（16 位无符号整数的最大值）减去 4 字节 BDW，再减去 4 字节 RDW。</p><p>在 VARIABLE 模式下，LRECL 指定最大记录长度，而不是固定记录长度（以字节为单位）。默认值为 8,192。</p><p>IBM 文档称此为 <code>*VB</code>（可变长度、分块、未跨越）格式。</p><p>VS SPANNED</p><p>文件格式类似于 VARIABLE 模式，只是逻辑记录可以拆分到多个物理记录（称为 <em>段</em>）或块中。在 SPANNED 模式下，每个 RDW 的第三个字节称为段控制字符（SCC）。奇数 SCC 值使段追加到内存中维护的记录缓冲区；偶数值也会追加段，然后将内容刷新到输入过程。按照惯例，SCC 值 0 表示未跨多个段跨越的记录，值 1 到 3 分别表示多段记录中的第一段、最后一段或中间段。无论最后记录的 SCC 如何，在文件末尾也会刷新记录缓冲区。</p><p>VARIABLE 模式下逻辑记录的最大长度仅受 PSPP 可用内存限制。段限制为 65,527 字节，与 VARIABLE 模式相同。</p><p>此格式类似于 IBM 文档所称的 <code>*VS</code>（可变长度、解块、跨越）格式。</p><p>在模式 360 中，从磁盘读取时超出记录末尾的 A 类型字段用主机本机字符集的空格填充，然后转换为 EBCDIC。因此，当主机本机字符集基于 ASCII 时，这些字段实际上用字符 <code>X&#39;80&#39;</code> 填充。实现此瑕疵是为了兼容性。</p><p><code>NAME</code> 子命令指定与句柄关联的文件名。在所有模式（SCRATCH 模式除外）中都是必需的，在 SCRATCH 模式中禁止使用。</p><p>ENCODING 子命令指定文件中文本的编码。对于在 CHARACTER 模式下读取文本文件，支持 INSERT 命令上 ENCODING 描述的所有形式（见 <a href="./INSERT">INSERT</a>）。对于以其他基于文件的模式读取，不支持编码自动检测；如果指定的编码请求自动检测，则使用默认编码。当文件句柄用于以任何模式写入文件时，也是如此。</p>`,27)])])}const N=E(I,[["render",d]]);export{c as __pageData,N as default};
