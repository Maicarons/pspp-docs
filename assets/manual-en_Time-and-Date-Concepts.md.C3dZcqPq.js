import{_ as a,o as n,c as t,a2 as s}from"./chunks/framework.Bg-Zxr5O.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Time-and-Date-Concepts.md","filePath":"manual-en/Time-and-Date-Concepts.md","lastUpdated":1785684581000}'),d={name:"manual-en/Time-and-Date-Concepts.md"};function r(i,e,o,c,m,p){return n(),t("div",null,[...e[0]||(e[0]=[s(`<h4 id="_7-7-8-1-how-times-dates-are-defined-and-represented" tabindex="-1">7.7.8.1 How times &amp; dates are defined and represented <a class="header-anchor" href="#_7-7-8-1-how-times-dates-are-defined-and-represented" aria-label="Permalink to &quot;7.7.8.1 How times &amp; dates are defined and represented&quot;">​</a></h4><p>Times and dates are handled by PSPP as single numbers. A <em>time</em> is an interval. PSPP measures times in seconds. Thus, the following intervals correspond with the numeric values given:</p><pre><code>          10 minutes                        600
          1 hour                          3,600
          1 day, 3 hours, 10 seconds     97,210
          40 days                     3,456,000
</code></pre><p>A <em>date</em> , on the other hand, is a particular instant in the past or the future. PSPP represents a date as a number of seconds since midnight preceding 14 Oct 1582. Because midnight preceding the dates given below correspond with the numeric PSPP dates given:</p><pre><code>              15 Oct 1582                86,400
               4 Jul 1776         6,113,318,400
               1 Jan 1900        10,010,390,400
               1 Oct 1978        12,495,427,200
              24 Aug 1995        13,028,601,600
</code></pre>`,5)])])}const u=a(d,[["render",r]]);export{h as __pageData,u as default};
