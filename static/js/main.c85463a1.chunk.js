(this["webpackJsonpsink-or-swim"]=this["webpackJsonpsink-or-swim"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(7),a=c.n(s),l=(c(25),c(3)),j=c(13),r=c(19),o=c.n(r),u=c(15),b=c.n(u),d=(c(26),c(4)),O=c(18),m=c.n(O),f=c(16),h=c.n(f),x=c(49),_=(c(27),c(28),c(1)),v=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(_.jsx)("div",{className:"item",children:Object(_.jsx)("textarea",{value:c,onChange:function(e){return i(e.target.value)},className:"item__input"})})},p=function(e){var t=e.title,c=Object(n.useState)([]),i=Object(l.a)(c,2),s=i[0],a=i[1],j=Object(n.useState)(void 0),r=Object(l.a)(j,2),o=r[0],u=r[1],b=Object(n.useRef)(null);Object(n.useEffect)((function(){a(s.filter((function(e){return o!==e.key})))}),[o]),Object(n.useEffect)((function(){var e=b.current;e.scrollTop=e.scrollHeight}),[s]);return Object(_.jsxs)("div",{className:"column",children:[Object(_.jsx)("h2",{children:t}),Object(_.jsx)("div",{className:"column__contentContainer",ref:b,children:s.length?s:Object(_.jsx)("div",{className:"column__empty",children:Object(_.jsx)("p",{children:"Add item"})})}),Object(_.jsx)("div",{className:"column__add",onClick:function(){var e=Object(x.a)(),t=Object(_.jsxs)("div",{className:"column__item",children:[Object(_.jsx)("div",{onClick:function(){return u(e)},className:"column__itemDelete",children:Object(_.jsx)(h.a,{className:"column__deleteIcon"})}),Object(_.jsx)(v,{})]},e),c=[].concat(Object(d.a)(s),[t]);a(c)},children:Object(_.jsx)(m.a,{className:"column__addIcon"})})]})},N=function(){var e=Object(n.useRef)(null),t=Object(j.a)(),c=Object(l.a)(t,2),i=(c[0],c[1]);return Object(_.jsxs)("div",{className:"app",ref:e,children:[Object(_.jsx)("div",{className:"app__download",onClick:function(){i(e.current).then((function(e){return b()(e,"sink-or-swim","image/png")})).catch((function(e){return console.log(e)}))},children:Object(_.jsx)(o.a,{})}),Object(_.jsx)("h1",{className:"app__title",children:"Sink or Swim"}),Object(_.jsxs)("div",{className:"app__columnsContainer",children:[Object(_.jsx)(p,{title:"Define"}),Object(_.jsx)(p,{title:"Prevent"}),Object(_.jsx)(p,{title:"Repair"}),Object(_.jsx)(p,{title:"Action benefits"}),Object(_.jsx)(p,{title:"Inaction effects"})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(N,{})}),document.getElementById("root")),g()}},[[36,1,2]]]);
//# sourceMappingURL=main.c85463a1.chunk.js.map