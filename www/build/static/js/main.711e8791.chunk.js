(this.webpackJsonpshiny_front_end=this.webpackJsonpshiny_front_end||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),i=n.n(a),o=(n(11),n(4)),r=n.n(o),l=n(6),u=n(2),j=n.p+"static/media/logo.6ce24c58.svg",d=n.p+"static/media/shiny_logo.ec1590fe.png",h=(n(13),n(0));var b=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),o=i[0],b=i[1],p=Object(c.useState)(""),g=Object(u.a)(p,2),O=g[0],f=g[1],m=Object(c.useState)(null),x=Object(u.a)(m,2),y=x[0],v=x[1],S=Object(c.useState)([]),_=Object(u.a)(S,2),w=_[0],A=_[1];window.Shiny.addCustomMessageHandler("message_from_shiny",(function(e){s(e)})),window.Shiny.addCustomMessageHandler("urls",(function(e){b(e),C(e),k(e.ggplot_url_svg)}));var C=function(){var e=Object(l.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.example_get_data_url).then((function(e){return e.json()}));case 2:n=e.sent,A(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=w.map((function(e){return Object(h.jsx)("li",{children:"".concat(e.county," (").concat(e.state,")")},e.PID)})),k=function(e){v("".concat(e,"&title=").concat(O))};return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(h.jsx)("img",{src:d,className:"App-logo",alt:"logo"})]}),Object(h.jsx)("p",{children:"I AM THE MESSAGE FROM REACT"}),Object(h.jsx)("i",{children:"whereas"}),Object(h.jsx)("p",{children:n}),Object(h.jsx)("p",{children:"but hey, you can send message back to Shiny (check your logs or notification):"}),Object(h.jsx)("input",{type:"text",onChange:function(e){window.Shiny.setInputValue("message_from_react",e.target.value)}}),Object(h.jsxs)("div",{className:"shiny-sections",children:[Object(h.jsxs)("div",{className:"shiny-section",children:[Object(h.jsxs)("p",{children:["And here ",Object(h.jsx)("code",{children:"ggplot"})," fetched from Shiny through REST API:"]}),Object(h.jsx)("input",{type:"text",placeholder:"New title",onChange:function(e){return f(e.target.value)}}),Object(h.jsx)("button",{type:"button",onClick:function(){return k(o.ggplot_url_svg)},className:"shiny-button",children:"Update title!"}),y?Object(h.jsx)("img",{src:y,alt:"GGPLOT2"}):null]}),Object(h.jsxs)("div",{className:"shiny-section",children:[Object(h.jsxs)("p",{children:["And below random counties from ",Object(h.jsx)("code",{children:"midwest"})," dataset fetched from Shiny through REST API:"]}),Object(h.jsx)("button",{type:"button",onClick:function(){C(o)},className:"shiny-button",children:"Reload list"}),Object(h.jsx)("ul",{children:N})]})]})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.711e8791.chunk.js.map