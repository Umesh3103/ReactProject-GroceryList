(this.webpackJsonpgrocery_list=this.webpackJsonpgrocery_list||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(8),i=n.n(s),a=(n(16),n(11)),l=n(5),o=n(3),u=n(9),j=n(10),b=n(2),d=function(e){var t=e.type,n=e.msg,r=e.removeAlert;return Object(c.useEffect)((function(){var e=setTimeout((function(){r()}),2e3);return function(){return clearTimeout(e)}}),[]),Object(b.jsx)("p",{className:"alert alert-".concat(t),children:n})};var f=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(function(){var e=localStorage.getItem("list");return e?JSON.parse(e):[]}()),i=Object(o.a)(s,2),f=i[0],O=i[1],m=Object(c.useState)(!1),g=Object(o.a)(m,2),h=g[0],v=g[1],x=Object(c.useState)({show:!1,msg:"",type:""}),p=Object(o.a)(x,2),N=p[0],y=p[1],S=Object(c.useState)(null),C=Object(o.a)(S,2),I=C[0],k=C[1],w=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";y({show:e,msg:t,type:n})};return Object(c.useEffect)((function(){localStorage.setItem("list",JSON.stringify(f))}),[f]),Object(b.jsxs)("section",{className:"section-center",children:[Object(b.jsxs)("form",{className:"grocery-form",children:[N.show&&Object(b.jsx)(d,Object(l.a)(Object(l.a)({},N),{},{removeAlert:w})),Object(b.jsx)("h3",{children:"Grocery Bud"}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("input",{type:"text",placeholder:"e.g. eggs",value:n,onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("button",{className:"submit-btn",onClick:function(e){if(e.preventDefault(),n)if(n&&h)O(f.map((function(e){return e.id===I?Object(l.a)(Object(l.a)({},e),{},{title:n}):e}))),w(!0,"Value changed","success"),r(""),k(null),v(!1);else{w(!0,"Item added to the list","success");var t={id:(new Date).getTime().toString(),title:n};O([].concat(Object(a.a)(f),[t])),r("")}else w(!0,"Please enter value","danger")},children:h?"Edit":"submit"})]})]}),f.map((function(e){return Object(b.jsxs)("article",{className:"grocery-item",children:[Object(b.jsx)("p",{className:"title",children:e.title}),Object(b.jsxs)("div",{className:"btn-container",children:[Object(b.jsx)("button",{className:"edit-btn",onClick:function(){return function(e){var t=f.find((function(t){return t.id===e}));v(!0),k(e),r(t.title)}(e.id)},children:Object(b.jsx)(u.a,{})}),Object(b.jsx)("button",{className:"delete-btn",onClick:function(){return function(e){w(!0,"Item removed","danger");var t=f.filter((function(t){return t.id!==e}));O(t)}(e.id)},children:Object(b.jsx)(j.a,{})})]})]},e.id)})),f.length>0&&Object(b.jsx)("button",{className:"clear-btn",onClick:function(){w(!0,"Empty list","danger"),O([])},children:"Clear Items"})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.d562b98d.chunk.js.map