import{_ as a,o as e,c as _,a2 as d}from"./chunks/framework.Bg-Zxr5O.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/CTABLES.md","filePath":"manual-en/CTABLES.md","lastUpdated":1785684581000}'),n={name:"manual-en/CTABLES.md"};function o(r,t,s,i,l,E){return e(),_("div",null,[...t[0]||(t[0]=[d(`<h3 id="_15-7-ctables" tabindex="-1">15.7 CTABLES <a class="header-anchor" href="#_15-7-ctables" aria-label="Permalink to &quot;15.7 CTABLES&quot;">​</a></h3><p><code>CTABLES</code> has the following overall syntax. At least one <code>TABLE</code> subcommand is required:</p><pre><code>CTABLES
  … _global subcommands_ …
  [/TABLE _axis_ [BY _axis_ [BY _axis_]]
   … _per-table subcommands_ …]…
</code></pre><p>where each <em>axis</em> may be empty or take one of the following forms:</p><pre><code>_variable_
_variable_ [{C _|_ S}]
_axis_ + _axis_
_axis_ &gt; _axis_
(_axis_)
_axis_ [_summary_ [_string_] [_format_]]
</code></pre><p>The following subcommands precede the first <code>TABLE</code> subcommand and apply to all of the output tables. All of these subcommands are optional:</p><pre><code>/FORMAT
    [MINCOLWIDTH={DEFAULT _|_ _width_}]
    [MAXCOLWIDTH={DEFAULT _|_ _width_}]
    [UNITS={POINTS _|_ INCHES _|_ CM}]
    [EMPTY={ZERO _|_ BLANK _|_ _string_}]
    [MISSING=_string_]
/VLABELS
    VARIABLES=_variables_
    DISPLAY={DEFAULT _|_ NAME _|_ LABEL _|_ BOTH _|_ NONE}
/SMISSING {VARIABLE _|_ LISTWISE}
/PCOMPUTE &amp;_postcompute_ =EXPR(_expression_)
/PPROPERTIES &amp;_postcompute_ …
    [LABEL=_string_]
    [FORMAT=[_summary_ _format_]…]
    [HIDESOURCECATS={NO _|_ YES}
/WEIGHT VARIABLE=_variable_
/HIDESMALLCOUNTS COUNT=_count_
</code></pre><p>The following subcommands follow <code>TABLE</code> and apply only to the previous <code>TABLE</code>. All of these subcommands are optional:</p><pre><code>/SLABELS
    [POSITION={COLUMN _|_ ROW _|_ LAYER}]
    [VISIBLE={YES _|_ NO}]
/CLABELS {AUTO _|_ {ROWLABELS _|_ COLLABELS}={OPPOSITE _|_ LAYER}}
/CATEGORIES VARIABLES=_variables_
    {[_value_ , _value_ …]
   _|_ [ORDER={A _|_ D}]
     [KEY={VALUE _|_ LABEL _|_ _summary_(_variable_)}]
     [MISSING={EXCLUDE _|_ INCLUDE}]}
    [TOTAL={NO _|_ YES} [LABEL=_string_] [POSITION={AFTER _|_ BEFORE}]]
    [EMPTY={INCLUDE _|_ EXCLUDE}]
/TITLES
    [TITLE=_string_ …]
    [CAPTION=_string_ …]
    [CORNER=_string_ …]
</code></pre><p>The <code>CTABLES</code> (aka “custom tables”) command produces multi-dimensional tables from categorical and scale data. It offers many options for data summarization and formatting.</p><p>This section’s examples use data from the 2008 (USA) National Survey of Drinking and Driving Attitudes and Behaviors, a public domain data set from the (USA) National Highway Traffic Administration and available at <a href="https://data.transportation.gov" target="_blank" rel="noreferrer">https://data.transportation.gov</a>. PSPP includes this data set, with a modified dictionary, as examples/nhtsa.sav.</p><table tabindex="0"><thead><tr><th>• Basics</th><th></th><th></th></tr></thead><tbody><tr><td>• Data Summarization</td><td></td><td></td></tr><tr><td>• Statistics Positions and Labels</td><td></td><td></td></tr><tr><td>• Category Label Positions</td><td></td><td></td></tr><tr><td>• Per-Variable Category Options</td><td></td><td></td></tr><tr><td>• Titles</td><td></td><td></td></tr><tr><td>• Table Formatting</td><td></td><td></td></tr><tr><td>• Display of Variable Labels</td><td></td><td></td></tr><tr><td>• Missing Value Treatment</td><td></td><td></td></tr><tr><td>• Computed Categories</td><td></td><td></td></tr><tr><td>• Effective Weight</td><td></td><td></td></tr><tr><td>• Hiding Small Counts</td><td></td><td></td></tr></tbody></table>`,12)])])}const p=a(n,[["render",o]]);export{c as __pageData,p as default};
