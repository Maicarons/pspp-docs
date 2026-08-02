import{_ as a,o as s,c as n,a2 as t}from"./chunks/framework.Bg-Zxr5O.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/MISSING-VALUES.md","filePath":"manual-en/MISSING-VALUES.md","lastUpdated":1785684581000}'),o={name:"manual-en/MISSING-VALUES.md"};function i(r,e,l,m,c,d){return s(),n("div",null,[...e[0]||(e[0]=[t(`<h3 id="_11-13-missing-values" tabindex="-1">11.13 MISSING VALUES <a class="header-anchor" href="#_11-13-missing-values" aria-label="Permalink to &quot;11.13 MISSING VALUES&quot;">​</a></h3><p>In many situations the data available for analysis is incomplete and a placeholder must be used in place of a value to indicate that the value is unknown. One way that missing values are represented is through the $SYSMIS variable (see <a href="./System-Variables">System Variables</a>). Another, more flexible way is through <em>user-missing values</em> which are determined on a per variable basis.</p><p>The <code>MISSING VALUES</code> command sets user-missing values for variables.</p><pre><code>MISSING VALUES var_list (missing_values).

where missing_values takes one of the following forms:
        num1
        num1, num2
        num1, num2, num3
        num1 THRU num2
        num1 THRU num2, num3
        string1
        string1, string2
        string1, string2, string3
As part of a range, LO or LOWEST may take the place of num1;
HI or HIGHEST may take the place of num2.
</code></pre><p><code>MISSING VALUES</code> sets user-missing values for numeric and string variables. Long string variables may have missing values, but characters after the first 8 bytes of the missing value must be spaces.</p><p>Specify a list of variables, followed by a list of their user-missing values in parentheses. Up to three discrete values may be given, or, for numeric variables only, a range of values optionally accompanied by a single discrete value. Ranges may be open-ended on one end, indicated through the use of the keyword <code>LO</code> or <code>LOWEST</code> or <code>HI</code> or <code>HIGHEST</code>.</p><p>The <code>MISSING VALUES</code> command takes effect immediately. It is not affected by conditional and looping constructs such as <code>DO IF</code> or <code>LOOP</code>.</p>`,7)])])}const p=a(o,[["render",i]]);export{S as __pageData,p as default};
