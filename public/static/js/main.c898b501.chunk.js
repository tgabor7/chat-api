(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{19:function(e,t,s){},20:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(14),r=s.n(c),i=(s(19),s(2)),j=(s.p,s(20),s(0));var o=function(e){return e.show?Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"dialogContainer",children:[Object(j.jsx)("p",{children:e.message}),Object(j.jsx)("input",{type:"button",onClick:function(){e.setShow(!1)},value:"OK"})]})}):Object(j.jsx)("div",{})},l=s(5);var u=function(e){var t=Object(n.useState)(""),s=Object(i.a)(t,2),a=s[0],c=s[1],r=Object(n.useState)(""),u=Object(i.a)(r,2),d=u[0],b=u[1],O=Object(n.useState)(""),h=Object(i.a)(O,2),p=h[0],m=h[1],x=Object(n.useState)(""),g=Object(i.a)(x,2),v=g[0],f=g[1],N=Object(n.useState)(""),C=Object(i.a)(N,2),S=C[0],y=C[1],k=Object(n.useState)(""),w=Object(i.a)(k,2),P=w[0],I=w[1],F=Object(n.useState)(""),H=Object(i.a)(F,2),U=H[0],q=H[1],L=Object(n.useState)(""),R=Object(i.a)(L,2),B=R[0],E=R[1],T=Object(n.useState)(!1),A=Object(i.a)(T,2),D=A[0],J=A[1],K=function(){return(d.length<8?(I("Password is too short"),!1):(I(""),p!==d?(q("Confirm password has to be the same as password!"),!1):(q(""),!0)))&&(v.includes("@")?(y(""),!0):(y("Enter a valid e-mail!"),!1))};return 1===e.page?Object(j.jsxs)("div",{className:"loginContainer",children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"Input",children:[Object(j.jsx)("input",{required:!0,value:a,onChange:function(e){c(e.target.value)},type:"text"}),Object(j.jsx)("div",{className:"placeHolder",children:"Username"})]}),Object(j.jsxs)("div",{className:"Input",children:[Object(j.jsx)("input",{required:!0,type:"password",value:d,onChange:function(e){b(e.target.value)}}),Object(j.jsx)("div",{className:"placeHolder",children:"Password"})]}),Object(j.jsxs)("p",{children:["Don't have an account?",Object(j.jsx)("a",{onClick:function(){e.setPage(2)},children:"Sign up!"})]}),Object(j.jsx)("input",{className:"loginButton",type:"button",value:"Login",onClick:function(){l.post("http://localhost:4000/user/login",{name:a,password:d}).then((function(t){"Failed to login!"===t.data||"User not found"===t.data?alert(t.data):(e.login(a),e.setSender(a),e.updateUsers(a))}))}})]})]}):2===e.page?Object(j.jsxs)("div",{className:"loginContainer",children:[Object(j.jsx)("h1",{children:"Register"}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"Input",children:[Object(j.jsx)("input",{required:!0,type:"text",value:a,onChange:function(e){c(e.target.value)}}),Object(j.jsx)("div",{className:"placeHolder",children:"Username"}),Object(j.jsx)("div",{className:"error",children:B})]}),Object(j.jsxs)("div",{className:"Input",children:[Object(j.jsx)("input",{required:!0,type:"text",value:v,onChange:function(e){f(e.target.value)}}),Object(j.jsx)("div",{className:"placeHolder",children:"e-mail"}),Object(j.jsx)("div",{className:"error",children:S})]}),Object(j.jsxs)("div",{className:"Input",children:[Object(j.jsx)("input",{required:!0,type:"password",value:d,onChange:function(e){b(e.target.value)}}),Object(j.jsx)("div",{className:"placeHolder",children:"Password"}),Object(j.jsx)("div",{className:"error",children:P})]}),Object(j.jsxs)("div",{className:"Input",children:[Object(j.jsx)("input",{required:!0,type:"password",value:p,onChange:function(e){m(e.target.value)}}),Object(j.jsx)("div",{className:"placeHolder",children:"Confirm password"}),Object(j.jsx)("div",{className:"error",children:U})]}),Object(j.jsxs)("p",{children:["Already have an account?",Object(j.jsx)("a",{onClick:function(){e.setPage(1)},children:"Log in!"})]}),Object(j.jsx)("input",{className:"loginButton",type:"button",value:"Register",onClick:function(){K()&&l.post("http://localhost:4000/user/register",{name:a,password:d}).then((function(e){"ok"===e.data&&J(!0),"Username taken"===e.data&&E("Username taken!")}))}})]}),Object(j.jsx)(o,{show:D,setShow:J,message:"Registered succesfully!"})]}):Object(j.jsx)("div",{})};s(5);var d=function(e){return 3!==e.page?Object(j.jsx)("div",{}):Object(j.jsxs)("div",{className:"dashboardContainer",children:[Object(j.jsx)("p",{children:"Available users"}),e.users]})};var b=function(){return Object(j.jsx)("div",{className:"footerContainer",children:Object(j.jsxs)("footer",{children:[Object(j.jsx)("p",{children:"Created by: Tark\xf3 G\xe1bor"}),Object(j.jsxs)("p",{children:["e-mail: ",Object(j.jsx)("a",{href:"mailto:tgabor7@gmail.com",children:"tgabor7@gmail.com"})]}),Object(j.jsx)("p",{children:Object(j.jsx)("a",{href:"mailto:https://github.com/tgabor7",children:"tgabor7"})})]})})};var O=function(e){return""===e.sender?Object(j.jsxs)("div",{className:"header",children:[" Chat app ",e.sender,Object(j.jsx)("input",{style:{float:"right"},type:"button",value:"login",onClick:function(){e.setPage(1)}})]}):Object(j.jsxs)("div",{className:"header",children:[" Chat app  ",Object(j.jsxs)("div",{children:["Logged in as ",Object(j.jsx)("div",{className:"username",children:e.sender}),Object(j.jsx)("input",{type:"button",value:"logout",onClick:function(){e.logout(),e.setPage(1)}})]})]})},h=s(5);var p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),l=o[0],p=o[1],m=Object(n.useState)(1),x=Object(i.a)(m,2),g=x[0],v=x[1],f=Object(n.useState)(""),N=Object(i.a)(f,2),C=N[0],S=N[1],y=Object(n.useState)("usertest2"),k=Object(i.a)(y,2),w=k[0],P=k[1],I=Object(n.useState)([]),F=Object(i.a)(I,2),H=F[0],U=F[1];Object(n.useEffect)((function(){setInterval((function(){""!==C&&q(w,C)}),5e3)}));var q=function(e,t){var s="http://localhost:4000/chat/get/"+e+"/"+t;h.get(s).then((function(e){var s=e.data.map((function(e){return{message:e.message,sender:e.sender===t?0:1}}));c(s)}))};if(0!==g)return Object(j.jsxs)("div",{className:"mainContainer",children:[Object(j.jsx)(d,{users:H,page:g,setPage:v}),Object(j.jsx)(O,{logout:function(){v(0)},sender:C,setPage:v}),Object(j.jsx)(u,{page:g,updateUsers:function(e){h.get("http://localhost:4000/user").then((function(t){var s=t.data.map((function(t){return Object(j.jsx)("div",{className:"userCard",onClick:function(){P(t.name),v(0),q(t.name,e)},children:t.name},t.name)}));U(s)}))},setPage:v,sender:C,setSender:S,login:function(e){v(3)}}),Object(j.jsx)(b,{})]});var L=a.a.createRef(),R=a.a.createRef(),B=a.a.createRef(),E=s.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:0==e.sender?"message0":"message1",children:[e.message," "]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O,{logout:function(){S(""),v(0)},sender:C,setPage:v}),Object(j.jsxs)("div",{className:"mainContainer",children:[Object(j.jsx)("div",{className:"container",ref:B,children:Object(j.jsx)("div",{className:"messageContainer",children:E})}),Object(j.jsxs)("div",{className:"innercontainer",children:[Object(j.jsx)("input",{type:"text",className:"messageField",ref:R,onFocus:function(e){},onKeyPress:function(e){"Enter"===e.key&&L.current.click()},onChange:function(e){p(e.target.value)}}),Object(j.jsx)("input",{type:"button",ref:L,className:"sendButton",onClick:function(e){if(!(l.length<1)){!function(e){var t=s.slice();t.push({message:e,sender:0}),c(t)}(l),R.current.value="",p("");var t=B.current,n=t.offsetHeight;!function(e){h.post("http://localhost:4000/chat/post",{message:e,sender:C,receiver:w}).then((function(){}))}(l),alert(C),setTimeout((function(){t.scroll(0,n),n+=100}),100)}},value:"Send"})]}),Object(j.jsx)("div",{className:"name",children:w})]}),Object(j.jsx)(b,{})]})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),m()}},[[40,1,2]]]);
//# sourceMappingURL=main.c898b501.chunk.js.map