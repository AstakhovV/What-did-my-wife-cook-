(this.webpackJsonpwife=this.webpackJsonpwife||[]).push([[0],{25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(19),s=c.n(a),i=(c(25),c(4)),j=c(2),l=c(0);var o=function(){return Object(l.jsx)("nav",{className:"#ffd54f amber lighten-2",children:Object(l.jsxs)("div",{className:"nav-wrapper",children:[Object(l.jsxs)("a",{href:"/",className:"brand-logo",children:[Object(l.jsx)("i",{className:"material-icons",children:" "}),"What will my wife cook?"]}),Object(l.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/random",children:"Random Meal"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/area",children:"Country List"})})]})]})})};var b=function(){return Object(l.jsx)("footer",{className:"#ffd54f amber lighten-2",children:Object(l.jsx)("div",{className:"footer-copyright",children:Object(l.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(l.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/AstakhovV",children:"AstakhovV"})]})})})},d=c(5),u=c(8),h=c.n(u),O=c(11),m="https://www.themealdb.com/api/json/v1/".concat("1","/"),x=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"random.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"list.php?a=list");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"filter.php?a="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function w(){return Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"indeterminate"})})}var y=c(12);var k=function(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(l.jsxs)("div",{className:"card hoverable",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("img",{className:"card-item",src:c,alt:t})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)("span",{className:"card-title ",children:t}),Object(l.jsx)("p",{className:"truncate",children:n})]}),Object(l.jsx)("div",{className:"card-action",children:Object(l.jsx)(i.b,{to:"/category/".concat(t),className:"btn",children:"Watch category"})})]})};var C=function(e){var t=e.catalog,c=void 0===t?[]:t;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"list",children:c.map((function(e){return Object(l.jsx)(k,Object(y.a)({},e),e.idCategory)}))})})};var M=function(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(""),a=Object(d.a)(r,2),s=a[0],i=a[1],j=function(){c(s),i("")};return Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"input-field col s12",children:[Object(l.jsx)("input",{type:"search",id:"search-field",placeholder:"Search",onKeyDown:function(e){"Enter"===e.key&&j()},onChange:function(e){return i(e.target.value)},value:s}),Object(l.jsx)("button",{className:"btn search-btn",onClick:j,children:"Search"})]})})};var S=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(d.a)(a,2),i=s[0],o=s[1],b=Object(j.g)(),u=b.pathname,h=b.search,O=Object(j.f)().push;return Object(n.useEffect)((function(){f().then((function(e){r(e.categories),o(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLowerCase())})):e.categories)}))}),[h]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{cb:function(e){o(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:u,search:"?search=".concat(e)})}}),c?Object(l.jsx)(C,{catalog:i}):Object(l.jsx)(w,{})]})};var F=function(e){var t=e.randomMeal,c=t.strMeal,n=t.strCategory,r=t.strArea,a=t.strInstructions,s=t.strMealThumb,i=t.strYoutube;return Object(l.jsxs)("div",{className:"card ",children:[Object(l.jsx)("h2",{className:"header center-align",children:c}),Object(l.jsx)("div",{className:"card-image center-content",children:Object(l.jsx)("img",{className:"card-meal-item",src:s,alt:c})}),Object(l.jsxs)("div",{className:"card-stacked ",children:[Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("p",{children:["Category: ",n]}),r?Object(l.jsxs)("p",{children:["Area: ",r]}):null,Object(l.jsx)("p",{children:a})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"highlight responsive-table centered",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Ingredient"}),Object(l.jsx)("th",{children:"Picture"}),Object(l.jsx)("th",{children:"Measure"})]})}),Object(l.jsx)("tbody",{children:Object.keys(e.randomMeal).map((function(t){return t.includes("Ingredient")&&e.randomMeal[t]?Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.randomMeal[t]}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{className:"ing-image",src:"https://www.themealdb.com/images/ingredients/".concat(e.randomMeal[t],"-Small.png"),alt:e.randomMeal[t]})}),Object(l.jsx)("td",{children:e.randomMeal["strMeasure".concat(t.slice(13))]})]},t):null}))})]})}),i?Object(l.jsxs)("div",{className:"row center-align",children:[Object(l.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"Video Recipe"}),Object(l.jsx)("iframe",{title:e.id,allowFullScreen:!0,src:"https://www.youtube.com/embed/".concat(i.slice(-11)),frameBorder:"0"})]}):null]})]})};var B=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(d.a)(a,2),i=s[0],o=s[1],b=Object(j.f)().goBack;return Object(n.useEffect)((function(){v().then((function(e){return r(e.meals[0])}))}),[i]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"btn",onClick:b,children:"Go Back"}),Object(l.jsx)("button",{className:"btn right",onClick:function(){o(!i)},children:"Get Random"}),c.idMeal?Object(l.jsx)(F,{randomMeal:c}):Object(l.jsx)(w,{})]})};var A=function(){return Object(l.jsx)("h1",{children:"Page not found"})};var L=function(e){var t=e.strMeal,c=e.strMealThumb,n=e.idMeal;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card hoverable",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("img",{src:c,alt:t})}),Object(l.jsx)("div",{className:"card-content",children:Object(l.jsx)("span",{className:"card-title ",children:t})}),Object(l.jsx)("div",{className:"card-action",children:Object(l.jsx)(i.b,{to:"/meal/".concat(n),className:"btn",children:"Watch recipe"})})]})})};var E=function(e){var t=e.meals,c=void 0===t?[]:t,n=Object(j.f)().goBack;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"btn",onClick:n,children:"Go Back"}),Object(l.jsx)("div",{className:"list",children:c.map((function(e){return Object(l.jsx)(L,Object(y.a)({},e),e.idMeal)}))})]})};var I=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(j.h)().name,s=Object(n.useState)([]),i=Object(d.a)(s,2),o=i[0],b=i[1],u=Object(j.g)(),h=u.pathname,O=u.search,m=Object(j.f)().push;return Object(n.useEffect)((function(){p(a).then((function(e){r(e.meals),b(O?e.meals.filter((function(e){return e.strMeal.toLowerCase().includes(O.split("=")[1].toLowerCase())})):e.meals)}))}),[O]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{cb:function(e){b(c.filter((function(t){return t.strMeal.toLowerCase().includes(e.toLowerCase())}))),m({pathname:h,search:"?search=".concat(e)})}}),c?Object(l.jsx)(E,{meals:o}):Object(l.jsx)(w,{})]})};var G=function(e){var t=e.recipe,c=t.strMeal,n=t.strCategory,r=t.strArea,a=t.strInstructions,s=t.strMealThumb,i=t.strYoutube;return Object(l.jsxs)("div",{className:"card ",children:[Object(l.jsx)("h2",{className:"header center-align",children:c}),Object(l.jsx)("div",{className:"card-image center-content",children:Object(l.jsx)("img",{className:"card-meal-item",src:s,alt:c})}),Object(l.jsxs)("div",{className:"card-stacked ",children:[Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("p",{children:["Category: ",n]}),r?Object(l.jsxs)("p",{children:["Area: ",r]}):null,Object(l.jsx)("p",{children:a})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"highlight responsive-table centered",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Ingredient"}),Object(l.jsx)("th",{children:"Picture"}),Object(l.jsx)("th",{children:"Measure"})]})}),Object(l.jsx)("tbody",{children:Object.keys(e.recipe).map((function(t){return t.includes("Ingredient")&&e.recipe[t]?Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.recipe[t]}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{className:"ing-image",src:"https://www.themealdb.com/images/ingredients/".concat(e.recipe[t],"-Small.png"),alt:e.recipe[t]})}),Object(l.jsx)("td",{children:e.recipe["strMeasure".concat(t.slice(13))]})]},t):null}))})]})}),i?Object(l.jsxs)("div",{className:"row center-align",children:[Object(l.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"Video Recipe"}),Object(l.jsx)("iframe",{title:e.id,allowFullScreen:!0,src:"https://www.youtube.com/embed/".concat(i.slice(-11)),frameBorder:"0"})]}):null]})]})};var T=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(j.h)().id,s=Object(j.f)().goBack;return Object(n.useEffect)((function(){x(a).then((function(e){return r(e.meals[0])}))}),[a]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"btn",onClick:s,children:"Go Back"}),c.idMeal?Object(l.jsx)(G,{recipe:c,id:a}):Object(l.jsx)(w,{})]})};var R=function(){var e=Object(j.f)().goBack,t=Object(n.useState)([]),c=Object(d.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){g().then((function(e){return a(e.meals)}))})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"btn",onClick:e,children:"Go Back"}),r?Object(l.jsx)("div",{className:"listArea",children:r.map((function(e){return Object(l.jsxs)(i.b,{to:"/country/".concat(e.strArea),className:"waves-effect waves-light btn-large",children:[Object(l.jsx)("i",{className:"material-icons left",children:"search"}),e.strArea]},e.strArea)}))}):Object(l.jsx)(w,{})]})};var V=function(){var e=Object(j.f)().goBack,t=Object(j.h)().name,c=Object(n.useState)([]),r=Object(d.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){N(t).then((function(e){return s(e.meals)}))}),[t]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"btn",onClick:e,children:"Go Back"}),Object(l.jsx)("div",{className:"center-align",children:Object(l.jsxs)("h3",{children:[t," meals"]})}),a?Object(l.jsx)("div",{className:"list",children:a.map((function(e){return Object(l.jsx)(L,Object(y.a)({},e),e.idMeal)}))}):Object(l.jsx)(w,{})]})};var W=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{basename:"/What-will-my-wife-cook",children:[Object(l.jsx)(o,{}),Object(l.jsx)("main",{className:"container content",children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",children:Object(l.jsx)(S,{})}),Object(l.jsx)(j.a,{path:"/random",component:B}),Object(l.jsx)(j.a,{path:"/area",component:R}),Object(l.jsx)(j.a,{path:"/country/:name",component:V}),Object(l.jsx)(j.a,{path:"/category/:name",component:I}),Object(l.jsx)(j.a,{path:"/meal/:id",component:T}),Object(l.jsx)(j.a,{component:A})]})}),Object(l.jsx)(b,{})]})})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(W,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.162ab583.chunk.js.map