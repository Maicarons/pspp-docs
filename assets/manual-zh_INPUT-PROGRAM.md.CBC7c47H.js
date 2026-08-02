import{_ as n,o as a,c as o,a2 as N}from"./chunks/framework.Bg-Zxr5O.js";const O=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/INPUT-PROGRAM.md","filePath":"manual-zh/INPUT-PROGRAM.md","lastUpdated":1785684581000}'),E={name:"manual-zh/INPUT-PROGRAM.md"};function d(c,e,I,t,A,T){return a(),o("div",null,[...e[0]||(e[0]=[N(`<h3 id="_8-9-input-program" tabindex="-1">8.9 INPUT PROGRAM <a class="header-anchor" href="#_8-9-input-program" aria-label="Permalink to &quot;8.9 INPUT PROGRAM&quot;">​</a></h3><pre><code>INPUT PROGRAM.
… input commands …
END INPUT PROGRAM.
</code></pre><p><code>INPUT PROGRAM</code>…<code>END INPUT PROGRAM</code> 指定一个复杂的输入程序。通过将数据输入命令放在 <code>INPUT PROGRAM</code> 中，PSPP 程序可以利用比仅使用 <code>DATA LIST</code> 更复杂的文件结构。</p><p>第一种扩展输入程序只是将多个 <code>DATA LIST</code> 命令放在 <code>INPUT PROGRAM</code> 中。这将导致所有数据文件被并行读取。当任何一个数据文件到达文件末尾时，输入将停止。</p><p>转换（如条件和循环结构）也可以包含在 <code>INPUT PROGRAM</code> 中。这些可用于以更复杂的方式合并来自多个数据文件的输入。但是，当任何一个数据文件到达文件末尾时，输入仍会停止。</p><p>为防止 <code>INPUT PROGRAM</code> 在第一个文件末尾终止，请在 <code>DATA LIST</code> 上使用 <code>END</code> 子命令。此子命令接受一个变量名，该变量应为数值临时变量（见 <a href="./Scratch-Variables">Scratch Variables</a>）。（它不必是临时变量，但否则结果可能出人意料。）读取数据文件时，此变量的值设为 0；遇到文件末尾时设为 1。</p><p>还有两个命令与 <code>INPUT PROGRAM</code> 配合使用很有用。<code>END CASE</code> 是第一个。通常每次循环经过 <code>INPUT PROGRAM</code> 结构会产生一个个案。<code>END CASE</code> 精确控制何时输出个案。使用 <code>END CASE</code> 时，从 <code>INPUT PROGRAM</code> 末尾循环到开头不会导致输出个案。</p><p><code>END FILE</code> 是第二个。当在 <code>DATA LIST</code> 上使用 <code>END</code> 子命令时，<code>INPUT PROGRAM</code> 结构无法停止循环，因此会导致无限循环。<code>END FILE</code> 在执行时停止输入数据的流动并退出 <code>INPUT PROGRAM</code> 结构。</p><p><code>INPUT PROGRAM</code> 必须包含至少一个 <code>DATA LIST</code> 或 <code>END FILE</code> 命令。</p><h4 id="示例-1-并行读取两个文件直到较短者结束" tabindex="-1">示例 1：并行读取两个文件直到较短者结束 <a class="header-anchor" href="#示例-1-并行读取两个文件直到较短者结束" aria-label="Permalink to &quot;示例 1：并行读取两个文件直到较短者结束&quot;">​</a></h4><p>以下示例从文件 a.txt 读取变量 X，从文件 b.txt 读取变量 Y。如果一个文件比另一个短，则较长文件中的额外数据将被忽略。</p><pre><code>INPUT PROGRAM.
    DATA LIST NOTABLE FILE=&#39;a.txt&#39;/X 1-10.
    DATA LIST NOTABLE FILE=&#39;b.txt&#39;/Y 1-10.
END INPUT PROGRAM.
LIST.
</code></pre><h4 id="示例-2-并行读取两个文件-补充较短者" tabindex="-1">示例 2：并行读取两个文件，补充较短者 <a class="header-anchor" href="#示例-2-并行读取两个文件-补充较短者" aria-label="Permalink to &quot;示例 2：并行读取两个文件，补充较短者&quot;">​</a></h4><p>以下示例也从 a.txt 读取变量 X，从 b.txt 读取变量 Y。如果一个文件比另一个短，则继续读取较长者直到其结束，将另一个变量设为系统缺失。</p><pre><code>INPUT PROGRAM.
    NUMERIC #A #B.

    DO IF NOT #A.
        DATA LIST NOTABLE END=#A FILE=&#39;a.txt&#39;/X 1-10.
    END IF.
    DO IF NOT #B.
        DATA LIST NOTABLE END=#B FILE=&#39;b.txt&#39;/Y 1-10.
    END IF.
    DO IF #A AND #B.
        END FILE.
    END IF.
    END CASE.
END INPUT PROGRAM.
LIST.
</code></pre><h4 id="示例-3-连接两个文件-版本-1" tabindex="-1">示例 3：连接两个文件（版本 1） <a class="header-anchor" href="#示例-3-连接两个文件-版本-1" aria-label="Permalink to &quot;示例 3：连接两个文件（版本 1）&quot;">​</a></h4><p>以下示例从文件 a.txt 读取数据，然后从 b.txt 读取，并将它们连接成单个活动数据集。</p><pre><code>INPUT PROGRAM.
    NUMERIC #A #B.

    DO IF #A.
        DATA LIST NOTABLE END=#B FILE=&#39;b.txt&#39;/X 1-10.
        DO IF #B.
            END FILE.
        ELSE.
            END CASE.
        END IF.
    ELSE.
        DATA LIST NOTABLE END=#A FILE=&#39;a.txt&#39;/X 1-10.
        DO IF NOT #A.
            END CASE.
        END IF.
    END IF.
END INPUT PROGRAM.
LIST.
</code></pre><h4 id="示例-4-连接两个文件-版本-2" tabindex="-1">示例 4：连接两个文件（版本 2） <a class="header-anchor" href="#示例-4-连接两个文件-版本-2" aria-label="Permalink to &quot;示例 4：连接两个文件（版本 2）&quot;">​</a></h4><p>这是执行与示例 3 相同任务的另一种方式。</p><pre><code>INPUT PROGRAM.
    NUMERIC #EOF.

    LOOP IF NOT #EOF.
        DATA LIST NOTABLE END=#EOF FILE=&#39;a.txt&#39;/X 1-10.
        DO IF NOT #EOF.
            END CASE.
        END IF.
    END LOOP.

    COMPUTE #EOF = 0.
    LOOP IF NOT #EOF.
        DATA LIST NOTABLE END=#EOF FILE=&#39;b.txt&#39;/X 1-10.
        DO IF NOT #EOF.
            END CASE.
        END IF.
    END LOOP.

    END FILE.
END INPUT PROGRAM.
LIST.
</code></pre><h4 id="示例-5-生成随机变量" tabindex="-1">示例 5：生成随机变量 <a class="header-anchor" href="#示例-5-生成随机变量" aria-label="Permalink to &quot;示例 5：生成随机变量&quot;">​</a></h4><p>以下示例创建一个由 0 到 10 之间的 50 个随机变量组成的数据集。</p><pre><code>INPUT PROGRAM.
    LOOP #I=1 TO 50.
        COMPUTE X=UNIFORM(10).
        END CASE.
    END LOOP.
    END FILE.
END INPUT PROGRAM.
LIST /FORMAT=NUMBERED.
</code></pre>`,24)])])}const r=n(E,[["render",d]]);export{O as __pageData,r as default};
