(this["webpackJsonpcryptocurrency-converter"]=this["webpackJsonpcryptocurrency-converter"]||[]).push([[0],{26:function(n,e,t){},49:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(1),a=t.n(c),o=t(18),i=t.n(o),s=(t(26),t(6)),u=t.n(s),l=t(7),f=t(4),j=t(2),d=t(3),b=t.p+"static/media/cryptomonedas.51f1d2ed.png";function p(){var n=Object(j.a)(["\n  width: 100%;\n  display: block;\n  padding: 1rem;\n  -webkit-appearance: none;\n  border-radius: 10px;\n  border: none;\n  font-size: 1.2rem;\n"]);return p=function(){return n},n}function m(){var n=Object(j.a)(["\n  font-family: 'Bebas Neue', cursive;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 2.4rem;\n  margin-top: 2rem;\n  display: block;\n"]);return m=function(){return n},n}var O=d.a.label(m()),h=d.a.select(p()),x=function(n,e,t){var a=Object(c.useState)(e),o=Object(f.a)(a,2),i=o[0],s=o[1];return[i,function(){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)(O,{children:n}),Object(r.jsxs)(h,{onChange:function(n){return s(n.target.value)},value:i,children:[Object(r.jsx)("option",{value:"",children:"-- Select a currency --"}),t.map((function(n){return Object(r.jsx)("option",{value:n.cod,children:n.name},n.cod)}))]})]})},s]};function v(){var n=Object(j.a)(["\n  width: 100%;\n  display: block;\n  padding: 1rem;\n  -webkit-appearance: none;\n  border-radius: 10px;\n  border: none;\n  font-size: 1.2rem;\n"]);return v=function(){return n},n}function g(){var n=Object(j.a)(["\n  font-family: 'Bebas Neue', cursive;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 2.4rem;\n  margin-top: 2rem;\n  display: block;\n"]);return g=function(){return n},n}var y=d.a.label(g()),k=d.a.select(v()),C=function(n,e,t){var a=Object(c.useState)(e),o=Object(f.a)(a,2),i=o[0],s=o[1];return[i,function(){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)(y,{children:n}),Object(r.jsxs)(k,{onChange:function(n){return s(n.target.value)},value:i,children:[Object(r.jsx)("option",{value:"",children:"-- Select a cripto --"}),t.map((function(n){return Object(r.jsx)("option",{value:n.CoinInfo.Name,children:n.CoinInfo.FullName},n.CoinInfo.Id)}))]})]})},s]},w=t(8),S=t.n(w);function N(){var n=Object(j.a)(["\n  background-color: #b7322c;\n  padding: 1rem;\n  color: #fff;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n  font-family: 'Bebas Neue', cursive;\n"]);return N=function(){return n},n}var A=d.a.p(N()),D=function(n){var e=n.message;return Object(r.jsx)(A,{children:e})};function z(){var n=Object(j.a)(["\n  margin-top: 20px;\n  font-weight: 700;\n  font-size: 20px;\n  padding: 10px;\n  background-color: #66a2fe;\n  border: none;\n  width: 100%;\n  border-radius: 10px;\n  color: #fff;\n  transition: all linear 0.25s;\n\n  &:hover{\n    background-color: #326AC0;\n  }\n"]);return z=function(){return n},n}var E=d.a.input(z()),I=function(n){var e=n.setCurrency,t=n.setCriptoCurrency,a=Object(c.useState)([]),o=Object(f.a)(a,2),i=o[0],s=o[1],j=Object(c.useState)(!1),d=Object(f.a)(j,2),b=d[0],p=d[1],m=x("Choose your currency","",[{cod:"USD",name:"American Dollar"},{cod:"COP",name:"Colombian Peso"},{cod:"MXN",name:"Mexican Peso"},{cod:"EUR",name:"Euro"}]),O=Object(f.a)(m,2),h=O[0],v=O[1],g=C("Choose your cripto currency","",i),y=Object(f.a)(g,2),k=y[0],w=y[1];Object(c.useEffect)((function(){(function(){var n=Object(l.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",n.next=3,S.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");case 3:e=n.sent,s(e.data.Data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);return Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==h&&""!==k?(p(!1),e(h),t(k)):p(!0)},children:[b?Object(r.jsx)(D,{message:"All fields are required"}):null,Object(r.jsx)(v,{}),Object(r.jsx)(w,{}),Object(r.jsx)(E,{type:"submit",value:"Calculate"})]})};function P(){var n=Object(j.a)(["\n  font-size: 30px;\n\n  span {\n    font-weight:900\n  }\n"]);return P=function(){return n},n}function F(){var n=Object(j.a)(["\n  font-size: 18px;\n\n  span {\n    font-weight:900\n  }\n"]);return F=function(){return n},n}function L(){var n=Object(j.a)(["\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n"]);return L=function(){return n},n}var T=d.a.div(L()),B=d.a.p(F()),H=d.a.p(P()),U=function(n){var e=n.result;return 0===Object.keys(e).length?null:Object(r.jsxs)(T,{children:[Object(r.jsxs)(H,{children:["The price is:",Object(r.jsxs)("span",{children:[" ",e.PRICE]})]}),Object(r.jsxs)(B,{children:["Higher price of day:",Object(r.jsxs)("span",{children:[" ",e.HIGHDAY]})]}),Object(r.jsxs)(B,{children:["Lower price of day:",Object(r.jsxs)("span",{children:[" ",e.LOWDAY]})]}),Object(r.jsxs)(B,{children:["Changes on last 24 hours:",Object(r.jsxs)("span",{children:[" ",e.CHANGEPCT24HOUR]})]}),Object(r.jsxs)(B,{children:["Last update:",Object(r.jsxs)("span",{children:[" ",e.LASTUPDATE]})]})]})},M=(t(49),function(){return Object(r.jsxs)("div",{className:"sk-chase",children:[Object(r.jsx)("div",{className:"sk-chase-dot"}),Object(r.jsx)("div",{className:"sk-chase-dot"}),Object(r.jsx)("div",{className:"sk-chase-dot"}),Object(r.jsx)("div",{className:"sk-chase-dot"}),Object(r.jsx)("div",{className:"sk-chase-dot"}),Object(r.jsx)("div",{className:"sk-chase-dot"})]})});function R(){var n=Object(j.a)(["\n  font-family: 'Bebas Neue', cursive;\n  color: #fff;\n  text-align: left;\n  font-weight: 700;\n  font-size: 50px;\n  margin-bottom: 50px;\n  margin-top: 80px;\n\n  &::after {\n    content: '';\n    width: 100px;\n    height: 6px;\n    background-color: #66A2FE;\n    display: block;\n  }\n"]);return R=function(){return n},n}function Y(){var n=Object(j.a)(["\n  max-width: 100%;\n  margin-top: 5rem;\n"]);return Y=function(){return n},n}function G(){var n=Object(j.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n  @media (min-width:992px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 2rem;\n  }\n"]);return G=function(){return n},n}var J=d.a.div(G()),Q=d.a.img(Y()),q=d.a.h1(R());var W=function(){var n=Object(c.useState)(""),e=Object(f.a)(n,2),t=e[0],a=e[1],o=Object(c.useState)(""),i=Object(f.a)(o,2),s=i[0],j=i[1],d=Object(c.useState)({}),p=Object(f.a)(d,2),m=p[0],O=p[1],h=Object(c.useState)(!1),x=Object(f.a)(h,2),v=x[0],g=x[1];Object(c.useEffect)((function(){""!==t&&(function(){var n=Object(l.a)(u.a.mark((function n(){var e,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(s,"&tsyms=").concat(t),n.next=3,S.a.get(e);case 3:r=n.sent,g(!0),setTimeout((function(){g(!1),O(r.data.DISPLAY[s][t])}),2e3);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),console.log("Quoting..."))}),[t,s]);var y=v?Object(r.jsx)(M,{}):Object(r.jsx)(U,{result:m});return Object(r.jsxs)(J,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(Q,{src:b,alt:"Crypto image"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(q,{children:"Quote cryptocurrencies"}),Object(r.jsx)(I,{setCurrency:a,setCriptoCurrency:j}),y]})]})},X=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(W,{})}),document.getElementById("root")),X()}},[[50,1,2]]]);
//# sourceMappingURL=main.adea30fe.chunk.js.map