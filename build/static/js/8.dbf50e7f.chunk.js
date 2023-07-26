(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[8],{44:function(e,t,c){"use strict";var n=c(4),r=c.n(n),a=c(7),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(null),u=Object(s.a)(o,2),l=u[0],m=u[1],p=Object(i.useState)("waiting"),b=Object(s.a)(p,2),d=b[0],h=b[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(a.a)(r.a.mark((function e(t){var c,a,s,i,o,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},h("loading"),n(!0),e.prev=5,e.next=8,fetch(t,{method:c,body:a,headers:s});case 8:if((i=e.sent).ok){e.next=11;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 11:return e.next=13,i.json();case 13:return o=e.sent,n(!1),e.abrupt("return",o);case 18:throw e.prev=18,e.t0=e.catch(5),h("error"),n(!1),m(e.t0.message),e.t0;case 24:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:l,clearError:Object(i.useCallback)((function(){m(null),h("waiting")}),[]),process:d,setProcess:h}}(),t=e.loading,c=e.request,n=e.error,o=e.clearError,u=e.process,l=e.setProcess,m="https://gateway.marvel.com:443/v1/public/",p="apikey=681bf7ca5ce7abe51723e4d42426db24",b=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:210,e.next=3,c("".concat(m,"characters?limit=9&offset=").concat(t,"&").concat(p));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(g));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(m,"characters/").concat(t,"?").concat(p));case 2:return n=e.sent,e.abrupt("return",g(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(m,"characters?name=").concat(t,"&").concat(p));case 2:if(!((n=e.sent).data.results.length>0)){e.next=5;break}return e.abrupt("return",g(n.data.results[0]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,c("".concat(m,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(p));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(v));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(m,"comics/").concat(t,"?").concat(p));case 2:return n=e.sent,e.abrupt("return",v(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},v=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," pages"):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:n,clearError:o,getAllCharacters:b,getCharacter:d,getAllComics:j,getComic:f,getCharacterByName:h,process:u,setProcess:l}}},77:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c(2),a=c(15),s=c(0),i=c(49),o=c(44),u=c(23),l=c(24),m=(c(77),c(3)),p=function(e){var t=e.comic,c=t.title,n=t.description,r=t.pageCount,s=t.thumbnail,o=t.language,u=t.price;return Object(m.jsxs)("div",{className:"single-comic",children:[Object(m.jsxs)(i.a,{children:[Object(m.jsxs)("title",{children:[c," comics page"]}),Object(m.jsx)("meta",{name:"description",content:n})]}),Object(m.jsx)("img",{src:s,alt:c,className:"single-comic__img"}),Object(m.jsxs)("div",{className:"single-comic__info",children:[Object(m.jsx)("h2",{className:"single-comic__name",children:c}),Object(m.jsx)("p",{className:"single-comic__descr",children:n}),Object(m.jsx)("p",{className:"single-comic__descr",children:r}),Object(m.jsxs)("p",{className:"single-comic__descr",children:["Language: ",o]}),Object(m.jsx)("div",{className:"single-comic__price",children:u})]}),Object(m.jsx)(a.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})},b=function(e){var t=e.comic,c=t.name,n=t.description,r=t.thumbnail;return Object(m.jsxs)("div",{className:"single-comic",children:[Object(m.jsxs)(i.a,{children:[Object(m.jsxs)("title",{children:[c," character's page"]}),Object(m.jsx)("meta",{name:"description",content:n})]}),Object(m.jsx)("img",{src:r,alt:c,className:"single-comic__img"}),Object(m.jsxs)("div",{className:"single-comic__info",children:[Object(m.jsx)("h2",{className:"single-comic__name",children:c}),Object(m.jsx)("p",{className:"single-comic__descr",children:n})]}),Object(m.jsx)(a.b,{to:"/",className:"single-comic__back",children:"Back to all"})]})};t.default=function(){var e=Object(r.p)().codename,t=Object(s.useState)(null),c=Object(n.a)(t,2),a=c[0],i=c[1],d=Object(o.a)(),h=d.loading,j=d.error,f=d.getComic,g=d.clearError,v=d.getCharacterByName,O=(d.process,d.setProcess),x=e.match(/\d+/);Object(s.useEffect)((function(){w()}),[e]);var _,w=function(){g(),x?f(e).then(k).then((function(){return O("confirmed")})):v(e).then(k).then((function(){return O("confirmed")}))},k=function(e){i(e)},N=j?Object(m.jsx)(l.a,{}):null,C=h?Object(m.jsx)(u.a,{}):null;return h||j||!a||(_=x?Object(m.jsx)(p,{comic:a}):Object(m.jsx)(b,{comic:a})),Object(m.jsxs)(m.Fragment,{children:[N,C,_]})}}}]);
//# sourceMappingURL=8.dbf50e7f.chunk.js.map