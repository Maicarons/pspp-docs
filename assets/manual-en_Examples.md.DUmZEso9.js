import{_ as t,o as n,c as s,j as e,a as l}from"./chunks/framework.Bg-Zxr5O.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"manual-en/Examples.md","filePath":"manual-en/Examples.md","lastUpdated":1785684581000}'),r={name:"manual-en/Examples.md"};function d(o,a,i,p,c,m){return n(),s("div",null,[...a[0]||(a[0]=[e("h4",{id:"_15-17-2-examples",tabindex:"-1"},[l("15.17.2 Examples "),e("a",{class:"header-anchor",href:"#_15-17-2-examples","aria-label":'Permalink to "15.17.2 Examples"'},"​")],-1),e("p",null,"The following PSPP syntax will generate the default output and save the predicted values and residuals to the active dataset.",-1),e("pre",null,[e("code",null,`title 'Demonstrate REGRESSION procedure'.
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
`)],-1)])])}const x=t(r,[["render",d]]);export{v as __pageData,x as default};
