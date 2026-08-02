import{_ as n,o as t,c as s,j as e,a as r}from"./chunks/framework.Bg-Zxr5O.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-zh/Examples.md","filePath":"manual-zh/Examples.md","lastUpdated":1785684581000}'),l={name:"manual-zh/Examples.md"};function d(o,a,i,c,p,m){return t(),s("div",null,[...a[0]||(a[0]=[e("h4",{id:"_15-17-2-示例",tabindex:"-1"},[r("15.17.2 示例 "),e("a",{class:"header-anchor",href:"#_15-17-2-示例","aria-label":'Permalink to "15.17.2 示例"'},"​")],-1),e("p",null,"以下 PSPP 语法将生成默认输出，并将预测值和残差保存到活动数据集。",-1),e("pre",null,[e("code",null,`title 'Demonstrate REGRESSION procedure'.
data list / v0 1-2 (A) v1 v2 3-22 (10).
begin data.
b  7.735648 -23.97588
b  6.142625 -19.63854
a  7.651430 -25.26557
c  6.125125 -16.57090
a  8.245789 -25.80001
c  6.031540 -17.56743
a  9.832291 -28.35977
c  5.343832 -16.79548
a  8.838262 -29.25689
b  6.200189 -18.58219
end data.
list.
regression /variables=v0 v1 v2 /statistics defaults /dependent=v2
           /save pred resid /method=enter.
`)],-1)])])}const _=n(l,[["render",d]]);export{v as __pageData,_ as default};
