import{_ as a,o as t,c as o,a2 as n}from"./chunks/framework.Bg-Zxr5O.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/INPUT-PROGRAM.md","filePath":"manual-en/INPUT-PROGRAM.md","lastUpdated":1785684581000}'),r={name:"manual-en/INPUT-PROGRAM.md"};function i(l,e,s,d,c,h){return t(),o("div",null,[...e[0]||(e[0]=[n(`<h3 id="_8-9-input-program" tabindex="-1">8.9 INPUT PROGRAM <a class="header-anchor" href="#_8-9-input-program" aria-label="Permalink to &quot;8.9 INPUT PROGRAM&quot;">​</a></h3><pre><code>INPUT PROGRAM.
… input commands …
END INPUT PROGRAM.
</code></pre><p><code>INPUT PROGRAM</code>…<code>END INPUT PROGRAM</code> specifies a complex input program. By placing data input commands within <code>INPUT PROGRAM</code>, PSPP programs can take advantage of more complex file structures than available with only <code>DATA LIST</code>.</p><p>The first sort of extended input program is to simply put multiple <code>DATA LIST</code> commands within the <code>INPUT PROGRAM</code>. This will cause all of the data files to be read in parallel. Input will stop when end of file is reached on any of the data files.</p><p>Transformations, such as conditional and looping constructs, can also be included within <code>INPUT PROGRAM</code>. These can be used to combine input from several data files in more complex ways. However, input will still stop when end of file is reached on any of the data files.</p><p>To prevent <code>INPUT PROGRAM</code> from terminating at the first end of file, use the <code>END</code> subcommand on <code>DATA LIST</code>. This subcommand takes a variable name, which should be a numeric scratch variable (see <a href="./Scratch-Variables">Scratch Variables</a>). (It need not be a scratch variable but otherwise the results can be surprising.) The value of this variable is set to 0 when reading the data file, or 1 when end of file is encountered.</p><p>Two additional commands are useful in conjunction with <code>INPUT PROGRAM</code>. <code>END CASE</code> is the first. Normally each loop through the <code>INPUT PROGRAM</code> structure produces one case. <code>END CASE</code> controls exactly when cases are output. When <code>END CASE</code> is used, looping from the end of <code>INPUT PROGRAM</code> to the beginning does not cause a case to be output.</p><p><code>END FILE</code> is the second. When the <code>END</code> subcommand is used on <code>DATA LIST</code>, there is no way for the <code>INPUT PROGRAM</code> construct to stop looping, so an infinite loop results. <code>END FILE</code>, when executed, stops the flow of input data and passes out of the <code>INPUT PROGRAM</code> structure.</p><p><code>INPUT PROGRAM</code> must contain at least one <code>DATA LIST</code> or <code>END FILE</code> command.</p><h4 id="example-1-read-two-files-in-parallel-to-the-end-of-the-shorter" tabindex="-1">Example 1: Read two files in parallel to the end of the shorter <a class="header-anchor" href="#example-1-read-two-files-in-parallel-to-the-end-of-the-shorter" aria-label="Permalink to &quot;Example 1: Read two files in parallel to the end of the shorter&quot;">​</a></h4><p>The following example reads variable X from file a.txt and variable Y from file b.txt. If one file is shorter than the other then the extra data in the longer file is ignored.</p><pre><code>INPUT PROGRAM.
    DATA LIST NOTABLE FILE=&#39;a.txt&#39;/X 1-10.
    DATA LIST NOTABLE FILE=&#39;b.txt&#39;/Y 1-10.
END INPUT PROGRAM.
LIST.
</code></pre><h4 id="example-2-read-two-files-in-parallel-supplementing-the-shorter" tabindex="-1">Example 2: Read two files in parallel, supplementing the shorter <a class="header-anchor" href="#example-2-read-two-files-in-parallel-supplementing-the-shorter" aria-label="Permalink to &quot;Example 2: Read two files in parallel, supplementing the shorter&quot;">​</a></h4><p>The following example also reads variable X from a.txt and variable Y from b.txt. If one file is shorter than the other then it continues reading the longer to its end, setting the other variable to system-missing.</p><pre><code>INPUT PROGRAM.
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
</code></pre><h4 id="example-3-concatenate-two-files-version-1" tabindex="-1">Example 3: Concatenate two files (version 1) <a class="header-anchor" href="#example-3-concatenate-two-files-version-1" aria-label="Permalink to &quot;Example 3: Concatenate two files (version 1)&quot;">​</a></h4><p>The following example reads data from file a.txt, then from b.txt, and concatenates them into a single active dataset.</p><pre><code>INPUT PROGRAM.
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
</code></pre><h4 id="example-4-concatenate-two-files-version-2" tabindex="-1">Example 4: Concatenate two files (version 2) <a class="header-anchor" href="#example-4-concatenate-two-files-version-2" aria-label="Permalink to &quot;Example 4: Concatenate two files (version 2)&quot;">​</a></h4><p>This is another way to do the same thing as Example 3.</p><pre><code>INPUT PROGRAM.
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
</code></pre><h4 id="example-5-generate-random-variates" tabindex="-1">Example 5: Generate random variates <a class="header-anchor" href="#example-5-generate-random-variates" aria-label="Permalink to &quot;Example 5: Generate random variates&quot;">​</a></h4><p>The follows example creates a dataset that consists of 50 random variates between 0 and 10.</p><pre><code>INPUT PROGRAM.
    LOOP #I=1 TO 50.
        COMPUTE X=UNIFORM(10).
        END CASE.
    END LOOP.
    END FILE.
END INPUT PROGRAM.
LIST /FORMAT=NUMBERED.
</code></pre>`,24)])])}const m=a(r,[["render",i]]);export{E as __pageData,m as default};
