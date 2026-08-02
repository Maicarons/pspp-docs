import{_ as a,o as t,c as n,a2 as i}from"./chunks/framework.Bg-Zxr5O.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/SAVE-DATA-COLLECTION.md","filePath":"manual-en/SAVE-DATA-COLLECTION.md","lastUpdated":1785684581000}'),o={name:"manual-en/SAVE-DATA-COLLECTION.md"};function s(r,e,d,l,A,E){return t(),n("div",null,[...e[0]||(e[0]=[i(`<h3 id="_9-7-save-data-collection" tabindex="-1">9.7 SAVE DATA COLLECTION <a class="header-anchor" href="#_9-7-save-data-collection" aria-label="Permalink to &quot;9.7 SAVE DATA COLLECTION&quot;">​</a></h3><pre><code>SAVE DATA COLLECTION
        /OUTFILE={’file_name’,file_handle}
        /METADATA={’file_name’,file_handle}
        /{UNCOMPRESSED,COMPRESSED,ZCOMPRESSED}
        /PERMISSIONS={WRITEABLE,READONLY}
        /DROP=var_list
        /KEEP=var_list
        /VERSION=version
        /RENAME=(src_names=target_names)…
        /NAMES
        /MAP
</code></pre><p>Like <code>SAVE</code>, <code>SAVE DATA COLLECTION</code> writes the dictionary and data in the active dataset to a system file. In addition, it writes metadata to an additional XML metadata file.</p><p>OUTFILE is required. Specify the system file to be written as a string file name or a file handle (see <a href="./File-Handles">File Handles</a>).</p><p>METADATA is also required. Specify the metadata file to be written as a string file name or a file handle. Metadata files customarily use a .mdd extension.</p><p>The current implementation of this command is experimental. It only outputs an approximation of the metadata file format. Please report bugs.</p><p>Other subcommands are optional. They have the same meanings as in the <code>SAVE</code> command.</p><p><code>SAVE DATA COLLECTION</code> causes the data to be read. It is a procedure.</p>`,8)])])}const p=a(o,[["render",s]]);export{m as __pageData,p as default};
