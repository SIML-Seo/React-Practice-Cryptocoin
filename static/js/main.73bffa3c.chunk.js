(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{67:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(25),o=t.n(r),a=t(14),s=t(7),l=t(8),d=t(16),j=t(4),b="https://api.coinpaprika.com/v1";function h(){return fetch("".concat(b,"/coins")).then((function(n){return n.json()}))}var p=t(39),u=t.n(p),x=t(1);var O,f,m,g,v,y,k,w,C,I=function(){var n=Object(j.i)().coinId,e=Object(a.useQuery)(["ohlcv",n],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(b,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(n)}),{refetchInterval:1e4}),t=e.isLoading,c=e.data;return Object(x.jsx)("div",{children:t?"Loading Chart...":Object(x.jsx)(u.a,{type:"candlestick",series:[{data:null===c||void 0===c?void 0:c.map((function(n){return{x:new Date(n.time_open),y:[n.open,n.high,n.low,n.close]}}))}],options:{theme:{mode:"dark"},chart:{height:500,type:"candlestick"},title:{text:"CandleStick Chart",align:"left"},xaxis:{type:"datetime"},yaxis:{show:!1,tooltip:{enabled:!0}}}})})},q=t(26),L=s.c.div(O||(O=Object(l.a)(["\npadding: 0px 20px;\nmax-width: 480px;\nmargin: 0 auto;\n"]))),S=s.c.header(f||(f=Object(l.a)(["\nheight: 10vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"]))),P=s.c.h1(m||(m=Object(l.a)(["\nfont-size: 48px;\ncolor: ",";\n"])),(function(n){return n.theme.accentColor})),Q=s.c.span(g||(g=Object(l.a)(["\ntext-align: center;\ndisplay: block;\n"]))),z=s.c.div(v||(v=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    background-color: rgba(0,0,0,0.5);\n    padding: 10px 20px;\n    border-radius: 10px;\n"]))),M=s.c.div(y||(y=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    span:first-child{\n        font-size: 10px;\n        font-weight: 400;\n        text-transform: uppercase;\n        margin-bottom: 5px;\n    }\n"]))),D=s.c.p(k||(k=Object(l.a)(["\n    margin: 20px 0px;\n"]))),A=s.c.div(w||(w=Object(l.a)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    margin: 25px 0px;\n    gap: 10px;\n"]))),R=s.c.span(C||(C=Object(l.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 400;\n    background-color: rgba(0,0,0,0.5);\n    padding: 7px 0px;\n    border-radius: 10px;\n    color: ",";\n    a {\n        display: block;\n    }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var T,_,F,H,J,B,E,U=function(){var n=Object(j.j)().coinId,e=Object(j.f)().state,t=Object(j.g)("/:coinId/price"),c=Object(j.g)("/:coinId/chart"),i=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(b,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:1e4}),r=i.isLoading,o=i.data,s=Object(a.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(b,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),l=s.isLoading,h=s.data,p=r||l;return Object(x.jsxs)(L,{children:[Object(x.jsx)(q.a,{children:Object(x.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:p?"Loading..":null===o||void 0===o?void 0:o.name})}),Object(x.jsx)(S,{children:Object(x.jsx)(P,{children:(null===e||void 0===e?void 0:e.name)?e.name:p?"Loading..":null===o||void 0===o?void 0:o.name})}),p?Object(x.jsx)(Q,{children:"loading..."}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(z,{children:[Object(x.jsxs)(M,{children:[Object(x.jsx)("span",{children:"Rank:"}),Object(x.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(x.jsxs)(M,{children:[Object(x.jsx)("span",{children:"Symbol:"}),Object(x.jsx)("span",{children:null===o||void 0===o?void 0:o.symbol})]}),Object(x.jsxs)(M,{children:[Object(x.jsx)("span",{children:"Price:"}),Object(x.jsx)("span",{children:null===h||void 0===h?void 0:h.quotes.USD.price})]})]}),Object(x.jsx)(D,{children:null===o||void 0===o?void 0:o.description}),Object(x.jsxs)(z,{children:[Object(x.jsxs)(M,{children:[Object(x.jsx)("span",{children:"Total Supply:"}),Object(x.jsx)("span",{children:null===h||void 0===h?void 0:h.total_supply})]}),Object(x.jsxs)(M,{children:[Object(x.jsx)("span",{children:"Max Supply:"}),Object(x.jsx)("span",{children:null===h||void 0===h?void 0:h.max_supply})]})]}),Object(x.jsxs)(A,{children:[Object(x.jsx)(R,{isActive:null!==c,children:Object(x.jsx)(d.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(x.jsx)(R,{isActive:null!==t,children:Object(x.jsx)(d.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(x.jsx)(j.a,{context:{coinId:n}})]})]})},G=s.c.div(T||(T=Object(l.a)(["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin: 0 auto;\n"]))),K=s.c.header(_||(_=Object(l.a)(["\n    height: 10vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),N=s.c.ul(F||(F=Object(l.a)(["\n\n"]))),V=s.c.li(H||(H=Object(l.a)(["\n    background-color: white;\n    color: ",";\n    margin-bottom: 15px;\n    border-radius: 15px;\n    a{\n        display: flex;\n        align-items: center;\n        padding: 20px;  \n        transition: color 0.2s ease-in;\n    }\n    &:hover{\n        a{\n            color:","\n        }\n    }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),W=s.c.h1(J||(J=Object(l.a)(["\n    font-size: 48px;\n    color: ",";\n"])),(function(n){return n.theme.accentColor})),X=s.c.span(B||(B=Object(l.a)(["\n    text-align: center;\n    display: block;\n"]))),Y=s.c.img(E||(E=Object(l.a)(["\n    width: 35px;\n    height: 35px;\n    margin-right: 10px;\n"])));var Z=function(){var n=Object(a.useQuery)("allCoins",h),e=n.isLoading,t=n.data;return Object(x.jsxs)(G,{children:[Object(x.jsx)(q.a,{children:Object(x.jsx)("title",{children:"\ucf54\uc778"})}),Object(x.jsx)(K,{children:Object(x.jsx)(W,{children:"\ucf54\uc778"})}),e?Object(x.jsx)(X,{children:"loading..."}):Object(x.jsx)(N,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(x.jsx)(V,{children:Object(x.jsxs)(d.b,{to:{pathname:"/".concat(n.id)},state:{name:n.name},children:[Object(x.jsx)(Y,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var $=function(){return Object(x.jsx)("h1",{children:"Price"})};var nn,en=function(){return Object(x.jsx)(d.a,{basename:"/React-Practice-Cryptocoin",children:Object(x.jsxs)(j.d,{children:[Object(x.jsx)(j.b,{path:"/",element:Object(x.jsx)(Z,{})}),Object(x.jsxs)(j.b,{path:"/:coinId",element:Object(x.jsx)(U,{}),children:[Object(x.jsx)(j.b,{path:"chart",element:Object(x.jsx)(I,{})}),Object(x.jsx)(j.b,{path:"price",element:Object(x.jsx)($,{})})]})]})})},tn=t(45),cn=Object(s.b)(nn||(nn=Object(l.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, menu, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  main, menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, main, menu, nav, section {\n    display: block;\n  }\n  /* HTML5 hidden-attribute fix for newer browsers */\n  *[hidden] {\n      display: none;\n  }\n  body {\n    line-height: 1;\n  }\n  menu, ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  *{\n    box-sizing: border-box;\n  }\n  body{\n    font-family: 'Source Sans Pro', sans-serif;\n    background-color: ",";\n    color: ",";\n  }\n  a{\n    text-decoration: none;\n    color:inherit;\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var rn=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(cn,{}),Object(x.jsx)(en,{}),Object(x.jsx)(tn.ReactQueryDevtools,{initialIsOpen:!0})]})},on=new a.QueryClient;o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(a.QueryClientProvider,{client:on,children:Object(x.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#44bd32"},children:Object(x.jsx)(rn,{})})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.73bffa3c.chunk.js.map