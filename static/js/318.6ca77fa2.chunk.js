"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[318],{5376:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var a,r,i,o,s,c,d,l,u,f,p,h,x,m,b,g,Z,v,j=t(9439),y=t(2791),k=t(168),w=t(7691),P=w.ZP.form(a||(a=(0,k.Z)(["\n  width: 500px;\n  padding: 20px;\n  border: 1px solid #454545;\n"]))),C=w.ZP.label(r||(r=(0,k.Z)(["\n  display: block;\n  margin-bottom: 10px;\n"]))),A=w.ZP.p(i||(i=(0,k.Z)(["\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  color: #ffd9db;\n  margin: 2px;\n  font-size: 20px;\n"]))),z=w.ZP.button(o||(o=(0,k.Z)(["\n  width: 100px;\n  height: 30px;\n  margin-top: 15px;\n  border: 1px solid #a7a7a7;\n  border-radius: 10px;\n  background-color: #a7a7a7;\n"]))),_=w.ZP.span(s||(s=(0,k.Z)(["\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  color: #ffd9db;\n"]))),H=w.ZP.input(c||(c=(0,k.Z)(["\n  width: 300px;\n  height: 30px;\n"]))),R=t(9434),F=function(n){return n.contacts.contacts},L=function(n){return n.filter},I=function(n){return n.contacts.isLoading},N=function(n){return n.contacts.error},S=function(n){var e=n.contacts.contacts,t=n.filter;if(!t)return e;var a=t.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(a)}))},T=t(3634),q=t(184),B=function(){var n=(0,y.useState)(""),e=(0,j.Z)(n,2),t=e[0],a=e[1],r=(0,y.useState)(""),i=(0,j.Z)(r,2),o=i[0],s=i[1],c=(0,R.I0)(),d=(0,R.v9)(F),l=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":a(r);break;case"number":s(r);break;default:return}};return(0,q.jsxs)(P,{onSubmit:function(n){if(n.preventDefault(),d.find((function(n){return n.name.toLowerCase()===t.toLowerCase()||n.number===o})))alert("".concat(t," or ").concat(o," is already in contacts."));else{var e={name:t,number:o};c((0,T.uK)(e)),a(""),s("")}},children:[(0,q.jsxs)(C,{children:[(0,q.jsx)(A,{children:"Name"}),(0,q.jsx)(H,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:l})]}),(0,q.jsxs)(C,{children:[(0,q.jsx)(A,{children:"Number"}),(0,q.jsx)(H,{type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:l})]}),(0,q.jsx)(z,{type:"submit",children:(0,q.jsx)(_,{children:"Add contact"})})]})},D=w.ZP.label(d||(d=(0,k.Z)(["\n  justify-content: center;\n"]))),J=w.ZP.p(l||(l=(0,k.Z)(["\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  color: #7f7f7f;\n  font-size: 25px;\n  margin: auto;\n"]))),K=w.ZP.input(u||(u=(0,k.Z)(["\n  width: 250px;\n  height: 30px;\n"]))),E=t(4808),G=function(){var n=(0,R.I0)(),e=(0,R.v9)(L);return(0,q.jsxs)(D,{children:[(0,q.jsx)(J,{children:"Find contacts by name"}),(0,q.jsx)(K,{type:"text",value:e,onChange:function(e){return n((0,E.T)(e.currentTarget.value))}})]})},M=w.ZP.div(f||(f=(0,k.Z)(["\n  display: flex;\n"]))),$=w.ZP.ul(p||(p=(0,k.Z)(["\n  list-style: none;\n"]))),O=w.ZP.li(h||(h=(0,k.Z)(["\n  display: flex;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-size: 25px;\n  margin-bottom: 15px;\n  justify-items: center;\n"]))),Q=w.ZP.button(x||(x=(0,k.Z)(["\n  width: 60px;\n  height: 25px;\n  margin-left: 15px;\n  border: 1px solid #a7a7a7;\n  border-radius: 10px;\n  background-color: #a7a7a7;\n"]))),U=w.ZP.span(m||(m=(0,k.Z)(["\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  color: #ffd9db;\n"]))),V=function(){var n=(0,R.I0)(),e=(0,R.v9)(S);return(0,q.jsx)(M,{children:(0,q.jsx)($,{children:e.map((function(e){return(0,q.jsxs)(O,{children:[e.name,": ",e.number,(0,q.jsx)(Q,{onClick:function(){return n((0,T.GK)(e.id))},children:(0,q.jsx)(U,{children:"Delete"})})]},e.id)}))})})},W=t(5243),X=t.p+"static/media/backround-image-open.30ab53793c39c596f207.jpg",Y=w.ZP.div(b||(b=(0,k.Z)(["\n  width: 100%;\n  height: 85vh;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  @media screen and (max-width: 1199px) {\n    background-position: center;\n  }\n  @media screen and (min-width: 1200px) {\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: 100%;\n  }\n"])),X,X),nn=w.ZP.div(g||(g=(0,k.Z)(["\n  display: flex;\n  margin: auto;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0;\n  @media (min-width: 1200px) {\n    width: 560px;\n    &:not(:last-child) {\n      margin-right: 20px;\n    }\n  }\n"]))),en=w.ZP.h1(Z||(Z=(0,k.Z)(["\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  color: #ffd9db;\n"]))),tn=w.ZP.h2(v||(v=(0,k.Z)(["\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  color: #ffd9db;\n"]))),an=function(){var n=(0,R.I0)(),e=(0,R.v9)(I),t=(0,R.v9)(N);return(0,y.useEffect)((function(){n((0,T.yF)())}),[n]),(0,q.jsx)(Y,{children:(0,q.jsxs)(nn,{children:[(0,q.jsx)(en,{children:"Phonebook"}),t&&(0,q.jsx)("p",{children:t}),(0,q.jsx)(B,{}),(0,q.jsx)(tn,{children:"Contacts"}),(0,q.jsx)(G,{}),e&&(0,q.jsx)(W.CJ,{height:"100",width:"100",color:"#FF99B3"}),(0,q.jsx)(V,{})]})})}}}]);
//# sourceMappingURL=318.6ca77fa2.chunk.js.map