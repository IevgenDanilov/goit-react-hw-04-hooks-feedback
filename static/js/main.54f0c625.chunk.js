(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={listItem:"Statistics_listItem__2kwal",list:"Statistics_list__B1RR5"}},,,,,function(t,e,n){t.exports={btn:"FeedbackOptions_btn__8UILV"}},function(t,e,n){t.exports={title:"Section_title__1bqhY"}},function(t,e,n){t.exports={notif:"Notification_notif__oIn_U"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(6),a=n.n(s),o=(n(15),n(16),n(3)),r=n(5),l=n(10),j=n(2),b=n.n(j),u=n(0),d=function(t){var e=t.options,n=t.optionsValue,c=t.total,i=t.positivePercentage;return Object(u.jsx)("section",{children:Object(u.jsxs)("ul",{className:b.a.list,children:[e.map((function(t,e){return Object(u.jsxs)("li",{className:b.a.listItem,children:[t,": ",n[e]]},e)})),Object(u.jsxs)("li",{className:b.a.listItem,children:["Total: ",c||"0"]}),Object(u.jsxs)("li",{className:b.a.listItem,children:["Positive feedback: ",i||"0","%"]})]})})},f=n(7),O=n.n(f),h=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(u.jsx)(u.Fragment,{children:e.map((function(t,e){return Object(u.jsxs)("button",{type:"button",className:O.a.btn,name:t,onClick:n,children:[t,(0===e?"\u2b50\u2b50\u2b50":1===e&&"\u2b50\u2b50")||2===e&&"\u2b50"]},t)}))})},x=n(8),p=n.n(x),m=function(t){var e=t.title,n=t.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{className:p.a.title,children:e}),n]})},v=n(9),_=n.n(v),k=function(t){var e=t.message;return Object(u.jsx)("h2",{className:_.a.notif,children:e})},g=function(){var t=Object(c.useState)({good:0,neutral:0,bad:0}),e=Object(l.a)(t,2),n=e[0],i=e[1],s=function(){return n.good+n.neutral+n.bad},a=Object.keys(n),j=Object.values(n),b=s();return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{title:"Please leave feedback",children:Object(u.jsx)(h,{options:a,onLeaveFeedback:function(t){t.preventDefault();var e=t.currentTarget.name;i((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(o.a)({},e,t[e]+1))})),s()}})}),Object(u.jsx)(m,{title:"Statistics",children:b?Object(u.jsx)(d,{options:a,optionsValue:j,total:b,positivePercentage:function(){var t=s();return Math.round(n.good/t*100)}()}):Object(u.jsx)(k,{message:"No feedback given!"})})]})};var N=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(g,{})})};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.54f0c625.chunk.js.map