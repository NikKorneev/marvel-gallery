(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{44:function(e,t,c){"use strict";var a=c(4),n=c.n(a),r=c(7),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1],b=Object(i.useState)("waiting"),d=Object(s.a)(b,2),h=d[0],m=d[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(r.a)(n.a.mark((function e(t){var c,r,s,i,o,l=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},m("loading"),a(!0),e.prev=5,e.next=8,fetch(t,{method:c,body:r,headers:s});case 8:if((i=e.sent).ok){e.next=11;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 11:return e.next=13,i.json();case 13:return o=e.sent,a(!1),e.abrupt("return",o);case 18:throw e.prev=18,e.t0=e.catch(5),m("error"),a(!1),j(e.t0.message),e.t0;case 24:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){j(null),m("waiting")}),[]),process:h,setProcess:m}}(),t=e.loading,c=e.request,a=e.error,o=e.clearError,l=e.process,u=e.setProcess,j="https://gateway.marvel.com:443/v1/public/",b="apikey=681bf7ca5ce7abe51723e4d42426db24",d=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,c("".concat(j,"characters?limit=9&offset=").concat(t,"&").concat(b));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(j,"characters/").concat(t,"?").concat(b));case 2:return a=e.sent,e.abrupt("return",p(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(j,"characters?name=").concat(t,"&").concat(b));case 2:if(!((a=e.sent).data.results.length>0)){e.next=5;break}return e.abrupt("return",p(a.data.results[0]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,c("".concat(j,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(b));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(j,"comics/").concat(t,"?").concat(b));case 2:return a=e.sent,e.abrupt("return",x(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},x=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," pages"):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:a,clearError:o,getAllCharacters:d,getCharacter:h,getAllComics:O,getComic:f,getCharacterByName:m,process:l,setProcess:u}}},58:function(e,t,c){},59:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c(0),r=c(23),s=c(24),i=c(44),o=(c(58),c.p+"static/media/mjolnir.61f31e18.png"),l=c(3),u=function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],j=t[1],b=Object(i.a)(),d=b.loading,h=b.error,m=b.getCharacter,O=b.clearError;Object(n.useEffect)((function(){p();var e=setInterval(p,6e4);return function(){clearInterval(e)}}),[]);var f=function(e){j(e)},p=function(){O();var e=Math.floor(400*Math.random())+1011e3;m(e).then(f)},x=h?Object(l.jsx)(s.a,{}):null,_=d?Object(l.jsx)(r.a,{}):null,v=d||h||!c?null:Object(l.jsx)(u,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[x,_,v,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:p,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},b=c(8),d=c(83),h=c(85),m=(c(59),function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),o=c[0],u=c[1],j=Object(n.useState)(!1),m=Object(a.a)(j,2),O=m[0],f=m[1],p=Object(n.useState)(210),x=Object(a.a)(p,2),_=x[0],v=x[1],g=Object(n.useState)(!1),N=Object(a.a)(g,2),k=N[0],w=N[1],y=Object(i.a)(),C=y.loading,S=y.error,E=y.getAllCharacters,I=(y.process,y.setProcess);Object(n.useEffect)((function(){F(_,!0)}),[]);var P=Object(n.useRef)([]),F=function(e,t){f(!t),E(e).then(T).then((function(){return I("confirmed")}))},T=function(e){var t=!1;e.length<9&&(t=!0),u((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e))})),f(!1),v((function(e){return e+9})),w(t)},R=S?Object(l.jsx)(s.a,{}):null,q=C&&!O?Object(l.jsx)(r.a,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[q,R,Object(l.jsx)("ul",{children:Object(l.jsx)(h.a,{className:"char__grid",children:function(t){return t.map((function(t,c){return Object(l.jsx)(d.a,{classNames:"character",timeout:600*c,children:Object(l.jsxs)("li",{className:"char__item",tabIndex:0,onClick:function(){var a;e.onCharSelected(t.id),a=c,P.current.forEach((function(e){e.classList.remove("char__item_selected")})),P.current[a].classList.add("char__item_selected"),P.current[a].focus()},ref:function(e){return P.current[c]=e},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:"Image of"+t.name,style:t.thumbnail.indexOf("image_not_available")>-1?{objectFit:"unset"}:null}),Object(l.jsx)("div",{className:"char__name",children:t.name})]})},c)}))}(o)})}),Object(l.jsx)("button",{className:"button button__main button__long",disabled:O,onClick:function(){return F(_)},style:{display:k?"none":"block"},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),O=c(15),f=c(4),p=c.n(f),x=c(7),_=c(78),v=c(79),g=(c(69),function(e){var t=e.name,c=t.replace(/\s/,"%20");return Object(l.jsxs)("div",{className:"search__toPage",children:[Object(l.jsx)("p",{children:"There is! Visit ".concat(t," page?")}),Object(l.jsx)(O.b,{to:"/comics/".concat(c),className:"search__toPageBtn button button__main button__long",children:Object(l.jsx)("div",{className:"inner",children:"TO PAGE"})})]})}),N=function(){var e=Object(i.a)().getCharacterByName,t=Object(n.useState)(),c=Object(a.a)(t,2),r=c[0],s=c[1];return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("h2",{children:"Or find a character by name:"}),Object(l.jsx)(_.d,{initialValues:{name:""},validationSchema:v.a({name:v.b().required("This field is required")}),onSubmit:function(){var t=Object(x.a)(p.a.mark((function t(c,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,a.setSubmitting)(!1),t.next=4,e(c.name).then((function(e){s(e?Object(l.jsx)(g,{name:c.name}):Object(l.jsx)("p",{className:"search__error",children:"".concat(c.name," character was not found")}))}));case 4:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting;return Object(l.jsxs)(_.c,{className:"search__form",children:[Object(l.jsxs)("div",{className:"search__wrapper",children:[Object(l.jsx)(_.b,{type:"name",name:"name",className:"search__input"}),Object(l.jsx)("button",{type:"submit",disabled:t,className:"button button__main button__long",children:Object(l.jsx)("div",{className:"inner",children:"FIND"})})]}),Object(l.jsx)(_.a,{name:"name",component:"div",className:"search__error"})]})}}),r]})},k=(c(70),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),w=function(e,t,c){switch(e){case"waiting":return Object(l.jsx)(k,{});case"loading":return Object(l.jsx)(r.a,{});case"confirmed":return Object(l.jsx)(t,{data:c});case"error":return Object(l.jsx)(s.a,{});default:return Object(l.jsx)(k,{})}},y=(c(71),function(e){var t=e.data,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o=[];return function(e){if(0===e.length)o.push("No comics were found about this character.");else for(var t=0;t<e.length&&!(t>9);t++)o.push(Object(l.jsx)("li",{className:"char__comics-item",children:Object(l.jsx)(O.b,{to:"".concat(e[t].resourceURI.match(/comics\/\d+/gi)),children:e[t].name})},t))}(i),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:n,alt:c,style:n.indexOf("image_not_available")>-1?{objectFit:"unset"}:null}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsx)("ul",{className:"char__comics-list",children:o})]})}),C=function(e){var t=Object(n.useState)(null),c=Object(a.a)(t,2),r=c[0],s=c[1],o=Object(i.a)(),u=o.getCharacter,j=o.clearError,b=o.process,d=o.setProcess;Object(n.useEffect)((function(){m()}),[]);var h=Object(n.useRef)(e);Object(n.useEffect)((function(){e.charId!==h.charId&&m()}),[e]);var m=function(){j();var t=e.charId;t&&u(t).then(O).then((function(){return d("confirmed")}))},O=function(e){s(e)};return Object(l.jsxs)("div",{className:"char__params",children:[Object(l.jsx)("div",{className:"char__info",children:w(b,y,r)}),Object(l.jsx)(N,{})]})},S=c(27),E=c(49),I=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(E.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(l.jsx)("title",{children:"Marvel information - characters"})]}),Object(l.jsx)(j,{}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(m,{onCharSelected:function(e){r(e)}}),Object(l.jsx)(S.a,{children:Object(l.jsx)(C,{charId:c})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:I,alt:"vision"})]})}}}]);
//# sourceMappingURL=6.64c022ac.chunk.js.map