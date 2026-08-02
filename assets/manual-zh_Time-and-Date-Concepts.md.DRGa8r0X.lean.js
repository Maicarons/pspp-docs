import{_ as t,o as l,c as s,j as e,a}from"./chunks/framework.Bg-Zxr5O.js";const P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Time-and-Date-Concepts.md","filePath":"manual-zh/Time-and-Date-Concepts.md","lastUpdated":1785684581000}'),o={name:"manual-zh/Time-and-Date-Concepts.md"};function r(d,n,c,u,m,p){return l(),s("div",null,[...n[0]||(n[0]=[e("h4",{id:"_7-7-8-1-时间与日期如何定义与表示",tabindex:"-1"},[a("7.7.8.1 时间与日期如何定义与表示 "),e("a",{class:"header-anchor",href:"#_7-7-8-1-时间与日期如何定义与表示","aria-label":'Permalink to "7.7.8.1 时间与日期如何定义与表示"'},"​")],-1),e("p",null,[a("PSPP 将时间与日期作为单一数值来处理。"),e("em",null,"时间"),a(" 是一个间隔。PSPP 以秒为单位计量时间。因此，以下间隔对应给定的数值：")],-1),e("pre",null,[e("code",null,`          10 minutes                        600
          1 hour                          3,600
          1 day, 3 hours, 10 seconds     97,210
          40 days                     3,456,000
`)],-1),e("p",null,[e("em",null,"日期"),a(" 则是过去或未来某个特定的瞬间。PSPP 将日期表示为自 1582 年 10 月 14 日午夜之前起经过的秒数。下列日期午夜之前所对应的数值即为给定的 PSPP 日期：")],-1),e("pre",null,[e("code",null,`              15 Oct 1582                86,400
               4 Jul 1776         6,113,318,400
               1 Jan 1900        10,010,390,400
               1 Oct 1978        12,495,427,200
              24 Aug 1995        13,028,601,600
`)],-1)])])}const h=t(o,[["render",r]]);export{P as __pageData,h as default};
