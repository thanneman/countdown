(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{24:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c.n(a),s=c(17),l=c.n(s),r=c(18),i=c(19),o=c(7);c(24);var j=function(e,t){var c=Object(a.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(a){return console.log(a),t}})),n=Object(o.a)(c,2),s=n[0],l=n[1];return[s,function(t){try{var c=t instanceof Function?t(s):t;l(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(a){console.log(a)}}]},d=c(33),u=c(32),b=c(34),h=c(36),m=c(6),O=c(0),x=function(e){var t=e.pastEvents,c=e.onDelete,a=t.slice().sort((function(e,t){return e.date>t.date?1:-1}));return Object(O.jsx)(O.Fragment,{children:a.map((function(e){return Object(O.jsxs)("div",{className:"event-contrainer ".concat(e.color),children:[Object(O.jsxs)("div",{className:"event-header",children:[Object(O.jsx)("h2",{className:"event-title",children:e.title}),Object(O.jsx)("span",{className:"event-category ".concat(e.color),children:Object(O.jsx)(m.a,{icon:e.type,fixedWidth:!0})})]}),Object(O.jsxs)("div",{className:"event-body",children:[Object(O.jsx)("div",{className:"event-icon",children:Object(O.jsx)(m.a,{icon:"check-circle"})}),Object(O.jsxs)("div",{className:"event-text",children:[Object(O.jsx)("span",{className:"event-timing",children:"Happened"}),Object(O.jsx)("span",{className:"event-date",children:Object(h.a)(Object(u.a)(e.date),{addSuffix:!0})})]}),Object(O.jsx)("button",{className:"btn-delete","aria-label":"Delete",onClick:function(){return c(e.id)},children:Object(O.jsx)(m.a,{icon:"trash-alt",fixedWidth:!0})})]})]},e.id)}))})},v=c(35),p=function(){return Object(O.jsx)("section",{className:"today-container",children:Object(O.jsxs)("div",{className:"today",children:[Object(O.jsxs)("div",{className:"today-block",children:[Object(O.jsx)("span",{className:"today-label",children:"Today is"}),Object(O.jsx)("span",{className:"today-date",children:Object(v.a)(new Date,"MMMM dd")})]}),Object(O.jsx)("span",{className:"arrow"})]})})},f=function(e){var t=e.upcomingEvents,c=e.onDelete,a=t.slice().sort((function(e,t){return e.date>t.date?1:-1}));return Object(O.jsx)(O.Fragment,{children:a.map((function(e){return Object(O.jsxs)("div",{className:"event-contrainer ".concat(e.type," ").concat(e.color),children:[Object(O.jsxs)("div",{className:"event-header",children:[Object(O.jsx)("h2",{className:"event-title",children:e.title}),Object(O.jsx)("span",{className:"event-category ".concat(e.color),children:Object(O.jsx)(m.a,{icon:e.type,fixedWidth:!0})})]}),Object(O.jsxs)("div",{className:"event-body",children:[Object(O.jsx)("span",{className:"event-icon",children:Object(O.jsx)(m.a,{icon:"clock"})}),Object(O.jsxs)("div",{className:"event-text",children:[Object(O.jsx)("span",{className:"event-timing",children:"Happening "}),Object(O.jsx)("span",{className:"event-date",children:Object(h.a)(Object(u.a)(e.date),{addSuffix:!0})})]}),Object(O.jsx)("button",{className:"btn-delete","aria-label":"Delete",onClick:function(){return c(e.id)},children:Object(O.jsx)(m.a,{icon:"trash-alt",fixedWidth:!0})})]})]},e.id)}))})},g=function(e){var t=e.onAdd,c=e.toggleModal,n=Object(a.useState)(""),s=Object(o.a)(n,2),l=s[0],r=s[1],i=Object(a.useState)(""),j=Object(o.a)(i,2),d=j[0],u=j[1],b=Object(a.useState)(""),h=Object(o.a)(b,2),x=h[0],v=h[1],p=Object(a.useState)(""),f=Object(o.a)(p,2),g=f[0],N=f[1],y=Object(a.useRef)();return Object(a.useEffect)((function(){y.current.focus()}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault();var c=d.toString();l?d?x?g?(t({title:l,date:c,type:x,color:g}),r(""),u(""),v(""),N("")):alert("Please select a color"):alert("Please add a category"):alert("Please add event date"):alert("Please add event title")},children:[Object(O.jsxs)("div",{className:"form-header",children:[Object(O.jsx)("h2",{children:"New Event"}),Object(O.jsx)("button",{className:"btn-close",onClick:function(e){e.preventDefault(),c()},children:Object(O.jsx)(m.a,{icon:"times",fixedWidth:!0})})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Title"}),Object(O.jsx)("input",{type:"text",placeholder:"Add Title",value:l,ref:y,onChange:function(e){return r(e.target.value)}})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Date"}),Object(O.jsx)("input",{type:"date",placeholder:"MM-DD-YYYY",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Category"}),Object(O.jsxs)("div",{className:"radio-categories",children:[Object(O.jsx)("input",{type:"radio",name:"categories",id:"holiday",value:"glass-cheers",checked:"glass-cheers"===x,onChange:function(e){return v(e.target.value)},className:"form-check-input"}),Object(O.jsx)("label",{className:"holiday",htmlFor:"holiday",children:Object(O.jsx)(m.a,{icon:"glass-cheers"})}),Object(O.jsx)("input",{type:"radio",name:"categories",id:"meeting",value:"user-friends",checked:"user-friends"===x,onChange:function(e){return v(e.target.value)},className:"form-check-input"}),Object(O.jsx)("label",{className:"meeting",htmlFor:"meeting",children:Object(O.jsx)(m.a,{icon:"user-friends"})}),Object(O.jsx)("input",{type:"radio",name:"categories",id:"task",value:"calendar-alt",checked:"calendar-alt"===x,onChange:function(e){return v(e.target.value)},className:"form-check-input"}),Object(O.jsx)("label",{className:"task",htmlFor:"task",children:Object(O.jsx)(m.a,{icon:"calendar-alt"})}),Object(O.jsx)("input",{type:"radio",name:"categories",id:"travel",value:"plane",checked:"plane"===x,onChange:function(e){return v(e.target.value)},className:"form-check-input"}),Object(O.jsx)("label",{className:"travel",htmlFor:"travel",children:Object(O.jsx)(m.a,{icon:"plane"})}),Object(O.jsx)("input",{type:"radio",name:"categories",id:"music",value:"music",checked:"music"===x,onChange:function(e){return v(e.target.value)},className:"form-check-input"}),Object(O.jsx)("label",{className:"music",htmlFor:"music",children:Object(O.jsx)(m.a,{icon:"music"})}),Object(O.jsx)("input",{type:"radio",name:"categories",id:"sports",value:"biking",checked:"biking"===x,onChange:function(e){return v(e.target.value)},className:"form-check-input"}),Object(O.jsx)("label",{className:"sports",htmlFor:"sports",children:Object(O.jsx)(m.a,{icon:"biking"})})]})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Color"}),Object(O.jsxs)("div",{className:"radio-colors",children:[Object(O.jsx)("input",{type:"radio",name:"color",id:"red",value:"red",checked:"red"===g,onChange:function(e){return N(e.target.value)},className:"form-check-input"}),Object(O.jsx)("label",{className:"red",htmlFor:"red"}),Object(O.jsx)("input",{type:"radio",name:"color",id:"green",value:"green",checked:"green"===g,onChange:function(e){return N(e.target.value)},className:"form-check-input"}),Object(O.jsx)("label",{className:"green",htmlFor:"green"}),Object(O.jsx)("input",{type:"radio",name:"color",id:"blue",value:"blue",checked:"blue"===g,onChange:function(e){return N(e.target.value)},className:"form-check-input"}),Object(O.jsx)("label",{className:"blue",htmlFor:"blue"}),Object(O.jsx)("input",{type:"radio",name:"color",id:"purple",value:"purple",checked:"purple"===g,onChange:function(e){return N(e.target.value)},className:"form-check-input"}),Object(O.jsx)("label",{className:"purple",htmlFor:"purple"}),Object(O.jsx)("input",{type:"radio",name:"color",id:"grey",value:"grey",checked:"grey"===g,onChange:function(e){return N(e.target.value)},className:"form-check-input"}),Object(O.jsx)("label",{className:"grey",htmlFor:"grey"})]})]}),Object(O.jsx)("button",{className:"btn-block",type:"submit",children:"Add Event"})]}),Object(O.jsx)("div",{className:"overlay"})]})},N=c(9),y=c(8),k=function(){N.b.add(y.h,y.c,y.d,y.i,y.g,y.k,y.b,y.e,y.a,y.f,y.j);var e=j("allEvents",[]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),l=Object(o.a)(s,2),h=l[0],v=l[1],k=Object(a.useState)([]),C=Object(o.a)(k,2),S=C[0],F=C[1],D=Object(a.useState)(!1),w=Object(o.a)(D,2),E=w[0],M=w[1],A=function(e){n(c.filter((function(t){return t.id!==e})))},W=function(){M(!E)};return Object(a.useEffect)((function(){v(c.filter((function(e){return Object(d.a)(Object(u.a)(e.date),new Date)}))),F(c.filter((function(e){return Object(b.a)(Object(u.a)(e.date),new Date)})))}),[c]),Object(O.jsxs)("div",{className:"App",children:[h.length>0?Object(O.jsx)(x,{pastEvents:h,onDelete:A}):"",Object(O.jsx)(p,{}),c.length<1?Object(O.jsxs)("div",{className:"no-events",children:["You have no events. ",Object(O.jsx)("button",{href:"#",onClick:W,children:"Add an event"})]}):"",S.length>0?Object(O.jsx)(f,{upcomingEvents:S,onDelete:A}):"",E&&Object(O.jsx)(g,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,a=Object(i.a)({id:t},e);n([].concat(Object(r.a)(c),[a])),M(!E)},toggleModal:W}),Object(O.jsx)("button",{className:"add-btn","aria-label":"Add Event",onClick:W,children:Object(O.jsx)(m.a,{icon:"plus"})})]})};l.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.0089ac6a.chunk.js.map